# Simple sliders

## Usage

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
