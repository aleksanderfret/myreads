import React, { Component } from 'react';
import { getShelves } from '../../../../models/shelves';

class BookControls extends Component {
  state = {
    selectVisible: false
  }

  toggleSelectVisible = () => {
    this.setState((prevState) => {
      return ({selectVisible: !prevState.selectVisible});
    })
  }

  onShelfChange = (event) => {
    this.props.onShelfChange(event.target.value);
  }

  render() {
    return(
      <React.Fragment>
        <button
          className='book-shelf-changer'>
          <select
            onChange={this.onShelfChange}>
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
