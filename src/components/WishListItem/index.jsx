import React, { useContext, useState } from "react";
import WishListContext from "../../context/WishListContext/WishListContext";

export const WishListItem = ({
  country,
  selectedItems,
  setSelectedItems,
  isHovered,
  tag,
}) => {
  const { country: wishedCountry, img, id } = country;
  const { wishList, setWishList } = useContext(WishListContext);
  const [isSelected, setIsSelected] = useState(false);
  const isUserInteracting = id === isHovered;
  const isCompleted = country.isCompleted;

  const handleSelectItem = () => {
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item.id !== country.id));
    } else {
      setSelectedItems([...selectedItems, country]);
    }
    setIsSelected(!isSelected);
  };

  const handleMarkAsCompleted = (e) => {
    e.stopPropagation()
    const filtered = wishList[tag].filter((item) => item.id !== country.id);

    setWishList({
      ...wishList,
      [tag]: [{ ...country, isCompleted: true }, ...filtered],
    });
    setSelectedItems([])
  };

  return (
    <div
      className={`p-1 flex gap-2 flex-col items-center relative border-b-4  ${
        isSelected && "border-sky-300"
      }`}
      onClick={handleSelectItem}
    >
      <p className="text-lg text-gray-600 absolute w-full bg-white/90 p-2 bottom-0">
        {wishedCountry}
      </p>
      <img src={img} className="h-[40vh] w-full  object-cover" />
      {isUserInteracting && !isCompleted && (
        <button
          className="bg-green-600 absolute top-[-10px] right-[-10px] rounded-full px-3 py-1 z-40 text-white"
          onClick={handleMarkAsCompleted}
        >
          Mark as completed
        </button>
      )}
      {isCompleted && (
        <img
          className="absolute top-0 right-0 bottom-0 left-0 m-auto saturate-0"
          src="http://ruthlorenzodaily.weebly.com/uploads/9/1/0/5/91052984/sellopasaporte_orig.png"
        />
      )}
    </div>
  );
};
