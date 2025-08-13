import Feed from "./commponents/Feed";
import Stories from "./commponents/Stories";
import AddPost from "./commponents/AddPost";
const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">leftMeun</div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div>
            <Stories />
          </div>
          <div>
            <AddPost />
          </div>
          <div>
            <Feed />
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">rightMeun</div>
    </div>
  );
};

export default Homepage;
