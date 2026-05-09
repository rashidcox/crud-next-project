export const getUsers = async () => {
    const res = await fetch('http://localhost:4000/users');
    const data = await res.json();
    return data;
}



export const getUser = async (id) => {
    const res = await fetch(`http://localhost:4000/users/${id}`);
    const data = await res.json();
    return data;
}