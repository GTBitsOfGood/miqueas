import mongoDB from '../index';
import Item from '../../models/Item';
import TransactionItem from '../../models/TransactionItem';
import Transaction from '../../models/Transaction';
import {getItemUpdateStock} from './items.js';

export async function getTransactions() {
  await mongoDB();

  return Transaction.find().sort({ submitted: -1 });
}

export async function addTransaction(transaction) {
  await mongoDB();
  let transItems = transaction.transactionItems;
  for (let i = 0; i < transItems.length; i++) {
    let item = await getItemUpdateStock(transItems[i].item.name, transItems[i].item.category,
      transItems[i].item.gender, transItems[i].item.typeColor, transItems[i].item.size, transItems[i].item.location, transItems[i].quantityChanged);
    transItems[i].item = item._id;
    let newTransItem = await TransactionItem.create(transItems[i]);
    transItems[i] = newTransItem._id;
  }
  return Transaction.create(transaction);
}
export async function getTransaction(id) {
  await mongoDB();

  return Transaction.findById(id);
}

export async function deleteTransaction(id) {
  await mongoDB();

  await Transaction.findById(id).then((item) => item.remove());
}
