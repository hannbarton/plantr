const {db, Gardener, Plot, Vegetable} = require('./models')

console.log(db)
db.sync({force: true})
.then(() => {
    console.log('success');
    // db.close()
})
.catch((err) => {
    console.log('connection didnt work')
    db.close()
})
// console.log(Vegetable)
Vegetable.create({ name: 'carrot', color: 'orange', planted_on: new Date()})
.then(obj => {
    return obj.create({ name: 'tomato', color: 'red', planted_on: new Date()})
})

