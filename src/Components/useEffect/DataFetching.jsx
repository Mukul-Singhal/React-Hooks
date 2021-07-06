import React, { useState, useEffect } from "react";

function DataFetching() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);
  return (
    <div>
      {post.map((post) => (
        <li>{post.title}</li>
      ))}
    </div>
  );
}

export default DataFetching;
