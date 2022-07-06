import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ArticlesPage from "./pages/articles-page";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/ArticlesPage" element={<ArticlesPage />} />
			</Routes>
		</Router>
	);
}

export default App;
