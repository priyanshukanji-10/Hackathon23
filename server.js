const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});


const port = 4509;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
