export class LocalStorageService {
  static readonly LANGUAGE = 'language';

  static get(key: string) {
    return localStorage.getItem(key);
  }

  static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
