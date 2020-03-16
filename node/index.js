//--------------------------------------------------------- start config node -------------------------------------------------------------------
require("dotenv").config();
// process.env.DB_SERVER
const express = require("express");
const app = express();

const multipart = require("connect-multiparty");
const multipartMiddleware = multipart({ uploadDir: "./public" });

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static("public"));

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

db.connect(function (err) {
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

// --------------- start POST ret_detail_sub_type_by_dts_id -------------------------------
app.post("/ret_detail_sub_type_by_dts_id", (req, res) => {
  let sql =
    "SELECT * FROM ret_detail_sub_type WHERE dts_id = " + req.body.dts_id + ";";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_detail_sub_type_by_dts_id --------------------------------

// --------------- start POST ret_detail_sub_type_by_dts_type_id -------------------------------
app.post("/ret_detail_sub_type_by_dts_type_id", (req, res) => {
  let sql =
    "SELECT * FROM ret_detail_sub_type WHERE dts_type_id = " + req.body.dts_type_id + ";";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_detail_sub_type_by_dts_type_id --------------------------------

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

// --------------- start POST ret_wallet (Full option) -------------------------------
app.post("/ret_wallet_full_option", (req, res) => {
  let sql =
    "select" +
    "(" +
    "CASE " +
    " WHEN MONTH(dtl.dtl_date) = 1 THEN 'ม.ค.'" +
    " WHEN MONTH(dtl.dtl_date) = 2 THEN 'ก.พ.'" +
    " WHEN MONTH(dtl.dtl_date) = 3 THEN 'มี.ค.'" +
    " WHEN MONTH(dtl.dtl_date) = 4 THEN 'เม.ย.'" +
    " WHEN MONTH(dtl.dtl_date) = 5 THEN 'พ.ค.'" +
    " WHEN MONTH(dtl.dtl_date) = 6 THEN 'มิ.ย.'" +
    " WHEN MONTH(dtl.dtl_date) = 7 THEN 'ก.ค.'" +
    " WHEN MONTH(dtl.dtl_date) = 8 THEN 'ส.ค.'" +
    " WHEN MONTH(dtl.dtl_date) = 9 THEN 'ก.ย.'" +
    " WHEN MONTH(dtl.dtl_date) = 10 THEN 'ต.ค.'" +
    " WHEN MONTH(dtl.dtl_date) = 11 THEN 'พ.ย.'" +
    " ELSE 'ธ.ค.'" +
    " END" +
    ") AS month_name," +
    "(" +
    "CASE " +
    " WHEN " + req.body.dtl_type + " = 1 THEN 'รายรับ'" +
    " WHEN " + req.body.dtl_type + " = 2 THEN 'รายจ่าย'" +
    " ELSE 'รายรับ - รายจ่าย' " +
    " END" +
    ")as type_list, dtl.dtl_type as dtl_type_id, GROUP_CONCAT(dtl.dtl_description) as name_list, GROUP_CONCAT(dtl.dtl_amount) as amount_list, GROUP_CONCAT(dts.dts_name) as sub_type_list," +
    "GROUP_CONCAT(DAY(dtl.dtl_date)) as day_list, " +
    "GROUP_CONCAT(" +
    "(CASE " +
    "WHEN MONTH(dtl.dtl_date) = 1 THEN 'ม.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 2 THEN 'ก.พ.' " +
    "WHEN MONTH(dtl.dtl_date) = 3 THEN 'มี.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 4 THEN 'เม.ย.' " +
    "WHEN MONTH(dtl.dtl_date) = 5 THEN 'พ.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 6 THEN 'มิ.ย.' " +
    "WHEN MONTH(dtl.dtl_date) = 7 THEN 'ก.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 8 THEN 'ส.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 9 THEN 'ก.ย.' " +
    "WHEN MONTH(dtl.dtl_date) = 10 THEN 'ต.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 11 THEN 'พ.ย.' " +
    "ELSE 'ธ.ค.'" +
    "END)" +
    ") as month_list, " +
    "GROUP_CONCAT(YEAR(dtl.dtl_date)) as year_list," +
    "GROUP_CONCAT(dtl.dtl_type) as dtl_type_list," +
    " GROUP_CONCAT(dtl.dtl_id) as id_list" +
    " from `ret_wallet` as w" +
    " left join `ret_user` as u" +
    " on w.wall_user_id = u.user_id" +
    " left join `ret_detail_list` as dtl" +
    " on w.wall_dtl_id = dtl.dtl_id" +
    " left join `ret_detail_sub_type` as dts" +
    " on dtl.dtl_dts_id = dts.dts_id" +
    " where MONTH(dtl.dtl_date) = " +
    req.body.dtl_month +
    " and " +
    " YEAR(dtl.dtl_date) = " +
    req.body.dtl_year +
    " and " +
    "IF(" +
    req.body.dtl_type +
    " = 0, dtl.dtl_type = 1 OR dtl.dtl_type = 2, dtl.dtl_type = " +
    req.body.dtl_type +
    ")" + 
    " and " + 
    "w.wall_user_id = " + req.body.wall_user_id +  
    ";";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_wallet (Full option) --------------------------------

// ---------------- start POST upload file --------------------------------
app.post("/upload", multipartMiddleware, (req, res) => {
  var img_guid = req.files.uploads[0].path.substring(7);
  var img_data = req.files.uploads[0].name;
  var img_name = img_data.split("//")[1];
  var user_id = img_data.split("//")[0];
  let sql =
    "UPDATE `ret_user` SET `user_guid_img`='" +
    img_guid +
    "' WHERE `user_id` = " +
    user_id +
    ";";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST upload file --------------------------------

// --------------- start POST insert_ret_detail_list -------------------------------
app.post("/insert_ret_detail_list", (req, res) => {
  let sql =
    "INSERT INTO ret_detail_list (dtl_amount, dtl_date, dtl_type, dtl_dts_id, dtl_description) VALUES ('" +
    req.body.dtl_amount +
    "', '" +
    req.body.dtl_date +
    "', '" +
    req.body.dtl_type +
    "', '" +
    req.body.dtl_dts_id +
    "', '" +
    req.body.dtl_description +
    "');";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST update_ret_detail_list --------------------------------

// --------------- start POST update_ret_detail_list -------------------------------
app.post("/update_ret_detail_list", (req, res) => {
  let sql =
    "UPDATE ret_detail_list SET dtl_amount = '" +
    req.body.dtl_amount +
    "', dtl_date = '" +
    req.body.dtl_date +
    "', dtl_description = '" +
    req.body.dtl_description +
    "', dtl_type = " +
    req.body.dtl_type +
    ", dtl_dts_id = " +
    req.body.dtl_dts_id +
    " WHERE dtl_id = " + req.body.dtl_id + ";";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST update_ret_detail_list --------------------------------

// --------------- start POST delete_ret_detail_list -------------------------------
app.post("/delete_ret_detail_list", (req, res) => {
  let sql =
    "DELETE FROM ret_detail_list WHERE (dtl_id = '" + req.body.dtl_id + "');";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST delete_ret_detail_list --------------------------------

// --------------- start POST ret_detail_list_by_dtl_id -------------------------------
app.post("/ret_detail_list_by_dtl_id", (req, res) => {
  let sql =
    "SELECT dtl.dtl_id , dtl.dtl_amount, DAY(dtl.dtl_date) as dtl_day, (YEAR(dtl.dtl_date) + 543) as dtl_year, dtl.dtl_dts_id , dtl.dtl_description, dtl.dtl_type, " +
    "(CASE " +
    "WHEN MONTH(dtl.dtl_date) = 1 THEN 'ม.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 2 THEN 'ก.พ.' " +
    "WHEN MONTH(dtl.dtl_date) = 3 THEN 'มี.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 4 THEN 'เม.ย.' " +
    "WHEN MONTH(dtl.dtl_date) = 5 THEN 'พ.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 6 THEN 'มิ.ย.' " +
    "WHEN MONTH(dtl.dtl_date) = 7 THEN 'ก.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 8 THEN 'ส.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 9 THEN 'ก.ย.' " +
    "WHEN MONTH(dtl.dtl_date) = 10 THEN 'ต.ค.' " +
    "WHEN MONTH(dtl.dtl_date) = 11 THEN 'พ.ย.' " +
    "ELSE 'ธ.ค.'" +
    "END)" +
    " as dtl_month, dts.dts_name as dtl_dts_name , dtl.dtl_date , " +
    "(CASE " +
    " WHEN dtl.dtl_type = 1 THEN 'รายรับ'" +
    " WHEN dtl.dtl_type = 2 THEN 'รายจ่าย'" +
    " ELSE 'รายรับ - รายจ่าย' " +
    " END) as dtl_type_name " +
    "FROM ret_detail_list as dtl " +
    "left join `ret_detail_sub_type` as dts " +
    "on dtl.dtl_dts_id = dts.dts_id " +
    "WHERE (dtl_id = '" + req.body.dtl_id + "');";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_detail_list_by_dtl_id --------------------------------

// --------------- start POST ret_detail_list_static_income -------------------------------
app.post("/ret_detail_list_static_month", (req, res) => {
  // console.log(req.body.user_id);
  let sql =
    "SELECT (CASE WHEN MONTH(dtl.dtl_date) = 1 THEN 'มกราคม' WHEN MONTH(dtl.dtl_date) = 2 THEN 'กุมภาพันธ์' WHEN MONTH(dtl.dtl_date) = 3 THEN 'มีนาคม' WHEN MONTH(dtl.dtl_date) = 4 THEN 'เมษายน' WHEN MONTH(dtl.dtl_date) = 5 THEN 'พฤษภาคม' WHEN MONTH(dtl.dtl_date) = 6 THEN 'มิถุนายน' WHEN MONTH(dtl.dtl_date) = 7 THEN 'กรกฎาคม' WHEN MONTH(dtl.dtl_date) = 8 THEN 'สิงหาคม' WHEN MONTH(dtl.dtl_date) = 9 THEN 'กันยายน' WHEN MONTH(dtl.dtl_date) = 10 THEN 'ตุลาคม' WHEN MONTH(dtl.dtl_date) = 11 THEN 'พฤศจิกายน' ELSE 'ธันวาคม' END) AS month_name, (CASE WHEN dtl.dtl_type = 1 THEN 'รายรับ' ELSE 'รายจ่าย' END )as type_list,SUM(dtl.dtl_amount) as amount FROM `ret_detail_list` as dtl LEFT JOIN ret_wallet as wall ON dtl.dtl_id = wall.wall_dtl_id WHERE wall.wall_user_id = '" +
    req.body.user_id +
    "' GROUP BY MONTH(dtl.dtl_date),type_list ORDER by MONTH(dtl.dtl_date),dtl_type";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_detail_list_static_income --------------------------------

// --------------- start POST ret_detail_list_static_outcome -------------------------------
app.post("/ret_detail_list_static_year", (req, res) => {
  // console.log(req.body.user_id);
  let sql =
    "SELECT YEAR(dtl.dtl_date) AS YEAR,  (CASE WHEN dtl.dtl_type = 1 THEN 'รายรับ' ELSE 'รายจ่าย' END )as type_list,SUM(dtl.dtl_amount) as amount FROM `ret_detail_list` as dtl LEFT JOIN ret_wallet as wall ON dtl.dtl_id = wall.wall_dtl_id WHERE wall.wall_user_id = '" +
    req.body.user_id +
    "' GROUP BY YEAR,type_list ORDER by YEAR,dtl_type";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_detail_list_static_outcome --------------------------------

// --------------- start POST insert_ret_wallet -------------------------------
app.post("/insert_ret_wallet", (req, res) => {
  let sql = "INSERT INTO `ret_wallet` (`wall_user_id`, `wall_dtl_id`) VALUES (" + req.body.wall_user_id + ", " + req.body.wall_dtl_id + ");"
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST insert_ret_wallet --------------------------------

// --------------- start POST get_last_ret_detail_list -------------------------------
app.post("/get_last_ret_detail_list", (req, res) => {
  let sql = "SELECT * FROM `ret_detail_list` ORDER BY dtl_id  DESC LIMIT 1"
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST get_last_ret_detail_list --------------------------------

// --------------- start POST delete_ret_wallet -------------------------------
app.post("/delete_ret_wallet", (req, res) => {
  let sql = "DELETE FROM `ret_wallet` WHERE wall_dtl_id = " + req.body.wall_dtl_id + ";";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST delete_ret_wallet --------------------------------

// --------------- start POST ret_detail_list_by_list_type -------------------------------
app.post("/ret_detail_list_by_list_type", (req, res) => {
  let sql = 
    " select dtl_id, DAY(dtl_date) as day, " + 
    " ( " + 
    " CASE " + 
    " WHEN MONTH(dtl_date) = 1 THEN 'ม.ค.' " + 
    " WHEN MONTH(dtl_date) = 2 THEN 'ก.พ.' " + 
    " WHEN MONTH(dtl_date) = 3 THEN 'มี.ค.' " + 
    " WHEN MONTH(dtl_date) = 4 THEN 'เม.ย.' " + 
    " WHEN MONTH(dtl_date) = 5 THEN 'พ.ค.' " + 
    " WHEN MONTH(dtl_date) = 6 THEN 'มิ.ย.' " + 
    " WHEN MONTH(dtl_date) = 7 THEN 'ก.ค.' " + 
    " WHEN MONTH(dtl_date) = 8 THEN 'ส.ค.' " + 
    " WHEN MONTH(dtl_date) = 9 THEN 'ก.ย.' " + 
    " WHEN MONTH(dtl_date) = 10 THEN 'ต.ค.' " + 
    " WHEN MONTH(dtl_date) = 11 THEN 'พ.ย.' " + 
    " ELSE 'ธ.ค.' " + 
    " END" + 
    " ) as month," + 
    " YEAR(dtl_date) as year, dtl_amount, dtl_type, dtl_description, dts_name," + 
    " (CASE " + 
    " WHEN " + req.body.type_list + " = 1 THEN 'รายรับ'" +
    " WHEN " + req.body.type_list + " = 2 THEN 'รายจ่าย'" +
    " ELSE 'รายรับ - รายจ่าย' " +
    " END) as list_type_name" + 
    " from `ret_detail_list`" +  
    " right join `ret_wallet` " + 
    " on dtl_id = wall_dtl_id " + 
    " left join `ret_detail_sub_type` " + 
    " on dtl_dts_id = dts_id " + 
    " left join `ret_user` " + 
    " on wall_user_id = user_id " + 
    " where " + 
    " (CASE " + 
    " WHEN " + req.body.type_list + " = 1 THEN dtl_type = 1 " + 
    " WHEN " + req.body.type_list + " = 2 THEN dtl_type = 2 " + 
    " ELSE dtl_type BETWEEN 1 AND 2 " + 
    " END) " + 
    " and month(dtl_date) = " + req.body.month_value  +  
    " and year(dtl_date) = " + req.body.year_value  +  
    " and wall_user_id = " + req.body.user_id  +  
    " order by dtl_date desc" ;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// ---------------- end POST ret_detail_list_by_list_type --------------------------------

//-------------------------------------------------------- end POST ------------------------------------------------------------------
