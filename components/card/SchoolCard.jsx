import React from "react";

export default function SchoolCard({ name, major, from, to }) {
	return (
		<li className="mb-10 ml-4">
			<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
			<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
				{from} - {to}
			</time>
			<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
				{name} {major ? `- ${major}` : ""}
			</h3>
		</li>
	);
}
