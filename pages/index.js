import Head from "next/head";
import AwardSection from "../components/main/AwardSection";
import EducationalSection from "../components/main/EducationalSection";
import ExperienceSection from "../components/main/ExperienceSection";
import Footer from "../components/main/Footer";
import MainSection from "../components/main/MainSection";
import SkillSections from "../components/main/SkillSections";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Zulfikar Ditya - Web Development Enthusiast</title>
				<meta
					name="description"
					content="Zulfikar Ditya - Motivated in application development especially in backend development. graduated as the best graduate in major software engineering at Smkn 1 Jenangan in 2022. I was won several competitions in the field of web development. very enthusiastic in the field of web development and still want to keep learning."
				/>
				<meta name="title" content="Zulfikar Ditya" />
				<meta name="keywords" content="Zulfikar Ditya" />
				<meta name="author" content="Zulfikar Ditya" />
				<meta name="theme-color" content="#14b8a6" />
				<link rel="icon" href="/octocat-1662013943820.png" />
			</Head>
			<div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
				<div className="snap-center shrink-0">
					<MainSection />
				</div>
				<div className="snap-start transition-all">
					<div className="bg-slate-100">
						<ExperienceSection />
					</div>
				</div>
				<div className="snap-start transition-all">
					<div className="min-h-screen">
						<SkillSections />
					</div>
				</div>

				<div className="snap-start transition-all">
					<div className="bg-slate-100">
						<AwardSection />
					</div>
				</div>
				<div className="snap-start transition-all">
					<EducationalSection />
				</div>
				<div className="snap-none" transition-all>
					<Footer />
				</div>
			</div>
		</div>
	);
}
