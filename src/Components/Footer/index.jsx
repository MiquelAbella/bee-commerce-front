import { Typography } from "../Typography";

import facebookIcon from "../../assets/icons/facebookIcon.png";
import instagramIcon from "../../assets/icons/instagramIcon.png";
import twitterIcon from "../../assets/icons/twitterIcon.png";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between p-6">
      <Typography type="paragraph" text="© BeeTrips" />
      <div className="flex gap-2">
        <img className="w-8" alt="facebook-icon" src={facebookIcon} />
        <img className="w-8" alt="facebook-icon" src={instagramIcon} />
        <img className="w-8" alt="facebook-icon" src={twitterIcon} />
      </div>
    </div>
  );
};
