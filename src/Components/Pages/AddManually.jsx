import { faCircleXmark, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function AddManually() {
    const navigate = useNavigate()
    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Add Manually</h3>
                            <div className="admin-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb custom-breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="breadcrumb-link">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#" className="breadcrumb-link">
                                                Sell
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Add Manually
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
                            <div className="mb-3">
                                <h5 className="add-contact-title text-black fz-24">Manually Details</h5>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Patient Id</label>
                                    <input type="text" className="form-control nw-frm-select " placeholder="Enter Patient Id" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Patient Name</label>
                                    <input type="text" className="form-control nw-frm-select " placeholder="Enter Patient name" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Patient Mobile Number</label>
                                    <input type="number" className="form-control nw-frm-select " placeholder="Enter Patient Mobile Number" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Doctor Id</label>
                                    <input type="text" className="form-control nw-frm-select " placeholder="Enter Doctor Id" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Doctor  Name</label>
                                    <input type="text" className="form-control nw-frm-select " placeholder="Enter Doctor name" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Doctor Mobile Number</label>
                                    <input type="number" className="form-control nw-frm-select " placeholder="Enter Doctor Mobile Number" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Prescription  Upload</label>
                                    <div className="upload-box  p-3">
                                        <div className="upload-icon mb-2">
                                            <IoCloudUploadOutline />
                                        </div>

                                        <div>
                                            <p className="fw-semibold mb-1">
                                                <label htmlFor="fileInput1" className="file-label file-select-label">
                                                    Choose a file or drag & drop here
                                                </label>
                                            </p>

                                            <small className="format-title">JPEG Format</small>


                                            <div className="mt-3">
                                                <label htmlFor="fileInput1" className="browse-btn">
                                                    Browse File
                                                </label>
                                            </div>

                                            <input
                                                type="file"
                                                className="d-none"
                                                id="fileInput1"
                                                accept=".png,.jpg,.jpeg"
                                            />

                                            <div id="filePreviewWrapper" className="d-none mt-3">
                                                <img src="" alt="Preview" className="img-thumbnail" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <h5 className="add-contact-title">Manually Add Medications</h5>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                 <div class="custom-frm-bx">
                                    <label>Medication</label>
                                    <div class="select-wrapper">
                                        <select class="form-select custom-select">
                                            <option>Select Medication</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Quantity</label>
                                    <input type="text" className="form-control nw-frm-select " placeholder="Enter Quantity" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                                <div className="custom-frm-bx mb-0">
                                    <button className="text-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                 <div class="custom-frm-bx">
                                    <label>Medication</label>
                                    <div class="select-wrapper">
                                        <select class="form-select custom-select">
                                            <option>Select Medication</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Quantity</label>
                                    <input type="text" className="form-control nw-frm-select " placeholder="Enter Quantity" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                                <div className="custom-frm-bx mb-0">
                                    <button className="text-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                    <button className="reprting-name"><FaPlusCircle /></button>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 mt-2">
                                <div className="generate-bill">
                                    <h5 className="add-contact-title mb-0 fz-22">Generate Bill </h5>

                                    <div className="text-center">
                                        <img src="/bill.svg" alt="" />

                                        <p className="py-2">Please Generate PrescriptionsBill </p>

                                        <a href="javascript:void(0)" className="nw-thm-btn outline rounded-5" data-bs-toggle="modal" data-bs-target="#bill-Generate">Generate Bill</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-end">
                                <div className="permission-check-main-bx">

                                    <div className="form-check custom-check d-inline-block">
                                        <input className="form-check-input" type="checkbox" value="" id="chat" />
                                        <label className="form-check-label" for="chat">
                                            Payment Done
                                        </label>
                                    </div>

                                </div>

                                <div>
                                    <button className="nw-thm-btn rounded-3"  onClick={()=> navigate("/sell")} data-bs-dismiss="modal" aria-label="Close" >Submit</button>
                                </div>
                            </div>


                        </div>

                    </form>






                </div>




            </div>


            {/*Generate Bill Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#bill-Generate" */}
            <div className="modal step-modal" id="bill-Generate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content rounded-5">
                        <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                            <div>
                                <h6 className="lg_title mb-0">Generate Bill </h6>
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
                                    <div className="col-lg-6 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Medicine Name</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Medicine Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Quantity</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter  Quantity" />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Amount($)</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Amount" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Medicine Name</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Medicine Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Quantity</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter  Quantity" />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Amount($)</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Amount" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Medicine Name</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Medicine Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Quantity</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter  Quantity" />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Amount($)</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Amount" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Medicine Name</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Medicine Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Quantity</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter  Quantity" />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Amount($)</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Amount" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Medicine Name</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Medicine Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Quantity</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter  Quantity" />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Amount($)</label>
                                            <input type="text" className="form-control nw-frm-select " placeholder="Enter Amount" />
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="text-center mt-4">
                                            <button className="nw-thm-btn rounded-2 w-75" >Submit</button>
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

export default AddManually