
import React, { Component } from 'react';
import class_syntax from '../images/class-syntax.JPG';
class ClassSyntax extends Component {
    /**
     * To render the component, we have to call the
     * render() function which return the HTML template.
     * Remember, in React, the external stylesheet is 
     * renamed to "className" instead "class"
     * 
     */
    render() { 
        return ( 
            <div className = "class-syntax">
                <h5>The below image provides the syntax of class component.</h5>
                <br></br> 

                <img src = {class_syntax} />

            </div>
         );
    }
}
export default ClassSyntax;




