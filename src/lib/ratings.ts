import { collection, getDocs } from "firebase/firestore";

import { db } from "@/lib/firebase";

const RATINGS_COLLECTION = "ratings";

export interface RatingSummary {
  average: number;
  totalRatings: number;
  totalReviews: number;
}

export function formatAverageRating(average: number): string {
  return average < 4.9 ? "4.9+" : average.toFixed(1);
}

export async function getRatingSummary(): Promise<RatingSummary> {
  if (typeof window === "undefined") {
    return { average: 0, totalRatings: 0, totalReviews: 0 };
  }

  const snapshot = await getDocs(collection(db, RATINGS_COLLECTION));

  let ratingTotal = 0;
  let reviewCount = 0;

  for (const document of snapshot.docs) {
    const data = document.data();

    const rating = Number(data.rating);
    if (Number.isFinite(rating)) {
      ratingTotal += rating;
    }

    if (typeof data.comment === "string" && data.comment.trim().length > 0) {
      reviewCount += 1;
    }
  }

  const totalRatings = snapshot.size;
  const average = totalRatings > 0 ? ratingTotal / totalRatings : 0;

  return { average, totalRatings, totalReviews: reviewCount };
}
