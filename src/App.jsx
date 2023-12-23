import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


const examplePost = {
    title: 'kip',
    subtitle: 'kippig',
    content: 'fjdkal;fdjksa;',
    created: 'today',
    // author: 'de buurman',
    readTime: 2,
    comments: 13,
    shares: 10,
};

function App() {
    const baseURL = 'http://localhost:3000';
    const [ data, setData ] = useState( {} );
    const [ singlePost, setSinglePost ] = useState( {} );
    const [ addPostData, setAddPostData ] = useState( {} );
    const [ deletePostData, setDeletePostData ] = useState( {} );
    const [ changedPost, setChangedPost ] = useState( {} );
    
    // GET ALL POSTS
    async function getData() {
        const response = await axios.get( `${baseURL}/posts` );
        
        setData( response.data );
    }
    
    // GET A SINGLE POST
    async function getSinglePost() {
        const response = await axios.get( `${baseURL}/posts/1` );
        
        setData( response.data );
    }
    
    // POST A POST
    async function addPost() {
        const response = await axios.post( `${baseURL}/posts`, examplePost );
        
        setAddPostData( response.data );
        void getData();
    }
    
    // DELETE A POST
    async function deletePost() {
        try {
            const response = await axios.delete( `${baseURL}/posts/2` );
            
            setDeletePostData( response.data );
        } catch ( e ) {
            console.error( e );
        }
    }
    
    // CHANGE A POST
    async function changePost() {
        try {
            const response = await axios.put( `${baseURL}/posts/5`, examplePost );
            
            setChangedPost( response.data );
        } catch ( e ) {
            console.error( e );
        }
    }
    
    
    const postId = 1;
    
    // Trigger function(s) on mount
    useEffect( () => {
        
        
        // void getData();
        // void getSinglePost();
        // void addPost();
        // void deletePost();
        // void changePost();
        
    }, [] );
    
    useEffect( () => {
        // console.log( 'data: ', data );
    }, [ data ] );
    
    function handleClick() {
        void addPost();
    }
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <h1>Oefenrequests</h1>
            <button
                type='button'
                onClick={handleClick}
            >Button
            </button>
            {/*{console.log( 'data: ', data )}*/}
            {/*{console.log( 'singlePost: ', data )}*/}
            {/*{console.log( 'addPostData: ', addPostData )}*/}
            {/*{console.log( 'deletePostData: ', deletePostData )}*/}
            {/*{console.log( 'changedPost: ', changedPost )}*/}
        </>
    );
}

export default App;
