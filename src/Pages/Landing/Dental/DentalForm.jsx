import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    emailjs.sendForm(
      "service_qd6c2wx",
      "template_zlqkbn9",
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
      <label>Team Leader Name*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="leaderName"
        {...register("leaderName", { required: true })}
      />
      <label>Email Address*</label>
      <input
        type="email"
        placeholder="Type Here..."
        id="leaderEmail"
        {...register("leaderEmail", { required: true })}
      />
      <label>University*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="leaderUni"
        {...register("leaderUni", { required: true })}
      />
      <label>Academic Year*</label>
      <select
        {...register("leaderYear", { required: true })}
        id="leaderYear"
        style={{ marginBottom: "70px" }}
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

      <label>Second Member Name*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="secondName"
        {...register("secondName", { required: true })}
      />
      <label>Email Address*</label>
      <input
        type="email"
        placeholder="Type Here..."
        id="secondEmail"
        {...register("secondEmail", { required: true })}
      />
      <label>University*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="secondUni"
        {...register("secondUni", { required: true })}
      />
      <label>Academic Year*</label>
      <select
        {...register("secondYear", { required: true })}
        style={{ marginBottom: "70px" }}
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

      <label>Third Member Name*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="thirdName"
        {...register("thirdName", { required: true })}
      />
      <label>Email Address*</label>
      <input
        type="email"
        placeholder="Type Here..."
        id="thirdEmail"
        {...register("thirdEmail", { required: true })}
      />
      <label>University*</label>
      <input
        type="text"
        placeholder="Type Here..."
        id="thirdUni"
        {...register("thirdUni", { required: true })}
      />
      <label>Academic Year*</label>
      <select {...register("thirdYear", { required: true })}>
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
      <br />
      <br />
      <br />
      <div
        className="submitt"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input type="submit" />
      </div>
    </form>
  );
};

export default Form1;
