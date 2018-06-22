# Theme

## Adding menu to theme

```php
    {!!
        Menu::generateMenu([
            'slug' => 'menu-slug-key',
            'options' => [],
            'theme' => true,
        ])
    !!}
```

`menu-slug-key` is slug of the menu which you want to show.

'options' is attributes of `ul` tag. Ex: `'options' => ['id' => 'menu-header-main-menu', 'class' => 'menu']`

## Customize menu views

To customize view to display menu. You can create a file in /public/themes/your-theme/partials.

Ex: `/public/themes/your-theme/partials/custom-menu.blade.php`
```php
<ul {!! $options !!}>
    @foreach ($menu_nodes as $key => $row)
        <li class="{{ $row->css_class }} @if ($row->getRelated(true)->url == Request::url()) current @endif">
            <a href="{{ $row->getRelated(true)->url }}" target="{{ $row->target }}">
                <i class='{{ trim($row->icon_font) }}'></i> <span>{{ $row->getRelated(true)->name }}</span>
            </a>
            @if ($row->hasChild())
                {!! Menu::generateMenu([
                    'slug' => $menu->slug,
                    'parent_id' => $row->id
                ]) !!}
            @endif
        </li>
    @endforeach
</ul>
```

Default code to display menu is located in `core/menu/resources/views/partials/default.blade.php`

And to show menu with custom view, using below code:

```php
{!!
    Menu::generateMenu([
        'slug' => 'menu-slug-key',
        'options' => [],
        'theme' => true,
        'view' => 'custom-menu',
    ])
!!}
```

Menu with slug is 'menu-slug-key' will be generated using custom view in `/public/themes/your-theme/partials/custom-menu.blade.php`