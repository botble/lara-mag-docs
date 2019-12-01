# Release Notes

- [LaraMag 4.0](#version_4_0)
- [LaraMag 3.6.1](#version_3_6_1)
- [LaraMag 3.6](#version_3_6)
- [LaraMag 3.5.1](#version_3_5_1)
- [LaraMag 3.5](#version_3_5)
- [LaraMag 3.4](#version_3_4)
- [LaraMag 3.3.1](#version_3_3_1)
- [LaraMag 3.3](#version_3_3)
- [LaraMag 2.2.1](#version_2_2_1)
- [LaraMag 2.2](#version_2_2)
- [LaraMag 2.1](#version_2_1)
- [LaraMag 2.0.1](#version_2_0_1)
- [LaraMag 2.0](#version_2_0)
- [LaraMag 1.1](#version_1_1)
- [LaraMag 1.0](#version_1_0)

<a name="version_4_0"></a>
## LaraMag 4.0
### 31-10-2019

- Upgraded to Laravel 6.0. Now this CMS requires PHP >=7.2 (https://laravel.com/docs/6.0#server-requirements)

- Refactor database to improve query performance.
+ **slugs**: renamed column `reference` to `reference_type` and using model class instead of screen name. Ex: `reference_type` is `post` now changed to `Botble\Blog\Models\Post`.
+ **language_meta**: renamed column `lang_meta_content_id` to `reference_id` and `lang_meta_reference` to `reference_type`. Using model class instead of screen name. Ex: `reference_type` is `post` now changed to `Botble\Blog\Models\Post`.
+ **menu_nodes**: renamed column `related_id` to `reference_id` and `type` to `reference_type`.  Using model class instead of screen name. Ex: `reference_type` is `post` now changed to `Botble\Blog\Models\Post`.
+ **meta_boxes**: renamed column `content_id` to `reference_id` and `reference` to `reference`. Using model class instead of screen name. Ex: `reference_type` is `post` now changed to `Botble\Blog\Models\Post`.

- Update meta boxes helpers: Remove screen name in function. (`get_meta_data()`, `get_meta()`, `save_meta_data()`, `delete_meta_data()`)
Ex:
```php
// Before
function get_meta_data($object->id, $key, $screen, $single = false, $select = ['meta_value'])
```

```php
// Now
function get_meta_data($object, $key, $single = false, $select = ['meta_value'])
```

- All forms now require to setup model. Ex: platform/plugins/blog/src/Forms/PostForm.php:54
```php
$this->setupModel(new Post);
```

<a name="version_3_6_1"></a>
## Botble 3.6.1
### 10-08-2019

- Fix bug delete widget.
- Fix bug search users.
- Refactor code.
- Improve performance.

<a name="version_3_6"></a>
## LaraMag 3.6
### 20-07-2019

- Fix bug repeater field with image, file in custom fields plugin.
- Move plugin management into /packages. Now it's a optional feature, you can remove `botble/plugin-management` and run composer update to remove plugin feature.
- Update `composer.json`. Add package `wikimedia/composer-merge-plugin`.
- Add command to regenerate image sizes: `php artisan cms:media:thumnail:generate`.
- Add default theme options: site title, SEO meta tags.
- Add search box on tables.
- Update translations.
- Optimize performance & refactor code.

<a name="version_3_5_1"></a>
## LaraMag 3.5.1
### 25-06-2019

- Hotfix delete language.

Add this line into `platform/plugins/language/resources/views/index.blade.php:191`
```
@include('core/table::modal')
```

http://prntscr.com/o66h4x

<a name="version_3_5"></a>
## LaraMag 3.5
### 30-05-2019
- Restructure asset files.
- Fix security issue in upload user's avatar.
- Change default value for `status` column to `published` instead of `publish`.
- Create `dev-tool` package.
- Change binding type for repositories from `singleton` to `bind`.
- Remove `@author` in comment docs.
- Fix language issue.
- Fix dashboard widgets.
- Allow to create user without role.
- Refactor, clean migrations.

<a name="version_3_4"></a>
## LaraMag 3.4
### 15-03-2019
- Upgraded to the latest Laravel version 5.8
- Change folder structure: core, plugins and public/themes are now located in /platform folder.
- Contact plugin: Allow to reply directly from admin panel.
- Improve admin UI.
- Move some plugins to packages. Now we have a new folder is /platform/packages (it is the place for required plugins).
- Theme's directory is now located in /platform/themes/your-theme so it can't access directly anymore. After make change on theme's assets, you will need to run command `php artisan cms:theme:assets:publish your-theme` to copy assets to /public/themes/your-themes.

- Made some change on `assets` module.
    + Refactor some methods.
        + `addJavascript` => `addScripts`
        + `removeJavascript` => `removeScripts`
        + `getJavascript` => `getScripts`
        + `addStylesheets` => `addStyles`
        + `removeStylesheets` => `removeStyles`
        + `getStylesheets` => `getStyles`
        + `addStylesheetsDirectly` => `addStylesDirectly`
        + `addJavascriptDirectly` => `addScriptsDirectly`

    + Change some config keys:
        + `javascript` => `scripts`
        + `stylesheets` => `styles`
        
- Change folder to upload to `storage/uploads`, you need to run command `php artisan storage:link` to create symlink.

- Change event to listen when adding admin menu.

Change `\Botble\Base\Events\SessionStarted::class` to `\Illuminate\Routing\Events\RouteMatched::class`

Example:

```php
\Event::listen(\Illuminate\Routing\Events\RouteMatched::class, function () {
    dashboard_menu()->registerItem([
        'id' => 'cms-plugins-<your-plugin>', // key of menu, it should unique
        'priority' => 5,
        'parent_id' => null,
        'name' => __('Your plugin name'), // menu name, if you don't need translation, you can use the name in plain text
        'icon' => 'fa fa-camera',
        'url' => route('<plugins>.list'), // route to your plugin list.
        'permissions' => ['<plugins>.list'], // permission should same with route name, you can see that flag in Plugin.php
    ]);
});
```

<a name="version_3_3_1"></a>
## Botble 3.3.1
### 18-10-2018
- Hotfix: Disabled installation CMS from UI because of security issues.

<a name="version_3_3"></a>
## LaraMag 3.3
### 30-09-2018
- See what's new here: https://botble.com/whats-new-in-botble-cms-33

<a name="version_2_2_1"></a>
## LaraMag 2.2.1
### 22-06-2018

- Hotfix bulk actions and language column

<a name="version_2_2"></a>
## LaraMag 2.2
### 14-06-2018
- Fix bug UI & update admin UI
- Add Chinese language
- Refactor code & optimize queries
- Update vendor packages

<a name="version_2_1"></a>
## LaraMag 2.1
### 15-05-2018

- Support multi-language for theme options & widgets
- Fix bug add super users
- Upgrade table system & add filter tables
- Support change language on the login page
- Fix bug adding admin locale
- Fix bug create plugin by command

<a name="version_2_0_1"></a>
## LaraMag 2.0.1
### 09-04-2018

- Fix bug cropping image size.
- Fix preview image in media management
- Move API clients to settings.
- Update UI for member frontend.
- Update UI in admin panel.

<a name="version_2_0"></a>
## LaraMag 2.0
### 04-04-2018

- Upgrade to Laravel 5.6
- Add Passport support
- Refactor plugin system
- Refactor ACL system
- Fix bug member login and forgot password.
- Update UI
- Update some vendor packages

### 21-02-2018

- Fix member reset password bug.
- Fix to change status after creating a new plugin.
- Auto register plugin menu to admin dashboard after creating new plugin.
- Update vendor packages.
- Fix coding standard.
- Change to use new facebook live chat.

### 29-12-2017
- Update lara-mag theme:
    + Fix sidebar widgets style.
    + Fix bug cannot close mobile menu when admin bar activating.
- Update facebook plugin: update style, allow to add page without token.
- Refactor plugin language to make it easier.

### 17-12-2017
    - Initial release Version 1.0
