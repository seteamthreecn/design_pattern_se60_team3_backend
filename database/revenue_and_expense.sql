-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 18, 2020 at 09:31 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `revenue_and_expense`
--

-- --------------------------------------------------------

--
-- Table structure for table `ret_detail_list`
--

CREATE TABLE `ret_detail_list` (
  `dtl_id` int(11) NOT NULL,
  `dtl_amount` double NOT NULL,
  `dtl_date` datetime NOT NULL,
  `dtl_type` tinyint(2) NOT NULL,
  `dtl_dts_id` int(11) NOT NULL,
  `dtl_description` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dtl_create_date` datetime NOT NULL,
  `dtl_modify_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ret_detail_list`
--

INSERT INTO `ret_detail_list` (`dtl_id`, `dtl_amount`, `dtl_date`, `dtl_type`, `dtl_dts_id`, `dtl_description`, `dtl_create_date`, `dtl_modify_date`) VALUES
(20, 2000, '2020-03-14 10:00:00', 1, 3, 'get bonus', '0000-00-00 00:00:00', '2020-03-16 23:22:13'),
(21, 200, '2020-01-01 00:00:00', 2, 2, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 150, '2020-01-01 00:00:00', 1, 1, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 1000, '2020-01-01 00:00:00', 1, 1, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 100, '2020-01-01 00:00:00', 2, 16, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 250, '2020-01-05 00:00:00', 2, 11, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, 250, '2020-01-06 00:00:00', 2, 10, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 2000, '2020-01-10 00:00:00', 2, 10, 'แดกข้าว', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, 111, '2020-01-10 00:00:00', 2, 2, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 222, '2020-01-12 00:00:00', 2, 2, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 200, '2020-03-14 17:00:00', 2, 2, '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 100, '2020-03-16 02:21:33', 1, 1, '', '0000-00-00 00:00:00', '2020-03-18 04:10:51'),
(51, 200, '2017-03-17 14:41:05', 1, 3, '', '2020-03-17 14:41:17', '2020-03-17 14:41:17'),
(52, 2000, '2015-03-17 14:41:30', 2, 2, '', '2020-03-17 14:41:45', '2020-03-17 14:41:45'),
(53, 2000, '2020-03-13 00:46:12', 1, 4, '', '2020-03-17 14:46:22', '2020-03-17 14:47:37'),
(54, 1, '2020-03-17 15:26:16', 2, 11, '', '2020-03-17 15:26:28', '2020-03-17 15:26:28'),
(55, 1000, '2020-04-17 23:11:06', 2, 11, '', '2020-03-17 23:11:18', '2020-03-17 23:11:18'),
(57, 100, '2020-03-18 03:04:50', 2, 11, '', '2020-03-18 03:05:08', '2020-03-18 03:05:08'),
(58, 10000, '2020-03-18 04:11:04', 1, 3, '', '2020-03-18 04:11:17', '2020-03-18 04:11:17');

-- --------------------------------------------------------

--
-- Table structure for table `ret_detail_sub_type`
--

CREATE TABLE `ret_detail_sub_type` (
  `dts_id` int(11) NOT NULL,
  `dts_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `dts_type_id` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ret_detail_sub_type`
--

INSERT INTO `ret_detail_sub_type` (`dts_id`, `dts_name`, `dts_type_id`) VALUES
(1, 'รายรับทั่วไป', 1),
(2, 'รายจ่ายทั่วไป', 2),
(3, 'เงินเดือน', 1),
(4, 'ยอดขาย', 1),
(5, 'โบนัส/เงินพิเศษ/เงินรางวัล', 1),
(6, 'เงินดอกเบี้ย', 1),
(7, 'ของขวัญ', 1),
(8, 'เงินฝาก', 1),
(9, 'อื่นๆ', 1),
(10, 'อาหารและเครื่องดื่ม ', 2),
(11, 'ช้อปปิ้ง', 2),
(12, 'การเดินทาง', 2),
(13, 'ค่าที่จอดรถ', 2),
(14, 'การลงทุน', 2),
(15, 'บัตรเครดิต', 2),
(16, 'การศึกษา', 2),
(17, 'ค่าบ้าน / ค่าเช่าบ้าน', 2),
(18, 'ค่าผ่อนรถ', 2),
(19, 'ครอบครัว', 2),
(20, 'การให้และบริจาค', 2),
(21, 'อื่น ๆ', 2),
(22, 'undefined', 0),
(23, 'undefined', 0),
(24, 'undefined', 0),
(25, 'undefined', 0),
(26, 'undefined', 0);

-- --------------------------------------------------------

--
-- Table structure for table `ret_user`
--

CREATE TABLE `ret_user` (
  `user_id` int(11) NOT NULL,
  `user_username` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `user_password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `user_fname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `user_lname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `user_phone_no` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_email` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_guid_img` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ret_user`
--

INSERT INTO `ret_user` (`user_id`, `user_username`, `user_password`, `user_fname`, `user_lname`, `user_phone_no`, `user_email`, `user_guid_img`) VALUES
(1, '60160025', '60160025', 'พลยุทธ', 'โสภาค', NULL, 'ggep', NULL),
(2, '60160083', '2508', 'ชุติพงศ์', 'เจริญสวัสดิ์', NULL, '', 'zf1cumKrO6kw1J-JjXv2UTYv.jpg'),
(3, '60160152', '60160152', 'cha', 'pak', NULL, '', NULL),
(4, 'pond', '60160158', 'chalongchaip', '60160158', NULL, '', NULL),
(5, '60160166', '60160166', 'ธิดารัตน์', 'ฤกษ์จำรัสเเสง', NULL, NULL, NULL),
(6, '60160172', '60160172', 'cha', 'pak', NULL, '', NULL),
(7, '60160186', '60160186', 'อิศรพงศ์', 'เจนการ', NULL, NULL, NULL),
(8, '60160201', '60160201', 'วินิจดา', 'ทองวงษ์', NULL, NULL, NULL),
(9, '60160335', '60160335', 'ชนิกานต์ ', 'คำเรือง', NULL, NULL, NULL),
(10, 'team3', 'team3', 'ทีม', 'Software Engineering', NULL, NULL, NULL),
(13, '60160158', '60160158', 'ฉลองชัย', 'ภาคย์กระโทก', 'undefined', 'pond.chalongchai@gmail.com', 'QxZqcLu5_vgUOLM99ED2GMgS.png');

-- --------------------------------------------------------

--
-- Table structure for table `ret_wallet`
--

CREATE TABLE `ret_wallet` (
  `wall_user_id` int(11) NOT NULL,
  `wall_dtl_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ret_wallet`
--

INSERT INTO `ret_wallet` (`wall_user_id`, `wall_dtl_id`) VALUES
(2, 22),
(2, 25),
(2, 42),
(2, 46),
(2, 47),
(1, 45),
(2, 20),
(2, 48),
(2, 49),
(2, 51),
(2, 52),
(2, 53),
(2, 54),
(2, 55),
(13, 57),
(2, 58);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ret_detail_list`
--
ALTER TABLE `ret_detail_list`
  ADD PRIMARY KEY (`dtl_id`),
  ADD KEY `dtt_dts_id` (`dtl_dts_id`);

--
-- Indexes for table `ret_detail_sub_type`
--
ALTER TABLE `ret_detail_sub_type`
  ADD PRIMARY KEY (`dts_id`);

--
-- Indexes for table `ret_user`
--
ALTER TABLE `ret_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `ret_wallet`
--
ALTER TABLE `ret_wallet`
  ADD KEY `wall_dtl_id` (`wall_dtl_id`),
  ADD KEY `wall_user_id` (`wall_user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ret_detail_list`
--
ALTER TABLE `ret_detail_list`
  MODIFY `dtl_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `ret_detail_sub_type`
--
ALTER TABLE `ret_detail_sub_type`
  MODIFY `dts_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `ret_user`
--
ALTER TABLE `ret_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ret_detail_list`
--
ALTER TABLE `ret_detail_list`
  ADD CONSTRAINT `dtt_dts_id` FOREIGN KEY (`dtl_dts_id`) REFERENCES `ret_detail_sub_type` (`dts_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `ret_wallet`
--
ALTER TABLE `ret_wallet`
  ADD CONSTRAINT `wall_dtl_id` FOREIGN KEY (`wall_dtl_id`) REFERENCES `ret_detail_list` (`dtl_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `wall_user_id` FOREIGN KEY (`wall_user_id`) REFERENCES `ret_user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
