import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Dungeon from './Dungeon';
import Item from './Item';

@Entity()
export default class DungeonToItem {

    @PrimaryGeneratedColumn('increment')
    public dungeonToItemId!: number;
    
    @Column()
    public dungeonId!: number;

    @Column()
    public itemId!: number;

    @Column()
    public day!: string;

    @ManyToOne(() => Dungeon, dungeon => dungeon.dungeonToItem)
    public dungeon!: Dungeon;

    @ManyToOne(() => Item, item => item.dungeonToItem)
    public item!: Item;

}