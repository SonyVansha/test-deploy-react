import Dashboard from "../components/LayoutProfile";
import Topic from "../components/TopicProfile";

function CommentPage() {
  return (
    <Dashboard>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <Topic />

        {/* {content} */}
        <div className="mt-4 text-center">
            <img src="/images/profile/aru.jpg" alt="No Posts" className="mx-auto w-24 h-24 "/>
        </div>
      </div>
    </Dashboard>
  );
}

export default CommentPage;