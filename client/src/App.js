import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StartPage from './Components/Pages/StartPage/StartPage';
import EmployersPage from './Components/Pages/EmployersPage/EmployersPage';
import FilterdPostings from './Components/Pages/FilteredPostings/FilteredPostings'
import PostingPage from './Components/Pages/PostingPage/PostingPage';
import AddPostingPage from './Components/Pages/AddPostingPage/AddPostingPage';
import UpdatePostingPage from './Components/Pages/UpdatePostingPage/UpdatePostingPage';
import DeletePostingPage from './Components/Pages/DeletePostingPage/DeletePostingPage';
import ArticlesPage from './Components/Pages/ArticlesPage/ArticlesPage';

function App() {
  return (
    <Router >
      <div>
        <Routes> 
            <Route path="/" exact element={<StartPage/>}/>
            <Route path="/filterdPostings" element={<FilterdPostings />}/>
            <Route path="/addPosting" element={<AddPostingPage/>}/>
            <Route path="/articles" element={<ArticlesPage/>} />
            <Route path="/employers" element={<EmployersPage/>} />
            {/* <Route path="/posting" element={<PostingPage/>}/>
            <Route path="/updatePosting" element={<UpdatePostingPage/>}/>
            <Route path="/deletePosting" element={<DeletePostingPage/>}/>*/}
        </Routes> 
      </div>
    </Router>
  )
}
export default App;
