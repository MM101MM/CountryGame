const { VK } = require('vk-io'); 
var Tykaev_balance = 10000000; //https://vk.com/mishatukaev Михаил Тюкаев
var Tykaev_factory = 0; //https://vk.com/mishatukaev Михаил Тюкаев 
var Tykaev_army = 0; //https://vk.com/mishatukaev Михаил Тюкаев
var Tykaev_tanks = 0; //https://vk.com/mishatukaev Михаил Тюкаев
var Tykaev_oil = 0; //https://vk.com/mishatukaev Михаил Тюкаев 
var Tykaev = 89964535;

var Vitya_balance = 10000000; //https://vk.com/id299729466 Викьло мишин 
var Vitya_factory = 0; //https://vk.com/id299729466 Виктор мишин 
var Vitya_army = 0; //https://vk.com/id299729466 Виктор мишин 
var Vitya_tanks = 0; //https://vk.com/id299729466 Виктор мишин 
var Vitya_oil = 0; //https://vk.com/id299729466 Виктор мишин 
var Vitya = 2554887;

var factory = 500000;
var oil_station = 500000;

const vk=new VK({ 
token: "9084b718230f172bde6de1ed2ab01423bf77cd1ad68bfae62638e1529e4266ced52ee9fb18190285a56e7" 
}); 

//Магазин
vk.updates.hear(/Магазин/i, context =>{ 
context.send("1.Завод 500000","2. Нефтяная вышка 500000","Для покупки пропишите: Buy (Ваш код) (ЗАМЕНИТЬ ПОСЛЕДНЮЮ ЦИФРУ КОДА НА ЦИФРУ ТОГО,ЧТО ХОТИТЕ КУПИТЬ)")
}); 


    //КОНЕЦ МИША///////////////////////////////////////////////////////////////////////////////////////////////////////////
    vk.updates.startPolling().then(() =>{ 
        console.log ('[BOT] —> Бот запущен!') 
        })
        vk.updates.start().catch(console.error);