import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { Switch, Route } from 'react-router-dom';
import PostDetail from './components/postDetail/PostDetail';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/posts/:postId">
					<PostDetail />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
