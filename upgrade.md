# Upgrade Guide

- [Upgrade To 2.0.1](#upgrade-2.0.1)
- [Upgrade To 2.0](#upgrade-2.0)
- [Upgrading To 1.1](#upgrade-1.1)

<a name="upgrade-2.0.1"></a>
## Upgrade from 2.0 to 2.0.1

- Override folder /core and /plugins
- Run "php artisan vendor:publish --tag=public --force" to update assets.
- Run "composer install" to update database.

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
