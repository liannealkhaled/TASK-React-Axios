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
  return res.data;
};

const addOnePet = async (name, type, image, available) => {
  const res = await instance.post(`/pets/`, {
    name: name,
    type: type,
    image: image,
    adopted: available,
  });
  return res.data;
};

export { gettAllPets, getOnePet, addOnePet };
