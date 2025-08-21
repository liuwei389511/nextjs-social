const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  return (
    <>
      <form action="">
        <button className="w-full bg-blue-500 text-white p-1 rounded-md cursor-pointer">
          {isFollowing
            ? "Following"
            : isFollowingSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <div className="text-red-500 self-end text-xs cursor-pointer">
          {isUserBlocked ? "Unblock User" : "Block User"}
        </div>
      </form>
    </>
  );
};
export default UserInfoCardInteraction;
