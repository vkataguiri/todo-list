import Task from './Task';

function TaskList({ tasks, handleDelete, checkboxFunction }) {
	return (
		<section className="flex items-center border-t border-slate-500 mt-10 flex-col">
			<h1 className="mt-5 text-2xl font-bold">Task List</h1>
			{tasks.length === 0 && <p className="text-md text-slate-400">There are currently no tasks.</p>}
			{tasks.length > 0 && (
				<ul>
					{tasks.map((task) => (
						<Task
							task={task}
							handleDelete={handleDelete}
							key={task.id}
							checked={task.completed ? true : false}
							checkboxFunction={checkboxFunction}
						/>
					))}
				</ul>
			)}
		</section>
	);
}

export default TaskList;
