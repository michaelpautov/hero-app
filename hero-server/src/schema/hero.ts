import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import { IHero } from '../class/hero';

import { getHeroes, addHero, editHero, removeHero } from '../db/heroes';


const heroType = new GraphQLObjectType({
  name: 'Hero',
  description: 'Hero',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'ID',
    },
    name: {
      type: GraphQLString,
      description: 'The name',
    },
    ability: {
      type: GraphQLString,
      description: 'Hero\'s ability',
    },
  }),
});

const query = {
  heroes: {
    type: new GraphQLList(heroType),
    args: {
      limit: {
        description: 'limit items in the results',
        type: GraphQLInt,
      }
    },
    resolve: (root, { limit }) => getHeroes(limit)
  },
};

const mutation = {
  addHero: {
    type: heroType,
    args: {
      name: {
        type: GraphQLString,
      },
      ability: {
        type: GraphQLString,
      },
    },
    resolve: (obj, input: IHero) => addHero(input)
  },
  editHero: {
    type: heroType,
    args: {
      id: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString,
      },
      ability: {
        type: GraphQLString,
      }
    },
    resolve: (obj, input: IHero) => editHero(input)
  },
  removeHero: {
    type: heroType,
    args: {
      id: {
        type: GraphQLString,
      }
    },
    resolve: (obj, input) => removeHero(input.id)
  }
};

export const HeroSchema = {
  query,
  mutation,
  types: [heroType]
};
