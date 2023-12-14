import React from "react";
import SkillsItem from './SkillsItem';
import Htm from 'public/assets/skills/html.png'
import Css from 'public/assets/skills/css.png'
import Cpp from 'public/assets/skills/cpp.png'
import Javascript from 'public/assets/skills/javascript.png'
import postgres from 'public/assets/skills/postgres.png'
import Mongo from 'public/assets/skills/mongo.png'
import Next from 'public/assets/skills/nextjs.svg'
import Node from 'public/assets/skills/node.png'
import Reactjs from 'public/assets/skills/react.png'

const Skills = () => {
  return (
    <div id='skills' className="w-full lg:h-full p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillsItem linkName={Htm} text='HTML' />
          <SkillsItem linkName={Css} text='CSS' />
          <SkillsItem linkName={Javascript} text='JavaScipt' />
          <SkillsItem linkName={Reactjs} text='React' />
          <SkillsItem linkName={Node} text='Node JS' />
          <SkillsItem linkName={Next} text='Next JS' />
          <SkillsItem linkName={postgres} text='PostgreSQL' />
          <SkillsItem linkName={Mongo} text='Mongo DB' />
          <SkillsItem linkName={Cpp} text='C++' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
