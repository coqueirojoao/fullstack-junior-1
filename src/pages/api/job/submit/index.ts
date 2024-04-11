import { NextApiRequest, NextApiResponse } from "next";
import Candidate from "../models/Candidate";
import { HttpStatus } from "../../utils/httpStatus";
import validateCandidate from "../../utils/validateCandidate";
import authMiddleware from "../../middlewares/authVerification";

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const candidate = req.body as Candidate;

    const validCandidate = validateCandidate(candidate);

    if (validCandidate.success === false) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: validCandidate.errors });
    }

    return res
      .status(HttpStatus.OK)
      .json({ message: `Thank you for your application, ${candidate.name}` });
  } else {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Method not allowed" });
  }
}

export default authMiddleware(handler);
