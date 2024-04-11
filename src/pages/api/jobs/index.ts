import { jobs } from "../db/jobs";
import { HttpStatus } from "../utils/httpStatus";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {

    try {
      if (req.query) {
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
  }
}
