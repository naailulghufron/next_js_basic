import { useRouter } from "next/router";
import Layout from "../../../../components/Layout/Index";

interface UsersProps{
    dataUsers:Array<any>;
}
export default function Users(props:UsersProps) {
    const {dataUsers} = props
    const router = useRouter()
    // console.log(dataUsers)
    return (
        <Layout>
            {dataUsers.map((user) => {
                // console.log(user)
                return (
                    <div key={user.id} onClick={() => router.push(`/setup/system/users/${user.id}`)}>
                        <p>{user.username}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps (){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const dataUsers = await res.json()
    return {
        props:{
            dataUsers,
        }
    }
}

