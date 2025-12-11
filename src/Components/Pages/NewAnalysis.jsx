import { faPen, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



function NewAnalysis() {
  return (
    <>
            <div className="main-content flex-grow-1 p-3 overflow-auto">
                <div className="row ">
                    <div className="d-flex align-items-center justify-content-between ">
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
                        <div className="col-lg-10 col-md-10 col-sm-12">
                              <div class="custom-frm-bx">
                                                        <label>Select Medicine </label>
                                                        <div class="select-wrapper">
                                                            <select class="form-select custom-select">
                                                            <option>Select Medicine </option>
                                                            </select>
                                                        </div>
                                                        </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 mt-auto">
                            <div className="custom-frm-bx">
                                <button className="nw-thm-btn sub-nw-brd-tbn ">Search</button>
                            </div>
                        </div>
                    </div>
                   </form>


                   <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="new-mega-card">
              <div className="inventory-content">
                <div className="inventory-parent-bx">
                  <div className="inventory-bx">
                    <img src="/box.svg" alt="" />
                  </div>
                  <h4>2423</h4>
                </div>
                <p className="mt-2">Total Inventory Value</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="new-mega-card">
              <div className="inventory-content">
                <div className="inventory-parent-bx">
                  <div className="inventory-bx">
                    <img src="/cash.svg" alt="" />
                  </div>
                  <h4>59589</h4>
                </div>
                <p className="mt-2">Total Sales</p>
              </div>
            </div>
          </div>

             <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="new-mega-card">
              <div className="inventory-content">
                <div className="inventory-parent-bx ">
                  <div className="inventory-bx alert-inventory-bx">
                    <img src="/alert.svg" alt="" />
                  </div>
                  <h4>8</h4>
                </div>
                <p className="mt-2">Expiring Soon (30 days)</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
            <div className="new-mega-card">
              <div className="inventory-content">
                <div className="inventory-parent-bx">
                  <div className="inventory-bx">
                    <img src="/chart.svg" alt="" />
                  </div>
                  <h4>8</h4>
                </div>
                <p className="mt-2">Total Stock</p>
              </div>
            </div>
          </div>

        

       

      

          
                    </div>


                        <div className="row">
                        <div className="d-flex align-items-center justify-content-between mb-3 nw-pharmacy-details">
                            <div>
                                <div className="d-flex align-items-center gap-2 nw-box">
                                    <div className="custom-frm-bx mb-0">
                                        <input
                                            type="email"
                                            className="form-control admin-table-search-frm search-table-frm pe-5"
                                            id="email"
                                            placeholder="Search"
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
                                            <label className="label">Medicine :</label>
                                            <select className="">
                                                <option>All</option>
                                                <option>Test 1</option>
                                                <option>Test 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="#" className="nw-thm-btn rounded-2">
                                            Filter
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="page-selector d-flex align-items-center mb-2 mb-md-0 gap-2">
                                
                                <div>
                                    <select className="form-select custom-page-dropdown nw-custom-page">
                                        <option value="1" selected>100</option>
                                        <option value="2">1</option>
                                        <option value="3">2</option>
                                    </select>
                                </div>



                            </div>


                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-section">
                                <div className="table table-responsive mb-0">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>S.no.</th>
                                                <th>Medicine Name</th>
                                                <th>Schedule</th>
                                                <th>Bar Code No</th>
                                                <th>MFG Date</th>
                                                <th>Exp Date</th>
                                                <th>Quantity/Stock</th>
                                                <th>MRP</th>
                                                <th>Avg Margin</th>
                                                <th>Low Margin</th>
                                                <th>High Margin</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td>1</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                     469D005
                                                </td>
                                                <td>
                                                    08/2024
                                                </td>

                                                <td>
                                                    08/2026
                                                </td>
                                                <td>
                                                    100/ <span className="stock-title">150</span>
                                                </td>
                                                <td>
                                                   $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>
                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a>
                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>2</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                     469D005
                                                </td>
                                                <td>
                                                    08/2024
                                                </td>

                                                <td>
                                                    <span className="reject-title">08/2026</span>
                                                </td>
                                                <td>
                                                    100/ <span className="stock-title">150</span>
                                                </td>
                                                <td>
                                                   $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>
                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a>
                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>3</td>

                                                <td>
                                                    Salbetol -2 (Salbutamol Tablets IP 2 mg)
                                                </td>

                                                <td> H1</td>
                                                <td>
                                                     469D005
                                                </td>
                                                <td>
                                                    08/2024
                                                </td>

                                                <td>
                                                    <span className="reject-title">08/2026</span>
                                                </td>
                                                <td>
                                                    100/ <span className="stock-title">150</span>
                                                </td>
                                                <td>
                                                   $20
                                                </td>
                                                <td>
                                                   22%
                                                </td>
                                                <td>
                                                   12%
                                                </td>
                                                <td>
                                                   30%
                                                </td>
                                                <td>
                                                   <div className="d-flex align-items-center gap-2">
                                                      <a href="javascript:void(0)" className="text-secondary" data-bs-toggle="modal" data-bs-target="#edit-Inventory"><FontAwesomeIcon icon={faPen}/></a>
                                                      <a href="javascript:void(0)" className="text-secondary"><FontAwesomeIcon icon={faTrash}/></a>
                                                   </div>
                                                </td>
                                            </tr>


                                         
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </>
  )
}

export default NewAnalysis