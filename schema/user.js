export default `
  type Query {
    test: String!
    getUser(id: Int!): User
  }

  type User {
    id: Int!
    username: String!
    firstname: String!
    lastname: String!
    email: String!
  }

  type Mutation {
    signup(username: String!, firstname: String!, lastname: String!, email: String!, password: String!): SignupResponse!
  }

  type SignupResponse {
    success: Boolean!
    user: User
    errors: [Error!]
  }
`