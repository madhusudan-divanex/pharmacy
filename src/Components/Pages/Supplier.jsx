import { faCircleXmark, faPen, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Supplier() {
  return (
     <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Supplier List</h3>
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
                                            Supplier
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <div>
                            <button className="nw-thm-btn" data-bs-toggle="modal" data-bs-target="#add-Supplier" >Add Supplier</button>
                        </div>

                    </div>
                </div>

                <div className='new-mega-card'>
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                            <div className="d-flex align-items-center gap-2">
                                    <div className="custom-frm-bx mb-0">
                                        <input
                                            type="email"
                                            className="form-control admin-table-search-frm search-table-frm pe-5"
                                            id="email"
                                            placeholder="Search"
                                            required
                                        />
                                        <div className="adm-search-bx">
                                            <button className="tp-search-btn">
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="filters">
                                        <div className="field custom-frm-bx mb-0 custom-select admin-table-search-frm ">
                                            <label className="label">Short By :</label>
                                            <select className="">
                                                <option>Top score</option>
                                                <option>Test 1</option>
                                                <option>Test 2</option>
                                            </select>
                                        </div>
                                    </div>

                                <div>
                                    <button className="nw-thm-btn">Filter</button>
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
                    </div>


                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-section">
                                <div className="table table-responsive mb-0">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Supplier</th>
                                                <th>Mobile Number </th>
                                                <th>Address</th>
                                                <th>Score</th>
                                                <th>On-time delivery</th>
                                                <th>Price</th>
                                                <th>Quality</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <div className="admin-table-bx">
                                                        <div className="admin-table-sub-bx">
                                                            <img src="/admin-tb-logo.png" alt="" />
                                                            <div className="admin-table-sub-details">
                                                                <h6>Eleanor Pena</h6>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td>
                                                   9876543210
                                                </td>

                                                 <td>
                                                    Jaipur
                                                </td>

                                                <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                                                <td>5</td>
                                                <td>456567</td>
                                                <td>4455</td>

                                                <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div class="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                           <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#edit-Supplier">
                                                                   View/Edit 
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a class=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                               
                                            </tr>

                                            <tr>

                                                <td>
                                                    <div className="admin-table-bx">
                                                        <div className="admin-table-sub-bx">
                                                            <img src="/admin-tb-logo.png" alt="" />
                                                            <div className="admin-table-sub-details">
                                                                <h6>Eleanor Pena</h6>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td>
                                                   9876543210
                                                </td>

                                                 <td>
                                                    Jaipur
                                                </td>

                                                <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                                                <td>5</td>
                                                <td>456567</td>
                                                <td>4455</td>

                                                 <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div class="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                           <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#edit-Supplier">
                                                                   View/Edit 
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a class=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                               
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="admin-table-bx">
                                                        <div className="admin-table-sub-bx">
                                                            <img src="/admin-tb-logo.png" alt="" />
                                                            <div className="admin-table-sub-details">
                                                                <h6>Eleanor Pena</h6>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td>
                                                   9876543210
                                                </td>

                                                 <td>
                                                    Jaipur
                                                </td>

                                                <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                                                <td>5</td>
                                                <td>456567</td>
                                                <td>4455</td>

                                                 <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div class="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                           <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#edit-Supplier">
                                                                   View/Edit 
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a class=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                               
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="admin-table-bx">
                                                        <div className="admin-table-sub-bx">
                                                            <img src="/admin-tb-logo.png" alt="" />
                                                            <div className="admin-table-sub-details">
                                                                <h6>Eleanor Pena</h6>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td>
                                                   9876543210
                                                </td>

                                                 <td>
                                                    Jaipur
                                                </td>

                                                <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                                                <td>5</td>
                                                <td>456567</td>
                                                <td>4455</td>

                                                 <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div class="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                           <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#edit-Supplier">
                                                                   View/Edit 
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a class=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                               
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="admin-table-bx">
                                                        <div className="admin-table-sub-bx">
                                                            <img src="/admin-tb-logo.png" alt="" />
                                                            <div className="admin-table-sub-details">
                                                                <h6>Eleanor Pena</h6>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td>
                                                   9876543210
                                                </td>

                                                 <td>
                                                    Jaipur
                                                </td>

                                                <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                                                <td>5</td>
                                                <td>456567</td>
                                                <td>4455</td>

                                                 <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div class="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                           <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#edit-Supplier">
                                                                   View/Edit 
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a class=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                               
                                            </tr>

                                            <tr>
                                                <td>
                                                    <div className="admin-table-bx">
                                                        <div className="admin-table-sub-bx">
                                                            <img src="/admin-tb-logo.png" alt="" />
                                                            <div className="admin-table-sub-details">
                                                                <h6>Eleanor Pena</h6>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                                <td>
                                                   9876543210
                                                </td>

                                                 <td>
                                                    Jaipur
                                                </td>

                                                <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                                                <td>5</td>
                                                <td>456567</td>
                                                <td>4455</td>

                                                 <td>
                                                   <div className="d-flex align-items-centet gap-2">
                                                      <div class="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            class="text-secondary"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                           <FontAwesomeIcon icon={faPen}/>
                                                        </a>
                                                        <ul
                                                            class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#edit-Supplier">
                                                                   View/Edit 
                                                                </a>
                                                            </li>

                                                            <li className="prescription-item">
                                                                <a class=" prescription-nav" href="#">
                                                                   
                                                                  Delete 
                                                                </a>
                                                            </li>
                                                        </ul>
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


              {/*Add Supplier Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#add-Supplier" */}
            <div className="modal step-modal" id="add-Supplier" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content rounded-5">
                  <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                    <div>
                      <h6 className="lg_title mb-0">Add Supplier</h6>
                    </div>
                    <div>
                      <button type="button" className="" data-bs-dismiss="modal" aria-label="Close">
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </button>
                    </div>
                  </div>
                  <div className="modal-body px-4 pb-5">
                    <form action="">
                        <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Supplier Name</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Supplier Name" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Supplier Mobile Number</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Mobile Number" />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Supplier Email Address</label>
                        <input type="email" className="form-control nw-frm-select " placeholder="Enter Email Address" />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Full Address</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Address" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">City</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter City" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Pin code</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter  Pin code" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                         <div className="text-center mt-4">
                            <button className="nw-thm-btn rounded-2 w-75" >Add Supplier</button>
                         </div>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*  Add Supplier Popup End */}


              {/*Edit Supplier Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#edit-Supplier" */}
            <div className="modal step-modal" id="edit-Supplier" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
              aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content rounded-5 ">
                  <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                    <div>
                      <h6 className="lg_title mb-0">Edit Supplier</h6>
                    </div>
                    <div>
                      <button type="button" className="" data-bs-dismiss="modal" aria-label="Close">
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </button>
                    </div>
                  </div>
                  <div className="modal-body px-4 pb-5">
                    <form action="">
                        <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Supplier Name</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Supplier Name" value="Eleanor Pena" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Supplier Mobile Number</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Mobile Number" value="9876543210" />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Supplier Email Address</label>
                        <input type="email" className="form-control nw-frm-select " placeholder="Enter Email Address" value="eleanorpena@gmail.com" />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Full Address</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Address" value="Jaipur" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">City</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter City" value="Jaipur" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-frm-bx">
                        <label htmlFor="">Pin code</label>
                        <input type="text" className="form-control nw-frm-select " placeholder="Enter  Pin code" value="322021" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                         <div className="text-center mt-4">
                            <button className="nw-thm-btn rounded-2 w-75" >Add Supplier</button>
                         </div>
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*  Edit Supplier Popup End */}

        </>
  )
}

export default Supplier