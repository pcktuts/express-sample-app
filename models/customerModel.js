const promisePool = require('../config/db')
async function getCustomers(limit=5){
    // simple query
    const [rows, _] = await promisePool.query
    (
        'SELECT * FROM `customers` ORDER BY customerNumber DESC LIMIT ?', [limit])    
    return rows.map((row) => { return row  });  
    
}

module.exports = {
    getCustomers: getCustomers
}
