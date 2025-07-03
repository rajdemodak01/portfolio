// import React from 'react'
import SkillBar from "../components/SkillBar";

function Skills() {
  return (
    <div className="flex flex-col items-center dark:text-white mt-5">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      {/* <div className="flex justify-center items-center w-full"> */}
        <div className="md:w-3/6 w-full grid md:grid-cols-3 grid-cols-1 gap-x-10">
          <SkillBar skillName="JavaScript" percentage={85} />
          <SkillBar skillName="Python" percentage={70} />
          <SkillBar skillName="React" percentage={80} />
          <SkillBar skillName="Node.js" percentage={75} />
          <SkillBar skillName="C++" percentage={60} />
          <SkillBar skillName="Java" percentage={65} />
        </div>
      {/* </div> */}
    </div>
  );
}

export default Skills;
