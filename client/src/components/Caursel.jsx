import React from 'react';
import nodejs from '../icons/nodejs.svg';
import reactIcon from '../icons/react.svg';
import cpp from '../icons/cpp.svg';
import express from '../icons/express.svg';
import git from '../icons/git.svg';
import linux from '../icons/linux.svg';
import mysql from '../icons/mysql.svg';
import mongo from '../icons/mongo.svg';
import php from '../icons/php.svg';
import python from '../icons/python.svg';
import { Container } from '@mui/material';
// import '../styles/InfiniteSkillsScroller.css'; // Import the CSS file

const skills = [
  { id: 1, name: 'NodeJS', icon: nodejs },
  { id: 2, name: 'React', icon: reactIcon },
  { id: 3, name: 'C++', icon: cpp },
  { id: 4, name: 'Express', icon: express },
  { id: 5, name: 'Git', icon: git },
  { id: 6, name: 'Linux', icon: linux },
  { id: 7, name: 'MySQL', icon: mysql },
  { id: 8, name: 'MongoDB', icon: mongo },
  { id: 9, name: 'PHP', icon: php },
  { id: 10, name: 'Python', icon: python }
];

export const InfiniteSkillsScroller = () => {
  return (
    <div className="infinite-scroll-container">
      <div className="infinite-scroll">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item shadow-lg">
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
        {skills.map((skill) => (
          <div key={`clone-${skill.id}`} className="skill-item">
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const MainComponent = () => {
  return (
    <div className='px-6'>
      <InfiniteSkillsScroller />
    </div>
  );
};

export default MainComponent;