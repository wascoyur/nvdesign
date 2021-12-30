export function btnToggle(email, isLoading) {
  return email && !isLoading ? "button " : "button disabled";
}
