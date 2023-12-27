import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@nextui-org/react";
import Icons from "./Icons";

type dropDownType = {
    text: string
    label: string
}



export default function DropDown(prop: dropDownType) {
    return (
        <div>
            <p className="pb-[5px] font-medium pl-1">{prop.text}</p>
            <Dropdown className="w-full">
                <DropdownTrigger>
                    <Button
                        className="w-[280px] bg-white border-2 text-neutral-400 border-neutral-100 flex text-start justify-between rounded-[2px] g-"
                        variant="light"
                    >
                        {prop.label}
                        <Icons size={18} href="" src="/Arrow.svg" />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" className="w-[280px] rounded-[2px]">
                    <DropdownItem key="new">Lorem</DropdownItem>
                    <DropdownItem key="copy">Lorem</DropdownItem>
                    <DropdownItem key="edit">Lorem</DropdownItem>
                    <DropdownItem key="delete">
                        Lorem
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
