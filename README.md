# Who use Angular in Singapore

The list of companies who use Angular/AngularJS in Singapore.

https://who-use-angular-in-singapore.netlify.app/

## Add your company!

If you are using Angular and wanted to show it to the world, submit a pull request to edit the [`src/data/organizations.json`][organizations] file.

Follow the format below to add the JSON object.

- `name`: Company/organization name (required)
- `websiteUrl`: URL of company/organization (required)
- `description`: Description of company/organization (about one sentence) (required)
- `logo`: Company/organization logo image URL (optional)
- `publicUrl`: Public URL of the service or product using Angular (optional)
- `ngVersions`: Version of Angular used: (Required)
  - `angularjs`: Whether you are using AngularJS (v1.x)
  - `angular`: Whether you are using Angular (v2 ~)
  - `ionic`: whether you are using Ionic

Example:

```
{
    "name": "Awesome Company",
    "websiteUrl": "https://example.com/",
    "description": "Awesome Company is an awesome company.",
    "logo": null,
    "publicUrl": null,
    "ngVersions": {
        "angular": true,
        "angularjs": false,
        "ionic": false,
    }
}
```

## Inspired by

https://github.com/ng-japan/who-use-angular-in-japan

[organizations]: https://github.com/ng-singapore/who-use-angular-in-singapore/blob/master/src/data/organizations.json
