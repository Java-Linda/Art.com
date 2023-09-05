const express = require('express');
const router = express.Router();

const { createSubject, getAllSubjects, getSubjectsById } = require('../db/helpers/subjects');

// GET - /api/subjects - get all subjects
router.get('/', async (req, res, next) => {
    try{
        const subjects = await getAllSubjects();
        res.send(subjects);
    } catch (error) {
        next(error);
    }
});

// GET - /api/subjects/:subjectsId - get subject by id
router.get('/:subjectsId', async (req, res, next) => {
    try{
        const subject = await getSubjectsById(req.params.subjectsId);
        res.send(subject);
    } catch (error) {
        next(error);
    }
});

//POST - /api/subject - create a new subject
router.post('/', async (req, res, next) => {
    try{
        const subject = await createSubject(req.body);
        res.send(subject);
    } catch (error) {
        next(error);
    }
});

// PUT - /api/subjects/:subjectsId - update subjects
// router.put('/:subjectsId', async (req, res, next) => {
//     try{
//         const subject = await updateSubject(req.params.subjectsId, req.body);
//         res.send(subject);
//     } catch (error) {
//         next(error);
//     }
// });

// DELETE - /api/subjects/:subjectsId - delete a subject
// router.delete('/:subjectsId', async (req, res, next) => {
//     try{
//         const subject = await deleteSubject(req.params.subjectsId);
//         res.send(subject);
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = router;