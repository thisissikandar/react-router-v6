import { useParams } from "react-router-dom";

const User = () => {
  // useparams is used for the passing id or somthing in routes
  const { id } = useParams();
  return <div className="bg-gray-500 text-white text-3xl">User:{id} </div>;
};

export default User;
