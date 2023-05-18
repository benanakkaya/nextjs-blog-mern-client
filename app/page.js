import Carausel from "./components/Carausel";
import PostList from "./components/PostList";
import { GetLastPosts } from "./services/PostServices";

export default async function Home () {

  const posts = await GetLastPosts()
  
  return (
   <div className="flex flex-col gap-6">
    <Carausel />
    <PostList posts={posts} />
   </div>
  )
}
