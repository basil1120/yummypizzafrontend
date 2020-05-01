import React, { Component } from 'react'
import { connect } from 'react-redux'
import {submitOrder} from "./actions/cartActions";
import {store} from '../index'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{

    constructor() {
        super();

        this.state = {
            name:"",
            location:"",
            phonenumber:"",
            otherdetails:""
        }
    }
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }


    handleOrderSubmit = ()=>{

        const order = {
            "customername":this.state.name,
            "customerlocation":this.state.location,
            "customerphone":this.state.phonenumber,
            "pizzatype": store.getState().addedItems[0].pizzatype,
            "pizzasize":store.getState().addedItems[0].size,
            "quantity":store.getState().addedItems[0].quantity,
            "price":store.getState().addedItems[0].price,
            "deliveryfee":store.getState().addedItems[0].deliveryfee,
            "totalprice":store.getState().total,
            "additionaldetails":this.state.otherdetails
        }

        this.props.submitOrder(order);
    }

    render(){
  
        return(
            <div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="" name="name" type="text" className="validate" onChange={(e) => this.onChange(e)}/>
                                    <label>Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="" name="location" type="text" className="validate" onChange={(e) => this.onChange(e)}/>
                                <label>Location</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="" placeholder="" name="phonenumber" type="text" className="validate" onChange={(e) => this.onChange(e)}/>
                                <label>Phone Number</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="" name="otherdetails" type="text" className="validate" onChange={(e) => this.onChange(e)}/>
                                <label>Other Details</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                    </li>
                    <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn" onClick={()=>{this.handleOrderSubmit()}}>Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        submitOrder: (order)=>{dispatch(submitOrder(order))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
