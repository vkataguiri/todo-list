import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from 'react-icons/io';
import { TbTrash } from 'react-icons/tb';

function Task({ task, handleDelete, checkboxFunction }) {
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
				<p className="font-bold cursor-pointer peer-checked:line-through peer-checked:opacity-50 duration-500 select-none">
					{task.title} {task.completed}
				</p>
			</label>
			<p className="flex items-center gap-2 cursor-default">
				<span className="opacity-55 select-none">{task.duration} hours </span>
				<button onClick={() => handleDelete(task.id)}>
					<TbTrash className="opacity-55 text-xl hover:opacity-100 duration-150" />
				</button>
			</p>
		</li>
	);
}

export default Task;
