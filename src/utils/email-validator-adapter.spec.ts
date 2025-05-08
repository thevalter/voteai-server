import { EmailValidatorAdapter } from "./email-validator";

describe("EmailValidator", () => {
  test("should return false if validator returns false", () => {
    const sut = new EmailValidatorAdapter();
    const isValid = sut.isValid("invalid_email@gmail.com");
    expect(isValid).toBe(false);
  });
});
