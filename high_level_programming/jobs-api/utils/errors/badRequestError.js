import { CustomAPIError } from "./customAPIError.js";
import { StatusCodes } from "http-status-codes";

export class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statuscode = StatusCodes.BAD_REQUEST;
  }
}
