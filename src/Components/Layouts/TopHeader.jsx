import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import base_url from "../../baseUrl";

function TopHeader() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    let overlay = document.querySelector('.mobile-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.classList.add('mobile-overlay');
      document.body.appendChild(overlay);
    }

    const dashboard = document.querySelector('.dashboard-left-side');
    const menuBtn = document.querySelector('.tp-mobile-menu-btn');
    const closeBtns = document.querySelectorAll('.tp-mobile-close-btn, .mobile-overlay');

    const handleMenuClick = (e) => {
      e.preventDefault();
      if (window.innerWidth < 992) {
        dashboard.classList.add('mobile-show');
        overlay.classList.add('show');
      } else {
        dashboard.classList.toggle('hide-sidebar');
      }
    };

    const handleClose = (e) => {
      e.preventDefault();
      dashboard.classList.remove('mobile-show');
      overlay.classList.remove('show');
    };

    menuBtn?.addEventListener('click', handleMenuClick);
    closeBtns.forEach(btn => btn.addEventListener('click', handleClose));

    // Cleanup on unmount
    return () => {
      menuBtn?.removeEventListener('click', handleMenuClick);
      closeBtns.forEach(btn => btn.removeEventListener('click', handleClose));
    };
  }, []);
  const dispatch = useDispatch();

  const {
    profiles, isOwner, customId,
    pharPerson
  } = useSelector((state) => state.user);
  const {
    staffData, empAccess,
    professional, employment
  } = useSelector((state) => state.staff);
  return (
    <>
      <div className="tp-header-section d-flex align-items-center justify-content-between w-100 py-2 px-3">
        <div className="dash-vendr-header-left-bx">
          <a href="#" className="tp-mobile-menu-btn me-lg-0 me-sm-3" onClick={(e) => {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }}>
            {/* <FontAwesomeIcon icon={faBars} className="fa-lg" /> */}
            {/* <FontAwesomeIcon icon={faChevronLeft} className="fa-lg" /> */}
            <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} className="fa-lg" />
          </a>

          {/* <div className="top-header-icon tp-header-search-br ">
            <div className="d-flex align-items-center gap-2">
              <div className="custom-frm-bx mb-0 position-relative">
                <input
                  type="email"
                  className="form-control headr-search-table-frm pe-5"
                  id="email"
                  placeholder="Search"
                  required
                />
                <div className="tp-search-bx">
                  <button className="tp-search-btn">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="d-flex top-header-icon-sec align-items-center">
          <div className="tp-right-admin-bx d-flex align-items-center">
            <div className="position-relative">
              <NavLink to="/notification" className="tp-bell-icon">
                <FontAwesomeIcon icon={faBell} className="text-black" />
                <div className="bell-nw-icon-alrt">
                  <span className="bell-title">9</span>
                </div>
              </NavLink>
            </div>
            <div className="header-user dropdown tp-right-admin-details d-flex align-items-center">
              <a
                href="#"
                className="user-toggle d-flex align-items-center"
                id="userMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="admn-icon me-2">
                  <img src={isOwner ? `${base_url}/${profiles?.logo}` : `${base_url}/${staffData?.profileImage}`} alt="" />
                </div>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end user-dropdown sallr-drop-box p-0"
                aria-labelledby="userMenu"
              >
                <div className="profile-card-box gap-0">
                  <div className="profile-top-section">
                    <img
                      src={isOwner ? `${base_url}/${profiles?.logo}` : `${base_url}/${staffData?.profileImage}`}
                      alt="Profile"
                      className="profile-image"
                    />
                    <div className="profile-info">
                      <span className="profile-role">{isOwner ? 'Admin' : employment?.position}</span>
                      <h4 className="profile-name">{isOwner ? profiles?.name : staffData?.name}</h4>
                      <p className="profile-id">ID : {isOwner ? customId : staffData?._id?.slice(-10)}</p>
                    </div>
                  </div>
                  <div className="profile-logout-box">
                    <Link to='/login' onClick={() => localStorage.clear()} className=" btn btn-danger text-white">
                      <i className="fas fa-sign-out-alt"></i> Logout
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader