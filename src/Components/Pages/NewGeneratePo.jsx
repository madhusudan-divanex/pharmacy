
import { faCircleXmark,  faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaPlusSquare } from "react-icons/fa";

function NewGeneratePo() {
  return (
   <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Generate PO</h3>
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
                                            Generate PO
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='dashboard-main-card '>
                    <form action="">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div class="custom-frm-bx">
                                    <label>Select Supplier</label>
                                    <div class="select-wrapper">
                                        <select class="form-select custom-select">
                                            <option>Select Supplier</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Delivery Date</label>
                                    <input type="date" className="form-control nw-frm-select " placeholder="Enter Patient name" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                               <div className="">
                                 <a href="#" className="nw-thm-btn outline rounded-5 d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#add-Supplier"> <img src="/add-supplier.svg" alt="" /> Add Supplier</a>
                               </div>
                            </div>
                        </div>

                        <div className="">
                            <h5 className="add-contact-title mb-3">Product</h5>
                        </div>

                        <div className="sub-tab-brd rounded-2 mb-3">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Product Name</label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Product Name" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div class="custom-frm-bx">
                                    <label>Schedule</label>
                                    <div class="select-wrapper">
                                        <select class="form-select custom-select">
                                            <option>Select H1, H, X ets</option>
                                        </select>
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-12">
                                  <div className="custom-frm-bx">
                                        <label htmlFor="">Quantity </label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Quantity" />
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-12">
                                  <div className="custom-frm-bx">
                                        <label htmlFor="">Batch Number </label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Batch Number" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className=" return-box">
                                        <div className="custom-frm-bx d-flex flex-column flex-grow-1">
                                        <label htmlFor="">Expert Date </label>
                                        <input type="date" className="form-control nw-frm-select " placeholder="Enter Expert Date" />
                                    </div>
                                    <div>
                                        <button className="text-black"><FontAwesomeIcon icon={faTrash} /></button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sub-tab-brd mb-3 rounded-2">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Product Name</label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Product Name" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div class="custom-frm-bx">
                                    <label>Schedule</label>
                                    <div class="select-wrapper">
                                        <select class="form-select custom-select">
                                            <option>Select H1, H, X ets</option>
                                        </select>
                                    </div>
                                </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-12">
                                  <div className="custom-frm-bx">
                                        <label htmlFor="">Quantity </label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Quantity" />
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-12">
                                  <div className="custom-frm-bx">
                                        <label htmlFor="">Batch Number </label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Batch Number" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                  <div className=" return-box">
                                        <div className="custom-frm-bx d-flex flex-column flex-grow-1">
                                        <label htmlFor="">Expert Date </label>
                                        <input type="date" className="form-control nw-frm-select " placeholder="Enter Expert Date" />
                                    </div>
                                    <div>
                                        <button className="text-black"><FontAwesomeIcon icon={faTrash} /></button>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-3 text-end">
                            <a href="javascript:void(0)" className="add-employee-btn"><FaPlusSquare /> Add More</a>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="custom-frm-bx mt-3">
                                    <label htmlFor="">Note</label>
                                    <textarea name="" id="" className="form-control nw-frm-select "></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-end">
                            <button className="nw-thm-btn rounded-3"> Generate </button>
                        </div>
                    </form>

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

        </>
  )
}

export default NewGeneratePo