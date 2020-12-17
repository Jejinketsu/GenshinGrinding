import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import Image from './Image';
import Character from './Character';


@Entity("talents")
export default class Talent {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    username: string;

    @Column()
    nickname: string;

    @Column()
    password: string;

    @OneToOne(() => Image, image => image.talent, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: "talent_id" })
    image_talent: Image;

    @ManyToOne(() => Character, character => character.talent_character, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: "talent_id" })
    character: Character;
}