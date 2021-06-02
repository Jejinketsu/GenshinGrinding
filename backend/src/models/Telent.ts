import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Character from './Character';

@Entity()
export default class Talent {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    level: number;

    @Column()
    image_path: string;

    @ManyToOne(() => Character, talents => Talent)
    character: Character;
}