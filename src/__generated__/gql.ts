/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query BlogContent {\n    posts {\n      edges {\n        node {\n          id\n          slug\n          title\n          content\n          acf {\n            description\n          }\n          date\n          modified\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n": types.BlogContentDocument,
    "\n  query BlogListing {\n    posts {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n": types.BlogListingDocument,
    "\n  query IndexMain {\n    siteSettings {\n      frontpage {\n        about\n        hero_image {\n          url\n        }\n        seo_description\n      }\n    }\n    shelfItems {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n              srcSet\n            }\n          }\n        }\n      }\n    }\n    posts {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n": types.IndexMainDocument,
    "\n  query ShelfContent {\n    shelfItems {\n      edges {\n        node {\n          id\n          slug\n          title\n          content\n          acf {\n            description\n          }\n          date\n          modified\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ShelfContentDocument,
    "\n  query ShelfListing {\n    shelfItems {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n              srcSet\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ShelfListingDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BlogContent {\n    posts {\n      edges {\n        node {\n          id\n          slug\n          title\n          content\n          acf {\n            description\n          }\n          date\n          modified\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BlogContent {\n    posts {\n      edges {\n        node {\n          id\n          slug\n          title\n          content\n          acf {\n            description\n          }\n          date\n          modified\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BlogListing {\n    posts {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BlogListing {\n    posts {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query IndexMain {\n    siteSettings {\n      frontpage {\n        about\n        hero_image {\n          url\n        }\n        seo_description\n      }\n    }\n    shelfItems {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n              srcSet\n            }\n          }\n        }\n      }\n    }\n    posts {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query IndexMain {\n    siteSettings {\n      frontpage {\n        about\n        hero_image {\n          url\n        }\n        seo_description\n      }\n    }\n    shelfItems {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n              srcSet\n            }\n          }\n        }\n      }\n    }\n    posts {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ShelfContent {\n    shelfItems {\n      edges {\n        node {\n          id\n          slug\n          title\n          content\n          acf {\n            description\n          }\n          date\n          modified\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ShelfContent {\n    shelfItems {\n      edges {\n        node {\n          id\n          slug\n          title\n          content\n          acf {\n            description\n          }\n          date\n          modified\n          featuredImage {\n            node {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ShelfListing {\n    shelfItems {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n              srcSet\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ShelfListing {\n    shelfItems {\n      edges {\n        node {\n          id\n          slug\n          title\n          acf {\n            description\n          }\n          date\n          featuredImage {\n            node {\n              sourceUrl\n              srcSet\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;