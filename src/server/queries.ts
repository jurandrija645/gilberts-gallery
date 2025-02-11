import "server-only";
import { db } from "./db";
import { images } from "./db/schema";
import { auth } from "@clerk/nextjs/server";

export async function getImages() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}

export async function getImagesByUserId() {
  const user = await auth();
  if (!user) {
    return [];
  }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId!),
  });
  return images;
}
