export function selectFiller(selector, grouper, data) {
  const select = document.querySelector(selector);
  
  // Check if <select> exist.
  if (!select || !select instanceof HTMLSelectElement) {
    throw new Error('HTML element must be <select>.');
  }

  // Add all the keys of the data object to the <select>.
  for (const key in data) {
    // In no-grouper case just add the <option> to the <select>.
    if (!grouper || !data[key][grouper]) {
      select.add(new Option(key, key));
      continue;
    }

    let optgroup = document.querySelector(`optgroup[label="${data[key][grouper]}"]`);

    // Check if <optgroup> exist. If not, then create a new one on the <select>.
    if (!optgroup) {
      optgroup = document.createElement('OPTGROUP');
      optgroup.setAttribute('label', data[key][grouper]);

      select.appendChild(optgroup);
    }

    optgroup.appendChild(new Option(key, key));
  }

  // Create a "Choices" Select type.
  new Choices(select);

  return select;
}
