import React from "react";
import Image from "next/image";
function AwardCertsSection({ image, title, organization }) {
  return (
    <div className="AwardCertsSection">
      <div className="AwardCerts">
        <div className="Awardcontent">
          <div className="img">
            <Image src={image} alt="" className="Item-img-certificate" />
          </div>
          <h3 className="AwardCertsName">{title}</h3>
          <h5 className="Organization">{organization}</h5>
        </div>
      </div>
    </div>
  );
}

export default AwardCertsSection;
