-- CreateTable
CREATE TABLE `cms_article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cid` INTEGER NULL,
    `subCid` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `shortTitle` VARCHAR(255) NULL,
    `tagId` VARCHAR(255) NULL,
    `attr` VARCHAR(255) NULL,
    `articleView` VARCHAR(100) NULL,
    `source` VARCHAR(255) NULL,
    `author` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `img` VARCHAR(255) NULL,
    `content` LONGTEXT NULL,
    `status` TINYINT NULL DEFAULT 0,
    `pv` INTEGER NULL DEFAULT 0,
    `link` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_articletag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aid` INTEGER NULL,
    `tid` INTEGER NULL,

    INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_category` (
    `id` TINYINT NOT NULL AUTO_INCREMENT,
    `pid` TINYINT NOT NULL DEFAULT 0,
    `seoTitle` VARCHAR(255) NULL,
    `seoKeywords` VARCHAR(255) NULL,
    `seoDescription` VARCHAR(255) NULL,
    `name` VARCHAR(50) NULL,
    `pinyin` VARCHAR(255) NULL,
    `path` VARCHAR(250) NOT NULL,
    `description` VARCHAR(255) NULL,
    `type` VARCHAR(2) NULL DEFAULT '0',
    `url` VARCHAR(255) NULL,
    `orderBy` TINYINT NULL DEFAULT 0,
    `target` VARCHAR(2) NULL DEFAULT '0',
    `status` VARCHAR(2) NULL DEFAULT '0',
    `mid` VARCHAR(5) NULL DEFAULT '0',
    `listView` VARCHAR(100) NULL DEFAULT 'list.html',
    `articleView` VARCHAR(100) NULL DEFAULT 'article.html',
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_field` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mid` INTEGER NULL,
    `cname` VARCHAR(60) NULL,
    `ename` VARCHAR(60) NULL DEFAULT '',
    `type` VARCHAR(10) NULL,
    `val` VARCHAR(255) NULL,
    `defaultVal` VARCHAR(255) NULL,
    `orderBy` VARCHAR(255) NULL DEFAULT '0',
    `length` VARCHAR(255) NULL,

    INDEX `model_id`(`mid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_frag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NULL DEFAULT '',
    `mark` VARCHAR(50) NULL,
    `content` LONGTEXT NULL,
    `type` TINYTEXT NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_friendlink` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `orderBy` TINYINT NULL DEFAULT 0,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` INTEGER NULL,
    `title` VARCHAR(255) NULL,
    `name` VARCHAR(100) NULL,
    `tel` VARCHAR(50) NULL,
    `wechat` VARCHAR(50) NULL,
    `company` VARCHAR(100) NULL,
    `content` VARCHAR(500) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_model` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `model` VARCHAR(10) NULL,
    `tableName` VARCHAR(50) NULL,
    `status` VARCHAR(1) NULL DEFAULT '1',
    `remark` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_site` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NULL,
    `domain` VARCHAR(30) NULL,
    `email` VARCHAR(50) NULL,
    `wx` VARCHAR(30) NULL,
    `icp` VARCHAR(100) NULL,
    `code` VARCHAR(255) NULL,
    `json` TEXT NULL,
    `title` VARCHAR(50) NULL,
    `keywords` VARCHAR(100) NULL,
    `description` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_slide` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `imgUrl` VARCHAR(255) NULL,
    `linkUrl` VARCHAR(255) NULL,
    `mark` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cms_tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NULL,
    `path` VARCHAR(255) NULL DEFAULT '',
    `count` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ext_download` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aid` INTEGER NOT NULL,
    `fileName` VARCHAR(250) NULL DEFAULT '',
    `fileVersion` VARCHAR(255) NULL,
    `fileLink` VARCHAR(250) NULL DEFAULT '',
    `test1` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ext_lanhua` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aid` INTEGER NOT NULL,
    `lanName` VARCHAR(250) NULL DEFAULT '',
    `lanFenlei` VARCHAR(250) NULL DEFAULT '',
    `lanType` VARCHAR(250) NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plus_collect` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `taskName` VARCHAR(255) NULL,
    `targetUrl` VARCHAR(255) NULL,
    `listTag` VARCHAR(255) NULL,
    `startNum` INTEGER NULL DEFAULT 1,
    `endNum` INTEGER NULL,
    `increment` VARCHAR(255) NULL DEFAULT '1',
    `titleTag` VARCHAR(255) NULL,
    `articleTag` VARCHAR(255) NULL,
    `charset` VARCHAR(1) NULL,
    `pages` TEXT NULL,
    `parseData` TEXT NULL,
    `cid` INTEGER NULL,
    `status` VARCHAR(1) NULL DEFAULT '1',
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plus_gather` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `taskName` VARCHAR(255) NULL,
    `targetUrl` VARCHAR(255) NULL,
    `parseData` TEXT NULL,
    `cid` INTEGER NULL,
    `status` VARCHAR(1) NULL DEFAULT '1',
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sys_config` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `template` VARCHAR(50) NULL DEFAULT 'default',
    `appid` VARCHAR(50) NULL,
    `secret` VARCHAR(50) NULL,
    `accessKey` VARCHAR(50) NULL,
    `secretKey` VARCHAR(50) NULL,
    `domain` VARCHAR(50) NULL,
    `bucket` VARCHAR(50) NULL,
    `uploadWay` VARCHAR(1) NULL DEFAULT '1',
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sys_loginlog` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` INTEGER NOT NULL,
    `ip` VARCHAR(45) NULL,
    `country` VARCHAR(50) NULL,
    `prov` VARCHAR(50) NULL,
    `city` VARCHAR(50) NULL,
    `district` VARCHAR(50) NULL,
    `isp` VARCHAR(50) NULL,
    `lat` VARCHAR(15) NULL,
    `lng` VARCHAR(15) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `uid`(`uid`, `createdAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sys_menu` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `content` LONGTEXT NULL,
    `remark` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sys_notice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `type` CHAR(1) NOT NULL,
    `content` LONGTEXT NULL,
    `status` CHAR(1) NULL,
    `remark` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sys_role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(30) NOT NULL,
    `value` VARCHAR(30) NULL,
    `sort` INTEGER NOT NULL DEFAULT 0,
    `status` CHAR(1) NULL DEFAULT '1',
    `remark` VARCHAR(100) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sys_user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `role_id` VARCHAR(20) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(80) NOT NULL,
    `status` CHAR(1) NULL DEFAULT '1',
    `remark` VARCHAR(255) NULL,
    `createdAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

