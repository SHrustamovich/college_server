const connection = {
    connectionString: 'postgres://postgres:shohruh0949@localhost:5432/kxm',
    connectionElString:''
}
const PORT = process.env.port || 9000
const SECRET_KEY = "NO_SECRET_KEY"
module.exports = {
    connection,
    PORT,
    SECRET_KEY
}