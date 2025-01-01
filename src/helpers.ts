/**
 * Formata uma data de qualquer padrão para "dd/mm/yyyy".
 * @param date Um parâmetro do tipo Date ou string que representa a data.
 * @returns Data formatada no padrão "dd/mm/yyyy". Ex.: "01/12/2024"
 */
export function getFormattedDate(date: Date | string): string {
  if (!(date instanceof Date)) date = new Date(Date.parse(date));

  let day: string = date.getDate().toString();
  if (day.length == 1) {
    day = "0" + day;
  }

  return `${day}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
