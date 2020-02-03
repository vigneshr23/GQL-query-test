const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Message from GQL.,'
    }
}


const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 4001 }).then(({ url }) => console.log("Running at: " + url));