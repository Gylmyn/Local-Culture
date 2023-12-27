
import Icons from './Icons'

type titleType = {
    title: string
    iconSrc: string
}

export default function Title(prop: titleType) {
    return (
        <div className="pb-[28px] flex gap-[26px]">
            <Icons size={55} href="" src={prop.iconSrc}/>
            <p className="text-3XL font-semibold">{prop.title}</p>

        </div>
    )
}
