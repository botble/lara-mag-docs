## How to apply multi language for new plugin?

- Open `/plugins/<your-plugin>/src/Providers/<YourPlugin>ServiceProvider.php`. Add below code to function `boot`

```php
$this->app->booted(function () {
    if (defined('LANGUAGE_FILTER_MODEL_USING_MULTI_LANGUAGE')) {
        config(['language.supported' => array_merge(config('language.supported'), [<YOUR_PLUGIN>_MODULE_SCREEN_NAME])]);
    }
});
```

## How to add new admin menu for new plugin?

- Open `/plugins/<your-plugin>/src/Providers/<YourPlugin>ServiceProvider.php`. Add below code to function `boot`

```php
Event::listen(SessionStarted::class, function () {
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