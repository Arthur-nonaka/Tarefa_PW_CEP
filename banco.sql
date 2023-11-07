-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Tempo de geração: 07/11/2023 às 05:28
-- Versão do servidor: 8.0.33
-- Versão do PHP: 8.1.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `banco`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `codigo` int NOT NULL,
  `nome` varchar(50) COLLATE utf8mb3_estonian_ci NOT NULL,
  `email` varchar(70) COLLATE utf8mb3_estonian_ci NOT NULL,
  `CEP` varchar(20) COLLATE utf8mb3_estonian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_estonian_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`codigo`, `nome`, `email`, `CEP`) VALUES
(1, 'Arthur Nonaka Oda', 'zenaboa7@gmail.com', '19570-000'),
(2, 'Arthur Nonaka Oda', 'zenaboa7@gmail.com', '19570-000'),
(3, 'Arthur Nonaka Oda', 'zenaboa7@gmail.com', '1'),
(4, '1', '1', '1'),
(5, '2', '2', '2'),
(6, '3', '3', '3'),
(7, '4', '4', '4'),
(8, '5', '5', '5'),
(9, 'Paulo', 'paulo@gmail.com', '2994292');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `codigo` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
