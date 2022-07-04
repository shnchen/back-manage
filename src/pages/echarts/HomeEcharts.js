import React, { Component } from 'react';
import ReactEcharts from './EchartsComponent';

class HomeChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        //option可由函数初始化
            option: props.option
        };
    }

    componentDidMount() {
        // this.getOptions(option1)
    }
    
    // //数据发生变化后更新option，由state管理
    getOptions(option) {
      console.log(option);
        this.setState({option:option});
    }

    render() {
        const {option} = this.state;
        console.log(option);
        return (
            <div>
                {/* <button onClick={this.getOptions}>查询</button> */}
                <div className="pull-left mt-20">
                    <ReactEcharts getOptions={(option)=>{this.getOptions(option)}} option={option}></ReactEcharts>
                </div>
            </div>
        )
    }
};

export default HomeChart