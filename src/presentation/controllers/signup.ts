export class SignUpController {
  handle(httpRequest: any) {
    httpRequest = {
      statusCode: 400,
      body: new Error("Missing param: name"),
    };
    return httpRequest;
  }
}
