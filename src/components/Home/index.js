import {Component} from 'react'

import {
  ResponsiveContainer,
  HomeSuccessContainer,
  HomeHeadingE1,
  TechItemsContainer,
  LoaderContainer,
  LoaderItem,
  HomeFailureContainer,
  FailureImage,
  FailureH1,
  FailureP1,
  RetryBtn,
} from './styledComponents'

import Headers from '../Headers'
import TechItem from '../TechItem'

const techApiStatus = {
  initial: 'INItIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class Home extends Component {
  state = {apiStatus: techApiStatus.initial, techArray: []}

  componentDidMount() {
    this.getTechItemsDetails()
  }

  getTechItemsDetails = async () => {
    this.setState({apiStatus: techApiStatus.progress})
    const url = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(url)
    if (response.ok === true) {
      const jsonData = await response.json()
      const UpdatedCoursesData = jsonData.courses.map(eachCourse => ({
        id: eachCourse.id,
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
      }))
      this.setState({
        apiStatus: techApiStatus.success,
        techArray: UpdatedCoursesData,
      })
    } else {
      this.setState({apiStatus: techApiStatus.failure})
    }
  }

  retryBtnClicked = () => {
    this.getTechItemsDetails()
  }

  renderProgressView = () => (
    <LoaderContainer data-testid="loader">
      <LoaderItem type="ThreeDots" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {techArray} = this.state
    return (
      <HomeSuccessContainer>
        <HomeHeadingE1>Courses</HomeHeadingE1>
        <TechItemsContainer>
          {techArray.map(eachItem => (
            <TechItem key={eachItem.id} techItem={eachItem} />
          ))}
        </TechItemsContainer>
      </HomeSuccessContainer>
    )
  }

  renderFailureView = () => (
    <HomeFailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt=" failure view"
      />
      <FailureH1>Oops! Something Went Wrong</FailureH1>
      <FailureP1>We cannot seem to find the page you are looking for</FailureP1>
      <RetryBtn type="button" onClick={this.retryBtnClicked}>
        Retry
      </RetryBtn>
    </HomeFailureContainer>
  )

  renderHomeView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case techApiStatus.progress:
        return this.renderProgressView()
      case techApiStatus.success:
        return this.renderSuccessView()
      case techApiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ResponsiveContainer>
        <Headers />
        {this.renderHomeView()}
      </ResponsiveContainer>
    )
  }
}

export default Home
