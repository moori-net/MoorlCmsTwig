import './component';
import './config';

Shopware.Application.getContainer('service').cmsService.registerCmsElement({
    plugin: 'MoorlCmsTwig',
    icon: 'regular-code',
    name: 'moorl-twig',
    label: 'HTML/Twig',
    component: 'sw-cms-el-moorl-twig',
    configComponent: 'sw-cms-el-config-moorl-twig',
    previewComponent: 'sw-cms-el-preview-moorl-twig',
    defaultConfig: {
        contentHTML: {
            source: 'static',
            value: `<p class="moorl-cms-twig-title">
    {{ config('MoorlCmsTwig.config.string') }}
</p>
<p class="moorl-cms-twig-logo">
    <img src="{{ theme_config('sw-logo-desktop') }}" alt="Logo">    
</p>
<p>
    {{ activeRoute }}
</p>`.trim()
        },
        contentCSS: {
            source: 'static',
            value: null,
        },
        contentJS: {
            source: 'static',
            value: null,
        },
        useTwig: {
            source: 'static',
            value: true,
        }
    }
});
