const db = require('./models');

db.sync({force: true})
.then(() => {
    console.log('success');
    db.close()
})
.catch((err) => {
    console.log('connection didnt work')
    db.close()
})

