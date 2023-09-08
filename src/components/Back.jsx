import { Link } from "react-router-dom";
import getImgUrl from "../utils/imageSrc";

export default function Back() {
  return (
    <div className="absolute top-4 left-4">
      <Link
        className="block border border-gainsboro bg-white rounded-full p-3 w-12 h-12"
        to={".."}
      >
        <img className="w-6 h-6" src={getImgUrl("back.png")} alt="Back" />
      </Link>
    </div>
  );
}
