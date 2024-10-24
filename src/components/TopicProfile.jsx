import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
function Topic() {
  return (
    <div className="flex space-x-4 border-b pb-2">
      <Link to="/" className="text-blue-500 border-b-2 border-blue-500 pb-2 hover:text-blue-500">Postingan</Link>
      <Link to="/komentar" className="text-blue-500 hover:text-blue-500">Komentar</Link>

      {/* <a href="/" className="text-blue-500 border-b-2 border-blue-500 pb-2">Postingan</a> */}
      {/* <a href="#" className="text-gray-500 hover:text-blue-500">Komentar</a> */}
      {/* <a href="#" className="text-gray-500 hover:text-blue-500">Favorit</a> */}
      {/* <a href="#" className="text-gray-500 hover:text-blue-500">Topik</a> */}
    </div>
  );
}

export default Topic;