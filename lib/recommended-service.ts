import { db } from "./db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
  let userId;
  try {
    const self = await getSelf();
  console.log(self)

    userId = self.id;
  } catch {
    userId = null;
  }
  let users = [];
  if (userId) {
    users = await db.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return users;
};
