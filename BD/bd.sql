CREATE DATABASE IF NOT EXISTS `cdp` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE Users (
       id INT NOT NULL AUTO_INCREMENT,
       username VARCHAR(20) UNIQUE NOT NULL,
       password VARCHAR(20) NOT NULL,
       PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE Projects (
       id INT NOT NULL AUTO_INCREMENT,
       project VARCHAR(30) UNIQUE NOT NULL,
       description VARCHAR(100),
       PRIMARY KEY (id)
);

CREATE TABLE Acl (
       user_id INT,
       project_id INT,
       FOREIGN KEY (user_id) REFERENCES Users(id),
       FOREIGN KEY (project_id) REFERENCES Projects(id)
);


