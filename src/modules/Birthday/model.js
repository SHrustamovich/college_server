const {fetch,fetchAll} = require('../../lib/postgres')

const Birthday = `
SELECT 
  *
FROM
 birthday
WHERE
  is_deleted = true;
`
const BirthdayAll = `
SELECT 
  *
FROM
 birthday
`
const Create_birthday = `
INSERT INTO birthday(birthday_name,birthday_congrtulation,birthday_who,birthday_pics)
VALUES($1,$2,$3,$4)
RETURNING *
`
const Update_birthday = `
UPDATE 
   birthday
SET
  birthday_name = $1,
  birthday_congrtulation = $2,
  birthday_who = $3,
  birthday_pics = $4
WHERE
  birthday_id = $5
RETURNING *
`
const Update_delete = `
UPDATE
  birthday
SET
  is_deleted = $1
WHERE
  birthday_id = $2
RETURNING *
`
const AllBirthday = () => fetchAll(BirthdayAll)
const BirthdayGet = () => fetchAll(Birthday)
const C_Birthday = (birthday_name,birthday_congrtulation,birthday_who,birthday_pics) => fetch(Create_birthday,birthday_name,birthday_congrtulation,birthday_who,birthday_pics)
const U_birthday = (birthday_name,birthday_congrtulation,birthday_who,birthday_pics,birthday_id) => fetch(Update_birthday,birthday_name,birthday_congrtulation,birthday_who,birthday_pics,birthday_id)
const U_delete = (is_deleted,birthday_id) => fetch(Update_delete,is_deleted,birthday_id)
module.exports ={
    BirthdayGet,
    C_Birthday,
    U_birthday,
    U_delete,
    AllBirthday
}