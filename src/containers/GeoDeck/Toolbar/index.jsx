import React from 'react';
import { ScissorOutlined, HighlightOutlined,
  RadiusSettingOutlined, AimOutlined, FormatPainterOutlined,
  NodeIndexOutlined, StarOutlined, FunctionOutlined, CodepenOutlined, DragOutlined
 } from '@ant-design/icons'
import { connect } from 'react-redux'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { changeWidget } from '../../../redux/actions'

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    marginRight: '-15px'
  },
}));

const StyledTooltip = withStyles({
  tooltipPlacementRight: {
    margin: '0px -5px'
  },
})(Tooltip);

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <StyledTooltip arrow classes={classes} {...props} />;
}

const tools = [ScissorOutlined, HighlightOutlined, RadiusSettingOutlined, AimOutlined, FormatPainterOutlined, NodeIndexOutlined, StarOutlined, FunctionOutlined, CodepenOutlined, DragOutlined]

const Toolbar = ({changeWidget}) => {
  return (
    <>
      {tools.map((v,ind)=>{
        return (
          <BootstrapTooltip title="tool item" placement="right"
            onClick = {()=>changeWidget(ind === 0 ? 'plane' : 'line')}
          >{React.createElement(v, { index: ind }, null
          )}</BootstrapTooltip>
        )

      })}
    </>
  )
}





function mapStateToProps({
  threeReducer
  }) {
  return {
    three: threeReducer
  }
}
const mapDispatchToProps = {
  changeWidget
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar)
