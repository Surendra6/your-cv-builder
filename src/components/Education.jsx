import Textfield from "../design-system/Textfield";

const Education = ({ education, dispatch }) => {
  const handleOnChange = (e) => {
    dispatch({
      type: "UPDATE_EDUCATION",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Education</h2>
      <div className="grid grid-cols-2 gap-4">
        <Textfield
          label={"University"}
          name="university"
          onChange={handleOnChange}
          value={education.university}
        />
        <Textfield
          label={"Degree"}
          name="degree"
          onChange={handleOnChange}
          value={education.degree}
        />
        <Textfield
          label={"Stream/Specialization"}
          name="specialization"
          onChange={handleOnChange}
          value={education.specialization}
        />
        <Textfield
          label={"Country"}
          name="country"
          onChange={handleOnChange}
          value={education.country}
        />
        <Textfield
          label={"Start Date"}
          name="startDate"
          onChange={handleOnChange}
          value={education.startDate}
        />
        <Textfield
          label={"End Date"}
          name="endDate"
          onChange={handleOnChange}
          value={education.endDate}
        />
      </div>
    </div>
  );
};

export default Education;
