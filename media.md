# Add custom image size

## Option 1: Override media config
Copy `platform/core/media/config/media.php` to `config/media.php` and change the media sizes.

```php
<?php

return [
    ...
    'sizes'                   => [
        'thumb'    => '150x150',
        'featured' => '560x380',
        'medium'   => '540x360',
    ],
    ...
];

```

## Option 2: Modify it from your theme, media sizes will depends on your theme.
Add to `platform/themes/your-theme/functions/functions.php` or in your plugin service providers.

```php
if (!function_exists('register_custom_image_size')) {
    function register_custom_image_size()
    {
        config([
            'media.sizes.post-small'   => '200x150',
            'media.sizes.post-featured' => '360x217', // You can add more sizes if you want
        ]);
    }
}
add_action('init', 'register_custom_image_size', 1234);
```

How to use:

```php
    {{ get_image_url($post->image, 'post-small') }}
    {{ get_object_image($post->image, 'post-small') }}
```
