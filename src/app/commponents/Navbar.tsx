import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navber = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/**LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          LAMASOCIAL
        </Link>
      </div>
      {/**CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="home.png"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="home.png"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="home.png"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <Image src={"/search.png"} alt="search.png" width={14} height={14} />
        </div>
      </div>
      {/**RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div className="inline-block h-4  w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image
                src="/people.png"
                alt="people.png"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                alt="messages.png"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt="people.png"
                width={20}
                height={20}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm mr-2">
              <Image src="/login.png" alt="login.png" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navber;
