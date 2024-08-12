import { NextApiRequest, NextApiResponse } from "next";

export type UserType = {
  id: string;
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserType>
) {
  const {
    query: { userId },
  } = req;

  // 3秒遅延
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const name = userId === "foo" ? "労務華子" : "青木良子";

  res.status(200).json({ id: String(userId), name });
}
