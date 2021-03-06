const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    fullName: String
    email: String
    groupSpeciality: String
    isCoach: Boolean
    city: String!
    events: [Event]
    
  }
  type Event {
    _id: ID
    title: String
    description: String
    location: String
    timeSlot: String
    duration: Int
    ownerID: ID
    participants: [User]
  }
  input EventInput {
    title: String
    description: String
    location: String
    timeSlot: String
    duration: Int
    ownerID: ID
  }
  type Auth {
    token: ID!
    user: User!
  }
  type Query {
    users: [User]
    user(id: ID): User
    event(id: ID): Event
    events: [Event]
  }
  

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, groupSpecialty: String, isCoach: Boolean!, city: String!): Auth
    addEvent(eventInput: EventInput): Event
  }
  `;
// Added mutation for login and adduser (From Class Module 21) will see if this is usable.


module.exports = typeDefs;
