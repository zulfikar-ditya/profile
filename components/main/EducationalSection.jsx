import React from "react";
import schools from "../../pages/json/Schools.json";
import SchoolCard from "../card/SchoolCard";

export default function EducationalSection() {
	return (
		<div className="dark:bg-slate-900">
			<section className="container mx-auto py-20 sm:px-10 p-10">
				<div className="flex justify-center">
					<div className="w-full md:w-6/12 text-center">
						<h3 className="text-4xl dark:text-slate-200">Educational</h3>
						<hr className="border border-teal-500 my-5" />
						<span className="text-slate-500 dark:text-slate-400">
							{/* i studied in some of great school.  */}
						</span>
					</div>
				</div>

				<div className="mt-20 w-full md:w-6/12 lg:w-4/12 mx-auto">
					<ol className="relative border-l border-gray-200 dark:border-gray-700">
						{schools.map((school, index) => {
							let { name, from, to, major } = school;

							return (
								<SchoolCard
									name={name}
									from={from}
									to={to}
									major={major}
									key={index}
								/>
							);
						})}
					</ol>
				</div>
			</section>
		</div>
	);
}
