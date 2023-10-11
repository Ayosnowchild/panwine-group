import React from "react";
import "../Carting/carting.css";
// import { Link } from "react-router-dom";
function Carting() {
  return (
    <div>
      <div className="carting-1">
        <div className="carting-2">
          <p className="carting-3">Your Cart</p>
        </div>

        <div className="carting-4">
          <svg
            className="carting-5"
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.8951 17.0145H8.30855L9.24178 15.2027L24.7477 15.1759C25.2721 15.1759 25.7215 14.8189 25.8152 14.325L27.9625 2.86798C28.0187 2.5675 27.9345 2.25809 27.7285 2.02306C27.6266 1.90739 27.4997 1.81421 27.3563 1.74999C27.2129 1.68578 27.0566 1.65206 26.8982 1.65117L7.17244 1.58869L7.0039 0.833023C6.89778 0.35106 6.44209 0 5.92398 0H1.10177C0.809564 0 0.529324 0.110646 0.322702 0.307598C0.116079 0.504549 0 0.771673 0 1.0502C0 1.32874 0.116079 1.59586 0.322702 1.79281C0.529324 1.98976 0.809564 2.10041 1.10177 2.10041H5.03132L5.76792 5.43845L7.58132 13.8074L5.24668 17.4399C5.12544 17.5959 5.05242 17.7811 5.03587 17.9746C5.01932 18.1681 5.05991 18.3621 5.15305 18.5348C5.34032 18.8888 5.71798 19.1119 6.13622 19.1119H8.09631C7.67844 19.641 7.45274 20.2854 7.45335 20.9476C7.45335 22.6315 8.88909 24 10.6557 24C12.4222 24 13.858 22.6315 13.858 20.9476C13.858 20.2841 13.627 19.6385 13.215 19.1119H18.2432C17.8254 19.641 17.5997 20.2854 17.6003 20.9476C17.6003 22.6315 19.036 24 20.8026 24C22.5692 24 24.0049 22.6315 24.0049 20.9476C24.0049 20.2841 23.7739 19.6385 23.3619 19.1119H26.8982C27.5037 19.1119 28 18.6419 28 18.0617C27.9982 17.7835 27.881 17.5172 27.674 17.321C27.467 17.1248 27.187 17.0147 26.8951 17.0145ZM7.63126 3.65935L25.6029 3.71588L23.8426 13.1112L9.72556 13.135L7.63126 3.65935ZM10.6557 21.8877C10.1126 21.8877 9.66938 21.4652 9.66938 20.9476C9.66938 20.4299 10.1126 20.0074 10.6557 20.0074C11.1988 20.0074 11.642 20.4299 11.642 20.9476C11.642 21.1969 11.538 21.436 11.3531 21.6123C11.1681 21.7886 10.9172 21.8877 10.6557 21.8877ZM20.8026 21.8877C20.2595 21.8877 19.8163 21.4652 19.8163 20.9476C19.8163 20.4299 20.2595 20.0074 20.8026 20.0074C21.3457 20.0074 21.7889 20.4299 21.7889 20.9476C21.7889 21.1969 21.685 21.436 21.5 21.6123C21.315 21.7886 21.0642 21.8877 20.8026 21.8877Z"
              fill="#411530"
            />
          </svg>
          <svg
            className="carting-6"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="13" cy="13" r="12" stroke="#411530" />
            <path
              d="M8.38006 19V17.7273L12.3176 13.6477C12.738 13.2045 13.0846 12.8163 13.3573 12.483C13.6338 12.1458 13.8403 11.8258 13.9767 11.5227C14.113 11.2197 14.1812 10.8977 14.1812 10.5568C14.1812 10.1705 14.0903 9.83712 13.9085 9.55682C13.7267 9.27273 13.4785 9.05492 13.1642 8.90341C12.8498 8.74811 12.4956 8.67045 12.1017 8.67045C11.685 8.67045 11.3213 8.75568 11.0107 8.92614C10.7001 9.09659 10.4615 9.33712 10.2948 9.64773C10.1282 9.95833 10.0448 10.322 10.0448 10.7386H8.3687C8.3687 10.0303 8.53158 9.41098 8.85733 8.88068C9.18309 8.35038 9.63006 7.93939 10.1982 7.64773C10.7664 7.35227 11.4123 7.20455 12.1357 7.20455C12.8668 7.20455 13.5107 7.35038 14.0676 7.64205C14.6282 7.92992 15.0657 8.32386 15.3801 8.82386C15.6945 9.32008 15.8517 9.88068 15.8517 10.5057C15.8517 10.9375 15.7702 11.3598 15.6073 11.7727C15.4482 12.1856 15.1698 12.6458 14.7721 13.1534C14.3744 13.6572 13.8213 14.2689 13.113 14.9886L10.8005 17.4091V17.4943H16.0392V19H8.38006Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="carting-7">
        <p className="carting-8">Product</p>
        <div className="carting-9">
          <p className="carting-10">Price</p>
          <p className="carting-11">Quantity</p>
          <p className="carting-12">Total</p>
        </div>
      </div>
      <div className="carting-13">
        <div className="carting-14">
          <img src="./images/Rectangle 46.png" alt="ang" />
          <p className="carting-15">Amarone: Red Wine </p>
        </div>
        <div className="carting-15">
          <p className="carting-16">$1,200</p>
          <div className="carting-27">
            <svg
              className="carting-28"
              width="10"
              height="3"
              viewBox="0 0 10 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M9.51669 0.106533V2.68182H0.488281V0.106533H9.51669Z"
                fill="#411530"
              />
            </svg>

            <p className="carting-29">2</p>

            <svg
              className="carting-30"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M5.66016 13.7074V0.264204H8.33487V13.7074H5.66016ZM0.280895 8.31818V5.64347H13.7241V8.31818H0.280895Z"
                fill="#411530"
              />
            </svg>
          </div>
          <p className="carting-21">$2,400</p>
        </div>
      </div>
      <div className="carting-13">
        <div className="carting-14">
          <img src="./images/Rectangle 46.png" placeholder="ang" />
          <p className="carting-15">Amarone: Red Wine </p>
        </div>
        <div className="carting-15">
          <p className="carting-16">$1,200</p>
          <div className="carting-27">
            <svg
              className="carting-28"
              width="10"
              height="3"
              viewBox="0 0 10 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M9.51669 0.106533V2.68182H0.488281V0.106533H9.51669Z"
                fill="#411530"
              />
            </svg>

            <p className="carting-29">2</p>

            <svg
              className="carting-30"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M5.66016 13.7074V0.264204H8.33487V13.7074H5.66016ZM0.280895 8.31818V5.64347H13.7241V8.31818H0.280895Z"
                fill="#411530"
              />
            </svg>
          </div>
          <p className="carting-31">$1,200</p>
        </div>
      </div>
      <div className="carting-32">
        <div className="carting-33">
          <p>Delivery</p>
          <p>$200</p>
        </div>
        <div className="carting-34">
          <p>Grand Total</p>
          <p>$3,600</p>
        </div>
      </div>
      <button className="carting-35">Submit Order</button>
    </div>
  );
}

export default Carting;
