import React, { Component } from 'react';
import { getShelves } from '../../../../models/shelves';

class BookControls extends Component {
  state = {
    selectedValue: this.props.currentShelf || 'None'
  }

  // On select changed, it controls selectedValue in the state
  // and calls handler from props
  onShelfChange = (event) => {
    const selectedValue = event.target.value;
    this.props.onShelfChange(selectedValue);
    this.setState(() => ({ selectedValue }));
  }

  render() {
    return (
      <button
        className='book-shelf-changer'>
        <select
          value={this.state.selectedValue}
          onChange={this.onShelfChange}
        >
          <option disabled value='moveTo'> -- Move to -- </option>
          {getShelves().map((shelf) => (
            <option
              key={shelf.id}
              value={shelf.id}>{shelf.label}
            </option>
          ))}
        </select>
      </button>
    )
  }
}

export default BookControls;
