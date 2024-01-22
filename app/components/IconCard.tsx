import React from "react";
import Image from "next/image";

interface IconCardProps {
  header: string;
  icon: any;
  desc: string;
}

const IconCard: React.FunctionComponent<IconCardProps> = ({
  header,
  icon,
  desc,
}) => {
  return (
    <div className="icon-card-main">
      <div>
        <div className="icon-inner">
          <Image src={icon} alt="" />
        </div>
        <div className="icon-inner">
          <h1 className="header-i">{header}</h1>
        </div>
        <div className="icon-inner">
          <p className="desc-i">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default IconCard;
