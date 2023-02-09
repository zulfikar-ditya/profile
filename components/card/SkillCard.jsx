import React from "react";

export default function SkillCard({ name, img_url, text, url }) {
	return (
		<div>
			<div className="bg-slate-100 hover:bg-slate-50 rounded-xl p-5 border border-gray-300 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
				<img src={img_url} className={`w-20 rounded-xl p-3`} alt="skill-logo" />

				<div className="mt-3">
					<h5 className="text-2xl mb-3">{name}</h5>
					<hr className={`border border-teal-500`} />
					<p className="text-slate-500 mt-5">{text}</p>

					<div className="mt-3">
						<a
							href={url}
							className={`block text-center bg-slate-100 hover:bg-teal-500 border border-teal-500 hover:border-white px-5 py-3 rounded text-teal-500 hover:text-white w-full transition-all`}
						>
							Learn more.
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
