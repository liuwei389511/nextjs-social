import Feed from "@/app/commponents/Feed";
import LeftMenu from "@/app/commponents/LeftMenu";
import RightMenu from "@/app/commponents/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative ">
              <Image
                src="https://images.pexels.com/photos/33383741/pexels-photo-33383741.jpeg"
                alt=""
                fill
                className="object-cover rounded-lg"
              ></Image>
              <Image
                src="https://images.pexels.com/photos/32822198/pexels-photo-32822198.jpeg"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10 rounded-full object-cover"
              ></Image>
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Elva Weaver</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center ">
                <span className="font-medium">183</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center ">
                <span className="font-medium">2.3k</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center ">
                <span className="font-medium">1.9k</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};
export default ProfilePage;
