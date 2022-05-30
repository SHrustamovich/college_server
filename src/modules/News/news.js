const model = require('./model')
// const path = require('path')
const Upload  = require('../../middlewares/multer')
module.exports = {
    GET:async(_,res) => {
        try{
            const News = await model.News()
            res.send(News)
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })
        }
    },
    POST:async(req,res) => {
        try{ 
        const {news_title,news_body,news_pics} = req.body
        // console.log(news_title,news_body,news_pics);
        res.send(await model.C_News(news_title,news_body,news_pics))
      }catch(err){
          res.status(400).send({
              status:400,
              err:err.message
          })
      }
    },
    PUT:async(req,res) => {
      try{
           const {news_id,news_title,news_body,news_pics} = req.body
        //    if(!(news_id || news_title || news_body || news_pics)){
        //        res.status(400).end()
        //    }
           res.send(await model.Update(news_title,news_body,news_pics,news_id))
      }catch(err){
        res.status(400).send({
            status:400,
            err:err.message
        }) 
      }
    },
    PUTchange:async(req,res) => {
        try{
             const {is_deleted,news_id} = req.body
             res.send(await model.Change(is_deleted,news_id))
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })  
        }
    },
    DELETE:async(req,res) => {
        try{
            const {is_deleted,news_id} = req.body
            res.send(await model.Change(is_deleted,news_id))
       }catch(err){
           res.status(400).send({
               status:400,
               err:err.message
           })  
       }
    }
}