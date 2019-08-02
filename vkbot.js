const { VK } = require('vk-io'); 
var Tykaev_balance = 10000000; //https://vk.com/mishatukaev Михаил Тюкаев
var Tykaev_factory = 0; //https://vk.com/mishatukaev Михаил Тюкаев 
var Tykaev_army = 0; //https://vk.com/mishatukaev Михаил Тюкаев
var Tykaev_tanks = 0; //https://vk.com/mishatukaev Михаил Тюкаев
var Tykaev_oil = 0; //https://vk.com/mishatukaev Михаил Тюкаев 
var Tykaev = 89964535;
var Tykaev_humans = 10000000;
var Tykaev_armyPr = 5;

var Vitya_balance = 10000000; //https://vk.com/id299729466 Викьло мишин 
var Vitya_factory = 0; //https://vk.com/id299729466 Виктор мишин 
var Vitya_army = 0; //https://vk.com/id299729466 Виктор мишин 
var Vitya_tanks = 0; //https://vk.com/id299729466 Виктор мишин 
var Vitya_oil = 0; //https://vk.com/id299729466 Виктор мишин 
var Vitya = 2554887;
var Vitya_humans = 10000000;
var Vitya_armyPr = 5;

var factory = 500000;
var oil_station = 500000;

const vk=new VK({ 
token: "9084b718230f172bde6de1ed2ab01423bf77cd1ad68bfae62638e1529e4266ced52ee9fb18190285a56e7" 
}); 

//Магазин
vk.updates.hear(/Магазин/i, context =>{ 
context.send("1.Завод 500000")
context.send("2. Нефтяная вышка 500000")
context.send("Для покупки пропишите свой код с заменённой последней цифрой на то,что хотите купить. Пример: Мой код: 44542725,для покупки я должен буду прописать:44542721 или 44542722 )")
}); 

//НАЧАЛО Виктор////////////////////////////////////////////////////////////////////////////////////////////////////////////

vk.updates.hear(/2554887/i, context => { 
    Vitya_army = Vitya_humans/100*Vitya_armyPr;
    Vitya_humans = Vitya_humans-Vitya_army;
    context.send('Игрок: Vitya Mishin') 
    context.send("Страна: Омирианд")
    context.send("Правитель: Виктор I")
    context.send("Христианство")
    context.send("Демократия")
    context.send(Vitya_balance + "$  <---Баланс")
    context.send(Vitya_factory + "  <---Фабрики")
    context.send(Vitya_army + "  <---Рекруты")
    context.send(Vitya_tanks + "  <---Танковые рекруты")
    context.send(Vitya_oil + "  <---Нефтяные вышки")
    context.send(Vitya_oil*100000 + "$  <---Прибыль")
    context.send(Vitya_humans + "  <---Людские ресурсы")
    context.send(Vitya_armyPr + "%  <---Процент военно обязанного населения")
    context.send("Внимание,запущен тестовый режим")
}); 

//Покупка Виктор

    vk.updates.hear(/2554881/i, context => { 
            if (Vitya_balance > 500000){
            Vitya_balance = Vitya_balance - factory;
            Vitya_factory++;
            context.send("Успешно купленно")
            console.log ('[BOT] —> Витя произвелась покупка')}
    
            if (Vitya_balance < 500000){
 
            context.send("Недостаточно средств") 
} 
});
    vk.updates.hear(/2554882/i, context => { 
            if (Vitya_balance > 500000){
            Vitya_balance = Vitya_balance - oil_station;
        Vitya_oil++;
        context.send("Успешно купленно")
        console.log ('[BOT] —> Витя произвелась покупка')}

            if (Vitya_balance < 500000){
            
            context.send("Недостаточно средств") 
        } 
    }); 
//КОНЕЦ Виктор////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Выдача новых ресурсов/Рекрутов
vk.updates.hear(/9084b718230f172bde6de1ed2ab01423bf77cd1ad68bfae62638e1529e4266ced52ee9fb18190285a56e7/i, context => { 
            Vitya_balance = Vitya_balance + Vitya_oil*100000;
            Tykaev_balance = Tykaev_balance + Tykaev_oil*100000;
            context.send("Готово пидор")
});

//НАЧАЛО МИША//////////////////////////////////////////////////////////////////////////////////////////////////////////// 

                                    vk.updates.hear(/89964535/i, context => { 
    Tykaev_army = Tykaev_humans/100*Tykaev_armyPr;
    Tykaev_humans = Tykaev_humans-Tykaev_army;
    context.send('Игрок: Mihail Tykaev') 
    context.send("Страна: Бразилия") 
    context.send("Правитель: Сулейман эльман I") 
    context.send("Индуизм") 
    context.send("Социализм") 
    context.send(Tykaev_balance + "$ <---Баланс") 
    context.send(Tykaev_factory + " <---Фабрики") 
    context.send(Tykaev_army + " <---Рекруты") 
    context.send(Tykaev_tanks + " <---Танковые рекруты") 
    context.send(Tykaev_oil + " <---Нефтяные вышки") 
    context.send(Tykaev_oil*100000 + "$ <---Прибыль") 
    context.send(Tykaev_humans + "  <---Людские ресурсы")
    context.send(Tykaev_armyPr + "%  <---Процент военно обязанного населения")
    context.send("Внимание,запущен тестовый режим") 
    
    }); 
    
    //Покупка МИША 
    
        vk.updates.hear(/89964531/i, context => { 
            if (Tykaev_balance > 500000){ 
            Tykaev_balance = Tykaev_balance - factory; 
            Tykaev_factory++; 
            context.send("Успешно купленно")
            console.log ('[BOT] —> Миша произвелась покупка')} 
    
            if (Tykaev_balance < 500000){ 
    
            context.send("Недостаточно средств") 
    } 
    }); 
    //oil 
        vk.updates.hear(/89964532/i, context => { 
            if (Tykaev_balance > 500000){ 
            Tykaev_balance = Tykaev_balance - oil_station; 
            Tykaev_oil++; 
            context.send("Успешно купленно")
            console.log ('[BOT] —> Миша произвелась покупка') } 
    
            if (Tykaev_balance < 500000){ 
    
            context.send("Недостаточно средств") 
    } 
    }); 
    //КОНЕЦ МИША///////////////////////////////////////////////////////////////////////////////////////////////////////////
    vk.updates.startPolling().then(() =>{ 
        console.log ('[BOT] —> Бот запущен!') 
        })
        vk.updates.start().catch(console.error);