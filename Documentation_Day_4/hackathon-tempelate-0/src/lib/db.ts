import Dexie from "dexie";

export interface Review {
  id?: number;
  name: string;
  comment: string;
  rating: number;
}

class ReviewDatabase extends Dexie {
  reviews: Dexie.Table<Review, number>;

  constructor() {
    super("ReviewDB");
    this.version(1).stores({
      reviews: "++id, name, comment, rating",
    });
    this.reviews = this.table("reviews");
  }
}

export const db = new ReviewDatabase();
