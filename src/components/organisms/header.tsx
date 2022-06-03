import React from 'react'

import styled from '@emotion/styled'

const Base = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  font-size: 1.5em;
  color: var(--bs-white);
  background-color: var(--bs-primary);
`

const Header_elem = () => {
  return (
    <React.Fragment>
      <Base>KSS PC Club</Base>
    </React.Fragment>
  )
}

export default Header_elem
