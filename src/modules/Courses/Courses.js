const model = require('./model')
const path = require('path')
module.exports = {
    GET:async(_,res) => {
        try{
            res.send(await model.Courses())
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })
        }
    },
    GETFRONT:async(_,res) => {
        try{
            res.send(await model.CoursesFront())
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })
        }
    },
    POST:async(req,res) => {
        try{ 
        const {course_name,course_short,course_more,course_pics} = req.body
        // console.log(course_name,course_short,course_more,course_pics);
        // console.log(course_pics);
        res.send(await model.C_Courses(course_name,course_short,course_more,course_pics))
      }catch(err){
          res.status(400).send({
              status:400,
              err:err.message
          })
      }
    },
    PUT:async(req,res) => {
        try{
             const {course_name,course_short,course_more,course_pics,course_id} = req.body
             res.send(await model.Update(course_name,course_short,course_more,course_pics,course_id))
        }catch(err){
          res.status(400).send({
              status:400,
              err:err.message
          }) 
        }
      },
      PUTchange:async(req,res) => {
        try{
            const {course_id} = req.body
          const CourseArr = await model.Courses()
          const SortCourses = CourseArr.find(e => e.course_id == course_id)
          const is_deleted = !SortCourses.is_deleted
          res.send(await model.Change(is_deleted,course_id))
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })  
        }
    },
    DELETE:async(req,res) => {
        try{
            const {is_deleted,course_id} = req.body
            res.send(await model.Delete(is_deleted,course_id))
       }catch(err){
           res.status(400).send({
               status:400,
               err:err.message
           })  
       }
    }
}