import { NextApiRequest, NextApiResponse } from "next";
import { jobs } from "../../db/jobs";
import { HttpStatus } from "../../utils/httpStatus";
import authMiddleware from "../../middlewares/authVerification";

function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const id = Number(req.query.id);

    try {
      const response = jobs.find((job) => job.id === id);
      if (!response) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: "Job not found" });
      }

      return res.status(HttpStatus.OK).json(response);

    } catch (error: any) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }
}

export default authMiddleware(handler);
