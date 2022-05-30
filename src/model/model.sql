CREATE TABLE admins(
    admin_id serial PRIMARY KEY,
    admin_name text not null,
    admin_password text not null
);
CREATE TABLE news(
    news_id serial PRIMARY KEY,
    news_title text not null,
    news_body text not null,
    news_at  timestamptz DEFAULT CURRENT_TIMESTAMP,
    news_pics text  not null,
    is_deleted boolean DEFAULT false
);
CREATE TABLE courses(
    course_id serial PRIMARY KEY,
    course_name text not null,
    course_short text not null,
    course_more text not null,
    course_pics text not null,
    is_deleted boolean DEFAULT false
);
CREATE TABLE orders(
    order_id serial PRIMARY KEY,
    order_name text not null,
    order_phone text not null,
    order_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    is_call boolean DEFAULT false,
    is_deleted boolean DEFAULT false,
    course_id int REFERENCES courses(course_id) not null
);
CREATE TABLE network_data(
    network_id serial PRIMARY KEY,
    location_name text not null,
    email text not null,
    telegram text not null,
    phone text not null
);
CREATE TABLE birthday(
    birthday_id serial PRIMARY KEY,
    birthday_name text not null,
    birthday_congrtulation text not null,
    birthday_who text not null,
    birthday_pics text not null,
    birthday_at timestamptz DEFAULT CURRENT_TIMESTAMP,
    is_deleted boolean DEFAULT false
);