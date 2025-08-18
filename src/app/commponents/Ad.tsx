import Image from "next/image";
const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16}></Image>
      </div>
      {/**AD */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/32837692/pexels-photo-32837692.jpeg"
            alt=""
            fill
            className="rounded-lg object-cover"
          ></Image>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/32837692/pexels-photo-32837692.jpeg"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 object-cover rounded-full"
          ></Image>
          <span className="text-blue-500 font-medium">Bigchef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat?"
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat amet consectetur adipisicing elit"
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit "}
        </p>
        <button className="text-gray-500 bg-gray-200 p-2 rounded-lg text-xs cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};
export default Ad;
