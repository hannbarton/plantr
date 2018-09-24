const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {logging: false});


const Gardener = db.define('gardeners', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
}, {underscored: true})

const Plot = db.define('plots', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
}, {underscored: true})

const Vegetable = db.define('vegetables', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE,
    // uuid: {
    //     type: Sequelize.UUID,
    //     primaryKey: true
    //   }
}, {underscored: true})

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot)

Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});


module.exports = {db, Gardener, Plot, Vegetable};
