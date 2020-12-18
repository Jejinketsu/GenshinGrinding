import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Item from './Item';


@Entity("dungeons")
export default class Dungeon {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column({type: 'date'})
    day: Date;

    @OneToMany(() => Item, item => item.dungeon, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'item_id' })
    item_dungeon: Item;
}