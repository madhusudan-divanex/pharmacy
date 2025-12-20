import { TbGridDots } from "react-icons/tb";
import { faSearch, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteApiData, getSecureApiData, securePostData } from "../../Services/api";
import { useEffect, useState } from "react";
import base_url from "../../baseUrl";
import { useSelector } from "react-redux";


function Employee() {
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const {isOwner}=useSelector(state=>state.user)
    const [employees, setEmployees] = useState([])
    const [status, setStatus] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [name, setName] = useState('')
    const [totalPage, setTotalPage] = useState(1)
    const fetchPharStaff = async () => {
        try {
            const response = await getSecureApiData(`pharmacy/staff/${userId}?page=${currentPage}&name=${name}&status=${status}`);

            if (response.success) {
                setEmployees(response.data)
                setTotalPage(response.pagination.totalPages)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        }
    }
    useEffect(() => {
        fetchPharStaff()
    }, [userId, currentPage, status])
    const staffAction = async (e, id, status) => {
        e.preventDefault()
        const data = { empId: id, status }
        try {
            const response = await securePostData(`pharmacy/staff-action`, data);
            if (response.success) {
                toast.success('Status updated')
                fetchPharStaff()
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        }
    }
    const deleteStaff = async (id) => {
        try {
            const response = await deleteApiData(`pharmacy/staff/${id}`);
            if (response.success) {
                toast.success('Staff deleted')
                fetchPharStaff()
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        }
    }
   
    useEffect(() => {
        if (!isOwner) {
            navigate('/')
            toast.error('You do not have permission to see employee ')
            return
        }
    }, [isOwner])
    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Employee</h3>
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
                                            Employee
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div>
                            <button className="thm-btn rounded-3" onClick={() => navigate("/add-employee")} data-bs-dismiss="modal" aria-label="Close" >Add</button>
                        </div>
                    </div>
                </div>
                <div className='new-mega-card'>
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between mb-3 nw-box gap-2">
                            <div>
                                <div className="d-flex align-items-center gap-2 nw-box">
                                    <div className="custom-frm-bx mb-0">
                                        <input
                                            type="text"
                                            className="form-control admin-table-search-frm search-table-frm pe-5"
                                            id="email"
                                            placeholder="Search"
                                            value={name} onChange={(e) => setName(e.target.value)}
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
                                            <select className="" value={status} onChange={(e) => setStatus(e.target.value)}>
                                                <option value=''>All</option>
                                                <option value="active">Active</option>
                                                <option value="inactive">In Active</option>
                                                <option value="onleave">On Leave</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={()=>fetchPharStaff()} className="nw-thm-btn rounded-2">
                                            Filter
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="page-selector d-flex align-items-center mb-2 mb-md-0 gap-2">
                                <div>
                                    <select
                                        value={currentPage}
                                        onChange={(e) => setCurrentPage(e.target.value)}
                                        className="form-select custom-page-dropdown nw-custom-page ">
                                        {Array.from({ length: totalPage }, (_, i) => (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {employees?.length > 0 &&
                            employees?.map((item, key) =>
                                <div className="col-lg-4 col-md-4 col-sm-12 mb-3" key={key}>
                                    <div className="employee-card">
                                        <div className="employee-tp-header d-flex align-items-center justify-content-between">
                                            <div className="admin-table-bx">
                                                <div className="admin-table-sub-bx">
                                                    <img src={item?.profileImage ? `${base_url}/${item?.profileImage}` : "/view-avatr.png"} alt="" />
                                                    <div className="admin-table-sub-details">
                                                        <h6 className="text-black fz-16 fw-600">{item?.name}</h6>
                                                        <p className="text-capitalzie">{item?.employmentId?.position}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center gap-2">
                                                {
                                                    item?.status === "active" ? (
                                                        <span className="approved rounded-5 py-1">Active</span>
                                                    ) : item?.status === "inactive" ? (
                                                        <span className="approved inactive rounded-5 py-1">Inactive</span>
                                                    ) : (
                                                        <span className="approved leaved rounded-5 py-1">On Leave</span>
                                                    )
                                                }

                                                <div className="dropdown">
                                                    <a
                                                        href="#"
                                                        className="text-black"
                                                        id="acticonMenu1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <TbGridDots />
                                                    </a>
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                        aria-labelledby="acticonMenu1"
                                                    >
                                                        <li className="prescription-item">
                                                            <NavLink to={`/view-employee/${item?.name}/${item?._id}`} className="prescription-nav" >
                                                                View profile
                                                            </NavLink>
                                                        </li>
                                                        <li className="prescription-item">
                                                            <NavLink to={`/add-employee?id=${item?._id}`} className="prescription-nav" href="#" >
                                                                Edit
                                                            </NavLink>
                                                        </li>

                                                        <li className="prescription-item">
                                                            <button className=" prescription-nav" type="button" onClick={() => deleteStaff(item?._id)}>

                                                                Delete
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="employee-user-details">
                                            <ul className="user-employee-list">
                                                <li className="user-employee-item">Role  :  <span className="user-employee-title">{item?.employmentId?.position}</span></li>
                                                <li className="user-employee-item">Mobile Number  : <span className="user-employee-title">{item?.contactInformation?.contactNumber}</span></li>
                                                <li className="user-employee-item">Email : <span className="user-employee-title">{item?.contactInformation?.email}</span></li>
                                                <li className="user-employee-item">Gender : <span className="user-employee-title text-capitalize">{item?.gender}</span></li>
                                                <li className="user-employee-item">Joined : <span className="user-employee-title">{new Date(item?.employmentId?.joinDate)?.toLocaleDateString()}</span></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employee