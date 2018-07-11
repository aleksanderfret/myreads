import React, { Component } from 'react';
import { getShelves } from '../../../../models/shelves';

class BookControls extends Component {
  state = {
    selectedValue: this.props.currentShelf || 'moveTo'
  }

  onShelfChange = (event) => {
    const selectedValue = event.target.value;
    this.props.onShelfChange(selectedValue);
    this.setState(() => ({ selectedValue }));
  }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

export default BookControls;
