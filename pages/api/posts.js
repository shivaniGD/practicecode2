export default function handler(req, res) {
  const posts = [
    { id: 1, title: "Getting started with Next.js", author: "Asha" },
    { id: 2, title: "Understanding SSG vs SSR", author: "Ravi" },
    { id: 3, title: "API routes made simple", author: "Meera" },
  ];

  res.status(200).json({
    posts,
    generatedAt: new Date().toISOString(),
  });
}
