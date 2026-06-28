import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Download() {
  const ua = (await headers()).get("user-agent") ?? "";

  if (/android/i.test(ua)) {
    redirect("https://play.google.com/store/apps/details?id=com.chadwallet");
  }

  if (/iphone|ipad|ipod/i.test(ua)) {
    redirect("https://apps.apple.com/app/id123456789");
  }

  redirect("https://chadwallet.app");
}
