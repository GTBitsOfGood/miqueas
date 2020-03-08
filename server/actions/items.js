import mongoDB from '../index';
import Item from '../../models/Item';
import ItemVariation from '../../models/ItemVariation.js';

export async function getItems() {
  await mongoDB();

  return Item
    .find()
    .sort({ submitted: -1 });
}

export async function get1000Items() {
  await mongoDB();

  return Item
    .find()
    .sort({ submitted: -1 }).limit(1000);
}

export async function addItem(item) {
  await mongoDB();
  return Item.create(item)
}

export async function deleteItem(id) {
  await mongoDB();

  await Item.findById(id)
    .then((item) => item.remove());
}

export async function updateItemState(id, state) {
  await mongoDB();

  return Item.findOne({ _id: id }, { status: 1 })
    .then(async (curObject) => {
      let result = {};

      if (curObject.status < 3) {
        result = await Item.findOneAndUpdate({ _id: id }, { status: state, decision: null },
          { upsert: false, new: true });
      } else {
        result = await Item.findOneAndUpdate({ _id: id }, { status: state },
          { upsert: false, new: true });
      }
      return result;
    });
}

export async function getItemVariation(name) {
  await mongoDB();

  return ItemVariation.findOne({name: name});
}

// export async function getItem(id) {
//   await mongoDB();

//   return Application.findOne({ id });
// }