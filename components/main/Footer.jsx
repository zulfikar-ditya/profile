import React from "react";

export default function Footer() {
	return (
		<footer className="">
			<div className="px-4 py-6 bg-gray-300 dark:bg-gray-700 text-center">
				<span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
					<span>© {new Date().getFullYear()} </span>
					<a href="https://flowbite.com/">Zuldikar Ditya A. </a>
					<span>All Rights Reserved.</span>
				</span>
				<div className=""></div>
			</div>
		</footer>
	);
}
