export interface PostDto {
  _id: string;
  UserId: string;
  Records: any[];
  Visibility: boolean;
  Date: string;
  Rating: number;
  SelfRating: number | null;
  Comments: any[];
  CommentsNum: number;
}
