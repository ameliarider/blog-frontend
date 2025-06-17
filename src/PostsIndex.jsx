export function PostsIndex(props) {
  return (
    <div id="posts-index" className="container">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => props.onShow(post)}>See More</button>
          <br /><br />
        </div>
      ))}
    </div>
  );
}
