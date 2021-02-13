import Blog from "./Blog";

const BlogList = ({blogs,title})=>{
    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>
            <Blog blog={blog} key={blog.id} />
            )}
        </div>
    );
};

export default BlogList;