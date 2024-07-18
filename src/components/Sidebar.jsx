export default function Sidebar({ addProject, projectsState, onSelect }) {
	return (
		<div className="w-1/4 h-full px-20 pt-28 rounded-tr-2xl bg-zinc-950 text-gray-100 ">
			<h2 className="uppercase font-bold text-3xl">I tuoi progetti</h2>
			<button
				onClick={() => addProject(true)}
				className="font-medium rounded-xl my-12 px-6 py-4 transition-all bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-300"
			>
				+ Aggiungi Progetto
			</button>

			<ol>
				{projectsState.projList.map((project) => (
					<li key={project.id} className="pb-2">
						<button
							onClick={() => onSelect(project)}
							className={`px-4 py-2 w-full text-start font-medium capitalize rounded-md transition-all ${
								projectsState.selectedProject === project
									? " bg-zinc-800 text-zinc-200"
									: " text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
							}`}
						>
							{project.title}
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}
