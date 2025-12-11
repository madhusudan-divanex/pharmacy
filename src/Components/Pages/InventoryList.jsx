import { TbGridDots } from "react-icons/tb";
import { faCircleXmark, faDollar, faPen, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scanner from "./Scanner";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function InventoryList() {
    const handleDetected = (code) => {
    alert("Scanned barcode: " + code);
  };

  const [showBarcode, setShowBarcode] = useState(false);
  
  return (
     <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Inventory</h3>
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
                                            Inventory
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div>
                                    <button className="thm-btn rounded-3"  data-bs-toggle="modal" data-bs-target="#scanner-Request">Add</button>
                                </div>


                    </div>
                </div>

                <div className='new-mega-card'>
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between mb-3 nw-pharmacy-details">
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
                                            <label className="label">Medicine :</label>
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
                        <div className="col-lg-12">
                            <div className="table-section">
                                <div className="table table-responsive mb-0">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>S.no.</th>
                                                <th>Medicine Name</th>
                                                <th>Batch Number</th>
                                                <th>Schedule</th>
                                                <th>MFG Date</th>
                                                <th>Exp Date</th>
                                                <th>Quantity/Stock</th>
                                                <th>Purch Price</th>
                                                <th>Avg Margin</th>
                                                <th>Low Margin</th>
                                                <th>High Margin</th>
                                                <th>Bar Code </th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>1</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td>
                                                    133323
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                    08/2024
                                                </td>
                                                <td>
                                                    08/2026
                                                </td>
                                                <td>
                                                    100/ <span className="stock-title">150</span>
                                                </td>
                                                <td>
                                                    $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>

                                                <td>
                                                   {/* <a href="javascript:void(0)" className="thm-btn rounded-3">Generate</a> */}
                                                   {!showBarcode && (
                                                    <a 
                                                    href="javascript:void(0)" 
                                                    className="thm-btn rounded-3"
                                                    onClick={() => setShowBarcode(true)}
                                                    >
                                                    Generate
                                                    </a>
                                                )}

                                                {showBarcode && (
                                                    <div className="inventory-barcd">
                                                    <img src="/barcode.png" alt="barcode" />
                                                    </div>
                                                )}
                                                </td>

                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      {/* <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a> */}
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                       
                                                            href="javascript:void(0)"
                                                            className="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                         <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#add-Inventory">
                                                                   Add Inventory
                                                                </a>
                                                            </li>
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#edit-Inventory">
                                                                   View/Edit
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
                                              


                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>2</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td>
                                                    133323
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                    08/2024
                                                </td>
                                                <td>
                                                    08/2026
                                                </td>
                                                <td>
                                                    <span className="reject-title">Out Off Stock</span>
                                                </td>
                                                <td>
                                                    $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>

                                                <td>
                                                   <div className="inventory-barcd">
                                                    <img src="/barcode.png" alt="" />
                                                   </div>
                                                </td>

                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      {/* <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a> */}
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                       
                                                            href="javascript:void(0)"
                                                            className="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                         <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#add-Inventory">
                                                                   Add Inventory
                                                                </a>
                                                            </li>
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#edit-Inventory">
                                                                   View/Edit
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
                                              


                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>3</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td>
                                                    133323
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                    08/2024
                                                </td>
                                                <td>
                                                   <span className="reject-title"> 08/2026</span>
                                                </td>
                                                <td>
                                                    150/ <span className="stock-title">50</span>
                                                </td>
                                                <td>
                                                    $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>

                                                <td>
                                                   <div className="inventory-barcd">
                                                    <img src="/barcode.png" alt="" />
                                                   </div>
                                                </td>

                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      {/* <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a> */}
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                       
                                                            href="javascript:void(0)"
                                                            className="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                         <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#add-Inventory">
                                                                   Add Inventory
                                                                </a>
                                                            </li>
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#edit-Inventory">
                                                                   View/Edit
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
                                              


                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>3</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td>
                                                    133323
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                    08/2024
                                                </td>
                                                <td>
                                                   <span className="reject-title"> 08/2026</span>
                                                </td>
                                                <td>
                                                    150/ <span className="stock-title">50</span>
                                                </td>
                                                <td>
                                                    $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>

                                                <td>
                                                   <div className="inventory-barcd">
                                                    <img src="/barcode.png" alt="" />
                                                   </div>
                                                   
                                                </td>

                                               <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      {/* <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a> */}
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                       
                                                            href="javascript:void(0)"
                                                            className="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                         <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#add-Inventory">
                                                                   Add Inventory
                                                                </a>
                                                            </li>
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#edit-Inventory">
                                                                   View/Edit
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
                                              


                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                            </tr>

                                              <tr>
                                                <td>5</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td>
                                                    133323
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                    08/2024
                                                </td>
                                                <td>
                                                    08/2026
                                                </td>
                                                <td>
                                                    100/ <span className="stock-title">150</span>
                                                </td>
                                                <td>
                                                    $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>

                                                <td>
                                                   <a href="javascript:void(0)" className="thm-btn rounded-3">Generate</a>
                                                </td>

                                               <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      {/* <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a> */}
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                       
                                                            href="javascript:void(0)"
                                                            className="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                         <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#add-Inventory">
                                                                   Add Inventory
                                                                </a>
                                                            </li>
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#edit-Inventory">
                                                                   View/Edit
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
                                              


                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                            </tr>


                                              <tr>
                                                <td>6</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td>
                                                    133323
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                    08/2024
                                                </td>
                                                <td>
                                                    08/2026
                                                </td>
                                                <td>
                                                    100/ <span className="stock-title">150</span>
                                                </td>
                                                <td>
                                                    $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>

                                                <td>
                                                   <a href="javascript:void(0)" className="thm-btn rounded-3">Generate</a>
                                                </td>

                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      {/* <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a> */}
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                       
                                                            href="javascript:void(0)"
                                                            className="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                         <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#add-Inventory">
                                                                   Add Inventory
                                                                </a>
                                                            </li>
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#edit-Inventory">
                                                                   View/Edit
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
                                              


                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                            </tr>

                                              <tr>
                                                <td>7</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td>
                                                    133323
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                    08/2024
                                                </td>
                                                <td>
                                                    08/2026
                                                </td>
                                                <td>
                                                    100/ <span className="stock-title">150</span>
                                                </td>
                                                <td>
                                                    $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>

                                                <td>
                                                   <a href="javascript:void(0)" className="thm-btn rounded-3">Generate</a>
                                                </td>

                                               <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      {/* <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a> */}
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div className="dropdown">
                                                        <a
                                                       
                                                            href="javascript:void(0)"
                                                            className="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                         <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#add-Inventory">
                                                                   Add Inventory
                                                                </a>
                                                            </li>
                                                              <li className="prescription-item">
                                                                <a to="#" className="prescription-nav" data-bs-toggle="modal" data-bs-target="#edit-Inventory">
                                                                   View/Edit
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
                                              


                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
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

            {/*Add Inventroy Popup Start  */}
             {/* data-bs-toggle="modal" data-bs-target="#add-Inventory" */}
             <div className="modal step-modal" id="add-Inventory" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content rounded-5">
                                    <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                                        <div>
                                            <h6 className="lg_title mb-0">Add Inventory</h6>
                                        </div>
                                        <div>
                                            <button type="button" className="" data-bs-dismiss="modal" aria-label="Close">
                                                <FontAwesomeIcon icon={faCircleXmark} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="modal-body px-4">
                                        <form action="">
                                            <div className="row">
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Medicine Name</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Medicine Name" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="custom-frm-bx">
                                                        <label>Schedule</label>
                                                        <div class="select-wrapper">
                                                            <select class="form-select custom-select">
                                                            <option>H1</option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Batch Number</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Batch Number" />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">MFG Date</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="MM/YYYY" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">EXP Date</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="MM/YYYY" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Quantity</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Quantity" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Total Stock Price</label>
                                                        <input type="text" className="form-control nw-frm-select pe-5" placeholder="Enter Total Stock Price" />
                                                        <div className="stock-bx">
                                                          <a href="javascript:void(0)" className="dollar-btn"><FontAwesomeIcon icon={faDollar}/></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Purchase Price</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Purchase Price" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="custom-frm-bx">
                                                        <label>Margin Type</label>
                                                        <div class="select-wrapper">
                                                            <select class="form-select custom-select">
                                                            <option>Margin Type</option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                </div>

                                                   <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">High Margin</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter High Margin" />
                                                    </div>
                                                </div>

                                                 <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Low Margin</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Low Margin" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Avg Margin</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Avg Margin" />
                                                    </div>
                                                </div>
            
                                                <div className="col-lg-12">
                                                    <div className="text-center mt-3">
                                                        <button className="nw-thm-btn rounded-2 w-75" >Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
             </div>
           {/*  Add Inventroy Popup End */}


            {/*Edit Inventroy Popup Start  */}
              {/* data-bs-toggle="modal" data-bs-target="#edit-Inventory" */}
            <div className="modal step-modal" id="edit-Inventory" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content rounded-5">
                                    <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                                        <div>
                                            <h6 className="lg_title mb-0">Edit Inventory</h6>
                                        </div>
                                        <div>
                                            <button type="button" className="" data-bs-dismiss="modal" aria-label="Close">
                                                <FontAwesomeIcon icon={faCircleXmark} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="modal-body px-4">
                                        <form action="">
                                            <div className="row">
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Medicine Name</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Medicine Name" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="custom-frm-bx">
                                                        <label>Schedule</label>
                                                        <div class="select-wrapper">
                                                            <select class="form-select custom-select">
                                                            <option>H1</option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Batch Number</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Batch Number" />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">MFG Date</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="MM/YYYY" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">EXP Date</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="MM/YYYY" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Quantity</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Quantity" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Total Stock Price</label>
                                                        <input type="text" className="form-control nw-frm-select pe-5" placeholder="Enter Total Stock Price" />
                                                        <div className="stock-bx">
                                                          <a href="javascript:void(0)" className="dollar-btn"><FontAwesomeIcon icon={faDollar}/></a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Purchase Price</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Purchase Price" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div class="custom-frm-bx">
                                                        <label>Margin Type</label>
                                                        <div class="select-wrapper">
                                                            <select class="form-select custom-select">
                                                            <option>Margin Type</option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">High Margin</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter High Margin" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Low Margin</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Low Margin" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Avg Margin</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Avg Margin" />
                                                    </div>
                                                </div>

                                                

                                                
                                           
            
                                                <div className="col-lg-12">
                                                    <div className="text-center mt-3">
                                                        <button className="nw-thm-btn rounded-2 w-75" >Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
              </div>
             {/*  Edit Inventroy Popup End */}

             {/*Scan Popup Start  */}
                {/* data-bs-toggle="modal" data-bs-target="#scanner-Request" */}
              <div className="modal step-modal" id="scanner-Request" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                 aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                 <div className="modal-dialog modal-dialog-centered modal-md">
                                   <div className="modal-content rounded-5">
                                     <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                                       <div>
                                         <h6 className="lg_title mb-0 fz-20">Scan</h6>
                                       </div>
                                       <div>
                                         <button type="button" className="fz-18" data-bs-dismiss="modal" aria-label="Close" style={{color: "#00000040"}}>
                                           <FontAwesomeIcon icon={faCircleXmark} />
                                         </button>
                                       </div>
                                     </div>
                                     <div className="modal-body px-4">
                                       <div className="row ">
                                         <div className="col-lg-12">
                                             <Scanner onDetected={handleDetected}/>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
               </div>
              {/*  Scan Popup End */}


             
                          

        </>
  )
}

export default InventoryList