import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers'
import typeDefs from './schema'

// https://github.com/apollographql/graphql-tools
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const PORT = process.env.PORT || 8080
const app = express()

const gqlEndpoint = '/graphql'

app.use(gqlEndpoint , bodyParser.json(), graphqlExpress({ schema }))

// get endpoint from above endpoint
app.use('/graphiql', graphiqlExpress({ endpointURL: gqlEndpoint }))

app.listen(PORT)