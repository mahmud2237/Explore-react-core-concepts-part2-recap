import "./Posts.css";
export default function Post({post}){

    const {userId, id, title, body} = post;

    return(
        <div className="post">
            <h3>userId: {userId}</h3> 
            <h4>ID: <small>{id}</small></h4>
            <h5>Title: {title}</h5>
            <p><span>Details: </span><small>{body}</small></p>
        </div>
    );
}