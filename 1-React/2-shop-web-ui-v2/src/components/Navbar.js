import React from 'react';

export default ({ title }) => {
    return (
        <nav className="navbar navbar-light bg-primary">
            <a className="navbar-brand" href="/">{title}</a>
        </nav>
    )
}