import styled, {keyframes} from 'styled-components'

function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return ""+ +r + "," + +g + "," + +b + ""
}

// Meta

export const enableshadows = ` true;`

export const glyphiconshalflingsincludebonus = ` false;`
export const glyphiconshalflingsclassprefix = ` glyphicon;`
export const glyphiconshalflingsfontbasesize = ` 14px;`

export const glyphiconshalflingsfontpath = ` "../fonts/glyphicons";`
export const fafontpath = ` "../fonts/fontawesome";`

export const la = `1199.98px`
export const me = `991.98px`
export const sm = `767.98px`
export const xs = `575.98px`
export const inputboxshadow = `inset 0 1px 1px rgba(0,0,0,.075)`
export const spacer = `1rem`

/*
 * typography
 * ======================================================================== */
export const fontsizeinitial = ` 14px; // reset default browser value from 16px to 13px`
export const fontsizebase = ` 1rem;`
export const fontsizelg = ` 1.25rem;`
export const fontsizesm = ` .875rem;`
export const fontsizelarger = ` 1.1rem;`
export const fontsizemini = ` 0.9rem;`
export const fontsizeindex = ` 0.7rem;`

export const fontfamilybase = ` "Open Sans", sansserif;`

// Color system
//

export const white = `#f4f4f5`
export const gray100 = `#f8f9fa;`
export const gray200 = `#e9ecef;`
export const gray300 = `#d6dee5;`
export const gray400 = `#c1ccd3;`
export const gray500 = `#a3aeb7;`
export const gray600 = `#798892;`
export const gray700 = `#495057;`
export const gray800 = `#3c484f;`
export const gray900 = `#29323a;`
export const black = `#000;`
export const graylight = `${gray100}!default;`

export const bgcustomdark = ` #040620;`
export const maingradient = ` radialgradient(
  farthestside ellipse at 10% 0,
  #333867 20%,
  #17193b
);`

export const lime = ` #8cbf26;`
export const red = ` #db2a34 ;`
export const reddark = ` #d04f4f ;`
export const blue = ` #2477ff;`
export const green = ` #2d8515;`
export const orange = ` #e49400;`
export const pink = ` #e671b8;`
export const purple = ` #a700ae;`
export const brown = `#a05000;`
export const teal = ` #4179cf;`
export const subtleblue = ` #474d84;`
export const gray = ` #595d78;`
export const inverse = ` #30314e;`
export const violet_deep = ` #1b1e3c;`
export const iconblue = ` #3979F6;`
export const darkblue = `#1b1e3f`

export const themecolors = `(
  primary: blue,
  secondary: rgba(${hexToRGB(white)}, 0.9),
  success: green,
  info: teal,
  warning: orange,
  danger:red,
  dark:gray700,
  inverse:inverse,
  gray: gray,
  lime: lime,
  light: gray100,
  default: subtleblue,
  primarylight:#dee4ee,
  successlight: #ecfaec,
  infolight: #f2fafa,
  warninglight: #fdf7e6,
  dangerlight: #fff2ef,
);`

export const linkcolor = ` #1870dc;`
export const iconcolor = ` ${iconblue};`

export const textcolor = ` rgba(${hexToRGB(white)}, 0.9);`
export const contentcolor = ` rgba(${hexToRGB(white)}, 0.6);`
export const textmuted = ` ${gray400};`

export const fontweightbold = ` 700;`
export const fontweightsemibold = ` 600;`
export const fontweightnormal = ` 400;`
export const fontweightthin = ` 300;`
export const fontweightbase = ` ${fontweightthin};`

export const additionbg = ` ${gray100};`

export const bodybg = ` #fafbff;`
export const bodybglight = ` lighten(${bodybg}, 3%);`

//== Components
//

export const gridgutterwidth = ` 40px;`

export const contentpadding = ` 40px;`

export const navlinkpadding = ` 10px;`

export const borderradius = ` 0.3rem;`
export const borderradiuslg = ` 0.35rem;`
export const borderradiussm = ` 0.25rem;`

//== Layout 

//== Sidebar
//

export const sidebarwidthopen = ` 200px;`
export const sidebarwidthclosed = ` 50px;`
export const sidebartransitiontime = ` 0.3s;`

export const sidebarbgcolor = ` transparent;`
export const sidebarcolor = ` rgba(${hexToRGB(white)}, 0.9);`
export const sidebaractionbg = ` transparent;`

export const sidebaritembordercolor = ` transparent;`
export const sidebaritemactivecolor = ` ${orange};`
export const sidebaritempadding = ` 13px 20px;`
export const sidebarsubitempadding = ` 10px 20px 10px 35px;`
export const sidebarscrollbarbg = ` transparent;`
export const sidebaritemhoverbgcolor = ` rgba(0, 0, 0, 0.07);`
export const chatsidebarbgcolor = ` ${sidebarbgcolor};`

