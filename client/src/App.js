import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StartPage from './Components/Pages/StartPage/StartPage';
import PostingsPage from './Components/Pages/PostingsPage/PostingsPage';
import PostingPage from './Components/Pages/PostingPage/PostingPage';
import AddPostingPage from './Components/Pages/AddPostingPage/AddPostingPage';
import UpdatePostingPage from './Components/Pages/UpdatePostingPage/UpdatePostingPage';
import DeletePostingPage from './Components/Pages/DeletePostingPage/DeletePostingPage';
import ArticlePage from './Components/Pages/ArticlePage/ArticlePage';

function App() {
  return (
    <Router >
      <div>
        <Routes> 
            <Route path="/" exact element={<StartPage/>}/>
            <Route path="/postings" element={<PostingsPage/>}/>
            {/* <Route path="/posting" element={<PostingPage/>}/>
            <Route path="/addPosting" element={<AddPostingPage/>}/>
            <Route path="/updatePosting" element={<UpdatePostingPage/>}/>
            <Route path="/deletePosting" element={<DeletePostingPage/>}/>
            <Route path="/article" element={<ArticlePage/>}/> */}
        </Routes> 
      </div>
    </Router>
  )
}
export default App;
