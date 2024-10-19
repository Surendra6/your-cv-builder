import Textfield from "../design-system/Textfield";

const PersonalDetails = ({ personalDetails, dispatch }) => {
  const handleOnChange = (e) => {
    dispatch({
      type: "UPDATE_PERSONAL_DETAILS",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div className="text-black">
      <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Textfield
          name="firstName"
          label={"First Name"}
          onChange={handleOnChange}
          value={personalDetails.firstName}
        />
        <Textfield
          name="lastName"
          label={"Last Name"}
          onChange={handleOnChange}
          value={personalDetails.lastName}
        />
        <Textfield
          name="phone"
          label={"Phone Number"}
          onChange={handleOnChange}
          value={personalDetails.phone}
        />
        <Textfield
          name="email"
          label={"Email ID"}
          onChange={handleOnChange}
          value={personalDetails.email}
        />
        <Textfield
          name="city"
          label={"City"}
          onChange={handleOnChange}
          value={personalDetails.city}
        />
        <Textfield
          name="country"
          label={"Country"}
          onChange={handleOnChange}
          value={personalDetails.country}
        />
        <Textfield
          name="linkedin"
          label={"LinkedIn URL"}
          onChange={handleOnChange}
          value={personalDetails.linkedin}
        />
        <Textfield
          name="github"
          label={"GitHub URL"}
          onChange={handleOnChange}
          value={personalDetails.github}
        />
        <input
          type="file"
          className="border p-2 rounded col-span-1 md:col-span-2"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
