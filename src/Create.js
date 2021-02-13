import {useState} from 'react';
import {useHistory} from 'react-router-dom';
const Create = ()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('ali');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = async (e)=>{
         e.preventDefault();
        try{
            setIsPending(true);
            const blog = {title, body, author};
            let res = await fetch('http://localhost:8000/blogs',{method:'POST',headers:{"Content-Type":"application/json"},body:JSON.stringify(blog)});
            console.log(res);
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        }catch(e){
             console.log('errors');
        }

    }
    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title}  onChange={(e)=>{setTitle(e.target.value)}} />
                <label>Blog Body</label>
                <textarea required value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
                <label>Blog author</label>
                <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                    <option value="ali">Ali</option>
                    <option value="labib">Labib</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled> Adding blog ... </button>}
            </form>
        </div>
    );
}

export default Create;