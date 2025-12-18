// import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { BsCapsule } from "react-icons/bs";
import { IoMdQrScanner } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";
import { getSecureApiData, securePostData } from "../../Services/api";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import {
    BrowserMultiFormatReader,
    BarcodeFormat,
    DecodeHintType,
} from "@zxing/library";

function PrescriptionDetails() {
    const params = useParams();
    const prescriptionId = params.id;
    const userId = localStorage.getItem("userId");
    const [data, setData] = useState()
    const [scannerOpen, setScannerOpen] = useState(false)

    const closeScanner = () => setScannerOpen(false);
    const [formData, setFormData] = useState({
        patientId: null,
        doctorId: null,
        pharId: userId,
        prescriptionFile: null,
        paymentStatus: "Pending",
        products: [
            { inventoryId: null, quantity: 0, price: 0 },
        ],
    })
    const [medicineData, setMedicneData] = useState([])
    async function fetchPrescriptionDetails() {
        try {
            const response = await getSecureApiData(`appointment/prescription-data/${prescriptionId}`);
            if (response.success) {
                setData(response.data)
            } else {
                toast.error("Failed to fetch sell details");
            }

        } catch (error) {
            console.error("Error fetching sell details:", error);
        }
    }
    async function fetchInventory(id) {
        try {
            const response = await getSecureApiData(`pharmacy/inventory-data/${id}`);
            if (response.success) {
                setFormData(prev => {
                    const exists = prev.products.some(
                        p => p.inventoryId === id
                    );

                    if (exists) return prev;

                    return {
                        ...prev,
                        products: [
                            ...prev.products,
                            {
                                inventoryId: id,
                                quantity: 1,
                                price: 0,
                            },
                        ],
                    };
                });
                setMedicneData(prev => {
                    const exists = prev.some(item => item.id === response.data.id);
                    return exists ? prev : [...prev, response.data];
                });
                toast.success("Medicine added successfully");
                setScannerOpen(false);

            } else {
                toast.error("Failed to fetch sell details");
            }

        } catch (error) {
            console.error("Error fetching sell details:", error);
        }
    }
    // Quantity/input change
    const handleProductQuantityChange = (index, e) => {
        const { name, value } = e.target;
        const products = [...formData.products];
        products[index][name] = value;
        setFormData({ ...formData, products });
    };
    const handleProductPriceChange = (index, e) => {
        const { name, value } = e.target;
        const products = [...formData.products];
        products[index][name] = value;
        setFormData({ ...formData, products });
    };
    // remove product row
    const removeProduct = (index) => {
        const products = [...formData.products];
        products.splice(index, 1);
        setFormData({ ...formData, products });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("patientId", formData.patientId)
        data.append("doctorId", formData.doctorId)
        data.append("pharId", formData.pharId)
        data.append("prescriptioniId", formData.prescriptionId)
        data.append("paymentStatus", formData.paymentStatus)
        data.append("products", JSON.stringify(formData.products))
        try {
            const response = await securePostData(`pharmacy/sell`, data);
            if (response.success) {
                toast.success(response.message)
                navigate("/sell")
            } else {
                toast.error(response.message)
            }
        } catch (error) {

        }
    }
    const handleDetected = (id, error) => {
        if (error) {
            toast.error(error);
            return;
        }

        if (!id) return;

        fetchInventory(id);
    };
    useEffect(() => {
        fetchPrescriptionDetails();
    }, [prescriptionId])
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
                                            <h5>RX-{data?.customId}</h5>
                                            <h6>Date: {new Date(data?.createdAt)?.toLocaleDateString('en-GB', {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric'
                                            })}</h6>
                                        </div>

                                        <div className="admin-table-bx">
                                            <div className="">
                                                <div className="admin-table-sub-details d-flex align-items-center gap-2">
                                                    <img src="/doctor-avatr.png" alt="" style={{ border: "5px solid #fff" }} />
                                                    <div className="">
                                                        <h6 className="fw-700 fz-14" style={{ color: "#00B4B5" }}>{data?.doctorId?.name}</h6>
                                                        <p>{data?.doctorId?.customId}</p>
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

                                    {data?.medications?.map((item, key) =>
                                        <div className="view-medications-bx mb-3" key={key}>
                                            <h5>{key + 1}. {item?.name}</h5>
                                            <ul className="viwe-medication-list">
                                                {/* <li className="viwe-medication-item">Dosage: 10mg </li> */}
                                                <li className="viwe-medication-item">Frequency: {item?.frequency} </li>
                                                <li className="viwe-medication-item">Duration: {item?.duration}</li>
                                                <li className="viwe-medication-item">Instructions: {item?.instructions}</li>

                                            </ul>
                                        </div>)}


                                    <div className="diagnosis-bx mb-3">
                                        <h5>Diagnosis</h5>
                                        <p>{data?.diagnosis}</p>
                                    </div>

                                    <div className="diagnosis-bx mb-3">
                                        <h5>Notes</h5>
                                        <p>{data?.notes}</p>
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
                                            <button className="thm-btn rounded-2" data-bs-toggle="modal" onClick={() => setScannerOpen(true)}> <IoMdQrScanner className="fz-18 me-2" /> Scan</button>

                                        </div>
                                    </div>

                                    {formData?.products[0].inventoryId !== null && formData?.products?.map((item, index) => {
                                        const medicine = medicineData.find(
                                            m => m._id === item.inventoryId
                                        );

                                        return (
                                            <div className="medicine-card" key={index}>
                                                <div className="left-icon">
                                                    <BsCapsule style={{ color: "#00B4B5" }} />
                                                </div>

                                                <span className="med-name">
                                                    {medicine?.medicineName || "Unknown Medicine"}
                                                </span>

                                                {index !== formData?.products?.length - 1 && <label className="check-container">
                                                    <button
                                                        className="text-danger"
                                                        onClick={() => removeProduct(index)}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </label>}
                                            </div>
                                        );
                                    })}


                                    {/* <div className="medicine-card">
                                        <div className="left-icon">
                                            <BsCapsule style={{ color: "#00B4B5" }} />
                                        </div>

                                        <span className="med-name">Ibuprofen</span>

                                        <label className="check-container">
                                            <input type="checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div> */}


                                </div>



                                <div className="generate-bill">
                                    <h5 className="add-contact-title mb-0 fz-22">Generate Bill </h5>

                                    <div className="text-center">
                                        <img src="/bill.svg" alt="" />

                                        <p className="py-2">Please Generate PrescriptionsBill </p>

                                        <button className="nw-thm-btn outline rounded-5"
                                            disabled={formData?.products[0].inventoryId === null}
                                            data-bs-toggle="modal" data-bs-target="#bill-Generate">Generate Bill</button>
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
                                <button type="button" className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#00000040" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body px-4 pb-5">
                            <form >
                                {formData?.products[0].inventoryId !== null && formData?.products?.map((item, index) => {
                                    const medicine = medicineData.find(
                                        m => m._id === item.inventoryId
                                    );

                                    return (
                                        <div className="row" key={index}>
                                            <div className="col-lg-6 col-md-4 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Medicine Name</label>
                                                    <input type="text" className="form-control nw-frm-select " value={medicine} disabled placeholder="Enter Medicine Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Quantity</label>
                                                    <input type="number"
                                                        value={product?.quantity}
                                                        disabled
                                                        className="form-control nw-frm-select " placeholder="Enter  Quantity" />
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <div className="custom-frm-bx">
                                                    <label htmlFor="">Amount($)</label>
                                                    <input type="text"
                                                        name="price"
                                                        value={product?.price}
                                                        onChange={(e) => handleProductPriceChange(index, e)}
                                                        className="form-control nw-frm-select " placeholder="Enter Amount" />
                                                </div>
                                            </div>
                                        </div>)
                                }
                                )}

                                <div className="col-lg-12">
                                    <div className="text-center mt-4">
                                        <button type="button" className="nw-thm-btn rounded-2 w-75" data-bs-dismiss="modal">Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Add Supplier Popup End */}
            {scannerOpen && <div className="modal fade show step-modal"
                id="scanner-Request"
                style={{ display: "block", background: "#00000080" }}
                data-bs-backdrop="static"
                data-bs-keyboard="false">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content rounded-5">
                        <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                            <div>
                                <h6 className="lg_title mb-0 fz-20">Scan Medications </h6>
                            </div>
                            <div>
                                <button type="button" onClick={closeScanner}
                                    className="fz-18" style={{ color: "#00000040" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body px-4">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <Scanner open={scannerOpen} onDetected={handleDetected} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default PrescriptionDetails

function Scanner({ onDetected, open }) {
    const scannedRef = useRef(false);
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const readerRef = useRef(null);

    const [result, setResult] = useState("");

    useEffect(() => {
        scannedRef.current = false;

        if (open) startScanner();
        else stopScanner();

        return () => stopScanner();
    }, [open]);



    const startScanner = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment" },
                audio: false,
            });

            streamRef.current = stream;
            videoRef.current.srcObject = stream;

            await videoRef.current.play();
            startDecoding();
        } catch (err) {
            stopScanner();

            // Notify parent about error
            onDetected?.(null, "Camera not available or permission denied");
            console.error("Camera Start Error:", err);
        }
    };

    const startDecoding = () => {
        const hints = new Map();
        hints.set(DecodeHintType.POSSIBLE_FORMATS, [
            BarcodeFormat.QR_CODE,
            BarcodeFormat.CODE_128,
        ]);


        const reader = new BrowserMultiFormatReader(hints);
        readerRef.current = reader;

        reader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
            if (result && !scannedRef.current) {
                scannedRef.current = true;

                const text = result.getText();
                setResult(text);

                onDetected?.(text); // 🔥 ID parent ko bhej di

                stopScanner();
            }
        });
    };


    const stopScanner = () => {
        try {
            readerRef.current?.reset();
            streamRef.current?.getTracks().forEach((t) => t.stop());
        } catch (err) { }
    };

    return (
        <>
            {open && (
                <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
                    <div
                        style={{
                            position: "relative",
                            height: 320,
                            overflow: "hidden",
                            borderRadius: 12,
                        }}
                    >
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>

                    {result && <p>Scanned: {result}</p>}
                </div>
            )}
        </>
    );
}