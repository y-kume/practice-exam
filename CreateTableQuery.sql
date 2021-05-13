-- create table mondaiset
-- (ID serial,
-- name text,
-- seisaku_nitiji timestamp,
-- primary key (ID));

/*外部キーを指定してテーブル作成*/
-- create table mondai
-- (ID serial,
-- mondaiset_ID int references mondaiset(ID),
-- mondai_bun text,
-- seisaku_nitiji timestamp,
-- primary key (ID));

-- create table sentakushi
-- (ID serial,
-- mondai_ID int references mondai(ID),
-- hyouji_mei text,
-- hyouji_jun int,
-- primary key (ID));

-- create table kaitoset
-- (ID serial,
-- mondaiset_ID int references mondaiset(ID),
-- kaishi_nitiji timestamp,
-- shuryou_nitiji timestamp,
-- seisaku_nitiji timestamp,
-- primary key (ID));

-- create table kaito
-- (ID serial,
-- kaitoset_ID int,
-- mondai_ID int ,
-- seikai boolean,
-- kaito_sentakushi_ID int,
-- seisaku_nitiji timestamp,
-- primary key (ID));
