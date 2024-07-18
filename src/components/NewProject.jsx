import { useRef } from "react";

import Input from "./Input";

export default function NewProject({ addProject, saveProject, errorsMsg }) {
	const newProject = useRef({
		id: Date.now(),
		title: "",
		description: "",
		date: "",
		tasks: [],
	});

	function handleChange(event, trait) {
		newProject.current[trait] = event.target.value.trim();
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
					<Input
						label="Titolo"
						onChange={(event) => handleChange(event, "title")}
						type="text"
					/>
					<p className="text-red-700 font-medium">{errorsMsg.titleError}</p>
				</div>

				<div className="pb-6">
					<Input
						label="Descrizione"
						onChange={(event) => handleChange(event, "description")}
						rows={4}
						textarea
					/>
					<p className="text-red-700 font-medium">{errorsMsg.descrError}</p>
				</div>

				<div>
					<Input
						label="Data"
						onChange={(event) => handleChange(event, "date")}
						type="date"
					/>
					<p className="text-red-700 font-medium">{errorsMsg.dateError}</p>
				</div>
			</form>
		</div>
	);
}
