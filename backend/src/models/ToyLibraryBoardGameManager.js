const AbstractManager = require("./AbstractManager");

class ToyLibraryBoardGameManager extends AbstractManager {
  constructor() {
    super({ table: "toyLibrary_boardGame" });
  }

  insertMultiple(boardGames) {
    const values = [];

    let sql = `INSERT INTO ${this.table} (boardGame_id, toyLibrary_id, exchange) values`;
    boardGames.forEach((boardGame) => {
      sql += " (?, ?, ?),";
      values.push(
        boardGame.boardGame_id,
        boardGame.toyLibrary_id,
        boardGame.exchange
      );
    });
    sql = sql.slice(0, -1);

    return this.database.query(sql, values);
  }

  findByToyLibraryId(id) {
    return this.database.query(
      `SELECT exchange, toyLibrary_id, b.name, b.type, b.photo, b.description FROM ${this.table} JOIN boardGame as b ON boardGame_id = b.id where toyLibrary_id = ?`,
      [id]
    );
  }
}

module.exports = ToyLibraryBoardGameManager;
