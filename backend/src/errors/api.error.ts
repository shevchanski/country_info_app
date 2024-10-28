import RES_STATUS from "../config/status.config";

class APIError extends Error {
  readonly statusCode: RES_STATUS;

  constructor(statusCode: RES_STATUS, msg: string) {
    super(msg);

    this.statusCode = statusCode ?? RES_STATUS.INTERNAL_ERR;
  }
}

export default APIError;
