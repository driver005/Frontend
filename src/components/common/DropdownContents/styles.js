import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
`

export const Navcolumn = styled.div`
    padding: 25px 15px;
    display: flex;2
    justify-content: center;
    align-items: center;
    transition: all 700ms ease;
`

export const Navdropcontainer = styled.div`
    display: flex;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    background-color: var(--bg-color);
` 


export const Navcard = styled.div`
    display: flex;
    min-width: 120px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 25px;
`


export const Navcard2 = styled.div`
    display: flex;
    min-width: 170px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 25px;
`

export const Dropdownlink = styled.a`
    display: flex;
    
    padding: 20px 22px 16px;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    box-shadow: none;

    &:hover {
        color: var(--vdi-color) !important;
        outline: 1px solid var(--vdi-color);
        // box-shadow: 0 0 0 1px var(--vdi-color);
    }
`

export const Iconsquare = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
`

export const Navcontentimg = styled.img`
    width: 56px;
    border-radius: 8px;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
`

export const Navcontentwarp = styled.div`
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`


export const Navlinkdetails = styled.div`
    color: var(--text-color);
    font-size: 14px;
`

export const Menutitle = styled.div`
    font-size: 16px;
`