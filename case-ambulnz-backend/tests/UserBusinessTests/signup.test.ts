// import { UserBusiness } from "../../src/business/UserBusiness"
// import { ISignupInputDTO } from "../../src/models/User"
// import { AuthenticatorMock } from ".././mocks/AuthenticatorMock"
// import { HashManagerMock } from ".././mocks/HashManagerMock"
// import { IdGeneratorMock } from ".././mocks/IdGeneratorMock"
// import { UserDatabaseMock } from ".././mocks/UserDatabaseMock"

// describe("UserBusiness.signup", () => {
//     const userBusiness = new UserBusiness(
//         new UserDatabaseMock(),
//         new IdGeneratorMock(),
//         new HashManagerMock(),
//         new AuthenticatorMock()
//     )

//     test("returns a token when the signup succeeds", async () => {
//         const input: ISignupInputDTO = {
//             email: "teste@gmail.com",
//             name: "Teste",
//             password: "teste123"
//         }

//         const response = await userBusiness.signup(input)
//         expect(response.message).toBe("Cadastro realizado com sucesso")
//         expect(response.token).toBe("token-mock-normal")
//     })
// })