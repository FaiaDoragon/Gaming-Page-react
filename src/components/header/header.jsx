
import { LogoRedes } from './LogoRedes'
import { LoginRegister } from './LoginRegister'
import { MenuBar } from './MenuBar'
import { Searchvar } from './Searchvar'

import '../css/header.css'

export const Header = () => {
  return (
    <>
      <div id="header">
        <LogoRedes />
        <nav id="nav-bar">
          <MenuBar />
          <Searchvar />
          <LoginRegister />
        </nav>
      </div>
    </>
  )
}
