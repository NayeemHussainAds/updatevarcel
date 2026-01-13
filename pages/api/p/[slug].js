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
    marry: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_1E2D6amjZ8Bt-A2ld-vgjK7yE3cBWBTapA2VAST8N34i1f0hKOpICl3UvzXgZy-hriXAAFp_P7iwbiFJ_9_LC6AcufLNdTmOsJ9l7o0j4z8Ph6sIjOf3uw31mX7T0WUQr3QB5dLLc_-Osw-FZjXexRt-b4403Gb_S89Crme3zQF8NhuUk-BNlaOY8u-2/w640-h386/1A7F79D0-A981-47DA-B1E0-D3851824009D-780x470-1.jpeg",
    jawan: "https://blogger.googleusercontent.com/img/.../Jawan.jpg",
    mod:  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4vyWL6EJrmdmh5IOmt7cGz-GpxdLFgF5qHJTMzRFF0Rma1014mNEKrY8xdgkl952JsVR8HHdYHrlS5lqyFOp79YYzz4EGXCBO7C1Ah1TjMXvu1_4P2d_Zgw5UhBk-fNBmCS32gT4QlbGAxh308MgcUbevLfYoeqdlJ8XnFnFHSs2QjDAiWodQLAMa4E0/w640-h360/Tiger%203%20(1).jpg"
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
