const {verifyuser} = require('../lib/jwt')
const modelAdmin = require('../modules/admins/model')

module.exports = {
    Auth:async(req,res,next) => {
        try{
               const admin = await modelAdmin.admins()
               const { token } = req.headers
               console.log(token);
               const {admin_id,name} = verifyuser(token)
               const foundUser = admin.find(e => e.admin_id === admin_id && admin_name === name)
               if(!foundUser){
                   res.redirect('/admin')
                   return
               }
               next()
        }catch(err) {
            res.status(400).send({
                status:400,
                err:err.message
            })
        }
    }
}