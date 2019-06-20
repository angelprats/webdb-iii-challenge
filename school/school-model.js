module.exports = {
    find,
    findById,
    add,
    update, 
    remove
}

const knex = require('knex');

const config = require('./knexfile.js')

const db = knex(config.development);

function find() {
    return db('lambda');
}

function findById(id) {
    return db('lambda').where({ id }).first();
}

function add(school) {
    return db('lambda').insert(school, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        })
}

function update(id, changes) {
    return db('lambda').where({ id })
    .update(changes)
    .then(count => {
        if (count > 0) {
            return findById(id)
        } else {
            return null
        }
    })
}

function remove(id) {
    return findById(id).then(school => {
        if(school) {
            return db('lambda').where({ id })
            .del()
            .then(() => school)
        } else {
            return null
        }
    })
}
