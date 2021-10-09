import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode;
}
export default function Layout(props : LayoutProps) {
    const {children} = props;
    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}
