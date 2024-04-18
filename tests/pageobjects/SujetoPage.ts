import { expect } from "@playwright/test";
import { Page } from "playwright";

export class SujetoPage {
    // #btnSubjectsConf
    private readonly button_sujeto_css;
    // locator Crear sujeto
    private readonly button_crear_sujeto_locator;
    // #code
    private readonly input_numero_sujeto_css;
    // //*[@id="grupos"]/div/span
    private readonly dropdown_grupo_xpath;
    // locator Grupo 1 option
    private readonly option_group;
    // //*[@id="sites"]/div/span
    private readonly dropdown_sitio_xpath;
    // locator option DEMO SITE 1
    private readonly option_site;
    // //*[@id="visits"]/div/span
    private readonly dropdown_visita_xpath;
    // locator option Visita 2
    private readonly option_visita;
    // //*[@id="phaseState"]/div/span
    private readonly dropdown_estado_xpath;
    // locator option Planeada
    private readonly option_estado;
    // placeholder DD-MMM-AAAA
    private readonly input_date_placeholder;
    // //input[@role="switch"]
    private readonly swich_create_user_xpath;
    // #username
    private readonly input_username_css;
    // #name
    private readonly input_nombre_css;
    // #email
    private readonly input_email_css;
    // #phoneNumber
    private readonly input_phoneNumber_css;
    // //span[.="Agregar"]
    private readonly button_agregar_xpath;
    private readonly alert;

    constructor(page: Page){
        this.button_sujeto_css = page.locator('#btnSubjectsConf');
        this.button_crear_sujeto_locator = page.getByRole('button', {name: 'Crear sujeto'});
        this.input_numero_sujeto_css = page.locator('#code');
        this.dropdown_grupo_xpath = page.locator('//*[@id="grupos"]/div/span');
        this.option_group = page.getByRole('option',{name: 'Grupo 1'});
        this.dropdown_sitio_xpath = page.locator('//*[@id="sites"]/div/span');
        this.option_site = page.getByRole('option', {name: 'DEMO SITE 1'});
        this.dropdown_visita_xpath = page.locator('//*[@id="visits"]/div/span');
        this.option_visita = page.getByRole('option', {name: 'Visita 2'});
        this.dropdown_estado_xpath = page.locator('//*[@id="phaseState"]/div/span');
        this.option_estado = page.getByRole('option', {name: 'Planeada'});
        this.input_date_placeholder = page.getByPlaceholder('DD-MMM-AAAA');
        this.swich_create_user_xpath = page.locator('//input[@role="switch"]');
        this.input_username_css = page.locator('#username');
        this.input_nombre_css = page.locator('#name');
        this.input_email_css = page.locator('#email');
        this.input_phoneNumber_css = page.locator('#phoneNumber');
        this.button_agregar_xpath = page.locator('//span[.="Agregar"]');
        this.alert = page.locator('//div[@role="alert"]');
    }
    async clickbuttonsujeto(){
        await this.button_sujeto_css.click();
    }
    async clickbuttoncrearsujetolocator(){
        await this.button_crear_sujeto_locator.click();
    }
    async sendcodesujeto(codigo: string){
        await this.input_numero_sujeto_css.fill(codigo);
    }
    async clickdropdowngrupo(){
        await this.dropdown_grupo_xpath.click();
    }
    async clickoptiongrupo(){
        await this.option_group.click();
    }
    async clickdropdownsitio(){
        await this.dropdown_sitio_xpath.click();
    }
    async clickoptionsitio(){
        await this.option_site.click();
    }
    async clickdropdownvisita(){
        await this.dropdown_visita_xpath.click();
    }
    async clickoptionvisita(){
        await this.option_visita.click();
    }
    async senddate(date: string){
        await this.input_date_placeholder.fill(date);
    }
    async clickswitch(){
        await this.swich_create_user_xpath.click();
    }
    async sendusername(username: string){
        await this.input_username_css.fill(username);
    }
    async sendnombre(nombre: string){
        await this.input_nombre_css.fill(nombre);
    }
    async sendemail(email: string){
        await this.input_email_css.fill(email);
    }
    async sendphonenumber(number: string){
        await this.input_phoneNumber_css.fill(number);
    }
    async clickagregar(){
        await this.button_agregar_xpath.click();
    }
    async assertionsValidate(message_validate:string){
        expect(this.alert.innerText()).toEqual(message_validate);
    }
    async allfunctions(code: string, date: string, username: string, nombre: string, email:string
        ,phonenumber: string, message_validate: string
    ){
        this.clickbuttonsujeto();
        this.clickbuttoncrearsujetolocator();
        this.sendcodesujeto(code);
        this.clickdropdowngrupo();
        this.clickoptiongrupo();
        this.clickdropdownsitio();
        this.clickoptionsitio();
        this.clickdropdownvisita();
        this.clickoptionvisita();
        this.senddate(date);
        this.clickswitch();
        this.sendusername(username);
        this.sendnombre(nombre);
        this.sendemail(email);
        this.sendphonenumber(phonenumber);
        this.clickagregar();
        this.assertionsValidate(message_validate);

    }
}