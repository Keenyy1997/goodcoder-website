import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://3.21.10.65"

export const apolloClient = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
});
 
export default withApollo(apolloClient);
