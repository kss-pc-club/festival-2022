import React from 'react'

import styled from '@emotion/styled'

const Base = styled.footer`
  padding: 0.5em 1em;
  margin-top: auto;
  color: var(--bs-white);
  background-color: var(--bs-secondary);
  p {
    margin: 0;
    text-align: center;
  }
`

const Footer_elem = () => {
  return (
    <React.Fragment>
      <Base>
        <p>
          <small>
            Copyright &copy; {new Date().getFullYear()} KSS PC Club <wbr />
            All Rights Reserved.
          </small>
        </p>
      </Base>
    </React.Fragment>
  )
}

export default Footer_elem