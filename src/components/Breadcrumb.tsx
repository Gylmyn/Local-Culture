import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import React from 'react'
import Header from "./Header";
import Image from "next/image";
import Icons from "./Icons";

type types = {
    href: string
    logo: string
    breadTitle : string
}

export default function Bread(prop: types) {
    return (
            <Link
                className="flex justify-center items-center h-medium text-primary-800 border-2 border-primary-800 px-[10px] rounded-[4px] "
                href={prop.href}>
                <div className="flex gap-[8px]">
                    <Image alt="behh" src={prop.logo} width={18} height={18}>
                    </Image>
                    <span>
                        {prop.breadTitle}
                    </span>
                </div>
            </Link>



    )
}



