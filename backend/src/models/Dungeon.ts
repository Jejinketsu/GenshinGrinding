import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import DungeonToItem from './DungeonToItem';

@Entity()
export default class Dungeon {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    type: string;

    @OneToMany(() => DungeonToItem, dungeonToItem => dungeonToItem.dungeon)
    @JoinTable()
    dungeonToItem: DungeonToItem[];
}