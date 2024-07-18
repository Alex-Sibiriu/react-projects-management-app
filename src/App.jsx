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
	const [errorMessages, setErrorMessages] = useState(ERROR_MSG);

	const [projectsState, setProjectsState] = useState({
		isAdding: false,
		selectedProject: undefined,
		projList: [],
	});

	function handleSelect(project) {
		setProjectsState((prevState) => {
			const updatedState = {
				...prevState,
				isAdding: false,
				selectedProject: project,
			};
			return updatedState;
		});
	}

	function handleAddingProject(value) {
		setProjectsState((prevState) => {
			const updatedState = {
				...prevState,
				isAdding: value,
				selectedProject: undefined,
			};
			return updatedState;
		});
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

		setProjectsState((prevState) => {
			const updatedState = {
				projList: [project, ...prevState.projList],
				isAdding: false,
				selectedProject: project,
			};
			return updatedState;
		});
	}

	function deleteProject(delId) {
		setProjectsState((prevState) => {
			const updatedState = {
				projList: prevState.projList.filter((project) => project.id !== delId),
				isAdding: false,
				selectedProject: undefined,
			};
			return updatedState;
		});
	}

	return (
		<div className="h-screen pt-20 flex">
			<Sidebar
				addProject={handleAddingProject}
				projectsState={projectsState}
				onSelect={handleSelect}
			></Sidebar>

			{!projectsState.isAdding && !projectsState.selectedProject && (
				<NoProject addProject={handleAddingProject} />
			)}
			{projectsState.isAdding && !projectsState.selectedProject && (
				<NewProject
					errorsMsg={errorMessages}
					addProject={handleAddingProject}
					saveProject={handleProjectSave}
				/>
			)}

			{projectsState.selectedProject && (
				<ProjectDetails project={projectsState.selectedProject}>
					<button
						onClick={() => deleteProject(projectsState.selectedProject.id)}
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
