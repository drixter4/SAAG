import { useState } from "react";

export default function useNav() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return {
    mobileOpen,
    dropdownOpen,
    toggleMobile: () => setMobileOpen(!mobileOpen),
    openDropdown: () => setDropdownOpen(true),
    closeDropdown: () => setDropdownOpen(false),
  };
};
