export const PAGE_LIMIT = 10;
export const pageValidation = (page: string) =>
  Number.isNaN(Number(page)) || Number(page) <= 0 ? 1 : Number(page);
