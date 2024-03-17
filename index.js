const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// middleware
app.use(express.json());
app.use(cors());
const orderRoute = require("./routes/order.route");

app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use((err, req, res, next) => {
  if (err.message) {
    res.status(500).send(err.message);
  } else {
    res.status(500).send("There was an error");
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
