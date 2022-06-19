import React, { useRef, useState } from "react";
import "./RefundPolicy.scss";




function RefundPolicy() {





  const hideModal = () => {
      window.location.href = "/";
  }
  return (
    <>
      <div className="refFormPage">


        <div className="regFormTitles container">
          <p className="regFormTitle">
            <span>Refund</span>
          </p>
          <p className="regFormSub hongKong">Policy</p>
        </div>
        <div className="regForm container">
        
          <br></br>
          <br></br>
          <br></br>

        <p style={{textAlign: 'center'}}>Check out our <a target={'_blank'} href="https://drive.google.com/file/d/1r47Ov9aukpNQ79dVTaqJ2NG75ZsBAv13/view?usp=sharing">refund policy</a></p>
      
        </div>
      </div>
    </>
  );
}

export default RefundPolicy;
