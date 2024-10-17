import Textfield from "../design-system/Textfield";

const Education = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Education</h2>
      <div className="grid grid-cols-2 gap-4">
        <Textfield label={"University"} />
        <Textfield label={"Degree"} />
        <Textfield label={"Stream/Specialization"} />
        <Textfield label={"Country"} />
        <Textfield label={"Start Date"} />
        <Textfield label={"End Date"} />
      </div>
    </div>
  );
};

export default Education;
