import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <aside className="company-sidebar">
    <Link to="company-info" className="sidebar-btn">
        <span className="sidebar-icon">🏢</span>
        <span className="sidebar-text">Company Info</span>
    </Link>
    <Link to="stock-info" className="sidebar-btn">
        <span className="sidebar-icon">📈</span>
        <span className="sidebar-text">Stock Info</span>
    </Link>
  </aside>
);

export default Sidebar;
