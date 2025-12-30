import { redirect } from "react-router";

export function checkAgeVerification() {
  if (typeof window === "undefined") {
    return {};
  }

  const ageVerified = sessionStorage.getItem("ageVerified");

  if (!ageVerified || ageVerified === "") {
    throw redirect("/age-verification");
  }

  if (ageVerified === "false") {
    throw redirect("/under-age");
  }

  return {};
}

