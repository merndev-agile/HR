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

function SidenavCollapse({ icon, name, active, ...rest }) {
  const [controller] = useMaterialUIController();
  const [open, setOpen] = React.useState(false);
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  return (
    <ListItem
      component="li"
      onClick={() => {
        setOpen(!open);
      }}
    >
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

        {/* Add sumbmenu-- */}
        {name === "Employee" && (
          <MDBox sx={{ paddingLeft: "13px" }}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemIcon>
                    <Icon fontSize="small">person_add</Icon>
                  </ListItemIcon>
                  <ListItemText style={{ color: "white" }} primary="Add Employee" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Icon fontSize="small">details</Icon>
                  </ListItemIcon>
                  <ListItemText style={{ color: "white" }} primary="Employee Details" />
                </ListItem>
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
