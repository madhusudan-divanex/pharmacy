import { TbGridDots } from "react-icons/tb";

import { faCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MedicineRequest() {
    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">H1 Medicine Request</h3>
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
                                            H1 Medicine Request
                                        </li>
                                    </ol>
                                </nav>
                            </div>
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
                                    <button className="thm-btn rounded-3" data-bs-toggle="modal" data-bs-target="#add-Request">Send Request</button>
                                </div>

                                <div className="filters">
                                    <select className="form-select custom-page-dropdown nw-custom-page ">
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
                                                <th>Date</th>
                                                <th>Description</th>
                                                <th>Stock</th>
                                                <th>Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>1</td>

                                                <td>
                                                    Alprazolam
                                                </td>

                                                <td>
                                                    20 June 2025
                                                </td>

                                                <td>Lorem ipsum dolor sit amet.</td>
                                                <td>
                                                    100
                                                </td>

                                                <td>
                                                    <span className="paid-title"> Approved</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2</td>

                                                <td>
                                                    Alprazolam
                                                </td>

                                                <td>
                                                    20 June 2025
                                                </td>

                                                <td>Lorem ipsum dolor sit amet.</td>
                                                <td>
                                                    100
                                                </td>

                                                <td>
                                                    <span className="pending-title">  Pending</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>3</td>

                                                <td>
                                                    Alprazolam
                                                </td>

                                                <td>
                                                    20 June 2025
                                                </td>

                                                <td>Lorem ipsum dolor sit amet.</td>
                                                <td>
                                                    100
                                                </td>

                                                <td>
                                                    <span className="paid-title">  Approved</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>4</td>

                                                <td>
                                                    Alprazolam
                                                </td>

                                                <td>
                                                    20 June 2025
                                                </td>

                                                <td>Lorem ipsum dolor sit amet.</td>
                                                <td>
                                                    100
                                                </td>

                                                <td>
                                                    <span className="reject-title">  Approved</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>5</td>

                                                <td>
                                                    Alprazolam
                                                </td>

                                                <td>
                                                    20 June 2025
                                                </td>

                                                <td>Lorem ipsum dolor sit amet.</td>
                                                <td>
                                                    100
                                                </td>

                                                <td>
                                                    <span className="pending-title">  Pending</span>
                                                </td>
                                            </tr>


                                            <tr>
                                                <td>6</td>

                                                <td>
                                                    Alprazolam
                                                </td>

                                                <td>
                                                    20 June 2025
                                                </td>

                                                <td>Lorem ipsum dolor sit amet.</td>
                                                <td>
                                                    100
                                                </td>

                                                <td>
                                                    <span className="paid-title">  Approved</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>7</td>

                                                <td>
                                                    Alprazolam
                                                </td>

                                                <td>
                                                    20 June 2025
                                                </td>

                                                <td>Lorem ipsum dolor sit amet.</td>
                                                <td>
                                                    100
                                                </td>

                                                <td>
                                                    <span className="pending-title">  Pending</span>
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
                        {/* data-bs-toggle="modal" data-bs-target="#add-Request" */}
                        <div className="modal step-modal" id="add-Request" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content rounded-5">
                                    <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                                        <div>
                                            <h6 className="lg_title mb-0">Send  H1 Medicine Request</h6>
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
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div class="custom-frm-bx">
                                                        <label>Select Medicine </label>
                                                        <div class="select-wrapper">
                                                            <select class="form-select custom-select">
                                                            <option>Select Medicine </option>
                                                            </select>
                                                        </div>
                                                        </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Quantity</label>
                                                        <input type="text" className="form-control nw-frm-select " placeholder="Enter Quantity" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="custom-frm-bx">
                                                        <label htmlFor="">Message</label>
                                                        <textarea name="" id=""  className="form-control nw-frm-select "></textarea>
                                                       
                                                    </div>
                                                </div>
            
                                                <div className="col-lg-12">
                                                    <div className="text-center mt-4">
                                                        <button className="nw-thm-btn rounded-2 w-75" >Send Request</button>
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

export default MedicineRequest