export default function handler(req, res) {
  // slug example: tiger-9xA3
  const slug = req.query.slug || "";

  // 🔗 Final redirect (Human)
  res.writeHead(302, {
    Location: "https://screeninsiderhub.blogspot.com"
  });
  res.end();
}
