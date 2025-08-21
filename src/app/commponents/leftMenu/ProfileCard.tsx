import Image from "next/image";
import prisma from "@/lib/client";
import {} from "@clerk/nextjs";

import { auth, currentUser } from "@clerk/nextjs/server";

const ProfileCard = async () => {
  const { userId } = await auth();
  const userClerk = await currentUser();
  if (!userId) return null;
  console.log("User username:", userClerk?.username);

  //clerk username update （未知问题，修改username的时候不触发clerk中的POST，所以在这重新获取手动更新）
  if (userClerk) {
    try {
      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          username: userClerk.username || "",
        },
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });
  if (!user) return null;

  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        <div className="h-20 relative">
          <Image
            src={user.cover || "/noCover.png"}
            alt=""
            fill
            className="object-cover rounded-md"
          ></Image>
          <Image
            src={user.avatar || "/noAvatar.png"}
            alt=""
            width={48}
            height={48}
            className="object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-2 ring-white z-10"
          ></Image>
        </div>
        <div className=" flex flex-col gap-2 mt-3 items-center">
          <span className="font-semibold">
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <div className="flex items-center gap-2">
            <div className="flex ">
              <Image
                src={
                  "https://images.pexels.com/photos/32488125/pexels-photo-32488125.jpeg"
                }
                alt=""
                width={12}
                height={12}
                className="rounded-full object-cover w-3 h-3"
              ></Image>
              <Image
                src={
                  "https://images.pexels.com/photos/29188304/pexels-photo-29188304.jpeg"
                }
                alt=""
                width={12}
                height={12}
                className="rounded-full object-cover w-3 h-3"
              ></Image>
              <Image
                src={
                  "https://images.pexels.com/photos/32922352/pexels-photo-32922352.jpeg"
                }
                alt=""
                width={12}
                height={12}
                className="rounded-full object-cover w-3 h-3"
              ></Image>
            </div>
            <span className="text-gray-500 text-xs">
              {user._count.followers} Followers
            </span>
          </div>
        </div>
        <button className="text-white bg-blue-500 text-xs p-2 rounded-md cursor-pointer">
          My Profile
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;
