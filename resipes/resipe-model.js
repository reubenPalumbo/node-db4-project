const db = require("../data/db-config");

module.exports = {
  find() {
    return db("resipes");
  },
  findById(id) {
    return db("resipes").where({ id }).first();
  },

  add(scheme) {
    return db("resipes").insert(account);
  },
  update(changes, id) {
    return db("resipes").where({ id }).update(account);
  },
  remove(id) {
    return db("resipes").where({ id }).del();
  },
};
