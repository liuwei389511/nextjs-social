import Image from "next/image";
const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/33390879/pexels-photo-33390879.jpeg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-cover rounded-full"
        ></Image>
        <div className="flex items-center justify-between w-full bg-slate-100 rounded-xl py-2 px-4">
          <input
            type="text"
            className=" bg-transparent outline-none flex-1"
            placeholder="Write a comment..."
          />
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          ></Image>
        </div>
      </div>
      {/**COMMENTS */}
      <div>
        {/**COMMENT */}
        <div className="flex items-start gap-4 mt-6">
          {/**AVATAR */}
          <Image
            src="https://images.pexels.com/photos/33390879/pexels-photo-33390879.jpeg"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          ></Image>

          {/**DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Jack McBride</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              eaque explicabo voluptatum, quas doloribus quae? Iure, accusamus
              quidem. Accusamus atque quidem quia.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="w-4 h-4 cursor-pointer"
                ></Image>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">412 Likes</span>
              </div>
              <span className="text-gray-500">reply</span>
            </div>
          </div>
          {/**ICON */}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          ></Image>
        </div>
      </div>
    </div>
  );
};
export default Comments;
