
import React from 'react';
import func_1 from '../images/functional-syntax-1.JPG';
import func_2 from '../images/functional-syntax-2.JPG';


/**
 *  Functional Component Syntax.
 */
function FunctionSyntax() {
    return (
        <div class="container">
            <h5>The below image provides two syntax to create functional component.</h5>
            <br></br> <br></br>
            <div className="row">
                <div className="col-md-4">

                    <img src={func_1} />

                </div>
                <div className="col-md-1" style={{ margin: "100px" }}>
                    <h4>Or</h4>
                </div>
                <div className="col-md-4">

                    <img src={func_2} />

                </div>
            </div>
        </div>
    );
}

export default FunctionSyntax;





