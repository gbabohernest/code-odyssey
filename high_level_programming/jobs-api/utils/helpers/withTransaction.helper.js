import mongoose from "mongoose";

/**
 * Start a mongoose transaction when performing write operations on our data
 *
 * @param fn - A callback function, a controller that performs write operation on data
 * @param next - The next middleware in the chain
 * @returns {Promise<void>}
 */

const withTransaction = async (fn, next) => {
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();

    const result = await fn(session);

    await session.commitTransaction();

    return result;
  } catch (error) {
    await session.abortTransaction();

    next(error);
  } finally {
    await session.endSession();
  }
};

export { withTransaction };
