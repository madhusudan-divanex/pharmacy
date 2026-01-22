import { PiTagChevronFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateApiData } from "../../Services/api";
import { toast } from "react-toastify";

function PermissionCheck() {
    const userId = localStorage.getItem("userId");
    const storedPermission = JSON.parse(sessionStorage.getItem("permission")) || {};
    const { id: permissionId, name } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        permissionId,
        ownerId: userId,
        name,
        pharmacy: {
            listView: false,
            add: false,
            edit: false,
            view: false,
            patientList: false,
            details: false,
            chat: false,
        }
    });

    /* ✅ checkbox toggle */
    const handleChange = (key) => {
        setFormData(prev => ({
            ...prev,
            pharmacy: {
                ...prev.pharmacy,
                [key]: !prev.pharmacy[key]
            }
        }));
    };

    /* ✅ load existing permission */
    useEffect(() => {
        if (storedPermission?.pharmacy) {
            setFormData(prev => ({
                ...prev,
                permissionId,
                ownerId: userId,
                name,
                pharmacy: {
                    ...prev.pharmacy,
                    ...storedPermission.pharmacy
                }
            }));
        }
    }, []);

    /* ✅ update */
    const updatePharPermission = async (e) => {
        e.preventDefault();
        try {
            const response = await updateApiData("api/comman/permission", formData);
            if (response.success) {
                sessionStorage.removeItem("permission");
                toast.success("Permission updated");
                navigate(-1);
            } else {
                toast.error(response.message);
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">

                <div className="new-mega-card">
                    <form onSubmit={updatePharPermission}>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">

                                {/* Inventory */}
                                <div className="permission-check-main-bx my-4">
                                    <h4><PiTagChevronFill /> Inventory Management</h4>
                                    <ul className="permision-check-list">
                                        {["listView", "add", "edit", "view"].map(key => (
                                            <li key={key}>
                                                <div className="form-check custom-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        checked={formData.pharmacy[key]}
                                                        onChange={() => handleChange(key)}
                                                    />
                                                    <label className="form-check-label text-capitalize">
                                                        {key}
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Prescription */}
                                <div className="permission-check-main-bx my-4">
                                    <h4><PiTagChevronFill /> Prescriptions Management</h4>
                                    <ul className="permision-check-list">
                                        {["patientList", "details"].map(key => (
                                            <li key={key}>
                                                <div className="form-check custom-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        checked={formData.pharmacy[key]}
                                                        onChange={() => handleChange(key)}
                                                    />
                                                    <label className="form-check-label text-capitalize">
                                                        {key.replace(/([A-Z])/g, " $1")}
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Chat */}
                                <div className="permission-check-main-bx">
                                    <h4><PiTagChevronFill /> Chat Management</h4>
                                    <div className="form-check custom-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={formData.pharmacy.chat}
                                            onChange={() => handleChange("chat")}
                                        />
                                        <label className="form-check-label">Chat</label>
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
    );
}

export default PermissionCheck;
