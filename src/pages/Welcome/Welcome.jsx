import getImgUrl from "../../utils/imageSrc";
import { Link } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="bg-primary h-screen w-screen flex flex-col items-center">
      <div className="mt-12">
        <img
          className="w-90 h-90"
          src={getImgUrl("welcome-bg.png")}
          alt="image"
        />
      </div>
      <div className="text-7xl text-white italic font-bold m-8">
        NOTE <span className="font-normal">TAKE</span> PLUS
      </div>
      <Link to={"auth"} className="self-end">
        <button className="bg-white mb-50 mr-10 rounded-full font-extrabold text-lg italic h-16 w-60 hover:bg-slate-300">
          LETS GET STARTED
        </button>
      </Link>
    </div>
  );
}
