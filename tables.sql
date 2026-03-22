CREATE TABLE USER (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE BUILD (
    build_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    build_name VARCHAR(100) NOT NULL,
    build_details TEXT,
    CONSTRAINT fk_build_user
    FOREIGN KEY (user_id) REFERENCES USER(user_id)
);

CREATE TABLE MATCH_LOG (
    match_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    build_id INT,
    role VARCHAR(20) NOT NULL,
    result VARCHAR(50) NOT NULL,
    killer_name VARCHAR(50) NOT NULL,
    notes TEXT,
    CONSTRAINT fk_matchlog_user
    FOREIGN KEY (user_id) REFERENCES USER(user_id),
    CONSTRAINT fk_matchlog_build
    FOREIGN KEY (build_id) REFERENCES BUILD(build_id)
);

CREATE TABLE PERK (
    perk_id INT AUTO_INCREMENT PRIMARY KEY,
    perk_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    icon_path VARCHAR(255)
);

CREATE TABLE BUILD_PERK (
    build_id INT NOT NULL,
    perk_id INT NOT NULL,
    CONSTRAINT pk_build_perk PRIMARY KEY (build_id, perk_id),
    CONSTRAINT fk_buildperk_build
    FOREIGN KEY (build_id) REFERENCES BUILD(build_id),
    CONSTRAINT fk_buildperk_perk
    FOREIGN KEY (perk_id) REFERENCES PERK(perk_id)
);