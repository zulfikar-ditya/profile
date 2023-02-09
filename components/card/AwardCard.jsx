import React from "react";
import { Star } from "react-feather";

export default function AwardCard({ title, year, description }) {
	return (
		<li className="mb-10 ml-6">
			<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
				<Star />
			</span>
			<h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
				{title}
			</h3>
			<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
				{year}
			</time>
			<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				{description}
			</p>
		</li>
	);
}
