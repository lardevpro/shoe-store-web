const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    res.json({msg: 'Ingreso de estudiantes'});
})

router.put('/', (req, res)=> {

});

router.delete('/', (req, res)=> {
    
});


module.exports = router;