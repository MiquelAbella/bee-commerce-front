import React from "react";

export const Modal = ({
  size = "md",
  children,
  closeModal,
  height = "h-2/3",
}) => {
  const modalSize = () => {
    switch (size) {
      case "lg":
        return "max-w-7xl";
      case "md":
        return "max-w-5xl";
      case "sm":
        return "max-w-2xl";
      case "xs":
        return "max-w-xl";
      default:
        return "max-w-xl";
    }
  };

  let finalClassName = `bg-white p-6 w-full overflow-auto flex flex-col items-center justify-around rounded ${height} ${modalSize()}`;

  const handleCloseModal = (e) => {
    if (e.currentTarget !== e.target) return;
    closeModal();
  };

  return (
    <div
      onClickCapture={handleCloseModal}
      className="flex items-center justify-center h-screen w-screen bg-black/50 fixed top-0 z-10 p-4"
    >
      <div className={finalClassName}>{children}</div>
    </div>
  );
};
