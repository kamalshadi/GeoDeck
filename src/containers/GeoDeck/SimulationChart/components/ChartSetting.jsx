import React from "react";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { SettingFilled } from "@ant-design/icons";
import { Popover } from "@material-ui/core";
import { deletePlot } from "../../../../redux/actions/plotAction";

class ChartSetting extends React.Component {
  state = { anchorEl: null, selected: "default" };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onDownload = () => {
    return null;
  };

  onEdit = () => {
    return null;
  };

  onExport = () => {
    return null;
  };

  onDelete = () => {
    // console.log(this.props);
    this.handleClose();
    this.props.deletePlot(this.props.plotId);
  };

  render() {
    const { anchorEl } = this.state;

    const open = Boolean(anchorEl);
    const id = open ? "chart-setting-popover" : undefined;

    return (
      <React.Fragment>
        <SettingFilled className="geo-icon" onClick={this.handleClick} />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          className="material-table__filter-menu"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <MenuItem
            key="download-chart"
            onClick={this.onDownload}
            className={`material-table__filter-menu-item`}
          >
            Download
          </MenuItem>
          <MenuItem
            key="Edit-chart"
            onClick={this.onEdit}
            className={`material-table__filter-menu-item`}
          >
            Edit
          </MenuItem>
          <MenuItem
            key="Export-chart"
            onClick={this.onExport}
            className={`material-table__filter-menu-item`}
          >
            Export
          </MenuItem>

          <MenuItem
            key="Delete-chart"
            onClick={this.onDelete}
            className={`material-table__filter-menu-item`}
          >
            Delete
          </MenuItem>
        </Popover>
      </React.Fragment>
    );
  }
}

export default connect(null, { deletePlot })(ChartSetting);
