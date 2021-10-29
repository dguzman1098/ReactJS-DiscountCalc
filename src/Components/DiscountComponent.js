import React, {Component} from 'react';


class DiscountComponent extends Component {

    render(){
        let {discount} = this.props;
        return (
            <div className="discount">
                <p>
                    {discount}
                </p>
            </div>
        )
    }
}

export default DiscountComponent;