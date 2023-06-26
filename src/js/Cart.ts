import Buyable from './Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumWithoutDiscount(items: Buyable[]): number {
        let totalPrice = items.reduce((acc, item) => acc + item.price, 0);
        return totalPrice;
    }
    
    sumWithDiscount(items: Buyable[], discount: number): number {
        let totalPrice = this.sumWithoutDiscount(items);
        let discountAmount = totalPrice * (discount / 100);
        let totalPriceWithDiscount = totalPrice - discountAmount;
        return Math.ceil(totalPriceWithDiscount);
    }
}