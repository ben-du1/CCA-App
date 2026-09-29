const fs = require('fs')

const addPost = (db,fields,files,res) => {
    const d = new Date()
    const timeNow = d.getTime()
    const oldPath = files.image[0].filepath
    const newPath = timeNow + files.image[0].originalFilename
    
    const rawData = fs.readFileSync(oldPath)

    if (!(fields.title[0] && fields.author[0] && timeNow && fields.content[0] && newPath)) return res.redirect('/manageposts')


    fs.writeFile('./resources/images/'+newPath,rawData,(err) => {
        if (err) console.log(err)

        const stmt = db.prepare('INSERT INTO posts(title,author,date,content,image) VALUES(?,?,?,?,?)')
        stmt.run(fields.title[0],fields.author[0],timeNow,fields.content[0],newPath,(err) => {
            if (err) console.log(err)
        })
        stmt.finalize()
        res.redirect('/manageposts')
    })
}

module.exports = addPost