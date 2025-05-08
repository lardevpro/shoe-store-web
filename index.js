const express = require('express');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js')

app.listen(3000, ()=> {
    console.log('Servidor activo')
});


app.use('/estudiantesRoutes', estudiantesRoutes);

//get - put - path - delet
app.get('/', (req, res)=>{
    res.send('Hola mundo');
}) 

