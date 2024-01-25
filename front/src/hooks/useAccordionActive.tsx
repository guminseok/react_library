// AccordionComponent の状態管理
import { useState } from 'react';
export const useAccordionActive = () => {
  const [accordionActive, setAccordionActive] = useState<boolean>(false);
  const toggleActive = (bool: boolean) => {
    setAccordionActive(bool);
  };
  return { accordionActive: accordionActive, toggleActive: toggleActive };
};
