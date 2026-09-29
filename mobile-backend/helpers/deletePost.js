const fs = require('fs')

const deletePost = (db,post_id,res) => {
    db.all("SELECT image FROM posts  WHERE post_id="+post_id,(err,rows) => {
        if (err) console.log(err)
        fs.unlink('./resources/images/'+rows[0].image,(err) => {
            if (err) console.log(err)
                db.run("DELETE FROM posts WHERE post_id="+post_id,(err) => {
                    if (err) console.log(err)
                        res.status(200)
                })
        })
    })
    }

module.exports = deletePost