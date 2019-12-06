-- MySQL dump 10.13  Distrib 5.5.62, for Linux (x86_64)
--
-- Host: localhost    Database: stylish
-- ------------------------------------------------------
-- Server version	5.5.62

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT 'Product id.',
  `title` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT 'Product title.',
  `description` varchar(255) CHARACTER SET utf8 NOT NULL COMMENT 'Product description.',
  `price` bigint(20) unsigned NOT NULL COMMENT 'Product price.',
  `texture` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT 'Product texture.',
  `wash` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT 'The way we can wash the product.',
  `place` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT 'Place of production.',
  `note` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT 'The note of product.',
  `story` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT 'Product multiline story.',
  `main_image` varchar(255) DEFAULT NULL COMMENT 'Main image.',
  `hot_title` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT 'Title of the hots section.',
  `type` varchar(50) NOT NULL COMMENT 'Product type.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'test','',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(2,'Stuart','',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(3,'Hey','',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(4,'?','',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(5,'','我',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(6,'','我',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(7,'','hey',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,''),(1234,'????????','???????????????',2200,'??????','?????40?)','??','??????????','????????????','https://stylish.com/main.jpg','???????',''),(1235,'????????','???????????????',2200,'??????','?????40?)','??','??????????','????????????','https://stylish.com/main.jpg','???????',''),(1236,'厚實毛呢格子外套','高抗寒素材選用，保暖也時尚有型',2200,'棉、聚脂纖維','手洗（水溫40度)','韓國','實品顏色以單品照為主','你絕對不能錯過的超值商品','https://stylish.com/main.jpg','冬季新品搶先看','');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-06  1:20:51
