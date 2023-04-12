import { Nav, Tab, Tabs } from "react-bootstrap";
import { FormPage } from "./FormPage";
import { Profiles } from "./Profiles";
import { faAdd, faHouse, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./TabsDemo.css";

export const TabsDemo = () => {
  return (
    <div className="vh-100 w-100 px-5 py-3" style={{ backgroundColor: "#FFFFFF" }}>
      <section>
        {/* <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="customTabs mb-3"
    >
      <Tab eventKey="home" title={<Link className="" to="/tabs/home"><FontAwesomeIcon icon={faHouse} /> Home</Link>}>
        <Outlet />
      </Tab>
      <Tab eventKey="profiles" title={<Link className="text-decoration-none" to="/tabs/profiles"><FontAwesomeIcon icon={faList} /> Profiles</Link>}>
        <Outlet />
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        
      </Tab>
    </Tabs> */}
        <Tab.Container defaultActiveKey="home">
          <Nav variant="tabs" className="flex customTabs mb-3">
            <Nav.Item>
              <NavLink
                className={({ isActive, isPending }) =>
                  `text-decoration-none nav-link ${isActive ? "active" : (isPending ? "pending" : "")}`
                }
                to="/tabs/home"
              >
                <FontAwesomeIcon icon={faHouse} /> Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={({ isActive, isPending }) =>
                  `text-decoration-none nav-link ${isActive ? "active" : (isPending ? "pending" : "")}`
                }
                to="/tabs/add_profile"
              >
                <FontAwesomeIcon icon={faAdd} /> Add Profile
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className={({ isActive, isPending }) =>
                  `text-decoration-none nav-link ${isActive ? "active" : (isPending ? "pending" : "")}`
                }
                to="/tabs/profiles"
              >
                <FontAwesomeIcon icon={faList} /> Profiles
              </NavLink>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Outlet />
          </Tab.Content>
        </Tab.Container>
      </section>
    </div>
  );
}