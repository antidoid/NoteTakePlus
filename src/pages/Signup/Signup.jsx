import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
	return (
		<div className="bg-white min-h-screen text-blueviolet font-Urbanist">
			<div className="flex justify-center items-center h-screen">
				<div className="max-w-xs text-center">
					<p className="text-4xl font-semibold mb-10 text-link text-left">
						Let's
						<br /> Get Started
					</p>
					<div>
						<input
							className="border border-gainsboro bg-whitesmoke rounded-5xs py-2 pl-4 pr-12 w-full"
							type="email"
							placeholder="Name"
						/>
					</div>
					<div className="mt-4">
						<input
							className="border border-gainsboro bg-whitesmoke rounded-5xs py-2 pl-4 pr-12 w-full"
							type="email"
							placeholder="Email"
						/>
					</div>

					<div className="mt-4">
						<input
							className="border border-gainsboro bg-whitesmoke rounded-5xs py-2 pl-4 pr-12 w-full"
							type="password"
							placeholder="Password"
						/>
					</div>
					<div className="mt-2">
						<button className="bg-link w-full  text-white rounded-md px-4 py-2">
							Create
						</button>
					</div>

					<div className="mt-10 text-center">
						<p className="text-dark-gray">
							Alreay have an account?{" "}
							<Link
								to={"/auth/login"}
								className="text-link underline font-bold"
							>
								Login now
							</Link>
						</p>
					</div>
					<div className="absolute top-4 left-4">
						<button className="border border-gainsboro bg-white rounded-full p-2 w-12 h-12">
							<img
								className="w-6 h-6"
								src="/src/assets/back.jpg"
								alt="Back"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
