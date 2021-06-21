
import React, { Component } from 'react';

// class Display extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.prop1}<br/>
//                 {this.props.prop2}<br/>
//                 {this.props.prop3}
//             </div>
//         );
//     }
// }

export default ({ prop1, prop2, prop3 }) => {
    return (
        <div>
            {prop1}<br />
            {prop2}<br />
            {prop3}
        </div>
    );
}
