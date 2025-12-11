import { TbGridDots } from "react-icons/tb";

import { faCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scanner from "./Scanner";
import { NavLink, useNavigate } from "react-router-dom";


function Sell() {
    const navigate = useNavigate()
    const handleDetected = (code) => {
        alert("Scanned barcode: " + code);
    };
    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Sell</h3>
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
                                            Sell
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div className="d-flex gap-2">
                            <button className="thm-btn rounded-3" data-bs-toggle="modal" data-bs-target="#scanner-Request" >Scan</button>
                            <button className="nw-thm-btn rounded-3" onClick={() => navigate("/add-manually")} data-bs-dismiss="modal" aria-label="Close" >Add Manually</button>
                        </div>

                    </div>
                </div>

                <div className='new-mega-card'>
                    {/* <div className="row">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="custom-frm-bx mb-0">
                                        <input
                                            type="email"
                                            className="form-control  pe-5"
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

                                </div>
                                
                            </div>

                            <div className="page-selector d-flex align-items-center mb-2 mb-md-0">
                                        <select className="form-select custom-page-dropdown nw-custom-page">
                                            <option value="1" selected>100</option>
                                            <option value="2">1</option>
                                            <option value="3">2</option>
                                        </select>


                                    
                                    </div>

                         
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between mb-3 nw-pharmacy-details flex-wrap gap-2">
                            <div>
                                <div className="d-flex align-items-center gap-2 nw-box flex-wrap">
                                    <div className="custom-frm-bx mb-0">
                                        <input
                                            type="email"
                                            className="form-control search-table-frm pe-5 admin-table-search-frm"
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
                                            <label className="label">Short By :</label>
                                            <select className="">
                                                <option>H1</option>
                                                <option>Test 1</option>
                                                <option>Test 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="filters">
                                        <div className="field custom-frm-bx mb-0 custom-select admin-table-search-frm date-range-wrapper">
                                            <label className="label">Date Range:</label>

                                            <div className="date-range-box">
                                                <input type="date" className="date-input" />

                                                <span className="label">To</span>

                                                <input type="date" className="date-input" />

                                                <i className="fa fa-calendar calendar-icon"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button className="nw-thm-btn">Filter</button>
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


                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="table-section">
                                <div className="table table-responsive mb-0">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Patient Name</th>
                                                <th>Prescriber Name</th>
                                                <th>Note</th>
                                                <th>Prescription</th>
                                                <th>Action</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>01-Oct-25</td>
                                               
                                                <td>
                                                   Ram Kumar
                                                </td>

                                                 <td>
                                                    Dr. Arjun Singh
                                                </td>

                                                <td>-</td>
                                                <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="admin-sub-dropdown"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                          View
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <NavLink to="/scan-prescriptions-detail" className="prescription-nav" href="#" >
                                                                   View
                                                                </NavLink>
                                                            </li>
                                                            <li className="prescription-item">
                                                                <NavLink to="/prescriptions-bar" className="prescription-nav" href="#" >
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
                                                </td>

                                                <td>
                                                    <a href="" className="grid-dots-btn"><TbGridDots /></a>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td>01-Oct-25</td>
                                               
                                                <td>
                                                   Ram Kumar
                                                </td>

                                                 <td>
                                                    Dr. Arjun Singh
                                                </td>

                                                <td>-</td>
                                                <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="admin-sub-dropdown"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                          View
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   View
                                                                </a>
                                                            </li>
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   Edit
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a className=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                   
                                                   </div>
                                                </td>

                                                <td>
                                                    <a href="" className="grid-dots-btn"><TbGridDots /></a>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td>01-Oct-25</td>
                                               
                                                <td>
                                                   Ram Kumar
                                                </td>

                                                 <td>
                                                    Dr. Arjun Singh
                                                </td>

                                                <td>-</td>
                                                <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="admin-sub-dropdown"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                          View
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   View
                                                                </a>
                                                            </li>
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   Edit
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a className=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                   
                                                   </div>
                                                </td>

                                                <td>
                                                    <a href="" className="grid-dots-btn"><TbGridDots /></a>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td>01-Oct-25</td>
                                               
                                                <td>
                                                   Ram Kumar
                                                </td>

                                                 <td>
                                                    Dr. Arjun Singh
                                                </td>

                                                <td>-</td>
                                                <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="admin-sub-dropdown"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                          View
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   View
                                                                </a>
                                                            </li>
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   Edit
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a className=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                   
                                                   </div>
                                                </td>

                                                <td>
                                                    <a href="" className="grid-dots-btn"><TbGridDots /></a>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td>01-Oct-25</td>
                                               
                                                <td>
                                                   Ram Kumar
                                                </td>

                                                 <td>
                                                    Dr. Arjun Singh
                                                </td>

                                                <td>-</td>
                                                <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="admin-sub-dropdown"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                          View
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   View
                                                                </a>
                                                            </li>
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   Edit
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a className=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                   
                                                   </div>
                                                </td>

                                                <td>
                                                    <a href="" className="grid-dots-btn"><TbGridDots /></a>
                                                </td>
                                               
                                            </tr>
                                            <tr>
                                                <td>01-Oct-25</td>
                                               
                                                <td>
                                                   Ram Kumar
                                                </td>

                                                 <td>
                                                    Dr. Arjun Singh
                                                </td>

                                                <td>-</td>
                                                <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="admin-sub-dropdown"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                          View
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   View
                                                                </a>
                                                            </li>
                                                            <li className="prescription-item">
                                                                <a className="prescription-nav" href="#" >
                                                                   Edit
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a className=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                   
                                                   </div>
                                                </td>

                                                <td>
                                                    <a href="" className="grid-dots-btn"><TbGridDots /></a>
                                                </td>
                                               
                                            </tr>

                                            

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-section">
                                <div className="table table-responsive mb-0">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Patient Name</th>
                                                <th>Prescriber Name</th>
                                                <th>Medicine Name</th>
                                                <th>Note</th>
                                                <th>Prescription</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>01-Oct-25</td>
                                                <td>Ram Kumar</td>
                                                <td>Dr. Arjun Singh</td>

                                                <td>
                                                    <ul className="admin-appointment-list">
                                                        <li className="admin-appoint-item"><span className="admin-appoint-id">Salbetol -2 (Salbutamol Tablets IP 2 mg)</span></li>
                                                        <li className="admin-appoint-item">Qty.: <span className="admin-appoint-id">80</span></li>
                                                        <li className="admin-appoint-item">Batch Number:  <span className="admin-appoint-id">2324423</span></li>
                                                        <li className="admin-appoint-item mb-2">Schedule: <span className="admin-appoint-id">H1</span></li>

                                                        <li className="admin-appoint-item"><span className="admin-appoint-id">Salbetol -2 (Salbutamol Tablets IP 2 mg)</span></li>
                                                        <li className="admin-appoint-item">Qty.: <span className="admin-appoint-id">80</span></li>
                                                        <li className="admin-appoint-item">Batch Number:  <span className="admin-appoint-id">2324423</span></li>
                                                        <li className="admin-appoint-item">Schedule: <span className="admin-appoint-id">H1</span></li>


                                                    </ul>
                                                </td>


                                                <td>
                                                    -
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-centet gap-2">
                                                        <div className="dropdown">
                                                            <a
                                                                href="javascript:void(0)"
                                                                className="admin-sub-dropdown"
                                                                id="acticonMenu1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                View
                                                            </a>
                                                            <ul
                                                                className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                aria-labelledby="acticonMenu1"
                                                            >
                                                                <li className="prescription-item">
                                                                    <NavLink to="/scan-prescriptions-detail" className="prescription-nav" href="#" >
                                                                        View
                                                                    </NavLink>
                                                                </li>
                                                                <li className="prescription-item">
                                                                    <NavLink to="/prescriptions-bar" className="prescription-nav" href="#" >
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
                                                </td>


                                                <td>
                                                    <div className="d-flex align-items-centet gap-2">
                                                        <div className="dropdown">
                                                            <a

                                                                href="javascript:void(0)"
                                                                className="grid-dots-btn"
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
                                                                    <NavLink to="/edit-generate" className="prescription-nav" href="#" >
                                                                        View/Edit
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
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>01-Oct-25</td>
                                                <td>Ram Kumar</td>
                                                <td>Dr. Arjun Singh</td>

                                                <td>
                                                    <ul className="admin-appointment-list">
                                                        <li className="admin-appoint-item"><span className="admin-appoint-id">Salbetol -2 (Salbutamol Tablets IP 2 mg)</span></li>
                                                        <li className="admin-appoint-item">Qty.: <span className="admin-appoint-id">80</span></li>
                                                        <li className="admin-appoint-item">Batch Number:  <span className="admin-appoint-id">2324423</span></li>
                                                        <li className="admin-appoint-item mb-2">Schedule: <span className="admin-appoint-id">H1</span></li>

                                                        <li className="admin-appoint-item"><span className="admin-appoint-id">Salbetol -2 (Salbutamol Tablets IP 2 mg)</span></li>
                                                        <li className="admin-appoint-item">Qty.: <span className="admin-appoint-id">80</span></li>
                                                        <li className="admin-appoint-item">Batch Number:  <span className="admin-appoint-id">2324423</span></li>
                                                        <li className="admin-appoint-item">Schedule: <span className="admin-appoint-id">H1</span></li>


                                                    </ul>
                                                </td>


                                                <td>
                                                    -
                                                </td>

                                                <td>
                                                    <div className="d-flex align-items-centet gap-2">
                                                        <div className="dropdown">
                                                            <a
                                                                href="javascript:void(0)"
                                                                className="admin-sub-dropdown"
                                                                id="acticonMenu1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                View
                                                            </a>
                                                            <ul
                                                                className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                aria-labelledby="acticonMenu1"
                                                            >
                                                                <li className="prescription-item">
                                                                    <NavLink to="/scan-prescriptions-detail" className="prescription-nav" href="#" >
                                                                        View
                                                                    </NavLink>
                                                                </li>
                                                                <li className="prescription-item">
                                                                    <NavLink to="/prescriptions-bar" className="prescription-nav" href="#" >
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
                                                </td>


                                                <td>
                                                    <div className="d-flex align-items-centet gap-2">
                                                        <div className="dropdown">
                                                            <a

                                                                href="javascript:void(0)"
                                                                className="grid-dots-btn"
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
                                                                    <NavLink to="/edit-generate" className="prescription-nav" href="#" >
                                                                        View/Edit
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
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>




            </div>


            {/*Payment Status Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#scanner-Request" */}
            <div className="modal step-modal" id="scanner-Request" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content rounded-5">
                        <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                            <div>
                                <h6 className="lg_title mb-0 fz-20">Scan NeoHealthCard / Prescription </h6>
                            </div>
                            <div>
                                <button type="button" className="fz-18" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#00000040" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body px-4">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <Scanner onDetected={handleDetected} />



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Payment Status Popup End */}




        </>
    )
}

export default Sell