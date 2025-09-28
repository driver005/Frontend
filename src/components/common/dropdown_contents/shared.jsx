import { useTranslation } from "react-i18next";
import { Dropdownlink, Iconsquare, Menutitle, Navcontentimg, Navcontentwarp, Navlinkdetails } from "./styles";

export function NavCardObj(props) {
    const { t } = useTranslation();

    return (
        <Dropdownlink href={props.href} target='_blank' rel='noopener noreferrer'>
            <Iconsquare>
                <Navcontentimg loading='lazy' src={props.imgUrl} />
            </Iconsquare>
            <Navcontentwarp>
                <Menutitle>{t(`${props.namespace}.${props.name}.name`)}</Menutitle>
                <Navlinkdetails>{t(`${props.namespace}.${props.name}.detail`)}</Navlinkdetails>
            </Navcontentwarp>
        </Dropdownlink>
    );
}
