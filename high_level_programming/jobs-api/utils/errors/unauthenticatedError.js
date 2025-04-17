import { CustomAPIError } from "./customAPIError.js";
import { StatusCodes } from "http-status-codes";

export class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
