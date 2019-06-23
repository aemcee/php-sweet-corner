import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getProductList} from '../actions';

class Products extends Component{

    componentDidMount(){
        this.props.getProductList();
    }

    render(){

        console.log('Products: ', this.props.products);

        return(
            <div className="my-5">
                <h1 className="text-center">Products</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        products: state.products.list
    }
};

export default connect(mapStateToProps, {getProductList})(Products);