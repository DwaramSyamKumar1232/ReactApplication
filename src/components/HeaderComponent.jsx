import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/">
                            Employee Management System
                        </Link>

                        <div className="navbar-nav">

                            <Link
                                className="nav-link text-white"
                                to="/employees">
                                Employees
                            </Link>

                            <Link
                                className="nav-link text-white"
                                to="/add-employee">
                                Add Employee
                            </Link>

                            <Link
                                className="nav-link text-white"
                                to="/fund-transfer">
                                Fund Transfer
                            </Link>

                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;