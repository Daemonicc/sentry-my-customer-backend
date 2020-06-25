const router = require("express").Router();

router.get("*", (req, res)=>{
    res.status(404).send({
        status: "failed",
        message: "route not found"
    })
})

module.exports = router;