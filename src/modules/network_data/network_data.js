const model = require('./model')

module.exports = {
   Network:async(req,res) => {
       try{
           const Network = await model.Network()
            res.send(Network)
       }catch(err){
           res.status(400).send({
               status:400,
               err:err.message
           })
       }
   }
}