import Image from "next/image";

const ProfileCard = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        <div className="h-20 relative">
          <Image
            src="https://images.pexels.com/photos/33390879/pexels-photo-33390879.jpeg"
            alt=""
            fill
            className="object-cover rounded-md"
          ></Image>
          <Image
            src="https://images.pexels.com/photos/28221497/pexels-photo-28221497.jpeg"
            alt=""
            width={48}
            height={48}
            className="object-cover rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
          ></Image>
        </div>
        <div className=" flex flex-col gap-2 mt-3 items-center">
          <span className="font-semibold"> Edward Gabriel May</span>
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
            <span className="text-gray-500 text-xs">500 Followers</span>
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
