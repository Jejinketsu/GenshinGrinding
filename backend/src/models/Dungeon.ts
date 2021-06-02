import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import DungeonToItem from './DungeonToItem';

@Entity()
export default class Dungeon {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => DungeonToItem, dungeonToItem => dungeonToItem.dungeon)
    dungeonToItem: DungeonToItem[];
}