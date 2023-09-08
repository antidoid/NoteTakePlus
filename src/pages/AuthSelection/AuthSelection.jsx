import Back from "../../components/Back";
import getImgUrl from "../../utils/imageSrc";
import "./AuthSelection.css";
import { Link } from "react-router-dom";

function Button({ text }) {
  return (
    <div className="bg-primary py-6 rounded-full w-72 text-center border-2 border-solid border-slate">
      <span className="text-4xl text-white font-Inter font-semibold">
        {text}
      </span>
    </div>
  );
}

export default function AuthSelection() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Back />
      <Link to="login" className="mb-14">
        <Button text="LOGIN" />
      </Link>
      <Link to="signup">
        <Button text="SIGN UP" />
      </Link>
      <div className="absolute bottom-1 right-1">
        <img src={getImgUrl("authselection.png")} />
      </div>
    </div>
  );
}
