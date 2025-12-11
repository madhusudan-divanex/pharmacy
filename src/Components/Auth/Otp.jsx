import { NavLink } from "react-router-dom"

function Otp() {
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
                  <h3 className='text-grad'>Verify OTP</h3>
                  <p>We’ve sent a 6-digit code to your email. Please enter it below to reset your password.</p>
                </div>

                <form>
                  <div className="custom-frm-bx admin-frm-bx lab-login-frm-bx">
                    <input
                      type="number"
                      className="form-control nw-frm-select lab-login-frm-control"
                      placeholder="0"
                    />
                    <input
                      type="number"
                      className="form-control nw-frm-select lab-login-frm-control"
                      placeholder="0"
                    />
                    <input
                      type="number"
                      className="form-control nw-frm-select lab-login-frm-control"
                      placeholder="0"
                    />
                    <input
                      type="number"
                      className="form-control nw-frm-select lab-login-frm-control"
                      placeholder="0"
                    />
                    <input
                      type="number"
                      className="form-control nw-frm-select lab-login-frm-control"
                      placeholder="0"
                    />
                    <input
                      type="number"
                      className="form-control nw-frm-select lab-login-frm-control"
                      placeholder="0"
                    />
                  </div>

                  <div className='mt-5'>
                    <NavLink to="/set-password" className="nw-thm-btn py-3 w-100">
                      Verify
                    </NavLink>
                  </div>

                  <div className='text-center mt-5'>
                    <p className='do-account-title text-black'>Didn’t receive any code? </p>
                    <p className='do-account-title py-4'>Request new code in <span className="otp-timing">30s </span></p>
                    <a href="javascript:void(0)" className='lab-login-forgot-btn'>Resend</a>

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

export default Otp