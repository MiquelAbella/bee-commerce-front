import React, { useState } from "react";

export const WishListItem = ({ country, selectedItems, setSelectedItems }) => {
  const { country: wishedCountry, img } = country;

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectItem = () => {
    if (isSelected) {
        setSelectedItems(selectedItems.filter((item)=> item.country !== country.country))
    } else {
      setSelectedItems([...selectedItems, country]);
    }
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`p-1 flex gap-2 flex-col items-center relative border-b-4  ${isSelected && "border-sky-300" }`}
      onClick={handleSelectItem}
    >
      <p className="text-lg text-gray-600 absolute w-full bg-white/90 p-2 bottom-0">
        {wishedCountry}
      </p>
      <img src={img} className="h-[40vh] w-full  object-cover" />
    </div>
  );
};
