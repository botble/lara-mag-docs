# Widget

- [Create Widget](#create_widget)
- [Structure](#structure)

<a name="create_widget"></a>
## Create Widget
1/ To create a widget, using below command:
    
```php
php artisan widget:create <widget name>
```
    
This widget will be created in `/public/themes/<current active theme>/widgets/<widget name>`.

2/ Include widget to your theme. Add bellow code to the file `/public/themes/<current active theme>/functions/functions.php`

```php
require_once __DIR__ . '/../widgets/<widget name>/<widget name>.php';
register_widget(<Widget Name>Widget::class); // Widget class name
```
    
Then go to /admin/widgets, you will see your widget.

> {note} You can follow other widgets in default themes: Ripple and NewsTV to create widget.

3/ To remove a widget, using below command:
    
```php
php artisan widget:remove <widget name>
```
    
This widget will be removed.

<a name="structure"></a>
## Structure

A widget will have 3 files: This main class to init widget.

* Main file is main class to init widget. Ex: `/public/themes/ripple/widgets/tags/tags.php`
* A file to display frontend view. Ex: `/public/themes/ripple/widgets/tags/templates/frontend.php`
* A file to display backend view. Ex: `/public/themes/ripple/widgets/tags/templates/backend.php`
