-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-03-27 14:33:55
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `data`
--

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `ID` int(12) NOT NULL,
  `name` varchar(255) NOT NULL COMMENT '商品名称',
  `price_now` varchar(32) NOT NULL COMMENT '现价',
  `price_pre` varchar(32) NOT NULL COMMENT '原价',
  `count` varchar(32) NOT NULL COMMENT '商品数量',
  `src` varchar(255) NOT NULL COMMENT '商品图片',
  `detail` varchar(255) NOT NULL COMMENT '商品详情',
  `size` varchar(12) NOT NULL,
  `color` varchar(12) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`ID`, `name`, `price_now`, `price_pre`, `count`, `src`, `detail`, `size`, `color`) VALUES
(1, '小米全面屏电视65英寸 E65X', '2999', '3299', '1457', '{\"url\":\"tv_2.webp\"}\r\n', '[\"「65英寸热销款！全面屏设计，4K HDR优秀画质，海量内容满足家人的需求，2.5m观看距离选择最合适」\",\"全面屏/4K HDR/内置小爱同学/杜比+DTS/64位四核处理器\"]', '65英寸', '黑色'),
(2, '全面屏电视E43K', '1299', '1599', '865', '{\"url\":\"tv_3.webp\"}', '[\"「43英寸热销爆款！全面屏设计，小屏幕也能带来大视野，适合卧室与小客厅」\",\"全面屏设计/无边视野/世界精彩一览无余\"]', '43英寸', '黑色'),
(5, 'Redmi全自动波轮洗衣机1A 8kg', '849', '899', '3888', '{\"url\":\"tv_7.webp\"}', '[\"「热卖爆品，限时抢购价仅799元！」\",\"8kg大容量 / 10种洗涤模式 / 10挡水位调节 / 耐腐蚀金属机身 / 桶自洁、桶风干模式避免细菌滋生 / 空气阻尼减震 / 免运费及基础安装费\"]', '', '白色'),
(3, '小米电视4A 70英寸', '3499', '3999', '352', '{\"url\":\"tv_4.webp\"}', '[\"\",\"70英寸震撼巨屏 / 4K画质 细腻如真 / 杜比音效 身临其境 / PatchWall智能系统 内置小爱同学 / 海量好内容\"]', '70英寸', '黑色'),
(4, '米家互联网对开门冰箱 540L', '2899', '3699', '896', '{\"url\":\"tv_5.webp\"}', '[\"「重磅新品，限时抢购价仅2888元！」\",\"风冷无霜/环绕出风/纤薄箱体/电脑控温,持久保鲜/智能互联\"]', '', '深灰');

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `ID` int(12) NOT NULL,
  `name` varchar(255) NOT NULL COMMENT '商品名称',
  `price_now` varchar(32) NOT NULL COMMENT '现价',
  `price_pre` varchar(32) NOT NULL COMMENT '原价',
  `count` varchar(32) NOT NULL COMMENT '商品数量',
  `src` varchar(255) NOT NULL COMMENT '商品图片',
  `detail` varchar(255) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`ID`, `name`, `price_now`, `price_pre`, `count`, `src`, `detail`) VALUES
(1, '小米全面屏电视65英寸 E65X', '2999', '3299', '1457', '{\"url\":\"tv_2.webp\"}\r\n', '全面屏设计'),
(2, '全面屏电视E43K', '1299', '1599', '865', '{\"url\":\"tv_3.webp\"}', '全面屏设计，海量内容'),
(5, 'Redmi全自动波轮洗衣机1A 8kg', '849', '899', '3888', '{\"url\":\"tv_7.webp\"}', '一键操作，父母都爱用'),
(3, '小米电视4A 70英寸', '3499', '3999', '352', '{\"url\":\"tv_4.webp\"}', '大屏更享受'),
(4, '米家互联网对开门冰箱 540L', '2899', '3699', '896', '{\"url\":\"tv_5.webp\"}', '重磅新品福利特惠'),
(6, '15.6\" 四核i7 16G 独显 512G', '4899', '', '683', '{\"url\":\"tv_8.webp\"}', '全面均衡的国民轻薄本'),
(7, 'Air 13.3\" 2019款', '5399', '', '1293', '{\"url\":\"tv_9.webp\"}', '新一代独立显卡'),
(8, '米家互联网烟灶套装（天然气）', '1999', '', '368', '{\"url\":\"tv_10.webp\"}', '');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL COMMENT '用户ID',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `phone` bigint(11) NOT NULL COMMENT '手机号',
  `email` varchar(255) NOT NULL COMMENT '邮箱',
  `sex` int(1) NOT NULL COMMENT '性别',
  `address` varchar(255) NOT NULL COMMENT '地址'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`ID`, `username`, `password`, `phone`, `email`, `sex`, `address`) VALUES
(10001, 'zhangsan', 'aaa1', 13772838495, '28734832@qq.com', 1, '杭州'),
(10003, 'lisi', 'aaa2 ', 12998645725, '123@163.com ', 1, '上海 '),
(10004, 'wangwu', 'aaa3 ', 18369898347, '123@qq.com ', 0, '青岛 '),
(10005, 'zhaoliu', 'aaa4', 12844278593, 'suash@sina.com', 1, '宁波'),
(10006, 'qiqi', 'aaa5', 13859534367, 'vdser32@163.com', 0, '北京'),
(10002, 'admin', 'aaa0', 11111111111, '1111111@qq.com', 1, '新疆乌鲁木齐');

--
-- 转储表的索引
--

--
-- 表的索引 `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`ID`);

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`);

--
-- 表的索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `ID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID', AUTO_INCREMENT=10008;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
