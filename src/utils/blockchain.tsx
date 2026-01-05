export const formatTime = (timeInHundredths: number): string => {
  const totalMinutes = Math.round((timeInHundredths % 100) * 0.6);
  const hours = Math.floor(timeInHundredths / 100);

  return hours > 0
    ? `${hours}h ${totalMinutes > 0 ? `${totalMinutes}m` : ""}`
    : `${totalMinutes}m`;
};

export const formatPrice = (priceInHundredths: number): string => {
  return (priceInHundredths / 100).toFixed(2);
};

export const priceToHundredths = (price: number): number => {
  return Math.round(price * 100);
};

export const timeToHundredths = (timeString: string): number => {
  let hours = 0,
    minutes = 0;

  const hoursMatch = timeString.match(/(\d+)h/);
  if (hoursMatch) hours = parseInt(hoursMatch[1], 10);

  const minutesMatch = timeString.match(/(\d+)m/);
  if (minutesMatch) minutes = parseInt(minutesMatch[1], 10);

  return hours * 100 + Math.round(minutes / 0.6);
};

export const hasExistingAccount = (): boolean => {
  return !!localStorage.getItem("user");
};

export const redirectToPayment = (
  itemType: "course" | "tutor",
  itemId: string,
  price: number
): void => {
  const storedCourses = JSON.parse(localStorage.getItem("coursesData") || "[]");

  if (!storedCourses.length) {
    console.warn(
      "No courses found in localStorage. Ensure coursesData is stored properly."
    );
  }

  localStorage.setItem(
    "pendingPayment",
    JSON.stringify({
      itemType,
      itemId,
      price,
      timestamp: new Date().toISOString(),
    })
  );

  window.location.href = `/payment?type=${itemType}&id=${itemId}&price=${price}`;
};

export const requireAuth = (): boolean => {
  if (!localStorage.getItem("user")) {
    localStorage.setItem("redirectAfterLogin", window.location.pathname);
    window.location.href = "/login";
    return false;
  }
  return true;
};
