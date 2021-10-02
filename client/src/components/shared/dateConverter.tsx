export const dateConverter = (date: Date) => {
  return date.toISOString().split("T")[0]
}
