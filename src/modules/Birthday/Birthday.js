const model = require('./model')

module.exports ={
    GET:async(_,res) => {
        try{ 
            res.send(await model.BirthdayGet())
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })
        }
    },
    GETALL:async(_,res) => {
        try{ 
            res.send(await model.AllBirthday())
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })
        }
    },
    POST:async(req,res) => {
        try{
          const {birthday_name,birthday_congrtulation,birthday_who,birthday_pics} = req.body
          res.send(await model.C_Birthday(birthday_name,birthday_congrtulation,birthday_who,birthday_pics))
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })
        }
    },
    PUT:async(req,res) => {
        try{
           const {birthday_name,birthday_congrtulation,birthday_who,birthday_pics,birthday_id} = req.body
           res.send(await model.U_birthday(birthday_name,birthday_congrtulation,birthday_who,birthday_pics,birthday_id))
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })
        }
    },
    PUTDEL:async(req,res) => {
        try{
             const {birthday_id} = req.body
            const BirthdayArr = await model.AllBirthday()
            const SortBirthday = BirthdayArr.find(e => e.birthday_id = birthday_id)
             const trytrue = !SortBirthday.is_deleted
             res.send(await model.U_delete(trytrue,birthday_id))
        }catch(err){
            res.status(400).send({
                status:400,
                err:err.message
            })
        }
    }
}