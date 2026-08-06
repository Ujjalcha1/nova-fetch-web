import { collection, getCountFromServer } from "firebase/firestore";

import { db } from "@/lib/firebase";

const DOWNLOADS_COLLECTION = "websiteDownloads";

export function formatDownloadCount(count: number): string {
  if (count < 100) {
    return "100+";
  }

  const compact = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
    roundingMode: "halfEven",
  }).format(count);

  return `${compact}+`;
}

export async function getDownloadCount(): Promise<number> {
  if (typeof window === "undefined") {
    return 0;
  }

  const snapshot = await getCountFromServer(
    collection(db, DOWNLOADS_COLLECTION)
  );

  return snapshot.data().count;
}
