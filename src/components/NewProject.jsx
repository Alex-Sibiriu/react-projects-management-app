import { useRef } from "react";

export default function NewProject({ addProject, saveProject, errorsMsg }) {
	const newProject = useRef({
		id: Date.now(),
		title: "",
		description: "",
		date: "",
		tasks: [],
	});

	function handleChange(event, trait) {
		newProject.current[trait] = event.target.value;
	}

	return (
		<div className="w-full pt-32 ps-16 pe-60">
			<div className="buttons text-end pb-6">
				<button
					onClick={() => addProject(false)}
					className="rounded-xl font-medium px-6 py-4 me-4 transition-all text-xl bg-transparent hover:bg-zinc-200 text-black"
				>
					Annulla
				</button>
				<button
					onClick={() => saveProject(newProject.current)}
					className="rounded-xl font-medium px-6 py-4 me-4 transition-all text-xl bg-black hover:bg-zinc-800 text-white"
				>
					Salva
				</button>
			</div>
			<form>
				<div className="pb-6">
					<label className="uppercase font-bold text-xl text-zinc-500">
						Titolo
					</label>
					<input
						onChange={(event) => handleChange(event, "title")}
						type="text"
						className="w-full h-12 mt-2 px-2 rounded-sm bg-zinc-200  focus:outline-none border-b-4 border-b-zinc-300 focus:border-b-zinc-900"
					/>
					<p className="text-red-700 font-medium">{errorsMsg.titleError}</p>
				</div>

				<div className="pb-6">
					<label className="uppercase font-bold text-xl text-zinc-500">
						Descrizione
					</label>
					<textarea
						onChange={(event) => handleChange(event, "description")}
						rows={4}
						className="w-full mt-2 p-2 rounded-sm bg-zinc-200  focus:outline-none border-b-4 border-b-zinc-300 focus:border-b-zinc-900"
					></textarea>
					<p className="text-red-700 font-medium">{errorsMsg.descrError}</p>
				</div>

				<div>
					<label className="uppercase font-bold text-xl text-zinc-500">
						Data
					</label>
					<input
						onChange={(event) => handleChange(event, "date")}
						type="date"
						className="w-full h-12 mt-2 px-2 rounded-sm bg-zinc-200  focus:outline-none border-b-4 border-b-zinc-300 focus:border-b-zinc-900"
					/>
					<p className="text-red-700 font-medium">{errorsMsg.dateError}</p>
				</div>
			</form>
		</div>
	);
}
