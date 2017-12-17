# MVC Pattern

 - [Using Laravel structure](#using_laravel_structure)
 - [Create MVC inside theme](#create_mvc_inside_theme)
 
<a name="using_laravel_structure"></a>
##Using Laravel structure
You can start working develop theme base on default theme `ripple` or using starter theme by command:
    
```bash
php artisan theme:create <your theme name>
```
 
Then use MVC pattern:
 
\- Routes: `/routes`

To add new route for your theme, you can add it in `/routes/web.php`:

```php
Route::get('/test', function () {
   return Theme::scope('test')->render();
});
```


> {note} You need to add a view with name `test.blade.php` in `/public/themes/<your theme>/views` to run above example.
 
\- Models: `/app/Models`

\- View: `/public/themes/<your theme>/views`

\- Controllers: `/app/Http/Controllers`
 
<a name="create_mvc_inside_theme"></a>
## Create MVC inside theme
You can start working develop theme base on default theme `ripple` or using starter theme by command:
    
```bash
php artisan theme:create <your theme name>
```
    
###1. Autoload Psr-4 for your theme
\- To start working on MVC theme, please create folder `src` on your theme.

\- Create file `composer.json` on your theme

```javascript
{
  "name": "botble/theme",
  "type": "Botble theme",
  "description": "Example theme for Botble CMS",
  "homepage": "http://botble.com",
  "authors": [
    {
      "name": "Botble",
      "homepage": "http://botble.com"
    }
  ],
  "require": {
    "php": ">=5.6.0"
  },
  "autoload": {
    "psr-4": {
      "Ripple\\": "src/"
    }
  }
}
```
   
> {note} You can customize this file by your information

\- Open CMD or Terminal and cd to your theme folder and run:

```bash
composer dump-autoload
``` 
    
This command will generate autoload files to autoload `/public/theme/<your theme>/src` folder.

###2. Load routes

Create file `routes.php` in folder `/public/theme/<your theme>/functions`:

```php
<?php 
    
    require_once __DIR__ . '/../vendor/autoload.php';
    
    Route::get('test', function () {
        dd('This is a test route');
    });
```

###3. Models

You can create folder `public/themes/<your theme>/src/Models` and put all models you need here. Namespace for it will be `Ripple\Models`.
> {note} `Ripple` is the name that you autoload in step 1

Ex: `public/themes/<your theme>/src/Models/Post.php`

```php
namespace Ripple/Models;
    
use Eloquent;

class Post extends Eloquent
{
    protected $table = 'posts';
}
```
    
###4. Controllers

You can create folder `public/themes/<your theme>/src/Http/Controllers` and put all controllers you need here. Namespace for it will be `Ripple\Http\Controllers`.

###5. Views

Views will be in `public/themes/<your theme>/views`.