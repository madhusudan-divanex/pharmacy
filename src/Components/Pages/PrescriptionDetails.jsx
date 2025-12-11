// import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { BsCapsule } from "react-icons/bs";
import { IoMdQrScanner } from "react-icons/io";
import Scanner from "./Scanner";
import { NavLink } from "react-router-dom";


function PrescriptionDetails() {

        const handleDetected = (code) => {
    alert("Scanned barcode: " + code);
  };

  return (
   <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-3">
                    <div className="d-flex align-items-center justify-content-between mega-content-bx">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Pharmacy Details</h3>
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
                                            Pharmacy  Details
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>


                    </div>
                </div>


                <div className='new-mega-card'>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="view-report-card">
                                <div className="">
                                    <div className="view-report-header d-flex align-items-center justify-content-between">
                                        <div>
                                            <h5>RX-10014</h5>
                                            <h6>Date: 8/21/2025</h6>
                                        </div>

                                        <div className="admin-table-bx">
                                            <div className="">
                                                <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                    <img src="/doctor-avatr.png" alt="" style={{ border: "5px solid #fff" }} />
                                                    <div className="">
                                                        <h6 className="fw-700 fz-14" style={{ color: "#00B4B5" }}>Dr. David Patel </h6>
                                                        <p>DO-4001</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>

                                <div className="view-report-content">
                                    <div className="sub-content-title">
                                        <h4>RX.</h4>
                                        <h3><BsCapsule style={{ color: "#00B4B5" }} /> Medications</h3>
                                    </div>

                                    <div className="view-medications-bx mb-3">
                                        <h5>1. Aserpin</h5>
                                        <ul className="viwe-medication-list">
                                            <li className="viwe-medication-item">Dosage: 10mg </li>
                                            <li className="viwe-medication-item">Frequency: Once daily </li>
                                            <li className="viwe-medication-item">Duration: 30 days</li>
                                            <li className="viwe-medication-item">Instructions: Bbbjjj</li>

                                        </ul>
                                    </div>

                                    <div className="view-medications-bx mb-3">
                                        <h5>1. Aserpin</h5>
                                        <ul className="viwe-medication-list">
                                            <li className="viwe-medication-item">Dosage: 10mg </li>
                                            <li className="viwe-medication-item">Frequency: Once daily </li>
                                            <li className="viwe-medication-item">Duration: 30 days</li>
                                            <li className="viwe-medication-item">Instructions: Bbbjjj</li>

                                        </ul>
                                    </div>

                                    <div className="diagnosis-bx mb-3">
                                        <h5>Diagnosis</h5>
                                        <p>Hypertension</p>
                                    </div>

                                    <div className="diagnosis-bx mb-3">
                                        <h5>Diagnosis</h5>
                                        <p>-</p>
                                    </div>


                                </div>

                            </div>


                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {/* <div className="new-invoice-card">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h5 className="first_para fw-700 fz-20 mb-0">Details</h5>
                                    </div>
                                    <div className="d-flex align-item-center gap-2">
                                        <button className="print-btn"> <FontAwesomeIcon icon={faDownload} /> Download Bill</button>
                                        <button className="print-btn"> <FontAwesomeIcon icon={faPrint} /> Print</button>
                                    </div>
                                </div>




                                <div className="laboratory-report-bx">
                                    <ul className="laboratory-report-list">
                                        <li className="laboratory-item border-0">Aserpin <span className="laboratory-title">$20</span></li>
                                        <li className="laboratory-item">Ibuprofen <span className="laboratory-title"></span></li>
                                    </ul>

                                    <div className="lab-amount-bx">
                                        <ul className="lab-amount-list">
                                            <li className="lab-amount-item">Total Amount :<span className="price-title">$40</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}

                            <div className="">
                              <div className="generate-bill  mb-3">
                                   <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h5 className="first_para fw-700 fz-20 mb-0">Scan Medications</h5>
                                    </div>
                                    <div className="d-flex align-item-center gap-2">
                                        <button className="thm-btn rounded-2" data-bs-toggle="modal" data-bs-target="#scanner-Request"> <IoMdQrScanner className="fz-18 me-2" /> Scan</button>
                                        
                                    </div>
                                </div>

                                    <div className="medicine-card">
                                <div className="left-icon">
                                    <BsCapsule style={{ color: "#00B4B5" }} />
                                </div>

                                <span className="med-name">Aserpin</span>

                                <label className="check-container">
                                    <input type="checkbox" defaultChecked />
                                    <span className="checkmark"></span>
                                </label>
                                </div>

                                <div className="medicine-card">
                                <div className="left-icon">
                                    <BsCapsule style={{ color: "#00B4B5" }} />
                                </div>

                                <span className="med-name">Ibuprofen</span>

                                <label className="check-container">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                </div>


                              </div>



                                 <div className="generate-bill">
                                    <h5 className="add-contact-title mb-0 fz-22">Generate Bill </h5>

                                    <div className="text-center">
                                        <img src="/bill.svg" alt="" />

                                        <p className="py-2">Please Generate PrescriptionsBill </p>

                                        <a href="javascript:void(0)" className="nw-thm-btn outline rounded-5" data-bs-toggle="modal" data-bs-target="#bill-Generate">Generate Bill</a>
                                    </div>
                                </div>


                                <div className="custom-frm-bx mt-3">
                                <label htmlFor="">Note</label>
                                <textarea name="" id="" className="form-control nw-frm-select"></textarea>
                                </div>
                            </div>
                        </div>


                                  <div className="mt-3 text-end border-top pt-3">
                                <div className="permission-check-main-bx">

                                    <div className="form-check custom-check d-inline-block">
                                        <input className="form-check-input" type="checkbox" value="" id="chats" />
                                        <label className="form-check-label" for="chats">
                                            Payment Done
                                        </label>
                                    </div>

                                </div>

                                <div>
                                    <NavLink to="/add-prescriptions-detail" className="nw-thm-btn disabled-thm-btn">Save & Continue</NavLink>
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
                      <div className="modal-content rounded-5 ">
                        <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                          <div>
                            <h6 className="lg_title mb-0 fz-20">Scan Medications</h6>
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
                  {/*  Payment Status Popup End */}


                    {/*Generate Bill Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#bill-Generate" */}
            <div className="modal step-modal" id="bill-Generate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content rounded-5 ">
                        <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                            <div>
                                <h6 className="lg_title mb-0">Generate Bill </h6>
                            </div>
                            <div>
                                <button type="button" className="" data-bs-dismiss="modal" aria-label="Close" style={{color: "#00000040"}}>
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

export default PrescriptionDetails