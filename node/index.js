//--------------------------------------------------------- start config node -------------------------------------------------------------------
require("dotenv").config();
// process.env.DB_SERVER
const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

var mysql = require("mysql");
var db = mysql.createConnection({
  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(83, () => {
  console.log("Start server at port 83.");
});
//--------------------------------------------------------- end config node -------------------------------------------------------------------

//--------------------------------------------------------- start GET -------------------------------------------------------------------
// --------------- start GET ret_detail_list -------------------------------
app.get("/ret_detail_list", (req, res) => {
  let sql = "SELECT * FROM ret_detail_list;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end GET ret_detail_list --------------------------------


// --------------- start GET ret_detail_sub_type -------------------------------
app.get("/ret_detail_sub_type", (req, res) => {
  let sql = "SELECT * FROM ret_detail_sub_type;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end GET ret_detail_sub_type --------------------------------


// --------------- start GET ret_wallet -------------------------------
app.get("/ret_wallet", (req, res) => {
  let sql = "SELECT * FROM ret_wallet;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end GET ret_wallet --------------------------------


// --------------- start GET ret_user -------------------------------
app.get("/ret_user", (req, res) => {
  let sql = "SELECT * FROM ret_user;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end GET ret_user --------------------------------


// --------------- start GET ret_wallet_detail_list -------------------------------
app.get("/ret_wallet_detail_list", (req, res) => {
  let sql = "SELECT * FROM ret_wallet_detail_list;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end GET ret_wallet_detail_list --------------------------------
//-------------------------------------------------------- end GET ------------------------------------------------------------------


//-------------------------------------------------------- start POST ------------------------------------------------------------------
// --------------- start POST ret_detail_list -------------------------------
app.post("/ret_detail_list", (req, res) => {
  let sql = "SELECT * FROM ret_detail_list;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_detail_list --------------------------------


// --------------- start POST ret_detail_sub_type -------------------------------
app.post("/ret_detail_sub_type", (req, res) => {
  let sql = "SELECT * FROM ret_detail_sub_type;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_detail_sub_type --------------------------------


// --------------- start POST ret_wallet -------------------------------
app.post("/ret_wallet", (req, res) => {
  let sql = "SELECT * FROM ret_wallet;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_wallet --------------------------------


// --------------- start POST ret_user -------------------------------
app.post("/ret_user", (req, res) => {
  let sql = "SELECT * FROM ret_user;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_user --------------------------------


// --------------- start POST ret_wallet_detail_list -------------------------------
app.post("/ret_wallet_detail_list", (req, res) => {
  let sql = "SELECT * FROM ret_wallet_detail_list;";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_wallet_detail_list --------------------------------
//-------------------------------------------------------- end POST ------------------------------------------------------------------