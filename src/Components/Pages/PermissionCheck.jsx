import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { PiTagChevronFill } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { updateApiData } from "../../Services/api";
import { toast } from "react-toastify";

function PermissionCheck() {
    const userId = localStorage.getItem('userId')
    const permission = JSON.parse(sessionStorage.getItem('permission'))
    const { id: permissionId, name } = useParams();
    const [formData, setFormData] = useState({
        permissionId, pharId: userId,
        name: name,
        listView: false,
        add: false,
        edit: false,
        view: false,
        chat: false,
        patientList: false,
        details: false,

    })
    const navigate = useNavigate()
    const updatePharPermission = async (e) => {
        e.preventDefault()
        try {
            const response = await updateApiData(`pharmacy/permission`, formData);
            if (response.success) {
                sessionStorage.removeItem('permission')
                toast.success("Permission updated")
                navigate(-1)
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            console.error("Error creating lab:", err);
        }
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked,
        });
    };
    useEffect(() => {
        if (Object.keys(permission).length > 0) {
            setFormData(prev => ({
                ...prev,
                permissionId,
                ...permission
            }));
        }
    }, []);
    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <form action="">
                    <div className="row mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <h3 className="innr-title mb-2">Permission</h3>
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
                        </div>
                    </div>
                </form>
                <div className="new-mega-card">
                    <form onSubmit={updatePharPermission}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">

                                {/* Inventory Management */}
                                <div className="permission-check-main-bx my-4">
                                    <h4><PiTagChevronFill className="test-requst-icon" />Inventory Management</h4>

                                    <ul className="permision-check-list">
                                        <li>
                                            <div className="form-check custom-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="listView"
                                                    name="listView"
                                                    checked={formData.listView}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label" htmlFor="listView">
                                                    List View
                                                </label>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="form-check custom-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="add"
                                                    name="add"
                                                    checked={formData.add}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label" htmlFor="add">
                                                    Add
                                                </label>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="form-check custom-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="edit"
                                                    name="edit"
                                                    checked={formData.edit}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label" htmlFor="edit">
                                                    Edit
                                                </label>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="form-check custom-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="view"
                                                    name="view"
                                                    checked={formData.view}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label" htmlFor="view">
                                                    View
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Prescriptions Management */}
                                <div className="permission-check-main-bx my-4">
                                    <h4><PiTagChevronFill className="test-requst-icon" />Prescriptions Management</h4>

                                    <ul className="permision-check-list">

                                        <li>
                                            <div className="form-check custom-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="patientList"
                                                    name="patientList"
                                                    checked={formData.patientList}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label" htmlFor="patientList">
                                                    Patients List
                                                </label>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="form-check custom-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="details"
                                                    name="details"
                                                    checked={formData.details}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label" htmlFor="details">
                                                    Details
                                                </label>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                                {/* Chat Management */}
                                <div className="permission-check-main-bx">
                                    <h4><PiTagChevronFill className="test-requst-icon" />Chat Management</h4>

                                    <div className="form-check custom-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="chat"
                                            name="chat"
                                            checked={formData.chat}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="chat">
                                            Chat
                                        </label>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <button className="nw-filtr-thm-btn">Save</button>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default PermissionCheck