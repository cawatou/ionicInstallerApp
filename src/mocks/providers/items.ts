import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "ID": "50048533",
        "Date": "13.10.2017 13:03:16",
        "Address": "СПБ, ПРАЖСКАЯ ул., д. 22",
        "Entrance": "3",
        "Flat": "151",
        "Comments": "нет голоса в труб не откр с трубки",
        "ResidentPhone": "89216431135   6643160 ,",
        "Resident": "Маркозова",
        "Dispatcher": "Полушкина М.",
        "MasterComments": "",
        "DateSMS": "13.10.2017 13:03:15",
        "DoneByMaster": "Нет",
        "DateDoneByMaster": "01.01.0001 0:00:00",
        "Malfunctions": [
          "Не работает трубка"
        ],
        "SpentEquipment": [],
        "RemovedEquipment": []
      },
      {
        "ID": "50048532",
        "Date": "13.10.2017 13:02:28",
        "Address": "СПБ, ПРАЖСКАЯ ул., д. 22",
        "Entrance": "3",
        "Flat": "153",
        "Comments": "не откр с трубки. нет голоса",
        "ResidentPhone": "2681817 , 89062564800 ,",
        "Resident": "Михайлова",
        "Dispatcher": "Полушкина М.",
        "MasterComments": "",
        "DateSMS": "13.10.2017 13:02:28",
        "DoneByMaster": "Нет",
        "DateDoneByMaster": "01.01.0001 0:00:00",
        "Malfunctions": [
          "Не работает трубка"
        ],
        "SpentEquipment": [],
        "RemovedEquipment": []
      },
      {
        "ID": "50048529",
        "Date": "13.10.2017 12:38:40",
        "Address": "СПБ, 12-Я В.О. линия, д. 53",
        "Entrance": "6",
        "Flat": "175",
        "Comments": "не прох вызов  с 25.09 17 г сег дома ждет",
        "ResidentPhone": "3284149 , 89219756036 ,",
        "Resident": "Лаптева В.А.",
        "Dispatcher": "Полушкина М.",
        "MasterComments": "",
        "DateSMS": "13.10.2017 12:38:39",
        "DoneByMaster": "Нет",
        "DateDoneByMaster": "01.01.0001 0:00:00",
        "Malfunctions": [
          "Нет вызова (Сброс с панели)"
        ],
        "SpentEquipment": [],
        "RemovedEquipment": []
      },
      {
        "ID": "50048519",
        "Date": "13.10.2017 12:01:14",
        "Address": "СПБ, НОВОСМОЛЕНСКАЯ наб., д. 1",
        "Entrance": "4",
        "Flat": "137",
        "Comments": "откр дверь без ключа",
        "ResidentPhone": "89112397810",
        "Resident": "<>",
        "Dispatcher": "Полушкина М.",
        "MasterComments": "",
        "DateSMS": "13.10.2017 12:01:13",
        "DoneByMaster": "Нет",
        "DateDoneByMaster": "01.01.0001 0:00:00",
        "Malfunctions": [
          "Дверь открыта"
        ],
        "SpentEquipment": [],
        "RemovedEquipment": []
      },
      {
        "ID": "50048514",
        "Date": "13.10.2017 11:50:15",
        "Address": "СПБ, КИРОЧНАЯ ул., д. 25",
        "Entrance": "1",
        "Flat": "",
        "Comments": "кв 4 не срабат кнопка выхода 89213267196",
        "ResidentPhone": "",
        "Resident": "",
        "Dispatcher": "Полушкина М.",
        "MasterComments": "",
        "DateSMS": "13.10.2017 11:50:14",
        "DoneByMaster": "Нет",
        "DateDoneByMaster": "01.01.0001 0:00:00",
        "Malfunctions": [
          "Другое"
        ],
        "SpentEquipment": [],
        "RemovedEquipment": []
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
