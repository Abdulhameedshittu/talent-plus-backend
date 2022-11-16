const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({
    origin: '*'
}));

app.get('/',(req, res) => {
    res.send("TALENT PLUS")
})

app.listen(port, ()=>{
    console.log(`app running at port ${port}....`)
}
)