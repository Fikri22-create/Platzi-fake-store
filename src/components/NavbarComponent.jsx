import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { FcPaid } from "react-icons/fc";    
import { Link } from "react-router-dom";

export default function NavbarComponent() {
     return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img src="https://i.pinimg.com/1200x/37/09/6c/37096c914aa4f7b628540c7ac4723332.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tiga Pilar Adventure</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <FcPaid className="trxt-10xl me-3 mt-3 gap-4"/>
        <Dropdown
          arrowIcon={false} inline label={ <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Muhammad Fikri Alfarizi</span>
            <span className="block truncate text-sm font-medium">fikriamuhammad93@gmail.com</span>
          </DropdownHeader>
          <DropdownItem><Link to="/profile">Profile</Link></DropdownItem>
          <DropdownItem><Link to="/">Dashboard</Link></DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      
    </Navbar>
  );
}