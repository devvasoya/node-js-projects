const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/admin-panel`);

const db = mongoose.connection;

db.on("connected", (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`DB connected`);
})

module.exports = db;