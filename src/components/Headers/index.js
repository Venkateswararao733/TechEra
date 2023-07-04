import {HeadersContainer, LinkItem, WebsiteImageLogo} from './styledComponents'

const Headers = () => (
  <HeadersContainer>
    <LinkItem to="/">
      <WebsiteImageLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </LinkItem>
  </HeadersContainer>
)

export default Headers
