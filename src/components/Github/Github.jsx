// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/thisissikandar")
//     //if i used curly braces then it must to use return keyword
//       .then((response) =>  { return response.json()}) 
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl">
        <h1>My Public Repository:{data.public_repos}</h1>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
};

export default Github;

// Some people write this function in Another function
export const githubInfoLoader = async() =>{
   const response = await fetch('https://api.github.com/users/thisissikandar')
   return response.json();
}