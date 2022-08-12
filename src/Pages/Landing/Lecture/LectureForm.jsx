import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    emailjs.sendForm(
      "service_qd6c2wx",
      "template_krrx5lk",
      e.target,
      "Blp53EzBsHt7ji3lO"
    );

    alert("Form submitted successfully!");
    e.target.reset();

    console.log(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <label>Full Name*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="fullName"
        {...register("fullName", { required: true })}
      />
      <label>Email Address*</label>
      <input
        type="email"
        placeholder="Type Here..."
        id="email"
        {...register("email", { required: true })}
      />

      <label>Country*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="country"
        {...register("country", { required: true })}
      />

      <label>Nationality*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="nationality"
        {...register("nationality", { required: true })}
      />

      <label>University*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="uni"
        {...register("uni", { required: true })}
      />

      <label>Academic Year*</label>
      <select
        {...register("academicYear", { required: true })}
        style={{ marginBottom: "20px" }}
      >
        <option label="Choose..."></option>
        <option value="Year 1">Year 1</option>
        <option value="Year 2">Year 2</option>
        <option value="Year 3">Year 3</option>
        <option value="Year 4">Year 4</option>
        <option value="Year 5">Year 5</option>
        <option value="Year 6">Year 6</option>
        <option value="Intern">Intern</option>
        <option value="2 Years after graduation">
          2 Years after graduation
        </option>
      </select>

      <label>Association*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="association"
        {...register("association", { required: true })}
      />

      <label>Abstract Title*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="absTitle"
        {...register("absTitle", { required: true })}
      />

      <label>Introduction*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="intro"
        {...register("intro", { required: true })}
      />

      <label>Objectives of the investigation*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="objectives"
        {...register("objectives", { required: true })}
      />

      <label>Experimental Methods Used*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="experimental"
        {...register("experimental", { required: true })}
      />

      <label>Essential results including data*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="essential"
        {...register("essential", { required: true })}
      />

      <label>Eventual statistics*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="eventual"
        {...register("eventual", { required: true })}
      />

      <label>Conclusion*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="conclusion"
        {...register("conclusion", { required: true })}
      />

      <label>Keywords*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="keywords"
        {...register("keywords", { required: true })}
      />

      <div
        className="submitt"
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <input type="submit" />
      </div>
    </form>
  );
}
