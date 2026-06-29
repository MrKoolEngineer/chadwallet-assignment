import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Download() {
  const ua = (await headers()).get("user-agent") ?? "";

  if (/android/i.test(ua)) {
    redirect(
      "https://play.google.com/store/apps/details?id=xyz.chadwallet.www",
    );
  }

  if (/iphone|ipad|ipod/i.test(ua)) {
    redirect("https://apps.apple.com/us/app/chadwallet/id6757367474");
  }

  // Desktop
  redirect("https://chadwallet-assignment-one.vercel.app");
}
