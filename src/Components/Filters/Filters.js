import React, { Component } from 'react';
import Plans from '../Plans/Plans';

export default class Filters extends Component {
  showFirstTab = true;
  constructor(props){
    super(props);
    this.state = {
      selectedInternetPlan: 'internet-light',
      selectedMinutesPlan: 'minutes-local'
    };
  }

  componentDidMount() {

  }

  filterByInternet = (selected) => {
    this.setState({selectedInternetPlan: selected});
  }

  filterByMinutes = (selected) => {
    this.setState({selectedMinutesPlan: selected});
  }

  render(){
      return (
        <div>
          <div className="filters color__4-background">
              <div className="filters__text1">
                  <span className="color__2">Know what you pay</span>,
                  <span className="color__1">know what you get</span>
              </div>

              <div className="filters__tabs">
                  <div className="filters__internet">
                      <div className="filters__questions typography__default">
                          How much <a href="#">internet</a> do you use?
                      </div>
                      <div className="filters__list" data-filter-group="internet">
                          <button className={"button global__button--tab " + (this.state.selectedInternetPlan === 'internet-light' ? 'active' : '')}
                          onClick={() => this.filterByInternet('internet-light')}>
                              <span className="icon mobile-phone-vibrating"></span>
                              Light
                          </button>
                          <button className={"button global__button--tab " + (this.state.selectedInternetPlan === 'internet-medium' ? 'active' : '')}
                          onClick={() => this.filterByInternet('internet-medium')}>
                              <span className="icon mobile-phone-vibrating"></span>
                              Medium
                          </button>
                          <button className={"button global__button--tab " + (this.state.selectedInternetPlan === 'internet-heavy' ? 'active' : '')}
                          onClick={() => this.filterByInternet('internet-heavy')}>
                              <span className="icon mobile-phone-vibrating"></span>
                              Heavy
                          </button>
                      </div>
                  </div>

                  <div className="filters__minutes">
                      <div className="filters__questions typography__default">
                          What kind of <a href="#">calling minutes</a> would you like in your plan?
                      </div>
                      <div className="filters__list" data-filter-group="minutes">
                          <button className={"button global__button--tab " + (this.state.selectedMinutesPlan === 'minutes-local' ? 'active' : '')}
                          onClick={() => this.filterByMinutes('minutes-local')}>
                              <span className="icon placeholder"></span>
                              Only Local
                          </button>
                          <button className={"button global__button--tab " + (this.state.selectedMinutesPlan === 'minutes-local-and-international' ? 'active' : '')}
                          onClick={() => this.filterByMinutes('minutes-local-and-international')}>
                              <span className="icon world-wide-web"></span>
                              International & Local
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          <Plans
          selectedInternetPlan={this.state.selectedInternetPlan}
          selectedMinutesPlan={this.state.selectedMinutesPlan} />
        </div>
    )
  }
}
