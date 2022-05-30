const model = require('./model')

module.exports ={
  GET:async(_,res) => {
      try{
             res.send(await model.Order())
      }catch(err){
          res.status(400).send({
              status:400,
              err:err.message
          })
      }
  },
  POST:async(req,res) => {
      try{
         const {order_name,order_phone,course_id} = req.body
         res.send(await model.CREATE_ORD(order_name,order_phone,course_id))
      }catch(err){
        res.status(400).send({
            status:400,
            err:err.message
        })
      }
  },
  PUT:async(req,res) => {
      try{
          const {order_id} = req.body
          const OrderArr = await model.Order()
          const SortOrder = OrderArr.find(e => e.order_id == order_id)
          const tryFalse = !SortOrder.is_call
          res.send(await model.Update_Called(tryFalse,order_id))
      }catch(err){
        res.status(400).send({
            status:400,
            err:err.message
        }) 
      }
  }
}