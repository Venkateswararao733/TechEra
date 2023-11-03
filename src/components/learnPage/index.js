import './index.css'

const LearnPage = () => (
  <div className="learn-container">
    <div className="learn-inf-container">
      <h1 className="learn-heading">YOU WILL LEARN:</h1>
      <div className="learn-points-container">
        <p className="point">* Evolution of AI and Corporate Training</p>
        <p className="point">
          * How AI can close skills gaps with rapid upskilling and reskilling
        </p>
        <p className="point">
          * Steps to integrate AI tools in training programs
        </p>
        <p className="point">
          * Challenges and opportunities with AI implementation
        </p>
        <p className="point">* Roadmap to align training with business goals</p>
        <p className="point">
          * Live action – creating assets with Vyond Go, Synthesia, Quizbot
        </p>
        <p className="point">* Best way Learning Architects can use AI</p>
      </div>
      <h1 className="learn-heading">
        Unleashing the Potential of <br /> AI in Corporate Training
      </h1>
      <p className="point" style={{textAlign: 'center', margin: '5px'}}>
        The Impact of AI on L&D – Insights and Applications
      </p>
      <h1 className="schedule">Tuesday, January 09, 2024</h1>
      <h1 className="schedule">11 am Eastern | 8 am Pacific</h1>
      <h1 className="schedule">Duration: 90 Minutes</h1>
      <button type="button" className="secure-seat-button">
        <img
          src="https://res.cloudinary.com/dcrohjohe/image/upload/v1698925573/Frame_zvdbfz.svg"
          className="logo"
          alt="logo"
        />
        <div className="button-container">
          <p className="secure">SECURE YOUR SEAT</p>
          <p className="secure">$997 VALUE</p>
        </div>
      </button>
    </div>
  </div>
)

export default LearnPage
