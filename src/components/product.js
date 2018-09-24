import React from 'react';

class Product extends React.Component {
    constructor(){
        super()
        this.state={
            count: 0
        }
        this.buy = this.buy.bind(this)
        this.showItem = this.showItem.bind(this)
        this.handDel = this.handDel.bind(this)
    }

    buy(){
        this.setState({
            count: this.state.count +1
        })
        this.props.handleTotal(this.props.price)
    }
    showItem(){
        this.props.handleShow(this.props.name)
    }
    
    handDel(){
        this.props.onDelete(this.props.name)
    }
    
    render() { 
        return ( 
            
        <tbody>
            <tr >
            <td scope="row">{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
            <td><button type="button" className="btn btn-primary" onClick={this.buy}>Buy</button></td>
            <td>Quantity: {this.state.count} item(s)</td>
            <td>
            <button type="button" className="btn btn-primary" onClick={this.showItem}>Show</button>
            <button type="button" className="btn btn-primary" onClick={this.handDel}>Delete</button>
            </td>
            </tr>
        </tbody>
            
                        
         );
    }
}
 
export default Product;