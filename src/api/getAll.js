import axios from 'axios';

const getAll = () => axios.get('http://localhost:3000/words').then(res => res.data);

export default getAll;

getAll()
.then(a => console.log(a));
