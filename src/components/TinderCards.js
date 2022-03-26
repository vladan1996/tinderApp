import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../components/TinderCards.css";
import db from "../firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const onsubscribe = db
      .collection("people")
      .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));
    return () => {
      //Clean up
      onsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCard__container">
        {people.map(person => (
          <TinderCard
            key={person.name}
            className="swipe"
            preventSwipe={["up", "down"]}
          >
            <div
              style={{
                backgroundImage: `url(${person.url})`
              }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
