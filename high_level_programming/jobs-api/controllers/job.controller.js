import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import { CustomAPIError, withTransaction } from "../utils/index.js";
import Job from "../models/job.model.js";

const getJobs = async (req, res) => {
  // Retrieve all job(s) for a given user
  const { userID } = req.user;
  const jobs = await Job.find(
    { createdBy: userID },
    { company: 1, position: 1, createdBy: 1 },
    null,
  ).sort({ createdAt: -1 });

  if (jobs.length < 1) {
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "No job found for this user, start creating job(s)",
      jobs,
    });
  }
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
  const { id: jobID } = req.params;

  const job = await Job.findOne(
    { _id: jobID, createdBy: req.user.userID },
    { company: 1, position: 1 },
    null,
  );

  if (!job) {
    throw new CustomAPIError("No Job found with ID", StatusCodes.NOT_FOUND);
  }

  res
    .status(StatusCodes.OK)
    .json({ success: true, message: "Get a single job", job });
};

const updateJob = async (req, res, next) => {
  const session = await mongoose.startSession();
  try {
    await session.startTransaction();

    const { id: jobID } = req.params;
    const { userID } = req.user;

    const job = await Job.findOne({ _id: jobID, createdBy: userID }, "", null);

    if (!job) {
      return next(
        new CustomAPIError("No Job found to update", StatusCodes.NOT_FOUND),
      );
    }

    Object.assign(job, req.body);
    await job.save({ session, validateBeforeSave: true, timestamp: false });

    await session.commitTransaction();

    const { company, position, status } = job;
    res.status(StatusCodes.OK).json({
      success: true,
      message: "update success",
      company,
      position,
      status,
    });
  } catch (error) {
    await session.abortTransaction();
    next(error);
  } finally {
    await session.endSession();
  }
};

const deleteJob = async (req, res, next) => {
  await withTransaction(async (session) => {
    const { id: jobID } = req.params;
    const { userID } = req.user;

    const job = await Job.findOneAndDelete(
      { _id: jobID, createdBy: userID },
      { company: 1, position: 1 },
    ).session(session);

    if (!job) {
      return next(
        new CustomAPIError("No Job Found to delete", StatusCodes.NOT_FOUND),
      );
    }
    // console.log(job);
    return res.status(StatusCodes.NO_CONTENT).end();
  }, next);
};

export { getJobs, createJob, getJob, updateJob, deleteJob };
