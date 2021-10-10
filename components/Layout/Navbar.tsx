import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <h3>NEXT-JS PRO</h3>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/setup/basic/department">
                        <a>
                            Department
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/setup/basic/item">
                        <a>
                            Item
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/setup/system/users">
                        <a>
                            User
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/module/post">
                        <a>
                            Post
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
