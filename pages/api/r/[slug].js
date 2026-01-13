export default function handler(req, res) {
  res.writeHead(302, {
    Location: "https://screeninsiderhub.blogspot.com"
  });
  res.end();
}
