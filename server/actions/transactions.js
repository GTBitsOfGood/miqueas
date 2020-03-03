import mongoDB from '../index';
import Item from '../../models/Item';
import Transaction from '../../models/Transaction';

export async function getTransactions() {
  await mongoDB();

  return Transaction.find().sort({ submitted: -1 });
}

export async function addTransaction(transaction) {
  await mongoDB();
  for (let i = 0; i < transaction.items.length; i++) {
    let item = await Item.create(transaction.items[i]);
    transaction.items[i] = item._id;
  }
  return Transaction.create(transaction);
}

export async function deleteTransaction(id) {
  await mongoDB();

  await Transaction.findById(id).then((item) => item.remove());
}
