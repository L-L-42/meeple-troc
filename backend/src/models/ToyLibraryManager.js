const AbstractManager = require("./AbstractManager");

class ToyLibraryManager extends AbstractManager {
  constructor() {
    super({ table: "toyLibrary" });
  }

  insert(toyLibrary) {
    return this.database.query(`insert into ${this.table} set ?`, [toyLibrary]);
  }

  update(toyLibrary) {
    return this.database.query(`update ${this.table} set = ? where id = ?`, [
      toyLibrary,
      toyLibrary.id,
    ]);
  }
}
module.exports = ToyLibraryManager;
