import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import DungeonToItem from './DungeonToItem';
import UserToItem from './UserToItem';

@Entity()
export default class Item {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        unique: true,
    })
    name: string;

    @Column()
    type: string;

    @Column()
    rarity: number;

    @Column()
    description: string;

    @Column()
    image_path: string;

    @OneToMany(() => DungeonToItem, dungeonToItem => dungeonToItem.item)
    dungeonToItem: DungeonToItem[];

    @OneToMany(() => UserToItem, userToItem => userToItem.item)
    userToItem: UserToItem[];
}