import React from 'react';
import { ScissorOutlined, HighlightOutlined,
  RadiusSettingOutlined, AimOutlined, FormatPainterOutlined,
  NodeIndexOutlined, StarOutlined, FunctionOutlined, CodepenOutlined, DragOutlined
 } from '@ant-design/icons'

 import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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

const Toolbar = () => {
  return (
    <>
      {tools.map((v,ind)=>{
        return (
          <BootstrapTooltip title="tool item" placement="right">{React.createElement(v, {index: ind}, null)}</BootstrapTooltip>
        )

      })}
    </>
  )
}





export default Toolbar;
