import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form'
import blogServices from './services/blogs'
import AllBlogs from './components/AllBlogs';

// manejo de errores


function App() {
  const [newBlog, setBlog] = useState([])
  const [newAuthor, setAuthor] = useState('')
  const [newTitle, setTitle] = useState('')
  const [newUrl, setUrl] = useState('')
  const [newLike, setLike] = useState(0)
  const [aux, setAux] = useState([]) //this variable was created for manage the useEffect Hook

  useEffect(()=>{
    blogServices
      .getAll()
      .then(result => setBlog(result))
  }, [aux])

  const handleAuthor =(event)=>{
    setAuthor(event.target.value)
  }
  const handleTitle =(event)=>{
    setTitle(event.target.value)
  }
  const handleUrl =(event)=>{
    setUrl(event.target.value)
  }
  const handleLike =(event)=>{
    let target = event.target.parentNode.children[1].innerText
    let plusThis = newBlog.filter(plus => plus.title === target)
    let plus = plusThis[0].like

    if(event.target){
      setLike(plus = plus+ 1)
    }
    const blogObject = {
      author: plusThis[0].author,
      title: plusThis[0].title,
      URL: plusThis[0].URL,
      like: plus
    }

    blogServices
      .update(plusThis[0].id, blogObject)
      .then(result => setAux(result))
  }
  const onDelete =(event)=>{
    let target = event.target.parentNode.children[1].innerText
    let deleteThis = newBlog.filter(plus => plus.title === target)
    let delete1 = deleteThis[0].id

    blogServices
      .deleteBlog(delete1)
      .then(result => setAux(result))
  }

  const addBlog =(event)=>{
    event.preventDefault();

    const blogObject = {
      author: newAuthor.charAt(0).toUpperCase() + newAuthor.slice(1),
      title: newTitle.charAt(0).toUpperCase() + newTitle.slice(1),
      URL: newUrl.charAt(0).toUpperCase() + newUrl.slice(1),
      like: 0 
    }

    let validateBlog = newBlog.filter(blog => blog.title.toUpperCase() === blogObject.title.toUpperCase())
    validateBlog = newBlog.filter(blog => blog.URL.toUpperCase() === blogObject.URL.toUpperCase())
    if(validateBlog.length > 0){
      alert('This blog is already added to this page')
      // eslint-disable-next-line no-sequences
      return setBlog(newBlog),setAuthor(''),setTitle(''),setUrl('')
    }


    blogServices
      .create(blogObject)
      .then(result => 
        setBlog(newBlog.concat(result))
      )
      .then(result => setAux(result))

    setAuthor('')
    setTitle('')
    setUrl('')
    setLike(false)
  }

  return (
    <div className="App">
      <h1 className="h1Blogs">Blogs Apps 📝</h1>
      <h3 className="h3Save">Save your favorite blogs in this app</h3>
      <Form 
        submitForm={addBlog}
        valueAuthor={newAuthor}
        changeAuthor={handleAuthor}
        valueTitle={newTitle}
        changeTitle={handleTitle}
        valueUrl={newUrl}
        changeUrl={handleUrl}
      />  
      <AllBlogs
          blogs={newBlog}
          newLike={newLike}
          like={handleLike}
          onDelete={onDelete}
      /> 
    </div>
  );
}

export default App;
