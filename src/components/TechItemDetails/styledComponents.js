import Loader from 'react-loader-spinner'

import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
`

export const TechItemDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin: 0px;
  padding: 0px;
`

export const TechItemContainer = styled.div`
  display: flex;
  border-radius: 6px;
  margin: 0px;
  padding: 0px;
  box-shadow: 2px 2px 0px 0px #f1f5f9;
  width: 80%;
`

export const ImageE1 = styled.img`
  width: 40%;
  margin: 0px;
`

export const NameDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 0px;
`

export const NameE1 = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
  color: #1e293b;
  margin: 10px;
`
export const DescriptionE1 = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: #475569;
  margin: 10px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  min-height: 90vh;
`
export const LoaderItem = styled(Loader)`
  color: #475569;
  width: 50px;
  height: 50px;
`

export const TechDetailsFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  min-height: 90vh;
`

export const FailureImage = styled.img`
  width: 50%;
  margin: 10px;
`

export const FailureH1 = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 600;
  color: #1e293b;
  margin: 10px;
`

export const FailureP1 = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  color: #1e293b;
  margin: 10px;
`
export const RetryBtn = styled.button`
  background-color: #4656a1;
  border: 0px;
  border-radius: 6px;
  padding: 15px 20px 15px 20px;
  margin: 10px;
  outline: none;
  font-family: 'Roboto';
  color: #ffffff;
  cursor: pointer;
`
