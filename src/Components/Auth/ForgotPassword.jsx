import { NavLink } from "react-router-dom"

function ForgotPassword() {
  return (
    <>
    <section className="admin-login-section ">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 px-0 mb-sm-3 mb-lg-0">
            <div className="admin-pisture-bx">
              <img src="pharmacy-login-bnnr.jpg" alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center">
            <form action="">
                <div className="admin-frm-vendor-bx">
              <div className="admin-lg-title">
                <h4 className="mb-0"><a href="javascript:void(0)" className="dash-hp-title">
                <img src="/logo.png" alt="" />
              </a></h4>
              </div>

              <div className="admin-vendor-login">
                <div className="admin-vndr-login">
                  <h3 className="text-grad">Forgot Password</h3>
                  <p>Please enter email   address below</p>
                </div>

                <form>
                  <div className="custom-frm-bx admin-frm-bx">
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      className="form-control nw-frm-select"
                      placeholder="Enter Email Address"
                    />
                  </div>

                  <div className='mt-5'>
                    <NavLink to="/otp" className="nw-thm-btn py-3 w-100">
                      Submit
                    </NavLink>
                  </div>
                </form>
              </div>

            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ForgotPassword