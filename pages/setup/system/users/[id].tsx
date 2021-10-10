import { useRouter } from "next/router"
// import Users from "."
import Layout from "../../../../components/Layout/Index"

interface userDetailProps{
    user: any
}

export default function UserDetail(props: userDetailProps) {
    const {user} = props
    // console.log(user)
    return (
        <Layout>
            <div>
                <h1>Hello world</h1>
                <p>{user['name']}</p>
                <p>{user['email']}</p>
            </div>
        </Layout>
    )
}

export async function getStaticPaths(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const dataUsers = await res.json()

    // console.log(dataUsers)
    const paths = dataUsers.map((user: { id: any }) => ({
            params:{
                id : `${user.id}`,
            }
    }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context: { params: { id: any } }){
    const {id} = context.params

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()

    // console.log(user)
    
    return {
        props: {
            user,
        }
    }
}
