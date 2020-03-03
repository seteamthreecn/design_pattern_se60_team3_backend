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

// --------------- start POST insert_user -------------------------------
app.post("/insert_user", (req, res) => {
  let sql =
    "INSERT INTO `ret_user`(user_id ,user_username, user_password, user_fname, user_lname, user_phone_no, user_email, user_guid_img)VALUES(NULL,'" +
    req.body.user_username +
    "','" +
    req.body.user_password +
    "','" +
    req.body.user_fname +
    "','" +
    req.body.user_lname +
    "','" +
    req.body.user_phone_no +
    "','" +
    req.body.user_email +
    "','" +
    req.body.user_guid_img +
    "');";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST insert_user --------------------------------

// --------------- start POST insert_detail_sub_type -------------------------------
app.post("/insert_detail_sub_type", (req, res) => {
  let sql =
    "INSERT INTO `ret_detail_sub_type`(dts_id  ,dts_name)VALUES(NULL,'" +
    req.body.dts_name +
    "');";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ----------------- end POST insert_detail_sub_type ---------------------------------

// --------------- start POST insert_detail_list -------------------------------
app.post("/insert_detail_list", (req, res) => {
  let sql =
    "INSERT INTO `ret_detail_list`(dtl_id  ,dtl_amount, dtl_date, dtl_type, dtl_dts_id)VALUES(NULL," +
    req.body.dtl_amount +
    ",'" +
    req.body.dtl_date +
    "','" +
    req.body.dtl_type +
    "'," +
    req.body.dtl_dts_id +
    ");";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ----------------- end POST insert_detail_list ---------------------------------

// --------------- start POST insert_wallet -------------------------------
app.post("/insert_wallet", (req, res) => {
  let sql =
    "INSERT INTO `ret_wallet`(wall_id   ,wall_total, wall_note, wall_grade, wall_user_id )VALUES(NULL," +
    req.body.wall_total +
    ",'" +
    req.body.wall_note +
    "','" +
    req.body.wall_grade +
    "'," +
    req.body.wall_user_id +
    ");";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ----------------- end POST insert_wallet ---------------------------------

// --------------- start POST insert_wallet_detail_list -------------------------------
app.post("/insert_wallet_detail_list", (req, res) => {
  let sql =
    "INSERT INTO `ret_wallet_detail_list`(wall_id   ,dtl_id )VALUES(" +
    req.body.wall_id +
    "," +
    req.body.dtl_id +
    ");";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ----------------- end POST insert_wallet_detail_list ---------------------------------

// --------------- start POST ret_user by user_username -------------------------------
app.post("/ret_user_by_user_username", (req, res) => {
  let sql =
    "SELECT * FROM `ret_user` WHERE user_username  LIKE '" +
    req.body.user_username +
    "';";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_user by user_name --------------------------------

// --------------- start POST ret_user by user_id -------------------------------
app.post("/ret_user_by_user_id", (req, res) => {
  let sql =
    "SELECT * FROM `ret_user` WHERE user_id = " + req.body.user_id + ";";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_user by user_id --------------------------------

// --------------- start POST insert_user -------------------------------
app.post("/update_ret_user", (req, res) => {
  let sql =
    "UPDATE `ret_user` SET `user_username`='" +
    req.body.user_username +
    "',`user_fname`='" +
    req.body.user_fname +
    "',`user_lname`='" +
    req.body.user_lname +
    "',`user_email`='" +
    req.body.user_email +
    "' WHERE `user_id` = " +
    req.body.user_id +
    ";";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST insert_user --------------------------------

//-------------------------------------------------------- end POST ------------------------------------------------------------------
