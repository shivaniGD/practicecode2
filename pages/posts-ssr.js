import Link from "next/link";

export async function getServerSideProps({ req }) {
  // Runs on the server for every request, so fetch needs an absolute URL
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;

  const res = await fetch(`${protocol}://${host}/api/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data.posts,
      apiTime: data.generatedAt,
      renderedAt: new Date().toISOString(),
    },
  };
}

export default function PostsSSR({ posts, apiTime, renderedAt }) {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Posts (SSR)</h1>
      <p>Page rendered at: <strong>{renderedAt}</strong></p>
      <p>API generated at: <strong>{apiTime}</strong></p>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.title} by {p.author}</li>
        ))}
      </ul>
      <Link href="/">← Home</Link>
    </main>
  );
}
