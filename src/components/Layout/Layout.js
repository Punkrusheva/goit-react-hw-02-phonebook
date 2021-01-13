import React from 'react';
import './Layout.css';

const Layout = ({ children, title }) =>
    <div className="Layout" >
        <h1> </h1>
        {title && <h2>{title}</h2>}
        {children}
    </div>;

export default Layout;