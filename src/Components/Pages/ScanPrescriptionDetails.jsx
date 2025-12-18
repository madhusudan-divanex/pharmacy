import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
import { BsCapsule } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getSecureApiData } from "../../Services/api";
import base_url from "../../baseUrl";
import html2canvas from "html2canvas"
import html2pdf from "html2pdf.js";

function ScanPrescriptionDetails() {
    const params = useParams();
    const sellId = params.id;
    const [sellData, setSellData] = useState({});
    const { profiles, pharPerson, pharAddress, pharImg,
        rating, avgRating, pharLicense, isRequest } = useSelector(state => state.user)
    async function fetchSellDetails() {
        try {
            const response = await getSecureApiData(`pharmacy/sell-data/${sellId}`);
            if (response.success) {
                setSellData(response.sell)
            } else {
                toast.error("Failed to fetch sell details");
            }

        } catch (error) {
            console.error("Error fetching sell details:", error);
        }
    }

    useEffect(() => {
        fetchSellDetails();
    }, [sellId]);
    const invoiceRef=useRef()
    const handleDownload = () => {
        const element = invoiceRef.current;
        document.body.classList.add("hide-buttons");
        const opt = {
            margin: 0.5,
            filename: "invoice.pdf",
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
        };

        html2pdf().from(element).set(opt).save().then(() => {
            document.body.classList.remove("hide-buttons");
        });
    };
    const subtotal = sellData?.products
        ?.reduce((acc, item) => acc + Number(item?.price || 0), 0) || 0;

    const gst = subtotal * 0.05;
    const total = subtotal + gst;

    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-2">
                    <div className="d-flex align-items-center justify-content-between mega-content-bx">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Prescription Details</h3>
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
                                            Prescription Details
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>


                    </div>
                </div>


                <div className='new-mega-card'>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                            {sellData?.prescriptionFile ?
                                <div className="view-report-card ">
                                    <img src={`${base_url}/${sellData?.prescriptionFile}`} className="w-100 rounded-3" />
                                </div>
                                :
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

                                </div>}


                        </div>

                        {/* <div className="col-lg-6">
                            <div className="generate-bill">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div>
                                        <h5 className="first_para fw-700 fz-20 mb-0">Generate Bill </h5>
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
                            </div>

                          
                        </div> */}

                        <div className="col-lg-6 col-md-12 col-sm-12">
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

                            <div className="" ref={invoiceRef}>
                                <div className="">
                                    <div className="new-invoice-card">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div>
                                                <h5 className="first_para fw-700 fz-20 mb-0">Generate Bill</h5>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 flex-wrap">

                                                <button className="no-print print-btn " onClick={handleDownload}> <FontAwesomeIcon icon={faDownload} /> Download Bill</button>
                                                <button className="no-print print-btn"> <FontAwesomeIcon icon={faPrint} /> Print</button>
                                            </div>
                                        </div>

                                        <div className="laboratory-header mb-4">
                                            <div className="laboratory-name">
                                                <h5>{profiles?.name || 'World Pharmacy'}</h5>
                                                <p><span className="laboratory-title">GSTIN : </span> {profiles?.gstNumber || '09897886454'}</p>
                                            </div>
                                            <div className="invoice-details">
                                                <p><span className="laboratory-invoice">Invoice :</span> {sellData?._id?.slice(-10)}</p>
                                                <p><span className="laboratory-invoice">Date :</span> {new Date().toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}</p>
                                            </div>
                                        </div>

                                        <div className="nw-laboratory-bill-crd">
                                            <div className="nw-laboratory-bill-bx">
                                                <h6>Bill To</h6>
                                                <h4>{sellData?.patientId?.name}</h4>
                                                <p><span className="laboratory-phne">Phone :</span> {sellData?.patientId?.contactNumber}</p>
                                            </div>
                                            <div className="nw-laboratory-bill-bx">
                                                <h6>Order</h6>
                                                <h4>{sellData?.patientId?.name}</h4>
                                                <p><span className="laboratory-phne">Phone :</span> {sellData?.patientId?.contactNumber}</p>
                                            </div>
                                        </div>

                                        <div className="laboratory-report-bx">
                                            <ul className="laboratory-report-list">
                                                <li className="laboratory-item"><span className="price-title">Medicine</span> <span className="price-title">Price</span></li>
                                                {sellData?.products?.map((item, index) =>
                                                    <li className="laboratory-item border-0">
                                                        <span>{item?.inventoryId?.medicineName}</span> <span className="price-title">{item?.price}</span></li>)}
                                            </ul>

                                            <div className="lab-amount-bx">
                                                <ul className="lab-amount-list">
                                                    <li className="lab-amount-item">Subtotal : <span className="price-title">{subtotal?.toFixed(2)}</span></li>
                                                    <li className="lab-amount-item lab-divider">GST (5%) :  <span className="price-title">{gst?.toFixed(2)}</span></li>
                                                    <li className="lab-amount-item">Total :  <span className="price-title">{total?.toFixed(2)}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="mt-3 text-end border-top pt-3">
                            <div>
                                {/* <button className="nw-thm-btn rounded-3">Submit</button> */}
                            </div>
                        </div>





                    </div>

                </div>
            </div>




        </>
    )
}

export default ScanPrescriptionDetails