

export const Header = () => {
  return (
    <>
      <div id="logo-redes">
        <div className="logo-y-redes">
          <a href="C:/Users/Usuario/Documents/Personal-Proyects/gaming-page/html/index.html">
            <img id="logo" src="C:\Users\Usuario\Documents\Personal-Proyects\Gaming-Page-React\src\images\Logo.jpg" alt="logo-FaiaGaming" width="188px" height="125px" />
          </a>
        </div>
        <div>
          <img className="redes" src="https://dexibell.com/app/uploads/2018/05/facebook-logo.png" alt="facebook" width="50px" height="50px" />
          <img className="redes" src="https://play-lh.googleusercontent.com/h9jWMwqb-h9hjP4THqrJ50eIwPekjv7QPmTpA85gFQ10PjV02CoGAcYLLptqd19Sa1iJ" alt="instagram" width="50px" height="50px" />
          <img className="redes" src="https://www.doplerweb.com/data/fotos/1022008841_1_twitter-bird-white-on-blue1.jpg" alt="twitter" width="50px" height="50px" />
        </div>
      </div>
      <nav id="nav-bar">
        <ul>
          <a href="C:/Users/Usuario/Documents/Personal-Proyects/gaming-page/html/ps4.html"><li>PS4</li></a>
          <a href="C:/Users/Usuario/Documents/Personal-Proyects/gaming-page/html/ps5.html"><li>PS5</li></a>
          <a href="C:/Users/Usuario/Documents/Personal-Proyects/gaming-page/html/nintendo-switch.html"><li>Nintendo Switch</li></a>
          <a href="C:/Users/Usuario/Documents/Personal-Proyects/gaming-page/html/pc.html"><li>PC</li></a>
        </ul>
        <label id="seach">BUSCAR:</label>
        <input id="busqueda" />
        <ul>
          <li>login</li>
          <li>register</li>
        </ul>
      </nav>
    </>
  )
}
