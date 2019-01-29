// const express = require('express');
const db = require('../config');
const nodemailer = require("nodemailer");
const graphql = require('graphql');
const _= require('lodash');


const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = graphql;

let Cabs = [];
db.query("select * from cabs", (err, result) => {
    if(err) throw err;
    Cabs = result;
})

let Bookings = [];
db.query("select * from bookings", (err, result) => {
    if(err) throw err;
    Bookings = result;
})

const CabType = new GraphQLObjectType({
    name: 'cab',
    fields: () => ({
        cid: {type: GraphQLInt},
        model: {type: GraphQLString},
        type: {type: GraphQLString},
        rate: {type: GraphQLInt},
        image: {type: GraphQLString},
        wifi: {type: GraphQLInt},
        e_luggage: {type: GraphQLInt},
        e_seats: {type: GraphQLInt},
        cashless: {type: GraphQLInt},
        AC: {type: GraphQLInt},
        bookings: {
            type: new GraphQLList(BookingType),
            resolve(parent,args){
                return _.filter(Bookings, {cab_id: parent.cid});
            }
        }

    })
});

const BookingType = new GraphQLObjectType({
    name: 'bookings',
    fields: () => ({
        b_id: {type: GraphQLInt},
        uname: {type: GraphQLString},
        email: {type: GraphQLString},
        b_date: {type: GraphQLString},
        cab: {
            type: CabType,
            resolve(parent, args){
                // console.log(parent);
                return _.find(Cabs, {cid: parent.cab_id});
            }
        }
    })

});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        cab: {
            type: CabType,
            args:{ id: {type: GraphQLInt} },
            resolve(parent, args){
                return _.find(Cabs, {cid: args.id});
                
            }
        },
        booking: {
            type: BookingType,
            args: {id: {type: GraphQLInt}},
            resolve(parent, args){
                return _.find(Bookings, {b_id: args.id});
            }
        },
        cabs: {
            type: new GraphQLList(CabType),
            resolve(parent, args) {
               return Cabs;
            }
        },
        bookings:{
            type: new GraphQLList(BookingType),
            resolve(parent, args){
                return Bookings;
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addBooking: {
            type: BookingType,
            args: {
                uname: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                b_date: {type: new GraphQLNonNull(GraphQLString)},
                cab_id: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args){
                let values = [args.uname, args.email, args.b_date, args.cab_id];
                // let res =  [];
                db.query("insert into bookings (uname, email, b_date, cab_id) values(?,?,?,?)",values, function(err,result) {
                    if(err) {
                      console.log('Data Error in insertion');
                    }
                    // console.log(result.insertId);
                    db.query("Select b.b_id, b.uname, b.email, b.b_date, c.model, c.type, c.rate from bookings b,cabs c where c.cid=b.cab_id and b.b_id = ?",[result.insertId], function(err, response){
                        if(err) {
                          console.log('Error in Data Retriving from DB')
                        }
                        
                        let smtpTransport = nodemailer.createTransport({
                            service: "gmail",
                            host: "smtp.gmail.com",
                            port: 587,
                            secure: false,
                            auth: {
                                user: 'project.jobapp@gmail.com', 
                                pass: 'jobapp?webguru??'
                            }
                        }); 
                        // setup email data with unicode symbols
                        let mailOptions = {
                            from:"project.jobapp@gmail.com", // sender address
                            to: response[0].email, // list of receivers
                            subject: "Confirmation Booking For "+ response[0].uname, // Subject line
                            text: "Dear Sir,\n" + "Thank You for booking cabs with us.\n\n" + "Your "+ response[0].model +
                            " model has been booked with booking id " + response[0].b_id + " on " + response[0].b_date + "\n\n"+
                            "Booking Cab type will be " + response[0].type + " and fare will be calculated as ₹ " + response[0].rate + "/hour.\n"
                            
                        };
                        
                        // send mail with defined transport object
                        smtpTransport.sendMail(mailOptions, function (err, info) {
                            if(err)
                            console.log('Sendmail Problem');
                            else
                            console.log('Email Sent..!');
                        });
                        // res = response[0];
                    });
                });
                // return res;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})