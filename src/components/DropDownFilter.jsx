import { Dropdown, DropdownItem } from "flowbite-react";

export default function DropDownFilter({onClickAction}) {
    return (
        <Dropdown label="Urutkan" dismissOnClick={false} color="alternative">
            <DropdownItem onClick={() => onClickAction('harga-murah')}>Harga Termurah</DropdownItem>
            <DropdownItem onClick={() => onClickAction('harga-mahal')}>Harga Termahal</DropdownItem>
            <DropdownItem onClick={() => onClickAction('alfabet-turun')}>Alfabet Menurun</DropdownItem>
            <DropdownItem onClick={() => onClickAction('alfabet-naik')}>Alfabet Menaik</DropdownItem>
        </Dropdown>
    )
}