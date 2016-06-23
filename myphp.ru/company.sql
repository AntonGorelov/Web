-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 22 2016 г., 02:15
-- Версия сервера: 5.5.45
-- Версия PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `company`
--

-- --------------------------------------------------------

--
-- Структура таблицы `blog`
--

CREATE TABLE IF NOT EXISTS `blog` (
  `image` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `date` varchar(20) NOT NULL,
  `comments` varchar(20) NOT NULL,
  `text` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `blog`
--

INSERT INTO `blog` (`image`, `title`, `date`, `comments`, `text`) VALUES
('img/pic1.png', 'Cache Invalidation Strategies With Varnish Cache', 'March 30,2014', '2 Comments', 'Shortly thereafter, I was working with RetailMeNot, tasked with designing its iOS and Android app tutorial The product team wanted to make sure that users were clear about the value.'),
('img/pic2.png', 'Cache Invalidation Strategies With Varnish Cache', 'March 30,2015', '5 Comments', 'Shortly thereafter, I was working with RetailMeNot, tasked with designing its iOS and Android app tutorial The product team wanted to make sure that users were clear about the value.'),
('img/pic3.png', 'Cache Invalidation Strategies With Varnish Cache', 'March 30,2014', '2 Comments', 'Shortly thereafter, I was working with RetailMeNot, tasked with designing its iOS and Android app tutorial The product team wanted to make sure that users were clear about the value.');

-- --------------------------------------------------------

--
-- Структура таблицы `clientsay1`
--

CREATE TABLE IF NOT EXISTS `clientsay1` (
  `text` varchar(300) NOT NULL,
  `name` varchar(10) NOT NULL,
  `prof` varchar(40) NOT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `clientsay1`
--

INSERT INTO `clientsay1` (`text`, `name`, `prof`, `image`) VALUES
('Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.', 'Nina B', 'Creative Director at Gmoogle.com', 'img/client1.png'),
('Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.', 'Nina B', 'Creative Director at Gmoogle.com', 'img/client1.png');

-- --------------------------------------------------------

--
-- Структура таблицы `clientsay2`
--

CREATE TABLE IF NOT EXISTS `clientsay2` (
  `text` varchar(300) NOT NULL,
  `name` varchar(10) NOT NULL,
  `prof` varchar(40) NOT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `clientsay2`
--

INSERT INTO `clientsay2` (`text`, `name`, `prof`, `image`) VALUES
('Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.', 'Alica Diz', 'Creative Director at Gmoogle.com', 'img/client2.png'),
('Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.', 'Alica Diz', 'Creative Director at Gmoogle.com', 'img/client2.png');

-- --------------------------------------------------------

--
-- Структура таблицы `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `city` varchar(10) NOT NULL,
  `text` varchar(100) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `contacts`
--

INSERT INTO `contacts` (`city`, `text`, `tel`, `email`) VALUES
('NEW YORK', 'Address goes here in a one or two lines, maybe lorem ipsum.', '+44 800 800 90', 'info@domen.com '),
('LONDON', 'Address goes here in a one or two lines, maybe lorem ipsum.', '+8 900 000 000', 'info@domen.com '),
('MADRID', 'Address goes here in a one or two lines, maybe lorem ipsum.', '+44 800 800 90', 'info@domen.com ');

-- --------------------------------------------------------

--
-- Структура таблицы `features`
--

CREATE TABLE IF NOT EXISTS `features` (
  `id` varchar(1) NOT NULL,
  `image` varchar(20) NOT NULL,
  `alt` varchar(20) NOT NULL,
  `title` varchar(20) NOT NULL,
  `header` varchar(20) NOT NULL,
  `text` varchar(150) NOT NULL,
  `fulltext` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `features`
--

INSERT INTO `features` (`id`, `image`, `alt`, `title`, `header`, `text`, `fulltext`) VALUES
('1', 'img/icon-1.png', 'Personal touch', 'Personal touch', 'PERSONAL TOUCH', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ferment uectetur tortor Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ferment uectetur tortor Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ferment uectetur tortor Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.'),
('2', 'img/icon-2.png', 'Unique solutions', 'Unique solutions', 'UNIQUE SOLUTIONS', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ferment uectetur tortor Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ferment uectetur tortor Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ferment uectetur tortor Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.'),
('3', 'img/icon-3.png', 'Help in promotion', 'Help in promotion', 'HELP IN PROMOTION', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ferment uectetur tortor Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ferment uectetur tortor Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ferment uectetur tortor Nam volutpat purus in ferment uectetur tortor id, pharetra lorem.');

-- --------------------------------------------------------

--
-- Структура таблицы `server`
--

CREATE TABLE IF NOT EXISTS `server` (
  `path` varchar(10) NOT NULL,
  `title` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `server`
--

INSERT INTO `server` (`path`, `title`) VALUES
('#home', 'Home'),
('#about', 'About'),
('#products', 'Products'),
('#contacts', 'Contact');

-- --------------------------------------------------------

--
-- Структура таблицы `shortstory`
--

CREATE TABLE IF NOT EXISTS `shortstory` (
  `image` varchar(30) NOT NULL,
  `header` varchar(30) NOT NULL,
  `fulltext` varchar(250) NOT NULL,
  `button` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `shortstory`
--

INSERT INTO `shortstory` (`image`, `header`, `fulltext`, `button`) VALUES
('img/mac.png', 'Our Short Story', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam volupat purus in ferment uecter tortor id,pharetra lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam govoryat lalala new music lalaala.', 'more about our team');

-- --------------------------------------------------------

--
-- Структура таблицы `startproject`
--

CREATE TABLE IF NOT EXISTS `startproject` (
  `header` varchar(30) NOT NULL,
  `text` varchar(100) NOT NULL,
  `button` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `startproject`
--

INSERT INTO `startproject` (`header`, `text`, `button`) VALUES
('Are you ready to go?', 'Here the call to action area. Lorem ipsum dolor sit amet and click to the button', 'START YOU PROJECT'),
('Are you ready to go?', 'Here the call to action area. Lorem ipsum dolor sit amet and click to the button', 'START YOU PROJECT');

-- --------------------------------------------------------

--
-- Структура таблицы `xpskills`
--

CREATE TABLE IF NOT EXISTS `xpskills` (
  `desc` varchar(20) NOT NULL,
  `percentage` varchar(5) NOT NULL,
  `width` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `xpskills`
--

INSERT INTO `xpskills` (`desc`, `percentage`, `width`) VALUES
('C++ development', '95%', '95%'),
('.Net', '75%', '75%'),
('HTML5', '80%', '80%'),
('JQuery', '80%', '80%'),
('Angular', '60%', '60%');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
