import Head from "next/head";
import MyNavbar from "../components/main/MyNavbar";
import {
	Instagram,
	Linkedin,
	GitHub,
	AlignCenter,
	ArrowRight,
} from "react-feather";
import Image from "next/image";
import Skills from "../components/main/skills";

export default function Home() {
	let SKILLS = [
		{
			name: "Laravel",
			text: "Developing or create web application using Laravel framework.",
			img_url: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg",
			color: "red",
		},
		{
			name: "Tailwind css",
			text: "Developing or create web pages using Tailwindcss for styling.",
			img_url:
				"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
			color: "teal",
		},
		{
			name: "Boostrap",
			text: "Developing or create web pages using Boostrap for styling.",
			img_url:
				"https://upload.vectorlogo.zone/logos/getbootstrap/images/987f8f6c-263a-47b1-a85d-853cfca215d9.svg",
			color: "blue",
		},
		{
			name: "JQuery",
			text: "Developing web pages using Jquery for functionality and others.",
			img_url: "https://www.vectorlogo.zone/logos/jquery/jquery-vertical.svg",
			color: "blue",
		},
		{
			name: "Next Js",
			text: "Developing or create web pages using Next Js.",
			img_url:
				"https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg",
			color: "gray",
		},
		{
			name: "React Js",
			text: "Developing or create web pages using React Js.",
			img_url: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
			color: "green",
		},
	];
	return (
		<div>
			<Head>
				<title>Zulfikar Ditya - Web Development Enthusiast</title>
				<meta
					name="description"
					content="Zulfikar Ditya - Motivated in application development especially in backend development. graduated as the best graduate in major software engineering at Smkn 1 Jenangan in 2022. I was won several competitions in the field of web development. very enthusiastic in the field of web development and still want to keep learning."
				/>
				<meta name="title" content="Zulfikar Ditya" />
				<meta name="keywords" content="Zulfikar Ditya" />
				<meta name="author" content="Zulfikar Ditya" />
				<meta name="theme-color" content="#14b8a6" />
				<link rel="icon" href="/octocat-1662013943820.png" />
			</Head>
			<div className="">
				{/* <MyNavbar /> */}
				<div className="">
					<section className="container mx-auto">
						<div className="flex flex-row-reverse flex-wrap min-h-screen items-center justify-center lg:justify-between p-10 md:p-20 lg:p-10">
							<div className="w-[100%] lg:w-[46%] flex justify-center lg:justify-end">
								<img
									alt="Zulfikar Ditya"
									src="/img.jpg"
									className="rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all w-full md:w-6/12 lg:w-8/12	"
								/>
							</div>
							<div className="w-[100%] lg:w-[46%] mt-20 lg:mt-0">
								<div className="">
									<div className="text-edu-vic-wa-nt-beginner">
										<h3 className="text-4xl tracking-widest font-light underline text-teal-500">
											Hello I am
										</h3>
										<h1 className="text-6xl mt-5 tracking-widest">
											Zulfikar Ditya.
										</h1>
									</div>
									<hr className="border border-teal-500" />
									<h5 className="text-2xl mt-10 tracking-widest">
										Web development enthusiast.
									</h5>
									<p className="mt-2 text-gray-500">
										Motivated in application development especially in backend
										development. graduated as the best graduate in major
										software engineering at Smkn 1 Jenangan in 2022. I was won
										several competitions in the field of web development. very
										enthusiastic in the field of web development and still want
										to keep learning.
									</p>
								</div>
								<div className="flex flex-wrap gap-5 mt-5">
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
									<div className="">
										<a
											href="https://drive.google.com/file/d/1iI_PAU-7tGUwVZ3ViXyWGeMpONHWc2Hv/view?usp=sharing"
											target="_blank"
											rel="noopener noreferrer"
											title="Resume"
										>
											<p className="text-white hover:text-teal-500 border-0 hover:border border-teal-500 bg-teal-500 hover:bg-white p-5 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer">
												<AlignCenter />
											</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="bg-slate-100 min-h-screen">
					<section className="container mx-auto sm:px-10 p-0 py-20">
						<div className="flex justify-center">
							<div className="w-6/12 text-center">
								<h1 className="text-6xl">Skills</h1>
								<hr className="border border-teal-500 my-5" />
								<span className="text-slate-500">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Iusto tempore ab sequi culpa ad incidunt.
								</span>
							</div>
						</div>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 mt-20 gap-7">
							<div>
								<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
									<img
										src={`https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg`}
										className={`w-20 bg-red-100 rounded-xl p-3`}
										alt="skill-logo"
									/>

									<div className="mt-3">
										<h5 className="text-2xl mb-3">Laravel</h5>
										<hr className={`border border-red-500`} />
										<p className="text-slate-500 mt-5">
											Developing or create web application using Laravel
											framework.
										</p>

										<div className="mt-3">
											<a
												href="https://laravel.com/"
												className={`block text-center bg-white hover:bg-red-500 border border-red-500 hover:border-whiti px-5 py-3 rounded text-red-500 hover:text-white w-full transition-all`}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more.
											</a>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
									<img
										src={`https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg`}
										className={`w-20 bg-teal-100 rounded-xl p-3`}
										alt="skill-logo"
									/>

									<div className="mt-3">
										<h5 className="text-2xl mb-3">Tailwindcss</h5>
										<hr className={`border border-teal-500`} />
										<p className="text-slate-500 mt-5">
											Developing or create web pages using Tailwindcss for
											styling.
										</p>

										<div className="mt-3">
											<a
												href="https://tailwindcss.com/"
												className={`block text-center bg-white hover:bg-teal-500 border border-teal-500 hover:border-whiti px-5 py-3 rounded text-teal-500 hover:text-white w-full transition-all`}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more.
											</a>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
									<img
										src={`https://upload.vectorlogo.zone/logos/getbootstrap/images/987f8f6c-263a-47b1-a85d-853cfca215d9.svg`}
										className={`w-20 bg-violet-100 rounded-xl p-3`}
										alt="skill-logo"
									/>

									<div className="mt-3">
										<h5 className="text-2xl mb-3">Boostrap</h5>
										<hr className={`border border-violet-500`} />
										<p className="text-slate-500 mt-5">
											Developing or create web pages using Boostrap for styling.
										</p>

										<div className="mt-3">
											<a
												href="https://getbootstrap.com/"
												className={`block text-center bg-white hover:bg-violet-500 border border-violet-500 hover:border-whiti px-5 py-3 rounded text-violet-500 hover:text-white w-full transition-all`}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more.
											</a>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
									<img
										src={`https://www.vectorlogo.zone/logos/jquery/jquery-vertical.svg`}
										className={`w-20 bg-blue-100 rounded-xl p-3`}
										alt="skill-logo"
									/>

									<div className="mt-3">
										<h5 className="text-2xl mb-3">JQuery</h5>
										<hr className={`border border-blue-500`} />
										<p className="text-slate-500 mt-5">
											Developing web pages using Jquery for functionality and
											others.
										</p>

										<div className="mt-3">
											<a
												href="https://jquery.com/"
												className={`block text-center bg-white hover:bg-blue-500 border border-blue-500 hover:border-whiti px-5 py-3 rounded text-blue-500 hover:text-white w-full transition-all`}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more.
											</a>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
									<img
										src={`https://upload.vectorlogo.zone/logos/nextjs/images/60eff509-53dd-4280-92e7-7318fa02e934.svg`}
										className={`w-20 bg-gray-100 rounded-xl p-3`}
										alt="skill-logo"
									/>

									<div className="mt-3">
										<h5 className="text-2xl mb-3">Next Js</h5>
										<hr className={`border border-gray-500`} />
										<p className="text-slate-500 mt-5">
											Developing or create web pages using Next Js.
										</p>

										<div className="mt-3">
											<a
												href="https://nextjs.org/"
												className={`block text-center bg-white hover:bg-gray-500 border border-gray-500 hover:border-whiti px-5 py-3 rounded text-gray-500 hover:text-white w-full transition-all`}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more.
											</a>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
									<img
										src={`https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg`}
										className={`w-20 bg-sky-100 rounded-xl p-3`}
										alt="skill-logo"
									/>

									<div className="mt-3">
										<h5 className="text-2xl mb-3">React Js</h5>
										<hr className={`border border-sky-500`} />
										<p className="text-slate-500 mt-5">
											Developing or create web pages using React Js.
										</p>

										<div className="mt-3">
											<a
												href="https://reactjs.org/"
												className={`block text-center bg-white hover:bg-sky-500 border border-sky-500 hover:border-whiti px-5 py-3 rounded text-sky-500 hover:text-white w-full transition-all`}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more.
											</a>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
									<img
										src={`https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg`}
										className={`w-20 bg-sky-100 rounded-xl p-3`}
										alt="skill-logo"
									/>

									<div className="mt-3">
										<h5 className="text-2xl mb-3">MySql</h5>
										<hr className={`border border-sky-500`} />
										<p className="text-slate-500 mt-5">
											Manage Web app using mysql database management system.
										</p>

										<div className="mt-3">
											<a
												href="https://www.mysql.com/"
												className={`block text-center bg-white hover:bg-sky-500 border border-sky-500 hover:border-whiti px-5 py-3 rounded text-sky-500 hover:text-white w-full transition-all`}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more.
											</a>
										</div>
									</div>
								</div>
							</div>

							<div>
								<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
									<img
										src={`https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg`}
										className={`w-20 bg-amber-100 rounded-xl p-3`}
										alt="skill-logo"
									/>

									<div className="mt-3">
										<h5 className="text-2xl mb-3">Javascript</h5>
										<hr className={`border border-amber-500`} />
										<p className="text-slate-500 mt-5">
											Create web pages using javascript, manipulate DOM, etc.
										</p>

										<div className="mt-3">
											<a
												href="https://www.javascript.com/"
												className={`block text-center bg-white hover:bg-amber-500 border border-amber-500 hover:border-whiti px-5 py-3 rounded text-amber-500 hover:text-white w-full transition-all`}
												target="_blank"
												rel="noopener noreferrer"
											>
												Learn more.
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="">
					<section className="container mx-auto py-20 sm:px-10 p-10">
						<div className="flex justify-center">
							<div className="w-6/12 text-center">
								<h1 className="text-6xl">Award</h1>
								<hr className="border border-teal-500 my-5" />
								<span className="text-slate-500">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Iusto tempore ab sequi culpa ad incidunt.
								</span>
							</div>
						</div>
					</section>
				</div>
				<div className="bg-slate-100">
					<section className="container mx-auto py-20 sm:px-10 p-10">
						<div className="flex justify-center">
							<div className="w-6/12 text-center">
								<h1 className="text-6xl">Work Experience</h1>
								<hr className="border border-teal-500 my-5" />
								<span className="text-slate-500">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Iusto tempore ab sequi culpa ad incidunt.
								</span>
							</div>
						</div>
					</section>
				</div>
				<div className="">
					<section className="container mx-auto py-20 sm:px-10 p-10">
						<div className="flex justify-center">
							<div className="w-6/12 text-center">
								<h1 className="text-6xl">Educational Background</h1>
								<hr className="border border-teal-500 my-5" />
								<span className="text-slate-500">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Iusto tempore ab sequi culpa ad incidunt.
								</span>
							</div>
						</div>
					</section>
				</div>
				<div className="bg-slate-900 py-10 text-white">
					<div className="container mx-auto">
						<div className="text-center">
							&copy; {new Date().getFullYear()} - Zulfikar Ditya, Alrigts
							Reserved.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
