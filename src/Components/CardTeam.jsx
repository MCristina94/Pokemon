import React from "react";
import { Link } from "react-router-dom";

const CardTeam = ({ props, removeFromFavorites }) => {
  const handleDelete = () => {
    removeFromFavorites(props.id);
  };
  return (
    <div>
      <div className="p-5 h-96 w-64 m-10 bg-white rounded-xl">
        <img
          src={props.sprites.other["official-artwork"].front_default}
          alt=""
        />
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl my-5">
            {" "}
            {props.name.charAt(0).toUpperCase() + props.name.slice(1)}{" "}
          </h4>
          <button
            className="mb-2 rounded-full border border-blue-900 px-4 hover:bg-blue-900 hover:text-white"
            onClick={handleDelete}
          >
            Delete
          </button>
          <Link to={"/detail/" + props.id}>
            <button className="mb-2 rounded-full border border-blue-900 px-4 hover:bg-blue-900 hover:text-white">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
