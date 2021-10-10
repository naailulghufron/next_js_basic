import Link from 'next/link'
import React from 'react'
import Layout from '../../../../components/Layout/Index'

export default function Item() {
    return (
        <Layout>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link href="/setup/basic/item/1">
                                    <a>
                                        1
                                    </a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/setup/basic/item/2">
                                    <a>
                                        2
                                    </a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/setup/basic/item/3">
                                    <a>
                                        3
                                    </a>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}
