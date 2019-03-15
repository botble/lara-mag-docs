# Release Notes

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
