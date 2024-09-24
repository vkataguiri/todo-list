function Input({ placeholder, name, label, type, onChange, value }) {
	return (
		<>
			<label className="mb-2 mt-3" htmlFor={name}>
				{label}
			</label>
			<input
				className="p-3 bg-slate-950 text-white border border-slate-500 rounded-lg"
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
				step={0.5}
			/>
		</>
	);
}

export default Input;
