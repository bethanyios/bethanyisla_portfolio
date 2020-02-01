import React, {useState} from 'react';
import useCollapse from 'react-collapsed';
import { Stack } from '../Bubbles/bubble-buttons.js'
import './bubble-style.css';

function Collapse() {
  const [isOpen, setOpen] = React.useState(false);
  const {getCollapseProps, getToggleProps} = useCollapse({isOpen});

  return (
    <React.Fragment>
      <a
        {...getToggleProps({onClick: () => setOpen(oldOpen => !oldOpen)})}
      >
        {isOpen ? 'close' : <Stack />}
      </a>
        <ul {...getCollapseProps()} className='rectangle'>
          <li>UX Lead</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>React</li>
          <li>Express</li>
          <li>NodeJS</li>
          <li>Figma</li>
          <li>Git</li>
          <li>Postgres SQL</li>
        </ul>

    </React.Fragment>
  );
}

export default Collapse;

// const {
//   getCollapseProps,
//   getToggleProps,
//   isOpen,
//   toggleOpen,
//   mountChildren,
// } = useCollapse({
//   isOpen: boolean,
//   defaultOpen: boolean,
//   expandStyles: {},
//   collapseStyles: {},
//   collapsedHeight: 0,
// });
