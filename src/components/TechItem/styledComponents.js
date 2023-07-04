import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const TechItemContainer = styled.li`
  list-style-type: none;
  margin: 10px 10px 10px 0px;
  padding: 0px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
`
export const TechItemImgLogo = styled.img`
  width: 50px;
  margin: 5px;
`

export const TechItemName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: #1e293b;
  margin: 5px;
`
