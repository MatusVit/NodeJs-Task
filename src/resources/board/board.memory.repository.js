const Board = require('./board.model');

const DB = [];
DB.push(new Board(), new Board(), new Board());

const getAll = async () => DB;

const get = async id => DB.filter(el => el.id === id)[0];

const create = async board => {
  DB.push(board);
  return get(board.id);
};

const update = async obj => {
  const board = await get(obj.id);
  const { title, columns } = obj.body;
  if (title) board.title = title;
  if (columns && Array.isArray(columns)) board.columns = columns;
  return get(obj.id);
};

const deleteBoard = async id => {
  const index = await DB.findIndex(el => el.id === id);
  if (index === -1) return false;
  DB.splice(index, 1);
  return true;
};

module.exports = { getAll, get, create, update, deleteBoard };
