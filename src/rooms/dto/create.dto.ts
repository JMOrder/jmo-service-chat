import { Expose, Exclude } from "class-transformer";
@Exclude()
export class RoomCreateDto {
  @Expose() createdBy: number;
}
