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
            </ul>
        </div>
    )
}
