describe('Тестирование формы логина', function () {
    it('Проверка, что при вводе верного логина и пароля происходит авторизация', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввод логина
        cy.get('#pass').type('iLoveqastudio1'); // ввод пароля
        cy.get('#loginButton').click(); // клик по кнопке
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст видимый
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
     })
     
     it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#forgotEmailButton').click(); // клик по кнопке
        cy.get('#forgotForm > .header').contains('Восстановите пароль') // проверка текста
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввод логина
        cy.get('#restoreEmailButton').click(); //клик по кноке
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверка крестика
     })

     it('Проверка, что при вводе верного логина и неверного пароля не происходит авторизация', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввод логина
        cy.get('#pass').type('iLoveqastudio5'); // ввод неверного пароля
        cy.get('#loginButton').click(); // клик по кнопке
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст видимый
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверка крестика
     })

     it('Проверка, что при вводе неверного логина и верного пароля не происходит авторизация', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#mail').type('german@dolnikov5.ru'); // ввод неверного логина
        cy.get('#pass').type('iLoveqastudio1'); // ввод пароля
        cy.get('#loginButton').click(); // клик по кнопке
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст видимый
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // ПРОВЕРКА крестика
     })

     it('Проверка при вводе логина без @ и верного пароля', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввод неверного логина без @
        cy.get('#pass').type('iLoveqastudio1'); // ввод пароля
        cy.get('#loginButton').click(); // клик по кнопке
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст видимый
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // совпадение текста
    })
    
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввод логина c заглавными
        cy.get('#pass').type('iLoveqastudio1'); // ввод пароля
        cy.get('#loginButton').click(); // клик по кнопке
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст видимый
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // ПРОВЕРКА крестика
    })
 })