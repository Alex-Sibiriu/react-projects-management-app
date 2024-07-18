import { useState, useRef } from "react";

export default function ProjectTask({ project }) {
	const [tasks, setTasks] = useState(project.tasks);
	const newTaskRef = useRef();

	function handleTask(event) {
		newTaskRef.current = event.target.value;
	}

	function addTask() {
		const newTask = {
			id: Date.now(),
			text: newTaskRef.current,
		};

		if (newTask.text.trim() === "") return;

		setTasks(() => {
			const updatedTasks = [newTask, ...project.tasks];
			project.tasks = updatedTasks;
			return updatedTasks;
		});

		newTaskRef.current = "";
		document.getElementById("newTaskInput").value = "";
	}

	function deleteTask(id) {
		setTasks(() => {
			const updatedTasks = project.tasks.filter((task) => task.id !== id);
			project.tasks = updatedTasks;
			return updatedTasks;
		});
	}

	return (
		<div>
			<h2 className="capitalize inline-block font-bold text-zinc-600 text-4xl py-8">
				Attività
			</h2>
			<div>
				<input
					onChange={handleTask}
					id="newTaskInput"
					type="text"
					className="w-2/5 h-12 mt-2 px-2 rounded-sm bg-zinc-200 focus:outline-none border-b-4 border-b-zinc-300 focus:border-b-zinc-900"
				/>
				<button
					onClick={addTask}
					className="rounded-xl font-medium px-3 py-2 ms-4 transition-all text-xl bg-transparent hover:bg-zinc-100 text-zinc-600"
				>
					Aggiungi Attività
				</button>
			</div>

			<div className="bg-zinc-100 px-3 py-6 mt-12">
				<ol>
					{project.tasks.length === 0 && (
						<p>Non ci sono attività per questo progetto.</p>
					)}
					{project.tasks.map((task) => (
						<li
							key={task.index}
							className="px-2 py-2 font-medium rounded-md text-zinc-700 flex justify-between transition-all hover:bg-zinc-200"
						>
							<span>{task.text}</span>
							<button
								onClick={() => deleteTask(task.id)}
								className="hover:bg-zinc-100 hover:text-red-600 transition-all px-2 rounded-md"
							>
								Elimina
							</button>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}
