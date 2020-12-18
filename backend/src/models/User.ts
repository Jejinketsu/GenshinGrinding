import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
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

    @Column()
    image: string;

    @OneToMany(() => Character, character => character.user, {
        cascade: ['insert', 'update'], nullable:true
    })
    @JoinColumn({name:'character_id'})
    character: Character;

    @OneToMany(() => Item, item => item.user, {
        cascade: ['insert', 'update'], nullable:true
    })
    @JoinColumn({name:'inventory_id'})
    inventory: Item;
}