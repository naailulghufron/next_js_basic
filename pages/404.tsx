import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout/Index";


export default function Custom404() {
    const router = useRouter()
    
    useEffect(() => {
        setTimeout(() => {
            router.push("/?"+window.location.href)
        }, 3000);
    }, [])
    return (
        <Layout>
            <div>
                404 | This page could not found
            </div>
        </Layout>
    )
}
