const {fetch,fetchAll} = require('../../lib/postgres')
const CoursesGetAll  = `
SELECT
  *
FROM
  courses
`
const CoursesGet = `
SELECT
  *
FROM
  courses
WHERE
  is_deleted = true;
`
const Create_Courses = `
INSERT INTO courses(course_name,course_short,course_more,course_pics)
 values 
 ($1,$2,$3,$4)
 RETURNING *
`
const Update_Courses = `
UPDATE
  courses
SET
course_name = $1,
course_short = $2,
course_more = $3,
course_pics = $4
WHERE
course_id = $5
RETURNING *  
`
const Change_del = `
UPDATE
  courses
SET
  is_deleted = $1
WHERE
  course_id = $2
RETURNING *
`
const DeleteCourse = `
UPDATE
  courses
SET
  is_deleted = $1
WHERE
  course_id = $2
RETURNING *
`
const Courses  = () => fetchAll(CoursesGetAll)
const CoursesFront = () => fetchAll(CoursesGet)
const C_Courses = (course_name,course_short,course_more,course_pics) => fetch(Create_Courses,course_name,course_short,course_more,course_pics)
const Update = (course_name,course_short,course_more,course_pics,course_id) => fetch(Update_Courses,course_name,course_short,course_more,course_pics,course_id)
const Change = (is_deleted,course_id) => fetch(Change_del,is_deleted,course_id)
const Delete = (is_deleted,course_id) => fetch(DeleteNews,is_deleted,course_id)
module.exports = {
   Courses,
   C_Courses,
   Update,
   Change,
   Delete,
   CoursesFront
}