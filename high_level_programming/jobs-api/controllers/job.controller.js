import { StatusCodes } from "http-status-codes";

const getJobs = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, message: "Get all jobs" });
};

const createJob = async (req, res) => {
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, message: "job created" });
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
