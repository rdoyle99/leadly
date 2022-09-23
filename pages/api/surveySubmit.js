export default async function emailSubmit(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  let url =
    "https://api.sheety.co/5bf726cf58419443d2acaa0c792d7063/personalSiteEmails/sheet3";
  let body = {
    sheet3: {
      name,
      email,
    },
  };

  try {
    const data = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    res.status(200).json({ name });
  } catch (e) {
    console.log(e);
    res.status(400);
  }
}
