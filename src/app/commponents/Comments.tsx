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
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer"
          ></Image>
        </div>
      </div>
    </div>
  );
};
export default Comments;
