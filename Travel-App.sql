CREATE TABLE `Tour` (
  `tourId` bigint PRIMARY KEY AUTO_INCREMENT,
  `reviewId` bigint,
  `title` varchar(255),
  `description` varchar(1000),
  `imageURL` varchar(255),
  `price` bigint,
  `location` varchar(1000),
  `duration` datetime,
  `departureDate` datetime,
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `User` (
  `userId` bigint PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `password` varchar(1000),
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `BookingTour` (
  `bookingId` bigint PRIMARY KEY AUTO_INCREMENT,
  `userId` bigint,
  `tourId` bigint,
  `bookingDate` datetime,
  `totalPrice` bigint,
  `status` varchar(50)
);

CREATE TABLE `Review` (
  `reviewId` bigint PRIMARY KEY AUTO_INCREMENT,
  `tourId` bigint,
  `userId` bigint,
  `star` int,
  `content` varchar(1000)
);

CREATE TABLE `BlogPost` (
  `blogId` bigint PRIMARY KEY AUTO_INCREMENT,
  `userId` bigint,
  `title` varchar(255),
  `content` varchar(1000),
  `imageURL` varchar(255),
  `createAt` datetime,
  `updateAt` datetime
);

CREATE TABLE `Cart` (
  `cartId` bigint PRIMARY KEY AUTO_INCREMENT,
  `userId` bigint,
  `totalPrice` bigint
);

CREATE TABLE `CartDetail` (
  `cartDetailId` bigint PRIMARY KEY AUTO_INCREMENT,
  `cartId` bigint,
  `tourId` bigint,
  `quantity` int,
  `totalPrice` bigint
);

ALTER TABLE `Tour` ADD FOREIGN KEY (`tourId`) REFERENCES `BookingTour` (`tourId`);

ALTER TABLE `BookingTour` ADD FOREIGN KEY (`userId`) REFERENCES `User` (`userId`);

ALTER TABLE `Review` ADD FOREIGN KEY (`tourId`) REFERENCES `Tour` (`tourId`);

ALTER TABLE `Review` ADD FOREIGN KEY (`userId`) REFERENCES `User` (`userId`);

ALTER TABLE `BlogPost` ADD FOREIGN KEY (`userId`) REFERENCES `User` (`userId`);

ALTER TABLE `Cart` ADD FOREIGN KEY (`userId`) REFERENCES `User` (`userId`);

ALTER TABLE `CartDetail` ADD FOREIGN KEY (`cartId`) REFERENCES `Cart` (`cartId`);

ALTER TABLE `Tour` ADD FOREIGN KEY (`tourId`) REFERENCES `CartDetail` (`tourId`);
