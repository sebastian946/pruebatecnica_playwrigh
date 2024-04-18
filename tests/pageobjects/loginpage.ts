import { Page } from "@playwright/test";

export class LoginPage {
    private readonly input_username;
    private readonly input_password;
    private readonly button_login;

    constructor(page: Page){
        this.input_username = page.getByRole('textbox',{name: "Usuario"});
        this.input_password = page.locator('#clave');
        this.button_login = page.getByRole('button', {name:'Ingresar'});
    }

    async fillUsername(username: string){
        await this.input_username.fill(username);
    }

    async fillpassword(password: string){
        await this.input_password.fill(password);
    }

    async clickbuttonlogin(){
        await this.button_login.click();
    }

    async completelogin(username: string, password: string){
        this.fillUsername(username);
        this.fillpassword(password);
        this.clickbuttonlogin();
    }
}