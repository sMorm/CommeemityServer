import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { config } from 'dotenv'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

// Objection.js + Knex
import Knex from 'knex' 
import { Model } from 'objection'
import knexConfig from './knexfile'
import models from './models'

// Schemas + Resolvers
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')))
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')))

const knex = Knex(knexConfig.development)
Model.knex(knex)

config() // load .env files
const schema = makeExecutableSchema({ typeDefs, resolvers })

const PORT = process.env.PORT || 8080
const app = express()

const gqlEndpoint = '/graphql'

const gqlExpress = {
  schema,
  context: { models }
}

app.use(gqlEndpoint, bodyParser.json(), graphqlExpress(gqlExpress))

app.use('/graphiql', graphiqlExpress({ endpointURL: gqlEndpoint }))

app.listen(PORT)