import {
  ResponsiveContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundH1,
  NotFoundP1,
} from './styledComponents'

import Headers from '../Headers'

const NotFound = () => (
  <ResponsiveContainer>
    <Headers />
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <NotFoundH1>Page Not Found</NotFoundH1>
      <NotFoundP1>
        We are sorry, the page you requested could not be found
      </NotFoundP1>
    </NotFoundContainer>
  </ResponsiveContainer>
)

export default NotFound
