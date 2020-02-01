import React, {useState} from 'react';
import useCollapse from 'react-collapsed';
import { Stack, StackText } from '../Bubbles/bubble-buttons.js'


function Collapse() {
  const [isOpen, setOpen] = React.useState(false);
  const {getCollapseProps, getToggleProps} = useCollapse({isOpen});

  return (
    <React.Fragment>
      <section
        {...getToggleProps({onClick: () => setOpen(oldOpen => !oldOpen)})}
      >
        {isOpen ? <StackText /> : <Stack />}
          </section>



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
