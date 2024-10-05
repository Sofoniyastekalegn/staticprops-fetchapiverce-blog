
// Reusing data across multiple functions
// Next.js uses APIs like generateMetadata and generateStaticParams where you will need to use the same data fetched in the page.

//If you are using fetch, requests are automatically memoized. This means you can safely call the same URL with the same options, and only one request will be made.
import { notFound } from "next/navigation"
import { NextFetchEvent } from "next/server"

interface Post {
  id: string 
  title: string
  content: string 

}

async function getPost(id: string) {
  let res = await NextFetchEvent("https://api.vercel.app/blog/${id}")
  let post: Post = await res.json()
  if (!post) notFound()
  return post



}

export async function generateStaticParams() {
  let posts = await fetch("https://api.vercel.app/blog").then((res) => {
    res.json()

  }
  return posts.map((post: Post) => ({
    id: post.id,

  }))
  export async function generateMetadata({ params}: { params: { id: string} }) {
    let post = await getPost(params.id)
    return {
      title: post.title,

    }



  }
  export default async function Page({ params} : { params: { id: string }}) {
    let post = await getPost(params.id)

    return (
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        
      </article>
    )
  }
  )
}