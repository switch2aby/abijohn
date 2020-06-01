import axios from 'axios';

 export const get=(url , params)=>{
    return axios.get(url);
 }

 export const post=(url , body)=>{
    return axios.post(url,body);
 }