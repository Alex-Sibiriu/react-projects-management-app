export default function Sidebar({ children, addProject }) {
	return (
		<div className="w-1/4 h-full px-20 pt-28 rounded-tr-2xl bg-zinc-950 text-gray-100 ">
			<h2 className="uppercase font-bold text-3xl">I tuoi progetti</h2>
			<button
				onClick={() => addProject(true)}
				className="font-medium rounded-xl my-12 px-6 py-4 transition-all bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-300"
			>
				+ Aggiungi Progetto
			</button>
			<ol>{children}</ol>
		</div>
	);
}
