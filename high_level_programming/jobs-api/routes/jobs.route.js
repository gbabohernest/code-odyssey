import { Router } from "express";
import {
  createJob,
  deleteJob,
  getJob,
  getJobs,
  updateJob,
} from "../controllers/job.controller.js";

const jobRouter = new Router();

jobRouter.route("/").get(getJobs).post(createJob);
jobRouter.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default jobRouter;
