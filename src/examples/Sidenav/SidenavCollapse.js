/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import { List, ListItem, Icon, ListItemIcon, ListItemText, Collapse } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SidenavCollapse({ icon, name, active, ...rest }) {
  const [controller] = useMaterialUIController();
  const [open, setOpen] = React.useState(false);
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/notifications");
  // };
  return (
    <ListItem component="li">
      <MDBox>
        <MDBox
          {...rest}
          sx={(theme) =>
            collapseItem(theme, {
              active,
              transparentSidenav,
              whiteSidenav,
              darkMode,
              sidenavColor,
            })
          }
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ListItemIcon
            sx={(theme) =>
              collapseIconBox(theme, { transparentSidenav, whiteSidenav, darkMode, active })
            }
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) =>
              collapseText(theme, {
                miniSidenav,
                transparentSidenav,
                whiteSidenav,
                active,
              })
            }
          />
          {name === "Employee" &&
            (open ? (
              <Icon fontSize="small">expand_less</Icon>
            ) : (
              <Icon fontSize="small">expand_more</Icon>
            ))}
        </MDBox>

        {/* Add sumbmenu------------------------------ */}
        {name === "Employee" && (
          <MDBox
            {...rest}
            // sx={(theme) =>
            //   collapseItem(theme, {
            //     active: open && active,
            //     transparentSidenav,
            //     whiteSidenav,
            //     darkMode,
            //     sidenavColor,
            //   })
            // }
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {rest?.child &&
                  rest?.child.map((item) => (
                    <MDBox
                    // {...rest}
                    // sx={(theme) =>
                    //   collapseItem(theme, {
                    //     active: open && active,
                    //     transparentSidenav,
                    //     whiteSidenav,
                    //     darkMode,
                    //     sidenavColor,
                    //   })
                    // }
                    >
                      {/* <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding> */}
                      <NavLink key={item?.key} to={item?.route}>
                        <ListItem button>
                          <ListItemIcon>
                            {typeof item?.icon === "string" ? (
                              <Icon sx={(theme) => collapseIcon(theme, { active })}>
                                {item?.icon}
                              </Icon>
                            ) : (
                              item.icon
                            )}
                          </ListItemIcon>
                          <ListItemText
                            sx={(theme) =>
                              collapseText(theme, {
                                miniSidenav,
                                transparentSidenav,
                                whiteSidenav,
                                active,
                              })
                            }
                            style={{ color: "white" }}
                            primary={item?.name}
                          />
                        </ListItem>
                      </NavLink>

                      {/* </List>
                  </Collapse> */}
                    </MDBox>
                  ))}
              </List>
            </Collapse>
          </MDBox>
        )}
      </MDBox>
    </ListItem>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  active: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default SidenavCollapse;
