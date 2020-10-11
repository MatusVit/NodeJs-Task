const DB = require('../../common/inMemoryDb');

const getAll = async () => DB;

const get = async id => DB.filter(el => el.id === id)[0];

const create = async user => {
  DB.push(user);
  return get(user.id);
};

module.exports = { getAll, get, create };
