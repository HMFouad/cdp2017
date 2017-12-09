CREATE DATABASE IF NOT EXISTS `cdp` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE cdp;

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

CREATE TABLE Us (
       id INT NOT NULL AUTO_INCREMENT,
       description VARCHAR(100),
       priority INT,
       difficult INT,
       state ENUM('Todo', 'Done'),
       project_id INT,
       FOREIGN KEY (project_id) REFERENCES Projects(id),
       PRIMARY KEY (id)
);

CREATE TABLE Sprints (
       id INT NOT NULL AUTO_INCREMENT,
       sprint_name VARCHAR(100),
       date_begin DATE,
       date_end DATE,
       project_id INT,
       FOREIGN KEY (project_id) REFERENCES Projects(id),
       PRIMARY KEY (id)
);

CREATE TABLE Tasks (
       id INT NOT NULL AUTO_INCREMENT,
       description VARCHAR(100),
       state ENUM('Todo', 'Doing', 'Done'),
       user_id INT,
       sprint_id INT,
       FOREIGN KEY (user_id) REFERENCES Users(id),
       FOREIGN KEY (sprint_id) REFERENCES Sprints(id),
       PRIMARY KEY (id)
);



