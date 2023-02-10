import React from "react";
import Awards from "../../pages/json/Award.json";
import AwardCard from "../card/AwardCard";

export default function AwardSection() {
	return (
		<div className="bg-slate-100 dark:bg-slate-800">
			<section className="container mx-auto py-20 sm:px-10 p-10 min-h-screen">
				<div className="flex flex-col justify-between">
					<div className="flex justify-center">
						<div className="w-6/12 text-center">
							<h1 className="text-4xl dark:text-slate-200">Award</h1>
							<hr className="border border-teal-500 my-5 dark:text-slate-400" />
							<span className="text-slate-500">
								I won several awards in my life. I am very proud of them.
							</span>
						</div>
					</div>

					<div className="mt-20 w-full md:w-6/12 lg:w-4/12 mx-auto">
						<ol className="relative border-l border-gray-200 dark:border-gray-700 ">
							{Awards.map((award, index) => {
								let { title, description, year } = award;

								return (
									<AwardCard
										title={title}
										year={year}
										description={description}
										key={index}
									/>
								);
							})}
						</ol>
					</div>
				</div>
			</section>
		</div>
	);
}
