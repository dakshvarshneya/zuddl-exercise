import "../styles/App.css";
import CardEditor from "./CardEditor";
import ListEditor from "./ListEditor";

import shortid from "shortid";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Card from "./Card";

function List(props) {
  const { listId, list, dispatch, index } = props;

  const [title, setTitle] = useState(props.list.title);
  const [editingTitle, setEditingTitle] = useState(false);
  const [addingCard,setAddingCard] = useState(false)
  
  const toggleAddingCard = () =>
    setAddingCard(!addingCard);
  
  const addCard = async cardText => {
    const { listId, dispatch } = props;
  
    toggleAddingCard();
  
    const cardId = shortid.generate();
  
    dispatch({
      type: "ADD_CARD",
      payload: { cardText, cardId, listId }
    });
  };

  const toggleEditingTitle = () => setEditingTitle(!editingTitle);

  const handleChangeTitle = e => setTitle(e.target.value);

  const editListTitle = async () => {

    toggleEditingTitle();

    dispatch({
      type: "CHANGE_LIST_TITLE",
      payload: { listId, listTitle: title }
    });
  };

  const deleteList = async () => {

    dispatch({
      type: "DELETE_LIST",
      payload: { listId, cards: list.cards }
    });
  };

  return (
    <Draggable draggableId={list._id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="List"
          >
            {editingTitle ? (
              <ListEditor
                list={list}
                title={title}
                handleChangeTitle={handleChangeTitle}
                saveList={editListTitle}
                onClickOutside={editListTitle}
                deleteList={deleteList}
              />
            ) : (
              <div className="List-Title" onClick={toggleEditingTitle}>
                {list.title}
              </div>
            )}

            <Droppable droppableId={list._id}>
              {(provided, _snapshot) => (
                <div ref={provided.innerRef} className="Lists-Cards">
                  {list.cards &&
                    list.cards.map((cardId, index) => (
                      <Card
                        key={cardId}
                        cardId={cardId}
                        index={index}
                        listId={list._id}
                      />
                    ))}

                  {provided.placeholder}

                  {addingCard ? (
                    <CardEditor
                      onSave={addCard}
                      onCancel={toggleAddingCard}
                      adding
                    />
                  ) : (
                    <div className="Toggle-Add-Card" onClick={toggleAddingCard}>
                      <ion-icon name="add" /> Add a card
                    </div>
                  )}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
  );
}

const mapStateToProps = (state, ownProps) => ({
  list: state.lists[ownProps.listId]
});

export default connect(mapStateToProps)(List);