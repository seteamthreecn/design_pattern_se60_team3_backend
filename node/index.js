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

app.get("/ret_user", (req, res) => {
  let sql = "SELECT * FROM `ret_user`";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// app.post("/channel", (req, res) => {
//   let sql = "SELECT * FROM channel;";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/category", (req, res) => {
//   let sql = "SELECT * FROM category;";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/internal_department", (req, res) => {
//   let sql = "SELECT * FROM department WHERE department_type_id = 1;";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/external_department", (req, res) => {
//   let sql = "SELECT * FROM department WHERE department_type_id = 2;";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/report_list", (req, res) => {
//   let sql = "SELECT * FROM `case`;";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/report_list_detail", (req, res) => {
//   let sql =
//     "SELECT c.code , subject , case_status_id , c.create_date as 'create_date' , c.modify_date as 'modify_date' ,u.name as 'name', ch.name as 'channel_name' , ct.name as 'category_name' , description , latitude , alert_day_amt, longitude , requirement , location , if_name , if_phone_no , if_email , is_disclosed, c.channel_id as 'case_channel' , c.category_id as 'case_category', c.note as 'case_note', is_alert, is_my_self, (SELECT GROUP_CONCAT(d.name) FROM `case_department` as cd LEFT JOIN `department`  as d ON cd.department_id = d.department_id WHERE d.department_type_id = 1 AND cd.case_id=" +
//     req.body.case_id +
//     ") as 'internal_department_name',(SELECT GROUP_CONCAT(d.name) FROM `case_department` as cd LEFT JOIN `department`  as d ON cd.department_id = d.department_id WHERE d.department_type_id = 2 AND cd.case_id=" +
//     req.body.case_id +
//     ") as 'external_department_name' , (SELECT GROUP_CONCAT(s.name) FROM `case` as c1 LEFT JOIN `case_staff`  as s ON c1.case_id = s.case_id WHERE c1.case_id=" +
//     req.body.case_id +
//     ") as 'staff_name' ,DAY(c.create_date) as case_date, (CASE WHEN MONTH(c.create_date) = 1 THEN 'ม.ค' WHEN MONTH(c.create_date) = 2 THEN 'ก.พ' WHEN MONTH(c.create_date) = 3 THEN 'มี.ค' WHEN MONTH(c.create_date) = 4 THEN 'เม.ย' WHEN MONTH(c.create_date) = 5 THEN 'พ.ค' WHEN MONTH(c.create_date) = 6 THEN 'มิ.ย' WHEN MONTH(c.create_date) = 7 THEN 'ก.ค'  WHEN MONTH(c.create_date) = 8 THEN 'ส.ค' WHEN MONTH(c.create_date) = 9 THEN 'ก.ย' WHEN MONTH(c.create_date) = 10 THEN 'ต.ค' WHEN MONTH(c.create_date) = 11 THEN 'พ.ย' ELSE 'ธ.ค' END) as case_month , (YEAR(c.create_date)+543) as case_year , HOUR(c.create_date) as case_hour, MINUTE(c.create_date) as case_min , (SELECT GROUP_CONCAT(f.file_name) FROM `case` as c1 INNER JOIN `case_file` as cf on c1.case_id = cf.case_id INNER JOIN `file` as f ON cf.file_id = f.file_id WHERE cf.case_id =" +
//     req.body.case_id +
//     ") as case_file_name FROM `case` as c LEFT JOIN `user` as u ON c.create_user_id = u.user_id LEFT JOIN `channel` as ch ON c.channel_id = ch.channel_id LEFT JOIN `category`  as ct ON c.category_id = ct.category_id WHERE c.case_id=" +
//     req.body.case_id +
//     ";";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/report_list_search_name", (req, res) => {
//   let sql =
//     "SELECT * FROM `case` WHERE subject LIKE '%" +
//     req.body.subject +
//     "%' AND case_status_id BETWEEN 1 AND 4;";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/report_list_search", (req, res) => {
//   let sql =
//     "SELECT * FROM `case` WHERE subject LIKE '%" +
//     req.body.subject +
//     "%' AND case_status_id = " +
//     req.body.case_status_id +
//     ";";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/report_list_search_2", (req, res) => {
//   let sql =
//     "SELECT * FROM `case` WHERE subject LIKE '%" +
//     req.body.subject +
//     "%' AND (case_status_id = " +
//     req.body.case_status_id +
//     " or case_status_id = " +
//     req.body.case_status_id_2 +
//     " );";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/report_list_search_3", (req, res) => {
//   let sql =
//     "SELECT * FROM `case` WHERE subject LIKE '%" +
//     req.body.subject +
//     "%' AND (case_status_id = " +
//     req.body.case_status_id +
//     " or case_status_id = " +
//     req.body.case_status_id_2 +
//     " or case_status_id = " +
//     req.body.case_status_id_3 +
//     " );";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/channel_search", (req, res) => {
//   let sql =
//     "SELECT * FROM `channel` WHERE name LIKE '%" +
//     req.body.name +
//     "%' AND is_active = " +
//     req.body.is_active +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/category_search", (req, res) => {
//   let sql =
//     "SELECT * FROM `category` WHERE name LIKE '%" +
//     req.body.name +
//     "%' AND is_active = " +
//     req.body.is_active +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/channel_search", (req, res) => {
//   let sql =
//     "SELECT * FROM `channel` WHERE name LIKE '%" +
//     req.body.name +
//     "%' AND is_active = " +
//     req.body.is_active +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/internal_department_search", (req, res) => {
//   let sql =
//     "SELECT * FROM `department` WHERE name LIKE '%" +
//     req.body.name +
//     "%' AND department_type_id = 1 AND is_active=" +
//     req.body.is_active +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/external_department_search", (req, res) => {
//   let sql =
//     "SELECT * FROM `department` WHERE name LIKE '%" +
//     req.body.name +
//     "%' AND department_type_id = 2 AND is_active=" +
//     req.body.is_active +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/channel_search_name", (req, res) => {
//   let sql =
//     "SELECT * FROM `channel` WHERE name LIKE '%" + req.body.name + "%' ;";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/category_search_name", (req, res) => {
//   let sql =
//     "SELECT * FROM `category` WHERE name LIKE '%" + req.body.name + "%' ;";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/internal_department_search_name", (req, res) => {
//   let sql =
//     "SELECT * FROM `department` WHERE name LIKE '%" +
//     req.body.name +
//     "%' AND department_type_id = 1;";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/external_department_search_name", (req, res) => {
//   let sql =
//     "SELECT * FROM `department` WHERE name LIKE '%" +
//     req.body.name +
//     "%' AND department_type_id = 2;";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.delete("/channel_delete/:channel_id", (req, res) => {
//   let sql =
//     "DELETE FROM `channel` WHERE channel_id = " + req.params.channel_id + ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) res.json("cannot delete");
//     else res.json(result);
//   });
// });

// app.delete("/category_delete/:category_id", (req, res) => {
//   let sql =
//     "DELETE FROM `category` WHERE category_id = " +
//     req.params.category_id +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) res.json("cannot delete");
//     else res.json(result);
//   });
// });

// app.delete("/internal_department_delete/:department_id", (req, res) => {
//   let sql =
//     "DELETE FROM `department` WHERE department_id = " +
//     req.params.department_id +
//     " AND department_type_id = 1;";
//   let query = db.query(sql, (err, result) => {
//     if (err) res.json("cannot delete");
//     else res.json(result);
//   });
// });

// app.delete("/external_department_delete/:department_id", (req, res) => {
//   let sql =
//     "DELETE FROM `department` WHERE department_id = " +
//     req.params.department_id +
//     " AND department_type_id = 2;";
//   let query = db.query(sql, (err, result) => {
//     if (err) res.json("cannot delete");
//     else res.json(result);
//   });
// });

// app.post("/update_report_list", (req, res) => {
//   let sql =
//     "UPDATE `case` SET case_status_id = " +
//     req.body.case_status_id +
//     " WHERE case_id = " +
//     req.body.case_id +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/report_static_month", (req, res) => {
//   let sql =
//     "SELECT SUM(CASE WHEN MONTH(modify_date) = 1 THEN 1 ELSE 0 END) AS 'January', SUM(CASE WHEN MONTH(modify_date) = 2 THEN 1 ELSE 0 END) AS 'February',SUM(CASE WHEN MONTH(modify_date) = 3 THEN 1 ELSE 0 END) AS 'March',SUM(CASE WHEN MONTH(modify_date) = 4 THEN 1 ELSE 0 END) AS 'April',SUM(CASE WHEN MONTH(modify_date) = 5 THEN 1 ELSE 0 END) AS 'May',SUM(CASE WHEN MONTH(modify_date) = 6 THEN 1 ELSE 0 END) AS 'June',SUM(CASE WHEN MONTH(modify_date) = 7 THEN 1 ELSE 0 END) AS 'July',SUM(CASE WHEN MONTH(modify_date) = 8 THEN 1 ELSE 0 END) AS 'August',SUM(CASE WHEN MONTH(modify_date) = 9 THEN 1 ELSE 0 END) AS 'September',SUM(CASE WHEN MONTH(modify_date) = 10 THEN 1 ELSE 0 END) AS 'October',SUM(CASE WHEN MONTH(modify_date) = 11 THEN 1 ELSE 0 END) AS 'November',SUM(CASE WHEN MONTH(modify_date) = 12 THEN 1 ELSE 0 END) AS 'December', COUNT(modify_date) AS 'SUM' FROM `case` WHERE YEAR(modify_date) = '2019' AND modify_date BETWEEN Date_add(modify_date, interval - 12 month) AND  modify_date;";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/insert_case", (req, res) => {
//   let sql =
//     "INSERT INTO `case` (code , doc_date ,subject, category_id, channel_id ,description, latitude,longitude,location,requirement, is_my_self, is_alert,alert_day_amt, if_name, if_phone_no,if_email,is_disclosed,note, case_status_id, create_date, create_user_id,modify_date,modify_user_id)VALUES('62-99999','2017-12-21 17:14:00','ionic insert',10,1,'detail',100,100,'288/23','insert',1,1,1,'chalongchai','0970905675','6016158@go.buu.ac.th',1,'wow',3,NOW(),4,NOW(),4)";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/insert_department", (req, res) => {
//   let sql =
//     "INSERT INTO department (department_type_id,order_no, name, is_active, create_date, create_user_id)VALUES(" +
//     req.body.department_type_id +
//     "," +
//     req.body.order_no +
//     "," +
//     "'" +
//     req.body.name +
//     "'" +
//     ", " +
//     req.body.is_active +
//     ", NOW()," +
//     req.body.create_user_id +
//     ");";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/get_last_department_order_no", (req, res) => {
//   let sql =
//     "SELECT order_no FROM `department` WHERE department_type_id = " +
//     req.body.department_type_id +
//     " ORDER BY order_no DESC LIMIT 1";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/department_check_name_duplicate", (req, res) => {
//   let sql =
//     "SELECT * FROM `department` WHERE name LIKE '" +
//     req.body.name +
//     "' AND department_type_id = " +
//     req.body.department_type_id +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/get_department_data_by_id", (req, res) => {
//   let sql =
//     "SELECT * FROM `department` WHERE department_id = '" +
//     req.body.department_id +
//     "' AND department_type_id = " +
//     req.body.department_type_id +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/update_department", (req, res) => {
//   let sql =
//     "UPDATE department SET name='" +
//     req.body.name +
//     "', is_active=" +
//     req.body.is_active +
//     ", modify_date=NOW(), modify_user_id=" +
//     req.body.modify_user_id +
//     " WHERE department_id=" +
//     req.body.department_id;
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/insert_channel", (req, res) => {
//   let sql =
//     "INSERT INTO channel (order_no, name, is_active, create_date, create_user_id)VALUES(" +
//     req.body.order_no +
//     "," +
//     "'" +
//     req.body.name +
//     "'" +
//     ", " +
//     req.body.is_active +
//     ", NOW()," +
//     req.body.create_user_id +
//     ");";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/get_last_channel_order_no", (req, res) => {
//   let sql = "SELECT order_no FROM `channel` ORDER BY order_no DESC LIMIT 1";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/channel_check_name_duplicate", (req, res) => {
//   let sql = "SELECT * FROM `channel` WHERE name LIKE '" + req.body.name + "';";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/get_channel_data_by_id", (req, res) => {
//   let sql =
//     "SELECT * FROM `channel` WHERE channel_id = " + req.body.channel_id + ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/update_channel", (req, res) => {
//   let sql =
//     "UPDATE channel SET name='" +
//     req.body.name +
//     "', is_active=" +
//     req.body.is_active +
//     ", modify_date=NOW(), modify_user_id=" +
//     req.body.modify_user_id +
//     " WHERE channel_id=" +
//     req.body.channel_id;
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/insert_category", (req, res) => {
//   let sql =
//     "INSERT INTO category (order_no, name, is_active, create_date, create_user_id)VALUES(" +
//     req.body.order_no +
//     "," +
//     "'" +
//     req.body.name +
//     "'" +
//     ", " +
//     req.body.is_active +
//     ", NOW()," +
//     req.body.create_user_id +
//     ");";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// app.post("/get_last_category_order_no", (req, res) => {
//   let sql = "SELECT order_no FROM `category` ORDER BY order_no DESC LIMIT 1";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/category_check_name_duplicate", (req, res) => {
//   let sql = "SELECT * FROM `category` WHERE name LIKE '" + req.body.name + "';";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/get_category_data_by_id", (req, res) => {
//   let sql =
//     "SELECT * FROM `category` WHERE category_id = " +
//     req.body.category_id +
//     ";";
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.json(result);
//   });
// });

// app.post("/update_category", (req, res) => {
//   let sql =
//     "UPDATE category SET name='" +
//     req.body.name +
//     "', is_active=" +
//     req.body.is_active +
//     ", modify_date=NOW(), modify_user_id=" +
//     req.body.modify_user_id +
//     " WHERE category_id=" +
//     req.body.category_id;
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

app.listen(83, () => {
  console.log("Start server at port 83.");
});
