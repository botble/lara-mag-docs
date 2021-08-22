# Release Notes

- [LaraMag 5.20](#version_5_20)
- [LaraMag 5.19](#version_5_19)
- [LaraMag 5.18](#version_5_18)
- [LaraMag 5.17](#version_5_17)
- [LaraMag 5.16](#version_5_16)
- [LaraMag 5.15](#version_5_15)
- [LaraMag 5.14](#version_5_14)
- [LaraMag 5.13](#version_5_13)
- [LaraMag 5.12](#version_5_12)
- [LaraMag 5.11](#version_5_11)
- [LaraMag 5.10](#version_5_10)
- [LaraMag 5.9](#version_5_9)
- [LaraMag 5.8](#version_5_8)
- [LaraMag 5.7](#version_5_7)
- [LaraMag 5.6](#version_5_6)
- [LaraMag 5.5](#version_5_5)
- [LaraMag 5.4](#version_5_4)
- [LaraMag 5.3](#version_5_3)
- [LaraMag 5.2](#version_5_2)
- [LaraMag 5.1](#version_5_1)
- [LaraMag 5.0](#version_5_0)
- [LaraMag 4.2](#version_4_2)
- [LaraMag 4.1](#version_4_1)
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

## LaraMag 5.20
### Aug 23, 2021
- Fix Contact plugin with the new editor.
- Improve shortcode. Make it easier to modify added shortcodes.
- Improve editor & clean XSS.
- Update to the latest Laravel version 8.55.0
- Improve core.
- Optimize queries performance.

## LaraMag 5.19
### Jul 27, 2021
- Update CKEditor and TinyMCE to the latest version (version 5).
- Update media: Add a button to download media files from URL.
- Able to add multiple admin emails in Admin -> Settings -> General.
- Big change on blog categories. Hierarchical tree structured category https://prnt.sc/1g4dr0n.

## LaraMag 5.18
### Jul 12, 2021
- Add Wasabi cloud storage support.
- Allow to config the default placeholder image.
- Improve media, translations & backup.
- Improve UI.
- Optimize queries.
- Refactor code & improve performance.
- Fix some bugs on PHP 8.

## LaraMag 5.17
### Jun 13, 2021
- Added RTL support for the admin panel.
- Fix some errors on PHP 8.
- Fix blog API.
- Improve media, fix some errors with SVG.
- Improve UI.
- Optimize queries.
- Refactor code & improve performance.

## LaraMag 5.16
### May 10, 2021
- Fix error on table Posts when plugin Author activated.
- Fix change user's password.
- Remove unused services in Google Client API services to reduce app size.
- Fix color field.
- Update theme options & handle errors when saving custom CSS.
- Optimize queries.
- Refactor code & improve performance.

## LaraMag 5.15
### Apr 07, 2021
- Add plugin Author & Ads manager.
- Add option to turn off automatic URL translation into Latin.
- Add option to force URL & schema.
- Improve email templates.
- Fix bug Serialization of 'GdImage' is not allowed.
- Refactor code & optimize performance.

## LaraMag 5.14
### Mar 02, 2021
- New option to add custom JS in Admin -> Appearance -> Custom JS.
- Added setting in Admin -> Settings -> General to change login screen backgrounds.
- Improve dashboard widgets.
- Improve page SEO meta.
- Improve Blog API (prevent error when sending wrong params).
- Improve breadcrumbs.
- Fix permission issue on Contact plugin.
- Fix some bugs on PHP 8.

## LaraMag 5.13
### Feb 04, 2021
- Upgraded to Laravel 8.
- Update JS/CSS assets.
- Improve admin language settings.
- Improve permalinks.
- Fix language plugin.
- Fix bugs on PHP 8.
- Refactor code & optimize UI.

## LaraMag 5.12
### Jan 19, 2021
- Add RSS feed plugin. Demo: https://lara-mag.botble.com/feed/posts
- Update seeders.
- Update error pages, make it more simple.
- Improve UI gallery images, update Google fonts & fix cookie consent.
- Improve media URL.
- Improve core & optimize queries.
- Remove unused CSS/JS libraries.
- Fix postCSS, upgrade to Laravel Mix 6.0

## LaraMag 5.11
### Dec 10, 2020
- Add search box.
- Improve responsive.
- Update translations, added missing keys.
- Update cookie consent.
- Improve DO Spaces integration.
- Improve error pages.
- Fix roles & permissions.
- Optimize page speed and performance.

## LaraMag 5.10
### Nov 14, 2020
- Update menu: optimize queries, cache menu URL for better performance.
- Optimize queries on menu & widgets.
- Update Cookie consent: Add option to change background color, text color.
- Update error pages, make it more beautiful.
- Update UI contact form, galleries.
- Improve permalink & custom CSS page.
- Improve Analytics plugin, make it compatible with PHP 7.4.
- Fix theme translations: new keys in English doesn't show in other languages.
- Fix IP in activity logs, allow IP v6.
- Refactor code.

## LaraMag 5.9
### Oct 14, 2020
- Fix multi-language with Ajax.
- Fix views count.
- Update contact form with Ajax.
- Update email encryption settings.
- Improve Recaptcha: add an option to hide v3 badge.
- Improve export posts to csv, excel.
- Apply PurgeCSS to remove unused css, make it loads faster.
- Improve theme UI.
- Refactor code.

## LaraMag 5.8
### 15-09-2020

- Update to Laravel version 7.28
- Update homepage & blog page settings. Now, it's moved into Appearance -> Theme options.
- Move settings for Cookie Consent into Appearance -> Theme options.
- Add theme options to enable/disable Facebook chat, Facebook comment.
- Add settings for watermark. Now, you can add watermark by changing setting in Admin -> Settings -> Media.
- Allow to change permalink in Admin -> Settings -> Permalinks.
- Add language settings. Allow to set default language in Admin -> Settings -> General.
- Allow admin to login using email or username.
- Optimize queries to make site loads faster.
- Update UI.
- Refactor code.
- Fix webpack.mix.js config, issue with path on Windows.
- Fix assets path.
- Fix copy folder in Admin -> Media.

## LaraMag 5.7
### 05-08-2020
- Upgrade to the latest Laravel framework version 7.22.
- Deprecated some media functions: `is_image`, `get_image_url`, `get_object_image`, `rv_media_handle_upload`. 
  Replacements: `RvMedia::isImage()`, `RvMedia::getImageUrl()`, `RvMedia::handleUpload()`.
- Add support **Digital Ocean Spaces**.
- Fix timezone, it doesn't work before.
- Fix filter posts.
- Update email settings. Add support **SES**, **Postmark**, **Array**, **Log**.
- Improve performance & refactor source code.
- Improve license system, make it works better.


<a name="version_5_6"></a>
## LaraMag 5.6
### 03-07-2020

- Update to the latest Laravel version 7.18.
- Optimize database queries.
- Add support Recaptcha v3.
- Improve cookie consent.
- Fix bugs plugin Language.
- Add default open graph image.
- Improve admin UI.
- Refactor code.

<a name="version_5_5"></a>
## LaraMag 5.5
### 29-05-2020

- Update to the latest Laravel version 7.13.
- Improve media module: support upload chunk size.
- Improve email system.
- Move `js-validation` package to `core`.
- Upgrade jQuery to v3.5.1 and Bootstrap 4.5.0.
- Improve admin UI.
- Refactor code.

<a name="version_5_4"></a>
## LaraMag 5.4
### 01-05-2020

- Update to the latest Laravel version 7.8.
- Refactor code & optimize performance.
- Add backup commands:
    - php artisan cms:backup:create
    - php artisan cms:backup:restore
    - php artisan cms:backup:remove
    - php artisan cms:backup:list
- Fix image's watermark.
- Change default avatar, remove Gravatar as default avatar.
- Fix widget & plugin language.
- Remove package `davejamesmiller/laravel-breadcrumbs`, build own breadcrumbs.
- Fix theme options when using `editor` field.

<a name="version_5_3"></a>
## LaraMag 5.3
### 29-03-2020
- Update to the latest Laravel version 7.3
- Improve source code.
- Add plugin Translation.
- Improve plugin language. When add/remove a language, it also adds/removes language files in /resources/lang.
- Update UI.
- Refactor code.

<a name="version_5_2"></a>
## LaraMag 5.2
### 12-03-2020
- Upgrade to Laravel 7.x
- Improve source code.
- Add package `js-validation` & `sitemap`
- Fix context menu in media.
- Fix bug when changing admin's password.
- Update translations.
- Update UI.
- Refactor code.

<a name="version_5_1"></a>
## LaraMag 5.1
### 08-02-2020
- Update admin theme.
- Improve source code.
- Fix media upload.

<a name="version_5_0"></a>
## LaraMag 5.0
### 20-01-2020
- Change admin theme to make it more awesome.
- Add license.
- Update Ckeditor to allow to add image's caption.
- Fix ACL module.

<a name="version_4_2"></a>
## LaraMag 4.2
### 06-01-2020

- Fix bug upload avatar in plugin member.
- Fix permission issue when changing language.
- Fix dev commands.
- Fix error when creating new role.
- Fix page title.
- Fix logo in email.
- Fix menu & audit log.
- Fix sort order in dashboard widgets.
- Update UI in login/register form for member.
- Update plugin `social login` to support plugin member.
- Update country flags.
- Update latest code from Laravel framework.
- Deprecated function `setModuleName()` in forms.
- Using package `mews/purifier` to prevent XSS attack.
- Add plugin `cookie consent`.
- Refactor code.

<a name="version_4_1"></a>
## LaraMag 4.1
### 01-12-2019

- Fix bug in plugin member.
- Improve media.
- Change to use `laravel/tinker` 2.0
- Change to use `mpociot/laravel-apidoc-generator` 4.0
- Add command `php artisan cms:plugin:make:crud` (Video tutorial: https://www.youtube.com/watch?v=GAnoZbGHE28)
- Fix UI
- Add config for Travis CI
- Fix mail variables
- Fix SEO helper, cache issue in media.
- Add option to disable preview feature (Ex: `\SlugHelper::disablePreview(Post::class)`)
- Refactor code.

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