export const breadcrumbdivider = ` ">";`
export const breadcrumbpaddingy = ` 0`
export const breadcrumbbg = ` transparent;`

// Widgets
// 
export const widgetbg = ` rgba(0, 0, 0, 0.24);`
export const widgetborderradius = ` 10px;`
export const widgetpaddingvertical = ` 15px;`
export const widgetpaddinghorizontal = ` 20px;`
export const widgetbgcolor = ` rgba(0, 0, 0, 0.24)`

export const widgettitlecolor = ` #fff;`
export const widgetshadow = ` 0 25px 20px 20px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.06);`
export const widgetshadowdesignated = ` 1px 0 8px ${gray400};`

export const texttransparent = ` 
                                ${widgetbgcolor};
                                opacity: 0.07;
                              `
export const bgaddition = ` darken(${widgetbgcolor}, 0.07);`
export const bgprogress = ` #30314e;`

export const inputbtnlineheight = ` 1.5;`

export const inputbtnpaddingy = ` 0.5rem;`
export const inputbtnpaddingx = ` 0.75rem;`

export const inputcolor = ` ${gray700};`
export const inputbordercolor = ` ${white};`
export const inputfocusbordercolorw = ` #66afe9;`

export const inputbtnpaddingysm = ` 0.4rem;`
export const inputbtnpaddingxsm = ` 0.8rem;`

export const inputgroupaddonbg = ` ${bgaddition};`
export const inputgroupaddonbordercolor = ` transparent;`

//== Navbar
//

export const navbarheight = ` 64px;`
export const navbarpaddingy = ` 0;`
export const navbarpaddingx = ` 0;`

// Custom navbar links
export const navbarlinkcolor = ` ${texttransparent};`
export const navbarlinkhovercolor = ` ${gray800};`
export const navbarlinkhoverbg = ` transparent;`
export const navbarlinkactivecolor = ` ${gray700};`
export const navbarlinkactivebg = ` ${gray300};`
export const navbarlinkdisabledcolor = ` ${gray400};`
export const navbarlinkdisabledbg = ` transparent;`
export const navbarbg = ` transparent;`

// Dropdowns
export const dropdownlinkcolor = ` ${textcolor};`
export const dropdownlinkhoverbg = ` themecolor("primary");`
export const dropdownlinkhovercolor = ` ${textcolor};`
export const dropdownbg = ` rgba(${hexToRGB(bgaddition)}, 0.8});`

//== Navs
//
export const navtabsactivelinkhoverbg = ` ${widgetbgcolor};`
export const navtabsactivelinkhovercolor = ` ${gray700};`

//== Forms
//
export const inputfocusbordercolor = ` #4d90fe; //webkit focus color`

//*  Popover  */
export const popoverbg = ` #ebeff1;`
export const popoverarrowoutercolor = ` ${popoverbg};`
export const popoverarrowcolor = ` ${popoverbg};`

// Badge
export const badgefontweight = ` 600;`
export const badgefontsize = ` 0.875em;`
export const badgepaddingy = ` 4px;`
export const badgepaddingx = ` 8px;`

// Breadcrumbs
export const breadcrumbactivecolor = ` ${gray700};`

// Progress bars
export const progressheight = ` 0.65rem;`

// Alerts
export const alerttransparent = ` 0.25;`

// Buttons
export const inputbtnpaddingyb = ` 0.375rem;`
export const inputbtnpaddingxb = ` 1rem;`

export const btndefaultbg = ` ${additionbg};`
export const btndefaultborder = ` ${additionbg};`

// Table
export const tableborderwidth = ` 1px;`
export const tableaccentbg = ` ${widgetbgcolor};`
export const tablebordercolor = ` rgba(51, 51, 51, 0.35);`

// Pagination
export const paginationcolor = ` ${gray700};`
export const paginationbg = ` #fff;`
export const paginationborder = ` transparent;`

export const paginationhovercolor = ` ${gray700};`
export const paginationhoverbg = ` transparent;`
export const paginationhoverborder = ` transparent;`
export const paginationhoverbordercolor = ` transparent;`

export const paginationactivecolor = ` ${gray700};`
export const paginationactivebg = ` transparent;`
export const paginationactiveborder = ` transparent;`
export const paginationactivebordercolor = ` transparent;`

export const paginationdisabledcolor = ` ${gray700};`
export const paginationdisabledbg = ` #fff;`
export const paginationdisabledborder = ` transparent;`

// == Components
export const jumbotronbg = ` ${widgetbgcolor};`

// == Components
export const paddingsmallvertical = ` 0.25rem;`
export const paddingsmallhorizontal = ` 0.75rem;`

// == Cards
export const cardborderradius = ` ${widgetborderradius};`

// Screens
// 

export const screenlgheight = ` 670px;`

// Awesome Checkbox
// 
export const awesomecheckboxdefaultcolor = ` #eee;`