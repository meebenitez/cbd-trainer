import React, { Component } from 'react';
import './Manual.css';
import Select from 'react-select';
import { pages } from '../../data/data'

class Page extends Component {
  constructor(props) {
    super();
    this.state = {
        selection: null,
        pageImg: null,
    }

}

componentWillMount(){

}

 

   
    handleSelect = (selection) => {
        this.setState({
            pageImg: selection.value
        }, this.props.setPageImg(selection.value))
    }

    render() {
        const { pageImg } = this.state;
        return (
            <div className="row">
                <div className="col-12 mb-2"><h2>Type to Search...</h2></div>
                <div className="col-12">
                    <Select 
                        options={pages}
                        value={pageImg}
                        onChange={this.handleSelect}
                        autoFocus={true} />
                </div>
            </div>
        );
    }
}


export default Page;
