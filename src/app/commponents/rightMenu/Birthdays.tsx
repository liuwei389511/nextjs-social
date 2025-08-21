import Image from "next/image";
import Link from "next/link";
const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Birthdays</span>
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
          <button className="text-white bg-blue-500 text-xs px-2 py-1 rounded-md cursor-pointer">
            Celebrate
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4  bg-slate-100 rounded-lg">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href={"/"} className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Birthdays;
