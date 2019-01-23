-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2019 at 09:27 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactapp-cab`
--
CREATE DATABASE IF NOT EXISTS `reactapp-cab` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `reactapp-cab`;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `b_id` int(5) NOT NULL,
  `uname` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `b_date` varchar(10) NOT NULL,
  `cab_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cabs`
--

CREATE TABLE `cabs` (
  `cid` int(5) NOT NULL,
  `model` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL,
  `rate` int(5) NOT NULL,
  `image` varchar(255) NOT NULL,
  `wifi` tinyint(1) NOT NULL,
  `e_luggage` tinyint(1) NOT NULL,
  `e_seats` int(1) NOT NULL,
  `cashless` tinyint(1) NOT NULL,
  `AC` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cabs`
--

INSERT INTO `cabs` (`cid`, `model`, `type`, `rate`, `image`, `wifi`, `e_luggage`, `e_seats`, `cashless`, `AC`) VALUES
(1, 'Hyundai Eon', 'Micro', 90, 'hyundai-eon.jpg', 0, 0, 0, 1, 1),
(2, 'Maruti Suzuki Alto', 'Micro', 90, 'Maruti-Alto.jpg', 0, 0, 0, 1, 1),
(3, 'Datsun Go', 'Micro', 90, 'datsun-go.jpg', 0, 0, 0, 1, 1),
(4, 'Maruti Suzuki Ritz', 'Mini', 110, 'maruti-ritz.jpg', 0, 1, 0, 1, 1),
(5, 'Tata Vista', 'Mini', 110, 'tata-vista.jpg', 0, 1, 0, 1, 1),
(6, 'Maruti Suzuki Swift Dzire', 'Prime', 150, 'swift-dzire.jpg', 1, 1, 0, 1, 1),
(7, 'Nissan sunny', 'Prime', 145, 'nissan-sunny.png', 1, 1, 0, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`b_id`);

--
-- Indexes for table `cabs`
--
ALTER TABLE `cabs`
  ADD PRIMARY KEY (`cid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `b_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `cabs`
--
ALTER TABLE `cabs`
  MODIFY `cid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
