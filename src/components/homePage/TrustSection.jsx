import React from "react";
import { SiAmd, SiCisco, SiAmazonprime, SiIntel, SiNvidia,SiMsibusiness} from "react-icons/si";

const TrustSection = () => {
  return (
    <div className="container mx-auto py-8 p-10 mt-6 lg:px-32 w-full overflow-hidden items-center justify-center mb-12 text-center">
      <h2 className="text-2xl mb-5 font-medium" >Thousands of world’s leading companies trust us</h2>
      <div className="flex flex-wrap justify-center items-center gap-24">
        <SiAmd size={60} />
        <SiCisco size={60} />
        <SiAmazonprime size={100} />
        <SiIntel size={60}/>
        <SiNvidia size={60} />
        <SiMsibusiness size={60}/>
      </div>
    </div>
  );
};

export default TrustSection;
