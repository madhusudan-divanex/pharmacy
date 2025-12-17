import { TbGridDots } from "react-icons/tb";

import { faCircleXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getSecureApiData, securePostData } from "../../Services/api";
import { toast } from "react-toastify";
function MedicineRequest() {
    const [loading, setLoading] = useState(true)
    const userId = localStorage.getItem('userId')
    const [currentPage, setCurrentPage] = useState(1)
    const [status,setStatus] =useState('all')
    const [name, setName] = useState('')
    const [totalPage, setTotalPage] = useState(1)
    const [medicineList, setMedicineList] = useState([])
    const [medicineRequest, setMedicineRequest] = useState([])
    const [formData, setFormData] = useState({
        pharId: userId,
        medicineId: null,
        quantity: null,
        message: '',
        schedule: 'H1'
    })
    const fetchInventory = async () => {
        try {
            const response = await getSecureApiData(`pharmacy/inventory/${userId}?schedule=all&limit=10000`);
            if (response.success) {
                setMedicineList(response.data)
                setLoading(false)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    }
    const fetchMedicineRequest = async () => {
        try {
            const response = await getSecureApiData(`pharmacy/medicine-request/${userId}?page=${currentPage}&status=${status}`);
            if (response.success) {
                setMedicineRequest(response.data)
                setTotalPage(response.pagination?.totalPages)
                setLoading(false)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchInventory()
        fetchMedicineRequest()
    }, [userId])
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await securePostData('pharmacy/medicine-request', formData)
            if (response.success) {
                setFormData({
                    pharId: userId,
                    medicineId: null,
                    quantity: null,
                    message: ''
                })
                toast.success("Medicine request sent to the admin")
            } else {
                toast.error(response.message)
            }
        } catch (error) {

        }
    }
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
                                            type="text"
                                            className="form-control admin-table-search-frm search-table-frm pe-5"
                                            id="email"
                                            value={name}
                                            onChange={(e)=>setName(e.target.value)}
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
                                            <label className="label">Status :</label>
                                            <select className="" value={status} onChange={(e)=>setStatus(e.target.value)}>
                                                <option value="all">All</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Approved">Approved</option>
                                                <option value="Rejected">Rejected</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={()=>fetchMedicineRequest()} className="nw-thm-btn rounded-2">
                                            Filter
                                        </button>
                                    </div>

                                </div>

                            </div>

                            <div className="page-selector d-flex align-items-center mb-2 mb-md-0 gap-2">
                                <div>
                                    <button className="thm-btn rounded-3" data-bs-toggle="modal" data-bs-target="#add-Request">Send Request</button>
                                </div>

                                {totalPage &&<div className="filters">
                                    <select
                                        value={currentPage}
                                        onChange={(e) => setCurrentPage(e.target.value)}
                                        className="form-select custom-page-dropdown nw-custom-page ">
                                        {Array.from({ length: totalPage }, (_, i) => (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                </div>}
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
                                            {medicineRequest?.length > 0 &&
                                                medicineRequest?.map((item, key) =>
                                                    <tr key={key}>
                                                        <td>{key + 1}</td>
                                                        <td>
                                                            {item?.medicineName}
                                                        </td>
                                                        <td>
                                                            {item?.createdAt ? new Date(item?.createdAt)?.toLocaleDateString('en-GB', {
                                                                    day: '2-digit',
                                                                    month: 'short',
                                                                    year: 'numeric'
                                                                    }) : '-'}
                                                        </td>
                                                        <td>{item?.message}</td>
                                                        <td>
                                                            {item?.quantity}
                                                        </td>
                                                        <td>
                                                            {item?.status == "Approved" && <span className="paid-title"> Approved</span>}
                                                            {item?.status == "Pending" && <span className="pending-title">  Pending</span>}
                                                            {item?.status == "Rejected" && <span className="reject-title">  Rejected</span>}
                                                        </td>
                                                    </tr>)}
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
                                                    <span className="pending-title">Pending</span>
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
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div class="custom-frm-bx">
                                            <label>Select Medicine </label>
                                            <div class="select-wrapper">
                                                <select class="form-select custom-select" name="medicineId"
                                                    value={formData?.medicineId}
                                                    onChange={handleChange}>
                                                    <option>Select Medicine </option>
                                                    {medicineList?.length > 0 &&
                                                        medicineList?.map((item, key) =>
                                                            <option value={item?._id}>{item?.medicineName} </option>)}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Quantity</label>
                                            <input type="number"
                                                value={formData?.quantity}
                                                onChange={handleChange}
                                                name="quantity"
                                                className="form-control nw-frm-select " placeholder="Enter Quantity" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Message</label>
                                            <textarea id=""
                                                value={formData?.message}
                                                onChange={handleChange}
                                                name="message"
                                                className="form-control nw-frm-select "></textarea>

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="text-center mt-4">
                                            <button type="submit"
                                                data-bs-dismiss="modal"
                                                className="nw-thm-btn rounded-2 w-75" >Send Request</button>
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