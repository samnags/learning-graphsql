const express = require('express')
const expressGraphQL = require('express-graphql')

const app = express()

// Telling Express to use graphQL middleware
    // Passing options argument into expressGraphQL
    // We need a schema to pass into options
    // Our Schema file will tell graphQL how relations playout
app.use('/graphql', expressGraphQL({
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Running on port 4000')
})