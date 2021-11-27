-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Nov 2021 pada 05.53
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tugasakhir`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `blogs`
--

CREATE TABLE `blogs` (
  `judul` varchar(50) NOT NULL,
  `keterangan` varchar(2000) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `blogs`
--

INSERT INTO `blogs` (`judul`, `keterangan`, `id`) VALUES
('SWIMMING POOL WATER TREATMENT', 'Consistent in cleaning the walls and floors of the mosaic / ceramic swimming pool area as well as the balancing tank space is a mandatory activity in swimming pool maintenance.\n\nGiving chemicals into swimming pool water will only be done if it is really needed. Our team is dedicated to always trying to be able to turn your swimming pool into a clean, healthy and safe environment for your family.', 58),
('SWIMMING POOL MACHINE MAINTENANCE', 'Even though the water conditions are always well maintained, it is possible that the noise from your swimming pool engine will come into the engine room.\n\nThe function of the swimming pool filter is not optimal when the sand conditions are not good, and it is necessary to replace the sand immediately so that the filtration function can return to normal. The filter handle lever and multi port valve are also prone to problems.', 59),
('sdsds', 'jkdsfgkdsfksgkdsffdsjkfdsk', 61);

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `foto` varchar(30) NOT NULL,
  `judul` varchar(50) NOT NULL,
  `keterangan` varchar(300) NOT NULL,
  `id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`foto`, `judul`, `keterangan`, `id`) VALUES
('product-2.jpg', 'Chlorine Tablet - Tablet', 'Kg/Pail', 2),
('product-3.jpg', 'Liquid HCL - Jerry Can', 'Liquid', 3),
('product-4.jpg', 'Tawas - Kg', 'Crystal', 4),
('product-5.jpg', 'Sodium Hypo - Jerry Can', 'Powder', 5),
('product-6.jpg', 'PAC Powder - 5ltr', 'Powder', 18),
('product-7.jpg', 'Terusi - Zack/Kg', 'Crystal', 19),
('product-8.jpg', 'Caustic Soda - Zack/Kg', 'Crystal', 20),
('product-9.jpg', 'Soda Ash - Kg', 'Powder', 21),
('product-10.jpg', 'Tawas - Kg', 'Powder', 22),
('product-11.jpg', 'Salt Industrial - Zack', 'Crystal', 23),
('product-12.jpg', 'Silica Sand - Zack', 'Granul', 24),
('product-13.jpg', 'Kaporit - Zack/Pail', 'Powder', 25),
('product-14.jpg', 'Ball Valve Astral - Pcs', 'Accessories', 26),
('product-15.jpg', 'Check Valve Astral - Pcs', 'Accessories', 27),
('product-16.jpg', 'Inlet & Vacuum Fitting - Pcs', 'Accessories', 28),
('product-17.jpg', 'Pool Brush - Pcs', 'Accessories', 29),
('product-18.jpg', 'Algae Brush - Pcs', 'Accessories', 30),
('product-19.jpg', 'Leaf Skimmer - Pcs', 'Accessories', 31),
('product-20.jpg', 'Vaccum Head 8 Wheels - Pcs', 'Accessories', 32),
('product-21.jpg', 'Vaccum Hose 9 meter - Pcs', 'Accessories', 33),
('product-22.jpg', 'Telescopic Handle 16 - Pcs', 'Accessories', 34),
('product-22.jpg', 'Test Kit Liquid - Pcs', 'Accessories', 35),
('product-23.jpg', 'Test Kit Set - Pcs', 'Accessories', 36);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
