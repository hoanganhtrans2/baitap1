const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;
const sinhvienRoutes = require("./routes/sinhvien.routes");

require("dotenv").config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.use("/sinhvien", sinhvienRoutes);

app.listen(port, () => {
  console.log(`Api listening at http://localhost:${port}`);
});
