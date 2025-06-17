export function PostsShow({post , onUpdate , onDestroy}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(post,params,successCallback);
  }
  return (
    <div>
      <h1>Blog Post Detail</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <img src={post.image} className="modal-image"/>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={post.title} name="title" type="text" />
        </div>
        <div>
          <input defaultValue={post.body} name="body" type="text" />
        </div>
        <div>
          Image: <input defaultValue={post.image} type="img" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(post)}>Destroy</button>
    </div>
  )
}