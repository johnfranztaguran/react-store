import React from 'react';

const Total = ({total}) => {
    return ( 
            <table className="table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Total Cost: {total}</th>
                </tr>
            </thead>
            
        </table>
            
         );
    
}
 
export default Total;