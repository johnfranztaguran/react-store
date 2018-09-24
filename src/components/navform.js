import React from 'react';

class Form extends React.Component {
    
    submitProduct(){
        let list = {
            name: this.refs.name.value,
            cost: parseInt(this.refs.cost.value)
        }
        this.props.handleAddProduct(list)
        
        // alert('name' + this.refs.name.value + 'price' + this.refs.price.value)
        this.refs.name.value = ""
        this.refs.cost.value = ""
    }
    // this.props.onDelete(list)

    // handleCHange(e, number){
    //     console.log(e.target.value)
    //     if(e.target.value === number){
    //         console.log('invalid')
    //     }else{

    //     }
    // }

    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Home</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <input className="form-control mr-sm-2" 
                        type="text" placeholder="Product Name..." 
                        aria-label="Input Product" 
                        ref='name'
                        
                        />
                <input className="form-control mr-sm-2" 
                        type="number" placeholder="Cost.." 
                        aria-label="Cost" 
                        ref='cost'
                        />
                <button className="btn btn-outline-success my-2 my-sm-0" 
                        type="submit" 
                        onClick={() => this.submitProduct()}>
                        Post Product
                        </button> 
            </div>
        </nav>
         );
    }
}
export default Form
 


