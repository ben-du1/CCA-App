const getPosts = (db,res) => {
    db.all("SELECT * FROM posts",(err,rows) => {
        if (err) console.log(err)
        res.send(JSON.stringify(rows))
    }) 
}

module.exports = getPosts