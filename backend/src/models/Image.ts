import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import User from './User';
import Character from './Character';
import Item from './Item';
import Talent from './Talent';

@Entity("images")
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    path: string;

    @OneToOne(() => User, user => user.image_user)
    @JoinColumn({ name: 'user_id' })
    user: User;
    
    @OneToOne(() => Item, item => item.image_item)
    @JoinColumn({ name: 'item_id' })
    item: Item;

    @OneToOne(() => Character, character => character.image_character)
    @JoinColumn({ name: 'character_id' })
    character: Character;
    
    @OneToOne(() => Talent, talent => talent.image_talent)
    @JoinColumn({ name: 'talent_id' })
    talent: Talent;

}