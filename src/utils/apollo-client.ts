import { InMemoryCache, ApolloClient } from "@apollo/client/core";

export const apolloClient = new ApolloClient({
  ssrMode: true,
  uri: `${import.meta.env.CMS_URL}/graphql`,
  cache: new InMemoryCache(),
});
