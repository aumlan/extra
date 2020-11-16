var db = require('./db');

module.exports = {
    get: function(memberId, callback) {
        var sql = "select * from members where M_ID = ?";

        db.getResult(sql, [memberId], function(result) {
            callback(result);
        });
    },
    getAll: function(callback) {
        var sql = "select * from members";
        db.getResult(sql, [], function(results) {
            callback(results);
        });
    },
    insert: function(member, callback) {
        var sql = "insert into members values (?, ?, ?, ?)";
        db.execute(sql, [member.id, member.name, member.address, member.email], function(status) {
            callback(status);
        });
    },
}