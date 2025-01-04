import { api, routes } from "./constants";

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

export function getCompleteUrlFromImg(relativeUrl: string): string {
  return api.base.replace("/api/", "") + relativeUrl;
}

/**
 * Determina se a rota da página atual é (ou pertence a) uma rota da navbar.
 * @param currentRoute Rota da página atual.
 * @param navRoute Rota da navbar.
 * @returns Booleano
 */
export function isNavRouteActive(
  currentRoute: string,
  navRoute: string
): boolean {
  if (navRoute == currentRoute) return true;

  currentRoute = currentRoute
    .replace("/", "")
    .replace("/", "")
    .replace("/", "");

  if (navRoute != routes.root) navRoute = navRoute.replace("/", "");

  if (currentRoute.includes(navRoute)) return true;

  return false;
}
