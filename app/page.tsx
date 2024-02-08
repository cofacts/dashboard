import { request } from 'graphql-request';
import { graphql } from '@/typegen/gql';

async function getData() {
  return request(process.env.COFACTS_API_URL ?? '', graphql(/* GraphQL */ `
    query LoadAPIStats {
      allArticles: ListArticles {
        totalCount
      }
      allRepliedArticles: ListArticles {
        totalCount
      }
      articlesHasUsefulReplies: ListArticles {
        totalCount
      }
    }
  `));
}

export default async function Home() {

  const resp = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(resp)}
    </main>
  );
}
