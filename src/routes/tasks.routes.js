import { Router } from "express";
import { authRequired } from "../middlewares/auth.middleware.js";
import {
  getTasks,
  getTask,
  createTasks,
  deleteTask,
  updateTask,
} from "../controllers/task.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post("/tasks", authRequired, validateSchema(createTaskSchema), createTasks);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put("/tasks/:id", authRequired, updateTask);

export default router;

