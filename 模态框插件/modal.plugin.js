;
(function ($, win) {
    var modal = $('<div class="m-modal"></div>')
    var cover = $('<div class="m-cover"></div')
    var content = $('<div class="m-content"></div>')
    var title = $('<div class="m-title"></div')
    var text = $('<div class="m-text"></div>')
    var ctbtn = $('<div class="m-ctbtn"></div>')
    var btnsCancel = $('<button class="m-btnsCancel"></button>')
    var btnsEnsure = $('<button class="m-btnEnsure"></button>')
    var defaultOptions = {
        titleText: "标题",
        contentText: "内容",
        btnsCancel: '取消',
        btnsEnsure: "确认",
        cancelCallback: "",
        ensureCallback: "",
    }

    function CreateModal(el, options) {
        if (!(this instanceof CreateModal)) {
            return new CreateModal(el, options)
        }
        this.el = el
        this.options = $.extend({}, defaultOptions, options)
        this.titleText = this.options.titleText || ""
        this.contentText = this.options.contentText || ""
        this.btnsCancel = this.options.btnsCancel || ""
        this.btnsEnsure = this.options.btnsEnsure || ""
        this.cancelCallback = this.options.cancelCallback || function () {}
        this.ensureCallback = this.options.ensureCallback || function () {}
    }
    CreateModal.prototype = {
        constructor: CreateModal,
        _init: function () {
            title.text(this.titleText)
            text.html(this.contentText)
            content.append(title)
            content.append(text)
            btnsCancel.text(this.btnsCancel)
            btnsEnsure.text(this.btnsEnsure)
            ctbtn.append(btnsCancel)
            ctbtn.append(btnsEnsure)
            content.append(ctbtn)
            modal.append(cover)
            modal.append(content)
            $(this.el).html(modal)
            this._cancelbtn()
            this._ensurebtn()
            $(cover).click(function () {
                $(this.el).html("")
            })
        },
        _cancelbtn: function () {

            var _self = this;
            $(btnsCancel).click(function () {
                console.log('123123')
                _self.options.cancelCallback()
            })
            $(cover).click(function(){
                $(_self.el).html("")
            })
        },
        _ensurebtn: function () {
            var _self = this;
            $(btnsEnsure).click(function () {
                _self.options.ensureCallback()
            })
        },

    }

    win.CreateModal = CreateModal
})(jQuery, window);