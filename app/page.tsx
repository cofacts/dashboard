import { gql, graphql } from '@/app/lib/gql';

async function getData() {
  return gql(
    graphql(/* GraphQL */ `
      query LoadAPIStats($bar: Boolean!) {
        allArticles: ListArticles @skip(if: $bar) {
          totalCount
        }
        allRepliedArticles: ListArticles {
          totalCount
        }
        articlesHasUsefulReplies: ListArticles {
          totalCount
        }
      }
    `),
    { bar: false },
    { next: { revalidate: 10 /* Only cache for 10 seconds */ } }
  );
}

export default async function Home() {
  const resp = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(resp)}
    </main>
  );
}
