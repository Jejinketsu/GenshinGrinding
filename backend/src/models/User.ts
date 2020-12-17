import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';
import Character from './Character';
import Item from './Item';

@Entity("users")
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    username: string;
    
    @Column()
    nickname: string;
    
    @Column()
    password: string;

    @OneToOne(() => Image, image => image.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name:"user_id"})
    image_user: Image;

    @OneToMany(() => Character, character => character.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name:"character_id"})
    character: Character;

    @OneToMany(() => Item, item => item.user, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name:"inventory_id"})
    inventory: Item;
}