CREATE DATABASE IF NOT EXISTS another_users_db;

USE another_users_db;

CREATE TABLE IF NOT EXISTS users2(
	user_id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
	user_regtime TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (user_id)
);


CREATE TABLE IF NOT EXISTS user_posts (
post_id INT AUTO_INCREMENT, 
user_id INT, post_info VARCHAR(999) NOT NULL, 
post_createtime  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, 

post_data0 VARCHAR(20), post_data1 VARCHAR(20), post_data2 VARCHAR(20), post_data3 VARCHAR(20), post_data4 VARCHAR(20), post_data5 VARCHAR(20), post_data6 VARCHAR(20), post_data7 VARCHAR(20), post_data8 VARCHAR(20), post_data9 VARCHAR(20), post_data10 VARCHAR(20), post_data11 VARCHAR(20), post_data12 VARCHAR(20), post_data13 VARCHAR(20), post_data14 VARCHAR(20), post_data15 VARCHAR(20), post_data16 VARCHAR(20), post_data17 VARCHAR(20), post_data18 VARCHAR(20), post_data19 VARCHAR(20), post_data20 VARCHAR(20), post_data21 VARCHAR(20), post_data22 VARCHAR(20), post_data23 VARCHAR(20), post_data24 VARCHAR(20), post_data25 VARCHAR(20), post_data26 VARCHAR(20), post_data27 VARCHAR(20), post_data28 VARCHAR(20), post_data29 VARCHAR(20), post_data30 VARCHAR(20), post_data31 VARCHAR(20), post_data32 VARCHAR(20), post_data33 VARCHAR(20), post_data34 VARCHAR(20), post_data35 VARCHAR(20), post_data36 VARCHAR(20), post_data37 VARCHAR(20), post_data38 VARCHAR(20), post_data39 VARCHAR(20), post_data40 VARCHAR(20), post_data41 VARCHAR(20), post_data42 VARCHAR(20), post_data43 VARCHAR(20), post_data44 VARCHAR(20), post_data45 VARCHAR(20), post_data46 VARCHAR(20), post_data47 VARCHAR(20), post_data48 VARCHAR(20), post_data49 VARCHAR(20), post_data50 VARCHAR(20), post_data51 VARCHAR(20), post_data52 VARCHAR(20), post_data53 VARCHAR(20), post_data54 VARCHAR(20), post_data55 VARCHAR(20), post_data56 VARCHAR(20), post_data57 VARCHAR(20), post_data58 VARCHAR(20), post_data59 VARCHAR(20), post_data60 VARCHAR(20), post_data61 VARCHAR(20), post_data62 VARCHAR(20), post_data63 VARCHAR(20), post_data64 VARCHAR(20), post_data65 VARCHAR(20), post_data66 VARCHAR(20), post_data67 VARCHAR(20), post_data68 VARCHAR(20), post_data69 VARCHAR(20), post_data70 VARCHAR(20), post_data71 VARCHAR(20), post_data72 VARCHAR(20), post_data73 VARCHAR(20), post_data74 VARCHAR(20), post_data75 VARCHAR(20), post_data76 VARCHAR(20), post_data77 VARCHAR(20), post_data78 VARCHAR(20), post_data79 VARCHAR(20), post_data80 VARCHAR(20), post_data81 VARCHAR(20), post_data82 VARCHAR(20), post_data83 VARCHAR(20), post_data84 VARCHAR(20), post_data85 VARCHAR(20), post_data86 VARCHAR(20), post_data87 VARCHAR(20), post_data88 VARCHAR(20), post_data89 VARCHAR(20), post_data90 VARCHAR(20), post_data91 VARCHAR(20), post_data92 VARCHAR(20), post_data93 VARCHAR(20), post_data94 VARCHAR(20), post_data95 VARCHAR(20), post_data96 VARCHAR(20), post_data97 VARCHAR(20), post_data98 VARCHAR(20), post_data99 VARCHAR(20), post_data100 VARCHAR(20), post_data101 VARCHAR(20), post_data102 VARCHAR(20), post_data103 VARCHAR(20), post_data104 VARCHAR(20), post_data105 VARCHAR(20), post_data106 VARCHAR(20), post_data107 VARCHAR(20), post_data108 VARCHAR(20), post_data109 VARCHAR(20), post_data110 VARCHAR(20), post_data111 VARCHAR(20), post_data112 VARCHAR(20), post_data113 VARCHAR(20), post_data114 VARCHAR(20), post_data115 VARCHAR(20), post_data116 VARCHAR(20), post_data117 VARCHAR(20), post_data118 VARCHAR(20), post_data119 VARCHAR(20), post_data120 VARCHAR(20), post_data121 VARCHAR(20), post_data122 VARCHAR(20), post_data123 VARCHAR(20), post_data124 VARCHAR(20), post_data125 VARCHAR(20), post_data126 VARCHAR(20), post_data127 VARCHAR(20), post_data128 VARCHAR(20), post_data129 VARCHAR(20), post_data130 VARCHAR(20), post_data131 VARCHAR(20), post_data132 VARCHAR(20), post_data133 VARCHAR(20), post_data134 VARCHAR(20), post_data135 VARCHAR(20), post_data136 VARCHAR(20), post_data137 VARCHAR(20), post_data138 VARCHAR(20), post_data139 VARCHAR(20), post_data140 VARCHAR(20), post_data141 VARCHAR(20), post_data142 VARCHAR(20), post_data143 VARCHAR(20), 

PRIMARY KEY(post_id)
);


CREATE TABLE IF NOT EXISTS post_likes (
post_id INT , 
user_id INT
);

