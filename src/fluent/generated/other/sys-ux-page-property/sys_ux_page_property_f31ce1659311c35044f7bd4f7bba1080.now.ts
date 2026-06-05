import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f31ce1659311c35044f7bd4f7bba1080'],
    table: 'sys_ux_page_property',
    data: {
        name: 'chrome_toolbar',
        page: 'e728e92593dd835044f7bd4f7bba1020',
        required_translations: `[ {
  "message" : "List",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Records",
  "code" : "",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_gegis_ins_policy.e728e92593dd835044f7bd4f7bba1020.root.global.chrome_toolbar',
        value: `[\r
    {\r
        "id": "record",\r
        "label": {\r
            "translatable": true,\r
            "message": "Records"\r
        },\r
        "icon": "abc-fill",\r
        "routeInfo": {\r
            "route": "record"\r
        },\r
        "group": "top",\r
        "order": 200,\r
        "badge": {},\r
        "presence": {},\r
        "availability": {},\r
        "viewportInfo": {}\r
    },\r
    {\r
        "id": "list",\r
        "label": {\r
            "translatable": true,\r
            "message": "List"\r
        },\r
        "icon": "accessibility-fill",\r
        "routeInfo": {\r
            "route": "list"\r
        },\r
        "group": "top",\r
        "order": 100,\r
        "badge": {},\r
        "presence": {},\r
        "availability": {},\r
        "viewportInfo": {}\r
    }\r
]`,
    },
})
