import React, { useState } from "react";
import "./ScientificDay.scss";

function ScientificDay() {
  return (
    <>
      <div className="ScientificDay container">
        <div className="quickAccess">
          <div className="quickAccessTitles">
            <p className="hongKong title">Quick</p>
            <p className="subtitle">Access</p>
            <p className="subsubtitle">pages</p>
          </div>

          <div className="qaCTAs">
         
            <a href="/congresslectures" className="qaCTA">
            Lecture <br></br>& Workshops
            </a>
            <a href="/landing/dental" className="qaCTA">
              Dental<br></br>Olympics
            </a>
            <a href="/landing/lecture" className="qaCTA">
              Lecture<br></br>Contest
            </a>
            <div className="qaCTA">
            IADS soft skills<br></br>training
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScientificDay;
