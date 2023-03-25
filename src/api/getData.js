import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const getData = async () => {
try{
  console.log('1')
  const response = await axios.get(API_URL);
  console.log('2')
 
  return response.data;
}catch(err){
  console.log(err)
}
};

export default getData;
