import React from "react"
import { MenuItemsBooks } from "./Items/services"
import { Dropdownlink, Flex, Iconsquare, Menutitle, Navcard, Navcolumn, Navcontentimg, Navcontentwarp, Navdropcontainer, Navlinkdetails, DropdownSection } from "./styles"


function NavCardObj(props) {
  return (
      <Dropdownlink href={props.href}>
          <Iconsquare>
              {props.imgUrl && <Navcontentimg src={props.imgUrl} />}
              {props.icon && <React.Fragment>{props.icon}</React.Fragment>}
          </Iconsquare>
          <Navcontentwarp>
              <Menutitle>{props.name}</Menutitle>
              <Navlinkdetails>
                  {props.detail}
              </Navlinkdetails>
          </Navcontentwarp>
      </Dropdownlink>
  )
}

const DevelopersDropdown = () => {
  return (
      <DropdownSection data-first-dropdown-section>
        <Flex>
          <Navdropcontainer>
            {MenuItemsBooks.map((item, index) => {
                  return (
                    <Navcolumn key={index}>
                        <Navcard>
                            {item.Card.Cardelement1 && (
                            <NavCardObj
                                name={item.Card.Cardelement1.name} 
                                detail={item.Card.Cardelement1.detail} 
                                imgUrl={item.Card.Cardelement1.imgUrl}
                                icon={item.Card.Cardelement1?.icon}
                                href={item.Card.Cardelement1?.href}
                            />
                            )}
                            {item.Card.Cardelement2 && (
                            <NavCardObj 
                                name={item.Card.Cardelement2.name} 
                                detail={item.Card.Cardelement2.detail} 
                                imgUrl={item.Card.Cardelement2.imgUrl} 
                                icon={item.Card.Cardelement2?.icon}
                                href={item.Card.Cardelement2?.href}
                            />
                            )}
                            {item.Card.Cardelement3 && (
                            <NavCardObj 
                                name={item.Card.Cardelement3.name} 
                                detail={item.Card.Cardelement3.detail} 
                                imgUrl={item.Card.Cardelement3.imgUrl}
                                icon={item.Card.Cardelement3?.icon}
                                href={item.Card.Cardelement3?.href} 
                            />
                            )}
                        </Navcard>
                    </Navcolumn>  
                  )
              })}
            </Navdropcontainer>
          </Flex>
      </DropdownSection>
  )
}

export default DevelopersDropdown
