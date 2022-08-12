import React, { useState } from "react";
import "./Electoral.scss";

import president from "../../Assets/Images/Electoral/president.png";
import vp1 from "../../Assets/Images/Electoral/vp1.png";
import vp2 from "../../Assets/Images/Electoral/vp2.png";
import vp3 from "../../Assets/Images/Electoral/vp3.png";
import vp4 from "../../Assets/Images/Electoral/vp4.png";
import vp5 from "../../Assets/Images/Electoral/vp5.png";
import vp6 from "../../Assets/Images/Electoral/vp6.png";
import vp7 from "../../Assets/Images/Electoral/vp7.png";
import vp8 from "../../Assets/Images/Electoral/vp8.png";
import vp9 from "../../Assets/Images/Electoral/vp9.png";
import vp10 from "../../Assets/Images/Electoral/vp10.png";
import vp11 from "../../Assets/Images/Electoral/vp11.png";


import ra2 from "../../Assets/Images/Electoral/ra2.png";
import ra3 from "../../Assets/Images/Electoral/ra3.png";
import ra4 from "../../Assets/Images/Electoral/ra4.png";
import ra5 from "../../Assets/Images/Electoral/ra5.png";
import ra6 from "../../Assets/Images/Electoral/ra6.png";
import ra7 from "../../Assets/Images/Electoral/ra7.png";

import tcc1 from "../../Assets/Images/Electoral/tcc1.png";
import tcc3 from "../../Assets/Images/Electoral/tcc3.png";


import vc1 from "../../Assets/Images/Electoral/vc1.png";
import vc2 from "../../Assets/Images/Electoral/vc2.png";


import ph1 from "../../Assets/Images/Electoral/ph1.png";
import ph2 from "../../Assets/Images/Electoral/ph2.png";
import ph3 from "../../Assets/Images/Electoral/ph3.png";




import ab1 from "../../Assets/Images/Electoral/ab1.png";
import ab2 from "../../Assets/Images/Electoral/ab2.png";
import ab3 from "../../Assets/Images/Electoral/ab3.png";
import ab4 from "../../Assets/Images/Electoral/ab4.png";
import ab5 from "../../Assets/Images/Electoral/ab5.png";


function ElectoralProfile(props) {

  return (
    <div className="electoralProfile">
      <img src={props.img} />
      <p className="elecName">{props.name}</p>
      <div className="elecCTAs">
        <a href={props.href1} target="_blank" className="elecCTA">Curriculum Vitae</a>
        <a href={props.href2} target="_blank" className="elecCTA">Candidacy Proposition</a>
      </div>
    </div>
  );

}


