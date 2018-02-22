export default `
  type Query {
    getPost(id: Int!): Post!
  }

  type Mutation {
    createPost(text: String!): Post!
  }

  type Post {
    id: Int!
    text: String!
    photos: [String!]
  }
`