import React, { Component } from 'react';
import './App.css';
import KeyPadComponent from './Components/KeyPadComponent';
import PriceComponent from './Components/PriceComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      price: '',
      discount: '',
      total: '',
      finalPrice: ''
    }
  }

  onClickPrice = (button) => {
    //console.log(this.state.price + button);
    if (button === 'C') {
      this.resetPrice();
    }
    else if (button === 'CE') {
      this.priceKeypadBackspace();
    }
    else {
      this.setState({
        price: this.state.price + button
      })
    }
  }

  onClickDiscount = (button) => {
    //console.log(this.state.discount + button);
    if (button === 'C') {
      this.resetDiscount();
    }
    else if (button === 'CE') {
      this.discountKeypadBackspace();
    }
    else {
      this.setState({
        discount: this.state.discount + button
      })
    }
  }


  resetPrice = () => {
    this.setState({
      price: ''
    });
  }

  resetDiscount = () => {
    this.setState({
      discount: ''
    });
  }

  priceKeypadBackspace = () => {
    this.setState({
      price: this.state.price.slice(0, -1)
    });
  }

  discountKeypadBackspace = () => {
    this.setState({
      discount: this.state.discount.slice(0, -1)
    });
  }

  calculateDiscount = () => {
    this.setState({
      total: this.state.price * (this.state.discount / 100)
    })
  }

  render() {
    return (

      <div className="container">
        <h1 className="header">CALCULATE A DISCOUNT</h1>

        <div className="content-body">
          <div className="price-body">
            <p className="title">Enter A Price</p>
            <PriceComponent price={this.state.price} />
            <KeyPadComponent onClick={this.onClickPrice} />
          </div>

          <div className="discount-body">
            <p className="title">Enter A Discount</p>
            <PriceComponent discount={this.state.discount} />
            <KeyPadComponent onClick={this.onClickDiscount} />
          </div>
        </div>

        <div className="total-box">
          <button className="discount-button" onClick={this.calculateDiscount}>
            Calculate Discount
          </button>
          <p style={{margin: "25px"}}>${this.state.price} * {this.state.discount}%</p>
          <p className="total-price"> = ${this.state.total} OFF</p>
        </div>
      </div>

    );
  }
}
export default App;