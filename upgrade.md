# Upgrade Guide

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

<a name="upgrade-5.4"></a>
## Upgrade to 5.4

- Override folder `app`, `config`, `platform`, `resources/lang` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Remove folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.3"></a>
## Upgrade to 5.3

- Override folder `app`, `config`, `platform`, `resources/lang` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Run `php artisan cms:plugin:activate translation` to activate plugin Translation.
- Run `php artisan cms:translations:import` to update database.
- Remove folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.2"></a>
## Upgrade to 5.2

- Override folder `app`, `config`, `platform` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Remove folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.1"></a>
## Upgrade to 5.1

- Override folder `app`, `platform` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Remove folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-5.0"></a>
## Upgrade to 5.0

- Override folder `app`, `platform` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Remove folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`

<a name="upgrade-4.2"></a>
## Upgrade to 4.2

- Override folder `app`, `platform` from the update source code.
- Override file `composer.json` `and composer.lock` from the update source code.
- Run `composer install` to install vendor packages
- Run `php artisan migrate` to update database.
- Remove folder `public/vendor/core` and run command `php artisan vendor:publish --tag=cms-public --force`
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
