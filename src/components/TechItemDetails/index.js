import {Component} from 'react'

import {
  ResponsiveContainer,
  TechItemDetailsContainer,
  TechItemContainer,
  ImageE1,
  NameDescriptionContainer,
  NameE1,
  DescriptionE1,
  LoaderContainer,
  LoaderItem,
  TechDetailsFailureContainer,
  FailureImage,
  FailureH1,
  FailureP1,
  RetryBtn,
} from './styledComponents'

import Headers from '../Headers'

const techDetailsStatus = {
  initial: 'INItIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'Failure',
}

class TechItemDetails extends Component {
  state = {detailsStatus: techDetailsStatus.initial, courseDetails: {}}

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({detailsStatus: techDetailsStatus.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(url)
    if (response.ok === true) {
      const jsonData = await response.json()
      const newCourseDetails = jsonData.course_details
      const updatedCourseDetails = {
        id: newCourseDetails.id,
        name: newCourseDetails.name,
        ImageUrl: newCourseDetails.image_url,
        description: newCourseDetails.description,
      }
      this.setState({
        detailsStatus: techDetailsStatus.success,
        courseDetails: updatedCourseDetails,
      })
    } else {
      this.setState({detailsStatus: techDetailsStatus.failure})
    }
  }

  retryBtnClicked = () => {
    this.getCourseDetails()
  }

  renderProgressView = () => (
    <LoaderContainer data-testid="loader">
      <LoaderItem type="ThreeDots" />
    </LoaderContainer>
  )

  renderSuccessView = () => {
    const {courseDetails} = this.state
    const {name, description, ImageUrl} = courseDetails
    return (
      <TechItemDetailsContainer>
        <TechItemContainer>
          <ImageE1 src={ImageUrl} alt={name} />
          <NameDescriptionContainer>
            <NameE1>{name}</NameE1>
            <DescriptionE1>{description}</DescriptionE1>
          </NameDescriptionContainer>
        </TechItemContainer>
      </TechItemDetailsContainer>
    )
  }

  renderFailureView = () => (
    <TechDetailsFailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt=" failure view"
      />
      <FailureH1>Oops! Something Went Wrong</FailureH1>
      <FailureP1>We cannot seem to find the page you are looking for</FailureP1>
      <RetryBtn type="button" onClick={this.retryBtnClicked}>
        Retry
      </RetryBtn>
    </TechDetailsFailureContainer>
  )

  renderTechDetailsView = () => {
    const {detailsStatus} = this.state
    switch (detailsStatus) {
      case techDetailsStatus.progress:
        return this.renderProgressView()
      case techDetailsStatus.failure:
        return this.renderFailureView()
      case techDetailsStatus.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <ResponsiveContainer>
        <Headers />
        {this.renderTechDetailsView()}
      </ResponsiveContainer>
    )
  }
}

export default TechItemDetails
