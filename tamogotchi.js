const Тамагочи = {
    Имя: 'Сэм',
    Голод: 3,
    Энергия: 2,
    Настроение: 4,
    GetStatus: function(){
        let УровеньГолода = this.Голод;
        let УровеньЭнергии = this.Энергия;
        let УровеньНастроения = this.Настроение;


        if (УровеньГолода < 1 || УровеньЭнергии < 1 || УровеньНастроения < 1){
            return `${this.Имя} умер :(`
        }

        if (УровеньГолода < 3){
            УровеньГолода = 'Я голоден'
        } else {
            УровеньГолода = 'Я не голоден'
        }

        if (УровеньЭнергии < 3){
            УровеньЭнергии = 'Я хочу спать'
        } else {
            УровеньЭнергии = 'Я не хочу спать'
        }

        if (УровеньНастроения < 3){
            УровеньНастроения = 'Мне скучно'
        } else {
            УровеньНастроения = 'Мне весело'
        }

        return console.log(`Имя: ${this.Имя}, Голод: \"${УровеньГолода}\" (${this.Голод}), Энергия: \"${УровеньЭнергии}\" (${this.Энергия}), Настроение: \"${УровеньНастроения}\" (${this.Настроение})`)
    },
    SetName: function(Имя){
        return this.Имя = Имя
    },
    Кушать: function(){
        if (this.Голод < 5){
            this.Голод = this.Голод + 1
            this.Настроение = this.Настроение - 1
        }
        return console.log(`Ваш питомец немного покушал |Голод +1|\nНо из-за этого немного потолстел |Настроение -1|`)
    },
    Спать: function(){
        if (this.Энергия < 5){
            this.Энергия = this.Энергия + 1
            this.Голод = this.Голод - 1
        }
        return console.log(`Ваш питомец немного поспал |Энергия +1|\nНо из-за этого немного проголодался |Голод -1|`)
    },
    Играть: function(){
        if (this.Настроение < 5){
            this.Настроение = this.Настроение + 1
            this.Энергия = this.Энергия - 1
        }
        return console.log(`Ваш питомец немного поиграл |Настроение +1|\nНо из-за этого немного устал |Энергия -1|`)
    },
    Цезарь: function(){
        if (this.Голод < 5 || this.Энергия < 5 || this.Настроение < 5){
            this.Голод = this.Голод + 1
            this.Энергия = this.Энергия + 1
            this.Настроение = this.Настроение + 1
        }
        return console.log(`${this.Имя} успел покушать, поспать и поиграть.\n Причем сделал это почти одновременно и без негативных последствий, хорош\n|Голод +1|\n|Энергия +1|\n|Настроение +1|`)
    },
    Казнь: function(ПоследниеСлова){
        this.Голод = this.Голод - 10
        this.Энергия = this.Энергия - 10
        this.Настроение = this.Настроение - 10
        return console.log(`${this.GetStatus()} и последнее что он произнес были - ${ПоследниеСлова}`)
    }
}

Тамагочи.SetName('Эрик') // Меняет имя
Тамагочи.Цезарь() // Многозадачность
Тамагочи.Казнь(ПоследнееСлово) // Казнь с возможностью сказать последнее слово
Тамагочи.GetStatus() // Показать статус персонажа