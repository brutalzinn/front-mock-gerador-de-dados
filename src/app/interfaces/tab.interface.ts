
export interface ICustomPlaceholder{
  key: string,
  value: string
}
export interface ITab {
  name: string;
  visivel: boolean;
  text?: string;
  custom?: Array<ICustomPlaceholder>
};
