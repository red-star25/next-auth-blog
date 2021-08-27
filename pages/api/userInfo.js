import { getSession } from "next-auth/client";

const userInfo = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "User not authenticated" });
  } else {
    res.status(200).json({ user: session.user });
  }
};

export default userInfo;
