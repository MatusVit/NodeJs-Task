const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const get = id => boardRepo.get(id);

const create = board => boardRepo.create(board);

const update = obj => boardRepo.update(obj);

const deleteBoard = id => boardRepo.deleteBoard(id);

module.exports = { getAll, get, create, update, deleteBoard };
