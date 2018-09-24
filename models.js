const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {logging: false});
module.exports = db;

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
    planted_on: Sequelize.DATE
}, {underscored: true})

Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});

Gardener.belongsTo(Vegetable)
Vegetable.hasMany(Gardener, {through: 'favoriteVegetableId'})
