import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Background,
  Container,
  Group,
  Logo,
  Picture,
  Profile,
  PlayButton,
  ButtonLink,
  Feature,
  Text,
  Link,
  Dropdown,
  FeatureCallOut,
  Search,
  SearchIcon,
  SearchInput
} from './styles/header'

export default function Header ({ bg = true, children, ...restProps }) {
  return (
    bg ? <Background {...restProps}>{children}</Background> : children
  )
}

Header.Feature = function HeaderFeature ({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut ({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Frame = function HeaderFrame ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup ({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Picture = function HeaderPicture ({ src, ...restProps }) {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />
}

Header.Search = function HeaderSearch ({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false)

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(prevValue => !prevValue)}>
        <img src='/images/icons/search.png' alt='search' />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder='Search Films and Series'
        active={searchActive}
      />
    </Search>
  )
}

Header.Profile = function HeaderProfile ({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Logo = function HeaderLogo ({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

Header.Button = function HeaderButton ({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.ButtonLink = function HeaderButtonLink ({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Text = function HeaderText ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink ({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Header.Dropdown = function HeaderDropdown ({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}
