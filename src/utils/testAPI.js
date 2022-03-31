import axios from "axios";

// const getUsers = async () => {
//     try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         return data;
//     } catch (e) {
//         return null;
//     }
// }

const getUsers = async () => {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.data)
    .catch((error) => console.log(error));
    return res
};

export default getUsers;
