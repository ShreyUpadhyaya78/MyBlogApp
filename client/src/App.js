import './App.css';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import PostPage from './pages/PostPage';
function App() {
  return (
    <>
      <UserContextProvider>
        <Layout />
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/edit/:id' element={<EditPost />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
