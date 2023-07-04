import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const HeadersContainer = styled.div`
  background-color: #e8e8e8;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 10px;
  min-height: 10vh;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  margin: 10px;
  padding: 0px;
`

export const WebsiteImageLogo = styled.img`
  width: 120px;
  margin: 0px;
`
