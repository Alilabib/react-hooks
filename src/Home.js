import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = ()=>{
    // const [blogs, setBlogs] = useState([
    //     {title:'My new Website',body:'lorem ipsum ....',author:'Ali2',id:1},
    //     {title:'Welcome party!',body:'lorem ipsum ....',author:'labib',id:2},
    //     {title:'Web dev top tips',body:'lorem ipsum ....',author:'eisaa',id:3},
    // ]);
    const {data:blogs, isPending,error} = useFetch('http://localhost:8000/blogs');
    return (
      <div className="home">
          {error && <div className="error"> {error} </div>}
          {isPending && <div className="isPending"> Loading ...... </div>}
          { blogs && <BlogList blogs={blogs} title="All Blogs !" />}
      </div>
    );
}

export default Home;