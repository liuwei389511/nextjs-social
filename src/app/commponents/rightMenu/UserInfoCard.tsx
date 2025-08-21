import { User } from "@/generated/prisma";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import UserInfoCardInteraction from "./UserInfoCardInteraction";

const UserInfoCard = async ({ user }: { user: User }) => {
  const createdAtDate = new Date(user.createdAt);
  const formattedDate = createdAtDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;

  const { userId: currentUserId } = await auth();
  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });
    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followRes = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });
    followRes ? (isFollowing = true) : (isFollowing = false);

    const followSentRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });
    followSentRes ? (isFollowingSent = true) : (isFollowingSent = false);
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Infomation</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/**Bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {user.name && user.surname
              ? user.name + " " + user.surname
              : user.username}
          </span>
          <span className="text-gray-500 text-sm">@{user.username}</span>
        </div>
        {user.description && <p>{user.description}</p>}

        {user.city && (
          <div className="flex items-center gap-2">
            <Image src="/map.png" alt="" width={16} height={16}></Image>
            <span>
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-2">
            <Image src="/school.png" alt="" width={16} height={16}></Image>
            <span>
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex items-center gap-2">
            <Image src="/work.png" alt="" width={16} height={16}></Image>
            <span>
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}
        <div className="flex items-center justify-between gap-2">
          {user.website && (
            <div className="flex items-center gap-2">
              <Image src="/link.png" alt="" width={16} height={16}></Image>
              <Link href={user.website} className="text-blue-500">
                {user.website}
              </Link>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Image src="/date.png" alt="" width={16} height={16}></Image>
            <span>Joined {formattedDate}</span>
          </div>
        </div>
        {/* <button className=" bg-blue-500 text-white p-2 rounded-md cursor-pointer">
          Follow
        </button>
        <div className="text-red-500 self-end text-xs cursor-pointer">
          Block User
        </div> */}

        <UserInfoCardInteraction
          userId={user.id}
          currentUserId={currentUserId ?? undefined}
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowingSent={isFollowingSent}
        />
      </div>
    </div>
  );
};
export default UserInfoCard;
