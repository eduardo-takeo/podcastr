export const convertDurationToTimeString = (duration: number) => {
  // Convert duration in seconds to 00:00:00 format
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const finalResult = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");

  return finalResult;
};
