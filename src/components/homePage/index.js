import TopPage from '../TopPage'
import LearnPage from '../learnPage'
import './index.css'

const Home = () => (
  <div className="page-container">
    <TopPage />

    <div className="cNames-container">
      <img
        src="https://res.cloudinary.com/dcrohjohe/image/upload/v1698995096/IMAGE_5_cggds6.png"
        alt="img"
        className="img"
      />
    </div>

    <LearnPage />
  </div>
)

export default Home
