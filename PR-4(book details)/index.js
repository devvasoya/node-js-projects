const express = require('express')

const port = 9000;

const app = express()

const db = require('./config/db')

app.set('view engine', 'ejs');

const user = require('./models/userModel')

app.use(express.urlencoded())

app.get('/', (req, res) => {
    user.find({})
        .then((data) => {
            res.render('view', {
                record: data
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/add', (req, res) => {
    res.render('add')
})

app.post('/insertRecord', (req, res) => {
    const { name, price, pages, author } = req.body;

    user.create({
        name: name,
        price: price,
        pages: pages,
        author: author
    }).then((data, err) => {
        if (err) {
            console.log(err);
            return false
        }
        console.log('record add');
        return res.redirect('/add');
    })
})

app.get('/deleteRecord', (req, res) => {
    let id = req.query.deleteId;
    user.findByIdAndDelete(id)
        .then((data) => {
            console.log('user delete');
            return res.redirect('/')
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.get('/editRecord', (req, res) => {
    let id = req.query.id;
    user.findById(id)
        .then((single) => {
            return res.render('edit', {
                data: single
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
})

app.post('/updateRecord', (req, res) => {
    const { editid, name, price, pages, author } = req.body;

    user.findByIdAndUpdate(editid, {
        name: name,
        price: price,
        pages: pages,
        author: author
    }).then((data) => {
        console.log(data);
        return res.redirect('/')
    }).catch((err) => {
        console.log(err);
        return false;
    })
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log('server is ruuning...');

})