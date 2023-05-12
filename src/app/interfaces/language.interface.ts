
interface Translation {
  key: string;
  value: string;
}

export interface LanguageInterface {
  name: string
  language?: string;
  translations: Translation[];
  };
