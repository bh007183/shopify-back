const router = require("express").Router()
const db = require("../models")



router.post("/api/singlepost", async (req, res) => {
    const data = await db.Image.create(req.body).catch(err => res.status(404).json(err))
    res.json(data)
})

router.get("/api/getpublic", async (req, res) => {
    const data = await db.Image.findAll({
        where:{
            public: true
        }
    }).catch(err => res.status(404).json(err))
    res.json(data)
})



module.exports = router