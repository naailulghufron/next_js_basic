import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../../../components/Layout/Index'

export default function ItemDetail() {
    const router = useRouter()
    const {id} = router.query
    return (
        <Layout>
            <div>
                <p>This is {id}</p>
            </div>
        </Layout>
    )
}
