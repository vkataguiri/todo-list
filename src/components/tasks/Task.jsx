import { useContext, useState } from 'react';

import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from 'react-icons/io';
import { TbEditCircle, TbEditCircleOff, TbTrash } from 'react-icons/tb';

import { TodoListContext } from '../pages/TodoList';

function Task({ task, checkboxFunction }) {
	const [editMode, setEditMode] = useState(false);
	const [editTaskTitle, setEditTaskTitle] = useState(task.title || '');
	const [editTaskDuration, setEditTaskDuration] = useState(task.duration);

	const { deleteTask, updateTask, charLimit } = useContext(TodoListContext);

	function onChangeTitle(e) {
		setEditTaskTitle(e.target.value);
	}

	function toggleEditTask() {
		if (editTaskTitle.length > charLimit || editTaskTitle.length < 1) {
			return;
		}

		setEditMode(!editMode);
		task.title = editTaskTitle;
		updateTask(task.id, task.title);
	}

	return (
		<li
			className="flex bg-violet-900 rounded-md p-4 justify-between w-96 mt-5 hover:bg-violet-950 peer-checked:bg-violet-950 duration-150"
			key={task.id}
		>
			<label className="flex items-center gap-2 group">
				<input
					id="checkbox"
					type="checkbox"
					className="peer opacity-0 cursor-pointer w-6 h-6 absolute"
					checked={task.completed}
					onChange={() => checkboxFunction(task.id)}
				/>
				<IoIosCheckmarkCircleOutline className="w-6 h-6 peer-checked:hidden" />
				<IoIosCheckmarkCircle className="hidden w-6 h-6 peer-checked:block" />
				{editMode ? (
					<input
						className="text-black"
						type="text"
						placeholder="Task title"
						value={editTaskTitle}
						onChange={onChangeTitle}
					/>
				) : (
					<p className="font-bold cursor-pointer peer-checked:line-through peer-checked:opacity-50 duration-500 select-none">
						{task.title}
					</p>
				)}
			</label>
			<p className="flex items-center gap-2 cursor-default">
				<span className="opacity-55 select-none">{task.duration} hours </span>
				<button type="submit" onClick={toggleEditTask}>
					{editMode ? (
						<TbEditCircleOff className="opacity-55 text-xl hover:opacity-100 duration-150" />
					) : (
						<TbEditCircle className="opacity-55 text-xl hover:opacity-100 duration-150" />
					)}
				</button>
				<button onClick={() => deleteTask(task.id)}>
					<TbTrash className="opacity-55 text-xl hover:opacity-100 duration-150" />
				</button>
			</p>
		</li>
	);
}

export default Task;
