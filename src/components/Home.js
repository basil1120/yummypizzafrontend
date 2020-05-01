import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addToCart, fetchItems} from './actions/cartActions';
import propTypes from 'prop-types';
import { toast } from 'react-toastify';


 class Home extends Component{
    
    handleClick = (id)=>{
        toast.success("Item selected")
        this.props.addToCart(id);
    }

    componentDidMount() {

        this.props.fetchItems();
    }

     render(){
        if (!this.props.items){
            return(
                <div className="container">
                    <h3 className="center">Pizza Varieties</h3>
                    <div className="box">
                        No data
                    </div>
                </div>
            )
        }

        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={`https://yummypizza.herokuapp.com/images/${item.img}`} alt={item.pizzatype}/>
                            <span className="card-title">{item.pizzatype}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.pizzadesc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Pizza Varieties</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

Home.propTypes ={
    fetchItems :propTypes.func.isRequired,
    items: propTypes.array
    }




const mapStateToProps = (state)=>{
    return {
        items:state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        fetchItems: () => {dispatch(fetchItems())},
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

