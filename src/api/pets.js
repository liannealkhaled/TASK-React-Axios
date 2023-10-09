import axios from "axios";
import instance from "../api/index";

// function gettAllPets(pet) {
//   return pet;
// }

// axois.get()

// const res = await axios.get(
//   `https://pets-react-query-backen.herokuapp.com/pets/`
// );
// console.log(res);

const gettAllPets = async () => {
  const res = await instance.get(`/pets`);
  return res.data;
};

const getOnePet = async (id) => {
  const res = await instance.get(`/pets/${id}`);
};

// const addOnePet = async (name,type,image,adopt)=>{
//     const res = await instance.post(${pet.name,pet.id,})
// }

export { gettAllPets, getOnePet };
