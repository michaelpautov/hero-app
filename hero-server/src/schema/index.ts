import {
    GraphQLSchema,
    GraphQLObjectType,
} from 'graphql';

// Import each models schema
import { HeroSchema } from './hero';

export const graphqlSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => Object.assign(
      HeroSchema.query,
    )
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => Object.assign(
      HeroSchema.mutation,
    )
  }),
  types: [
    ...HeroSchema.types,
  ]
});
