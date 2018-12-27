import React, { Component } from 'react';
import { injectMocks } from 'data-mocks';
import axios from 'axios';
import { responseJson } from './responseJson';

export default class Plans extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedPlans: [this.props.selectedInternetPlan, this.props.selectedMinutesPlan],
      loading: true,
      plans: [],
      filteredPlans: []
    };
    const mocksScenarios = {
      default: [
        {
          url: /plans/,
          method: 'GET',
          response: responseJson,
          responseCode: 200,
          delay: 1000
        }
      ]
    };
    injectMocks(mocksScenarios);
  }

  componentWillMount() {
    this.getPlans()
  }

  componentWillReceiveProps(){
    this.filterPlans();
  }

  getPlans = () => {
    // Fetching plans using a fake mocks API
    Promise.all([
        axios.get('/plans')
    ])
      .then((response) => {
        this.setState({plans: response[0].data.plans});
        this.filterPlans();
      })
      .catch(error => {
          console.log('Error fetching plans', error);
      });
  }

  filterPlans = () => {
    this.setState({ loading: true });

    // add a little delay for the fake loader
    setTimeout(() => {
      let filteredPlans = [];
      console.log(this.state.plans.length, 'this.state.plans.length')
      this.state.plans.forEach((plan, index) => {
        console.log(this.props.selectedInternetPlan, 'this.props.selectedInternetPlan')
        console.log('plan number ' + index + plan.tags.includes(this.props.selectedInternetPlan))
        if(plan.tags.includes(this.props.selectedInternetPlan)
        && plan.tags.includes(this.props.selectedMinutesPlan)) {
          filteredPlans.push(plan);
        }
      })
      this.setState({ filteredPlans: filteredPlans, loading: false });
    }, 1000);
  }

  render(){
    const {loading, filteredPlans} = this.state;
    return (
      <div className="plans">
          <div className="plans__text1 color__2 typography__default-minus-1">
              One time charge of <span className="global__700">AED 125</span> for new activation
          </div>

          {loading &&
            <div className="global__loader"></div>
          }

          {!loading && !filteredPlans &&
            <div className="alert">Sorry, we didn't find any plans matching your selection</div>
          }

          {!loading && filteredPlans &&
            <div className="plans__container">
                {filteredPlans.map((plan, index) => {
                    return (
                      <div key={index} className="plans__item js-plans__item"
                      data-tags='["minutes-local", "internet-light"]'>
                          <div className={"plans__item-field plans__item-field--1 " + (plan.popular ? 'show' : 'hide')}>
                              <i className="icon favorite"></i>
                              <span className="plans__item-field--1-text">Popular</span>
                          </div>
                          <div className="plans__item-field plans__item-field--2">
                              You Pay
                          </div>
                          <div className="plans__item-field plans__item-field--3">
                              AED <span className="typography__default-plus-3 global__700">{plan.cost}</span>/month
                          </div>
                          <div className="plans__item-field plans__item-field--4">
                              You get smart plan {plan.smartPlan}
                          </div>
                          <div className="plans__item-field plans__item-field--5">
                              <div className="color__1">
                                  <span className="typography__default-plus-3 global__700">{plan.data}</span>
                                  GB
                              </div>
                              National data
                          </div>
                          <div className="plans__item-field plans__item-field--6">
                              <div className="">
                                  <div className="typography__default-plus-3 global__700 color__1">{plan.minutes}</div>
                                  Flexible min.
                              </div>
                          </div>
                          {plan.contract ?
                            <div className="plans__item-field plans__item-field--7">
                              <div className="color__1">{plan.contract}</div> month contract
                              <span className="plans__item-field-divider"></span>
                            </div>
                          :
                            <div className="plans__item-field plans__item-field--7">
                              <div className="color__1">No</div>
                              <span className="plans__item-field-divider"></span>
                            </div>
                          }
                          <div className="plans__item-field plans__item-field--8">
                              <div>
                                  <div className="color__1">{plan.smartPlan} Mins</div> Call <span className="color__1">{plan.preferredNumbers}</span> preferred  numbers
                              </div>
                              <span className="plans__item-field-divider"></span>
                          </div>
                          <div className="plans__item-field plans__item-field--9">
                            {plan.freePhone &&
                              <span className="color__1">Free phone</span>
                            }
                            {!plan.freePhone &&
                              <span className="color__1">-</span>
                            }
                              <span className="plans__item-field-divider"></span>
                          </div>
                          <div className="plans__item-field plans__item-field--10">
                              {plan.goldNumber &&
                                <span className="color__1">Gold series number</span>
                              }
                              {!plan.goldNumber &&
                                <span className="color__1">-</span>
                              }
                              <span className="plans__item-field-divider"></span>
                          </div>
                          <div className="plans__item-field plans__item-field--11">
                          <div className="plans__plus">
                              {plan.entertainer &&
                                  <img src="https://shop.du.ae/medias/?context=bWFzdGVyfGltYWdlc3w1NzAzfGltYWdlL3BuZ3xpbWFnZXMvaGJhL2g4Mi84Nzk2MjI1MTQyODE0LnBuZ3xkYmVjOWUzNTFiMjNiNTM3MDE3MjI1NWUwNGVmYmZkYjlmNzhmM2NiYTNjZmQ5YTNkNDYyZWIzZjc4NDU1OTg4" alt="The entertainer" />
                              }
                              </div>
                              <div>+</div>
                              <div className="plans__plus">
                                  {plan.anghami &&
                                    <img src="https://shop.du.ae/medias/?context=bWFzdGVyfGltYWdlc3w0MTk1fGltYWdlL3BuZ3xpbWFnZXMvaDM5L2hiNy84Nzk2MjI1MDc3Mjc4LnBuZ3xhMTdhNzg4YTU2NmYxMDUyMDQ3NzUyYTJjMjZkMDY2NTRkNzJlYWNkZDI4OWY2OTIzZDEyMjQ3ZGNlZjBhNzUw" alt="Anghami" />
                                  }
                              </div>
                          </div>
                          <div className="plans__item-field plans__item-field--12">
                              <div><a href="#" className="button">Important info</a></div>
                              <div><a href="#" className="button secondary">Buy</a></div>
                          </div>
                      </div>
                    )
                  })
                }
            </div>
          }
      </div>
    )
  }
}
