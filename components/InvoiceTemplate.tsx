import React from "react";

interface InvoiceProps {
  invoiceNum: string;
  date: string;
  client_name: string;
  client_address: string;
  description: string;
  quantity: number;
  rate: number;
  total: number;
  note: string;
}

const InvoiceTemplate: React.FC<InvoiceProps> = ({
  invoiceNum,
  date,
  client_name,
  client_address,
  description,
  quantity,
  rate,
  total,
  note,
}) => {
  return (
    <div className="pdf-container" style={{ maxWidth: "800px", margin: "20px auto", background: "#fff", border: "1px solid #ddd", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
      <div className="top-bar" style={{ width: "100%", height: "45px", background: "#1c66b1" }}></div>
      <div className="top-red-shape" style={{ width: "45%", height: "45px", backgroundColor: "#e32525", clipPath: "polygon(0 0, 25% 100%, 100% 100%, 100% 0)", marginLeft: "auto" }}></div>
      <div className="invoice-container" style={{ maxWidth: "800px", margin: "20px auto", background: "#fff", border: "1px solid #ddd", borderRadius: "10px", padding: "20px" }}>
        <div className="header" style={{ textAlign: "center", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px" }}>
          <div>

            {/* SVG Placeholder */}
            <svg
              version="1.1"
              viewBox="0 0 1228 1228"
              width="100"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(964,345)"
                d="m0 0 7 1 47 21 16 9 16 12 12 11 10 11 11 16 6 12 5 15 3 17v28l-6 24-7 19-10 19-10 16-12 17-12 14-9 11-20 20-5 6-8 7-21 21-8 7-25 20-2 3-1 8v97l-2 1-68 1-48 1h-34l-12 1-10 5-13 8-15 8-3 5-1 50-2 12-2 7-3 16-7 21-8 18-9 16-7 10-13 18-12 13-19 19-8 7-13 10-16 10-17 9-6 2h-6l-1-191-1-7h-51l1 186-1 7-9-1-16-7-11-7-11-9-15-15-10-11-15-22-12-21-10-23-12-36-6-28v-3l-17 3-37 8h-2l8 25 10 25 8 17 9 15 13 22 8 12 10 13 15 15 7 8 8 10 1 2-4-1-18-6-17-8-14-6-19-10-16-9-12-8-18-14-11-9-11-11-7-6-7-8-9-10-12-16-11-19-5-9h-38l-42-1-37-4-41-6-28-6-1-3 36-2 70-5 35-4 61-9 41-7 40-8 70-18 49-16 23-7 33-11 24-9 19-7 28-10 13-6 15-6 36-14 15-6 38-15 12-6 16-7 30-15 16-9 19-11 17-10 19-13 14-10 15-11 10-8 13-11 8-7 15-13 14-14 7-8 11-13 11-14 11-15 10-15 11-20 8-19 4-17 1-18-1-16-5-21-8-21-9-16-10-13-11-15z"
                fill="#1C66AF"
              />
              <path
                transform="translate(474,239)"
                d="m0 0 37 1 27 3 54 13 35 10 35 8 22 4 16 2 30 2h23l26-2 16-5 15-9 10-9h1v6l-8 15-11 12-9 7-14 8-14 6-22 6-23 5-30 3h-67l-7-1h-10l-7 8-6 11-9 13-9 12-12 19-11 15-10 15-13 18-6 8-10 13-14 18-12 16-12 15-11 14-8 10-11 13-7 9-12 13-7 8-43 43-8 7-13 11-16 12-13 8-11 5-8 1 1-5 12-15 10-13 14-19 10-15 15-22 13-21 17-28 15-26 9-16 24-48 13-29 7-17 12-29 10-28 6-20 1-8-7-3-21-4-7-1h-14l-24 4-16 5-16 7-16 10-16 13-8 6h-2l3-12 6-16 10-18 8-11 9-10 10-9 15-9 16-7 17-4 9-1z"
                fill="#1C67AF"
              />
              <path
                transform="translate(776,373)"
                d="m0 0h107l2 3 1 9 1 101v93l-1 12-6 7-6 4-15 12-34 24-18 12-19 12-24 14-11 4-4-1-1-62v-228l1-15z"
                fill="#E1282B"
              />
              <path
                transform="translate(594,534)"
                d="m0 0h116l4 1 1 4v28l-1 31-1 2-1 38-1 62-16 8-27 11-45 18-18 6-10 1-1-7-1-138v-64z"
                fill="#E1282B"
              />
              <path
                transform="translate(436,620)"
                d="m0 0h109l8 2 1 4v133l-4 4-10 6-23 8-78 26-10 3h-6l-2-6v-172l2-6 2-1z"
                fill="#E1282B"
              />
              <path
                transform="translate(788,841)"
                d="m0 0h100l18 1 4 2-3 15-9 25-13 25-10 15-9 12-11 13-9 10-19 19-11 9-13 10-22 15-17 11-22 12-26 12-21 9-5 1-1-4 6-8 13-16 10-15 12-21 14-27 13-29 10-25 6-18 6-27 5-24z"
                fill="#1D67AF"
              />
              <path
                transform="translate(918,76)"
                d="m0 0 2 2 4 16 9 44 2 4 9-1 29-9 20-6 12-3 3 1-12 16-13 17-7 9-10 11 2 4 14 11 14 10 12 9 18 13 2 4h-11l-36-3-11-1h-13v9l5 21 7 23 3 12 1 6-4-2-17-17-7-8-11-12-11-11-5 1-10 11-11 14-12 14-8 10h-3l1-18 2-10 3-36-63-2-10-1 5-5 12-9 13-9 17-12 10-9-1-5-8-11-26-34-3-4v-3l10 3 27 11 18 7 11 5h4l3-9 5-21 7-25 4-15z"
                fill="#1D67AF"
              />
              <path
                transform="translate(267,711)"
                d="m0 0h107l4 3 1 3v85l-1 15-6 4-19 5-38 8-23 5-21 3h-7l-2-6v-122l1-2z"
                fill="#E1282B"
              />
              <path
                transform="translate(596,373)"
                d="m0 0h18l18 2 15 4 16 7 11 7 7 8 5 13 1 10-3 12-6 11-11 13-11 12-13 13-11 9-10 9-11 9-11 8-3-1 5-12 7-16 5-12 3-13v-13l-3-5-6-5-9-3-14-2-33-1 2-6 10-13 12-18 11-18 7-8z"
                fill="#1D67AF"
              />
              <path
                transform="translate(577,125)"
                d="m0 0h14l13 3 14 8 6 5 6 8 6 12 3 13-1 11-4 13-6 11-9 10-14 8-12 3h-22l-11-4-11-7-9-11-8-16-1-3v-22l4-11 5-9 7-8 11-8 9-4z"
                fill="#1D67AF"
              />
              <path
                transform="translate(776,373)"
                d="m0 0h107l2 3 1 9 1 101v93h-1l-1-29-2-120-1-47-2-7-128-1v225l1 76h9l-2 2-10 2-1-1-1-62v-228l1-15z"
                fill="#DB727C"
              />
              <path
                transform="translate(594,534)"
                d="m0 0h116l4 1 1 4v28l-1 31-1 2-1 38-1 62-5 2 2-10 1-22-1-24 1-44 3-11-2-25v-14l1-7-1-2v-6l-113-1v61l1 145 10-2 4 1-11 3h-6l-1-7-1-138v-64z"
                fill="#D6616C"
              />
              <path
                transform="translate(436,620)"
                d="m0 0h109l8 2 1 4v133l-4 4-6 3v-2l5-5 1-29v-98l-3-9-14-1h-88l-18 1-2 5v174l7 2-3 2h-6l-2-6v-172l2-6 2-1z"
                fill="#DA717B"
              />
              <path
                transform="translate(267,711)"
                d="m0 0h107l4 3 1 3v85l-1 15-6 4-5 1v-2l7-3 2-74-1-14 1-9-4-6-11-1h-71l-23 3-1 2-1 16v57l1 42 1 6h18v1l-14 2h-7l-2-6v-122l1-2z"
                fill="#D45965"
              />
              <path
                transform="translate(776,373)"
                d="m0 0h107l2 3 1 9 1 101v93h-1l-1-29-2-120-1-47-2-7-70-1-34-1z"
                fill="#DA6E78"
              />
              <path
                transform="translate(533,620)"
                d="m0 0h12l8 2 1 4v133l-4 4-6 3v-2l5-5 1-29v-98l-3-9-14-1z"
                fill="#D55A66"
              />
              <path
                transform="translate(594,534)"
                d="m0 0 4 1-3 1v61h2l1 145 10-2 4 1-11 3h-6l-1-7-1-138v-64z"
                fill="#E28F97"
              />
              <path
                transform="translate(598,534)"
                d="m0 0h108l1 2h-110l-1 61h-1l-1-10v-51z"
                fill="#CE3E4C"
              />
              <path
                transform="translate(262,714)"
                d="m0 0h1v77h2l1 42 1 6h18v1l-14 2h-7l-2-6z"
                fill="#E8A7AD"
              />
              <path
                transform="translate(267,711)"
                d="m0 0h95l-1 2h-71l-23 3-1 2-1 16-1 57h-1v-79z"
                fill="#CF4351"
              />
              <path
                transform="translate(706,534)"
                d="m0 0 8 1 1 4v28l-1 31-2 2-1-5 1-8-2-18v-17l1-7-1-2v-6h-3z"
                fill="#D65E69"
              />
              <path
                transform="translate(885,550)"
                d="m0 0h1v41l-6 7-4 1 1-2h2l3-12 2-5-1-19 1-10z"
                fill="#CE3E4C"
              />
              <path
                transform="translate(362,711)"
                d="m0 0h12l4 3 1 3v18h-1l-1-14-5-7-10-1z"
                fill="#DC7983"
              />
              <path
                transform="translate(885,581)"
                d="m0 0h1v10l-6 7-4 1 1-2h2l3-12z"
                fill="#D14B58"
              />
              <path
                transform="translate(710,679)"
                d="m0 0h1v21l-5 2 2-10 1-12z"
                fill="#CF4452"
              />
              <path
                transform="translate(436,620)"
                d="m0 0h9v2l-18 1-2 5-3 1v-6l3-2z"
                fill="#DE7F88"
              />
            </svg>


          </div>
          <div className="text-content" style={{ textAlign: "left" }}>
            <h1 style={{ margin: 0, fontSize: "24px" }}>ABHYASA SEMICON TECHNOLOGIES</h1>
            <p style={{ margin: "5px 0", fontSize: "14px", color: "#555" }}>
              D.no 48-14-31/1, 2nd Floor, Akhila Arcade, Rama Talkies Road, Visakhapatnam,<br /> Andhra Pradesh, India
            </p>
            <p>Email: abhyasasemitech@gmail.com | Phone: +91-9438062982</p>
          </div>
        </div>

        <div className="details">
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td><strong>Invoice #:</strong> {invoiceNum}</td>
                <td><strong>Date:</strong> {date}</td>
              </tr>
              <tr>
                <td className="billed-to" style={{ wordWrap: "break-word" }}>
                  <strong>Billed To:</strong><br />
                  {client_name}<br />
                  {client_address}
                </td>
                <td>
                  <strong>Payment Method:</strong><br />Bank Transfer<br />Account: 50200099821683<br />IFSC: HDFC0006274<br />PAN: ACFFA5400P
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="items">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <thead>
              <tr>
                <th style={{ backgroundColor: "#f2f2f2", border: "1px solid #ddd", padding: "7px", textAlign: "left" }}>Description</th>
                <th style={{ backgroundColor: "#f2f2f2", border: "1px solid #ddd", padding: "7px", textAlign: "left" }}>Quantity</th>
                <th style={{ backgroundColor: "#f2f2f2", border: "1px solid #ddd", padding: "7px", textAlign: "left" }}>Unit Price</th>
                <th style={{ backgroundColor: "#f2f2f2", border: "1px solid #ddd", padding: "7px", textAlign: "left" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #ddd", padding: "7px" }}>{description}</td>
                <td style={{ border: "1px solid #ddd", padding: "7px" }}>{quantity}</td>
                <td style={{ border: "1px solid #ddd", padding: "7px" }}>&#8377; {rate}</td>
                <td style={{ border: "1px solid #ddd", padding: "7px" }}>&#8377; {total}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} style={{ textAlign: "right", padding: "7px" }}><strong>Subtotal:</strong></td>
                <td style={{ padding: "7px" }}>&#8377; {total}</td>
              </tr>
              <tr>
                <td colSpan={3} style={{ textAlign: "right", padding: "7px" }}><strong>Total:</strong></td>
                <td style={{ padding: "7px" }}>&#8377; {total}</td>
              </tr>
              <tr>
                <td colSpan={4} className="note" style={{ padding: "7px" }}><strong>Note:</strong> {note}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="footer" style={{ textAlign: "center", fontSize: "12px", color: "#777" }}>
          <p>
            Thank you for choosing Abhyasa Semicon Technologies for your VLSI training. We wish you success in your learning journey!
          </p>
        </div>
      </div>
      <div className="bottomblue" style={{ width: "100%", height: "25px", background: "#1c66b1" }}></div>
    </div>
  );
};

export default InvoiceTemplate;
