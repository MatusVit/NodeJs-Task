const User = require('./user.model');

const DB = [];
DB.push(new User(), new User(), new User());

const getAll = async () => DB;

const get = async id => DB.filter(el => el.id === id)[0];

const create = async user => {
  DB.push(user);
  return get(user.id);
};

const update = async obj => {
  const user = await get(obj.id);
  if (obj.body.name) user.name = obj.body.name;
  if (obj.body.login) user.login = obj.body.login;
  if (obj.body.password) user.password = obj.body.password;
  return get(obj.id);
};

const deleteUser = async id => {
  const index = await DB.findIndex(el => el.id === id);
  DB.splice(index, 1);
  return true;
};

module.exports = { getAll, get, create, update, deleteUser };
