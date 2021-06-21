import React, { Component } from 'react';
import Link from 'next/link'

class Navbar extends Component {
    render() {
        return (
            <div>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
        );
    }
}

export default Navbar;