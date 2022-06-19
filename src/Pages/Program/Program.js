import React from "react";
import "./Program.scss";
import congmad1 from "../../Assets/Images/Program/congmad1.svg";
import congmad2 from "../../Assets/Images/Program/congmad2.svg";
import congmad3 from "../../Assets/Images/Program/congmad3.png";

import conguni1 from "../../Assets/Images/Program/conguni1.png";
import conguni2 from "../../Assets/Images/Program/conguni2.svg";
import conguni3 from "../../Assets/Images/Program/conguni3.svg";

import congpost1 from "../../Assets/Images/Program/congpost1.svg";
import congpost2 from "../../Assets/Images/Program/congpost2.svg";
import congpost3 from "../../Assets/Images/Program/congpost3.svg";

function Program() {
  return (
    <>
      <div className="programPage container">
        <div className="programPageTitles titles1">
          <p className="hongKong title">Congress</p>
          <p className="subtitle">Program</p>
          <p className="subsubtitle">and genereal details</p>
          <div className="border1"></div>
        </div>

        <div className="quickAccess">
          <div className="quickAccessTitles">
            <p className="hongKong title">Quick</p>
            <p className="subtitle">Access</p>
            <p className="subsubtitle">pages</p>
          </div>

          <div className="qaCTAs">
           
            <a href="/scientific" target={"_blank"} className="qaCTA">
            Scientific<br></br>day
            </a>
            <a href="/landing/general" target={"_blank"} className="qaCTA">
              General<br></br>assembly
            </a>
            <a href="/landing/exchange" target={"_blank"} className="qaCTA">
              Exhcnage<br></br>fair
            </a>
            <div className="qaCTA">
              Opening ceremony<br></br>& gala dinner
            </div>
          </div>
        </div>
        <div className="programPageTitles titles2">
          <p className="hongKong title">Pre</p>
          <p className="subtitle">Congress</p>
          <p className="subsubtitle">Medeo</p>
          <div className="border1"></div>
        </div>

        <div className="txtImgs">
          <div className="imgs">
            <img src={congmad1} />
            <img src={congmad2} />
            <img src={congmad3} />
          </div>
          <p className="txts">
            The "Medeo" complex is located on the border of the city of Almaty
            at an altitude of 1691 meters above sea level. Beautiful views of
            the tops of the Zailiysky Ala Tau mountains, clean air, soft sun -
            Almaty residents of all ages and occupations love to spend their
            time here. Medeo got its name in honor of a nomad who lived here at
            the beginning of the twentieth century and founded an aul (village)
            in that area.
            <br></br>
            <br></br>
            “The health ladder” 842 legendary steps are well known to all
            residents of the city and its visiting guests. Not everyone can
            climb them "in one breath", but the fascinating view from the dam to
            the skating rink, its surroundings and enchanting mountain
            landscapes are worth the effort.
            <br></br>
            <br></br>
            The attraction of the southern capital, Almaty - the Medeo skating
            rink has world fame. Medeo is the highest sports complex in the
            world. This fabulous palace fits into the panorama of the gorge at
            an altitude of 1961 meters above sea level. The mild climate of the
            tract, the optimal level of solar radiation, low atmospheric
            pressure, calmness, pure mountain water, from which the ice of the
            skating rink is made, provided it with excellent quality and created
            excellent conditions for achieving high sports results. Over 120
            world records have been set here.
          </p>
        </div>

        <div className="programPageTitles titles3">
          <p className="hongKong title">The</p>
          <p className="subtitle">Congress</p>
          <p className="subsubtitle">Kazakh National Medical University</p>
          <div className="border1"></div>
        </div>

        <div className="txtImgs txtImgs2">
          <div className="imgs">
            <img src={conguni1} />
            <img src={conguni2} />
            <img src={conguni3} />
          </div>
          <p className="txts">
            KazNMU named after S.D. Asfendiyarov, well-known scientists and
            teachers of Kazakhstan, academicians of the National Academy of
            Sciences of the Republic of Kazakhstan, the Russian Academy of
            Medical Sciences, the Academy of Preventive Medicine of the Republic
            of Kazakhstan, International Academies, honored workers of science
            and education, honored doctors and pharmacists work.
            <br></br>
            <br></br>
            Today, there are 7 schools and faculties present: School of General
            Medicine, School of Pediatrics, School of Dentistry, School of
            Pharmacy, School of Public Health named after Kh. Dosmukhambetov,
            Faculty of International Medicine, Faculty of Internship and
            Residency. Since 2019, the Institute of Additional Professional
            Education has been functioning.
            <br></br>
            <br></br>
            The university also has cooperation agreements with universities of
            near and far abroad countries, including: Nagasaki University
            (Nagasaki, Japan), Asia-Pacific University (Beppo, Japan), Parkway
            College (Singapore); University of Perugia (Perugia, Italy),
            Transdanubian University (Krems, Austria); Kyrgyz State Medical
            Academy (Bishkek, Kyrgyz Republic), National Medical University. A.
            Bogomolets (Kyiv, Ukraine), National Pharmaceutical University
            (Kharkiv, Ukraine), Moscow Medical Academy. I. Sechenov (Moscow,
            Russia) and others.
          </p>
        </div>

        <div className="programPageTitles titles2">
          <p className="hongKong title">Post-</p>
          <p className="subtitle">Congress</p>
          <p className="subsubtitle">Kolsai lake</p>
          <div className="border1"></div>
        </div>

        <div className="txtImgs">
          <div className="imgs">
            <img src={congpost1} />
            <img src={congpost2} />
            <img src={congpost3} />
          </div>
          <p className="txts">
            Kolsai Lakes is a system of three alpine lakes in the northern Tien
            Shan, which is located in the national park of the same name in the
            Kegen region. The lakes are located 330 kilometers from the city of
            Almaty, which is about 5-4 hours away by car. The lakes are
            accessible to visitors all year round. The largest of the three is
            considered to be the middle one (Mynzhylgy), and the third is
            located close to the Kyrgyz border.
            <br></br>
            <br></br>
            Kolsai lakes are often called "Pearls of the Northern Tien Shan".
            They are surrounded by coniferous forest and are a popular place for
            recreation among residents and visitors of the city of Almaty. Rare
            species of plants and animals can be found on the territory of the
            protected park. For example, rainbow trout lives here.
            <br></br>
            <br></br>
            Each of the lakes is slightly different from the others, while
            maintaining the unique spirit of its natural ensemble. The Lake Saty
            is the first one to meet tourists. Its depth is 80 meters, and its
            length is about 400. The second lake is Mynzhigly, which is higher
            by half a kilometer, with a narrow winding path leading to it. It is
            the largest of the three brothers, and the most picturesque, located
            in the seclusion of alpine landscapes. Lake Upper Kolsai is the
            smallest and high-mountainous and charming with the proximity of
            sheer rocky peaks.
          </p>
        </div>

        <div className="programPageTitles titles2">
          <p className="hongKong title">Full Congress-</p>
          <p className="subtitle">schedule</p>
          <p className="subsubtitle">and genereal details</p>
          <div className="border1"></div>
        </div>

          <div style={{color: "#01838C"}} className="comingSoon hongKong">  Coming Soon </div>
      </div>
    </>
  );
}

export default Program;
