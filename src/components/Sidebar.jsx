import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Sidebar(props) {
    return (
        <>
            <h2 className='text-white position-fixed'>Left menu</h2>
            <div className='pt-3 position-fixed' style={{top: '50px'}}>
                <ul className='nav nav-pills flex-column'>
                    <li className='nav-item'>
                        {/* <a className='nav-link active' href="#">Todo List</a> */}
                        <NavLink to="" className='nav-link'>Home Page</NavLink>
                    </li>
                    <li className='nav-item'>
                        {/* <a className='nav-link active' href="#">Todo List</a> */}
                        <NavLink to="/todos" className='nav-link'>Todo List</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/albums" className='nav-link'>Album List</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;