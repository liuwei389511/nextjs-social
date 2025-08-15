import Image from "next/image";
const addPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md  flex gap-4 justify-between text-sm">
      {/**AVATAR */}
      <Image
        src="https://images.pexels.com/photos/33409003/pexels-photo-33409003.jpeg?auto=compress&cs=tinysrgb&w=400&loading=lazy"
        alt="image"
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48}
      />
      {/**POST */}
      <div className="flex-1 ">
        {/**INPUT */}
        <div className="flex gap-4">
          <textarea
            placeholder="What's on your mind"
            className="flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/**POST OPTION */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            <span>Photo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            <span>Video</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            <span>Poll</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            <span>Event</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addPost;
