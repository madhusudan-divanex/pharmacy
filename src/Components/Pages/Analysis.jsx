
function Analysis() {
  return (
    <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row mb-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3 className="innr-title mb-2 gradient-text">Analysis</h3>
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
                                            Analysis
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='new-mega-card'>
                   <form action="">
                    <div className="row">
                        <div className="col-lg-10 col-md-6 col-sm-12">
                              <div class="custom-frm-bx">
                                                        <label>Select Medicine </label>
                                                        <div class="select-wrapper">
                                                            <select class="form-select custom-select">
                                                            <option>Select Medicine </option>
                                                            </select>
                                                        </div>
                                                        </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 d-flex align-items-center justify-content-end">
                            <div>
                                <button className="nw-thm-btn sub-nw-brd-tbn ">Search</button>
                            </div>
                        </div>
                    </div>
                   </form>
                </div>


            </div>



        </>
  )
}

export default Analysis