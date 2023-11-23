import React from "react";
import { AlignCenter, GitHub, Instagram, Linkedin } from "react-feather";
import DarkModeToggle from "./DarkModeToggle";

export default function MainSection() {
	return (
		<div className="bg-white dark:bg-slate-900">
			<section className="container mx-auto">
				<div className="flex flex-col flex-wrap min-h-screen items-center justify-center p-10 md:p-50 lg:p-10">
					<div className="">
						<DarkModeToggle />
					</div>
					<div className="mt-10">
						<img
							alt="Zulfikar Ditya"
							src="/img.jpg"
							className="rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all h-96 dark:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-teal-500"
						/>
					</div>

					<div className="w-[100%] md:w-[65%] lg:w-[50%] text-center mt-10">
						<div className="">
							<div className="">
								<h1 className="text-5xl mt-5 tracking-widest text-slate-700 dark:text-slate-200">
									Zulfikar Ditya A.
								</h1>
							</div>
							<hr className="border border-teal-500 dark:border-teal-400 w-[50%] mx-auto my-5 " />
							<h2 className="text-2xl tracking-widest text-slate-700 dark:text-slate-200">
								Web development enthusiast.
							</h2>
							<h3 className="mt-2 text-md text-gray-500 dark:text-slate-100">
								Highly skilled Laravel Developer with a strong background in web
								application development and a passion for creating efficient and
								innovative solutions. Experienced in handling complex
								transaction algorithms and designing robust databases. Proven
								ability to work collaboratively in teams and deliver
								high-quality code. Committed to continuous learning and staying
								up-to-date with the latest technologies.
							</h3>
						</div>
					</div>
					<div className="flex flex-row gap-4 mt-10">
						<div className="">
							<a
								href="https://www.instagram.com/zulfikar.ditya/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="text-white dark:hover:border dark:hover:border-orange-500 bg-gradient-to-tr from-orange-500 to-violet-500 p-5 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer dark:hover:shadow-lg dark:hover:shadow-rose-500">
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
								<p className="text-white dark:hover:border dark:hover:border-sky-500 bg-gradient-to-tr from-sky-500 to-blue-500 p-5 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer dark:hover:shadow-lg dark:hover:shadow-sky-500">
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
								<p className="text-white dark:hover:border dark:hover:border-gray-500 bg-gradient-to-tr from-gray-500 to-slate-900 p-5 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer dark:hover:shadow-lg dark:hover:shadow-gray-400">
									<GitHub />
								</p>
							</a>
						</div>
						<div className="">
							<a
								href="https://www.figma.com/file/RBauCT8RJqwwsziRpzruD9/Resume?type=design&node-id=0%3A1&mode=design&t=ZnmNRKePXPde3dfp-1"
								target="_blank"
								rel="noopener noreferrer"
								title="Resume"
							>
								<p className="text-white dark:hover:border dark:hover:border-teal-500 bg-gradient-to-tr from-teal-500 to-green-500 hover:bg-white p-5 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-md cursor-pointer dark:hover:shadow-lg dark:hover:shadow-teal-500">
									<AlignCenter />
								</p>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
