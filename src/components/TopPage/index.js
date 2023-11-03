import './index.css'

const TopPage = () => (
  <div className="container">
    <p className="description">
      Some people call this artificial intelligence, but the reality is this
      technology will enhance us. So, instead of artificial intelligence, I
      think we’ll augment our intelligence - Ginni Rometty – Former CEO &
      President, IBM
    </p>
    <div className="imgInstContainer">
      <img
        src="https://res.cloudinary.com/dcrohjohe/image/upload/v1698923789/IMAGE_2_c6dgju.png"
        className="modal-img"
        alt="img"
      />
      <div className="inst-container">
        <p className="des">The Top Trending Topic of the Year</p>
        <h1 className="inst-heading">
          Unleashing the Potential of AI in Corporate Training
        </h1>
        <p className="text">
          * Learn how AI is helping corporates upskill and reskill workforce
        </p>
        <p className="text">
          * Walk away with tips, tools, and resources to get started with
          AI-empowered training
        </p>
        <h1 className="sub-head">JOIN DR RK Prasad, Shalini, Rajesh LIVE</h1>
        <p className="time-text">Tuesday, January 09, 2024</p>
        <p className="time-text">11 AM Eastern | 8 AM Pacific</p>
        <p className="time-text">Duration: 90 Minutes</p>
        <p className="time-text">
          $997 VALUE
          <span className="span-element"> FREE!</span>
        </p>
        <button className="button" type="button">
          <img
            src="https://res.cloudinary.com/dcrohjohe/image/upload/v1698925573/Frame_zvdbfz.svg"
            className="logo"
            alt="logo"
          />
          SECURE YOUR SEAT
        </button>
      </div>
    </div>
  </div>
)

export default TopPage
