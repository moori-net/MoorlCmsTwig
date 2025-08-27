import template from './index.html.twig';
import './index.scss';

Shopware.Component.register('sw-cms-el-config-moorl-twig', {
    template,

    mixins: [
        Shopware.Mixin.getByName('cms-element')
    ],

    computed: {
        moorlFoundation() {
            return MoorlFoundation;
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('moorl-twig');
        },

        onBlur(content) {
            this.emitChanges(content);
        },

        onInput(content) {
            this.emitChanges(content);
        },
    }
});
