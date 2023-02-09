import React from "react";
import { experiences } from "../../pages/json/Experience";
import ExperienceCard from "../card/ExperienceCard";

export default function ExperienceSection() {
	return (
		<section className="container mx-auto py-20 sm:px-10 p-10">
			<div className="flex justify-center">
				<div className="w-6/12 text-center">
					<h1 className="text-4xl">Experience.</h1>
					<hr className="border border-teal-500 my-5" />
					<span className="text-slate-500">
						I have worked in several companies. I am very proud of them.
					</span>
				</div>
			</div>
			<div className="w-full md:w-6/12 lg:w-4/12 mx-auto min-h-screen mt-20">
				<ol class="relative border-l border-gray-700 dark:border-gray-400 ">
					<div className="flex flex-col mt-20">
						{experiences.map((experience, index) => {
							let { title, description, start, end, company } = experience;

							return (
								<ExperienceCard
									company={company}
									title={title}
									description={description}
									start={start}
									end={end}
								/>
							);
						})}
					</div>
				</ol>
			</div>
		</section>
	);
}