const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.get("/hello", (req, res) => {
  res.send("Hello Express JS");
});

app.get("/user", (req, res) => {
  const { firstName = "Illia", lastName = "Konik" } = req.query;
  res.json({ firstName, lastName });
});

app.post("/user/:firstName/:lastName", (req, res) => {
  const { firstName, lastName } = req.params;
  res.json({ firstName, lastName });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
