import Footer from './components/layout/Footer';
import TodoList from './components/pages/TodoList';

function App() {
	return (
		<div className="pb-40 flex justify-center">
			<TodoList />
			<Footer />
		</div>
	);
}

export default App;
