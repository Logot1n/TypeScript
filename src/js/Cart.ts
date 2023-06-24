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
        let totalPrice = 0;
        for (const item of items) {
            totalPrice += item.price;
        }
        return totalPrice;
    }
    
    sumWithDiscount(items: Buyable[], discount: number): number {
        let totalPrice = 0;
        for (const item of items) {
            totalPrice += item.price;
        }
        console.log(totalPrice)
        let discountAmount = totalPrice * (discount / 100);
        console.log(discountAmount)
        let totalPriceWithDiscount = totalPrice - discountAmount;
        return Math.ceil(totalPriceWithDiscount);
    }
}