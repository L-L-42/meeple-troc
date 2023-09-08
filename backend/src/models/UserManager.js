const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(`insert into ${this.table} set ?`, [user]);
  }

  update(user) {
    return this.database.query(`update ${this.table} set = ? where id = ?`, [
      user,
      user.id,
    ]);
  }

  findAllUsers() {
    return this.database.query(
      `select id, pseudo,
  email,
  password,
  avatar,
  role,
  street,
  city,
  zip_code,
  presentation,
  toyLibrary_id,
  toyBox_id
   from  ${this.table}`
    );
  }

  findOneUser(id) {
    return this.database.query(
      `select id, pseudo,
      email,
      password,
      avatar,
      role,
      street,
      city,
      zip_code,
      presentation,
      toyLibrary_id,
      toyBox_id from  ${this.table} where id = ?`,
      [id]
    );
  }
}
module.exports = UserManager;
