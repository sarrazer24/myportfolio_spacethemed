"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const achievements = [
	{
		title: "AWS Concepts",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/18LAvTFHPSng6qMgeXcmw7dpRZkA27XkG/view?usp=sharing",
	},
	{
		title: "PostgreSQL Data Functions",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1MNC-exHWJW7XGQQiMdzalWx8f9Ho7qE5/view?usp=sharing",
	},
	{
		title: "Intermediate SQL",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/17QbWs-UORvoqY3AxqVGCx9NeI2xXECHe/view?usp=sharing",
	},
	{
		title: "Introduction to SQL",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1695aGhQqHFioHLwtYOlDg-cn-adOH6Om/view?usp=sharing",
	},
	{
		title: "Cloud Computing",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1dz7pyD28a0Pbf7_qM35KIgfGwM2MIXPy/view?usp=sharing",
	},
	{
		title: "AI Ethics",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1I_ndf2y9wREFyt4__DRLGigqqcdV-yWO/view?usp=sharing",
	},
	{
		title: "Artificial Intelligence",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1hcobIPTVrkYYjBACEmToSWkAhweC3rox/view?usp=sharing",
	},
	{
		title: "Understanding ChatGPT",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1rKF9StzmudbVVrTgJ1_2_isZVflLYsln/view?usp=sharing",
	},
	{
		title: "Large Language Models (LLMs) Concepts",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/12ZUc3AxCgFy6kkgJ2gbSZgUx8-otkK4Q/view?usp=sharing",
	},
	{
		title: "Generative AI Concepts",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1vetc0nFj58fOzMK2p_4sHAIglmk_4koU/view?usp=sharing",
	},
	{
		title: "Cleaning Data with Generative AI",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1dDqAV4lPh1PSx7uGtpK2WOYHYDubWN66/view?usp=sharing",
	},
	{
		title: "Understanding Machine Learning",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1YehdBkgY34x-SLVCaEdgww2keRdYzMuB/view?usp=sharing",
	},
	{
		title: "Intermediate Python",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1sSzv5XewOBeai1esQv5r3ckGrwRyP3w5/view?usp=sharing",
	},
	{
		title: "Introduction to Python",
		issuer: "DataCamp",
		date: "2024",
		link: "https://drive.google.com/file/d/1w0maP1MxV23yQ3uJuwtA2clD9y7tOatC/view?usp=sharing",
	},
]

// Sort by most recent (descending by date, then original order)
const sortedAchievements = [...achievements].sort((a, b) => {
	if (b.date !== a.date) return b.date.localeCompare(a.date)
	return 0
})

const certificates: typeof achievements = [
	{
		title: "Certified Generative AI Professional",
		issuer: "Oracle Cloud Infrastructure",
		date: "October 2025",
		link: "https://drive.google.com/file/d/1i0RhP9g1rVN92irfuKihPLw_2PIUcNli/view?usp=drive_link",
	},
	{
		title: "AI Fundamentals",
		issuer: "DataCamp",
		date: "2025",
		link: "https://drive.google.com/file/d/1t15qFlGGlPoo1alCxmiuSqAw678sVegd/view?usp=sharing",
	},
]

const participation: typeof achievements = [
	{
		title: "Hackathon Participation - Forsatic",
		issuer: "Algérie Télécom",
		date: "2025",
		link: "https://drive.google.com/file/d/1ZjNUpMf6JFE9xAN4LgwtVqkC2O5qzLWW/view?usp=sharing",
	},
	{
		title: "Datathon Participation - AlphaAI (3rd edition)",
		issuer: "Alphabit Club",
		date: "2025",
		link: "https://drive.google.com/file/d/1dR2muITqBBxx4eRQfaMEQBKp9mw5bpHx/view?usp=sharing",
	},
	{
		title: "Hackathon Participation - DevFest Algiers 2024",
		issuer: "GDG Algiers",
		date: "2024",
		link: "https://drive.google.com/file/d/1ZjNUpMf6JFE9xAN4LgwtVqkC2O5qzLWW/view?usp=sharing",
	}
]

