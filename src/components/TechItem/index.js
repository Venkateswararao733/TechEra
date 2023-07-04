import {
  TechItemContainer,
  LinkItem,
  TechItemImgLogo,
  TechItemName,
} from './styledComponents'

const TechItem = props => {
  const {techItem} = props
  const {id, name, logoUrl} = techItem
  return (
    <TechItemContainer>
      <LinkItem to={`./courses/${id}`}>
        <TechItemImgLogo src={logoUrl} alt={name} />
        <TechItemName>{name}</TechItemName>
      </LinkItem>
    </TechItemContainer>
  )
}

export default TechItem
