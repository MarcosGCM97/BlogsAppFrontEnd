import React from "react";

const AllBlogs =({blogs, onDelete, like})=>{
    const blogsToShow = blogs

    return <ul className="UlListBlog">
            <h3 className='h3Comunity'>Comunity Blogs:</h3>
        {blogsToShow.map((blog, index)=>(
            <li key={index}  className="LiListBlog">
                <p>{blog.author}</p> 
                <p>{blog.title}</p> 
                <p>{blog.URL}</p>
                <p>{blog.like} Like</p>
                <button className="btnDelete" onClick={onDelete}>❌</button>
                <button className="btnLike" onClick={like}>👍</button>
            </li>
        )
    )}
    </ul>
}

export default AllBlogs