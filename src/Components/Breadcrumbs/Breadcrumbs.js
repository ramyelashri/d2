import React, { Component } from 'react';

export default class Breadcrumbs extends Component {
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
        <nav className="breadcrumbs" aria-label="You are here:" role="navigation">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__list-item"><a href="#">Personal</a></li>
                <li className="breadcrumbs__list-item"><a href="#">Mobile</a></li>
                <li className="breadcrumbs__list-item"><a href="#">Prepaid plans</a></li>
                <li className="breadcrumbs__list-item">
                    My Smart Plan
                </li>
            </ul>
        </nav>
    )
  }
}
