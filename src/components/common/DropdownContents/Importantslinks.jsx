import { MenuItemsLinks } from "./Items/links"
import { Dropdownlink, Iconsquare, Menutitle, Navcolumn, Navcontentimg, Navcontentwarp, Navdropcontainer, Navlinkdetails, Navcard2, Flex, DropdownSection } from "./styles"

function NavCardObj(props) {
  return (
      <Dropdownlink href={props.href} target="_blank" rel="noopener noreferrer">
          <Iconsquare>
              <Navcontentimg loading="lazy" src={props.imgUrl} />
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
                                name={item.Card.Cardelement1.name} 
                                detail={item.Card.Cardelement1.detail} 
                                imgUrl={item.Card.Cardelement1.imgUrl}
                                href={item.Card.Cardelement1?.href}
                            />
                            )}
                            {item.Card.Cardelement2 && (
                            <NavCardObj 
                                name={item.Card.Cardelement2.name} 
                                detail={item.Card.Cardelement2.detail} 
                                imgUrl={item.Card.Cardelement2.imgUrl} 
                                href={item.Card.Cardelement2?.href}
                            />
                            )}
                            {item.Card.Cardelement3 && (
                            <NavCardObj 
                                name={item.Card.Cardelement3.name} 
                                detail={item.Card.Cardelement3.detail} 
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
