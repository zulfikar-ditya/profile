import React from "react";

export default function ExperienceCard({
	title,
	start,
	end,
	description,
	company,
}) {
	return (
		<li className="mb-10 ml-4">
			<div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-400"></div>
			<time className="mb-1 text-sm font-normal leading-none text-teal-500 dark:text-teal-400">
				{start} - {end}
			</time>
			<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
				{title} - {company}
			</h3>
			<ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
				{description.map((desc, index) => {
					return <li key={index}>{desc}</li>;
				})}
			</ul>
		</li>
	);
}
