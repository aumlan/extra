var db = require('./db');

module.exports = {
    get: function(adminId, callback) {
        var sql = "select * from admins where A_ID = ?";

        db.getResult(sql, [adminId], function(result) {
            callback(result);
        });
    },
    getAll: function(callback) {
        var sql = "select * from admins";
        db.getResult(sql, [], function(results) {
            callback(results);
        });
    },
    insert: function(admin, callback) {
        var sql = "insert into admins values (?, ?, ?, ?)";
        db.execute(sql, [admin.id, admin.name, admin.address, admin.email], function(status) {
            callback(status);
        });
    },

}