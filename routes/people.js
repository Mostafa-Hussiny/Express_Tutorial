const express = require('express')
const router = express.Router();

const {
    getPeople,
    creaatePerson,
    creaatePersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people');

// first flavour
// router.get('/', getPeople)
// router.post('/', creaatePerson)
// router.post('/postman', creaatePersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

// second flavour

router.route('/').get(getPeople).post(creaatePerson);
router.route('/postman').post(creaatePersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router