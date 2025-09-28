import { useTranslation } from "react-i18next";
import { MenuItemsLinks } from "./Items/links"
import { Dropdownlink, Iconsquare, Menutitle, Navcolumn, Navcontentimg, Navcontentwarp, Navdropcontainer, Navlinkdetails, Navcard2, Flex, DropdownSection } from "./styles"

function NavCardObj(props) {
    const { t } = useTranslation();

    return (
        <Dropdownlink href={props.href} target="_blank" rel="noopener noreferrer">
            <Iconsquare>
                <Navcontentimg loading="lazy" src={props.imgUrl} />
            </Iconsquare>
            <Navcontentwarp>
                <Menutitle>{t(`links.${props.name}.name`)}</Menutitle>
                <Navlinkdetails>
                    {t(`links.${props.name}.detail`)}
                </Navlinkdetails>
            </Navcontentwarp>
        </Dropdownlink>
    )
}

const LinksDropdown = () => {
    return (
        <DropdownSection data-first-dropdown-section>
            <Flex>
                <Navdropcontainer>
                    {MenuItemsLinks.map((item, index) => {
                        return (
                            <Navcolumn key={index}>
                                <Navcard2>
                                    {item.Card.Cardelement1 && (
                                        <NavCardObj
                                            name={item.Card.Cardelement1.key}
                                            imgUrl={item.Card.Cardelement1.imgUrl}
                                            href={item.Card.Cardelement1?.href}
                                        />
                                    )}
                                    {item.Card.Cardelement2 && (
                                        <NavCardObj
                                            name={item.Card.Cardelement2.key}
                                            imgUrl={item.Card.Cardelement2.imgUrl}
                                            href={item.Card.Cardelement2?.href}
                                        />
                                    )}
                                    {item.Card.Cardelement3 && (
                                        <NavCardObj
                                            name={item.Card.Cardelement3.key}
                                            imgUrl={item.Card.Cardelement3.imgUrl}
                                            href={item.Card.Cardelement3?.href}
                                        />
                                    )}
                                </Navcard2>
                            </Navcolumn>
                        )
                    })}
                </Navdropcontainer>
            </Flex>
        </DropdownSection>
    )
}

export default LinksDropdown
