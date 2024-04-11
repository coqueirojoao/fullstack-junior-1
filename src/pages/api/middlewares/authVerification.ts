import { NextApiRequest, NextApiResponse } from "next";
import { HttpStatus } from "../utils/httpStatus";

type NextApiHandler = {
    (req: NextApiRequest, res: NextApiResponse): void | Promise<void>;
}

const authMiddleware = (handler: NextApiHandler) => (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers['secret'];

    if (!token || token !== process.env.SECRET_KEY) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
    }

    return handler(req, res);
}

export default authMiddleware;