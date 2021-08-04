import axios from "axios";

const clientAxios = axios.create({
    baseURL: 'https://be-crud.herokuapp.com/api/'
});

export default clientAxios;