## Dashboard

### Register new dashboard widget

- Open your plugin service provider then add to the `boot` function.

```php
add_filter(DASHBOARD_FILTER_ADMIN_LIST, [$this, 'registerDashboardWidgets'], 1221, 1);
```

`1221` is the priority, it can be any number but must unique.

- Add function callback to your plugin service provider.

```php
public function registerDashboardWidgets($widgets)
{
    $widget = app(\Botble\Dashboard\Repositories\Interfaces\DashboardWidgetInterface::class)->firstOrCreate(['name' => 'your_widget_key_name']);
    $widget_setting = app(\Botble\Dashboard\Repositories\Interfaces\DashboardWidgetSettingInterfac::class)->getFirstBy([
        'widget_id' => $widget->id,
        'user_id' => \Auth::user()->getKey(),
    ], ['status', 'order']);

    if (empty($widget_setting) || array_key_exists($widget_setting->order, $widgets)) {
        $widgets[] = view('plugins.your-plugin::widgets.base', compact('widget', 'widget_setting'))->render();
    } else {
        $widgets[$widget_setting->order] = view('plugins.your-plugin::widgets.base', compact('widget', 'widget_setting'))->render();
    }
    return $widgets;
}
```

- Create your view to show dashboard widget content in `plugins/your-plugin/resources/views/widgets.base.blade.php`

```php
@if (empty($widget_setting) || $widget_setting->status == 1)
    <div class="col-md-6 col-sm-6 col-xs-12 widget_item" id="{{ $widget->name }}" data-url="{{ route('the-route-to-get-data') }}">
        <div class="portlet light bordered portlet-no-padding">
            <div class="portlet-title">
                <div class="caption">
                    <i class="icon-settings font-dark"></i>
                    <span class="caption-subject font-dark">{{ trans('Your widget name') }}</span>
                </div>
                @include('core.dashboard::partials.tools', ['settings' => !empty($widget_setting) ? $widget_setting->settings : []])
            </div>
            <div class="portlet-body equal-height scroll-table widget-content {{ array_get(!empty($widget_setting) ? $widget_setting->settings : [], 'state') }}"></div>
        </div>
    </div>
    <script>
        $(document).ready(function () {
            BDashboard.loadWidget($('#{{ $widget->name }}').find('.widget-content'), '{{ route('the-route-to-get-data') }}');
        });
    </script>
@endif
```

- Create a controller to return main content for your widget, the route name is added in above code (Ex: `the-route-to-get-data`).

```php
public function getDataForWidget(Request $request, BaseHttpResponse $response)
{
    $content = 'The content can be a string or rendered from a blade view';
    
    // $content = view('plugins.your-plugin::widgets.sample', compact('data'))->render()
    return $response
        ->setError(false)
        ->setData($content);
}
```