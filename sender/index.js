const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

async function sendGetRequest() {
  const resp = await fetch(process.env.RECEIVER);
  const data = await resp.json();
  console.log(data);
}

async function sendPostRequest() {
  const resp = await fetch(process.env.RECEIVER, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "A post message was sent." }),
  });
  const data = await resp.json();
  console.log(data);
}

setInterval(async () => {
  try {
    await sendGetRequest();
    await sendPostRequest();
  } catch (error) {
    console.error(error);
  }
}, 1000);

app.listen(PORT, () => {
  console.log(`Sender service running on Port: ${PORT}.`);
});
