import { request, gql } from 'graphql-request';
import { graphql } from '@/typegen/gql';

const query = graphql(`
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
`);

export default async function Home() {

  const resp = await request(process.env.COFACTS_API_URL ?? '', query);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(resp)}
    </main>
  );
}
