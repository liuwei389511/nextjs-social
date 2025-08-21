import Link from "next/link";
import Image from "next/image";
const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/33390879/pexels-photo-33390879.jpeg"
            alt=""
            className="w-10 h-10 object-cover rounded-full"
            width={40}
            height={40}
          />
          <span className="font-semibold">Wayne McGee</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/33390879/pexels-photo-33390879.jpeg"
            alt=""
            className="w-10 h-10 object-cover rounded-full"
            width={40}
            height={40}
          />
          <span className="font-semibold">Wayne McGee</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/33390879/pexels-photo-33390879.jpeg"
            alt=""
            className="w-10 h-10 object-cover rounded-full"
            width={40}
            height={40}
          />
          <span className="font-semibold">Wayne McGee</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
    </div>
  );
};
export default FriendRequests;
