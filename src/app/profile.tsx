import { useAccount, useEnsName } from "wagmi";

const Profile = () => {
  console.log("Profile component rendered", useAccount());
  const { address } = useAccount();
  const { data, error, status } = useEnsName({ address });
  if (status === "pending") return <div>Loading ENS name</div>;
  if (status === "error")
    return <div>Error fetching ENS name: {error.message}</div>;
  return <div>ENS name: {data}</div>;
};

export default Profile;
