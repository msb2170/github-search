

export default function Form(props) {
   return (
    <>
        <form className="search-form" onSubmit={props.handleSubmit}>
            <input
                id="search"
                type="text"
                placeholder="enter a username or email" 
                onChange={props.handleChange}
                value={props.value}
            />
            <button type="submit">Submit</button>
        </form>
    </>
   ) 
}