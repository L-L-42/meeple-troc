const AbstractManager = require("./AbstractManager");

class BoardGameManager extends AbstractManager {
  constructor() {
    super({ table: "boardGame" });
  }

  insert(boardGame) {
    return this.database.query(`insert into ${this.table} set ?`, [boardGame]);
  }

  update(boardGame) {
    return this.database.query(`update ${this.table} set = ? where id = ?`, [
      boardGame,
      boardGame.id,
    ]);
  }
}

module.exports = BoardGameManager;
