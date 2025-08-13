import Image from "next/image";
const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/** stories */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/33016291/pexels-photo-33016291.jpeg?auto=compress&cs=tinysrgb&w=400&loading=lazy"
            alt=""
            className="w-20 h-20 ring-2 rounded-full object-cover"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/33016291/pexels-photo-33016291.jpeg?auto=compress&cs=tinysrgb&w=400&loading=lazy"
            alt=""
            className="w-20 h-20 ring-2 rounded-full object-cover"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/33016291/pexels-photo-33016291.jpeg?auto=compress&cs=tinysrgb&w=400&loading=lazy"
            alt=""
            className="w-20 h-20 ring-2 rounded-full object-cover"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/33016291/pexels-photo-33016291.jpeg?auto=compress&cs=tinysrgb&w=400&loading=lazy"
            alt=""
            className="w-20 h-20 ring-2 rounded-full object-cover"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/33016291/pexels-photo-33016291.jpeg?auto=compress&cs=tinysrgb&w=400&loading=lazy"
            alt=""
            className="w-20 h-20 ring-2 rounded-full object-cover"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/33016291/pexels-photo-33016291.jpeg?auto=compress&cs=tinysrgb&w=400&loading=lazy"
            alt=""
            className="w-20 h-20 ring-2 rounded-full object-cover"
            width={80}
            height={80}
          />
          <span className="font-medium">Ricky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
