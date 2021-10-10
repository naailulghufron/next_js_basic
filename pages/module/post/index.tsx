import React from 'react'
import Layout from '../../../components/Layout/Index'
import styles from '../../../styles/Post.module.css'

interface Post{
    id: number
    title: string
    body: string
}

interface PostProps{
    dataPost : Post[]
}

export default function Post(props: PostProps) {
    const {dataPost} = props
    // console.log(dataPost)
    return (
        <Layout>
            <h1>Post</h1>
            {
                dataPost.map(post => (
                    <div key={post.id} className={styles.card}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
            
        </Layout>
    )
}

export async function getServerSideProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dataPost = await res.json()
    return {
        props:{
            dataPost,
        }
    }
}
