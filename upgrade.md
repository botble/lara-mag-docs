# Upgrade Guide

- [Upgrade To 5.20](#upgrade-5.20)
- [Upgrade To 5.19](#upgrade-5.19)
- [Upgrade To 5.18](#upgrade-5.18)
- [Upgrade To 5.17](#upgrade-5.17)
- [Upgrade To 5.16](#upgrade-5.16)
- [Upgrade To 5.15](#upgrade-5.15)
- [Upgrade To 5.14](#upgrade-5.14)
- [Upgrade To 5.13](#upgrade-5.13)
- [Upgrade To 5.12](#upgrade-5.12)
- [Upgrade To 5.11](#upgrade-5.11)
- [Upgrade To 5.10](#upgrade-5.10)
- [Upgrade To 5.9](#upgrade-5.9)
- [Upgrade To 5.8](#upgrade-5.8)
- [Upgrade To 5.7](#upgrade-5.7)
- [Upgrade To 5.6](#upgrade-5.6)
- [Upgrade To 5.5](#upgrade-5.5)
- [Upgrade To 5.4](#upgrade-5.4)
- [Upgrade To 5.3](#upgrade-5.3)
- [Upgrade To 5.2](#upgrade-5.2)
- [Upgrade To 5.1](#upgrade-5.1)
- [Upgrade To 5.0](#upgrade-5.0)
- [Upgrade To 4.2](#upgrade-4.2)
- [Upgrade To 4.1](#upgrade-4.1)
- [Upgrade To 4.0](#upgrade-4.0)
- [Upgrade To 3.6.1](#upgrade-3.6.1)
- [Upgrade To 3.6](#upgrade-3.6)
- [Upgrade To 3.5](#upgrade-3.5)
- [Upgrade To 3.4](#upgrade-3.4)
- [Upgrade To 3.3.1](#upgrade-3.3.1)
- [Upgrade To 3.3](#upgrade-3.3)
- [Upgrade To 2.2.1](#upgrade-2.2.1)
- [Upgrade To 2.2](#upgrade-2.2)
- [Upgrade To 2.1](#upgrade-2.1)
- [Upgrade To 2.0.1](#upgrade-2.0.1)
- [Upgrade To 2.0](#upgrade-2.0)
- [Upgrading To 1.1](#upgrade-1.1)

<a name="upgrade-5.20"></a>
## Upgrade to 5.20

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `database`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Run `php artisan cms:publish:assets`.
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `bootstrap`, `database`, `config`, `platform`, `vendor`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  - 
<a name="upgrade-5.19"></a>
## Upgrade to 5.19

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="upgrade-5.18"></a>
## Upgrade to 5.18

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="upgrade-5.17"></a>
## Upgrade to 5.17

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Run `php artisan cms:publish:assets`.
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="upgrade-5.16"></a>
## Upgrade to 5.16

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.
  - Go to Admin -> Plugins then activate plugin Author & Ads if you want to use it.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  - Go to Admin -> Plugins then activate plugin Author & Ads if you want to use it.
  
<a name="upgrade-5.15"></a>
## Upgrade to 5.15

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.
  - Go to Admin -> Plugins then activate plugin Author & Ads if you want to use it.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  - Go to Admin -> Plugins then activate plugin Author & Ads if you want to use it.
  
<a name="upgrade-5.14"></a>
## Upgrade to 5.14

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="upgrade-5.13"></a>
## Upgrade to 5.13

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

<a name="version_5_12"></a>
## Upgrade to 5.12

- Override folder `app`, `config`, and `platform` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

- Go to Admin -> Plugins and activate plugin RSS Feed.
  
<a name="version_5_11"></a>
## Upgrade to 5.11

- Override folder `app`, `config`, and `platform` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

- Important changes:
  - If you have customized LaraMag theme source code and you can't override folder platform/themes/lara-mag, you need to delete function `getIndex()` and `getView()` in `platform/themes/lara-mag/src/Http/Controllers/LaraMagController.php`.


<a name="version_5_10"></a>
## Upgrade to 5.10

- Override folder `app`, `config`, and `platform` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    
<a name="version_5_9"></a>
## Upgrade to 5.9

- Override folder `app`, `config`, and `platform` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    
<a name="upgrade-5.8"></a>
## Upgrade to 5.8

- Override folder `app`, `config`, `platform`, `resources/lang` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Delete folder `vendor` then run `composer install` to re-install vendor packages
- Run `php artisan migrate` to update database.
- Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.7"></a>
## Upgrade to 5.7

- Override folder `app`, `config`, `platform`, `resources/lang` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Delete folder `vendor` then run `composer install` to re-install vendor packages
- Run `php artisan migrate` to update database.
- Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.6"></a>
## Upgrade to 5.6

- Override folder `app`, `config`, `platform`, `resources/lang` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Delete folder `vendor` then run `composer install` to re-install vendor packages
- Run `php artisan migrate` to update database.
- Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.5"></a>
## Upgrade to 5.5

- Override folder `app`, `config`, `platform`, `resources/lang` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Delete folder `vendor` then run `composer install` to re-install vendor packages
- Run `php artisan migrate` to update database.
- Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.4"></a>
## Upgrade to 5.4

- Override folder `app`, `config`, `platform`, `resources/lang` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Delete folder `vendor` then run `composer install` to re-install vendor packages
- Run `php artisan migrate` to update database.
- Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.3"></a>
## Upgrade to 5.3

- Override folder `app`, `config`, `platform`, `resources/lang` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Run `php artisan cms:plugin:activate translation` to activate plugin Translation.
- Run `php artisan cms:translations:import` to update database.
- Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.2"></a>
## Upgrade to 5.2

- Override folder `app`, `config`, `platform` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.1"></a>
## Upgrade to 5.1

- Override folder `app`, `platform` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Delete folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.0"></a>
## Upgrade to 5.0

- Override folder `app`, `platform` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Delete folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-4.2"></a>
## Upgrade to 4.2

- Override folder `app`, `platform` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Delete folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`
- Remove all function `setModuleName()` in your plugins (if you have).

<a name="upgrade-4.1"></a>
## Upgrade to 4.1

- Replace all `config('media.` to `config('core.media.media.`
- Replace all `trans('media::` to `trans('core/media::`
- Replace all `views('media::` to `view('core/media::`
- Replace all `@include('media::` to `@include('core/media::`
- Replace all `@extends('media::` to `@extends('core/media::`

- Change the way to register media sizes if you add your custom image sizes:

Ex:
```php
\RvMedia::addSize('featured', 560, 380);
```

- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Remove folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`


<a name="upgrade-4.0"></a>
## Upgrade to 4.0
- Copy your themes and plugins to new source code (v4.0)
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Change in `.env`: `FILESYSTEM_DRIVER=public`
- Remove `/storage` from image URL in your database. Ex: change `/storage/uploads/abc.jpg` to `uploads/abc.jpg`
- Update helper functions:
Ex:
```php
// Before
function get_meta_data($object->id, $key, $screen, $single = false, $select = ['meta_value'])

// Now
function get_meta_data($object, $key, $single = false, $select = ['meta_value'])
```

- Add setupModel method into your plugin forms. Ex: platform/plugins/blog/src/Forms/PostForm.php:54
```php
$this->setupModel(new Post);
```

- Change screen's name to model class name in some functions: https://prnt.sc/pqyaiz
+ `Language::registerModule({PLUGIN}_MODULE_SCREEN_NAME);` to `Language::registerModule(\Botble\{Plugin}\Models\{Plugin}::class)`
+ `SeoHelper::registerModule({PLUGIN}_MODULE_SCREEN_NAME);` to `SeoHelper::registerModule(\Botble\{Plugin}\Models\{Plugin}::class)`
+ Change
```php
config([
    'packages.slug.general.supported' => array_merge(config('packages.slug.general.supported'), [{PLUGIN}_MODULE_SCREEN_NAME]),
]);
```
to

```php
SlugHelper::registerModule(\Botble\{Plugin}\Models\{Plugin}::class);
```

- Update your plugin's tables:
+ Change `apply_filters(BASE_FILTER_GET_LIST_DATA, $data, {PLUGIN}_MODULE_SCREEN_NAME)` to `apply_filters(BASE_FILTER_GET_LIST_DATA, $data, $this->repository->getModel())`
+ Change
```php
$this->applyScopes(apply_filters(BASE_FILTER_TABLE_QUERY, $query, $model, {PLUGIN}_MODULE_SCREEN_NAME));
```
to 
```php
$this->applyScopes(apply_filters(BASE_FILTER_TABLE_QUERY, $query, $model));
```

+ Change
```php
apply_filters(BASE_FILTER_TABLE_BUTTONS, $buttons, {PLUGIN}_MODULE_SCREEN_NAME);
```
to
```php
apply_filters(BASE_FILTER_TABLE_BUTTONS, $buttons, Post::class);
```

- Update in your plugin's controllers, remove screen name from `BeforeEditContentEvent`:
Change

```php
event(new BeforeEditContentEvent({PLUGIN}_MODULE_SCREEN_NAME, $request, $data));
```

To 

```php
event(new BeforeEditContentEvent($request, $data));
```


<a name="upgrade-3.6.1"></a>
## Upgrade to 3.6.1
- Override folder `platform` from the update source code.
- Run `composer update` to update vendor packages.
- Remove folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-3.6"></a>
## Upgrade to 3.6
- Override folder `platform` from the update source code.
- Update your  composer.json   with the latest  composer.json   or update changes from latest version http://prntscr.com/ohvwfw.
- Run `composer update` to update vendor packages.
- Run `php artisan migrate` to update database.
- Replace all `public.index` to `public.single`.
- Remove folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`
- We've changed method of "delete" button from `GET` to `DELETE` (http://prntscr.com/ohvrw0) so if you have custom plugins, you need to change all of it to `DELETE` in your plugin /routes/web.php

```php
Route::get('delete/{id}', ...
```

To 

```php
Route::delete('delete/{id}', ...
```

And,

```php
Route::post('delete-many', ...
```

To

```php
Route::delete('delete-many', ...
```

<a name="upgrade-3.5"></a>
## Upgrade to 3.5
- Override folder `platform` from the update source code.
- Remove folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`
- Run `composer install` to update vendor packages.
- Run `php artisan migrate` to update database.
- Change the value for `status` column from `publish` to `published`.

<a name="upgrade-3.4"></a>
## Upgrade to 3.4

- You need to copy your changes to new source code.

- From this version, all core modules, plugins and themes are located in /platform folder. 
   + If you've created your plugins, you need to copy it into /platform/plugins folder.
   + If you've created your themes, you need to copy it into /platform/themes folder and run command `php artisan cms:theme:assets:publish your-theme` to copy theme's assets to `public/themes/your-theme`

- Run `composer install` and `php artisan migrate`

- Run command `php artisan storage:link`

<a name="upgrade-3.3.1"></a>
## Upgrade to 3.3.1

- Override folder `core/base` with new source code.

<a name="upgrade-3-3"></a>
## Upgrade to 3.3

- This is big version. It has many change on core system so the easiest way to upgrade to new version is copy what your changes 
(your themes, plugins, translations) to new source code.

<a name="upgrade-2.2.1"></a>
## Upgrade from 2.2 to 2.2.1

- Replace 2 files `core/base/resources/views/layouts/master.blade.php` & `core/table/src/Abstracts/TableAbstract.php`

<a name="upgrade-2.2"></a>
## Upgrade from 2.1 to 2.2

- Override folder /core & /plugins with new source code.
- Run `php artisan vendor:publish --tag=public --force`
- Run `php artisan vendor:publish --tag=lang --force`
- Run `composer install` to update vendor packages.
- Run `php artisan migrate` to update database.

<a name="upgrade-2.1"></a>
## Upgrade from 2.0.1 to 2.1

- Run `composer install` to update vendor packages.
- Run `php artisan migrate` to update database.
- Deprecated classes: Botble\Base\Tables\TableAbstract & Botble\Base\Tables\TableBuilder will be removed in the next version, 
please change to use Botble\Table\Abstracts\TableAbstract & Botble\Table\TableBuilder

<a name="upgrade-2.0.1"></a>
## Upgrade from 2.0 to 2.0.1

- Override folder /core and /plugins
- Run "php artisan vendor:publish --tag=public --force" to update assets.
- Run "php artisan migrate" to update database.

<a name="upgrade-2.0"></a>
## Upgrade from 1.1 to 2.0

- Copy your theme to new source code.
- Run `composer install` to update vendor packages.
- Run `php artisan migrate` to update database.

> {warning} Old custom plugins which you built with v1.1 will not work on v2.0.

<a name="upgrade-1.1"></a>
## Upgrade from 1.0 to 1.1
- Using new source code from Codecanyon.
- Run `composer install` to update vendor packages.
- Run `php artisan migrate` to update database.
