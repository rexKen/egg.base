/*
Navicat MySQL Data Transfer

Source Server         : connection
Source Server Version : 50562
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50562
File Encoding         : 65001

Date: 2020-08-21 10:17:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `userpass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'vivi', 'female', '8989');
INSERT INTO `user` VALUES ('2', 'ken', 'male', '12341234');
INSERT INTO `user` VALUES ('3', 'kakka', 'male', '12341234');
INSERT INTO `user` VALUES ('4', 'kakka', 'male', '12341234');
INSERT INTO `user` VALUES ('5', 'vivi', 'female', '8989');
INSERT INTO `user` VALUES ('6', 'vivi', 'female', '18989');
SET FOREIGN_KEY_CHECKS=1;
