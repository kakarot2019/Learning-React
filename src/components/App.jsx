import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

//creating a func() to generalize data that can be sent over.
function creatEntry(emojiTerm) {
  return (
    <Entry
      //calling to all js object from emojipedia
      key={emojiTerm.id} //key == unique id which is hidden
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

//using map is like using loops with function as parameter (here creatEntry)
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(creatEntry)}</dl>
    </div>
  );
}

export default App;
