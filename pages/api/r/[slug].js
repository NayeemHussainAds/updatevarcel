export default function handler(req, res) {
  const slug = req.query.slug || ""; // Safety
  const label = slug.split("-")[0]; // tiger-ABC123 → "tiger"

  // Human redirect map
  const redirectMap = {
    marry: "https://t.co/oST3ruUh2B",
    name: "https://t.me/yourchannel/123",
    name3: "https://t.me/yourchannel/123",
    namr2: "https://t.me/yourchannel/123",
    name4: "https://t.me/yourchannel/123",
    name6: "https://t.me/yourchannel/123",
    mod: "https://www.youtube.com/"
  };

  // যদি match না করে default redirect
  const redirectURL = redirectMap[label] || "https://screeninsiderhub.blogspot.com";

  res.writeHead(302, { Location: redirectURL });
  res.end();
}
