import Head from "next/head";
import MyNavbar from "../components/main/MyNavbar";
import { Instagram, Linkedin, GitHub } from "react-feather";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Zulfikar Ditya Profile</title>
				<meta name="description" content="Zulfikar Ditya's Profile" />
				<meta name="theme-color" content="#14b8a6" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				{/* <MyNavbar /> */}
				<div className="">
					<section className="container mx-auto py-20 lg:p-0">
						<div className="flex flex-row-reverse flex-wrap min-h-screen items-center">
							<div className="w-[100%] lg:w-[46%] flex justify-center lg:justify-end">
								<Image
									src="./img.jpg"
									alt=""
									className="rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all w-8/12 "
								/>
							</div>
							<div className="w-[100%] lg:w-[46%] text-center mt-20 lg:mt-0">
								<div className="">
									<div className="text-edu-vic-wa-nt-beginner">
										<h3 className="text-4xl tracking-widest font-light underline text-teal-500">
											Hello I'am
										</h3>
										<h1 className="text-6xl mt-5 tracking-widest">
											Zulfikar Ditya.
										</h1>
									</div>
									<hr className="border border-teal-500 mt-10" />
									<h5 className="text-2xl mt-10 tracking-widest">
										Web development enthusiast.
									</h5>
									<p className="mt-5 text-gray-500">
										Motivated in application development especially in backend
										development. graduated as the best graduate in major
										software engineering at Smkn 1 Jenangan in 2022. I was won
										several competitions in the field of web development. very
										enthusiastic in the field of web development and still want
										to keep learning.
									</p>
								</div>
								<div className="flex justify-between md:justify-center flex-wrap gap-5 mt-10">
									<div className="">
										<a
											href="https://www.instagram.com/zulfikar.ditya/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<p className="text-white hover:text-teal-500 border-0 hover:border border-teal-500 bg-teal-500 hover:bg-white p-5 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer">
												<Instagram />
											</p>
										</a>
									</div>
									<div className="">
										<a
											href="https://www.linkedin.com/in/zulfikar-ditya/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<p className="text-white hover:text-teal-500 border-0 hover:border border-teal-500 bg-teal-500 hover:bg-white p-5 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer">
												<Linkedin />
											</p>
										</a>
									</div>
									<div className="">
										<a
											href="https://github.com/zulfikar-ditya"
											target="_blank"
											rel="noopener noreferrer"
										>
											<p className="text-white hover:text-teal-500 border-0 hover:border border-teal-500 bg-teal-500 hover:bg-white p-5 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer">
												<GitHub />
											</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
