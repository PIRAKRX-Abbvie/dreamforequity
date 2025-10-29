import { Keyable } from "../models/keyable.model";

export const constructUrl = (baseUrl: string, parameters: Keyable) => {
  if (!parameters || !Object.keys(parameters).length) {
    return baseUrl;
  }

  return `${baseUrl}?${serialize(parameters)}`;
};

export const serialize = (params: Keyable) => {
  return Object.keys(params).map((key: string) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  }).join('&');
};
