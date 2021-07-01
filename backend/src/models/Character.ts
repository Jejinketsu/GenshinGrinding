import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Item from './Item';
import Talent from './Talent';

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

    @OneToMany(() => Talent, talent => talent.character, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    talents: Talent[];

    @ManyToMany(() => Item, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinTable()
    talent_itens: Item[];

    @ManyToMany(() => Item, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinTable()
    xp_itens: Item[];

    @ManyToMany(() => Item, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinTable()
    ascencion_itens: Item[];
}