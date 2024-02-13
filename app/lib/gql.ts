import { GraphQLClient } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
export { graphql } from '@/typegen/gql';

/**
 * @param operation
 * @param variables - the variables for the operation
 * @param fetchOptions - the options for NextJS's fetch
 * @returns graphql-request's request result
 */
export function gql<TData = any, TVariables = Record<string, any>>(
  operation: TypedDocumentNode<TData, TVariables>,
  variables?: TVariables,
  fetchOptions?: Parameters<typeof fetch>[1]
) {
  const client = new GraphQLClient(process.env.COFACTS_API_URL ?? '', {
    fetch: (input, init) => fetch(input, { ...init, ...fetchOptions }),
  });
  return client.request(operation, { ...variables });
}
