const router = require('express').Router();
const Schools = require('./school-model');



router.post('/', (req, res) => {
    Schools.add(req.body)
    .then(school => {
        res.status.json(school)
    })
    .catch(err = res.status(500).json(err))
})


router.get('/', (req, res) => {
    Schools.find()
    .then(schools => res.status(200).json(schools))
    .catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Schools.findById(id)
        .then(school => {
            if(school) {
                res.status(200).json(school)
            } else {
                res.status(404).json({message: 'There is no school with specified id'})
            }
        })
        .catch(err => res.status(500).json(err))
});

router.get('/:id/students', (req, res) => {
    const { id } = req.params;
    Schools.findById(id)
        .then(school => {
            if(school) {
                res.status(200).json(school)
            } else {
                res.status(404).json({message: 'There is no school with specified id'})
            }
        })
        .catch(err => res.status(500).json(err))
})



router.put('/:id', (req, res) => {
    Schools.update(req.params.id, req.body)
     .then(school => {
         if(school) {
             res.status(200).json(school)
         } else {
             res.status(404).json({message: 'There is no school with specified id'})
         }
     })
})


router.delete('/:id', (req, res) => {
    Schools.remove(req.params.id)
        .then(school => {
            if(school) {
                res.status(201).json(school)
            } else {
                res.status(404).json({message: 'There is no school with specified id'})
            }
        })
})

module.exports = router;