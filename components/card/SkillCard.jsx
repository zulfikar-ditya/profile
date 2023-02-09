import React from "react";

function SkillCard({ name, img_url, text, color, url }) {
	return (
		<div>
			<div className="bg-white hover:bg-slate-50 rounded-xl p-5 border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-5 transition-all">
				<img
					src={img_url}
					className={`w-20 bg-${color}-100 rounded-xl p-3`}
					alt="skill-logo"
				/>

				<div className="mt-3">
					<h5 className="text-2xl mb-3">{name}</h5>
					<hr className={`border border-${color}-500`} />
					<p className="text-slate-500 mt-5">{text}</p>

					<div className="mt-3">
						<a
							href={url}
							className={`block text-center bg-white hover:bg-${color}-500 border border-${color}-500 hover:border-white px-5 py-3 rounded text-${color}-500 hover:text-white w-full transition-all`}
						>
							Learn more.
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillCard;
