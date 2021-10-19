import React, { Component } from 'react';
import { Form, Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    
    
    this.state = {
      dishes: DISHES, 
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS   
    };    
  }
  
  render(){
    
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    return (
      <div>
        <Header />        
        <Switch>
          <Route path="/home" component={HomePage}> </Route>
          <Route path="/menu" component={() => <Menu dishes={this.state.dishes} />}> </Route>
          <Route exact path='/contactus' component={Contact}> </Route>
          <Redirect to="/home"></Redirect>
        </Switch>  
        <Footer />
      </div>
    );
  }
}

export default Main;