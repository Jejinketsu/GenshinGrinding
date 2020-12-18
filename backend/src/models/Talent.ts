import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import Character from './Character';


@Entity("talents")
export default class Talent {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    level: number;
   
    @Column()
    image: string;

    @ManyToOne(() => Character, character => character.talent_character, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'talent_id' })
    character: Character;
}