import { FC } from "react";

const Marquee: React.FC = () => {
  return (
    <div className="bg-blue-200 p-2 overflow-hidden">
      <div className="marquee">
        <span>Your Marquee Text Goes Here</span>
      </div>
    </div>
  );
};

export default Marquee;