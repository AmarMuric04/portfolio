import { NimaLabsSVG } from "./svgs";

const EXPERIENCE = [
	{
		role: "Junior Software Engineer",
		company: "NIMA Labs",
		logo: NimaLabsSVG,
		type: "Contract",
		startDate: "2025-06-01",
		location: "Belgrade, Serbia (Remote)",
		description: "A lot of things",
		skillGroups: [
			{
				title: "Core frontend",
				skills: [
					"React",
					"TypeScript",
					"Next.js",
					"Tailwind CSS",
					"Zustand",
					"Redux Toolkit",
					"TanStack Query",
					"TanStack Router",
					"React Hook Form",
					"Zod",
					"shadcn/ui",
					"Responsive Design",
					"Component Architecture",
				],
			},
			{
				title: "Mobile",
				skills: [
					"React Native",
					"Expo",
					"Expo EAS (build & release pipelines)",
				],
			},
			{
				title: "Real-time & data",
				skills: [
					"WebSockets",
					"Real-time Data Streaming",
					"REST API Integration",
					"SDK Integration",
					"State Management",
					"Performance Optimization",
				],
			},
			{
				title: "Charting & visualization",
				skills: ["TradingView Charting Library", "Data Visualization"],
			},
			{
				title: "Tooling & workflow",
				skills: [
					"Monorepos",
					"Turborepo",
					"pnpm",
					"Vite",
					"Git",
					"Code Review",
					"CI/CD",
					"ESLint (plugin authoring)",
					"Jest",
					"Vitest",
					"Playwright",
					"React Testing Library",
				],
			},
			{
				title: "Domain",
				skills: [
					"DeFi",
					"Perpetual Futures",
					"Decentralized Exchanges (DEX)",
					"Margin Trading Systems",
					"Trading Interfaces",
					"Blockchain",
					"Web3",
					"Wallet Integration",
					"Sei",
					"EVM",
					"Fintech",
				],
			},
			{
				title: "Beyond the code",
				skills: [
					"API Design",
					"Technical Specification Writing",
					"Systems Analysis",
					"Debugging & Root Cause Analysis",
					"Technical Documentation",
					"Client-Facing Communication",
					"Cross-Functional Collaboration",
					"Product Design",
					"UX Design",
				],
			},
		],
	},
	{
		role: "Freelance Web Developer",
		company: "Self-employed",
		type: "Freelance",
		startDate: "2022-01-01",
		location: "Novi Pazar, Serbia (Hybrid)",
		description:
			"I’ve built over 15 dynamic websites and managed more than 5 databases for a range of clients. I focus on clean design and efficient code, using React, Next.js, Node.js and Tailwind CSS to deliver work that looks great and performs reliably.",
		skillGroups: [
			{
				title: "Web development",
				skills: ["User Experience (UX)", "E-Commerce"],
			},
		],
	},
] as const;

export { EXPERIENCE };
