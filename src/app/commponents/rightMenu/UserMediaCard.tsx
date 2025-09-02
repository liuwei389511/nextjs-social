import { User } from "@/generated/prisma";
import prisma from "@/lib/client";
import Image from "next/image";
import Link from "next/link";

const UserMediaCard = async ({ user }: { user: User }) => {
  const postWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      img: {
        not: null,
      },
    },
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      <div className="flex gap-4 flex-wrap">
        {postWithMedia.length
          ? postWithMedia.map((post) => {
              return (
                <div className="relative w-1/5 h-24" key={post.id}>
                  <Image
                    src={post.img!}
                    alt=""
                    fill
                    className="object-cover rounded-md"
                  ></Image>
                </div>
              );
            })
          : "No media found"}
      </div>
    </div>
  );
};
export default UserMediaCard;
