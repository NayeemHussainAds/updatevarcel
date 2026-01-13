export default function handler(req, res) {
  const ua = (req.headers['user-agent'] || '').toLowerCase();

  const isFacebookBot =
    ua.includes('facebookexternalhit') ||
    ua.includes('facebot') ||
    ua.includes('instagram') ||
    ua.includes('whatsapp') ||
    ua.includes('threads');

  // slug example: tiger-9xA3
  const slug = req.query.slug || "";
  const label = slug.split("-")[0];

  // 🖼️ Image map
  const imageMap = {
    tiger: "https://blogger.googleusercontent.com/img/.../Tiger.jpg",
    jawan: "https://blogger.googleusercontent.com/img/.../Jawan.jpg",
    modi:  "https://blogger.googleusercontent.com/img/.../Modi.jpg"
  };

  // Cache-bypass for FB
  const imageURL = (imageMap[label] || imageMap.tiger) + "?cb=" + Date.now();

  // 🤖 FB BOT → preview only
  if (isFacebookBot) {
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <html>
        <head>
          <meta property="og:title" content="&#8203;" />
          <meta property="og:description" content="" />
          <meta property="og:image" content="${imageURL}" />
        </head>
        <body></body>
      </html>
    `);
    return;
  }

  // 🧑 HUMAN → redirect endpoint
  res.writeHead(302, {
    Location: `/api/r/${slug}`
  });
  res.end();
}
