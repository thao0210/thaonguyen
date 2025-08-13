import toast from "react-hot-toast";
import urls from "../constants/urls";
import { useEffect, useState } from "react";

const posts = () => {
  const [posts, setPosts] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  const getPosts = async() => {
    try {
        const posts = await fetch(`${urls.SEARCH_ITEMS}?keyword=thao0210`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (posts.status === 200) {
          const data = await posts.json();
          if (data && data.results) {
            setPosts(data.results);
          }
        }
    } catch (error) {
        console.log(error);
        toast.error('Failed to fetch posts. Please try again later.');
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="posts">
      {posts.length > 0 && (
        posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <small>{new Date(post.date).toLocaleDateString()}</small>
            {
              !viewMore && <div>{`${post.text.substring(0, 100)}...`}<span onClick={() => setViewMore(true)}>View more</span></div>
            }
            {
              viewMore && <>
              <div dangerouslySetInnerHTML={{__html: post.content}} />
              <span onClick={() => setViewMore(false)}>View less</span>
              </>
            }
          </div>)))}
      {
        posts.length === 0 && <p>No posts available.</p>
      }
    </div>
  );
}

export default posts;