import ProjectTask from "./ProjectTask";

function formatDate(date) {
	const dateObject = new Date(date);
	const options = { day: "numeric", month: "long", year: "numeric" };
	return new Intl.DateTimeFormat("it-IT", options).format(dateObject);
}

export default function ProjectDetails({ children, project }) {
	return (
		<div className="w-full pt-28 ps-16 pe-60">
			<div className="flex justify-between">
				<h1 className="capitalize inline-block font-bold text-zinc-600 text-5xl">
					{project.title}
				</h1>

				{children}
			</div>

			<p className="font-medium text-xl text-zinc-400">
				{formatDate(project.date)}
			</p>
			<p className="font-medium text-xl py-5 border-b-2 border-zinc-500">
				{project.description}
			</p>

			<ProjectTask project={project} />
		</div>
	);
}
