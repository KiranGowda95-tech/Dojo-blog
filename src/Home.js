import BlogList from "./BlogList";
// import useFetch from "./useFetch";
import blogs from "./data/db";

const Home = () => {
  return (
    <div className="home">
      {/* {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>} */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
