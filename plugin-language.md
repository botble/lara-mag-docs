# Language

## Apply multi language for your new plugin

- Open `/plugins/<your-plugin>/src/Providers/<YourPlugin>ServiceProvider.php`. Add below code to function `boot`

```php
$this->app->booted(function () {
    if (defined('LANGUAGE_FILTER_MODEL_USING_MULTI_LANGUAGE')) {
        config(['language.supported' => array_merge(config('language.supported'), [<YOUR_PLUGIN>_MODULE_SCREEN_NAME])]);
    }
});
```
