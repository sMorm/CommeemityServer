export default {
  Query: {
    getPost: (parent, { id }, { models }) => models.User.findOne({ where: { id }}),
  },
  Mutation: {
    createPost: (parent, args, { models }) => 'createPost'
  }
}