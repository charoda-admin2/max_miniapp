// Данные, аналогичные результатам запросов из вашей БД
const DB = {
    // get_contacts() -> admin_contacts
    adminContacts: {
        address: "368750, Республика Дагестан, Чародинский район, село Цуриб, ул. Имама Шамиля, д. 1",
        phone1: "8 (8722) 55-36-23",
        phone2: "8 (8722) 55-36-27",
        email: "charodarayon@e-dag.ru",
        schedule: "График работы: в будние дни: с 8:00 по 17:00, обед с 12:00 по 13:00",
        max: "https://web.max.ru/-69208665284741",
        vk: "https://vk.ru/mo_charodinskiy",
        site: "https://charodinskij-r82.gosweb.gosuslugi.ru/"
    },

    // get_reception_info() -> reception_info
    receptionInfo: [
        {
            name: "",
            job_title: "Глава района",
            phone: "8 (8722) 55-36-27",
            email: "charodarayon@e-dag.ru",
            description: "Личный прием граждан главой района: в четверг, еженедельно"
        },
    ],

    // get_villages_contacts() -> villages_contact
    villages: [
        { name: "Цурибский", site: "https://curibskij-s-s-r82.gosweb.gosuslugi.ru/" },
        { name: "Чарода", site: "https://charoda-r82.gosweb.gosuslugi.ru/" },
        { name: "Магарский", site: "https://s-s-magarskij-r82.gosweb.gosuslugi.ru/" },
        { name: "Гилибский", site: "https://gilibskoe-r82.gosweb.gosuslugi.ru/" },
        { name: "Ирибский", site: "https://s-s-iribskij-r82.gosweb.gosuslugi.ru/" },
        { name: "Арчибский", site: "https://s-s-archibskij-r82.gosweb.gosuslugi.ru/" },
        { name: "Дусрахский", site: "https://s-s-dusraxskij-r82.gosweb.gosuslugi.ru/" },
        { name: "Шалиб", site: "https://shalib-r82.gosweb.gosuslugi.ru/" },
        { name: "Мугурух", site: "https://mugurux-r82.gosweb.gosuslugi.ru/" },
		{ name: "Цадах", site: "https://cadax-r82.gosweb.gosuslugi.ru/" },
		{ name: "Гочобский", site: "https://s-s-gochobskij-r82.gosweb.gosuslugi.ru/" },
		{ name: "Суметинский", site: "https://s-s-sumetinskij-r82.gosweb.gosuslugi.ru/" },
		{ name: "Гочадинский", site: "https://s-s-gochadinskij-r82.gosweb.gosuslugi.ru/" }
    ],

    // get_school_contacts() -> school_contacts
    schools: [
        {
            name: "Цурибская СОШ",
            max: "https://web.max.ru/-69607208804542"
        },
        {
            name: "Гилибская СОШ",
            max: "https://web.max.ru/-69602990454112"
        },
        {
            name: "Дусрахская СОШ",
            max: "https://web.max.ru/-69606601550425"
        },
        {
            name: "Магарская СОШ",
            max: "https://web.max.ru/-69393236740814"
        },
        {
            name: "Ирибская СОШ",
            max: "https://max.ru/id539002463_gos"
        },
        {
            name: "Тлярошская СОШ",
            max: "https://web.max.ru/-69636172573354"
        },
        {
            name: "Гочобская СОШ",
            max: "https://web.max.ru/-69630992078161"
        },
        {
            name: "Арчибская СОШ",
            max: "https://web.max.ru/-69603019126253"
        },
        {
            name: "Цулдинская ООШ",
            max: "https://web.max.ru/-69605089768800"
        }
      
    ]
};
