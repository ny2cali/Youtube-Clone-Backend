const express = require('express');
const app = express();


const PORT = 3001

app.listen(PORT, ()=> {
    console.log(`Server Running on Port ${PORT}...`)
})


app.get('/', (req, res)=> {
    res.send("Hello World!")
}

)