function Electoral() {

  return (
    <>
      <div className="electoralPage">
        <div className="electoralTitles container">
          <p className="hongKong electoralTitle1">The</p>
          <p className="electoralTitle2">Electoral platform</p>
          <p className="electoralTitle3">Meet the candidates for the term 2022-23</p>
          <div className="electoralBorder"></div>
        </div>

        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="electoralTitle2">President</p>
            <div className="electoralBorder"></div>
          </div>

          <div className="electoralProfiles container">


            <ElectoralProfile name="Dr. Lamis Elsheikh"
              img={president}
              href1="https://drive.google.com/file/d/13FLxzSDEmTXt5VBv1Wg8WwMuA8cVK_t1/view?usp=sharing"
              href2="https://drive.google.com/file/d/13JirpvpXepwTL0NsZaSIybQj6eAEjNvg/view?usp=sharing" />
          </div>
        </div>




        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Vice President of</p>
            <p className="electoralTitle2">Internal Affairs</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Dr. Arsal Sadiq"
              img={vp1}
              href1="https://drive.google.com/file/d/1py_rVvu3aqeFd4lId4CPdyMeCMufOy04/view?usp=sharing"
              href2="https://drive.google.com/file/d/1GoauFeYNTnBwaU4imNO-qoAsamiKZR4s/view?usp=sharing" />

            <ElectoralProfile name="Deniz Devrim Kaya"
              img={vp2}
              href1="https://drive.google.com/file/d/1pNtY_S2jXkjc4MAGv569F7bcHi6BnkJW/view?usp=sharing"
              href2="https://drive.google.com/file/d/14aWOtOBCSWYrs1b1tqNe1rIxBP6mtn0e/view?usp=sharing" />
          </div>
        </div>





        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Vice President of</p>
            <p className="electoralTitle2">Finances</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Abay Kalymatay"
              img={vp3}
              href1="https://drive.google.com/file/d/1_TDNCS0jQz0jCbzEKtESbORLGge-MFxx/view?usp=sharing"
              href2="https://drive.google.com/file/d/1d1TsHpifIDGi6UtGryp3jRisazh7Bxyj/view?usp=sharing" />

            <ElectoralProfile name="Tamer Khalid Awwad"
              img={vp4}
              href1="https://drive.google.com/file/d/1yQemOyPyxvW-pQBh1DqlkzeRH2KbJN59/view?usp=sharing"
              href2="https://drive.google.com/file/d/1uJFkmQtn4fKCJw4rXvg1VO6ymEBfJNg-/view?usp=sharing" />
          </div>
        </div>







        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Vice President of</p>
            <p className="electoralTitle2">Public Relations</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Kristine Romanovska"
              img={vp5}
              href1="https://drive.google.com/file/d/1X24guruMKTUSL9Z2RdjIU_RrukOQhnfu/view?usp=sharing"
              href2="https://drive.google.com/file/d/1gUKk9maI_0iqoFaQJutREHUAJKdXegws/view?usp=sharing" />

            <ElectoralProfile name="Jean Felix Gasasira"
              img={vp6}
              href1="https://drive.google.com/file/d/1xDgM_EBclLhw4eJCp5KVKpJvfpepvxoe/view?usp=sharing"
              href2="https://drive.google.com/file/d/1F5P9i_DWu2db269KPIlNo8hzawk89NMz/view?usp=sharing" />

            <ElectoralProfile name="Ranya Oualid"
              img={vp7}
              href1="https://drive.google.com/file/d/1z43a0p8saibw3p7-2DusbA5mOawYbqDa/view?usp=sharing"
              href2="https://drive.google.com/file/d/1zzRnPmU_Q9VIjhm__sVPULy-lAqL_UPf/view?usp=sharing" />
          </div>
        </div>



        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Vice President of</p>
            <p className="electoralTitle2">Exchanges</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Aneeq Majed Mian"
              img={vp8}
              href1="https://drive.google.com/file/d/1hgSwS97VJU9qzEElrP5jwqMSxfeHKz1d/view?usp=sharing"
              href2="https://drive.google.com/file/d/1nZP1Fr2TiC-pt4ytKzBVmtk-oXXMY96i/view?usp=sharing" />

            <ElectoralProfile name="Raghda Nouman Fanoun"
              img={vp9}
              href1="https://drive.google.com/file/d/1CRjpr51Ng2Ptg6XcFEkzZiplJwYmJkos/view?usp=sharing"
              href2="https://drive.google.com/file/d/1lyPUg4zb1QK5tDM-rTBg-umRq_KQe0dV/view?usp=sharing" />
          </div>
        </div>



        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Vice President of</p>
            <p className="electoralTitle2">Science & Research</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Zhengis Zhamashev"
              img={vp10}
              href1="https://drive.google.com/file/d/16zKGBPYgEVCshdnuziqj4hKfy7WTkBVk/view?usp=sharing"
              href2="https://drive.google.com/file/d/1NKfMyXNcHfXPfqyxG4sHQV-NU67MABDj/view?usp=sharing" />

            <ElectoralProfile name="Aneeqa Aslam"
              img={vp11}
              href1="https://drive.google.com/file/d/1X8guKhjgSSoOdmpcNVNGYiktKC3wp6NC/view?usp=sharing"
              href2="https://drive.google.com/file/d/1pFpRxTIrHDNN1LsFcHfl8lWpAYiPPrtF/view?usp=sharing" />

            <ElectoralProfile name="Raghda Nouman Fanoun"
              img={vp9}
              href1="https://drive.google.com/file/d/1CRjpr51Ng2Ptg6XcFEkzZiplJwYmJkos/view?usp=sharing"
              href2="https://drive.google.com/file/d/1lyPUg4zb1QK5tDM-rTBg-umRq_KQe0dV/view?usp=sharing" />
          </div>
        </div>










        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Regional Ambassador</p>
            <p className="electoralTitle2">Of Africa</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Ranya Oualid"
              img={vp7}
              href1="https://drive.google.com/file/d/1r9oYKkz7ot0SVaW5twvkmnOUaNhsh_v9/view?usp=sharing"
              href2="https://drive.google.com/file/d/1iZatwfPYFinUVsOvuaJzWN8Xmohky5E2/view?usp=sharing" />
          </div>
        </div>








        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Regional Ambassador</p>
            <p className="electoralTitle2">of Americas</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Juan Fernando Morales Recinos"
              img={ra2}
              href1="https://drive.google.com/file/d/1BbWqsyyP3Gnd1uPRQAcIzs3Y_tOIHBVb/view?usp=sharing"
              href2="https://drive.google.com/file/d/1fFyGWgitJ_AAKqYC8PB0vzUHZ5Ga2VOK/view?usp=sharing" />

            <ElectoralProfile name="Maria Teresa Matute Tello"
              img={ra3}
              href1="https://drive.google.com/file/d/1qdkGQqOgnhu344uXo25NAPGIq9ypag1h/view?usp=sharing"
              href2="https://drive.google.com/file/d/1tebAQUw1tXWyhlA6dzjDaxFwX9zBvukc/view?usp=sharing" />
          </div>
        </div>




        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Regional Ambassador</p>
            <p className="electoralTitle2">of Asia-pacific</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Ng Yook Shiang"
              img={ra4}
              href1="https://drive.google.com/file/d/1brH7SVLQArP41BFjE8RkxBPxpKlWDq6o/view?usp=sharing"
              href2="https://drive.google.com/file/d/1ID29_Ei_tmIV7Y3k0VmNOiFaC1pHjpsQ/view?usp=sharing" />

            <ElectoralProfile name="Viandra Tjokroadiredjo"
              img={ra5}
              href1="https://drive.google.com/file/d/1Un_o6i2i6dR9MEMRCQzRH0IY4NLn1Njv/view?usp=sharing"
              href2="https://drive.google.com/file/d/1aE7UnfykBDiZGi0vIkafZCcu3kP5P2Wn/view?usp=sharing" />
          </div>
        </div>



      




        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Regional Ambassador</p>
            <p className="electoralTitle2">of Middle-east</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Tasnim Muhssin"
              img={ra7}
              href1="https://drive.google.com/file/d/1YBL8ANmSrFbmNqz6P_eYoOnHP-9WiuNW/view?usp=sharing"
              href2="https://drive.google.com/file/d/1ACpLxmA11XTv29fnhwJP6m1TMRVFNHDH/view?usp=sharing" />
          </div>
        </div>


        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Regional Ambassador</p>
            <p className="electoralTitle2">of Europe</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Anna Pakhuta"
              img={ra6}
              href1="https://docs.google.com/document/d/1PY1zpTOcxEkzFESaeqOTzl5Y8LunF0mJ/edit?usp=sharing&ouid=110415499494788711678&rtpof=true&sd=true"
              href2="https://drive.google.com/file/d/1wR5i1EnVdwD3AYeRukbe_CoVH8Twckvj/view?usp=sharing" />
          </div>
        </div>




        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Training Committee</p>
            <p className="electoralTitle2">Chairperson</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Hayder Fadhil Jawwad"
              img={tcc1}
              href1="https://drive.google.com/file/d/1X9xNzEjD8tkbOADcGUzqAqJh4qp_qE1k/view?usp=sharing"
              href2="https://drive.google.com/file/d/1fuRUYOoB65KtQ5XyllpP8YIyHm7oJEgi/view?usp=sharing" />

            <ElectoralProfile name="Tamer Khalid Awwad"
              img={vp4}
              href1="https://drive.google.com/file/d/15FV-4r55VSwTHXLQvYyY2HgQ1QN3G2mI/view?usp=sharing"
              href2="https://drive.google.com/file/d/1Zz-KDCoyHCo5JD0MgGInU-U6b0ryGV-I/view?usp=sharing" />

            <ElectoralProfile name="Zeinab Hussein Gaafar"
              img={tcc3}
              href1="https://drive.google.com/file/d/1JZVQCRRJdcWhhqWGqXp6zY8yhjv61Uhc/view?usp=sharing"
              href2="https://drive.google.com/file/d/1QDqt9Dl_lqoPa9_yjDEtt3bZLahPElZb/view?usp=sharing" />
          </div>
        </div>







        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Voluntary Committee</p>
            <p className="electoralTitle2">Chairperson</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Maria Teresa Matute Tello"
              img={vc1}
              href1="https://drive.google.com/file/d/1N9gUsRvz2KxOBjFXNHFZseo3TI12SvAg/view?usp=sharing"
              href2="https://drive.google.com/file/d/1Wwr4HEIdnKfkQu__s7KKYVJGDFd81c_Y/view?usp=sharing" />

            <ElectoralProfile name="Tiago Miguel Correia Leitao"
              img={vc2}
              href1="https://drive.google.com/file/d/16in3HONjPzkjChWWXK2XUZvTUR_TMiRf/view?usp=sharing"
              href2="https://drive.google.com/file/d/1k8I7Ay-HEDhHHwKXFgGvTmUwHVxV0ppZ/view?usp=sharing" />
          </div>
        </div>



        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Public health Committee</p>
            <p className="electoralTitle2">Chairperson</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Meryem Lahlou"
              img={ph1}
              href1="https://drive.google.com/file/d/1wwvdNKkWbtDZW4aviJE4sBjR5TOZqSaI/view?usp=sharing"
              href2="https://drive.google.com/file/d/1UngrylGq2I38zsKRG0zJAbkCisJeMwRa/view?usp=sharing" />

            <ElectoralProfile name="Romaysa Galal Ahmed Elsayed"
              img={ph2}
              href1="https://drive.google.com/file/d/1CmUTPNFVTgZQcJdR-HPH8meXhBZ2TvTh/view?usp=sharing"
              href2="https://drive.google.com/file/d/1d1084RGry0FK7awgb-8BJBSG0cSMC2SW/view?usp=sharing" />

            <ElectoralProfile name="Tiago Miguel Correia Leitao"
              img={ph3}
              href1="https://drive.google.com/file/d/1xtmebXixpvdaLMRxwOBp1kEu7UTg407r/view?usp=sharing"
              href2="https://drive.google.com/file/d/1B8wSZHpaVtiOqYu4S69gVmEO2G2bJF-J/view?usp=sharing" />
          </div>
        </div>







        <div className="electoralComp">
          <div className="electoralTitles container">
            <p className="hongKong electoralTitle1">Advisory</p>
            <p className="electoralTitle2">Board</p>
            <div className="electoralBorder"></div>
          </div>
          <div className="electoralProfiles container">
            <ElectoralProfile name="Abanoub Riad"
              img={ab1}
              href1="https://drive.google.com/file/d/1FoAJp5dmvi7lNFJpra0jvTwpU7zYkkEC/view?usp=sharing"
              href2="https://drive.google.com/file/d/1P88XrvWH9SMWfuvJ-SpfXXqAUTG5k8a3/view?usp=sharing" />

            <ElectoralProfile name="Silvi Domnori"
              img={ab2}
              href1="https://drive.google.com/file/d/1ZS9Gp9d4YrB8IY9hftTH2ng2USPEIh6t/view?usp=sharing"
              href2="https://drive.google.com/file/d/1r8uYH54pUXYvqRd9n9cXnwbyt9Hf49eZ/view?usp=sharing" />

            <ElectoralProfile name="İrem Türkan"
              img={ab3}
              href1="https://drive.google.com/drive/folders/1yot9f8Hxb9GEmuPxjgnkaeu1fmaqSqdA?usp=sharing"
              href2="https://drive.google.com/file/d/15xcYED0v3xa3_bWXQ1dZYWk4qdCjXtqp/view?usp=sharing" />


            <ElectoralProfile name="Daniel Villavicencio"
              img={ab4}
              href1="https://drive.google.com/file/d/1vMW5a2BvdOkO6fJalFyxrJdKg_Oi0Otl/view?usp=sharing"
              href2="https://drive.google.com/file/d/1kfGxmlxc3e6xGzBW0GxnHvu3t0efUiHJ/view?usp=sharing" />


            <ElectoralProfile name="Mariana Morgado"
              img={ab5}
              href1="https://drive.google.com/file/d/1uSDrkYaWeuZw5N15fHwuvIqqR2lXAi0J/view?usp=sharing"
              href2="https://drive.google.com/file/d/1HHB0loWQF8Kz_REIHd8OG0SQJWLTKlBD/view?usp=sharing" />
          </div>
        </div>


      </div>
    </>
  );
}

export default Electoral;
