import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,

    faKey,
    faPen,
    faSearch,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteApiData, getSecureApiData, securePostData, updateApiData } from "../../Services/api";
import { useSelector } from "react-redux";
import Loader from "../Layouts/Loader";

function Permission() {
    const userId = localStorage.getItem('userId')
    const [name, setName] = useState('')
    const [editId, setEditId] = useState(null)
    const [search, setSearch] = useState(null)
    const [loading,setLoading]=useState(false)
    const [totalPage, setTotalPage] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const {isOwner} =useSelector(state=>state.user)

    const [permissions, setPermissions] = useState([])
    const fetchPharPermission = async () => {
       
        try {
            const response = await getSecureApiData(`pharmacy/permission/${userId}?page=${currentPage}&name=${search}`);
            if (response.success) {
                setCurrentPage(response.pagination.page)
                setTotalPage(response.pagination.totalPages)
                setPermissions(response.data)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        }
    }
    const addPharPermission = async (e) => {
        e.preventDefault()
        if (editId) {
            const data = { pharId: userId, name, permissionId: editId }
            try {
                const response = await updateApiData(`pharmacy/permission`, data);
                if (response.success) {
                    fetchPharPermission()
                    setName('')
                    setEditId(null)
                    toast.success("Permission updated")
                } else {
                    toast.error(response.message)
                }
            } catch (err) {
                console.error("Error creating lab:", err);
            }
        } else {

            const data = { pharId: userId, name }
            try {
                const response = await securePostData(`pharmacy/permission`, data);
                if (response.success) {
                    fetchPharPermission()
                    setName('')
                    toast.success("Permission created")
                } else {
                    toast.error(response.message)
                }
            } catch (err) {
                console.error("Error creating lab:", err);
            }
        }
    }
    const deletePermission = async (id) => {
        // e.preventDefault()
        setLoading(true)
        const data = { pharId: userId, permissionId: id }
        try {
            const response = await deleteApiData(`pharmacy/permission`, data);
            if (response.success) {
                fetchPharPermission()
                toast.success("Permission deleted")
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        } finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPharPermission()
    }, [currentPage, userId])
    useEffect(()=>{
        if(search?.length>1){
            setTimeout(() => {
                fetchPharPermission()
            }, 800);
        }
    },[search])
    useEffect(() => {
        if (!isOwner) {
            navigate('/')
            toast.error('You do not have permission to see permissions ')
            return
        }
    }, [isOwner])
    return (
        <>
            {loading?<Loader/>
            :<div className="main-content flex-grow-1 p-3 overflow-auto">
                <form action="">
                    <div className="row mb-3">
                        <div className="d-flex align-items-center justify-content-between sub-header-bx">
                            <div>
                                <h3 className="innr-title mb-2">Permission type</h3>
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
                                                Permission
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <div className="add-nw-bx">
                                <a href="javascript:void(0)" onClick={() => {
                                    setName('')
                                    setEditId(false)
                                }} className="add-nw-btn thm-btn rounded-3" data-bs-toggle="modal" data-bs-target="#permission-Name">
                                    <img src="/plus-icon.png" alt="" /> Add Permission Name
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row ">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="custom-frm-bx">
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                                className="form-control nw-form-select pe-5" placeholder="Search " />

                            <div className="search-item-bx">
                                <button className="search-item-btn"><FontAwesomeIcon icon={faSearch} /></button>
                            </div>
                        </div>
                        <div>
                            <div className="page-selector d-flex align-items-center">
                                <div className="custom-frm-bx">
                                    <select className="form-select custom-page-dropdown nw-custom-page ">
                                        {totalPage > 1 ?
                                            Array(totalPage)?.map(_, i => <option value={i}>{i}</option>)
                                            : <option value="1" selected>1</option>}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="new-mega-card">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="table-section">
                                <div className="table table-responsive mb-0">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>S.no.</th>
                                                <th>Permission Name</th>
                                                <th>Permission</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {permissions?.length > 0 &&
                                                permissions?.map((item, key) =>
                                                    <tr key={key}>
                                                        <td>{key + 1}</td>
                                                        <td>
                                                            {item?.name}
                                                        </td>
                                                        <td>
                                                            <span><NavLink onClick={() => sessionStorage.setItem('permission', JSON.stringify(item))} to={`/permission-check/${item?.name}/${item?._id}`}
                                                                className="admin-sub-dropdown"> <FontAwesomeIcon icon={faKey} /> Permission <small className="permission-title">{item?.totalUsed}</small></NavLink></span>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-centet gap-2">
                                                                <div class="dropdown">
                                                                    <a
                                                                        href="javascript:void(0)"
                                                                        class="grid-dots-btn"
                                                                        id="acticonMenu1"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <TbGridDots />
                                                                    </a>
                                                                    <ul
                                                                        class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                        aria-labelledby="acticonMenu1"
                                                                    >
                                                                        <li className="prescription-item">
                                                                            <button type="button" class="prescription-nav" onClick={() => {
                                                                                setName(item?.name)
                                                                                setEditId(item?._id)
                                                                            }} data-bs-toggle="modal" data-bs-target="#permission-Name">
                                                                                View/Edit
                                                                            </button>
                                                                        </li>

                                                                        <li className="prescription-item">
                                                                            <button onClick={() => deletePermission(item._id)} class=" prescription-nav" href="#">

                                                                                Delete
                                                                            </button>
                                                                        </li>
                                                                        {/* <li>
                                                                    <button type="button" onClick={() => {
                                                                        setName(item?.name)
                                                                        setEditId(item?._id)
                                                                    }} className="text-black" data-bs-toggle="modal" data-bs-target="#permission-Name"><FontAwesomeIcon icon={faPen} /></button></li>
                                                                <li><button onClick={() => deletePermission(item._id)} className="text-black"><FontAwesomeIcon icon={faTrash} /></button></li> */}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>)}
                                            {/* <tr>
                                                <td>01.</td>
                                                <td>
                                                    Full  access
                                                </td>
                                                <td>
                                                    <span><NavLink to="/permission-check" className="admin-sub-dropdown"> <FontAwesomeIcon icon={faKey} /> Permission</NavLink></span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-centet gap-2">
                                                        <div class="dropdown">
                                                            <a
                                                                href="javascript:void(0)"
                                                                class="grid-dots-btn"
                                                                id="acticonMenu1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <TbGridDots />
                                                            </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                aria-labelledby="acticonMenu1"
                                                            >
                                                                <li className="prescription-item">
                                                                    <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#permission-Name">
                                                                        View/Edit
                                                                    </a>
                                                                </li>

                                                                <li className="prescription-item">
                                                                    <a class=" prescription-nav" href="#">

                                                                        Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>02.</td>
                                                <td>
                                                    Full  access
                                                </td>
                                                <td>
                                                    <span><NavLink to="/permission-check" className="admin-sub-dropdown"> <FontAwesomeIcon icon={faKey} /> Permission <small className="permission-title">3</small> </NavLink> </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-centet gap-2">
                                                        <div class="dropdown">
                                                            <a
                                                                href="javascript:void(0)"
                                                                class="grid-dots-btn"
                                                                id="acticonMenu1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <TbGridDots />
                                                            </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                aria-labelledby="acticonMenu1"
                                                            >
                                                                <li className="prescription-item">
                                                                    <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#edit-Supplier">
                                                                        View/Edit
                                                                    </a>
                                                                </li>

                                                                <li className="prescription-item">
                                                                    <a class=" prescription-nav" href="#">

                                                                        Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>03.</td>
                                                <td>
                                                    Full  access
                                                </td>
                                                <td>
                                                    <span><NavLink to="/permission-check" className="admin-sub-dropdown"> <FontAwesomeIcon icon={faKey} /> Permission</NavLink></span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-centet gap-2">
                                                        <div class="dropdown">
                                                            <a
                                                                href="javascript:void(0)"
                                                                class="grid-dots-btn"
                                                                id="acticonMenu1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <TbGridDots />
                                                            </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                aria-labelledby="acticonMenu1"
                                                            >
                                                                <li className="prescription-item">
                                                                    <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#edit-Supplier">
                                                                        View/Edit
                                                                    </a>
                                                                </li>

                                                                <li className="prescription-item">
                                                                    <a class=" prescription-nav" href="#">

                                                                        Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>04.</td>
                                                <td>
                                                    Full  access
                                                </td>
                                                <td>
                                                    <span><NavLink to="/permission-check" className="admin-sub-dropdown"> <FontAwesomeIcon icon={faKey} /> Permission</NavLink></span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-centet gap-2">
                                                        <div class="dropdown">
                                                            <a
                                                                href="javascript:void(0)"
                                                                class="grid-dots-btn"
                                                                id="acticonMenu1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <TbGridDots />
                                                            </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                aria-labelledby="acticonMenu1"
                                                            >
                                                                <li className="prescription-item">
                                                                    <a class="prescription-nav" href="#" data-bs-toggle="modal" data-bs-target="#edit-Supplier">
                                                                        View/Edit
                                                                    </a>
                                                                </li>

                                                                <li className="prescription-item">
                                                                    <a class=" prescription-nav" href="#">

                                                                        Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td>05.</td>
                                                <td>
                                                    Full  access
                                                </td>
                                                <td>
                                                    <span><NavLink to="/permission-check" className="admin-sub-dropdown"> <FontAwesomeIcon icon={faKey} /> Permission</NavLink></span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-centet gap-2">
                                                        <div class="dropdown">
                                                            <a
                                                                href="javascript:void(0)"
                                                                class="grid-dots-btn"
                                                                id="acticonMenu1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <TbGridDots />
                                                            </a>
                                                            <ul
                                                                class="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                                aria-labelledby="acticonMenu1"
                                                            >
                                                                <li className="prescription-item">
                                                                    <a class="prescription-nav" data-bs-toggle="modal" data-bs-target="#permission-Name">
                                                                        View/Edit
                                                                    </a>
                                                                </li>

                                                                <li className="prescription-item">
                                                                    <a class=" prescription-nav" href="#">

                                                                        Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </div>

                                                </td>
                                            </tr> */}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}



            {/* <!-- Client Member Alert Popup Start --> */}
            {/* <!--  data-bs-toggle="modal" data-bs-target="#permission-Name" --> */}
            <div className="modal step-modal" id="permission-Name" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content rounded-0">
                        <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
                            <div>
                                <h6 className="lg_title mb-0">Add Permission Name</h6>
                            </div>
                            <div>
                                <button type="button" className="" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#00000040" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body px-4 pb-5">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <form onSubmit={addPharPermission}>
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Permission Name</label>
                                            <input type="text" required
                                                className="form-control nw-frm-select"
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter Role Name" value={name} />
                                        </div>

                                        <div className="mt-3">
                                            <button type="submit" className="nw-thm-btn w-100" data-bs-dismiss="modal"> Submit</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Meeting Alert Popup End --> */}

        </>
    )
}

export default Permission