var db = require('./db');

module.exports = {
    get: function(userId, callback) {
        var sql = "select * from users where U_ID = ?";

        db.getResult(sql, [userId], function(result) {
            callback(result);
        });
    },
    getAll: function(callback) {
        var sql = "select * from users";
        db.getResult(sql, [], function(results) {
            callback(results);
        });
    },
    validate: function(user, callback) {
        var sql = "select * from users where U_ID = ? and U_PASSWORD = ?";

        db.getResult(sql, [user.userId, user.password], function(result) {
            callback(result);
        });
    },


}