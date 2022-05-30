const {fetch,fetchAll} = require('../../lib/postgres')

const ADMINS = `
SELECT
  *
FROM
  admins;
`
const admins = () => fetchAll(ADMINS)
module.exports ={admins}