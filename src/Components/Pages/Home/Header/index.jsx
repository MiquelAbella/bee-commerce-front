import img1 from "../../../../assets/images/countries/helsinki.jpg";
import img2 from "../../../../assets/images/countries/athens.jpg";
import img3 from "../../../../assets/images/countries/berlin.jpg";
import img4 from "../../../../assets/images/countries/lofoten.jpg";
import img5 from "../../../../assets/images/countries/kenia.jpg";
import img6 from "../../../../assets/images/countries/varsow.jpg";
import { Carousel } from "../../../Slider";

const images = [img1, img2, img3, img4, img5, img6];

export const Header = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Carousel images={images} />
      <h1 className="absolute mb-2 top-0 bottom-0 right-0 left-0 m-auto flex items-center justify-center bg-black/20 text-white/80 text-[23vw]">
        BeeTrips
      </h1>
    </div>
  );
};
