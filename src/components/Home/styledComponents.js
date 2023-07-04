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

export const HomeSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 10px;
  min-height: 90vh;
`

export const HomeHeadingE1 = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  color: #1e293b;
  margin: 10px;
`

export const TechItemsContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
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

export const HomeFailureContainer = styled.div`
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
