
export interface Translation {
  key: string;
  value: string;
}

export interface LanguageInterface {
  title?: string
  language: string;
  translations: Translation[];
  };
