import React, { useState } from "react";
import { Icon } from "astro-icon/components";
import ButtonShare from "./ButtonShare";

const Share = () => {
  const [share, setShare] = useState<boolean>(false);

  const handleShare = () => {
    setShare(true);
  };

  console.log(share);

  if (share) {
    return <ButtonShare title={"Share"} onClick={handleShare} />;
  }

  return (
    <div className="ma-w-[300px] flex flex-row gap-4 px-3 p-y-3 bg-black items-center justify-center ">
      <Icon name={"tabler:brand-x"} />
      <Icon name={"tabler:brand-facebook"} />
      <Icon name={"tabler:brand-whtsapp"} />
      <Icon name={"tabler:brand-tiktok"} />
    </div>
  );
};

export default Share;
