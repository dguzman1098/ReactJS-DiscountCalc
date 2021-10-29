import React, {Component} from 'react';


class PriceComponent extends Component {

    render(){
        let {price} = this.props;
        return (
            <div className="price">
                <p>
                    {price}
                </p>
            </div>
        )
    }
}

export default PriceComponent;