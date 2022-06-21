import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oblf6w1qnu01z23xzde2y0/master',
    cache: new InMemoryCache()
})