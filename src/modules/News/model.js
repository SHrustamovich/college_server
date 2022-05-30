const {fetch,fetchAll} = require('../../lib/postgres')
const NEWS  = `
SELECT
  *
FROM
  news
WHERE
 is_deleted = true;
`
const Create_NEWS = `
INSERT INTO news(news_title,news_body,news_pics)
 values 
 ($1,$2,$3)
 RETURNING *
`
const Update_NEWS = `
UPDATE
  news
SET
  news_title = $1,
  news_body = $2,
  news_pics = $3
WHERE
  news_id = $4
RETURNING *  
`
const Change_del = `
UPDATE
  news
SET
  is_deleted = $1
WHERE
  news_id = $2
RETURNING *
`
const DeleteNews = `
UPDATE
  news
SET
  is_deleted = $1
WHERE
  news_id = $2
RETURNING *
`
const News  = () => fetchAll(NEWS)
const C_News = (news_title,news_body,news_pics) => fetch(Create_NEWS,news_title,news_body,news_pics)
const Update = (news_title,news_body,news_pics,news_id) => fetch(Update_NEWS,news_title,news_body,news_pics,news_id)
const Change = (is_deleted,news_id) => fetch(Change_del,is_deleted,news_id)
const Delete = (is_deleted,news_id) => fetch(DeleteNews,is_deleted,news_id)
module.exports = {
    News,
    C_News,
    Update,
    Change,
    Delete
}