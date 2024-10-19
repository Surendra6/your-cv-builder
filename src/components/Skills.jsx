import { useState } from "react";
import { MdDelete } from "react-icons/md";
import Textfield from "../design-system/Textfield";
import Button from "../design-system/Button";

const Skills = ({ skills, dispatch }) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      setNewSkill("");
      dispatch({
        type: "ADD_SKILL",
        payload: newSkill.trim(),
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addSkill();
  };

  const removeSkill = (index) => {
    dispatch({
      type: "REMOVE_SKILL",
      payload: index,
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Skills</h2>
      <div className="flex mb-4 gap-2">
        <Textfield
          label={"Add Skill"}
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyPress}
          styleClasses="flex-grow"
        />

        <Button label="Add" onClick={addSkill} />
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center rounded border border-cyan-500 px-2.5 py-1 text-xs text-grey-700 font-semibold"
          >
            <span className="text-cyan-500">{skill}</span>
            <button
              onClick={() => removeSkill(index)}
              className="ml-2 text-red-500"
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
