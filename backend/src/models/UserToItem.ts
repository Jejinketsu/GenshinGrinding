import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Item from './Item';
import User from './User';

@Entity()
export default class UserToItem {

    @PrimaryGeneratedColumn('increment')
    public userToItemId!:number;

    @Column()
    public userId!: string;

    @Column()
    public itemId: number;

    @Column()
    public quantity: Number;

    @ManyToOne(() => User, user => user.inventory)
    public user: User;

    @ManyToOne(() => Item, item => item.userToItem)
    public item: Item;

}