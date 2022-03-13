// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { generate } from "../../lib/generateTroops";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { value } = JSON.parse(req.body);

    if (!value || value <= 0) {
      return res.status(400).send({ message: "Invalid Input" });
    }

    const [Spearmen, Swordsmen, Archers] = generate(value);
    
    res.status(200).json({ Spearmen, Swordsmen, Archers });
  }
}
