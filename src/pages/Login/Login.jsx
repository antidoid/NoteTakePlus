import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<div className="bg-white min-h-screen text-blueviolet font-Urbanist">
			<div className="flex justify-center items-center h-screen">
				<div className="max-w-xs">
					<p className="text-4xl font-semibold mb-10 text-link">
						Welcome back!
						<br />
						Glad to see you,
						<br />
						Again!
					</p>
					<div>
						<input
							className="border border-gainsboro bg-whitesmoke rounded-5xs py-2 pl-4 pr-12 w-full"
							type="email"
							placeholder="Enter your email"
						/>
					</div>

					<div className="mt-4">
						<input
							className="border border-gainsboro bg-whitesmoke rounded-5xs py-2 pl-4 pr-12 w-full"
							type="password"
							placeholder="Enter your password"
						/>
					</div>
					<div className="mt-2">
						<button className="bg-link w-full  text-white rounded-md px-4 py-2">
							Login
						</button>
					</div>
					<div className="mt-10 flex items-center">
						<hr className="flex-grow border-t border-color-gainsboro" />
						<span className="mx-4 text-dark-gray">
							Or connect with
						</span>
						<hr className="flex-grow border-t border-color-gainsboro" />
					</div>
					<div className="mt-4 flex justify-evenly">
						<button className="border border-gainsboro rounded-md px-10 py-2 ml-2">
							<img
								className="w-7 h-7"
								src="/src/assets/google.jpg"
								alt="Google"
							/>
						</button>
						<button className="border border-gainsboro rounded-md px-10 py-2">
							<img
								className="w-7 h-7"
								src="/src/assets/facebook.jpg"
								alt="Facebook"
							/>
						</button>
					</div>

					<div className="mt-10 text-center">
						<p className="text-dark-gray">
							Don't have an account?{" "}
							<Link
								to={"/auth/signup"}
								className="text-link underline font-bold"
							>
								Register now
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
};

export default Login;
