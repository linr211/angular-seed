
(function(window) {
    'use strict';

    var dt = window.dt || (window.dt = {});
    
    dt.const = {
            selectedLanguage: 'ngStorage-selectedLanguage'
    }

    if (typeof dt.l10n === 'undefined') {
        dt.l10n = {
            locales: {},
            hasKey: function(key) {
                return this.locales.hasOwnProperty(key);
            },
            setValue: function(key, value) {
                this.locales[key] = value;
            },
            getValue: function(key) {
                return this.hasKey(key) ? this.locales[key] : undefined;
            },
            setBundle: function(bundle) {
                this.locales = bundle;
            },
            setLanguageCode: function (languageStr) {
                var languageId = languageStr && languageStr.split('-').length > 0 ?
                    languageStr.split('-')[0] : dt.localeSupport.en;
                var browserLanguageCode = null;
                if (languageId.includes(dt.localeSupport.zh_cn)) {
                    browserLanguageCode = dt.localeSupport.zh_cn;
                } else {
                    browserLanguageCode = languageId.replace('_', '-');
                }
                this.languageCode = JSON.parse(localStorage.getItem(dt.const.selectedLanguage)) || browserLanguageCode;
            },
            getBundle: function() {
                return this.locales;
            },
            clear: function() {
                this.locales = {};
            }
        };
    }

    dt.getLocaleBundle = function(locale) {
        var deferred  = $.Deferred();
        var preventCachingHeaders = {
            'Cache-Control': 'no-cache',
            'If-Modified-Since': 0
        };
        $.ajax({
            url: 'core/i18n/resources/translation_'+locale+'.json',
            contentType: 'application/json',
            headers: preventCachingHeaders
        }).then(function(resp) {
            deferred.resolve(resp);
        }, function(err) {
            deferred.reject(err);
        });
        return deferred.promise();
    };

    // Cache for locale bundles.
    dt.localeBundleCache = {};

    /**
     * @description Fetches locale bundle from the server and caches it.
     *  Any subsequent requests for the same locale will be returned from the cache.
     */
    dt.fetchLocaleBundle = function (locale) {
        var cachedLocaleBundle = dt.localeBundleCache[locale];
        if (!cachedLocaleBundle) {
            // If bundle is NOT present in cache, fetch it from server and cache it.
            return dt.getLocaleBundle(locale).then(function(bundle) {
                dt.localeBundleCache[locale] = bundle;
                return bundle;
            });
        } else {
            var deferred  = $.Deferred();
            // If already present in cache, then return it from cache.
            return deferred.resolve(cachedLocaleBundle);
        }
    };

    dt.setLocaleBundle = function (locale) {
        var deferred  = $.Deferred();
        var getEnBundle$ = dt.fetchLocaleBundle(dt.localeSupport.en);
        var getUserSetLocale$;

        if (locale === dt.localeSupport.en) {
            // If the selected locale is English, then we need not fetch from server again.
            // Just returning the same promise again.
            getUserSetLocale$ = getEnBundle$;
        } else {
            // Only if locale is different from English, then fetch it.
            getUserSetLocale$ = dt.fetchLocaleBundle(locale);
        }
        $.when(getEnBundle$, getUserSetLocale$).then(function (enData, selData) {
            var enBundle = enData.data.messages;
            var selLangBundle = selData.data.messages;
            _.mapObject(enBundle, function (val, key) {
                if (!selLangBundle[key]) {
                    selLangBundle[key] = val;
                }
            });
            dt.l10n.setBundle(selLangBundle);
            dt.l10n.setLanguageCode(selData.data.locale);
            deferred.resolve();
        }, function() {
            deferred.reject();
        });
        return deferred.promise();
    };


    dt.localeSupport = {
        'en': 'en',
        'en-GB': 'en-GB',
        'en-US': 'en',
        'fr': 'fr',
        'fr-FR': 'fr',
        'de': 'de',
        'de-DE': 'de',
        'es': 'es',
        'es-ES': 'es',
        'ja': 'ja',
        'ja-JP': 'ja',
        'ko': 'ko',
        'ko-KR': 'ko',
        'pt-BR': 'pt-BR',
        'zh-Hans': 'zh-CN',
        'zh-Hant': 'zh-TW',
        'zh': 'zh-CN',
        'zh-CN': 'zh-CN',
        'zh-HK': 'zh-TW',
        'zh-TW': 'zh-TW'
    };

})(window);