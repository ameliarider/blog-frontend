export function PostsNew(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    props.onCreate(params);
    form.reset();
  }
  return (
    <div id="posts-new" className="container" >
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Title: <input className="form-label" name="title" type="text" />
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Body:</label>
          <textarea name="body" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <br />
        <div className="mb-3">
          Image: <input className="form-label" name="image" type="url" />
        </div>
        <br />
        <button type="submit">Create Blog Post</button>
      </form>
      <br />
    </div>);
}

//  method="POST" action="http://localhost:3000/posts/new.json"