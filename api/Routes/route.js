const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Read'
    });
    
});
router.post('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Create'
    });
});
router.put('/',(req, res, next)=>{
    res.status(200).json({
        message: 'All Update'
    });
});
router.patch('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Update'
    });
});
router.delete('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Delete'
    });
});

module.exports = router;