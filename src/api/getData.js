import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const getData = async () => {
try{
  const response = await axios.get(API_URL).then(res=>res.json());
  return response.data;
}catch(err){
  console.log(err)
}
};

export default getData;
