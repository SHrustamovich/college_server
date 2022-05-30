const {fetch,fetchAll} = require('../../lib/postgres')
const Orders = `
SELECT 
  * 
FROM
  orders o
INNER JOIN courses c
ON o.course_id = c.course_id;

`
const Create_Order =`
INSERT INTO orders(order_name,order_phone,course_id)
VALUES($1,$2,$3)
RETURNING *
`
const Update_Order = `
UPDATE
  orders
SET
  is_call = $1
WHERE
  order_id = $2
RETURNING *
`
const CREATE_ORD = (order_name,order_phone,course_id) => fetch(Create_Order,order_name,order_phone,course_id)
const Order = () => fetchAll(Orders)
const Update_Called = (is_call,order_id) => fetch(Update_Order,is_call,order_id)
module.exports ={
  Order,
  CREATE_ORD,
  Update_Called
}