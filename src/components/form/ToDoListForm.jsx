import Input from '../form/Input';

function ToDoListForm({ handleSubmit, onChangeTitle, onChangeDuration, titleValue, durationValue }) {
	return (
		<>
			<h2 className="text-center text-xl font-bold mt-5">Insert your next task:</h2>
			<form className="flex flex-col w-96" onSubmit={handleSubmit}>
				<Input
					placeholder="Task title"
					type="text"
					name="title"
					label="What are you going to do?"
					value={titleValue}
					onChange={onChangeTitle}
				/>
				{titleValue.length > 20 && <p className="text-xs text-red-400">You passed the character limit!</p>}

				<Input
					placeholder="Task duration"
					type="number"
					name="duration"
					label="How many hours will this task take?"
					value={durationValue}
					onChange={onChangeDuration}
				/>
				{durationValue > 24 && <p className="text-xs text-red-400">Tasks can't take more than 24 hours.</p>}
				<input
					className="cursor-pointer bg-violet-600 w-96 p-3 rounded-lg mt-5 hover:bg-violet-700 duration-200 hover:font-bold"
					type="submit"
					value="Create Task"
				/>
			</form>
		</>
	);
}

export default ToDoListForm;
