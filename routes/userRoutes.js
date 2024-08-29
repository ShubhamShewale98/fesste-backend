const express = require('express');
const { registerUser, loginUser, deleteUser, getAllUsers } = require('../controllers/userController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

// register
router.post('/register', registerUser);
// 

router.get('/',protect , admin, getAllUsers);

// login
router.post('/login', loginUser);

// delete user 
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
