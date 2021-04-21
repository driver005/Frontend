import React from "react"
import styled from "styled-components"
import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList
} from "./Components"
import { MenuItemsBooks } from "./Items/books"
import { Dropdownlink, Iconsquare, Menutitle, Navcard, Navcolumn, Navcontentimg, Navcontentwarp, Navdropcontainer, Navlinkdetails, Navlistwrapper, Navlist } from "./styles"

const DevelopersDropdownEl = styled.div`
  
 
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div:first-of-type {
    margin-right: 48px;
  }
`

function NavCardObj(props) {
  return (
      <Dropdownlink>
          <Iconsquare>
              <Navcontentimg src={props.imgUrl} />
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
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
          <Flex>
            <Navdropcontainer>
                {MenuItemsBooks.map((item, index) => {
                    return (
                        <Navcolumn key={index}>
                            <Navcard>
                                <NavCardObj 
                                    name={item.Card.Cardelement1.name} 
                                    detail={item.Card.Cardelement1.detail} 
                                    imgUrl={item.Card.Cardelement1.imgUrl} 
                                />
                                <NavCardObj 
                                    name={item.Card.Cardelement2.name} 
                                    detail={item.Card.Cardelement2.detail} 
                                    imgUrl={item.Card.Cardelement2.imgUrl} 
                                />
                                <NavCardObj 
                                    name={item.Card.Cardelement3.name} 
                                    detail={item.Card.Cardelement3.detail} 
                                    imgUrl={item.Card.Cardelement3.imgUrl} 
                                />
                            </Navcard>
                        </Navcolumn>
                    )
                })}
            </Navdropcontainer>
          </Flex>
      </DropdownSection>
    </DevelopersDropdownEl>
  )
}

export default DevelopersDropdown
