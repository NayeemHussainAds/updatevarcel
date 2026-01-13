export default function handler(req, res) {
  const slug = req.query.slug || ""; // Safety
  const label = slug.split("-")[0]; // tiger-ABC123 → "tiger"

  // Human redirect map
  const redirectMap = {
    marry: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_1E2D6amjZ8Bt-A2ld-vgjK7yE3cBWBTapA2VAST8N34i1f0hKOpICl3UvzXgZy-hriXAAFp_P7iwbiFJ_9_LC6AcufLNdTmOsJ9l7o0j4z8Ph6sIjOf3uw31mX7T0WUQr3QB5dLLc_-Osw-FZjXexRt-b4403Gb_S89Crme3zQF8NhuUk-BNlaOY8u-2/w640-h386/1A7F79D0-A981-47DA-B1E0-D3851824009D-780x470-1.jpeg",
    marry: "https://t.me/yourchannel/123",
    marry: "https://t.me/yourchannel/123",
    marry: "https://t.me/yourchannel/123",
    marry: "https://t.me/yourchannel/123",
    marry: "https://t.me/yourchannel/123",
    mod: "https://www.youtube.com/"
  };

  // যদি match না করে default redirect
  const redirectURL = redirectMap[label] || "https://screeninsiderhub.blogspot.com";

  res.writeHead(302, { Location: redirectURL });
  res.end();
}
