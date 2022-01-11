import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import DungeonToItem from './DungeonToItem';
import UserToItem from './UserToItem';
import tag_item from '../config/tag_item';
import item_type from '../config/item_type';
@Entity()
export default class Item {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        unique: true,
    })
    name: string;

    @Column({
        enum: item_type
    })
    type: string;

    @Column({
        nullable: true,
        enum: tag_item
    })
    tag: string;

    @Column()
    rarity: number;

    @Column()
    description: string;

    @Column()
    image_path: string;

    @OneToMany(() => DungeonToItem, dungeonToItem => dungeonToItem.item, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    dungeonToItem: DungeonToItem[];

    @OneToMany(() => UserToItem, userToItem => userToItem.item, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    userToItem: UserToItem[];
}