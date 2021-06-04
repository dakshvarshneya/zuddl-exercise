import "../styles/App.css";
import CardEditor from "./CardEditor";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";


function Card (props) {    
    const { listId, card, dispatch, index } = props;

    const [hover, setHover] = useState(false);
    const [editing, setEditing] = useState(false);
    // const [text,setText] = useState("")
    
    const startHover = () => setHover(true);
    const endHover = () => setHover(false);
    
    const startEditing = () => {
        setHover(false);
        setEditing(true);
        // setText(props.text);
    };
    
    const endEditing = () => {
        setHover(false);
        setEditing(false);
    };
    
    const editCard = async text => {        
        endEditing();
        
        dispatch({
            type: "CHANGE_CARD_TEXT",
            payload: { cardId: card._id, cardText: text }
        });
    };
    
    const deleteCard = async () => {
        dispatch({
            type: "DELETE_CARD",
            payload: { cardId: card._id, listId }
        });
    };

    if (!editing) {
        return (
          <Draggable draggableId={card._id} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="Card"
                onMouseEnter={startHover}
                onMouseLeave={endHover}
              >
                {hover && (
                  <div className="Card-Icons">
                    <div className="Card-Icon" onClick={startEditing}>
                      <ion-icon name="create" />
                    </div>
                  </div>
                )}
      
                {card.text}
              </div>
            )}
          </Draggable>
        );
      } else {
        return (
        <CardEditor
            text={card.text}
            onSave={editCard}
            onDelete={deleteCard}
            onCancel={endEditing}
        />
        );
  }
}

const mapStateToProps = (state, ownProps) => ({
  card: state.cards[ownProps.cardId]
});

export default connect(mapStateToProps)(Card);