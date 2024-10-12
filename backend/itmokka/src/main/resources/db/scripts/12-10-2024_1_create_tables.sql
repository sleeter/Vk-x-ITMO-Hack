CREATE TABLE IF NOT EXISTS vk_user
(
    id bigint primary key,
    points int
);
CREATE TABLE IF NOT EXISTS topic
(
    id bigserial primary key,
    name varchar(30) not null,
    description varchar(255) not null
);
CREATE TABLE IF NOT EXISTS task
(
    id bigserial primary key,
    picture bytea not null,
    name varchar(30) not null,
    topic_id bigint references topic(id),
    description varchar(255) not null,
    points int not null,
    category varchar(255) not null,
    deadline timestamp not null,
    explanation text
);
CREATE TABLE IF NOT EXISTS taked_task
(
    user_id bigint references vk_user(id),
    task_id bigint references task(id),
    status varchar(30) not null,
    unique (user_id, task_id)
);
-- CREATE TABLE IF NOT EXISTS quiz
-- (
--
-- );