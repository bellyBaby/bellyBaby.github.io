var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

function kirimWA(e) {
    var t = !0;
    if (
        (jQuery("#" + e + " .wajib").each(function () {
                ("" != $.trim(jQuery(this).val()) &&
                    "default" != $.trim(jQuery(this).val())) ||
                jQuery(this).addClass("focus");
            }),
            jQuery("#" + e + " .wajib").each(function () {
                return "" == $.trim(jQuery(this).val()) ?
                    ((t = !1),
                        jQuery(this).parents("label").find(".validasi").addClass("show"),
                        jQuery(this).focus(),
                        !1) :
                    "default" == $.trim(jQuery(this).val()) ?
                    ((t = !1),
                        jQuery(this).parents("label").find(".validasi").addClass("show"),
                        !1) :
                    void 0;
            }),
            t === !0)
    ) {
        var i = "",
            a = "https://web.whatsapp.com/send";
        if (
            (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                ) && (a = "whatsapp://send"),
                "konsultasi" === e)
        )
            var s = 52,
                r = 5512927380,
                n = "me gustaria recibir informacion sobre",
                o = "Hola bellybaby,",
                l =
                (jQuery("#" + e + " .title-content").text(),
                    jQuery("#" + e + " .pesan").val()),
                i = a + "?phone=" + s + r + "&text=*" + o + " " + n + "...* %0A%0A" + l;
        jQuery(this).attr("href", i);
        var u = 960,
            h = 540,
            c = Number(screen.width / 2 - u / 2),
            d = Number(screen.height / 2 - h / 2),
            y = window.open(
                this.href,
                "",
                "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=" +
                u +
                ", height=" +
                h +
                ", top=" +
                d +
                ", left=" +
                c
            );
        return y.focus(), !1;
    }
}
window.addEventListener(
        "load",
        function () {
            var e = jQuery("title").text();
            jQuery(".waFix").on("click", function () {
                    jQuery(this).removeClass("show"), jQuery("title").text(e);
                }),
                jQuery(".formWA input, .formWA textarea").on("keypress", function () {
                    13 === event.keyCode &&
                        jQuery(this).parents(".formWA").find(".submit").trigger("click");
                }),
                jQuery(".formWA .wajib").each(function () {
                    (title = jQuery(this).attr("placeholder")),
                    (label = jQuery(this).parents("label")),
                    jQuery('<span class="validasi">(Required)</span>').appendTo(label);
                }),
                jQuery(".formWA .wajib").keyup(function () {
                    "" != jQuery(this).val() &&
                        (jQuery(this).removeClass("focus"),
                            jQuery(this).parents("label").find(".validasi").removeClass("show"));
                }),
                jQuery(".formWA select").change(function () {
                    jQuery(this).removeClass("focus"),
                        jQuery(this).parents("label").find(".validasi").removeClass("show");
                });
        },
        !1
    ),
    jQuery(".formWA .submit").on("click", function () {
        return kirimWA(jQuery(this).parents(".poptamv").attr("id")), !1;
    }),
    $(document).on("click", ".close-chat", function () {
        $("#whatsapp-chat").addClass("hide").removeClass("show");
    }),
    $(document).on("click", ".nabil-live", function () {
        $("#whatsapp-chat").addClass("show").removeClass("hide");
    });