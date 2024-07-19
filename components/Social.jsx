import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/yourijanssen" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/youri-janssen/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/channel/UCffd8pAfDbo0fjChE3ZKxaA" },
  // { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
