import {useEffect , useState} from 'react';
const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [name, setName] = useState('Ali');
    const [error, setError] = useState(null);
    const  handleDelete = (id)=>{
        const newData = data.filter((blog)=>blog.id !=id);
        setData(newData);
    }

    useEffect(()=>{
        const abortCont = new AbortController();
        const getPosts = async()=>{
            // setTimeout(async() => {
                try{
                    // let res = await fetch('http://localhost:8000/blogs');
                    let res = await fetch(url,{signal:abortCont.signal});
                    let data = await res.json();
                    setError(null);
                    setIsPending(false);
                    setData(data);

                }catch(e){
                    console.log(e);
                    if (e.name == 'AbortError'){
                        console.log('fetch aborted');
                    }else {
                        setIsPending(false);
                        setError('cannot get data');

                    }
                }
            // },1000);

        }
        getPosts();

        return ()=> abortCont.abort();
    },[url]);

    return {data,isPending,error,name};
}

export default useFetch;