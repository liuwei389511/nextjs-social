import prisma from "@/lib/client";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const evt = await verifyWebhook(req);
  // const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    try {
      await prisma.user.create({
        data: {
          id: evt.data.id,
          username: evt.data.username ?? "",
          avatar: evt.data.image_url || "/noAvatar.png",
          cover: "/noCover.png",
        },
      });
      return new Response("User has been created!", { status: 200 });
    } catch (err) {
      return new Response("Failed to create the user!", { status: 500 });
    }
  }

  if (eventType === "user.updated") {
    console.log("!!!", evt.data);
    try {
      await prisma.user.update({
        where: {
          id: evt.data.id,
        },
        data: {
          username: evt.data.username!,
          avatar: evt.data.image_url || "/noAvatar.png",
        },
      });
      return new Response("User has been update!", { status: 200 });
    } catch (err) {
      return new Response("Failed to update the user!!", { status: 500 });
    }
  }
  return new Response("Webhook has been received", { status: 200 });
}

export async function GET(req: NextRequest) {
  const evt = await verifyWebhook(req);
  // const { id } = evt.data;
  const eventType = evt.type;
  console.log("GET request received for event type:", eventType);

  if (eventType === "user.created") {
    console.log("GETUser created event received:", evt.data);
  } else if (eventType === "user.updated") {
    console.log("GETUser updated event received:", evt.data);
  } else {
    console.log("GETUser Unhandled event type:", eventType);
  }
}
