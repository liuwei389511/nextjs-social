import Image from "next/image";
import Comments from "./Comments";
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/**USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/30753707/pexels-photo-30753707.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          ></Image>
          <span className="font-medium"> Jack McBride</span>
        </div>
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer"
        ></Image>
      </div>
      {/**DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/33433152/pexels-photo-33433152.jpeg"
            alt=""
            fill
            priority
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Learn more about these environment variables and how to customize
          Clerk's redirect behavior in the dedicated guide.Learn more about
          these environment variables and how to customize Clerk's redirect
          behavior in the dedicated guide.
        </p>
      </div>
      {/**INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
            <Image
              src={"/like.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            ></Image>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              218 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
            <Image
              src={"/comment.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            ></Image>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              11 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="flex ">
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl">
            <Image
              src={"/share.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            ></Image>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              581 <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      {/**COMMENT */}
      <Comments></Comments>
    </div>
  );
};
export default Post;
