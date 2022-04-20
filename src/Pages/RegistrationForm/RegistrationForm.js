import React, { useState } from "react";
import Packages from "../../Components/Packages/Packages";
import RegistrationCard from "../../Components/RegistrationCard/RegistrationCard";
import regImage from "../../Assets/Images/regImage.svg";
import refIcon from "../../Assets/Images/Icons/refIcon.svg";
import "./RegistrationForm.scss";

import countries from "../../Shared/Data/countries.json";
import Select from "react-select";
import emailjs from "emailjs-com";

function RegistrationForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zhe1pvp",
        "template_08ibrp4",
        e.target,
        "Blp53EzBsHt7ji3lO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(
      "Your results has been sent, check your email for payment instructions"
    );
  };

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

  console.log(PackageValues);

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

  return (
    <>
      <div className="regFormPage container">
        <div className="regForm">
          <form onSubmit={sendEmail}>
            <div className="regForm1">
              <h1>Personal & Contact Information</h1>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="inputName">
                    Full Name (as it appears on your passport)
                  </label>
                  <input
                    className="form-control"
                    id="inputName"
                    name="from_name"
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
                    id="inputState"
                    name="gender"
                    className="form-control"
                    onChange={(e) =>
                      setPersonalContactValues({
                        ...personalContactValues,
                        gender: e.target.value,
                      })
                    }
                    required
                  >
                    <option disabled selected>
                      Choose...
                    </option>

                    <option>Male</option>
                    <option>Female</option>
                    <option>Non-binary</option>
                    <option>Prefer not to say</option>
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
                    id="inputState"
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
                    <option disabled selected>
                      Choose...
                    </option>
                    {countries.map((item, i) => {
                      return <option key={i}>{item.name}</option>;
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
                    If you use a different number for Whatsapp, please state
                    below
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
                    Emergency Contact Phone number (in international format
                    +7xxxxxx)
                  </label>
                  <input
                    name="emergency_number"
                    required
                    className="form-control"
                    placeholder="Number"
                    onChange={(e) =>
                      setPersonalContactValues({
                        ...personalContactValues,
                        whatsappNumber: e.target.value,
                      })
                    }
                  />
                  <div className="invalid-feedback">
                    Emergency Contact Phone number is required.
                  </div>
                </div>
              </div>

              {/* <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="validatedCustomFile"
                  required
                  name="file"
                />
                <label className="custom-file-label" for="validatedCustomFile">
                  Choose file...
                </label>
                <div className="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div> */}

              {/* <button type="submit" className="btn btn-primary">
                  Next
                </button> */}

              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>

            <div className="regForm2">
              <h1>Affiliation</h1>
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="inputName">
                    How did you hear about this event?
                  </label>

                  <Select
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
                    <option disabled selected>
                      Choose...
                    </option>
                    {countries.map((item, i) => {
                      return <option key={i}>{item.name}</option>;
                    })}
                  </select>

                  <div className="invalid-feedback">Gender is required.</div>
                </div>
              </div>

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
                      setPersonalContactValues({
                        ...AffiliationValues,
                        yearStudies: e.target.value,
                      })
                    }
                    required
                  >
                    <option disabled selected>
                      Choose...
                    </option>

                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                    <option>5th Year</option>
                    <option>6th Year</option>
                    <option>Internship</option>
                    <option>Graduated</option>
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
                    <option disabled selected>
                      Choose...
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <div className="invalid-feedback">
                    This field is required.
                  </div>
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
                        being approached and following through with the
                        procedures of obtaining a personal membership with a
                        yearly fee of 50 euros
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
                      <option disabled selected>
                        Choose...
                      </option>

                      <option>Yes</option>
                      <option>No</option>
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
                      <option disabled selected>
                        Choose...
                      </option>

                      <option>Yes</option>
                      <option>No</option>
                    </select>

                    <div className="invalid-feedback">
                      This field is required.
                    </div>
                  </div>
                </div>
              </div>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>

            <div className="regForm3">
              <h1>Passport Details</h1>
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
                      setPersonalContactValues({
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
                <div className="form-group col-md-4">
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

                <div className="form-group col-md-4">
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

                <div className="form-group col-md-4">
                  <label for="inputName">
                    Do you need a letter for visa clearance?
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
                    <option disabled selected>
                      Choose...
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <div className="invalid-feedback">
                    This field is required.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="custom-file">
                  <label
                    className="custom-file-label"
                    for="validatedCustomFile"
                  >
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

              <br></br>
              <br></br>
            </div>

            <div className="regForm4">
              <h1>Vaccination Details</h1>
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
                    <option disabled selected>
                      Choose...
                    </option>

                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>None</option>
                  </select>

                  <div className="invalid-feedback">
                    This field is required.
                  </div>
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
                    <option disabled selected>
                      Choose...
                    </option>

                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <div className="invalid-feedback">
                    This field is required.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="custom-file">
                  <label
                    className="custom-file-label"
                    for="validatedCustomFile"
                  >
                    Upload proof of vaccination
                  </label>
                  <input
                    type="file"
                    className="custom-file-input"
                    id="validatedCustomFile"
                    required
                    name="vaccine_photo"
                  />

                  <div className="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
              </div>

              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>

            <div className="regForm5">
              <h1>Package Details</h1>
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
                    <option disabled selected>
                      Choose...
                    </option>

                    <option>Package A = Congress 370 euros</option>
                    <option>Package B = Precongres + Congress 460 euros</option>
                    <option>
                      Package C = Congres + Post Congress 520 euros
                    </option>
                    <option>
                      Package D = Precongress + Congress + Post Congress 610
                      euros
                    </option>
                  </select>

                  <div className="invalid-feedback">
                    This field is required.
                  </div>
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
                    <option disabled selected>
                      Choose...
                    </option>

                    <option>Single Room</option>
                    <option>Double Room</option>
                  </select>

                  <div className="invalid-feedback">
                    This field is required.
                  </div>
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
                        I understand that there is an extra pricing for the
                        single room and I intend to make that addition to my
                        registration fee transfer.
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

              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>

            <div className="regForm5">
              <h1>Consent</h1>
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
                      myself and the organisation I am a member of, and that in
                      no way will I discriminate or pose a threat to any
                      attendee’s, IADS official’s or local organiser’s civil
                      rights. I declare that I understand any breach of these
                      rules is grounds for being reported to the Triple C and I
                      will be subjected to disciplinary sanctions.
                    </label>
                    <div class="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
              </div>

              <br></br>
              <br></br>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <br></br>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
