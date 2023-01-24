

export default function User(props) {
    return (
        <div className="user">
            <img src={props.avatar} alt="profile" width="50" height="50" />
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.username}
            </a>
        </div>
    )
}