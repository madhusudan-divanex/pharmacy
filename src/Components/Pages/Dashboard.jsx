import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { getSecureApiData } from "../../Services/api";
import Loader from "../Layouts/Loader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);


const Dashboard = () => {
  // ---------------- BAR CHART ----------------
  const barData = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    datasets: [
      {
        label: "Stock Full",
        data: [500, 220, 560, 480, 590, 260, 60, 470, 5],
        backgroundColor: "#00B4B5",
        borderRadius: 0,
        barThickness: 20,
      },
      {
        label: "Stockout Risk",
        data: [0, 0, 0, 0, 0, 0, 60, 0, 0],
        backgroundColor: "#EBA352",
        borderRadius: 0,
        barThickness: 20,
      },
      {
        label: "Dead Stock",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 5],
        backgroundColor: "#D91313",
        borderRadius: 0,
        barThickness: 20,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false, // HEIGHT ENABLE
    plugins: {
      legend: {
        position: "top",
        labels: { usePointStyle: true, boxWidth: 8 },
      },
    },
    scales: {
      y: {
        border: { dash: [4, 4] },
        ticks: { stepSize: 100 },
      },
      x: {
        grid: { display: false },
      },
    },
  };


  // ---------------- DOUGHNUT CHART ----------------
  const doughnutData = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    datasets: [
      {
        label: "Inventory %",
        data: [20, 15, 8, 10, 10, 8, 30, 35, 3],
        backgroundColor: [
          "#68E256",
          "#56E2CF",
          "#5668E2",
          "#CF56E2",
          "#F1ABD7",
          "#E256AE",
          "#E28956",
          "#56E289",
          "#E2CF56",
        ],
        borderWidth: 2,
        cutout: "45%",
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false, // HEIGHT ENABLE
    plugins: {
      legend: {
        position: "right",
        labels: { usePointStyle: true, boxWidth: 10 },
      },
    },
  };
  const userId = localStorage.getItem('userId')
  const [inventoryValue, setInventoryValue] = useState(0)
  const [expiryCount, setExpiryCount] = useState(0)
  const [loading,setLoading] =useState(false)
  const pharDashboard = async () => {
    setLoading(true)
    try {
      const response = await getSecureApiData(`pharmacy/dashboard/${userId}`);
      if (response.success) {
        setExpiryCount(response.expiringSoonCount)
        setInventoryValue(response.inventoryValue)
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
    pharDashboard()
  }, [userId])

  return (
    <>
    {loading?
    <Loader/>
    :<div className="main-content flex-grow-1 p-3 overflow-auto">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
          <div className="new-mega-card">
            <div className="inventory-content">
              <div className="inventory-parent-bx">
                <div className="inventory-bx">
                  <img src="/box.svg" alt="" />
                </div>
                <h4>{inventoryValue}</h4>
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
              <p className="mt-2">Monthly Sales</p>
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
                <h4>59589</h4>
              </div>
              <p className="mt-2">Stock Turnover Ratio</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
          <div className="new-mega-card">
            <div className="inventory-content">
              <div className="inventory-parent-bx">
                <div className="inventory-bx">
                  <img src="/margin.svg" alt="" />
                </div>
                <h4>59589</h4>
              </div>
              <p className="mt-2">Gross Margin</p>
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
                <h4>{expiryCount}</h4>
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
                  <img src="/page.svg" alt="" />
                </div>
                <h4>56</h4>
              </div>
              <p className="mt-2">Schedule H1 Compliance</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-12 mb-3">
          <div className="new-mega-card">
            <div className="inventory-content">
              <div className="inventory-parent-bx">
                <div className="inventory-bx ">
                  <img src="/percentage.svg" alt="" />
                </div>
                <h4>35</h4>
              </div>
              <p className="mt-2">GST Compliance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-3">
          <div className="new-mega-card">
            <div>
              <h5 className="text-grad">Inventory Stock</h5>
            </div>
            <div style={{ height: "350px" }}>
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="new-mega-card">
            <div>
              <h5 className="text-grad">Inventory %</h5>
            </div>
            <div style={{ height: "350px" }}>
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12 mb-3">
          <div className="new-mega-card">
            <div className="admn-title mb-4 d-flex align-items-center justify-content-between flex-wrap">
              <div>
                <h5 className="text-grad">Supplier</h5>
              </div>
              <div className="d-flex align-items-center gap-2">
                <a href="javascript:void(0)" className="nw-thm-btn rounded-3">Add Supplier</a>
                <a href="javascript:void(0)" className="thm-btn rounded-3">View All </a>
              </div>
            </div>
            <div className="table-section">
              <div className="table table-responsive mb-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Supplier</th>
                      <th>Score</th>
                      <th>On-time delivery</th>
                      <th>Price</th>
                      <th>Quality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        9876543210
                      </td>

                      <td>
                        Jaipur
                      </td>

                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                      <td>4455</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>

                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        9876543210
                      </td>

                      <td>
                        Jaipur
                      </td>

                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                      <td>4455</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>

                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        9876543210
                      </td>

                      <td>
                        Jaipur
                      </td>

                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                      <td>4455</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>

                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        9876543210
                      </td>

                      <td>
                        Jaipur
                      </td>

                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                      <td>4455</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>

                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        9876543210
                      </td>

                      <td>
                        Jaipur
                      </td>

                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                      <td>4455</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <div className="new-mega-card nw-pharmacy-card">
            <div className="admn-title mb-4">
              <div>
                <h5 className="text-white">Best Supplier</h5>
              </div>
            </div>

            <div className="table-section pharmacy-nw-table">
              <div className="table table-responsive  mb-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Supplier</th>
                      <th>Total Quality</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>4455</td>
                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>4455</td>
                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>4455</td>
                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>4455</td>
                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div className="admin-table-bx">
                          <div className="admin-table-sub-bx">
                            <img src="/admin-tb-logo.png" alt="" />
                            <div className="admin-table-sub-details">
                              <h6>Eleanor Pena</h6>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>4455</td>
                      <td><span className="score-title"> <img src="/score.svg" alt="" /> 774</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="new-mega-card">
            <div className="admn-title mb-4 d-flex align-items-center justify-content-between">
              <div>
                <h5 className="text-grad mb-0">Margin Analysis</h5>
              </div>

              <div>
                <NavLink to="/inventory" className="thm-btn rounded-3">View All </NavLink>
              </div>
            </div>
            <div className="table-section ">
              <div className="table table-responsive mb-0">
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th>Medicine Name</th>
                      <th>MRP</th>
                      <th>Avg Margin</th>
                      <th>Low Margin</th>
                      <th>High Margin</th>

                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>OTC</td>

                      <td>454</td>
                      <td>22%</td>

                      <td >12%</td>
                      <td> 30%</td>
                    </tr>
                    <tr>
                      <td>OTC</td>

                      <td>454</td>
                      <td>22%</td>

                      <td >12%</td>
                      <td> 30%</td>
                    </tr>
                    <tr>
                      <td>OTC</td>

                      <td>454</td>
                      <td>22%</td>

                      <td >12%</td>
                      <td> 30%</td>
                    </tr>
                    <tr>
                      <td>OTC</td>

                      <td>454</td>
                      <td>22%</td>

                      <td >12%</td>
                      <td> 30%</td>
                    </tr>
                    <tr>
                      <td>OTC</td>

                      <td>454</td>
                      <td>22%</td>

                      <td >12%</td>
                      <td> 30%</td>
                    </tr>




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

export default Dashboard