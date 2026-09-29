const PASSWORD = 'bennybob123'
const PORT = 80

const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const formidable = require('formidable')
const sqlite3 = require('sqlite3').verbose()

const addPost = require(__dirname+'/helpers/addPost')
const getPosts = require(__dirname+'/helpers/getPosts')
const deletePost = require(__dirname+'/helpers/deletePost')

const db = new sqlite3.Database(__dirname+'/resources/ccaapp.db')

const app = express()

app.use(bodyParser.json())

    app.use(express.static(__dirname+'/interface/build/'))

app.get('/api/teachers',(req,res) => {
    fs.readFile(__dirname+'/resources/teachers.json','utf8',(err,data) => {
        res.send(JSON.stringify(JSON.parse(data)))
    })
})

app.post('/api/teachers',(req,res) => {
    if (req.body.password !== PASSWORD) return res.sendStatus(401)
    try {
        JSON.parse(req.body.teachers);
    } catch (e) {
        console.log(e)
        return res.sendStatus(400)
    }

    
    fs.writeFile(__dirname+'/resources/teachers.json',req.body.teachers,(err) => {
        if (err) return res.sendStatus(500)
        return res.sendStatus(200)
    })
})

app.post('/api/posts/add',(req,res) => {
    const form = new formidable.IncomingForm()
    form.parse(req,(err,fields,files) => {
        try {
            if ((fields.password[0] !== PASSWORD)) return res.redirect('/manageposts')
            addPost(db,fields,files,res)
        } catch {
            console.log('error adding post')
            return res.redirect('/manageposts')
        }
    })
})

app.get('/api/posts',(req,res) => {
    getPosts(db,res)
})

app.post('/api/posts/delete',(req,res) => {
    if (req.body.password !== PASSWORD) return
    deletePost(db,req.body.post_id,res)
})

app.get('/api/bulletin',(req,res) => {
    fs.readFile(__dirname+'/resources/bulletin.txt','utf-8',(err,data) => {
        if (err) console.log(err)
        res.send(JSON.stringify({bulletin:data}))
    })
})

app.get('/api/tv',(req,res) => {
    fs.readFile(__dirname+'/resources/tv.txt','utf-8',(err,data) => {
        if (err) console.log(err)
        res.send(JSON.stringify({tv:data}))
    })
})

app.post('/api/bulletin',(req,res) => {
    if (req.body.password !== PASSWORD) return
    fs.writeFile(__dirname+'/resources/bulletin.txt',req.body.bulletin,(err) => {
        if (err) console.log(err)
            return
    })
})

app.post('/api/tv',(req,res) => {
    if (req.body.password !== PASSWORD) return
    fs.writeFile(__dirname+'/resources/tv.txt',req.body.TV,(err) => {
        if (err) console.log(err)
            return
    })
})

app.get('/api/image/:file',(req,res) => {
    const fileName = req.params['file']
    res.sendFile(__dirname+'/resources/images/'+fileName)
})

app.get('*',(req,res) => {
    res.sendFile(__dirname+'/interface/build/index.html',(err) => {
        if (err) res.send('unable to handle this request, make sure interface is bundled for production')
    })
})

app.listen(PORT,() => {
    console.log('CCA Mobile App Backend Running')
})