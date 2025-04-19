import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import { UnauthenticatedError } from "../utils/index.js";
import Job from "../models/job.model.js";

const getJobs = async (req, res) => {
  // Retrieve all job(s) for a given user
  const { userID } = req.user;
  const jobs = await Job.find(
    { createdBy: userID },
    { company: 1, position: 1, createdBy: 1 },
    null,
  ).sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Get all jobs",
    nbHits: jobs.length,
    jobs,
  });
};

const createJob = async (req, res, next) => {
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    const { company, position } = req.body;

    const job = await Job.create(
      [{ company, position, createdBy: req.user.userID }],
      { session },
    );

    await session.commitTransaction();

    res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: "Job created successfully" });
  } catch (error) {
    await session.abortTransaction();

    next(error);
  } finally {
    await session.endSession();
  }
};
const getJob = async (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ success: true, message: "Get a single job" });
};

const updateJob = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: false, message: "update job" });
};

const deleteJob = async (req, res) => {
  res.status(StatusCodes.NO_CONTENT).end();
};

export { getJobs, createJob, getJob, updateJob, deleteJob };
