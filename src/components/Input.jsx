export default function Input({ label, textarea, ...props }) {
	const classes =
		"w-full mt-2 p-2 rounded-sm bg-zinc-200  focus:outline-none border-b-4 border-b-zinc-300 focus:border-b-zinc-900";

	return (
		<>
			<label className="uppercase font-bold text-xl text-zinc-500">
				{label}
			</label>
			{textarea ? (
				<textarea className={classes} {...props}></textarea>
			) : (
				<input className={classes} {...props} />
			)}
		</>
	);
}
