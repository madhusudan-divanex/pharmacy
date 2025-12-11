import { TbGridDots } from "react-icons/tb";
import { faSearch, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";


function Employee() {
    const navigate = useNavigate
    
    ()
    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Employee</h3>
                            <div className="admin-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb custom-breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="breadcrumb-link">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Employee
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div>
                            <button className="thm-btn rounded-3"  onClick={()=> navigate("/add-employee")} data-bs-dismiss="modal" aria-label="Close" >Add</button>
                        </div>


                    </div>
                </div>

                <div className='new-mega-card'>
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between mb-3 nw-box gap-2">
                            <div>
                                <div className="d-flex align-items-center gap-2 nw-box">
                                    <div className="custom-frm-bx mb-0">
                                        <input
                                            type="email"
                                            className="form-control admin-table-search-frm search-table-frm pe-5"
                                            id="email"
                                            placeholder="Search"
                                            required
                                        />
                                        <div className="adm-search-bx">
                                            <button className="tp-search-btn text-secondary">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="filters">
                                        <div className="field custom-frm-bx mb-0 custom-select admin-table-search-frm ">
                                            <label className="label">Status :</label>
                                            <select className="">
                                                <option>All</option>
                                                <option>Test 1</option>
                                                <option>Test 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="#" className="nw-thm-btn rounded-2">
                                            Filter
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="page-selector d-flex align-items-center mb-2 mb-md-0 gap-2">

                                <div>
                                    <select className="form-select custom-page-dropdown nw-custom-page">
                                        <option value="1" selected>100</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                    </select>
                                </div>



                            </div>


                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                            <div className="employee-card">
                                <div className="employee-tp-header d-flex align-items-center justify-content-between">
                                    <div className="admin-table-bx">
                                        <div className="admin-table-sub-bx">
                                            <img src="/view-avatr.png" alt="" />
                                            <div className="admin-table-sub-details">
                                                <h6 className="text-black fz-16 fw-600">Eleanor Pena</h6>
                                                <p>Nursing</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="approved rounded-5 py-1">Active</span>
                                        <div className="dropdown">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-black"
                                                id="acticonMenu1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <TbGridDots />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                aria-labelledby="acticonMenu1"
                                            >
                                                <li className="prescription-item">
                                                    <NavLink to="/view-employee" className="prescription-nav" >
                                                        View profile
                                                    </NavLink>
                                                </li>
                                                <li className="prescription-item">
                                                    <NavLink to="/add-employee" className="prescription-nav" href="#" >
                                                        Edit
                                                    </NavLink>
                                                </li>

                                                <li className="prescription-item">
                                                    <a className=" prescription-nav" href="#">

                                                        Delete
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="employee-user-details">
                                    <ul className="user-employee-list">
                                        <li className="user-employee-item">Role  :  <span className="user-employee-title">Head Nurse</span></li>
                                        <li className="user-employee-item">Mobile Number  : <span className="user-employee-title">+91-9876543210</span></li>
                                        <li className="user-employee-item">Email : <span className="user-employee-title">robert.davisr2r3@gmail.com</span></li>
                                        <li className="user-employee-item">Gender : <span className="user-employee-title">Male</span></li>
                                        <li className="user-employee-item">Joined : <span className="user-employee-title">May 15, 2012</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                            <div className="employee-card">
                                <div className="employee-tp-header d-flex align-items-center justify-content-between">
                                    <div className="admin-table-bx">
                                        <div className="admin-table-sub-bx">
                                            <img src="/emp-pic-two.png" alt="" />
                                            <div className="admin-table-sub-details">
                                                <h6 className="text-black fz-16 fw-600">Theresa Webb</h6>
                                                <p>Nursing</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="approved rounded-5 py-1">Active</span>
                                        <div className="dropdown">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-black"
                                                id="acticonMenu1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <TbGridDots />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                aria-labelledby="acticonMenu1"
                                            >
                                                <li className="prescription-item">
                                                    <NavLink to="/view-employee" className="prescription-nav" >
                                                        View profile
                                                    </NavLink>
                                                </li>
                                                <li className="prescription-item">
                                                    <NavLink to="/add-employee" className="prescription-nav" href="#" >
                                                        Edit
                                                    </NavLink>
                                                </li>

                                                <li className="prescription-item">
                                                    <a className=" prescription-nav" href="#">

                                                        Delete
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="employee-user-details">
                                    <ul className="user-employee-list">
                                        <li className="user-employee-item">Role  :  <span className="user-employee-title">Head Nurse</span></li>
                                        <li className="user-employee-item">Mobile Number  : <span className="user-employee-title">+91-9876543210</span></li>
                                        <li className="user-employee-item">Email : <span className="user-employee-title">robert.davisr2r3@gmail.com</span></li>
                                        <li className="user-employee-item">Gender : <span className="user-employee-title">Male</span></li>
                                        <li className="user-employee-item">Joined : <span className="user-employee-title">May 15, 2012</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                            <div className="employee-card">
                                <div className="employee-tp-header d-flex align-items-center justify-content-between">
                                    <div className="admin-table-bx">
                                        <div className="admin-table-sub-bx">
                                            <img src="/chat-logo.jpg" alt="" />
                                            <div className="admin-table-sub-details">
                                                <h6 className="text-black fz-16 fw-600">Brooklyn Simmons</h6>
                                                <p>Nursing</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="approved leaved rounded-5 py-1">On Leave</span>
                                        <div className="dropdown">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-black"
                                                id="acticonMenu1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <TbGridDots />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                aria-labelledby="acticonMenu1"
                                            >
                                                <li className="prescription-item">
                                                    <NavLink to="/view-employee" className="prescription-nav" >
                                                        View profile
                                                    </NavLink>
                                                </li>
                                                <li className="prescription-item">
                                                    <NavLink to="/add-employee" className="prescription-nav" href="#" >
                                                        Edit
                                                    </NavLink>
                                                </li>

                                                <li className="prescription-item">
                                                    <a className=" prescription-nav" href="#">

                                                        Delete
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="employee-user-details">
                                    <ul className="user-employee-list">
                                        <li className="user-employee-item">Role  :  <span className="user-employee-title">Head Nurse</span></li>
                                        <li className="user-employee-item">Mobile Number  : <span className="user-employee-title">+91-9876543210</span></li>
                                        <li className="user-employee-item">Email : <span className="user-employee-title">robert.davisr2r3@gmail.com</span></li>
                                        <li className="user-employee-item">Gender : <span className="user-employee-title">Male</span></li>
                                        <li className="user-employee-item">Joined : <span className="user-employee-title">May 15, 2012</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                            <div className="employee-card">
                                <div className="employee-tp-header d-flex align-items-center justify-content-between">
                                    <div className="admin-table-bx">
                                        <div className="admin-table-sub-bx">
                                            <img src="/table-avatar.jpg" alt="" />
                                            <div className="admin-table-sub-details">
                                                <h6 className="text-black fz-16 fw-600">Brooklyn Simmons</h6>
                                                <p>Nursing</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="approved rounded-5 py-1">Active</span>
                                        <div className="dropdown">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-black"
                                                id="acticonMenu1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <TbGridDots />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                aria-labelledby="acticonMenu1"
                                            >
                                               <li className="prescription-item">
                                                    <NavLink to="/view-employee" className="prescription-nav" >
                                                        View profile
                                                    </NavLink>
                                                </li>
                                                <li className="prescription-item">
                                                    <NavLink to="/add-employee" className="prescription-nav" href="#" >
                                                        Edit
                                                    </NavLink>
                                                </li>

                                                <li className="prescription-item">
                                                    <a className=" prescription-nav" href="#">

                                                        Delete
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="employee-user-details">
                                    <ul className="user-employee-list">
                                        <li className="user-employee-item">Role  :  <span className="user-employee-title">Head Nurse</span></li>
                                        <li className="user-employee-item">Mobile Number  : <span className="user-employee-title">+91-9876543210</span></li>
                                        <li className="user-employee-item">Email : <span className="user-employee-title">robert.davisr2r3@gmail.com</span></li>
                                        <li className="user-employee-item">Gender : <span className="user-employee-title">Male</span></li>
                                        <li className="user-employee-item">Joined : <span className="user-employee-title">May 15, 2012</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                            <div className="employee-card">
                                <div className="employee-tp-header d-flex align-items-center justify-content-between">
                                    <div className="admin-table-bx">
                                        <div className="admin-table-sub-bx">
                                            <img src="/chat-logo.jpg" alt="" />
                                            <div className="admin-table-sub-details">
                                                <h6 className="text-black fz-16 fw-600">Brooklyn Simmons</h6>
                                                <p>Nursing</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="approved inactive rounded-5 py-1">Inactivate</span>
                                        <div className="dropdown">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-black"
                                                id="acticonMenu1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <TbGridDots />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                aria-labelledby="acticonMenu1"
                                            >
                                                <li className="prescription-item">
                                                    <NavLink to="/view-employee" className="prescription-nav" >
                                                        View profile
                                                    </NavLink>
                                                </li>
                                                <li className="prescription-item">
                                                    <NavLink to="/add-employee" className="prescription-nav" href="#" >
                                                        Edit
                                                    </NavLink>
                                                </li>

                                                <li className="prescription-item">
                                                    <a className=" prescription-nav" href="#">

                                                        Delete
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="employee-user-details">
                                    <ul className="user-employee-list">
                                        <li className="user-employee-item">Role  :  <span className="user-employee-title">Head Nurse</span></li>
                                        <li className="user-employee-item">Mobile Number  : <span className="user-employee-title">+91-9876543210</span></li>
                                        <li className="user-employee-item">Email : <span className="user-employee-title">robert.davisr2r3@gmail.com</span></li>
                                        <li className="user-employee-item">Gender : <span className="user-employee-title">Male</span></li>
                                        <li className="user-employee-item">Joined : <span className="user-employee-title">May 15, 2012</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
                            <div className="employee-card">
                                <div className="employee-tp-header d-flex align-items-center justify-content-between">
                                    <div className="admin-table-bx">
                                        <div className="admin-table-sub-bx">
                                            <img src="/emp-pic-two.png" alt="" />
                                            <div className="admin-table-sub-details">
                                                <h6 className="text-black fz-16 fw-600">Brooklyn Simmons</h6>
                                                <p>Nursing</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-2">
                                        <span className="approved  rounded-5 py-1">Active</span>
                                        <div className="dropdown">
                                            <a
                                                href="javascript:void(0)"
                                                className="text-black"
                                                id="acticonMenu1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <TbGridDots />
                                            </a>
                                            <ul
                                                className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                aria-labelledby="acticonMenu1"
                                            >
                                                <li className="prescription-item">
                                                    <NavLink to="/view-employee" className="prescription-nav" >
                                                        View profile
                                                    </NavLink>
                                                </li>
                                                <li className="prescription-item">
                                                    <NavLink to="/add-employee" className="prescription-nav" href="#" >
                                                        Edit
                                                    </NavLink>
                                                </li>

                                                <li className="prescription-item">
                                                    <a className=" prescription-nav" href="#">

                                                        Delete
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="employee-user-details">
                                    <ul className="user-employee-list">
                                        <li className="user-employee-item">Role  :  <span className="user-employee-title">Head Nurse</span></li>
                                        <li className="user-employee-item">Mobile Number  : <span className="user-employee-title">+91-9876543210</span></li>
                                        <li className="user-employee-item">Email : <span className="user-employee-title">robert.davisr2r3@gmail.com</span></li>
                                        <li className="user-employee-item">Gender : <span className="user-employee-title">Male</span></li>
                                        <li className="user-employee-item">Joined : <span className="user-employee-title">May 15, 2012</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>






        </>
    )
}

export default Employee