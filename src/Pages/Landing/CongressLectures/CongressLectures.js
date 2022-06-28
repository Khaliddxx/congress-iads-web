import React, { useState } from "react";
import "./CongressLectures.scss";
import conglec1 from "../../../Assets/Images/conglec1.svg";
import conglec2 from "../../../Assets/Images/conglec2.svg";
import conglec3 from "../../../Assets/Images/conglec3.svg";

function CongressLectures() {
  return (
    <>
      <div className="CongressLectures container">
        <div className="CongressLecturestitles">
          <p className="CongressLecturestitles1 hongKong">Congress</p>
          <p className="CongressLecturestitles2">LECTURES</p>
          <p className="CongressLecturestitles3">
            Name of the hall | date here
          </p>
          <a className="CongressLecturestitlesCTA" href="/program">Jump to workshops</a>
        </div>

        <div className="CongressLecturesBody">
          <div className="CongressLecturesBodySec">
            <img className="CongressLecturesBodySecImg" src={conglec1} />

            <div className="CongressLecturesBodySecMain">
              <p className="CongressLecturesBodySecMain1">
                Peri-implant Diseases & Treatment modalities
              </p>
              <p className="CongressLecturesBodySecMain2">
                Peri-implant diseases were added to the classification of
                periodontal diseases by EFP in 2018, and current treatment
                modalities are still being investigated. While the essential
                treatment modality in peri-implant diseases is prevention, some
                new techniques such as lasers are used in studies with the
                emergence of diseases. In this lecture, current treatment
                modalities of peri-implant diseases will be presented in light
                of the latest classification of EFP.
              </p>
              <p className="CongressLecturesBodySecMain3">
                Assist. Prof. Hasan Gündoğar
              </p>
              <p className="CongressLecturesBodySecMain4">
                Dr. Gündoğar completed his degree at Ankara University in 2009
                and periodontology doctorate in 2014. He later studied
                periodontology and implantology at the universities of
                Heidelberg and Göttingen, Germany. He has more than 20 indexed
                publications and has been working as an Assistant Prof. at
                Gaziantep University since 2015 and a visiting lecturer at
                Kazakhstan Ahmet Yassawi University since 2021.
              </p>
            </div>
          </div>

          <div className="CongressLecturesBodySec">
            <img className="CongressLecturesBodySecImg" src={conglec2} />

            <div className="CongressLecturesBodySecMain">
              <p className="CongressLecturesBodySecMain1">
                use of Platelet rich plasma, fibrin and powder in oral &
                maxillofacial surgery
              </p>
              <p className="CongressLecturesBodySecMain2">
                Every year, methods are developed to optimize the healing
                process of postoperative wounds in various areas and methods are
                proposed to reduce the number of complications in the
                postoperative period. <br /> <br /> One of the ways to optimize
                the regeneration process is PRP therapy. PRP therapy is the name
                of a method based on the use of autologous platelet-rich plasma
                (PRP) for the treatment of various diseases, including skin
                wounds - acute, chronic and postoperative, especially with
                delayed regeneration.
                <br /> <br /> According to a number of authors, the use of PRP
                therapy is a cost-effective method of treatment and leads to a
                reduction in complications and treatment costs, positively
                affecting the quality of life of patients.
                <br /> <br /> In this lecture you will get to learn more about
                the treatment techniques and use of PRP in oral and
                maxillofacial surgery.
              </p>
              <p className="CongressLecturesBodySecMain3">
                Dr. Yuliya Menchisheva
              </p>
              <p className="CongressLecturesBodySecMain4">
                Dr. Menchisheva graduated from Kazakh National Medical
                University with a degree in General Medicine in 2012 and
                Maxillofacial Surgery in 2016. She has been focusing on
                optimization of the healing of postoperative wounds of soft
                tissues of the maxillofacial region, and currently works at the
                Department of Medicine, Kazakh National Medical University.
              </p>
            </div>
          </div>




          <div className="CongressLecturesBodySec">
            <img className="CongressLecturesBodySecImg" src={conglec3} />

            <div className="CongressLecturesBodySecMain">
              <p className="CongressLecturesBodySecMain1">
              The Importance of Magnification in Decision Making during Complex Root Canal Therapy
              </p>
              <p className="CongressLecturesBodySecMain2">
              In this presentation, we will highlight anatomical variations with specific added obstacles. Cases of broken instruments, fiber post removal will be managed as well as missed canals retreatments. The aim here is to underline the importance of visibility while dealing with such treatments that can’t be achieved without the help of microscopy.

              </p>
              <p className="CongressLecturesBodySecMain3">
              Dr. Marc Habib 
              </p>
              <p className="CongressLecturesBodySecMain4">
              DDS. MSc. Masters in Endodontics. Micro Endodontics <br></br>
Endodontic Department, Saint Joseph University - Beirut. LSE Treasurer .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CongressLectures;
