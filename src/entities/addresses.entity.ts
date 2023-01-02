import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Addresses {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  district: string;

  @Column({ length: 25 })
  zipCode: string;

  @Column({ length: 50, nullable: true, unique: true })
  number: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 25 })
  state: string;
}

export { Addresses };
