import axios from "axios";
import { BASE_URL } from "./Url";


export const getTrips = async () => {
  try{
    const { data } = await axios.get(`${BASE_URL}/trips`)
    return data.trips
  }catch (error){
    console.log(error.response);
  }
} 