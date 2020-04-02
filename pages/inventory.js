import NavigationBar from '../frontend/components/NavigationBar';
import InventoryHeader from '../frontend/components/InventoryHeader';
import LocationToggle from '../frontend/components/LocationToggle.js';
import '../public/school_inventory.css';
import translate from '../frontend/components/translate.js';
import React from 'react';
import {get1000Items} from '../frontend/actions/Items.js';

const sortItems = items => {
  items = items.sort(function(a, b) {
    return a.title <= b.title ? -1 : 1;
  });

  return items;
};

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: [],
      isLoading: true,
    };
  }
  async componentDidMount() {
    const allItems = await get1000Items();
    this.setState({
      allItems: sortItems(allItems),
      isLoading: false
    });

  }
  render() {
    ///This can eventually be some loading icon but for now its just an empty div
    if (this.state.isLoading) return <div />;
    return (
      <div className="Clean">
        <InventoryHeader items={this.state.allItems} />
        <div className="Footer"><NavigationBar selector={4}/></div>
      </div>
    );
  }
}

export default Inventory 
