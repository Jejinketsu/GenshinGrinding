import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity("orphanages")
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    nick_name: string;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @Column()
    characters: string;

    @Column()
    instructions:string;
    
    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Character, name => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'orphanage_id'})
    images: Image[];
}