const uuid = require('uuid');

class Board {
  constructor({ id = uuid(), title = 'Board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponseWithoutId(board) {
    const { title, columns } = board;
    return { title, columns };
  }
}

module.exports = Board;
