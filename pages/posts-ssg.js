import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      posts: [
        { id: 1, title: "Getting started with Next.js", author: "Asha" },
        { id: 2, title: "Understanding SSG vs SSR", author: "Ravi" },
      ],
      builtAt: new Date().toISOString(),
    },
  };
}

export default function PostsSSG({ posts, builtAt }) {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Posts (SSG)</h1>
      <p>Page built at: <strong>{builtAt}</strong></p>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title} by {p.author}</li>
        ))}
      </ul>
      <Link href="/">← Home</Link>
    </main>
  );
}
