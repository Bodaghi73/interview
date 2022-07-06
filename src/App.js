import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ArticlesPage from "./pages/articles-page";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/ArticlesPage">
					<ArticlesPage></ArticlesPage>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
