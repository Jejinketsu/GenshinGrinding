import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn} from 'typeorm';
import User from './User';
import Dungeon from './Dungeon';
import Character from './Character';


@Entity("itens")
export default class Item {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    rarity: number;
    
    @Column()
    description:string;
   
    @Column()
    quantity:number;
    
    @Column()
    image:string;

    @ManyToOne(() => User, user => user.inventory, {
        cascade: ['insert', 'update'], nullable:true
    })
    @JoinColumn({ name: 'inventory_id' })
    user: User;
    
    @ManyToOne(() => Dungeon, dungeon => dungeon.item_dungeon, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'item_id' })
    dungeon: Dungeon;

    @ManyToOne(() => Character, character => character.item, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'xp_id' })
    xp_character: Character;

    @ManyToOne(() => Character, character => character.item_leveling, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'item_leveling_id' })
    item_leveling_character: Character;
}