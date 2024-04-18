import test from "@playwright/test";
import { LoginPage } from "./pageobjects/loginpage"


test('caso exitoso', async ({page}) =>{
    const login = new LoginPage(page);
    login.completelogin("coor.qa","Integra2024@");
})