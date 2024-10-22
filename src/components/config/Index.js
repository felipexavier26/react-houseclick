import axios from "axios";

const Backned = axios.create({
    baseURL: 'http://localhost:5000',
})

export default Backned