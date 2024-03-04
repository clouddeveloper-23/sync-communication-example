const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.info("GET REQUEST RECEIVED!");
  res.send({ message: "GET request received." });
});

app.post("/", (req, res) => {
  console.info("POST REQUEST RECEIVED!");
  res.send({ message: "POST request received." });
});

app.listen(PORT, () => {
  console.log(`Receiver service running on Port: ${PORT}.`);
});
