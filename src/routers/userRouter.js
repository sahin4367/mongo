import express from "express";

import { createUser,deleteUser,getUsers, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post('/users' , createUser);

router.get('/users' , getUsers);
router.put('/users/:id' ,updateUser);

router.delete('/users/:id' ,deleteUser);
export default router;
