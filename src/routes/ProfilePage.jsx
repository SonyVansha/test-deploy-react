import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from '../views/DashboardProfilePage';
import CommentPage from '../views/CommentProfilePage';
// import Topic from '../components/Topic';

function PageRoutes() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/komentar" element={<CommentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default PageRoutes;