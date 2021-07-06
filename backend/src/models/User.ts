import roles from '../config/roles';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Character from './Character'
import UserToItem from './UserToItem';

@Entity()
export default class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    nickname: string;

    @Column({
        unique: true,
    })
    username: string;

    @Column()
    password: string;

    @Column({
        enum: roles,
        default: roles.User
    })
    role: string;

    @Column()
    image_path: string;

    @ManyToMany(() => Character, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinTable()
    characters: Character[];

    @OneToMany(() => UserToItem, userToItem => userToItem.user, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinTable()
    inventory: UserToItem[];

}