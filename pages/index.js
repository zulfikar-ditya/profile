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
					content="Zulfikar ditya - Web Development Enthusiast"
				/>
				<meta name="title" content="Zulfikar Ditya" />
				<meta
					name="keywords"
					content="Zulfikar Ditya, Web Development, Web developer, Backend Developer, Laravel Developer, Web App Developer."
				/>
				<meta name="author" content="Zulfikar Ditya" />
				<meta name="theme-color" content="#14b8a6" />
				<link rel="icon" href="/octocat-1662013943820.png" />
			</Head>
			<div className="">
				<div className="">
					<MainSection />
				</div>
				<div className="">
					<ExperienceSection />
				</div>
				<div className="">
					<div className="min-h-screen">
						<SkillSections />
					</div>
				</div>

				<div className="">
					<AwardSection />
				</div>
				<div className="">
					<EducationalSection />
				</div>
				<div className="">
					<Footer />
				</div>
			</div>
		</div>
	);
}
