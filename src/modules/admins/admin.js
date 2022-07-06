const model = require('./model')
const {signuser} = require('../../lib/jwt')
module.exports = {
    ADMIN:async(req,res) => {
        try{
            const admins = await model.admins()
           const {name,password} = req.body
           const sortAdmin = admins.find(e => e.admin_name == name && e.admin_password == password)
    
           if(!sortAdmin) {
               res.send('name or password not true')
               return
           }
           const token = signuser({admin_id:sortAdmin.admin_id,name:sortAdmin.admin_name})
           res.status(200).send({
            stutus:200,
            token:token
        })
        }catch(err){
            res.status(400).send({
                status:400,
                err:'name or password not true'
            })
        }
    }
}