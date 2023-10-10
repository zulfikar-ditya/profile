import React from "react";
import skills from "../../pages/json/Skills.json";
import SkillCard from "../card/SkillCard";

export default function SkillSections() {
	return (
		<div className="dark:bg-slate-900">
			<section className="container mx-auto sm:px-10 p-0 py-20 ">
				<div className="flex justify-center">
					<div className="w-6/12 text-center">
						<h1 className="text-4xl tracking-widest dark:text-slate-200">
							Skills
						</h1>
						<hr className="border border-teal-500 my-5" />
						<span className="text-slate-500 dark:text-slate-400">
							I possess skills I&lsquo;m proud of, and my commitment to
							continuous learning drives me to enhance them further
						</span>
					</div>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 mt-20 gap-7 px-4 md:px-0 ">
					{skills.map((skill, index) => {
						let { name, img_url, text, color, url } = skill;
						return (
							<SkillCard
								name={name}
								img_url={img_url}
								text={text}
								color={color}
								url={url}
								key={index}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
}
