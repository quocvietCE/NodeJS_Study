const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

var db = low(adapter);

db.defaults({users: []}).write();

module.exports = db;
