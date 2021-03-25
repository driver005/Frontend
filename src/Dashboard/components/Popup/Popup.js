import React from "react";
import Warper from './Wraper';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { Buttoncomponent, Inputcomponent, Labelcomponent, Formcomponent, Buttondiv, Buttonclose, Buttonspan, Startbutton } from "../../styles/popup";

//


const contentStyle = {
  maxWidth: "600px",
  width: "90%",
  backgroundColor: "black",
  
};

const CustomModal = (props) => (
  <Popup
    trigger={<Startbutton className="button"> Open Modal </Startbutton>}
    modal
    contentStyle={contentStyle}
  >
    {close => (
      <div className="modal">
        <Buttonclose className="close" onClick={close}>
          <Buttonspan>x</Buttonspan>
        </Buttonclose>
        <Formcomponent>
            <Labelcomponent for="EventName">Event Name</Labelcomponent>
            <Inputcomponent
                type="text"
                name="event"
                id="event"
                placeholder="with a placeholder"
                onChange={props.input}
            />
            <Buttondiv>
                <Buttoncomponent 
                    color="primary" 
                    size="lg" 
                    block 
                    onClick={
                        function(e){
                            close(e);    
                            props.onSubmit(e);
                        }
                    }
                >
                    Block level button
                </Buttoncomponent>
            </Buttondiv>
        </Formcomponent>

      </div>
    )}
  </Popup>
);

export default Warper(CustomModal);