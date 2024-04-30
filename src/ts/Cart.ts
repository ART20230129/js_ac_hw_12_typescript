import Buyable from './Buyable';

export default class Cart {
        private _items: Buyable[] = [];

        add(item:Buyable): void { //добавление позиции в корзину
                this._items.push(item);
        }
        
        get items(): Buyable[]{ // геттер вызывающий содержимое корзины
                return [...this._items];                
        } 

        getTotalSumm(): number { //Функция, считающую суммарную стоимость (без учёта скидки)
                let totalSumm: number = 0;
                this._items.forEach((item) => {
                        totalSumm += item.price;                        
                })
                return totalSumm

                // Вариант
                //return this._items.reduce((sum: number, item: Buyable) => sum + item.price, 0)
        }

        //Функция, считающаю суммарную стоимость (с учётом скидки)
        getDiscount(discount: number): number { 
                return this.getTotalSumm() - this.getTotalSumm()*(discount/100)
        }

        //Функция, позволяющая удалять уже добавленный в корзину объект по полю id
        deleteId(id: number): void {
                const index = this._items.findIndex(item => item.id === id);
                this._items.splice(index, 1)
        }

}