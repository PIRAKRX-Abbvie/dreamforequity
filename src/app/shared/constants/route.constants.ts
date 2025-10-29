export const apiRoutes = {
  recaptcha: {
    getSiteKey: (recaptchaKey:string) => `/embedable/forms/recaptcha/${recaptchaKey}`,
  },
  register: {
    formPost: () => '/embedable/forms/form-data-dream-for-equity'
  }
}