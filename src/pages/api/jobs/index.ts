import { jobs } from "../db/jobs";
import authMiddleware from "../middlewares/authVerification";
import { HttpStatus } from "../utils/httpStatus";
import { NextApiResponse, NextApiRequest } from "next";


function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {

    try {
      if (req.query && req.query.level) {
        const formattedQuery = req.query.level?.toString().toLowerCase();
        const response = jobs.filter(
          (job) => job.level.toLowerCase() === formattedQuery
        );
        return res.status(HttpStatus.OK).json(response);
      }

      return res.status(HttpStatus.OK).json(jobs);  

    } catch (error: any) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  } else {
    return res.status(HttpStatus.BAD_REQUEST).json({ message: "Method not allowed" });
  }
}

export default authMiddleware(handler);