import React from "react";
// import petsData from "../petsData";
import { Navigate, useParams } from "react-router-dom";
import { getOnePet, addOnePet } from "../api/pets";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const PetDetail = () => {
  // const pet = petsData[0];
  const { petId } = useParams();

  const { data: pet, isLoading } = useQuery({
    queryKey: ["pet", petId],
    queryFn: () => getOnePet(petId),
  });

  // useEffect(() => {
  //   console.log("id", id);
  // }, [id]);
  if (isLoading) return <h1> IS LOADING..</h1>;

  /// here up the use statis an obj{}, the onein the previousstat was array[]

  // const [name, setName] = useState();
  // const [type, setType] = useState();
  // const [image, setImage] = useState();
  // const [adopted, setAdopted] = useState();

  //////below is the rightuseeffect code :
  // const [pet, setPet] = useState({});
  // const ApiGetone = async () => {
  //   const res = await getOnePet(petId);
  //   console.log(res);
  //   return setPet(res);
  // };
  // useEffect(() => {
  //   ApiGetone();
  // }, []);

  ////// useeffect to run the code one entering the page

  // const pet = petsData.find((pet) => {
  //   return petId == pet.id;
  // });

  // if (!pet) return <h1>no pet with this id {id}</h1>;
  // if (!pet) return <Navigate to="/notFound" />;
  // navigate will send me automatically there , link need to click on it to go there

  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet?.image}
            alt={pet?.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet?.name}</h1>
          <h1>Type: {pet?.type}</h1>
          <h1>adopted: {pet?.adopted}</h1>

          <button className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5">
            Adobt
          </button>

          <button className="w-[70px] border border-black rounded-md  hover:bg-red-400">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
