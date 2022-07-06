const connection = {
    connectionString: 'postgres://nmfvmito:6FljDRSUyMzNxnbJHDwU8ldiK_TWNZNy@hattie.db.elephantsql.com/nmfvmito'
}
const PORT = process.env.PORT || 9000
const SECRET_KEY = "NO_SECRET_KEY"
module.exports = {
    connection,
    PORT,
    SECRET_KEY
}