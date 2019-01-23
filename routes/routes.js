var express = require("express"),
    nodemailer = require("nodemailer");
   

  router = express.Router();


router.get("/cabs", (req, res) => {
  if (req) {
    db.query("SELECT * FROM cabs", function (err, result) {
      if (err) throw err;

      res.send(result);
    });
  }

});


router.post("/booking", (req, res) => {
    const uname = req.body.uname;
    const email = req.body.email;
    const b_date = req.body.b_date;
    const cab_id = req.body.cab_id;
    // let bookid = null;
    
        db.query("insert into bookings (uname, email, b_date, cab_id) values(?,?,?,?)",[uname, email, b_date, cab_id], function(err,result) {
          if(err) {
            console.log('Data Error in insertion');
          }
          
          // console.log(result.insertId);
          db.query("Select b.b_id, b.uname, b.email, b.b_date, c.model, c.type, c.rate from bookings b,cabs c where c.cid=b.cab_id and b.b_id = ?",[result.insertId], function(err, response){
            if(err) {
              console.log('Error in Data Retriving from DB')
            }
            // console.log(response[0].b_date);
            res.end(toString(response[0].b_id));

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


            });
      });     
});









module.exports = router;
