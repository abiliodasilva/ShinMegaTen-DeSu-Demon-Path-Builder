import Demon from "./resources/demon_list.js";
import * as DataFiller from "./helpers/data_filler.js";

function main() {
  // Fill the wanted demon <select> with the demon list.
  const wantedDemonSelect = DataFiller.selectFiller('#wanted-demon', 'race', Demon);

  // "Change wanted demon" function register.
  wantedDemonSelect.addEventListener('choice', onDemonChoice.bind(event));
}

function onDemonChoice(demonChoiceEvent) {
  const choosedDemon = demonChoiceEvent.detail.choice.value;
  if (!choosedDemon) {
    return;
  }

  // TODO: Create <select> taking into account the avaliable
  // passives skills slots.

  // TODO: Create button to start the demon path search.

  console.log(choosedDemon);
}

// "Main" function register.
document.addEventListener("DOMContentLoaded", main);