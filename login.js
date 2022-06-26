const mysql = require('mysql');
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
});
var sql = "CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `nodelogin`

 CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`))
	 ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8
INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com')",






con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql,function (err, result){
		if (err) throw err;
		console.log("All okay")
  });
});
