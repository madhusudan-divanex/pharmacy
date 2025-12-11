import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faDroplet, faEnvelope, faEye, faLocationDot, faPerson, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function PrescriptionsBar() {
    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2">Prescriptions  </h3>
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
                                            Prescriptions
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>


                    </div>
                </div>



                <div className="view-employee-bx patient-view-bx">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                            <div className="view-employee-bx patients-personal-info-card">
                                <div>
                                    <div className="view-avatr-bio-bx text-center">
                                        <img src="/view-avatr.png" alt="" />
                                        <h4>Ravi Kumar</h4>
                                        <p><span className="vw-id">ID:</span> STC7654</p>
                                        <h6 className="vw-activ">Active</h6>

                                    </div>

                                    <div>
                                        <ul className="vw-info-list">
                                            <li className="vw-info-item">
                                                <span className="vw-info-icon"><FontAwesomeIcon icon={faPerson} /></span>
                                                <div>
                                                    <p className="vw-info-title">Age</p>
                                                    <p className="vw-info-value">20 Year</p>
                                                </div>
                                            </li>

                                            <li className="vw-info-item">
                                                <span className="vw-info-icon"><FontAwesomeIcon icon={faCalendar} /></span>
                                                <div>
                                                    <p className="vw-info-title">Gender </p>
                                                    <p className="vw-info-value">Male</p>
                                                </div>
                                            </li>

                                            <li className="vw-info-item">
                                                <span className="vw-info-icon"><FontAwesomeIcon icon={faDroplet} /></span>
                                                <div>
                                                    <p className="vw-info-title">Blood  Group </p>
                                                    <p className="vw-info-value">A+</p>
                                                </div>
                                            </li>

                                            <li className="vw-info-item">
                                                <span className="vw-info-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                                                <div>
                                                    <p className="vw-info-title">Email </p>
                                                    <p className="vw-info-value">david.patel @medixpro.com</p>
                                                </div>
                                            </li>

                                            <li className="vw-info-item">
                                                <span className="vw-info-icon"><FontAwesomeIcon icon={faPhone} /></span>
                                                <div>
                                                    <p className="vw-info-title">Phone </p>
                                                    <p className="vw-info-value">+91-9876543210</p>
                                                </div>
                                            </li>

                                            <li className="vw-info-item">
                                                <span className="vw-info-icon"><FontAwesomeIcon icon={faPhone} /></span>
                                                <div>
                                                    <p className="vw-info-title">Emergency Contact Name </p>
                                                    <p className="vw-info-value"><span className="fw-700">(Ravi Patel) </span> +91-9876543210</p>
                                                </div>
                                            </li>

                                            <li className="vw-info-item">
                                                <span className="vw-info-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
                                                <div>
                                                    <p className="vw-info-title">Address</p>
                                                    <p className="vw-info-value">23 Medical Center Blvd, Suite 45,  jaipur,  india</p>
                                                </div>
                                            </li>

                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <div className="view-employee-bx">
                                <div className="employee-tabs">
                                    <ul className="nav nav-tabs gap-3 ps-2" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="nav-link active"
                                                id="home-tab"
                                                data-bs-toggle="tab"
                                                href="#home"
                                                role="tab"
                                            >
                                                Prescriptions
                                            </a>
                                        </li>


                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="nav-link"
                                                id="contact-tab"
                                                data-bs-toggle="tab"
                                                href="#contact"
                                                role="tab"
                                            >
                                                Medical Records
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="">
                                    <div className="patient-bio-tab px-0">
                                        <div className="tab-content" id="myTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="home"
                                                role="tabpanel"
                                            >
                                                <div className="row">
                                                    <div className="col-lg-12 mb-3">
                                                        <div className="new-pharmacy-detail-card">
                                                            <div className="admin-table-bx d-flex align-items-center justify-content-between nw-pharmacy-details">
                                                                <div className="">
                                                                    <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                        <img src="/prescriptions.png" alt="" />
                                                                        <div>
                                                                            <h6 className="fs-16 fw-600 text-black">Prescriptions</h6>
                                                                            <p className="fs-14 fw-500">25-11-03</p>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div className="admin-table-bx">
                                                                    <div className="">
                                                                        <div className="admin-table-sub-details d-flex align-items-center gap-2 doctor-title ">
                                                                            <img src="/doctor-avatr.png" alt="" />
                                                                            <div>
                                                                                <h6>Dr. David Patel </h6>
                                                                                <p className="fs-14 fw-500">DO-4001</p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className="d-flex align-items gap-2">
                                                                    <div>
                                                                        <span className="approved rounded-5 py-1">Active</span>
                                                                    </div>

                                                                    <button type="button" className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                    <button type="button" className="card-sw-btn"><FontAwesomeIcon icon={faEye} /></button>
                                                                </div>



                                                            </div>

                                                            <div className="prescription-check-bx">
                                                                <div className="mt-3">
                                                                    <div className="barcd-scannr barcde-scnnr-card ms-0">
                                                                        <div className="barcd-content">
                                                                            <h4>SP-9879</h4>
                                                                            <img src="/barcode.png" alt="" />
                                                                        </div>

                                                                        <div className="barcode-id-details">
                                                                            <div>
                                                                                <h6>Patient Id </h6>
                                                                                <p>PS-9001</p>
                                                                            </div>


                                                                            <div>
                                                                                <h6>Appointment ID </h6>
                                                                                <p>OID-8876</p>
                                                                            </div>
                                                                        </div>

                                                                    </div>


                                                                </div>

                                                                <NavLink to="/prescriptions-detail">
                                                                    <div className="form-check custom-check nw-thm-btn ps-5">
                                                                        <input className="form-check-input bg-transparent" type="checkbox" value="" id="addTests" />
                                                                        <label className="form-check-label text-white fw-700" for="addTests" >
                                                                            Select
                                                                        </label>
                                                                    </div>
                                                                </NavLink>
                                                            </div>

                                                        </div>

                                                    </div>


                                                    <div className="col-lg-12 mb-3">
                                                        <div className="new-pharmacy-detail-card">
                                                            <div className="admin-table-bx d-flex align-items-center justify-content-between nw-pharmacy-details">
                                                                <div className="">
                                                                    <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                                        <img src="/in-active.png" alt="" />
                                                                        <div>
                                                                            <h6 className="fs-16 fw-600 text-black">Prescriptions</h6>
                                                                            <p className="fs-14 fw-500">25-11-03</p>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div className="admin-table-bx">
                                                                    <div className="">
                                                                        <div className="admin-table-sub-details d-flex align-items-center gap-2 doctor-title ">
                                                                            <img src="/doctor-avatr.png" alt="" />
                                                                            <div>
                                                                                <h6>Dr. David Patel </h6>
                                                                                <p className="fs-14 fw-500">DO-4001</p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className="d-flex align-items gap-2">
                                                                    <div>
                                                                        <span className="approved rounded-5 in-active py-1">Inactive</span>
                                                                    </div>

                                                                    <button type="button" className="card-sw-btn"><FontAwesomeIcon icon={faPrint} /></button>
                                                                    <button type="button" className="card-sw-btn"><FontAwesomeIcon icon={faEye} /></button>
                                                                </div>



                                                            </div>

                                                            <div className="mt-3">
                                                                <div className="barcd-scannr barcde-scnnr-card ms-0">
                                                                    <div className="barcd-content">
                                                                        <h4>SP-9879</h4>
                                                                        <img src="/barcode.png" alt="" />
                                                                    </div>

                                                                    <div className="barcode-id-details">
                                                                        <div>
                                                                            <h6>Patient Id </h6>
                                                                            <p>PS-9001</p>
                                                                        </div>


                                                                        <div>
                                                                            <h6>Appointment ID </h6>
                                                                            <p>OID-8876</p>
                                                                        </div>
                                                                    </div>

                                                                </div>


                                                            </div>

                                                        </div>

                                                    </div>



                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="contact" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="">
                                                            <div className="ovrview-bx mb-3">
                                                                <h4 className="new_title">Medical History</h4>
                                                                {/* <p className="">Robert Davis is a board-certified cardiologist with over 8 years of experience in diagnosing and treating heart conditions. She specializes in preventive cardiology and heart failure management.</p> */}
                                                            </div>

                                                            <div className="medical-history-content">
                                                                <div>
                                                                    <h4 className="fz-16 fw-700">Do you have any chronic conditions?</h4>
                                                                    <h5 className="hearth-disese">Heart Disease</h5>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h4 className="fz-16 fw-700">Are you currently on any medications?</h4>
                                                                    <h5 className="hearth-disese">Yes</h5>
                                                                </div>

                                                            </div>

                                                            <div className="medical-history-content my-3">
                                                                <div>
                                                                    <h4 className="fz-16 fw-700">Medication Details</h4>
                                                                    <p>ACE Inhibitors (Twice daily)</p>
                                                                    <p>Beta Blockers  (Once daily)</p>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <h4 className="fz-16 fw-700">Allergies</h4>
                                                                    <p>Penicillin</p>
                                                                    <p>Peanuts</p>
                                                                </div>

                                                            </div>

                                                            <div className="ovrview-bx mb-3">
                                                                <h4 className="new_title">Family Medical History</h4>
                                                            </div>
                                                            <div className="medical-history-content my-3">
                                                                <div>
                                                                    <h4 className="fz-16 fw-700">Any family history of chronic disease?</h4>
                                                                    <h5 className="hearth-disese">Yes</h5>

                                                                </div>

                                                                <div className="mt-3">
                                                                    <h4 className="fz-16 fw-700">Chronic Diseases in Family</h4>
                                                                    <p> Father: Hypertension, Type 2 Diabetes</p>
                                                                    <p>Mother: Osteoarthritis</p>
                                                                    <p>Maternal Grandfather: Heart Disease</p>
                                                                    <p>Paternal Grandmother: Stroke</p>
                                                                </div>

                                                            </div>

                                                            <div className="ovrview-bx mb-3">
                                                                <h4 className="new_title">Prescriptions and Reports</h4>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-lg-6 mb-3">
                                                                    <div className="prescription-patients-card">
                                                                        <div className="prescription-patients-picture">
                                                                            <img src="/patient-card-one.png" alt="" />
                                                                        </div>
                                                                        <div className="card-details-bx">
                                                                            <div className="card-info-title">
                                                                                <h3>CBC Report 8/21/2025</h3>
                                                                                <p>8/21/2025</p>
                                                                            </div>

                                                                            <div className="">
                                                                                <button type="button" className="card-sw-btn"><FontAwesomeIcon icon={faEye} /></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="prescription-patients-card">
                                                                        <div className="prescription-patients-picture">
                                                                            <img src="/patient-card-two.png" alt="" />
                                                                        </div>
                                                                        <div className="card-details-bx">
                                                                            <div className="card-info-title">
                                                                                <h3>Prescriptions 8/21/2025</h3>
                                                                                <p>8/21/2025</p>
                                                                            </div>

                                                                            <div className="">
                                                                                <button type="button" className="card-sw-btn"><FontAwesomeIcon icon={faEye} /></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PrescriptionsBar