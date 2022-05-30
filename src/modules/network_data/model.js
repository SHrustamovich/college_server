const {fetch,fetchAll} = require('../../lib/postgres')

const NETWORK = `
SELECT 
   *
FROM 
   network_data;
`
const Network = () =>fetchAll(NETWORK)

module.exports = {Network}