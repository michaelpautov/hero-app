import gql from 'graphql-tag';

export const ADD_HERO = gql`
    mutation addHero($name: String!, $ability: String!) {
        addHero(name: $name, ability: $ability) {
            id
            name
            ability
        }
    }
`;

export const EDIT_HERO = gql`
    mutation editHero($id: String!, $name: String!, $ability: String!) {
        editHero(id: $id, name: $name, ability: $ability) {
            id
            name
        }
    }
`;

export const GET_HEROES = gql`
    query GetHeroes {
        heroes {
            id
            name
            ability
        }
    }
`;

export const REMOVE_HERO = gql`
    mutation removeHero($id: String!) {
        removeHero(id: $id) {
            id
            name
            ability
        }
    }
`;
