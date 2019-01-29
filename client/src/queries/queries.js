import { gql } from 'apollo-boost';

const getCabsQuery = gql`
{
  cabs{
    cid
    model
    type
    image
    rate
    AC
    wifi
    cashless
    e_luggage
    e_seats
  }
}
`
const addBookingMutation = gql`
    mutation($uname: String!,$email: String!,$b_date: String!, $cab_id: Int!){
        addBooking(uname: $uname,email: $email,b_date: $b_date, cab_id: $cab_id){
            b_id
        }
    }
`

export {getCabsQuery, addBookingMutation};