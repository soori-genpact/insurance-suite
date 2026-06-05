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
  "message" : "Record",
  "code" : "",
  "comment" : ""
}, {
  "message" : "Simple List",
  "code" : "",
  "comment" : ""
} ]`,
        sys_domain: 'global',
        sys_domain_path: 'global',
        type: 'json',
        unique_name: 'x_gegis_ins_policy.e728e92593dd835044f7bd4f7bba1020.root.global.chrome_toolbar',
        value: `[
    {
        "id": "list",
        "label": {
            "translatable": true,
            "message": "List"
        },
        "icon": "accessibility-fill",
        "routeInfo": {
            "route": "list"
        },
        "group": "top",
        "order": 100,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    },
    {
        "id": "list",
        "label": {
            "translatable": true,
            "message": "List"
        },
        "icon": "action-ai-sparkle-fill",
        "routeInfo": {
            "route": "list"
        },
        "group": "top",
        "order": 100,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    },
    {
        "id": "simplelist",
        "label": {
            "translatable": true,
            "message": "Simple List"
        },
        "icon": "activity-fill",
        "routeInfo": {
            "route": "simplelist"
        },
        "group": "top",
        "order": 200,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    },
    {
        "id": "record",
        "label": {
            "translatable": true,
            "message": "Record"
        },
        "icon": "accessibility-outline",
        "routeInfo": {
            "route": "record"
        },
        "group": "top",
        "order": 300,
        "badge": {},
        "presence": {},
        "availability": {},
        "viewportInfo": {}
    }
]`,
    },
})
