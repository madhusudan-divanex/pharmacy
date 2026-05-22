import { TbGridDots } from "react-icons/tb";
import { faCircleXmark, faDownload, faFilter, faSearch, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data, Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getSecureApiData } from "../../Services/api";
import Loader from "../Layouts/Loader";

function AuditLog() {
    const userId = localStorage.getItem("userId")
    const [history, setHistory] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0)
    const [activeHistory, setActiveHistory] = useState()
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const fetchHistory = async () => {
        try {
            setLoading(true)
            const res = await getSecureApiData(`api/comman/audit-log?page=${page}&search=${search}`);
            if (res.success) {
                setHistory(res.data)
                setTotalPages(res.pagination.totalPages)
            } else {
                toast.error(res.message)
            }
        } catch (err) {
            console.log(err)
            toast.error(err?.response?.data?.message);
        } finally {
            setLoading(false)
        }
    };
    useEffect(() => {
        fetchHistory();
    }, [page]);

    return (
        <>
            {loading ? <Loader />
                : <div className="main-content flex-grow-1 p-3 overflow-auto">
                    <div className="row ">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h3 className="innr-title mb-2 gradient-text">Audit Log History</h3>
                                <div className="admin-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb custom-breadcrumb">
                                            <li className="breadcrumb-item">
                                                <NavLink to="/" className="breadcrumb-link">
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Audit Log History
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='new-mega-card'>
                        <div className="row">
                            <div className="d-flex align-items-center justify-content-between mb-3 gap-2 nw-box mobile-hospital-box">
                                <div className="d-flex align-items-center gap-2 ">
                                    <div className="custom-frm-bx mb-0">
                                        <input
                                            type="text"
                                            className="form-control  search-table-frm pe-5"
                                            placeholder="Enter staff id"
                                            value={search}
                                            onChange={(e) => {
                                                setPage(1);
                                                setSearch(e.target.value);
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    fetchHistory();
                                                }
                                            }}
                                        />
                                        <div className="adm-search-bx">
                                            <button className="text-secondary" onClick={fetchHistory}>
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                {totalPages > 1 && <div className="row">
                                    <div className="d-flex align-items-center justify-content-between mb-3 gap-2 nw-box ">

                                        {<div className="page-selector">
                                            <div className="filters">
                                                <select className="form-select custom-page-dropdown nw-custom-page "
                                                    value={page}
                                                    onChange={(e) => setPage(e.target.value)}>
                                                    {Array.from({ length: totalPages }, (_, i) => (
                                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>}
                                    </div>
                                </div>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="table-section">
                                    <div className="table table-responsive mb-0">
                                        <table className="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>User Name</th>
                                                    <th>Note</th>
                                                    <th>Description</th>
                                                    <th>Date & Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {history?.length === 0 ? (
                                                    <tr>
                                                        <td colSpan="8" className="text-center">
                                                            No history found
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    history?.map((item, index) => (
                                                        <tr key={item._id}>
                                                            <td>{(page - 1) * limit + index + 1}.</td>
                                                            <td>{item?.actorId?._id == userId ? "Self" : item?.actorId?.name || "-"}</td>
                                                            <td>{item?.shortDesc}</td>
                                                            <td>{item?.description}</td>
                                                            <td>{new Date(item?.createdAt)?.toLocaleString('en-GB')}
                                                            </td>
                                                            {/* <td>
                                                                {item?.actorId?._id !== userId ? <Link to={item?.actorId?.role === "doctor" ?
                                                                    `/doctor-view/${item?.actorId?._id}` :
                                                                    `/staff-info-view/${item?.actorId?.nh12}`} className="nw-thm-btn">View</Link>
                                                                    : <span className="text-muted">N/A</span>}
                                                            </td> */}
                                                        </tr>
                                                    ))
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )
}

export default AuditLog