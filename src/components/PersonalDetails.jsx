import Textfield from "../design-system/Textfield";

const PersonalDetails = () => {
  return (
    <div className="text-black">
      <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Textfield label={"First Name"} />
        <Textfield label={"Last Name"} />
        <Textfield label={"Phone Number"} />
        <Textfield label={"Email ID"} />
        <Textfield label={"City"} />
        <Textfield label={"Country"} />
        <Textfield label={"LinkedIn URL"} />
        <Textfield label={"GitHub URL"} />
        <input
          type="file"
          className="border p-2 rounded col-span-1 md:col-span-2"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
