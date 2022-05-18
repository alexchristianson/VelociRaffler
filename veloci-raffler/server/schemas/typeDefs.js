const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    username: String
    raffleTickets: Int
  }

  type Raffle {
    _id: ID!
    name: String
    description: String
    image: String
    bucketArray: [String]
  }

  type Ticket {
    _id: ID!
    username: User
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    raffleTickets(username: String): Int
    raffles: [Raffle]
  }


  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, username: String!, password: String!): Auth
    addTicket(raffleId: String!): Ticket
  }
`;

module.exports = typeDefs;
