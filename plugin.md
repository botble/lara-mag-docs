# Plugin

::: info
From version 3.2, command name is changed from `plugin:create` to `cms:plugin:create`. Please run `php artisan --help`
to see all commands
:::

## Create a plugin

**- Open CMD or Terminal then run:**

```bash
php artisan cms:plugin:create <plugin name>
```

## Activate a plugin

**- Open CMD or Terminal then run:**

```bash
php artisan cms:plugin:activate <plugin name>
```

## Deactivate a plugin

**- Open CMD or Terminal then run:**

```bash
php artisan cms:plugin:deactivate <plugin name>
```

## Remove a plugin

**- Command:**

```bash
php artisan cms:plugin:remove demo
```

::: info
`demo` is a plugin.
:::

When you run this command. It will do:

+ Deactivate `demo` plugin.

+ It will be remove `demo` table and its permissions

+ Delete folder demo in `/plugins` and delete `/plugins` directory if it's empty
