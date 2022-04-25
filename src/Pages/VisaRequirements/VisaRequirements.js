import React from "react";
import "./VisaRequirements.scss";
import visaimg from "../../Assets/Images/visa.svg";

function VisaRequirements() {
  return (
    <>
      <div className="visaPage container">
        <div className="visaTitle">
          <p className="visaTitleText">Visa</p>
          <p className="hongKong">Requirements</p>
        </div>
        <div className="visaimg"></div>

        <div className="visaCards">
          <div className="visaCard">
            <div className="visacardTitles">
              <p className="visacardtitle">PCR</p>
              <p className="visacardsubtitle hongKong">Certificate</p>
            </div>
            <p className="visacardBody">
              Passengers arriving in Kazakhstan must provide a PCR certificate
              with a negative result for Covid-19.The Terms of a PCR certificate
              should not exceed 72 hours since material selection. Children
              under 5 years old do not require a PCR certificate. Please note
              that foreign citizens are not required to observe self-isolation
              regime upon arrival in Kazakhstan.
            </p>
          </div>

          <div className="border1"></div>

          <div className="visaCard">
            <div className="visacardTitles">
              <p className="visacardtitle">VACCINATION</p>
              <p className="visacardsubtitle hongKong">Passport</p>
            </div>
            <p className="visacardBody">
              From February 19, 2022, foreigners can arrive in Kazakhstan
              without a PCR certificate if they have received a full course of
              vaccination:<br></br> <br></br> on the territory of the Republic
              of Kazakhstan in the following countries: Argentina, Armenia,
              Belarus, Belize, Bolivia, Great Britain, Hungary, Georgia, India,
              Indonesia, Jordan, Iran, Canada, Kyrgyzstan, Maldives, Moldova,
              Mongolia, Peru, San Marino, Serbia, Thailand, Tunisia , Turkey,
              Philippines, Montenegro, Czech Republic, Sri Lanka, Ecuador,
              Estonia, Japan<br></br> <br></br> Entry into Kazakhstan is carried
              out in the presence of a vaccination passport.
            </p>
          </div>
        </div>

        <div className="visatable">
          <p className="visatableTitle">
            The table below shows citizens of countries for which a visa to
            Kazakhstan is<br></br>required. For other countries there is a visa-free
            regime
          </p>

          <table class="table table-bordered table-responsive">
            <thead>
              <tr>
                <th scope="col">Country</th>
                <th scope="col">D: Diplomatic passport</th>
                <th scope="col">S: Service/official passport</th>
                <th scope="col">N: Ordinary passport </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Albania</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Algeria</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Andorra</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Angola</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Antigua and Barbuda</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Afghanistan</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Bahamas</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Bangladesh</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Barbados</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Belize</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Benin</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Burma (Myanmar)</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Bolivia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Bosnia and Herzegovina</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Brunei</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Burkina Faso</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Burundi</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Butane</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Vanuatu</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Venezuela</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Gabon</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Haiti</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Guyana</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Gambia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Ghana</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Guatemala</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Guinea-Bissau</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Republic of Guinea</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Grenada</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Djibouti</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Dominica</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Dominican Republic</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Egypt</th>
                <td>30 days without visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Zambia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Zimbabwe</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">India</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Jordan</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Iran</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Iraq</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Yemen</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Cape Verde</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Cambodia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Cameroon</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Kenya</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Kiribati</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">China</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">DPRK</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Comoros</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Congo</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Costa Rica</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Côte d'Ivoire</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Cuba</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Laos</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Lesotho</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Liberia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Lebanon</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Libya</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Mauritius</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Mauritania</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Madagascar</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Macao</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Macedonia</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Malawi</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Mali</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Maldives</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Morocco</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Marshall Islands</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Micronesia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Mozambique</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Namibia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Nauru</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Nepal</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Niger</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Nigeria</th>
                <td>visa free until 30 days</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Nicaragua</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Pakistan</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Palau</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Panama</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Papua New Guinea</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Paraguay</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Peru</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Ruanda</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Samoa</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">San Marino</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Sao Tome and Principe</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Swaziland</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Seychelles</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Senegal</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Saint Kitts and Nevis</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Saint Lucia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Saint Vincent and the Grenadines</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Syria</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Somalia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Solomon islands</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Sudan</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Suriname</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Sierra Leone</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Tanzania</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Togo</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Tonga</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Trinidad and Tobago</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Tuvalu</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Tunis</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Turkmenistan</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Uganda</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Uruguay</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Fiji</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Central African Republic</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Chad</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Montenegro</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Sri Lanka</th>
                <td>visa free until 30 days</td>
                <td>visa free until 30 days</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Equatorial Guinea</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">El Salvador</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Eritrea</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Ethiopia</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">South Africa</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
              <tr>
                <th scope="row">Southern Sudan</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>

              <tr>
                <th scope="row">Jamaica</th>
                <td>visa</td>
                <td>visa</td>
                <td>visa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default VisaRequirements;
