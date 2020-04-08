import React from 'react';
import classes from'./modal.module.css';
import { BrowserRouter as Router,withRouter} from 'react-router-dom'


class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }
    
    // 首次渲染使用父组件的状态更新 modal 中的 visible 状态，只调用一次
    componentDidMount() {
        this.setState({
            visible: this.props.visible
        })
    }

    // 每次接收 props 就根据父组件的状态更新 modal 中的 visible 状态，首次渲染不会调用
    componentWillReceiveProps(props) {
        this.setState({
            visible: props.visible
        })
    }

    handleClose = () => {
        // const { onClose } = this.props
        // onClose && onClose()
        this.setState({
            visible: false
        })
        this.props.change();
    }
    handleConfirm = () => {
        // const { onConfirm } = this.props
        // onConfirm && onConfirm()
        this.setState({
            visible: false
        })
        this.props.change();
          }
    
    handleMask = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        // 通过父组件传递的 visible 控制显隐
        const { title, children } = this.props
        const { visible = true } = this.state
        return visible &&
        (
            <Router >
            <div className={classes.wrapper}>
                <div className={classes.modal}>
                    <div className={classes.title}>{title}</div>
                    <div className={classes.content}>{children}</div>
                    <div className={classes.operator}>
                        <button className={classes.close} onClick={this.handleClose}>取消</button>
                        <button className={classes.confirm} onClick={()=>{
                            this.props.handleConfirm();
                            this.props.history.push('/info'   
                            )
                            
                        }} > 确定
                        </button>
         
                    </div> 
                </div>
               
            </div>  
               
            </Router>
        )
    }
}

export default withRouter(Modal)


































































