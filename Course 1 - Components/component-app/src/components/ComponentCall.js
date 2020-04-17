import React from 'react';
import AppButton from './AppButton';
import component_call2 from '../images/component-call2.JPG';
import component_call1 from '../images/component-call1.JPG';
import component_call3 from '../images/component-call3.JPG';
import component_call_o1 from '../images/component-call-output1.JPG';
import component_call_o2 from '../images/component-call-output2.JPG';



const ComponentCall = () => {
    return (
        <div className = "container-fluid">

            <div className="row">
                <div className="col-md-4">
                    <h5> Create a Component which displays a button.</h5>
                    <br />
                    <img src={component_call2} />
                </div>

                <div className="col-md-3">
                    <h5> Calling the Button Component </h5>
                    <br />
                    <img src={component_call1} />
                </div>

                <div className="col-md-3">
                    <h5> Output </h5>
                    <br />
                    <img src={component_call_o1} />
                </div>


                


            </div>


            <div className="row">
                <div className="col-md-3">
                  <h5>Re-usability of components</h5> 
                </div>

                <div className="col-md-4">
                    <h5> Calling the Button Component Multiple times. </h5>
                    <br />
                    <img src={component_call3} />
                </div>

                <div className="col-md-3">
                    <h5> Output </h5>
                    <br />
                    <img src={component_call_o2} />
                </div>


                


            </div>
            
        </div>
    );
}

export default ComponentCall;