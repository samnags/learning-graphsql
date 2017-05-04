const graphql = require ('graphql')
const _ = require('lodash')

// Bringing in specific properties using destructuring
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql

const users = [
    { id: '23', firstName: 'Janessa', age: 20},
    { id: '62', firstName: 'Mark', age: 43},
]


// Instructs GraphQL about what properties a user should have
const UserType = new GraphQLObjectType({
    name: 'User', // capitalize 
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
})

// GraphQL needs a root query for entry point into data
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // saying that you can ask about a user if you give me an id
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            // Resolve needs to go grab data
            // parentValues is seldom used
            // args gets called with whatever args were originally provided above
            resolve(parentValues, args) {
                return _.find(users, { id: args.id });
            }
        }
    }
})
