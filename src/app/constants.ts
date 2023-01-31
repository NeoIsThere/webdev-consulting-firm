import { HttpHeaders } from '@angular/common/http';

export const LOGO_PATH = "./assets/logo.png";

export const INDEPENDANT_ARTICLE_ID =
  'notre-vision';

export const ADDRESS = 'Montparnasse Tower, 33 Av. du Maine, 75015 Paris';

export const PHONE = '06 04 49 71 15';

export const EMAIL = 'webefficace@yahoo.com';

export const HTTP_CONTENT_TYPE_JSON = new HttpHeaders({
  'Content-Type': 'application/json',
});

export const HTTP_CONTENT_TYPE_MULTIPART_FORM_DATA = new HttpHeaders({
  'Content-Type': 'multipart/form-data',
});

export const HTTP_WITH_CREDENTIAL_OPTION = {
  withCredentials: true,
};

export const TEXT_RESPONSE_TYPE = {
  /*To tell the parser so there is no error because it tries to parse JSON*/
  /* The response type is text whenever the server returns HTML files or only status codes without body.*/
  responseType: 'text',
};
