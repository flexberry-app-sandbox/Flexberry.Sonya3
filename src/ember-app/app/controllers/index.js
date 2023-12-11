import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.sonya3.caption'),
          title: i18n.t('forms.application.sitemap.sonya3.title'),
          children: [{
            link: 'i-i-s-sonya3-расход-денег-l',
            caption: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-расход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-расход-денег-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-sonya3-состав-товара-l',
            caption: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-состав-товара-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-состав-товара-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-sonya3-регистр-l',
            caption: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-регистр-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-регистр-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-sonya3-услуги-l',
            caption: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-услуги-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-sonya3-товары-l',
            caption: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-товары-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-sonya3-клиенты-l',
            caption: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-клиенты-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-sonya3-приход-денег-l',
            caption: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-приход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-приход-денег-l.title'),
            children: null
          }, {
            link: 'i-i-s-sonya3-поставщики-l',
            caption: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-поставщики-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-поставщики-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-sonya3-материалы-l',
            caption: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.sonya3.i-i-s-sonya3-материалы-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})