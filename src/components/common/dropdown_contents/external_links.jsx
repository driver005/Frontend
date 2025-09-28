import { MenuItemsExternalLinks } from "./items/external"
import { Navcolumn, Navdropcontainer, Navcard2, Flex, DropdownSection } from "./styles"
import { NavCardObj } from "./shared"

const LinksDropdown = () => {
    return (
        <DropdownSection data-first-dropdown-section>
            <Flex>
                <Navdropcontainer>
                    {MenuItemsExternalLinks.map((item, index) => {
                        return (
                            <Navcolumn key={index}>
                                <Navcard2>
                                    {item.Card.Cardelement1 && (
                                        <NavCardObj
                                            namespace={"external"}
                                            name={item.Card.Cardelement1.key}
                                            imgUrl={item.Card.Cardelement1.imgUrl}
                                            href={item.Card.Cardelement1?.href}
                                        />
                                    )}
                                    {item.Card.Cardelement2 && (
                                        <NavCardObj
                                            namespace={"external"}
                                            name={item.Card.Cardelement2.key}
                                            imgUrl={item.Card.Cardelement2.imgUrl}
                                            href={item.Card.Cardelement2?.href}
                                        />
                                    )}
                                    {item.Card.Cardelement3 && (
                                        <NavCardObj
                                            namespace={"external"}
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
