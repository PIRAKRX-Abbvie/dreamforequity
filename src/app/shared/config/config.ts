export interface Config {
  stage: string;
  apiBase: string;
  googleAnalytics: {
    id: string;
    auth: string;
    preview: string;
  };
  recaptchaKey: string;
  siteOrigin: string;
  siteLanguage: string;
  recipient: string;
  FormVersion: string;
}
