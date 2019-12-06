# FAQ

## How to add new admin menu for new plugin?

- Open `/plugins/<your-plugin>/src/Providers/<YourPlugin>ServiceProvider.php`. Add below code to function `boot`

```php
\Event::listen(\Illuminate\Routing\Events\RouteMatched::class, function () {
    dashboard_menu()->registerItem([
        'id' => 'cms-plugins-<your-plugin>', // key of menu, it should unique
        'priority' => 5,
        'parent_id' => null,
        'name' => 'Your plugin name', // It should be a translation key. Ex: plugins/test::test.name
        'icon' => 'fa fa-camera',
        'url' => route('<plugins>.list'), // route to your plugin list.
        'permissions' => ['<plugins>.list'], // permission should same with route name, you can see that flag in Plugin.php
    ]);
});
```

## How to add new language to admin panel?

- Add your language in /resources/lang directory, copy all files /resources/lang/en and paste to your language folder and translate it to your language.

- You can use Laravel language https://github.com/caouecs/Laravel-lang/tree/master/src to quick translate.

## How to add new post format

- Add below code to your themes /functions/functions.php

```php
register_post_format([
    'post-format-key' => [
        'key' => 'post-format-key',
        'name' => 'Post Format Name',
    ],
]);
```

## How to share data between theme's views?

You can use `Theme::set()` and `Theme::get()` for partials views (using `Theme::partial('...')`).

Example:
In `public/themes/ripple/views/post.blade.php` you can add bellow code to share $post data.

```php
@php
    Theme::set('current_post', $post);
@endphp
```

And if you want to use it in `public/themes/ripple/partials/header.blade.php`.

```php
@php
    $current_post = Theme::get('current_post');
@endphp
```

You can pass data like normal if you're using @include.

Example:

```php
@include('theme.ripple::partials.header', ['current_post' => $post])
```

## How to custom breadcrumbs for post?

There're 2 ways to do that.

### Using action

Add to `/platform/themes/your-theme/functions/functions.php`

```php
add_action(BASE_ACTION_PUBLIC_RENDER_SINGLE, 'custom_breadcrumbs', 10, 2);

function custom_breadcrumbs(string $screen, $post) {
    if ($screen == POST_MODULE_SCREEN_NAME) {
        Theme::breadcrumb()->crumbs = [];
        $breadcrumb = Theme::breadcrumb()->add(__('Home'), url('/'));

        $category = $post->categories()->first();

        $breadcrumb->add($category->name, $category->url);

        Theme::breadcrumb()->add($post->name, $post->url);
    }
}
```

### Using event

Add to `/platform/themes/your-theme/functions/functions.php`

```php

\Event::listen(\Botble\Theme\Events\RenderingSingleEvent::class, function (\Botble\Theme\Events\RenderingSingleEvent $event) {
    if ($event->slug->reference_type == \Botble\Blog\Models\Post::class) {
        $post = $event->slug->reference()->with('categories')->first();

        \Theme::breadcrumb()->crumbs = [];

        $breadcrumb = \Theme::breadcrumb()->add(__('Home'), url('/'));

        $category = $post->categories->first();

        $breadcrumb->add($category->name, $category->url);

        \Theme::breadcrumb()->add($post->name, $post->url);
    }
});
```

## How to use simple sliders.

### Using shortcode

With this way, it will use Owl Carousel slider.

```
{!! do_shortcode('[simple-slider key="slide-key"]') !!}
```

You also need to make sure the setting for slider is correct. The option "Use default assets" should be "Yes".

![Simple Slider](./images/simple-slider.png)

## Using custom slider

This is our default source code for simple slider. If you don't want to use Owl slider, you can modify it.

View: `platform/plugins/simple-slider/resources/views/sliders.blade.php`

```php
@php $sliders = get_all_simple_sliders(); @endphp
@if (count($sliders) > 0)
    <div class="slider-wrap">
        <span class="slider-control prev"><i class="fa fa-angle-left"></i></span>
        <span class="slider-control next"><i class="fa fa-angle-right"></i></span>
        <div class="slider home-slider" data-single="true" data-auto-play="true" data-navigation="false"
             data-dot="false">
            @foreach($sliders as $slider)
                <article class="post post-home-slider">
                    <div class="post-thumbnail">
                        <a href="{{ $slider->link }}" class="overlay"></a>
                        <img src="{{ get_object_image($slider->image) }}" alt="{{ $slider->title }}">
                    </div>
                    <header class="entry-header">
                        <h2 class="entry-title">{{ $slider->title }}</h2>
                        <span class="apart-address">{{ $slider->description }}</span>
                    </header>
                </article>
            @endforeach
        </div>
    </div>
@endif
```

JS: `platform/plugins/simple-slider/resources/assets/js/simple-slider.js`

```js
class SimpleSliderManagement {
    init() {
        let slider = $('.slider');
        slider.each((index, el) => {
            let single = $(el).data('single');
            $(el).find('.post').hover(() => {
                let parent = $(el).parent().find('.slider-control');
                if (!parent.hasClass('active')) {
                    parent.addClass('active');
                }

            }, () => {
                let parent = $(el).parent().find('.slider-control');
                if (parent.hasClass('active')) {
                    parent.removeClass('active');
                }
            });
            $(el).owlCarousel({
                autoPlay: $(el).data('autoplay'),
                slideSpeed: 3000,
                paginationSpeed: 400,
                singleItem: single
            });

            $(el).siblings('.next').click(() => {
                $(el).trigger('owl.next');
            });
            $(el).siblings('.prev').click(() => {
                $(el).trigger('owl.prev');
            });
        });

        $('.slider-wrap').fadeIn();
    }
}

$(document).ready(() => {
    new SimpleSliderManagement().init();
});
```

