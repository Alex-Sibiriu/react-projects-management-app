import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NoProject from "./components/NoPorject";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";

const ERROR_MSG = {
	titleError: "",
	descrError: "",
	dateError: "",
};

function App() {
	const [isAddingProject, setIsAddingProject] = useState(false);
	const [projectsList, setProjectsList] = useState([]);
	const [selectedProject, setSelectedProject] = useState({});
	const [errorMessages, setErrorMessages] = useState(ERROR_MSG);

	function handleSelect(project) {
		setSelectedProject((prevProject) => {
			const newSelected = project;
			return newSelected;
		});

		setIsAddingProject(false);
	}

	function isEmpty(obj) {
		return Object.keys(obj).length === 0;
	}

	function handleAddingProject(value) {
		setIsAddingProject(value);
		setSelectedProject({});
	}

	function isValidDate(dateString) {
		const dateObject = new Date(dateString);

		return !isNaN(dateObject.getTime());
	}

	function handleProjectSave(project) {
		if (project.title.length < 3) {
			setErrorMessages((prevErrors) => {
				const updatedErrors = {
					...ERROR_MSG,
					titleError: "Il titolo deve avere minimo 3 lettere",
				};
				return updatedErrors;
			});
			return;
		} else if (project.description.length < 10) {
			setErrorMessages((prevErrors) => {
				const updatedErrors = {
					...ERROR_MSG,
					descrError: "La descrizione deve avere minimo 10 lettere",
				};
				return updatedErrors;
			});
			return;
		} else if (!isValidDate(project.date)) {
			setErrorMessages((prevErrors) => {
				const updatedErrors = {
					...ERROR_MSG,
					dateError: "La data non é valida",
				};
				return updatedErrors;
			});
			return;
		}

		setErrorMessages(ERROR_MSG);

		setProjectsList((prevList) => {
			const updatedList = [project, ...prevList];
			return updatedList;
		});
		setIsAddingProject(false);
	}

	function deleteProject(delId) {
		setProjectsList((prevList) => {
			const updatedList = prevList.filter((project) => project.id !== delId);
			return updatedList;
		});
		setSelectedProject({});
	}

	return (
		<div className="h-screen pt-20 flex">
			<Sidebar addProject={handleAddingProject}>
				{projectsList.map((project, index) => (
					<li key={`project-${index}`}>
						<button
							onClick={() => handleSelect(project)}
							className="px-4 py-2 w-full text-start font-medium capitalize rounded-md transition-all text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
						>
							- {project.title}
						</button>
					</li>
				))}
			</Sidebar>

			{!isAddingProject && isEmpty(selectedProject) && (
				<NoProject addProject={handleAddingProject} />
			)}
			{isAddingProject && isEmpty(selectedProject) && (
				<NewProject
					errorsMsg={errorMessages}
					addProject={handleAddingProject}
					saveProject={handleProjectSave}
				/>
			)}

			{!isEmpty(selectedProject) && (
				<ProjectDetails project={selectedProject}>
					<button
						onClick={() => deleteProject(selectedProject.id)}
						className="rounded-xl font-medium px-6 py-4 me-4 transition-all text-xl bg-transparent hover:bg-zinc-200 text-zinc-600"
					>
						Cancella
					</button>
				</ProjectDetails>
			)}
		</div>
	);
}

export default App;
