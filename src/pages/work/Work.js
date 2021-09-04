import React,{ useState } from 'react'
import portfolios from "../../asset/data/porfolios";
import Buttom from '../../components/buttom/Buttom';
import Menu from '../../components/menu/Menu';
import Title from '../../components/title/Title'
import {MainLayout,InnerLayout} from '../../Styles/Layout';
const allButtons = ["ALL", ...new Set(portfolios.map((item) => item.category))];
function Work() {
    const [menuItem, setMenuItems] = useState(portfolios);
    const [button, setButtons] = useState(allButtons);
  
    const filter = (button) => {
      if (button === "ALL") {
        setMenuItems(portfolios);
        return;
      }
  
      const filteredData = portfolios.filter((item) => item.category === button);
      setMenuItems(filteredData);
    };
    return (
        <MainLayout>
          <Title title={"My Projects"} span={"My Projects"} />
          <InnerLayout>
          <Buttom filter={filter} button={button}/>
            <Menu menuItem={menuItem} />
          </InnerLayout>
        </MainLayout>
    )
}

export default Work
