//Create a service class with a constructor
//Should take in a URL array [] for multiple service endpoints, for user and posts ect..
//Should take an a data object

export class Service {
  constructor(url, endpoints) {
    this.url = url;
    this.endpoints = endpoints;
  }

  _get() {}

  _post() {}

  _put() {}

  _patch() {}

  _delete() {}
}
