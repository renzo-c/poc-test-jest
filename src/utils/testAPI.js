const getUsers = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        return data;
    } catch (e) {
        return null;
    }
}

export default getUsers;
