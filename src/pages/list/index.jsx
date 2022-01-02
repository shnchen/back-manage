import React from 'react';
import  {Slider} from 'antd'

class List extends React.Component{
  state = {
    value: 0,
  };

  handleChange = value => {
    
    this.setState({ value:value<1?1:value });
    
  };

  render() {
    const { value } = this.state;
    return (
      <div className="icon-wrapper">
        <Slider min={0} max={10} onChange={this.handleChange} value={value} />
      </div>
    );
  }
}


export default List;