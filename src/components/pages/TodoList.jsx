import { useState, useEffect, createContext } from 'react';
import { v4 as uuid } from 'uuid';

import ToDoListForm from '../form/ToDoListForm';
import TaskList from '../tasks/TaskList';

export const TodoListContext = createContext();

function TodoList() {
	const storedTasks = JSON.parse(localStorage.getItem('tasks'));
	const [tasks, setTasks] = useState(storedTasks ? storedTasks : []);
	const [taskTitle, setTaskTitle] = useState('');
	const [taskDuration, setTaskDuration] = useState();

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	function onChangeTitle(e) {
		// change current task name
		setTaskTitle(e.target.value);
	}

	function onChangeDuration(e) {
		// change current task duration
		setTaskDuration(e.target.value);
	}

	function createTask(e) {
		e.preventDefault();

		// check if current task title or duration is null
		if (taskTitle != '' && taskDuration > 0 && taskTitle.length <= 20 && taskDuration < 25) {
			setTasks((prevArray) => [
				...prevArray,
				{ id: uuid(), title: taskTitle, duration: taskDuration, completed: false },
			]);
			setTaskTitle('');
			setTaskDuration('');
		}
	}

	function toggleCheckbox(id) {
		const newTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(newTasks);
	}

	function deleteTask(id) {
		setTasks((prevArray) => prevArray.filter((task) => task.id !== id));
	}

	return (
		<div className="bg-slate-950 text-white p-8 rounded-xl m-10 w-fit">
			<h1 className="text-4xl font-bold text-center border-b border-slate-500 p-3">Todo List</h1>
			<ToDoListForm
				handleSubmit={createTask}
				onChangeDuration={onChangeDuration}
				onChangeTitle={onChangeTitle}
				titleValue={taskTitle}
				durationValue={taskDuration}
			/>
			<TodoListContext.Provider value={deleteTask}>
				<TaskList tasks={tasks} checkboxFunction={toggleCheckbox} />
			</TodoListContext.Provider>
		</div>
	);
}

export default TodoList;
