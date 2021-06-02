import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Item from './Item';
import Talent from './Telent';

@Entity()
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
    image_path: string;

    @OneToMany(() => Talent, character => Character, { eager: true })
    talents: Talent[];

    @ManyToMany(() => Item)
    @JoinTable()
    telent_itens: Item[];

    @ManyToMany(() => Item)
    @JoinTable()
    xp_itens: Item[];

    @ManyToMany(() => Item)
    @JoinTable()
    ascencion_itens: Item[];
}