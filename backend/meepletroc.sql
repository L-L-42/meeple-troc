CREATE TABLE `toyLibrary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `toyLibrary`
VALUES
  (1, "ludothèque de John"),
  (2, "ludothèque de Jane"),
  (3, "ludothèque du beaugosse !");

CREATE TABLE `toyBox` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `toyBox`
VALUES
  (1, "le coffre à jouet de john"),
  (2, "le coffre à jouet de jane"),
  (3, "le coffre du beaugosse!");

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NULL,
  `role` ENUM ('meeple', 'admin') DEFAULT 'meeple',
  `street` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zip_code` int NOT NULL,
  `presentation` TEXT(500) DEFAULT NULL,
  `toyLibrary_id` int DEFAULT NULL,
  `toyBox_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_toyLibrary` (`toyLibrary_id`),
  KEY `fk_user_toyBox` (`toyBox_id`),
  CONSTRAINT `fk_user_toyLibrary` FOREIGN KEY (`toyLibrary_id`) REFERENCES `toyLibrary` (`id`),
  CONSTRAINT `fk_user_toyBox` FOREIGN KEY (`toyBox_id`) REFERENCES `toyBox` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

LOCK TABLES `user` WRITE;

/*!40000 ALTER TABLE `user` DISABLE KEYS */
;

INSERT INTO
  `user`
VALUES
  (
    1,
    "John",
    "john@gmail.com",
    "john123",
    "...",
    "meeple",
    "4 avenue du test",
    "Chartres",
    28000,
    "Je suis un grand joeur de jeux d'escape.",
    1,
    1
  ),
  (
    2,
    "Jane",
    "jane@gmail.com",
    "jane123",
    "...",
    "meeple",
    "2 rue du général",
    "Paris",
    75004,
    "J'aime les jeux solo.",
    2,
    2
  ),
  (
    3,
    "Bob",
    "Bob@gmail.com",
    "bob123",
    "...",
    "admin",
    "4 rue de la gare",
    "La Loupe",
    28900,
    "J'aime les jeux de stratégie et les jeux coopératifs.",
    3,
    3
  );

/*!40000 ALTER TABLE `user` ENABLE KEYS */
;

UNLOCK TABLES;

CREATE TABLE `boardGame` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` enum (
    'jeux en famille',
    'jeux ambiance',
    'jeux coopératifs',
    'jeux enquête',
    'jeux escape',
    'jeux avec les enfants',
    'jeux expert',
    'jeux solo',
    'jeux duo',
    'jeux adresse',
    'jeux évolutifs',
    'jeux expérimenté',
    'jeux de gestion',
    'jeux de dés',
    'jeux de dessin',
    'jeux de mots',
    'jeux de cartes',
    'puzzle',
    'jeux de rôle'
  ) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `description` text(500),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `boardGame`
VALUES
  (
    1,
    "Time Stories",
    "jeux coopératifs",
    "...",
    "Ce jeux est de 2 à 4 joeurs. Il existe des extensions."
  ),
  (
    2,
    "Unlock",
    "jeux escape",
    "...",
    "Ce jeux est fait pour vous si vous aimez les escapes games et surtout trouver la solution avant vos amis. "
  ),
  (
    3,
    "Monopoly",
    "jeux de gestion",
    "...",
    "On ne présente pas ce jeu. Il se joue. Le véritable but: détruire ses relations avec ses amis ou bien sa famille."
  );

CREATE TABLE `toy` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` enum (
    'poupées, animaux, miniatures',
    'jouets de construction',
    'véhicules',
    'casse-têtes',
    'activité physique',
    'collection et conservation',
    'jouets promotionnels',
    'jouets musicaux',
    'jouets cognitifs'
  ) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `description` text(500),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `toy`
VALUES
  (
    1,
    "Lego Star-Wars",
    "jouets de construction",
    "...",
    "La fameuse étoile de la mort! à vous le plaisir de construire l'arme ultime de tout dictateur qui se respecte! "
  ),
  (
    2,
    "Barbie chirurgienne",
    "poupées, animaux, miniatures",
    "...",
    "Vous avez envie de refaire un petit coup de bistouri à vos poupées? Barbie a fait des études pour ça! Il y a l'ensemble des accessoires: masque chirurgical, morphine, scalpel,etc."
  ),
  (
    3,
    "Locomotive à vapeur",
    "collection et conservation",
    "...",
    "Cette locomotive date de 1968. Je n'ai retrouvé que la locomotive par contre."
  );

CREATE TABLE `toyLibrary_boardGame` (
  `boardGame_id` int NOT NULL,
  `toyLibrary_id` int NOT NULL,
  `exchange` tinyint(1) NOT NULL,
  CONSTRAINT `fk_toyLibrary_boardGame_toy_library` FOREIGN KEY (`toyLibrary_id`) REFERENCES `toyLibrary` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `toyLibrary_boardGame`
VALUES
  (1, 1, 1),
  (2, 2, 0),
  (3, 3, 1);

CREATE TABLE `toyBox_toy` (
  `toy_id` int NOT NULL,
  `toyBox_id` int NOT NULL,
  `exchange` tinyint(1) NOT NULL,
  CONSTRAINT `fk_toyBox_toy_toy_box` FOREIGN KEY (`toyBox_id`) REFERENCES `toyBox` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 0 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `toyBox_toy`
VALUES
  (1, 1, 1),
  (2, 2, 0),
  (3, 3, 1);