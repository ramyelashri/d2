import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  render(){
      return (
        <div className="header color__4-background">
            <div className="header__left"></div>
            <div className="header__title-container">
                <h1 className="header__title color__1 typography__default-plus-4">Postpaid Plans</h1>
                <span className="header__description color__1 typography__default-plus-2">Go data crazy with our postpaid plans</span>
            </div>
        </div>
    )
  }
}
