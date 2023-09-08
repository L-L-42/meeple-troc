const AbstractManager = require("./AbstractManager");

class ToyBoxManager extends AbstractManager {
  constructor() {
    super({ table: "toyBox" });
  }

  insert(toyBox) {
    return this.database.query(`insert into ${this.table} set ?`, [toyBox]);
  }

  update(toyBox) {
    return this.database.query(`update ${this.table} set = ? where id = ?`, [
      toyBox,
      toyBox.id,
    ]);
  }
}
module.exports = ToyBoxManager;
