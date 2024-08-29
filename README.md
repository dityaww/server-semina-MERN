# SPEK API

### Categories
**Get All Categories**
url: /api/v1/cms/categories
auth: **Token Organizer**
```
    {
        "_id": "66d0068e67e26e909e252dce",
        "name": "Seminar",
        "organizer": "66d004887cc1d2794b8e3ed9",
        "createdAt": "2024-08-29T05:26:38.291Z",
        "updatedAt": "2024-08-29T05:26:38.291Z",
        "__v": 0
    }
```

**Get One Categories**
url: /api/v1/cms/categories/:id
auth: **Token Organizer**
```
    "data": {
        "_id": "62cfe59890e64e9e644d3fb9",
        "name": "Olahraga",
        "organizer": "62cfe35e8ad11e7a5e240f26",
        "createdAt": "2022-07-14T09:44:56.124Z",
        "updatedAt": "2022-07-14T09:44:56.124Z",
        "__v": 0
    }
```

**Create Categories**
url: /api/v1/cms/categories/:id
auth: **Token Organizer**

body
```
    {
        name: "Kategori"
    }
```

response
```
    "data": {
        "name": "Bootcamp",
        "organizer": "62cfe35e8ad11e7a5e240f26",
        "_id": "66d05612bea1929ccac31099",
        "createdAt": "2024-08-29T11:05:54.555Z",
        "updatedAt": "2024-08-29T11:05:54.555Z",
        "__v": 0
    }
```

**Update All Categories**
url: /api/v1/cms/categories/:id
auth: **Token Organizer**

**Delete All Categories**
url: /api/v1/cms/categories/:id
auth: **Token Organizer**

### Events
**Get All Events**
url: /api/v1/cms/events
params: ``{ keyword, category, talent, status }``
auth: **Token Organizer**
```
    "data": [
        {
            "_id": "62cfeacaa7c00d1978e1530f",
            "title": "UI & UX",
            "date": "2022-07-06T01:16:14.000Z",
            "about": "Most realtors and investors are using Social Media (Facebook and Google) ineffectively because they don't know what they're doing or to start. They spend hours and hours trying different things and getting nowhere. This makes them feel like giving up on marketing altogether.",
            "tagline": "Start Your Design Career With Design Sprint",
            "keyPoint": [
                "Hours trying different things and getting nowhere makes them feel like giving up on marketing altogether."
            ],
            "venueName": "Lampung",
            "statusEvent": "Draft",
            "tickets": [
                {
                    "type": "Presale 2 Ticket",
                    "price": 10000,
                    "stock": 290,
                    "statusTicketCategories": false,
                    "_id": "62cfeacaa7c00d1978e15310"
                },
                {
                    "type": "Presale 1 Ticket",
                    "price": 7300,
                    "stock": 150,
                    "statusTicketCategories": true,
                    "_id": "62cfeacaa7c00d1978e15311"
                }
            ],
            "image": {
                "_id": "62cfea14e8fed983d5c3a4e7",
                "name": "uploads/52157125-1.png"
            },
            "category": {
                "_id": "62cfe5bd90e64e9e644d3fbf",
                "name": "Seminar"
            },
            "talent": {
                "_id": "62cfe726d8940572a095e58f",
                "name": "Shayna Putri",
                "role": "Designer",
                "image": {
                    "_id": "62cfe6e9d8940572a095e58b",
                    "name": "uploads/50483253-default.jpeg"
                }
            },
            "organizer": "62cfe35e8ad11e7a5e240f26",
            "createdAt": "2022-07-14T10:07:06.727Z",
            "updatedAt": "2024-08-29T09:35:25.581Z",
            "__v": 0
        }
    ]
```

**Get One Events**
url: /api/v1/cms/events/:id
auth: **Token Organizer**
```
    "data": {
        "_id": "62cfe59890e64e9e644d3fb9",
        "name": "Olahraga",
        "organizer": "62cfe35e8ad11e7a5e240f26",
        "createdAt": "2022-07-14T09:44:56.124Z",
        "updatedAt": "2022-07-14T09:44:56.124Z",
        "__v": 0
    }
```

**Create Events**
url: /api/v1/cms/events/:id
auth: **Token Organizer**

body
```
    {
        "title": "React",
        "date": "2024/08/16 08:00:00",
        "about": "about",
        "venueName": "Magelang",
        "tagline": "kita",
        "keyPoint": ["test", "oke"],
        "statusEvent": "Published",
        "tickets": [
            {
                "type": "Presale 1",
                "price": 10000,
                "stock": 290,
                "statusTicketCategories": true
            },
            {
                "type": "Presale 2",
                "price": 8000,
                "stock": 150,
                "statusTicketCategories": false
            }
        ],
        "category": "66bf28660c93dd13694b35ef",
        "talent": "66bfaf2951e5e0c68cfa647b",
        "image": "66bfaec851e5e0c68cfa6473"
    }
```

response
```
    "data": {
        "title": "Flutter",
        "date": "2024-08-16T01:00:00.000Z",
        "about": "about",
        "tagline": "you",
        "keyPoint": [
            "none",
            "nope"
        ],
        "venueName": "Jakarta",
        "statusEvent": "Published",
        "tickets": [
            {
                "type": "Presale 1",
                "price": 10000,
                "stock": 290,
                "statusTicketCategories": true,
                "_id": "66d058a8bea1929ccac310a9"
            },
            {
                "type": "Presale 2",
                "price": 8000,
                "stock": 150,
                "statusTicketCategories": false,
                "_id": "66d058a8bea1929ccac310aa"
            }
        ],
        "image": "62cfe6e9d8940572a095e58b",
        "category": "66d05612bea1929ccac31099",
        "talent": "62cfe768d8940572a095e593",
        "organizer": "62cfe35e8ad11e7a5e240f26",
        "_id": "66d058a8bea1929ccac310a8",
        "createdAt": "2024-08-29T11:16:56.401Z",
        "updatedAt": "2024-08-29T11:16:56.401Z",
        "__v": 0
    }
```

**Change Status Events**
url: /api/v1/cms/events/{id}/status
auth: **Token Organizer**

body
```
    {
        statusEvents: ['Published', 'Draft']
    }
```

**Update Events**
url: /api/v1/cms/events/:id
auth: **Token Organizer**

**Delete Events**
url: /api/v1/cms/events/:id
auth: **Token Organizer**


### Talents

### Organizer

