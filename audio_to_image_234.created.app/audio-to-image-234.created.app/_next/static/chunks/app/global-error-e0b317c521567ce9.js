! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "73930e27-b123-43ce-9edd-e2f0db42cdde", e._sentryDebugIdIdentifier = "sentry-dbid-73930e27-b123-43ce-9edd-e2f0db42cdde")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6470], {
        45207: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 83502))
        },
        83502: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return b
                }
            });
            var d = t(24004),
                l = t(81529);
            let f = () => (0, d.jsx)("div", {
                className: "flex h-full w-full flex-col items-center justify-center",
                children: (0, d.jsx)(l.AlertBox, {})
            });
            var s = t(14218),
                c = t(86678),
                r = t(24514),
                i = t(32664);
            "development" === s.ZP.NODE_ENV && window.addEventListener("warning", e => {
                e.preventDefault();
                let n = "detail" in e ? e.detail : void 0;
                n && "object" == typeof n && "code" in n && "string" == typeof n.code && "TWIND_INVALID_CLASS" === n.code || console.warn(n)
            });
            var o = (0, c.ZD)({
                    presets: [(0, r.Z)(), (0, i.Z)()]
                }),
                u = t(14978),
                a = t(65181);

            function b(e) {
                let {
                    error: n
                } = e;
                return (0, u.useEffect)(() => {
                        a.Tb(n)
                    }, [n]),
                    function(e) {
                        let {
                            config: n,
                            enabled: t
                        } = e;
                        (0, u.useEffect)(() => {
                            t && (0, c.cY)(n)
                        }, [n, t])
                    }({
                        config: o,
                        enabled: !0
                    }), (0, d.jsx)("html", {
                        lang: "en",
                        className: "h-full w-full",
                        children: (0, d.jsx)("body", {
                            className: "h-full w-full",
                            children: (0, d.jsx)(f, {})
                        })
                    })
            }
        }
    },
    function(e) {
        e.O(0, [5343, 8695, 7246, 1855, 2466, 3840, 8470, 7465, 1744], function() {
            return e(e.s = 45207)
        }), _N_E = e.O()
    }
]);