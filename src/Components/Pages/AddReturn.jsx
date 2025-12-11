import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaPlusSquare } from "react-icons/fa";

function AddReturn() {
    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Add Return</h3>
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
                                            Add Return
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

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Delivery Date</label>
                                    <input type="date" className="form-control nw-frm-select " placeholder="Enter Mobile Number" />
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h5 className="add-contact-title mb-3">Product</h5>
                        </div>

                        <div className="sub-tab-brd rounded-2 mb-3">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Product Name</label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Product Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                  <div className=" return-box">
                                        <div className="custom-frm-bx d-flex flex-column flex-grow-1">
                                        <label htmlFor="">Quantity </label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Quantity" />
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
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Product Name</label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Product Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className=" return-box">
                                        <div className="custom-frm-bx d-flex flex-column flex-grow-1">
                                        <label htmlFor="">Quantity </label>
                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Quantity" />
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
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Reason</label>
                                    <textarea name="" id="" className="form-control nw-frm-select "></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-end">
                            <button className="nw-thm-btn rounded-3"> Submit</button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default AddReturn