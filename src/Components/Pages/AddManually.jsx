import { faCircleXmark, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaPlusCircle, FaPlusSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getSecureApiData, securePostData } from "../../Services/api";
import { use, useEffect, useState } from "react";
import Select from "react-select";

function AddManually() {
    const navigate = useNavigate()
    const userId = localStorage.getItem("userId")
    const [patientId, setPatientId] = useState("")
    const [doctorId, setDoctorId] = useState("")
    const [dtData, setDtData] = useState({})
    const [ptData, setPtData] = useState({})
    const [medicineList, setMedicineList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [formData, setFormData] = useState({
        patientId: null,
        doctorId: null,
        pharId:userId,
        prescriptionFile:null,
        paymentStatus:"Pending",
        products: [
            { inventoryId: null, quantity: 0, price: 0 },
        ],
    })
    const fetchPatient = async () => {
        try {
            const response = await getSecureApiData(`patient/${patientId}`);
            if (response.success) {
                setFormData({...formData,patientId:response.data._id})
                setPtData(response.data)
                setIsLoading(false)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        }
    }
    const fetchDoctor = async () => {
        try {
            const response = await getSecureApiData(`doctor/${doctorId}`);
            if (response.success) {
                setFormData({...formData,doctorId:response.data._id})
                setDtData(response.data)
                setIsLoading(false)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        }
    }
    const fetchInventory = async () => {
        try {
            const response = await getSecureApiData(`pharmacy/inventory/${userId}?schedule=all&limit=10000&status=Approved`);
            if (response.success) {
                const data = response?.data?.map((item) => ({
                    value: item?._id,
                    label: item?.medicineName, // fixed typo
                }));
                setMedicineList(data)
                setIsLoading(false)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        if (patientId?.length > 3) {
            fetchPatient()
        }
    }, [patientId])
    useEffect(() => {
        if (doctorId?.length > 3) {
            fetchDoctor()
        }
    }, [doctorId])
    useEffect(() => {
        fetchInventory()
    }, [userId])
    const handleProductSelectChange = (index, selectedOption) => {
        const products = [...formData.products];
        products[index].inventoryId = selectedOption.value;
        setFormData({ ...formData, products });
    };

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
    // add new product row
    const addProduct = () => {
        setFormData({
            ...formData,
            products: [...formData.products, { inventoryId: "", quantity: "" }],
        });
    };

    // remove product row
    const removeProduct = (index) => {
        const products = [...formData.products];
        products.splice(index, 1);
        setFormData({ ...formData, products });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data=new FormData();
        data.append("patientId",formData.patientId)
        data.append("doctorId",formData.doctorId)
        data.append("pharId",formData.pharId)
        if(formData.prescriptionFile){
            data.append("prescriptionFile",formData.prescriptionFile)
        }
        data.append("paymentStatus",formData.paymentStatus)
        data.append("products",JSON.stringify(formData.products))
        try {
            const response=await securePostData(`pharmacy/sell`,data);
            if(response.success){
                toast.success(response.message)
                navigate("/sell")
            }else{
                toast.error(response.message)
            }
        } catch (error) {
            
        }
    }
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
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="mb-3">
                                <h5 className="add-contact-title text-black fz-24">Manually Details</h5>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Patient Id</label>
                                    <input type="number" value={patientId} onChange={(e) => setPatientId(e.target.value)} className="form-control nw-frm-select " placeholder="Enter Patient Id" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Patient Name</label>
                                    <input type="text" value={ptData?.name} disabled className="form-control nw-frm-select " placeholder="Enter Patient name" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Patient Mobile Number</label>
                                    <input type="number" value={ptData?.contactNumber} disabled className="form-control nw-frm-select " placeholder="Enter Patient Mobile Number" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Doctor Id</label>
                                    <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} className="form-control nw-frm-select " placeholder="Enter Doctor Id" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Doctor  Name</label>
                                    <input type="text" value={dtData?.name} disabled className="form-control nw-frm-select " placeholder="Enter Doctor name" />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Doctor Mobile Number</label>
                                    <input type="number" value={dtData?.contactNumber} disabled className="form-control nw-frm-select " placeholder="Enter Doctor Mobile Number" />
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
                                                onChange={(e)=>setFormData({...formData,prescriptionFile:e.target.files[0]})}
                                                accept=".png,.jpg,.jpeg"
                                            />

                                            {formData.prescriptionFile && (
                                                <div id="filePreviewWrapper" className=" mt-3">
                                                    <img src={URL.createObjectURL(formData.prescriptionFile)} alt="Preview" className="img-thumbnail" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row">
                            <div className="mb-3">
                                <h5 className="add-contact-title">Manually Add Medications</h5>
                            </div>
                            {formData.products.map((product, index) => (
                                <div className="row mb-2" key={index}>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div class="custom-frm-bx">
                                            <label>Medication</label>
                                            <div class="select-wrapper">
                                                <Select
                                                    options={medicineList.filter(
                                                        item =>
                                                            !formData.products.some(
                                                                (p, i) => p.inventoryId === item.value && i !== index
                                                            )
                                                    )}
                                                    classNamePrefix="custom-select"
                                                    value={medicineList.find(item => item.value === product.inventoryId) || null}
                                                    onChange={(option) => handleProductSelectChange(index, option)}
                                                    placeholder="Select Product"
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Quantity</label>
                                            <input type="number" 
                                            value={product?.quantity}
                                            name="quantity"
                                            onChange={(e)=>handleProductQuantityChange(index,e)}
                                            className="form-control nw-frm-select " placeholder="Enter Quantity" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                                        <div className="custom-frm-bx mb-0">
                                            <button className="text-danger"
                                                onClick={() => removeProduct(index)}
                                            ><FontAwesomeIcon icon={faTrash} /></button>
                                        </div>
                                        {index == formData?.products?.length - 1 &&
                                            <div className="text-end">
                                                <button
                                                    type="button"
                                                    className="reprting-name"
                                                    onClick={addProduct}
                                                >
                                                    <FaPlusCircle />
                                                </button>
                                            </div>}
                                    </div>
                                </div>))}


                            <div className="col-lg-12 col-md-12 col-sm-12 mt-2">
                                <div className="generate-bill">
                                    <h5 className="add-contact-title mb-0 fz-22">Generate Bill </h5>
                                    <div className="text-center">
                                        <img src="/bill.svg" alt="" />
                                        <p className="py-2">Please Generate PrescriptionsBill </p>
                                        <button
                                        disabled={formData?.products[0].inventoryId==null}
                                         className="nw-thm-btn outline rounded-5" data-bs-toggle="modal" data-bs-target="#bill-Generate">Generate Bill</button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-end">
                                <div className="permission-check-main-bx">

                                    <div className="form-check custom-check d-inline-block">
                                        <input className="form-check-input" type="checkbox" 
                                        checked={formData?.paymentStatus==="Completed"}
                                        onChange={(e)=>setFormData({...formData,paymentStatus:e.target.checked?"Completed":"Pending"})}
                                         id="chat" />
                                        <label className="form-check-label" for="chat">
                                            Payment Done
                                        </label>
                                    </div>

                                </div>

                                <div>
                                    <button className="nw-thm-btn rounded-3" type="submit" data-bs-dismiss="modal" aria-label="Close" >Submit</button>
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
                            <form >
                                {formData?.products?.map((product, index) =>
                                    <div className="row" key={index}>
                                        <div className="col-lg-6 col-md-4 col-sm-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Medicine Name</label>
                                                <div class="select-wrapper">
                                                    <Select
                                                        options={medicineList.filter(
                                                            item =>
                                                                !formData.products.some(
                                                                    (p, i) => p.inventoryId === item.value && i !== index
                                                                )
                                                        )}
                                                        classNamePrefix="custom-select"
                                                        disabled
                                                        value={medicineList.find(item => item.value === product.inventoryId) || null}
                                                        onChange={(option) => handleProductSelectChange(index, option)}
                                                        placeholder="Select Product"
                                                    />
                                                </div>
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
                                                onChange={(e)=>handleProductPriceChange(index,e)}
                                                className="form-control nw-frm-select " placeholder="Enter Amount" />
                                            </div>
                                        </div>
                                    </div>)}

                                <div className="col-lg-12">
                                    <div className="text-center mt-4">
                                        <button className="nw-thm-btn rounded-2 w-75" >Submit</button>
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