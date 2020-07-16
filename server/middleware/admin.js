let admin = (req,res,next) => {
    if(req.user.role === 0 ){
        return res.send("You are mot allowed Get the fuck out. Ooops!!!")
    }
    next()
}

module.exports = { admin }