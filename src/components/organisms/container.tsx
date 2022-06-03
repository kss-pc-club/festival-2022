import styled from '@emotion/styled'

const Container = styled.div<{
  maxWidth?: string
  margin?: string
  padding?: string
  align?: string
}>`
  margin: ${(props) => props.margin || '0 auto'};
  padding: ${(props) => props.padding || '0 4vw'};
  max-width: ${(props) => props.maxWidth || '1120px'};
  text-align: ${(props) => props.align || 'unset'};
`

export default Container
