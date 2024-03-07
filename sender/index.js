const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const resp = await fetch(process.env.RECEIVER);
  const data = await resp.json();
  res.send(data);
});

app.post("/", async (req, res) => {
  const resp = await fetch(process.env.RECEIVER, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "A post message was sent." }),
  });
  const data = await resp.json();
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Sender service running on Port: ${PORT}.`);
});
