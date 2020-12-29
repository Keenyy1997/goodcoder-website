import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

export const apolloClient = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
});
 
export default withApollo(apolloClient);