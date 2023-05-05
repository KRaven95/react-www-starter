import React from "react";
import useClickOutside from "src/design-system/hooks/useClickOutside";

interface DropdownProps {
  children: React.ReactNode;
  list: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  toggle: () => void;
  className?: string;
}

const Dropdown = ({ children, list, isOpen, close, toggle, className }: DropdownProps) => {
  const dropdownRef = useClickOutside<HTMLDivElement>(close);

  return (
    <div className={`ds-dropdown${className ? ` ${className}` : ""}`} ref={dropdownRef}>
      <div role="button" onClick={toggle} className="ds-dropdown-button">
        {children}
      </div>
      <div
        className={`ds-dropdown-list list-roundness list-x list-y list-bg list-shadow list-padding${
          isOpen ? " open" : ""
        }`}
      >
        {list}
      </div>
    </div>
  );
};

export default Dropdown;
