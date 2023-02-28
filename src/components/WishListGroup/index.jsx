import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import WishListContext from "../../context/WishListContext/WishListContext";
import { WishListItem } from "../WishListItem";

export const WishListGroup = ({ title, type, tag }) => {
  const { wishList, setWishList } = useContext(WishListContext);
  const [selectedItems, setSelectedItems] = useState([]);

  //   const handleDelete = () => {
  //     const notDeleted = wishList[tag].filter(
  //       (wish) => !selectedItems.includes(wish)
  //     );
  //     setWishList({ ...wishList, [tag]: notDeleted });
  //     setSelectedItems([]);
  //   };

  const handleRestore = (e) => {
    const list = e.target.value;

    const notDeleted = wishList[tag].filter(
      (wish) => !selectedItems.includes(wish)
    );
    setWishList({
      ...wishList,
      [tag]: notDeleted,
      [list]: [...wishList[list], ...selectedItems],
    });
    setSelectedItems([]);
  };

  return (
    <div className="w-full relative mt-8">
      <div className="flex items-center justify-between">
        <p className="p-3 text-2xl text-gray-500">{title}</p>
        {/* {selectedItems.length && tag !== "discards" ? (
          <button
            className="px-3 py-2 bg-red-500 rounded-full text-white"
            onClick={handleDelete}
          >
            Remove from {title}
          </button>
        ) : selectedItems.length && tag === "discards" ? ( */}
        {(selectedItems.length && (
          <div>
            <label htmlFor="restore-select" className="mr-4 text-gray-500">
              Move to:
            </label>
            <select
              id="restore-select"
              className="px-4 py-2 border border-gray-400 rounded-md"
              onChange={handleRestore}
            >
              <option value="">Select an option</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="couple">Couple</option>
              <option value="alone">Alone</option>
              <option value="discards">Discards</option>
            </select>
          </div>
        )) ||
          null}
        {/* ) : null} */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-1 gap-3 bg rounded-lg">
        {type.length ? (
          type.map((country, i) => (
            <WishListItem
              key={`${country.country}-${i}`}
              country={country}
              setSelectedItems={setSelectedItems}
              selectedItems={selectedItems}
            />
          ))
        ) : (
          <NavLink className="text-sky-500" to="/">
            Nothing selected... Go to wish picker!
          </NavLink>
        )}
      </div>
    </div>
  );
};
