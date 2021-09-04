import React from 'react'
import MenuItemStyled from './StyledMenu';
import GitHub from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language"


function Menu({ menuItem }) {
    return (
<MenuItemStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1} target="_blank">
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2} target="_blank">
                      <LanguageIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyled>
    )
}


export default Menu
