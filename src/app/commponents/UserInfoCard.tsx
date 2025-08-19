import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
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
        <div className="flex flex-center gap-2">
          <span className="text-xl text-black">Lloyd Fleming</span>
          <span className="text-gray-500 text-sm">@jonathan</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          quibusdam molestias. Dignissimos, debitis. Corrupti, quos quae
          voluptatibus iste quia tempora natus.
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16}></Image>
          <span>
            Joined in <b>Denver</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16}></Image>
          <span>
            Went to <b>Edgar High School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16}></Image>
          <span>
            Works at <b>Apple Inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Image src="/link.png" alt="" width={16} height={16}></Image>
            <Link href="https://lama.dev" className="text-blue-500">
              lama.dev
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/date.png" alt="" width={16} height={16}></Image>
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className=" bg-blue-500 text-white p-2 rounded-md cursor-pointer">
          Follow
        </button>
        <div className="text-red-500 self-end text-xs cursor-pointer">
          Block User
        </div>
      </div>
    </div>
  );
};
export default UserInfoCard;
