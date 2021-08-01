if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}

(function($, window, document, undefined) {

    "use strict";

    var Toast = {

        _posisiClasses: [
            'bottom-left',
            'bottom-right',
            'top-right',
            'top-left',
            'bottom-center',
            'top-center',
            'mid-center'
        ],
        _defaultikons: [
            'sukses', 'eror', 'peringatan', 'kustom'
        ],

        init: function(options, elem) {
            this.prepareOptions(options, $.notifikasi.options);
            this.process();
        },

        prepareOptions: function(options, options_to_extend) {
            var _options = {};
            if ((typeof options === 'string') || (options instanceof Array)) {
                _options.text = options;
            } else {
                _options = options;
            }
            this.options = $.extend({}, options_to_extend, _options);
        },

        process: function() {
            this.setup();
            this.addToDom();
            this.posisi();
            this.bindToast();
            this.animate();
        },

        setup: function() {

            var _toastContent = '';

            this._toastEl = this._toastEl || $(
                '<div></div>', { class: 'jq-notifikasi-single' }
            );

            // For the loader on top
            _toastContent += '<span class="jq-notifikasi-loader"></span>';

            if (this.options.AutoTutup) {
                _toastContent += '<span class="close-jq-notifikasi-single">&times;</span>';
            };

            if (this.options.text instanceof Array) {

                if (this.options.judulnotifikasi) {
                    _toastContent += '<h2 class="jq-notifikasi-judulnotifikasi">' + this.options.judulnotifikasi + '</h2>';
                };

                _toastContent += '<ul class="jq-notifikasi-ul">';
                for (var i = 0; i < this.options.text.length; i++) {
                    _toastContent += '<li class="jq-notifikasi-li" id="jq-notifikasi-item-' + i + '">' + this
                        .options
                        .text[i] + '</li>';
                }
                _toastContent += '</ul>';

            } else {
                if (this.options.judulnotifikasi) {
                    _toastContent += '<h2 class="jq-notifikasi-judulnotifikasi">' + this.options.judulnotifikasi + '</h2>';
                };
                _toastContent += this.options.text;
            }

            this
                ._toastEl
                .html(_toastContent);

            if (this.options.bgColor !== false) {
                this
                    ._toastEl
                    .css("background-color", this.options.bgColor);
            };

            if (this.options.textColor !== false) {
                this
                    ._toastEl
                    .css("color", this.options.textColor);
            };

            if (this.options.textAlign) {
                this
                    ._toastEl
                    .css('text-align', this.options.textAlign);
            }

            if (this.options.ikon !== false) {
                this
                    ._toastEl
                    .addClass('jq-has-ikon');

                if ($.inArray(this.options.ikon, this._defaultikons) !== -1) {
                    this
                        ._toastEl
                        .addClass('jq-ikon-' + this.options.ikon);
                };
            };

            if (this.options.class !== false) {
                this
                    ._toastEl
                    .addClass(this.options.class)
            }
        },

        posisi: function() {
            if ((typeof this.options.posisi === 'string') && ($.inArray(this.options.posisi, this._posisiClasses) !== -1)) {

                if (this.options.posisi === 'bottom-center') {
                    this
                        ._container
                        .css({
                            left: ($(window).outerWidth() / 2) - this
                                ._container
                                .outerWidth() / 2,
                            bottom: 20
                        });
                } else if (this.options.posisi === 'top-center') {
                    this
                        ._container
                        .css({
                            left: ($(window).outerWidth() / 2) - this
                                ._container
                                .outerWidth() / 2,
                            top: 20
                        });
                } else if (this.options.posisi === 'mid-center') {
                    this
                        ._container
                        .css({
                            left: ($(window).outerWidth() / 2) - this
                                ._container
                                .outerWidth() / 2,
                            top: ($(window).outerHeight() / 2) - this
                                ._container
                                .outerHeight() / 2
                        });
                } else {
                    this
                        ._container
                        .addClass(this.options.posisi);
                }

            } else if (typeof this.options.posisi === 'object') {
                this
                    ._container
                    .css({
                        top: this.options.posisi.top ?
                            this.options.posisi.top : 'auto',
                        bottom: this.options.posisi.bottom ?
                            this.options.posisi.bottom : 'auto',
                        left: this.options.posisi.left ?
                            this.options.posisi.left : 'auto',
                        right: this.options.posisi.right ?
                            this.options.posisi.right : 'auto'
                    });
            } else {
                this
                    ._container
                    .addClass('bottom-left');
            }
        },

        bindToast: function() {

            var that = this;

            this
                ._toastEl
                .on('afterShown', function() {
                    that.processLoader();
                });

            this
                ._toastEl
                .find('.close-jq-notifikasi-single')
                .on('click', function(e) {

                    e.preventDefault();

                    if (that.options.transisi === 'fade') {
                        that
                            ._toastEl
                            .trigger('beforeHide');
                        that
                            ._toastEl
                            .fadeOut(function() {
                                that
                                    ._toastEl
                                    .trigger('afterHidden');
                            });
                    } else if (that.options.transisi === 'slide') {
                        that
                            ._toastEl
                            .trigger('beforeHide');
                        that
                            ._toastEl
                            .slideUp(function() {
                                that
                                    ._toastEl
                                    .trigger('afterHidden');
                            });
                    } else {
                        that
                            ._toastEl
                            .trigger('beforeHide');
                        that
                            ._toastEl
                            .hide(function() {
                                that
                                    ._toastEl
                                    .trigger('afterHidden');
                            });
                    }
                });

            if (typeof this.options.beforeShow == 'function') {
                this
                    ._toastEl
                    .on('beforeShow', function() {
                        that
                            .options
                            .beforeShow();
                    });
            };

            if (typeof this.options.afterShown == 'function') {
                this
                    ._toastEl
                    .on('afterShown', function() {
                        that
                            .options
                            .afterShown();
                    });
            };

            if (typeof this.options.beforeHide == 'function') {
                this
                    ._toastEl
                    .on('beforeHide', function() {
                        that
                            .options
                            .beforeHide();
                    });
            };

            if (typeof this.options.afterHidden == 'function') {
                this
                    ._toastEl
                    .on('afterHidden', function() {
                        that
                            .options
                            .afterHidden();
                    });
            };
        },

        addToDom: function() {

            var _container = $('.jq-notifikasi-wrap');

            if (_container.length === 0) {

                _container = $('<div></div>', {
                    class: "jq-notifikasi-wrap",
                    role: "alert",
                    "aria-live": "polite"
                });

                $('body').append(_container);

            } else if (!this.options.stack || isNaN(parseInt(this.options.stack, 10))) {
                _container.empty();
            }

            _container
                .find('.jq-notifikasi-single:hidden')
                .remove();

            _container.append(this._toastEl);

            if (this.options.stack && !isNaN(parseInt(this.options.stack), 10)) {

                var _prevToastCount = _container
                    .find('.jq-notifikasi-single')
                    .length,
                    _extToastCount = _prevToastCount - this.options.stack;

                if (_extToastCount > 0) {
                    $('.jq-notifikasi-wrap')
                        .find('.jq-notifikasi-single')
                        .slice(0, _extToastCount)
                        .remove();
                };

            }

            this._container = _container;
        },

        canAutoHide: function() {
            return (this.options.hideAfter !== false) && !isNaN(
                parseInt(this.options.hideAfter, 10)
            );
        },

        processLoader: function() {
            // Show the loader only, if auto-hide is on and loader is demanded
            if (!this.canAutoHide() || this.options.loader === false) {
                return false;
            }

            var loader = this
                ._toastEl
                .find('.jq-notifikasi-loader');

            // 400 is the default time that jquery uses for fade/slide Divide by 1000 for
            // milliseconds to seconds conversion
            var transitionTime = (this.options.hideAfter - 400) / 1000 + 's';
            var loaderBg = this.options.loaderBg;

            var style = loader.attr('style') || '';
            style = style.substring(0, style.indexOf('-webkit-transition')); // Remove the last transition definition

            style += '-webkit-transition: width ' + transitionTime + ' ease-in; \
                  ' +
                '    -o-transition: width ' + transitionTime + ' ease-in; \
                   ' +
                '   transition: width ' + transitionTime + ' ease-in; \
                      b' +
                'ackground-color: ' + loaderBg + ';';

            loader
                .attr('style', style)
                .addClass('jq-notifikasi-loaded');
        },

        animate: function() {

            var that = this;

            this
                ._toastEl
                .hide();

            this
                ._toastEl
                .trigger('beforeShow');

            if (this.options.transisi.toLowerCase() === 'fade') {
                this
                    ._toastEl
                    .fadeIn(function() {
                        that
                            ._toastEl
                            .trigger('afterShown');
                    });
            } else if (this.options.transisi.toLowerCase() === 'slide') {
                this
                    ._toastEl
                    .slideDown(function() {
                        that
                            ._toastEl
                            .trigger('afterShown');
                    });
            } else {
                this
                    ._toastEl
                    .show(function() {
                        that
                            ._toastEl
                            .trigger('afterShown');
                    });
            }

            if (this.canAutoHide()) {

                var that = this;

                window.setTimeout(function() {

                    if (that.options.transisi.toLowerCase() === 'fade') {
                        that
                            ._toastEl
                            .trigger('beforeHide');
                        that
                            ._toastEl
                            .fadeOut(function() {
                                that
                                    ._toastEl
                                    .trigger('afterHidden');
                            });
                    } else if (that.options.transisi.toLowerCase() === 'slide') {
                        that
                            ._toastEl
                            .trigger('beforeHide');
                        that
                            ._toastEl
                            .slideUp(function() {
                                that
                                    ._toastEl
                                    .trigger('afterHidden');
                            });
                    } else {
                        that
                            ._toastEl
                            .trigger('beforeHide');
                        that
                            ._toastEl
                            .hide(function() {
                                that
                                    ._toastEl
                                    .trigger('afterHidden');
                            });
                    }

                }, this.options.hideAfter);
            };
        },

        reset: function(resetWhat) {

            if (resetWhat === 'all') {
                $('.jq-notifikasi-wrap').remove();
            } else {
                this
                    ._toastEl
                    .remove();
            }

        },

        update: function(options) {
            this.prepareOptions(options, this.options);
            this.setup();
            this.bindToast();
        }
    };

    $.notifikasi = function(options) {
        var toast = Object.create(Toast);
        toast.init(options, this);

        return {

            reset: function(what) {
                toast.reset(what);
            },

            update: function(options) {
                toast.update(options);
            }
        }
    };

    $.notifikasi.options = {
        text: '',
        judulnotifikasi: '',
        transisi: 'fade',
        AutoTutup: true,
        hideAfter: 3000,
        loader: true,
        loaderBg: '#9EC600',
        stack: 5,
        posisi: 'bottom-left',
        bgColor: false,
        textColor: false,
        textAlign: 'left',
        ikon: false,
        beforeShow: function() {},
        afterShown: function() {},
        beforeHide: function() {},
        afterHidden: function() {}
    };

})(jQuery, window, document);
