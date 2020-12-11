/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : portfolio

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2020-12-06 22:07:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for items
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `isTop` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of items
-- ----------------------------
INSERT INTO `items` VALUES ('1', './images/1.jpg', 'img', '1');
INSERT INTO `items` VALUES ('2', './images/2.jpg', 'img', '1');
INSERT INTO `items` VALUES ('3', './images/5.jpg', 'img', '0');
INSERT INTO `items` VALUES ('4', './images/4.jpg', 'img', '1');
INSERT INTO `items` VALUES ('5', './images/3.jpg', 'img', '1');
INSERT INTO `items` VALUES ('6', './images/6.jpg', 'img', '0');
INSERT INTO `items` VALUES ('7', './images/9.jpg', 'img', '0');
INSERT INTO `items` VALUES ('8', './images/7.jpg', 'img', '0');
INSERT INTO `items` VALUES ('9', './images/8.jpg', 'img', '0');
INSERT INTO `items` VALUES ('10', './videos/1.mp4', 'video', '1');
