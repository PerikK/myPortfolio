// Dynamically import all project images using Vite's glob import.
// To add a new project, just add a new folder under src/assets/project_images/
// and add an entry to the projects array below.
const imageModules = import.meta.glob(
	'../assets/project_images/**/*.{png,jpg,jpeg,webp}',
	{ eager: true },
);

function getImages(folder) {
	const prefix = `../assets/project_images/${folder}/`;
	return Object.entries(imageModules)
		.filter(([path]) => path.startsWith(prefix))
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, mod]) => mod.default);
}

const projects = [
	{
		id: 'dipteracast',
		title: 'Resilience Investment Assessment',
		description:
			'Resilience Investment Assessment is an application that helps decision-makers evaluate and prioritize investments in climate resilience without collecting data.',
		folder: 'RIA-app',
		links: [
			{ label: 'Demo', type: 'modal' },
			{
				label: 'Application',
				type: 'external',
				url: 'https://sme-resilience.vercel.app',
			},
		],
	},
	{
		id: 'dipteracast',
		title: 'DipteraCast frontend',
		description:
			'DipteraCast is a web application that allows users to predict diptera species presence based on environmental data, using the Random Forest algorithm.',
		folder: 'DipCast',
		links: [
			{ label: 'Demo', type: 'modal' },
			{
				label: 'Application',
				type: 'external',
				url: 'https://apps.oneaquahealth.eu/predictive/',
			},
		],
	},
	{
		id: 'enora-ws',
		title: 'ENORA INNOVATION - Website',
		description:
			'The ENORA INNOVATION website is a modern, responsive website built with React and Tailwind CSS. It features a clean design, smooth animations, and a user-friendly interface.',
		folder: 'Enora_ws',
		links: [
			{ label: 'Demo', type: 'modal' },
			{
				label: 'Application',
				type: 'external',
				url: 'https://enorainnovation.com',
			},
		],
	},
	{
		id: 'oah-resilience',
		title: 'OAH - Resilience Map',
		description:
			'The OneAquaHealth Resilience Map is an interactive tool that brings together biodiversity, environmental data, pathogens, weather, and satellite indicators to assess the health of urban water ecosystems.',
		folder: 'OAH/Res_map',
		links: [
			{ label: 'Demo', type: 'modal' },
			{
				label: 'Application',
				type: 'external',
				url: 'https://apps.oneaquahealth.eu/resmap/v2',
			},
		],
	},
	{
		id: 'dre',
		title: 'Destination Renewable Energy (DRE)',
		description:
			'Built the fe for the (DRE) Service Forecast and assess solar and wind energy potential using realtime and historical data. Get tailored sims, 2-day forecast, and interactive visualization through a secure digital platform.',
		folder: 'DRE',
		links: [
			{
				label: 'Demo',
				type: 'external',
				url: 'https://youtu.be/RxqCjHpBdpA?si=2afXxJLao1QAXiCs',
			},
			{
				label: 'Application',
				type: 'external',
				url: 'https://hyrefapp.destine.eu',
			},
		],
	},
	{
		id: 'cm-fe',
		title: 'Cohort Manager Front-End',
		description:
			'The front-end of a school management app, that allows students and teachers to communicate, grade and arrange classes. Built with React in an Agile setting',
		folder: 'cm_fe',
		links: [
			{ label: 'Demo', type: 'modal' },
			{
				label: 'Code',
				type: 'external',
				url: 'https://github.com/boolean-uk/team-dev-client-c12',
			},
		],
	},
	{
		id: 'cm-be',
		title: 'Cohort manager back-end.',
		description:
			'The back-end of a school management app. It allows for authentication account creation and management. Built with Express, Postgress, and Prisma in an Agile setting',
		folder: 'cm_be',
		links: [
			{ label: 'Demo', type: 'modal' },
			{
				label: 'Code',
				type: 'external',
				url: 'https://github.com/boolean-uk/team-dev-server-c12',
			},
		],
	},
	{
		id: 'shopping-list',
		title: 'Shopping-List',
		description:
			'A nice Shopping List optimized for mobile-phones where it is most likely to be used. Built with React and Tailwindcss.',
		folder: 'shoping-list',
		links: [
			{
				label: 'Demo',
				type: 'external',
				url: 'https://btr-shopping-list.netlify.app',
			},
			{
				label: 'Code',
				type: 'external',
				url: 'https://github.com/PerikK/shopping_list.git',
			},
		],
	},
];

// Attach pre-loaded images to each project
const projectsWithImages = projects.map(project => ({
	...project,
	images: getImages(project.folder),
}));

export default projectsWithImages;
