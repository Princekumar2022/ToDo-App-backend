const {Router} = require('express')
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController')

const router = Router()

router.get('/', getToDo)

router.post('/save', saveToDo)

router.put('/update', updateToDo)

router.post('/delete', deleteToDo)







router.all("/*", (req, res) => { res.status(400).send({ status: false, message: "Endpoint is not correct plese provide a proper end-point" }) })




module.exports = router