const timelineSections = [
	{
		label: "Course Achievements",
		key: "achievements",
		description: "Completed online courses and learning paths.",
		data: sortedAchievements,
	},
	{
		label: "Official Certificates",
		key: "certificates",
		description: "Recognized certifications from institutions.",
		data: certificates,
	},
	{
		label: "Event Participation",
		key: "participation",
		description: "Workshops, hackathons, and community events.",
		data: participation,
	},
]

export default function CertificatesSection() {
	const [activeSection, setActiveSection] = useState("achievements")
	const [showAll, setShowAll] = useState(false)
	const [query, setQuery] = useState("")

	const currentSection =
		timelineSections.find((s) => s.key === activeSection) ||
		timelineSections[0]
	const isAchievements = activeSection === "achievements"
	const filteredData = currentSection.data.filter((item) =>
		[item.title, item.issuer, item.date].join(" ").toLowerCase().includes(query.toLowerCase().trim())
	)
	const displayedData = isAchievements && !showAll
		? filteredData.slice(0, 4)
		: filteredData

	return (
		<motion.section
			id="certificates"
			className="relative px-6 pb-12 pt-32 md:pt-36"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<div className="container mx-auto max-w-4xl">
				<p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cocoa-600">Continuous learning</p>
				<h2 className="text-3xl font-bold tracking-[-0.04em] text-gray-900 md:text-4xl">Certificates</h2>
				<p className="mb-7 mt-2 text-sm leading-relaxed text-gray-600">Credentials in AI, data science, cloud, SQL, and responsible technology.</p>
				<label className="mb-5 flex items-center gap-2 border-b border-cocoa-700/20 pb-2 text-gray-500">
					<Search className="h-4 w-4" />
					<input
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						placeholder="Search certificates, issuers, or skills..."
						aria-label="Search certificates"
						className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500 dark:text-white"
					/>
				</label>
				<div className="mb-7 flex flex-wrap gap-x-5 gap-y-2 border-b border-cocoa-700/20 pb-3">
					{timelineSections.map((section) => (
						<button
							key={section.key}
							onClick={() => {
								setActiveSection(section.key)
								setShowAll(false)
							}}
							className={`text-xs transition-colors ${activeSection === section.key ? "font-semibold text-cocoa-700 underline underline-offset-4" : "text-gray-500 hover:text-cocoa-600"}`}
						>
							{section.label}
						</button>
					))}
				</div>
				<div className="flex-1">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							{displayedData.length === 0 ? (
								<div className="col-span-full text-center text-gray-400 py-8">
									No items in this category yet.
								</div>
							) : (
								displayedData.map((course, idx) => (
									<motion.div
										key={idx}
										className="bg-gray-900/70 p-3 rounded-lg border border-cocoa-700/20 hover:border-cocoa-400/60 transition-all duration-200 shadow group flex flex-col"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: idx * 0.02 }}
									>
										<div className="flex-1">
											<div className="text-xs text-gray-400">
												{course.date}
											</div>
											<div className="font-semibold text-sm text-white leading-tight mb-1">
												{course.title}
											</div>
											<div className="text-xs text-cocoa-300 mb-2">
												{course.issuer}
											</div>
										</div>
										<a
											href={course.link}
											target="_blank"
											rel="noopener noreferrer"
											className="text-cocoa-400 hover:underline text-xs mt-auto"
										>
											View →
										</a>
									</motion.div>
								))
							)}
						</div>
						{/* More/Less Button */}
						{isAchievements && filteredData.length > 4 && (
							<div className="flex justify-center mt-6">
								<Button
									variant="outline"
									className="border-cocoa-400 text-cocoa-400 hover:bg-cocoa-500/10 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
									onClick={() => setShowAll((v) => !v)}
								>
									{showAll ? "Show Less" : "Show More"}
								</Button>
							</div>
						)}
					</div>
				</div>
		</motion.section>
	)
}