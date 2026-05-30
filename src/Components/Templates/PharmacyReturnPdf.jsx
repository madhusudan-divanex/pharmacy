import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { getApiData } from "../../Services/api";
import base_url from "../../baseUrl";
import { calculateAge } from "../../Services/globalFunction";
import './invoice.css'
const PharmacyReturnPdf = ({ sellId, pdfLoading, endLoading }) => {
  const { id } = useParams()
  const [ptData, setPtData] = useState()
  const [orgData, setOrgData] = useState()
  const [sellData, setSellData] = useState()
  const [vital, setVitals] = useState()
  async function fetchSellData() {
    // if (!sellId) {
    //   return
    // }
    try {
      const res = await getApiData(`api/comman/pharmacy-return/${sellId || id}`)

      if (res.success) {
        setSellData(res.sellData)
        setOrgData(res?.orgData)
        setPtData(res.patientData)
      } else {
        toast.error(res.message)
      }
    } catch (error) {

    }
  }
  useEffect(() => {
    fetchSellData()
  }, [sellId])
  const invoiceRef = useRef()
  const handleDownload = () => {
    try {

      const element = invoiceRef.current;
      document.body.classList.add("hide-buttons");
      const opt = {
        margin: 0,
        filename: `Pharmacy-return-${sellData?.customId || sellData?._id?.slice(-6)}.pdf`,
        html2canvas: { scale: 2, useCORS: true, allowTaint: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
      };

      html2pdf().from(element).set(opt).save().then(() => {
        document.body.classList.remove("hide-buttons");
      });
    } catch (error) {

    } finally {
      if (pdfLoading) endLoading();
      setSellData({});

    }
  };
  useEffect(() => {
    if (ptData && sellData && pdfLoading) {
      const timer = setTimeout(() => {
        handleDownload();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [ptData, sellData, pdfLoading]);
  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  return (
    <div className="ds-page" ref={invoiceRef}>
      <div className="ds-card">
        <div className="ds-watermark-wrap">
        </div>

        {/* HEADER */}
        <div className="ds-header d-flex justify-content-between align-items-start">
          <div className="d-flex align-items-start gap-3">
            <div className="ds-logo">
              <img src={orgData?.logo ?
                `${base_url}/${orgData?.logo}` : "/logo.png"} alt="" />
            </div>
            <div>
              <div className="ds-header-title">Pharmacy Return</div>
              <div className="ds-header-sub">{orgData?.name}</div>
              <div className="ds-header-meta">
                {orgData?.nh12} <br />
                {orgData?.address}
              </div>
            </div>
          </div>
          <div className="ds-header-right">
            <div className="ds-badge">NeoHealthCard Network</div>
            <p className="ds-header-system lh-base">
              Fully Automated · Ecosystem Connected
            </p>
            <p className="ds-header-meta my-0 lh-sm">{orgData?.email} · {orgData?.contactNumber}</p>
          </div>
        </div>

        {/* META STRIP */}
        <div className="ds-meta-strip">
          {[
            ["Pharmacy ID", orgData?.nh12],
            ["PRESCRIPTION REF", sellData?.prescriptionId?.customId],
            ["RETURN DATE", new Date(sellData?.returnDate)?.toLocaleDateString('en-GB')],
            ["PHARMACIST", orgData?.contactPerson],
            ["STATUS", sellData?.refundStatus]
          ].map((item, i) => (
            <div key={i} className="ds-meta-block">
              <div className="ds-meta-label">{item[0]}</div>
              <div className={`ds-meta-value fz-12 ${i === 4 ? "text-teal" : ""}`}>
                {item[1]}
              </div>
            </div>
          ))}
        </div>

        {/* PATIENT */}
        <div className="ds-patient-section">
          <div className="flex-fill">
            <div className="ds-patient-title">Patient</div>
            <div className="ds-patient-name">{ptData?.name}</div>
            <div className="ds-patient-grid">
              <div>
                <h6 className="ds-detail-key mb-0">Age / Sex</h6>
                <span className="ds-detail-summary">{calculateAge(ptData?.dob, sellData?.createdAt)} / {ptData?.gender || '-'}</span>
              </div>
              <div>
                <h6 className="ds-detail-key mb-0">Email Address</h6>
                <span className="ds-detail-summary">{ptData?.email}</span>
              </div>
              <div>
                <h6 className="ds-detail-key mb-0">Patient ID</h6>
                <span className="ds-detail-summary ds-mono">{sellData?.patientId?.nh12}</span>
              </div>

              <div>
                <h6 className="ds-detail-key mb-0">DOB</h6>
                <span className="ds-detail-summary">{ptData?.dob ? new Date(ptData.dob).toLocaleDateString("en-GB") : "—"}</span>
              </div>
              <div>
                <h6 className="ds-detail-key mb-0">Address</h6>
                <span className="ds-detail-summary">{ptData?.address}</span>
              </div>
              <div>
                <h6 className="ds-detail-key mb-0">Pharmacy</h6>
                <span className="ds-detail-summary">{orgData?.name}</span>
              </div>

              <div>
                <h6 className="ds-detail-key mb-0">Blood</h6>
                <span className="ds-detail-summary">{ptData?.bloodGroup}</span>
              </div>
              <div>
                <h6 className="ds-detail-key mb-0">Contact no</h6>
                <span className="ds-detail-summary">{ptData?.contactNumber}</span>
              </div>
              <div></div>
            </div>
          </div>

          {/* QR */}
          <div className="ds-qr-col">
            <div className="ds-qr-box">
              <QRCodeCanvas
                value={`https://www.neohealthcard.com/pharmacy-return/${sellData?.customId}`}
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              />
            </div>
            <p className="ds-qr-label">Scan to verify</p>
            <p className="mb-0">
              <a href="javascript:void(0)" className="ds-qr-link">verify.neohealthcard.in</a>
            </p>
          </div>
        </div>

        {/* TABLE */}
        <div className="ds-medicines-section">
          <div className="ds-table-title">ITEMS RETURNED</div>
          <table className="ds-table">
            <thead className="ds-thead">
              <tr>
                <th className="ds-th-left" style={{ textWrap: "nowrap" }}>MEDICINE</th>
                <th className="ds-th-left" style={{ textWrap: "nowrap" }}>QTY PURCHASED</th>
                <th className="ds-th-left" style={{ textWrap: "nowrap" }}>QTY RETURNED</th>
                <th className="ds-th-left" style={{ textWrap: "nowrap" }}>REASON FOR RETURN</th>
                <th className="ds-th-left" style={{ textWrap: "nowrap" }}>BATCH NO</th>
                <th className="ds-th-left" style={{ textWrap: "nowrap" }}>CONDITION</th>
                <th className="ds-th-left" style={{ textWrap: "nowrap" }}>REFUND AMOUNT</th>
              </tr>
            </thead>

            <tbody>
              {sellData?.returnProducts?.map((item, i) => (
                <tr key={i} className="ds-tr-border">
                  <td className="ds-td-left">{item?.inventoryId?.medicineName}</td>
                  <td className="ds-td-left">
                    {sellData?.products?.find(
                      p => p?.inventoryId?._id === item?.inventoryId?._id
                    )?.quantity || 0}
                  </td>
                  <td className="ds-td-left">{item?.quantity}</td>
                  <td className="ds-td-left">{item?.reason}</td>
                  <td className="ds-td-left">{item?.inventoryId?.batchNumber}</td>
                  <td className="ds-td-left">{item?.condition}</td>
                  <td className="ds-td-left">{item?.refundAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>


          <div className="ds-summary-wrap">
            <div className="ds-summary-box">
              <div className="ds-summary-row">
                <span className="ds-summary-label">
                  Total Refund Amount
                </span>
                <span>Rs. {
                  sellData?.returnProducts?.reduce(
                    (total, item) => total + (Number(item?.refundAmount) || 0),
                    0
                  )
                }</span>
              </div>
              <div className="ds-summary-row">
                <span>Refund Mode</span>
                <span>
                  <span>{sellData?.refundMode}</span>
                </span>
              </div>
              <div className="ds-summary-total">
                <span>Refund Status</span>
                <span>
                  {sellData?.refundStatus}
                </span>
              </div>

            </div>
          </div>

        </div>




        {/* POLICY */}
        <div className="ds-notes-section">
          <div className="ds-notes-summary">
            <p className="ds-detail-section-label-header">RETURN POLICY</p>
            <div className="ds-notes-box">
              <ol style={{ fontSize: 12, paddingLeft: "10px" }}>
                <li>Medicines accepted for return only if unopened, in original packaging, and within 30 days of purchase.</li>
                <li>Medicines dispensed for scheduled/controlled substances are non-returnable.</li>
                <li>Refund will be processed to original payment method within 3–5 working days.</li>
                <li>This return note must be presented for any future disputes.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* SIGNATURE */}
        <div className="hp-ds-sig-grid">
          <div className="ds-sig-cell">
            <div className="ds-sig-name">{orgData?.contactPerson}</div>
            <div className="ds-sig-sub">Pharmacist · {orgData?.name}</div>
          </div>
          <div className="ds-sig-cell-border">
            <div className="ds-sig-name">{sellData?.patientId?.name}</div>
            <div className="ds-sig-sub">Patient — Received Medicines</div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="ds-footer">
          <span>{orgData?.name}, {orgData?.address} · {orgData?.email} · {orgData?.contactNumber}</span>
          <span className="ds-tagline">Wishing you a speedy recovery</span>
        </div>

      </div>
    </div>
  );
};

export default PharmacyReturnPdf;