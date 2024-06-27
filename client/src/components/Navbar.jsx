import React from 'react';
import { useState } from 'react';
import { CNavbar,
  CButton,
  CNavLink,CNavItem,CFormInput,CNavbarToggler,CDropdownItem,CDropdownToggle,CDropdownDivider,CDropdownMenu,CDropdown,CCollapse,CNavbarNav,CContainer,CNavbarBrand,CForm} from '@coreui/react';
const Navbar  =()=> {
  const [visible, setVisible] = useState(false)
return (
  <>
    <CNavbar expand="lg" colorScheme="light" style={{ backgroundColor: '#e3f2fd' }}>
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="primary" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
)
 
  }

export default Navbar;