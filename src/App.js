import React from 'react';
import Product from './components/product';
import Total from './components/total';
import Form from './components/navform';
import Header from './components/header'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            total: 0,
            productItem: [
                {name: 'Android', cost: 121}
               
            ]
        }
        this.calculateTotal = this.calculateTotal.bind(this)
        this.addProduct = this.addProduct.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    calculateTotal(price){
        this.setState({
            total: this.state.total + price
        })
        // alert(this.state.total)
    }
    
    showProduct(name){
        alert('you selected   ' + name)
    }

    addProduct(receieve){
        this.setState({
            productItem: this.state.productItem.concat(receieve),
            
        })
    }
    
    handleDelete(deleteItem){
        const del = this.state.productItem.filter(c => c.name !==deleteItem)
        this.setState({
            productItem: del
        })
    }
/////name
    render() { 
        
        let productlist = this.state.productItem.map(result =>{
            return (
                <Product name={result.name} 
                    price={result.cost} 
                    handleShow={this.showProduct}
                    handleTotal={this.calculateTotal}
                    key={result.name}
                    onDelete={this.handleDelete}
                    />
            )
        })
        return ( 
            <div className="container">
                <Form handleAddProduct={this.addProduct}
                    onDelete={this.handleDelete}/>
                <table className="table">
                <Header />
                {productlist}
                </table>
                <Total total={this.state.total}/>
            </div>
         );
    }
}
 
export default App