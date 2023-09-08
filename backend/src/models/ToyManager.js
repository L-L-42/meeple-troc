const AbstractManager = require("./AbstractManager");

class ToyManager extends AbstractManager {
  constructor() {
    super({ table: "toy" });
  }

  insert(toy) {
    return this.database.query(`insert into ${this.table} set ?`, [toy]);
  }

  update(toy) {
    return this.database.query(`update ${this.table} set = ? where id = ?`, [
      toy,
      toy.id,
    ]);
  }

  findAllToys() {
    return this.database.query(
      `select id, name, type, photo, description from  ${this.table}`
    );
  }

  findOneToy(id) {
    return this.database.query(
      `select id, name, type, photo, description from  ${this.table} where id = ?`,
      [id]
    );
  }
}

module.exports = ToyManager;
