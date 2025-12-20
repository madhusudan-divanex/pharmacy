import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleXmark,
  faDownload,
  faFilePdf,
  faPen,
  faShareNodes
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSecureApiData } from "../../Services/api";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import { fetchUserDetail, fetchUserProfile } from "../../redux/feature/userSlice";
import base_url from "../../baseUrl";
import { QRCodeCanvas } from "qrcode.react";

function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userId = localStorage.getItem("userId")
  const { profiles, pharPerson, pharAddress, pharImg,
    rating, avgRating, pharLicense, isRequest } = useSelector(state => state.user)
  const [message, setMessage] = useState('')

  
  useEffect(() => {
    dispatch(fetchUserProfile())
    dispatch(fetchUserDetail())
  }, [dispatch])
  const handleDownload = async (filePath) => {
    if (!filePath) return;

    const fileUrl = `${base_url}/${filePath}`;
    const fileName = filePath.split("\\").pop().split("-").pop();

    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName; // forces download
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  const sendEditRequest = async (e) => {
    e.preventDefault()
    const data = { labId: userId, message }
    try {
      const response = await securePostData(`lab/edit-request`, data);
      if (response.success) {
        setMessage('')
        toast.success("You request was sent!")
      } else {
        toast.error(response.message)
      }
    } catch (err) {
      console.error("Error creating lab:", err);
    }
  }
  const cardRef = useRef(null);

  const handleCardDownload = (e) => {
    e.preventDefault()
    if (cardRef.current) {
      html2canvas(cardRef.current, {
        useCORS: true,
        allowTaint: true,
        logging: false,
        scale: 2, // better quality
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = `${profiles?.name || "pharmacy-card"}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  return (
    <>
      <div className="main-content flex-grow-1 p-3 overflow-auto">
        <div className="row mb-3">
          <div className="d-flex align-items-center justify-content-between sub-header-bx">
            <div>
              <h3 className="innr-title mb-2">Profile</h3>
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
                      Profile
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            {isRequest && <div className="add-nw-bx">
              <a href="javascript:void(0)" className="add-nw-btn nw-thm-btn " data-bs-toggle="modal" data-bs-target="#edit-Request" >
                Send Profile Edit Request
              </a>
            </div>}
          </div>
        </div>

        <div className="lab-chart-crd">
          <div className="row">
            <div className="col-lg-12">
              <div className="lab-tp-title patient-bio-tab d-flex align-items-center justify-content-between">
                <div>
                  <h6 className="mb-0 text-black fz-22 fw-600">Profile</h6>
                </div>
                {profiles?.allowEdit && <div className="d-flex align-items-center gap-2">
                  <div className="approve-title">
                    <h5><span className="approve-right-check"><FontAwesomeIcon icon={faCheck} /></span> Approved Edit Request</h5>
                  </div>
                  <NavLink to="/edit-profile" type="submit" className="nw-filtr-thm-btn">Edit</NavLink>
                </div>}
              </div>

              <div className="patient-bio-tab">
                <ul className="nav nav-tabs gap-3" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      Pharmacy Profile
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Pharmacy Images
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
                      Pharmacy Address
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="upload-tab"
                      data-bs-toggle="tab"
                      href="#upload"
                      role="tab"
                    >
                      Upload License
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="person-tab"
                      data-bs-toggle="tab"
                      href="#person"
                      role="tab"
                    >
                      Contact Person
                    </a>
                  </li>
                </ul>

                <div className="tab-content mt-4" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                  >
                    <div className="sub-tab-brd">
                      <form action="">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="d-flex align-items-center justify-content-between laboratory-card">
                              <div className="lab-profile-mega-bx">
                                <div className="lab-profile-avatr-bx position-relative">
                                  <img src={profiles?.logo ?
                                    `${base_url}/${profiles?.logo}` : "/pharmacy-logo.png"} alt="" className="border" />
                                  <div className="lab-profile-edit-avatr">
                                    <a href="javascript:void(0)" className="edit-btn cursor-pointer">
                                      <FontAwesomeIcon icon={faPen} />
                                    </a>
                                  </div>
                                  {/* <input
                                    type="file"
                                    accept=""
                                    className="lab-profile-file-input"
                                  /> */}
                                </div>

                                <div>
                                  <h4 className="lg_title ">{profiles?.name}</h4>
                                  <p className="first_para">ID : #{profiles?.customId}</p>
                                </div>



                              </div>


                              <div className="d-flex align-items-center justify-content-center gap-2 carding-bx">
                                <div className="add-patients-clients" ref={cardRef}>

                                  <div className="chip-card"></div>
                                  <img src="/pharmacy-card.png" alt="" />
                                  <div className="patient-card-details">
                                    <h4>{profiles?.name?.length > 14 ? profiles?.name?.slice(0, 14) + '..'
                                      : profiles?.name}</h4>
                                    <p>Pharmacy ID</p>
                                    <h6>{profiles?.customId}</h6>
                                  </div>
                                  <QRCodeCanvas
                                    // value={String(userId)}
                                    value="PAT-0001"
                                    size={256}
                                    className="qr-code"
                                    style={{ height: "auto", maxWidth: "100%", width: "20%" }}
                                  />



                                </div>
                                

                                {/* <div className="d-flex flex-column gap-2 card-down-bx">
                                                        <button className="patient-crd-down-btn"><FontAwesomeIcon icon={faDownload} /></button>

                                                        <button className="patient-crd-down-btn crd-share-btn"><FontAwesomeIcon icon={faShareNodes} /></button>
                                                    </div> */}
                                <div className="d-flex flex-column gap-2 card-down-bx">
                                  <button className="pharmacy-card-tbn" onClick={handleCardDownload}><FontAwesomeIcon icon={faDownload} /></button>

                                  <button className="pharmacy-card-tbn crd-share-btn"><FontAwesomeIcon icon={faShareNodes} /></button>
                                </div>
                              </div>
                            </div>


                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Pharmacy Name</label>
                              <input
                                type="text"
                                className="form-control patient-frm-control"
                                placeholder=""
                                value={profiles?.name}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Mobile Number</label>
                              <input
                                type="number"
                                className="form-control patient-frm-control"
                                placeholder=""
                                value={profiles?.contactNumber}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Email Number</label>
                              <input
                                type="email"
                                className="form-control patient-frm-control"
                                placeholder=""
                                value={profiles?.email}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Gst Number</label>
                              <input
                                type="text"
                                className="form-control patient-frm-control"
                                placeholder=""
                                value={profiles?.gstNumber}
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="custom-frm-bx">
                              <label htmlFor="">About</label>
                              <textarea name="" id=""
                                className="form-control patient-frm-control"
                                value={profiles?.about}></textarea>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="profile" role="tabpanel">
                    <div className="sub-tab-brd lab-thumb-bx">
                      <div className="row mb-3">
                        <h5 className="text-black fw-700">Thumbnail image</h5>
                        <div className="col-lg-4">
                          <div className="lab-images-bx">
                            <img src={pharImg?.thumbnail ? `${base_url}/${pharImg?.thumbnail}` : "/thumb.png"} alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <h5 className="text-black fw-700">Image</h5>
                        {pharImg?.pharImg?.length > 0 &&
                          pharImg?.pharImg?.map((item, key) =>
                            <div className="col-lg-4 mb-3" key={key}>
                              <div className="lab-multi-image-bx">
                                <img src={item ? `${base_url}/${item}` : "/pic-first.png"} alt="" />
                              </div>
                            </div>)}
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="contact" role="tabpanel">
                    <div className="sub-tab-brd ">
                      <form action="">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Full Address</label>
                              <input
                                type="text"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharAddress?.fullAddress}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Country</label>
                              <input
                                type="text"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharAddress?.country}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">State</label>
                              <input
                                type="text"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharAddress?.state}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">City</label>
                              <input
                                type="text"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharAddress?.city}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Pin Code</label>
                              <input
                                type="text"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharAddress?.pinCode}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="upload" role="tabpanel">

                    <div className="sub-tab-brd lab-thumb-bx">
                      <form action="">
                        <div className="row">
                          <h5>License Details</h5>
                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Lab License Number</label>
                              <input
                                type="text"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharLicense?.pharLicenseNumber}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Lab License  Documents</label>
                              <div className="form-control lablcense-frm-control">
                                <div className="lablcense-bx">
                                  <div>
                                    <h6 ><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} />  {pharLicense?.licenseFile?.split("\\").pop()?.split("-").pop()}</h6>
                                  </div>
                                  <div className="">
                                    <button type="button" className="pdf-download-tbn" onClick={() => handleDownload(pharLicense?.licenseFile)}>Download</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <h5>Certified  </h5>
                          </div>


                          {pharLicense?.pharCert?.map((item, key) =>
                            <>
                              <div className="col-lg-6">
                                <div className="custom-frm-bx">
                                  <label htmlFor="">Certified Name</label>
                                  <input
                                    type="email"
                                    className="form-control nw-frm-select"
                                    placeholder=""
                                    value={item?.certName}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="custom-frm-bx">
                                  <label htmlFor="">Certified Documents</label>
                                  <div className="form-control lablcense-frm-control">
                                    <div className="lablcense-bx">
                                      <div>
                                        <h6 ><FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} />  {item?.certFile?.split("\\").pop()?.split("-").pop()}</h6>
                                      </div>
                                      <div className="">
                                        <button type="button" className="pdf-download-tbn" onClick={() => handleDownload(item?.certFile)}>Download</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>)}
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="person" role="tabpanel">
                    <div className="sub-tab-brd">
                      <form action="">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="lab-profile-mega-bx">
                              <div className="lab-profile-avatr-bx lab-contact-prson position-relative rounded-circle">
                                <img src={pharPerson?.photo ?
                                  `${base_url}/${pharPerson?.photo}` : "/user-avatar.png"} alt="" className="rounded-cricle" />
                                <div className="lab-profile-edit-avatr">
                                  <a href="javascript:void(0)" className="edit-btn cursor-pointer">
                                    <FontAwesomeIcon icon={faPen} />
                                  </a>
                                </div>
                                {/* <input
                                  type="file"
                                  accept=""
                                  className="lab-profile-file-input"
                                /> */}
                              </div>

                              <div>
                                <h4 className="lg_title ">{pharPerson?.name}</h4>
                              </div>



                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Name</label>
                              <input
                                type="text"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharPerson?.name}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Mobile Number</label>
                              <input
                                type="number"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharPerson?.contactNumber}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Email Number</label>
                              <input
                                type="email"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharPerson?.email}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="custom-frm-bx">
                              <label htmlFor="">Gender</label>
                              <input
                                type="text"
                                className="form-control nw-frm-select"
                                placeholder=""
                                value={pharPerson?.gender}
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Payment Status Popup Start  */}
      {/* data-bs-toggle="modal" data-bs-target="#edit-Request" */}
      <div className="modal step-modal" id="edit-Request" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content rounded-5">
            <div className="d-flex align-items-center justify-content-between popup-nw-brd px-4 py-3">
              <div>
                <h6 className="lg_title mb-0">Edit Request from Admin</h6>
              </div>
              <div>
                <button type="button" className="fz-18" data-bs-dismiss="modal" aria-label="Close" style={{ color: "#00000040" }}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>
            </div>
            <div className="modal-body px-4">
              <div className="row ">
                <form onSubmit={sendEditRequest} className="col-lg-12">
                  <div className="edit-request-bx">
                    <div className="float-left">
                      <img src="/edit-reqest.png" alt="" />
                    </div>
                    <div className="float-right">
                      <p>You can edit your profile when you click on the request button. The edit option will appear after your request is approved. After making changes, click on save and you will have to wait for approval
                      </p>
                    </div>
                  </div>

                  <div className="custom-frm-bx">
                    <label htmlFor="">Note</label>
                    <textarea name="" id="" className="form-control" value={message} required onChange={(e) => setMessage(e.target.value)} ></textarea>

                  </div>

                  <div>
                    <button type="submit" data-bs-dismiss="modal" onClick={() => navigate("/approve-profile")} aria-label="Close" className="nw-thm-btn w-100" > Send Edit Request </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Payment Status Popup End */}

    </>
  )
}

export default Profile