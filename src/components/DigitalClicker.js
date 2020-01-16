// Code DigitalClicker Component Here
import react from 'react'
export default class DigitalClicker extends React.Component{
    constructor(){super()
    this.state = {
        timesCLicked = 0
    }}
    handleClick = () => {
        this.setState(
            preState =>{
                return{
                    timesCLicked: preState.timesClicked+1
                }
            }
        )
    }
    render(){
        return(
            <button onClick={this.handleClick}>{this.state.timesClicked}></button>
        )
    }
}
export default DigitalClicker