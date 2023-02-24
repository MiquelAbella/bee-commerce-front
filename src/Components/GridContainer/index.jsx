export const GridContainer = ({ cols, maxHeight, maxWidth, children }) => {
  let classFinalName = `grid ${cols} gap-2 w-full ${maxWidth} px-10 h-screen ${maxHeight}`;

  return <div className={classFinalName}>{children}</div>;
};
