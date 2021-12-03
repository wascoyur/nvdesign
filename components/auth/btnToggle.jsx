export function btnToggle(email, isLoading) {
  return email && !isLoading
    ? "btn btn-outline-primary btn-sm "
    : "btn btn-outline-primary btn-sm disabled";
}
