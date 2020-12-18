import { Entity, Column, PrimaryGeneratedColumn, OneToOne,OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';
import Talent from './Talent';
import Item from './Item';


@Entity("characters")
export default class Character {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    element: string;

    @Column()
    type_weapon: string;

    @Column()
    image: string;
    
    @ManyToOne(() => User, user => user.character, {
        cascade: ['insert', 'update'], nullable:true
    })
    @JoinColumn({ name: 'character_id' })
    user: User;

    @OneToMany(() => Talent, talent => talent.character, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'talent_id' })
    talent_character: Talent;

    @OneToMany(() => Item, item => item.xp_character, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'xp_id' })
    item: Item;

    @OneToMany(() => Item, item => item.item_leveling_character, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'item_leveling_id' })
    item_leveling: Item;
}