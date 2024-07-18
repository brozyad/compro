import Navbar from "../components/Navbar"
import CardList from "../components/Posts/CardList"
import ViewUserButton from "../components/Posts/ViewUserButton"

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface IPosts {
    userId: number,
    id: number,
    title: string,
    body: string 

}

const Posts = async() => {
    const response = await fetch(base_url)
    const posts: IPosts[] = await response.json()
        return (
            <>
              <Navbar/>
                <h1 className="text-white bg-orange-500 flex justify-center">TEAMS</h1>
                {posts.map((post) => {
                    return (
                     <CardList key={post.id}>
                        <p>{post.id}</p>
                        <i>{post.title}</i>
                        <p>{post.body}</p>
                        <ViewUserButton userId={post.userId}/>
                     </CardList>
                    )
                })}
               
            </>
        )
}

export default Posts