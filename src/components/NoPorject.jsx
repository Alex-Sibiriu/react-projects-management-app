import noProject from "../assets/no-projects.png";

export default function NoProject({ addProject }) {
	return (
		<div className="w-full pt-32 flex flex-col items-center">
			<img src={noProject} alt="no-projects" className="w-24" />
			<h2 className="capitalize font-bold text-zinc-600 text-3xl py-10">
				Nessun progetto selezionato
			</h2>
			<p className="text-zinc-400 text-2xl font-medium">
				Seleziona un progetto o iniziane uno nuovo
			</p>
			<button
				onClick={() => addProject(true)}
				className="transition-all capitalize font-medium text-2xl rounded-xl my-12 px-6 py-4 bg-zinc-800 hover:bg-zinc-950 text-zinc-500 hover:text-zinc-300"
			>
				Crea nuovo progetto
			</button>
		</div>
	);
}
