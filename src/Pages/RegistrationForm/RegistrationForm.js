import React, { useRef, useState } from "react";
import Packages from "../../Components/Packages/Packages";
import RegistrationCard from "../../Components/RegistrationCard/RegistrationCard";
import regImage from "../../Assets/Images/regImage.svg";
import refIcon from "../../Assets/Images/Icons/refIcon.svg";
import "./RegistrationForm.scss";

import countries from "../../Shared/Data/countries.json";
import Select from "react-select";
import emailjs from "emailjs-com";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

function RegistrationForm() {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);

 

  const sendEmail = (e) => {
    e.stopPropagation();
    e.preventDefault();

    let passFile = document.getElementById("validatedCustomFile");
    let vaccFile = document.getElementById("validatedCustomFile2");

    if (passFile.files[0].size + vaccFile.files[0].size > 1900000) {
      if (passFile.files[0].size > 900000) {
        setModalTitle('Passport file size');
        setError('Passport file size should not excced 1mb');
        passFile.scrollIntoView();


        return;
      }

      if (vaccFile.files[0].size > 900000) {
        setModalTitle('Vaccination proof file size');
        setError('Vaccination proof file size should not excced 1mb');
        vaccFile.scrollIntoView();

        return;
      }
    }

    let data = {

      Name: personalContactValues.fullName,
      Gender: personalContactValues.gender,
      Country: personalContactValues.conutry,
      Email: personalContactValues.email,
      Phone_No: personalContactValues.phoneNumber,
      Whatsapp_No: personalContactValues.whatsappNumber,
      Instagram: personalContactValues.instagram,
      Facebook: personalContactValues.facebookUrl,
      Emergency_Con: personalContactValues.emergencyContactName,
      Emergency_No: personalContactValues.emergencyContactNumber,

      Study_Country: AffiliationValues.conutry,
      Uni_Name: AffiliationValues.university,
      Years_of_Study: AffiliationValues.yearStudies,
      Graduation_Date: AffiliationValues.yearGraduation,
      IADS_Member: AffiliationValues.IADSmember,
      IADS_Association: AffiliationValues.IADSmemberAssociation,
      Delegate: AffiliationValues.delegate,
      Invitation: AffiliationValues.invitation,

      Passport_No: PassportValues.passportNumber,
      nationality: PassportValues.nationality,
      Passport_Issue: PassportValues.passportIssueDate,
      Passport_Expiry: PassportValues.passportExpiryDate,
      Visa_Clearance: PassportValues.visaClearance,
      Passprt_fullName: PassportValues.fullName,
      Date_Of_Birth: PassportValues.dob,

      Vaccine: VaccineValues.vaccineName,
      Doses: VaccineValues.administeredDoses,
      Plan: VaccineValues.plan,

      Package: PackageValues.package,
      Room_Type: PackageValues.roomType,
      Roommate: PackageValues.roommate,
      Allergies: PackageValues.health,
      Dietary: PackageValues.dietary,
      Package_Consent: PackageValues.consent,

      Hear: document.getElementsByName('hear')[0].value
    };

    setloading(true);

    axios
      .post(
        "https://sheet.best/api/sheets/2224fd55-26ba-4013-bd62-dfcfa1fe0b3f",
        data
      )
      .then((response) => {
        // console.log(response);
      });

    

    emailjs
      .sendForm(
        "service_zhe1pvp",
        "template_08ibrp4",
        e.target,
        "Blp53EzBsHt7ji3lO"
      )
      .then(
        (result) => {
          setloading(false);
          setModalTitle('Congratulations')
          setRefresh(true);
          setError(
            "Your results has been sent, check your email for payment instructions"
          );
        },
        (error) => {
          setloading(false);
          setModalTitle('Error')
          setError(error.text);
          return
        }
      );
    

  };

  const [currentForm, setCurrentForm] = useState("personal");

  const [personalContactValues, setPersonalContactValues] = useState({
    fullName: "",
    gender: "",
    conutry: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    instagram: "",

    facebookUrl: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
  });

  const [AffiliationValues, setAffiliationValues] = useState({
    hear: "",
    conutry: "",
    email: "",
    university: "",
    yearStudies: "",
    yearGraduation: "",

    IADSmember: "",
    IADSmemberAssociation: "",
    delegate: "",
    invitation: "",
  });

  const [PassportValues, setPassportValues] = useState({
    fullName: "",
    dob: "",
    pob: "",
    passportNumber: "",
    passportIssueDate: "",
    nationality: "",
    passportExpiryDate: "",
    IADSmemberAssociation: "",
    visaClearance: "",
  });

  const [VaccineValues, setVaccineValues] = useState({
    vaccineName: "",
    administeredDoses: "",
    plan: "",
  });

  const [PackageValues, setPackageValues] = useState({
    package: "",
    roomType: "",
    plan: "",
    consent: "",
    roommate: "",
    health: "",
    dietary: "",
  });

  const [ConsentValues, setConsentValues] = useState({
    notComplete: "",
    terms: "",
    codeOfConduct: "",
  });

  const options = [
    { value: "IADS Social Media", label: "IADS Social Media" },
    {
      value: "National/Local Organisation",
      label: "National/Local Organisation",
    },
    { value: "Social Media", label: "Social Media" },
    { value: "Sponsored Ad", label: "Sponsored Ad" },
    { value: "Google/Search Engine", label: "Google/Search Engine" },
    { value: "Peer Referral", label: "Peer Referral" },
  ];
  const formRef = useRef(null);
  const formRef2 = useRef(null);
  const formRef3 = useRef(null);
  const formRef4 = useRef(null);
  const formRef5 = useRef(null);
  const formRef6 = useRef(null);

  const onsubmitForm = (e, newform, ref) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e.target);
    const form = ref.current;
    console.log(form);

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setCurrentForm(newform);
  };

  const hideModal = () => {
    setError(null);
    if(refresh){
      window.location.href = "/";
      setRefresh(false)
    }
  }
  return (
    <>
      <div className="regFormPage">


      <Modal show={error!=null? true: false} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
        <Button
           onClick={hideModal}
                className="btn next"
                variant="danger"
              >
                OK
              </Button>
        
        
        </Modal.Footer>
      </Modal>

        <div className="regFormTitles container">
          <p className="regFormTitle">
            Congress<br></br>
            <span>Registration</span>
          </p>
          <p className="regFormSub hongKong">Form</p>
        </div>
        <div className="regForm container">
          {/*   <div className="regFormTabs">
           <div
              className={
                currentForm == "personal"
                  ? "regFormborder regFormborderActive"
                  : "regFormborder regFormborderInactive"
              }
            ></div>
            <div
              className={
                currentForm == "personal"
                  ? "regFormNum regFormNumActive"
                  : "regFormNum regFormNumInactive"
              }
            >
              1
            </div>

            <div
              className={
                currentForm == "affiliation"
                  ? "regFormborder regFormborderActive"
                  : "regFormborder regFormborderInactive"
              }
            ></div>
            <div
              className={
                currentForm == "affiliation"
                  ? "regFormNum regFormNumActive"
                  : "regFormNum regFormNumInactive"
              }
            >
              2
            </div>

            <div
              className={
                currentForm == "passport"
                  ? "regFormborder regFormborderActive"
                  : "regFormborder regFormborderInactive"
              }
            ></div>
            <div
              className={
                currentForm == "passport"
                  ? "regFormNum regFormNumActive"
                  : "regFormNum regFormNumInactive"
              }
            >
              3
            </div>

            <div
              className={
                currentForm == "vaccination"
                  ? "regFormborder regFormborderActive"
                  : "regFormborder regFormborderInactive"
              }
            ></div>
            <div
              className={
                currentForm == "vaccination"
                  ? "regFormNum regFormNumActive"
                  : "regFormNum regFormNumInactive"
              }
            >
              4
            </div>

            <div
              className={
                currentForm == "package"
                  ? "regFormborder regFormborderActive"
                  : "regFormborder regFormborderInactive"
              }
            ></div>
            <div
              className={
                currentForm == "package"
                  ? "regFormNum regFormNumActive"
                  : "regFormNum regFormNumInactive"
              }
            >
              5
            </div>

            <div
              className={
                currentForm == "consent"
                  ? "regFormborder regFormborderActive"
                  : "regFormborder regFormborderInactive"
              }
            ></div>
            <div
              className={
                currentForm == "consent"
                  ? "regFormNum regFormNumActive"
                  : "regFormNum regFormNumInactive"
              }
            >
              6
            </div>

            <div
              className={
                currentForm == "consent"
                  ? "regFormborder regFormborderActive"
                  : "regFormborder regFormborderInactive"
              }
            ></div> 
          </div> */}

          <br></br>

          <form onSubmit={sendEmail} id="form1">
            {/* <form
              style={{ display: currentForm !== "personal" && "none" }}
              className="regForm regForm1"
              action="#" ref={formRef}
              id="regForm1"
            > */}
            <h2>Personal & Contact Information</h2>
            <div className="row">
              <div className="form-group custom-control col-md-6">
                <label for="inputName">
                  Full Name (as it appears on your passport)
                </label>
                <input
                  class="form-control"
                  id="from_name"
                  name="from_name"
                  // value={personalContactValues.fullName}
                  required
                  placeholder="Name"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      fullName: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">Name is required.</div>
              </div>

              <div className="form-group col-md-6">
                <label for="inputName">Gender</label>

                <select
                  id="gender"
                  name="gender"
                  value={personalContactValues.gender}
                  className="form-control"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      gender: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>

                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Non-binary"}>Non-binary</option>
                  <option value={"Prefer not to say"}>Prefer not to say</option>
                </select>

                <div className="invalid-feedback">Gender is required.</div>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  value={personalContactValues.email}
                  required
                  placeholder="Email"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      email: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">Email is required.</div>
              </div>

              <div className="form-group col-md-6">
                <label for="inputName">Countries</label>

                <select
                  id="country"
                  className="form-control"
                  name="country"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      conutry: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>
                  {countries.map((item, i) => {
                    return (
                      <option value={item.name} key={i}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>

                <div className="invalid-feedback">Gender is required.</div>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label>Phone Number</label>
                <input
                  className="form-control"
                  required
                  placeholder="Phone Number"
                  name="phonenumber"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      phoneNumber: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Phone number is required.
                </div>
              </div>

              <div className="form-group col-md-6">
                <label>
                  If you use a different number for Whatsapp, please state below
                </label>
                <input
                  className="form-control"
                  placeholder="Number"
                  name="whatsappnumber"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      whatsappNumber: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label>Instagram tag (if applicable)</label>
                <input
                  className="form-control"
                  placeholder="Instagram"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      instagram: e.target.value,
                    })
                  }
                  name="instagram"
                />
              </div>

              <div className="form-group col-md-6">
                <label>Facebook profile url (if applicable)</label>
                <input
                  className="form-control"
                  placeholder="Facebook"
                  name="facebook"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      facebookUrl: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label>Emergency Contact Name</label>
                <input
                  className="form-control"
                  required
                  placeholder="Emergency Contact Name"
                  name="emergency_name"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      emergencyContactName: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Emergency Contact Name is required.
                </div>
              </div>

              <div className="form-group col-md-6">
                <label>
                  Emergency Contact number (international format +7xxxxxx)
                </label>
                <input
                  name="emergency_number"
                  required
                  className="form-control"
                  placeholder="Number"
                  onChange={(e) =>
                    setPersonalContactValues({
                      ...personalContactValues,
                      emergencyContactNumber: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Emergency Contact Phone number is required.
                </div>
              </div>
            </div>

            {/* <div className="regformButtons">
              <button
                form="regForm1"
                onClick={(e) => onsubmitForm(e, "affiliation", formRef)}
                // onClick={(e) => submitForm(e, "affiliation", 1)}
                className="btn next"
              >
                Next
              </button>
            </div> */}

            <br></br>
            <br></br>
            <br></br>
            {/* </form> */}

            {/* <form
              style={{ display: currentForm !== "affiliation" && "none" }}
              className="regForm regForm2"
              action="#" ref={formRef2}
              id="regForm2"
            > */}
            <h2>Affiliation</h2>
            <div className="row">
              <div className="form-group col-md-6">
                
                <label for="inputName">
                  How did you hear about this event?
                </label>

                <Select
                  id="hear"
                  isMulti
                  options={options}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  name="hear"
                />
              </div>

              <div className="form-group col-md-6">
                <label for="inputName">Country of Studies</label>

                <select
                  id="inputState"
                  name="study_country"
                  value={AffiliationValues.conutry}
                  className="form-control"
                  onChange={(e) =>
                    setAffiliationValues({
                      ...AffiliationValues,
                      conutry: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>
                  {countries.map((item, i) => {
                    return (
                      <option value={item.name} key={i}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>

                <div className="invalid-feedback">Gender is required.</div>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Name of University</label>
                <input
                  className="form-control"
                  required
                  placeholder="Name of University"
                  name="uni_name"
                  value={AffiliationValues.university}
                  onChange={(e) =>
                    setAffiliationValues({
                      ...AffiliationValues,
                      university: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Name of University is required.
                </div>
              </div>

              <div className="form-group col-md-6">
                <label for="inputName">Year of studies</label>

                <select
                  id="inputState"
                  name="study_years"
                  className="form-control"
                  onChange={(e) =>
                    setAffiliationValues({
                      ...AffiliationValues,
                      yearStudies: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>

                  <option value={"1st Year"}>1st Year</option>
                  <option value={"2nd Year"}>2nd Year</option>
                  <option value={"3rd Year"}>3rd Year</option>
                  <option value={"4th Year"}>4th Year</option>
                  <option value={"5th Year"}>5th Year</option>
                  <option value={"6th Year"}>6th Year</option>
                  <option value={"Internship"}>Internship</option>
                  <option value={"Graduated"}>Graduated</option>
                </select>

                <div className="invalid-feedback">
                  Year of studies is required.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-12">
                <label for="inputName">Are you an IADS member?</label>

                <select
                  id="inputState"
                  className="form-control"
                  name="iads_member"
                  onChange={(e) =>
                    setAffiliationValues({
                      ...AffiliationValues,
                      IADSmember: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>

                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>

                <div className="invalid-feedback">This field is required.</div>
              </div>
            </div>
            <br></br>
            {AffiliationValues.IADSmember == "No" && (
              <div className="row">
                <div class="form-group">
                  <div class="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      // name="extra_price_consent"
                      class="form-check-input"
                      type="checkbox"
                      value={PackageValues.consent}
                      id="invalidCheck7"
                      required
                    />
                    <label class="form-check-label" for="invalidCheck7">
                      I understand that upon not being an IADS member, if I
                      still wish to proceed with my registration I consent to
                      being approached and following through with the procedures
                      of obtaining a personal membership with a yearly fee of 50
                      euros
                    </label>
                    <div class="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="row">
              <div className="form-group col-md-6">
                <label>Year of Graduation</label>
                <input
                  className="form-control"
                  required
                  placeholder="Year of Graduation"
                  name="graduation_year"
                  value={AffiliationValues.yearGraduation}
                  onChange={(e) =>
                    setAffiliationValues({
                      ...AffiliationValues,
                      yearGraduation: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Year of Graduation is required.
                </div>
              </div>

              <div className="form-group col-md-6">
                <label for="inputName">
                  Name of IADS member association you’re affiliated to
                </label>
                <input
                  className="form-control"
                  id="inputName"
                  name="iads_affiliation"
                  value={AffiliationValues.IADSmemberAssociation}
                  required
                  placeholder="Name"
                  onChange={(e) =>
                    setAffiliationValues({
                      ...AffiliationValues,
                      IADSmemberAssociation: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">Name is required.</div>
              </div>

              <div className="row">
                <div className="form-group col-md-6">
                  <label for="inputName">
                    Are you the delegate of your affiliated association?
                  </label>

                  <select
                    id="inputState"
                    name="delegate"
                    className="form-control"
                    onChange={(e) =>
                      setAffiliationValues({
                        ...AffiliationValues,
                        delegate: e.target.value,
                      })
                    }
                    required
                  >
                    <option value={""} disabled selected>
                      Choose...
                    </option>

                    <option value={"Yes"}>Yes</option>
                    <option value={"No"}>No</option>
                  </select>

                  <div className="invalid-feedback">
                    This field is required.
                  </div>
                </div>

                <div className="form-group col-md-6">
                  <label for="inputName">
                    Do you need an invitation letter?
                  </label>

                  <select
                    id="inputState"
                    name="invitation_letter"
                    className="form-control"
                    onChange={(e) =>
                      setAffiliationValues({
                        ...AffiliationValues,
                        invitation: e.target.value,
                      })
                    }
                    required
                  >
                    <option value={""} disabled selected>
                      Choose...
                    </option>

                    <option value={"Yes"}>Yes</option>
                    <option value={"No"}>No</option>
                  </select>

                  <div className="invalid-feedback">
                    This field is required.
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="regformButtons">
              <button
                className="btn back"
                onClick={() => setCurrentForm("personal")}
              >
                Back
              </button>
              <button
                className="btn next"
                onClick={(e) => onsubmitForm(e, "passport", formRef2)}
                form="regForm2"
              >
                Next
              </button>
            </div> */}

            <br></br>
            <br></br>
            <br></br>
            {/* </form> */}

            {/* <form
              style={{ display: currentForm !== "passport" && "none" }}
              className="regForm regForm3"
              action="#" ref={formRef3}
              id="regForm3"
            > */}
            <h2>Passport Details</h2>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Full Name (As written in passport)</label>
                <input
                  className="form-control"
                  required
                  placeholder="Full Name"
                  name="passport_name"
                  onChange={(e) =>
                    setPassportValues({
                      ...PassportValues,
                      fullName: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">Name is required.</div>
              </div>

              <div className="form-group col-md-6">
                <label>Date of birth</label>
                <input
                  name="birthdate"
                  type="date"
                  className="form-control"
                  required
                  placeholder="Date of birth"
                  onChange={(e) =>
                    setPassportValues({
                      ...PassportValues,
                      dob: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Date of birth is required.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label>Place of birth</label>
                <input
                  className="form-control"
                  required
                  name="birth_place"
                  placeholder="Full Name"
                  onChange={(e) =>
                    setPassportValues({
                      ...PassportValues,
                      pob: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Place of birth is required.
                </div>
              </div>

              <div className="form-group col-md-6">
                <label>Passport Number</label>
                <input
                  className="form-control"
                  required
                  name="pass_number"
                  placeholder="Full Name"
                  onChange={(e) =>
                    setPassportValues({
                      ...PassportValues,
                      passportNumber: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Passport Number is required.
                </div>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label>Passport issue date</label>
                <input
                  type="date"
                  className="form-control"
                  name="pass_issue"
                  required
                  placeholder="Passport issue date"
                  onChange={(e) =>
                    setPassportValues({
                      ...PassportValues,
                      passportIssueDate: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Passport issue date is required.
                </div>
              </div>

              <div className="form-group col-md-6">
                <label>Passport Expiry date</label>
                <input
                  type="date"
                  className="form-control"
                  required
                  name="pass_expiry"
                  placeholder="Passport Expiry date"
                  onChange={(e) =>
                    setPassportValues({
                      ...PassportValues,
                      passportExpiryDate: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Passport Expiry date is required.
                </div>
              </div>
              </div>
              <div className="row">
              <div className="form-group col-md-6">
                <label for="inputName">Nationality</label>

                <select
                  id="nationality"
                  className="form-control"
                  name="nationality"
                  onChange={(e) =>
                    setPassportValues({
                      ...PassportValues,
                      nationality: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>
                  {countries.map((item, i) => {
                    return (
                      <option value={item.name} key={i}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>

                <div className="invalid-feedback">Gender is required.</div>
              </div>

              <div className="form-group col-md-6">
                <label for="inputName">
                  Do you need a letter for{" "}
                  <a target="_blank" href="/visa">
                    visa
                  </a>{" "}
                  clearance?
                </label>

                <select
                  id="inputState"
                  name="visa_needed"
                  className="form-control"
                  onChange={(e) =>
                    setPassportValues({
                      ...PassportValues,
                      visaClearance: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>

                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>

                <div className="invalid-feedback">This field is required.</div>
              </div>
            </div>

            <div className="row">
              <div className="custom-file">
                <label className="custom-file-label" for="validatedCustomFile">
                  Please, upload a copy of your passport
                </label>
                <input
                  type="file"
                  className="custom-file-input"
                  id="validatedCustomFile"
                  required
                  name="passport_photo"
                />

                <div className="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
            </div>

            {/* <div className="regformButtons">
              <button
                className="btn back"
                onClick={() => setCurrentForm("affiliation")}
              >
                Back
              </button>
              <button
                className="btn next"
                onClick={(e) => onsubmitForm(e, "vaccination", formRef3)}
                form="regForm3"
              >
                Next
              </button>
            </div> */}

            <br></br>
            <br></br>
            <br></br>
            {/* </form> */}

            {/* <form
              style={{ display: currentForm !== "vaccination" && "none" }}
              className="regForm regForm4"
              action="#" ref={formRef4}
              id="regForm4"
            > */}
            <h2>Vaccination Details</h2>
            <div className="row">
              <div className="form-group col-md-4">
                <label>Vaccine Name</label>
                <input
                  className="form-control"
                  required
                  name="vaccine"
                  placeholder="Vaccine Name"
                  onChange={(e) =>
                    setVaccineValues({
                      ...VaccineValues,
                      vaccineName: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Vaccine Name is required.
                </div>
              </div>

              <div className="form-group col-md-4">
                <label for="inputName">Administered Doses</label>

                <select
                  id="inputState"
                  name="doses"
                  className="form-control"
                  onChange={(e) =>
                    setVaccineValues({
                      ...VaccineValues,
                      administeredDoses: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>

                  <option value={"1"}>1</option>
                  <option value={"2"}>2</option>
                  <option value={"3"}>3</option>
                  <option value={"None"}>None</option>
                </select>

                <div className="invalid-feedback">This field is required.</div>
              </div>

              <div className="form-group col-md-4">
                <label for="inputName">
                  If not yet vaccinated, do you plan to be vaccinated prior to
                  the congress?
                </label>

                <select
                  id="inputState"
                  name="late_vaccine"
                  className="form-control"
                  onChange={(e) =>
                    setVaccineValues({
                      ...VaccineValues,
                      plan: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>

                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </select>

                <div className="invalid-feedback">This field is required.</div>
              </div>
            </div>

            <div className="row">
              <div className="custom-file">
                <label className="custom-file-label" for="validatedCustomFile">
                  Upload proof of vaccination
                </label>
                <input
                  type="file"
                  className="custom-file-input"
                  id="validatedCustomFile2"
                  required
                  name="vaccine_photo"
                />

                <div className="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
            </div>

            {/* <div className="regformButtons">
              <button
                className="btn back"
                onClick={() => setCurrentForm("passport")}
              >
                Back
              </button>
              <button
                className="btn next"
                onClick={(e) => onsubmitForm(e, "package", formRef4)}
                form="regForm4"
              >
                Next
              </button>
            </div> */}

            <br></br>
            <br></br>
            <br></br>
            {/* </form> */}

            {/* <form
              style={{ display: currentForm !== "package" && "none" }}
              className="regForm regForm5"
              action="#" ref={formRef5}
              id="regForm5"
            > */}
            <h2>Package Details</h2>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputName">
                  Which registration package do you prefer?
                </label>

                <select
                  id="inputState"
                  name="package"
                  className="form-control"
                  onChange={(e) =>
                    setPackageValues({
                      ...PackageValues,
                      package: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>

                  <option value={"Package A = Congress 380 euros"}>
                    Package A = Congress 380 euros
                  </option>
                  <option value={"Package B = Precongres + Congress 450 euros"}>
                    Package B = Precongres + Congress 450 euros
                  </option>
                  <option
                    value={"Package C = Congres + Post Congress 520 euros"}
                  >
                    Package C = Congres + Post Congress 520 euros
                  </option>
                  <option
                    value={
                      "Package D = Precongress + Congress + Post Congress 590 euros"
                    }
                  >
                    Package D = Precongress + Congress + Post Congress 590 euros
                  </option>
                </select>

                <div className="invalid-feedback">This field is required.</div>
              </div>

              <div className="form-group col-md-6">
                <label for="inputName">I want to stay in a…</label>

                <select
                  id="inputState"
                  name="stay"
                  className="form-control"
                  onChange={(e) =>
                    setPackageValues({
                      ...PackageValues,
                      roomType: e.target.value,
                    })
                  }
                  required
                >
                  <option value={""} disabled selected>
                    Choose...
                  </option>

                  <option value={"Single Room"}>Single Room</option>
                  <option value={"Double Room"}>Double Room</option>
                </select>

                <div className="invalid-feedback">This field is required.</div>
              </div>
            </div>

            <br></br>

            {PackageValues.roomType == "Single Room" && (
              <div className="row">
                <div class="form-group">
                  <div class="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      name="extra_price_consent"
                      class="form-check-input"
                      type="checkbox"
                      value={PackageValues.consent}
                      id="invalidCheck3"
                      required
                    />
                    <label class="form-check-label" for="invalidCheck3">
                      I understand that there is an extra pricing for the single
                      room and I intend to make that addition to my registration
                      fee transfer.
                    </label>
                    <div class="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {PackageValues.roomType == "Double Room" && (
              <div className="row">
                <div className="form-group col-md-12">
                  <label for="inputName">Preferred roommate</label>
                  <input
                    className="form-control"
                    id="inputName"
                    name="roommate"
                    required
                    placeholder="Name"
                    onChange={(e) =>
                      setPackageValues({
                        ...PackageValues,
                        roommate: e.target.value,
                      })
                    }
                  />
                  <div className="invalid-feedback">
                    Preferred roommate is required.
                  </div>
                </div>
              </div>
            )}

            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputName">
                  Allergies and/or health conditions
                </label>
                <input
                  className="form-control"
                  id="inputName"
                  name="health_conditions"
                  required
                  placeholder="Name"
                  onChange={(e) =>
                    setPackageValues({
                      ...PackageValues,
                      health: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Allergies and/or health conditions is required.
                </div>
              </div>

              <div className="form-group col-md-6">
                <label for="inputName">Dietary restrictions</label>
                <input
                  className="form-control"
                  id="inputName"
                  name="dietary"
                  required
                  placeholder="Name"
                  onChange={(e) =>
                    setPackageValues({
                      ...PackageValues,
                      dietary: e.target.value,
                    })
                  }
                />
                <div className="invalid-feedback">
                  Dietary restrictions is required.
                </div>
              </div>
            </div>

            {/* <div className="regformButtons">
              <button
                className="btn back"
                onClick={() => setCurrentForm("vaccination")}
              >
                Back
              </button>
              <button
                className="btn next"
                onClick={(e) => onsubmitForm(e, "consent", formRef5)}
                form="regForm5"
              >
                Next
              </button>
            </div> */}
            <br></br>
            <br></br>
            <br></br>
            {/* </form> */}

            {/* <form
              style={{ display: currentForm !== "consent" && "none" }}
              className="regForm regForm6"
              action="#" ref={formRef6}
              id="regForm6"
            > */}
            <h2>Consent</h2>
            <div className="row">
              <div class="form-group">
                <div class="form-check">
                  <input
                    style={{ marginRight: "10px" }}
                    class="form-check-input"
                    type="checkbox"
                    value={ConsentValues.notComplete}
                    id="invalidCheck4"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck4">
                    I understand that in case my registration is not completed
                    within the early bird period, regular pricing will be
                    applied.
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div class="form-group">
                <div class="form-check">
                  <input
                    style={{ marginRight: "10px" }}
                    class="form-check-input "
                    type="checkbox"
                    value={ConsentValues.terms}
                    id="invalidCheck5"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck5">
                    I understand and agree to the{" "}
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1B6vceeZVs3YqrsBkvsyew84F1K-cGKLR/view?usp=sharing"
                    >
                      {" "}
                      Terms and Conditions and IADS Refund Policy{" "}
                    </a>
                    .
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div class="form-group">
                <div class="form-check">
                  <input
                    style={{ marginRight: "10px" }}
                    class="form-check-input "
                    type="checkbox"
                    value={ConsentValues.codeOfConduct}
                    id="invalidCheck6"
                    required
                  />
                  <label class="form-check-label" for="invalidCheck6">
                    By ticking this checkbox, I confirm that I have read and
                    understood IADS{" "}
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1ZsVPmnxBgD1ky-Wmbt8Aw7rFpz211iZX/view?usp=sharing"
                    >
                      {" "}
                      Code of Conduct{" "}
                    </a>{" "}
                    and I declare that I am fully responsible and to be held
                    accountable for my actions during the event on behalf of
                    myself and the organisation I am a member of, and that in no
                    way will I discriminate or pose a threat to any attendee’s,
                    IADS official’s or local organiser’s civil rights. I declare
                    that I understand any breach of these rules is grounds for
                    being reported to the Triple C and I will be subjected to
                    disciplinary sanctions.
                  </label>
                  <div class="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
            </div>

            <div className="regformButtons">
              {/* <button
                className="btn back"
                onClick={() => setCurrentForm("package")}
              >
                Back
              </button> */}
              <button
                type="submit"
                className="btn next"
                form="form1"
                disabled={loading ? true : false}
                // onClick={() => setCurrentForm("consent")}
              >
                {loading ? (
                  <div
                    class="spinner-border"
                    style={{ width: "2rem", height: "2rem" }}
                    role="status"
                  ></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
            {/* </form> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
