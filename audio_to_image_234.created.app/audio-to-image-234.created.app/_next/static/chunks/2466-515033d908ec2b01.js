! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "03771b82-ff84-4765-a810-0edca4904155", e._sentryDebugIdIdentifier = "sentry-dbid-03771b82-ff84-4765-a810-0edca4904155")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2466], {
        81529: function(e, t, n) {
            n.d(t, {
                AlertBox: function() {
                    return h
                }
            });
            var i = n(24004),
                o = n(75641),
                r = n(68258);
            let s = n(37300),
                l = (0, r.q7)({
                    extend: {
                        classGroups: {
                            "font-size": Object.keys(s).map(e => e.replace(".", ""))
                        }
                    }
                });

            function f() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return l((0, o.W)(t))
            }
            var _ = (0, i.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsxs)("g", {
                        clipPath: "url(#clip0_340_2767)",
                        children: [(0, i.jsx)("path", {
                            d: "M8.99992 13.0132C8.91259 13.0132 8.82721 13.0391 8.7546 13.0876C8.68198 13.1361 8.62538 13.2051 8.59196 13.2858C8.55854 13.3664 8.5498 13.4552 8.56683 13.5409C8.58387 13.6265 8.62593 13.7052 8.68768 13.767C8.74944 13.8287 8.82812 13.8708 8.91377 13.8878C8.99943 13.9049 9.08822 13.8961 9.1689 13.8627C9.24959 13.8293 9.31855 13.7727 9.36707 13.7001C9.41559 13.6274 9.44149 13.5421 9.44149 13.4547C9.44149 13.3376 9.39497 13.2253 9.31216 13.1425C9.22935 13.0597 9.11703 13.0132 8.99992 13.0132Z",
                            fill: "currentColor",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, i.jsx)("path", {
                            d: "M9 10.9935V5.99348",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round"
                        }), (0, i.jsx)("path", {
                            d: "M10.0808 2.17318C9.98155 1.97119 9.8277 1.80105 9.63669 1.68206C9.44567 1.56307 9.22513 1.5 9.00009 1.5C8.77504 1.5 8.5545 1.56307 8.36349 1.68206C8.17247 1.80105 8.01863 1.97119 7.91941 2.17318L1.60401 15.0387C1.52799 15.1933 1.49263 15.3648 1.50128 15.5369C1.50992 15.709 1.56229 15.876 1.65343 16.0223C1.74456 16.1685 1.87147 16.2891 2.02216 16.3727C2.17285 16.4563 2.34236 16.5001 2.51468 16.5H15.4855C15.6578 16.5001 15.8273 16.4563 15.978 16.3727C16.1287 16.2891 16.2556 16.1685 16.3467 16.0223C16.4379 15.876 16.4902 15.709 16.4989 15.5369C16.5075 15.3648 16.4722 15.1933 16.3962 15.0387L10.0808 2.17318Z",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsx)("clipPath", {
                            id: "clip0_340_2767",
                            children: (0, i.jsx)("rect", {
                                width: "18",
                                height: "18",
                                fill: "white"
                            })
                        })
                    })]
                }),
                a = n(11855);
            let h = e => {
                let {
                    color: t = "red",
                    message: n = "Something went wrong."
                } = e;
                return (0, i.jsx)("div", {
                    className: "flex flex-row",
                    children: (0, i.jsxs)("div", {
                        className: f("flex rounded p-[8px]", "red" === t ? "bg-red-[#fbdfdf]" : "bg-[#F5F5F5]"),
                        children: [(0, i.jsx)(a.J, {
                            className: f("h-[24px] w-[24px]", "red" === t ? "text-red-[#e7292b]" : "text-black"),
                            content: _
                        }), (0, i.jsx)("div", {
                            className: f("ml-[11px] text-[16px] font-[400]", "red" === t ? "text-red-[#e7292b]" : "text-black"),
                            children: n
                        })]
                    })
                })
            }
        },
        14218: function(e, t, n) {
            var i = n(7954),
                o = n(77580);
            let r = {
                    NEXT_PUBLIC_URL: i.z.string(),
                    NEXT_PUBLIC_HOSTED_DOMAIN: i.z.string(),
                    NEXT_PUBLIC_SENTRY_ENABLED: (0, i.Yv)().optional(),
                    NEXT_PUBLIC_SENTRY_ENVIRONMENT: i.z.string().optional(),
                    NEXT_PUBLIC_SENTRY_DSN: i.z.string().optional(),
                    NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN: i.z.string().optional(),
                    NEXT_PUBLIC_TRACES_SAMPLE_RATE: i.z.number({
                        coerce: !0
                    }).optional(),
                    NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE: i.z.number({
                        coerce: !0
                    }).optional(),
                    NEXT_PUBLIC_LD_CLIENT_ID: i.z.string(),
                    NEXT_PUBLIC_VERCEL_ENV: i.z.enum(["development", "preview", "production"]).optional(),
                    NEXT_PUBLIC_SEGMENT_WRITE_KEY: i.z.string().optional(),
                    NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY: i.z.string()
                },
                s = {
                    NODE_ENV: i.z.enum(["development", "production", "test"]),
                    API_BASE_URL: i.z.string(),
                    NEXT_PUBLIC_WS_BASE_URL: i.z.string()
                },
                l = function(e) {
                    let {
                        client: t,
                        runtimeMap: n
                    } = e;
                    return (0, i.G)(t, {
                        skipValidation: !0,
                        env: n
                    })
                }({
                    client: { ...r,
                        ...s
                    },
                    runtimeMap: {
                        NODE_ENV: "production",
                        API_BASE_URL: o.env.API_BASE_URL,
                        NEXT_PUBLIC_WS_BASE_URL: "",
                        NEXT_PUBLIC_URL: "https://created.app/",
                        NEXT_PUBLIC_HOSTED_DOMAIN: "created.app",
                        NEXT_PUBLIC_LD_CLIENT_ID: "671fe0f5c7a8b30886147865",
                        NEXT_PUBLIC_VERCEL_ENV: o.env.NEXT_PUBLIC_VERCEL_ENV,
                        NEXT_PUBLIC_SEGMENT_WRITE_KEY: "KMO420oxM7i2PDPjGBMmgyHBB38UuwTy",
                        NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE: o.env.NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE,
                        NEXT_PUBLIC_SENTRY_ENABLED: "true",
                        NEXT_PUBLIC_SENTRY_ENVIRONMENT: o.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
                        NEXT_PUBLIC_SENTRY_DSN: "https://91f5667076b3c2ff81a2bf6bf06b4940@o1154715.ingest.us.sentry.io/4506742732881920",
                        NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN: o.env.NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN,
                        NEXT_PUBLIC_TRACES_SAMPLE_RATE: o.env.NEXT_PUBLIC_TRACES_SAMPLE_RATE,
                        NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY: "e1a4c9d0d2f9f737c5e1"
                    }
                });
            t.ZP = l
        },
        37300: function(e) {
            var t = {
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: "normal"
                },
                n = {
                    ".text-display-xxl": { ...t,
                        fontWeight: 400,
                        fontSize: "4.5rem",
                        lineHeight: "120%"
                    },
                    ".text-display-xl": {
                        fontWeight: 400,
                        fontSize: "3.75rem",
                        lineHeight: "120%"
                    },
                    ".text-display-lg": {
                        fontWeight: 400,
                        fontSize: "3rem",
                        lineHeight: "120%"
                    },
                    ".text-display-md": {
                        fontWeight: 400,
                        fontSize: "2.25rem",
                        lineHeight: "120%"
                    },
                    ".text-display-sm": {
                        fontWeight: 400,
                        fontSize: "1.875rem",
                        lineHeight: "120%"
                    },
                    ".text-display-xs": {
                        fontWeight: 400,
                        fontSize: "1.5rem",
                        lineHeight: "120%"
                    },
                    ".text-body-xl": { ...t,
                        fontSize: "1.25rem",
                        lineHeight: "150%",
                        fontWeight: 400
                    },
                    ".text-body-lg": { ...t,
                        fontSize: "1.125rem",
                        lineHeight: "150%",
                        fontWeight: 400
                    },
                    ".text-body-md": { ...t,
                        fontSize: "1rem",
                        lineHeight: "150%",
                        fontWeight: 400
                    },
                    ".text-body-sm": { ...t,
                        fontSize: ".875rem",
                        lineHeight: "150%",
                        fontWeight: 400
                    },
                    ".text-body-xs": { ...t,
                        fontWeight: 400,
                        fontSize: ".75rem",
                        lineHeight: "136%"
                    },
                    ".text-body-xxs": { ...t,
                        fontWeight: 400,
                        fontSize: ".625rem",
                        lineHeight: "120%"
                    }
                },
                i = {
                    ".text-h1": { ...t,
                        fontWeight: 600,
                        fontSize: "2.5rem",
                        lineHeight: "120%"
                    },
                    ".text-h2": { ...t,
                        fontWeight: 600,
                        fontSize: "2rem",
                        lineHeight: "120%"
                    },
                    ".text-h3": { ...t,
                        fontWeight: 600,
                        fontSize: "1.5rem",
                        lineHeight: "120%"
                    },
                    ".text-h4": { ...t,
                        fontWeight: 600,
                        fontSize: "1.25rem",
                        lineHeight: "120%"
                    },
                    ".text-h5": { ...t,
                        fontWeight: 600,
                        fontSize: "1rem",
                        lineHeight: "120%"
                    },
                    ".text-h6": { ...t,
                        fontWeight: 600,
                        fontSize: ".875rem",
                        lineHeight: "120%"
                    },
                    ".text-body-lg": { ...t,
                        fontSize: "1rem",
                        lineHeight: "150%",
                        fontWeight: 400
                    },
                    ".text-body-md": { ...t,
                        fontSize: "0.875rem",
                        lineHeight: "150%",
                        fontWeight: 400
                    },
                    ".text-body-sm": { ...t,
                        fontSize: ".75rem",
                        lineHeight: "150%",
                        fontWeight: 400
                    },
                    ".text-body-xs": { ...t,
                        fontWeight: 400,
                        fontSize: ".75rem",
                        lineHeight: "136%"
                    },
                    ".text-body-xxs": { ...t,
                        fontWeight: 400,
                        fontSize: ".625rem",
                        lineHeight: "120%"
                    },
                    ".text-body-lg-heavy": { ...t,
                        fontSize: "1rem",
                        lineHeight: "150%",
                        fontWeight: 600
                    },
                    ".text-body-md-heavy": { ...t,
                        fontSize: "0.875rem",
                        lineHeight: "150%",
                        fontWeight: 600
                    },
                    ".text-body-sm-heavy": { ...t,
                        fontSize: ".75rem",
                        lineHeight: "150%",
                        fontWeight: 600
                    },
                    ".text-body-xs-heavy": { ...t,
                        fontSize: "0.75rem",
                        lineHeight: "0.75rem",
                        fontWeight: 600
                    },
                    ...n,
                    ".comeback-text-body-xs": {
                        fontSize: "0.625rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-body-sm": {
                        fontSize: "0.75rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-body-md": {
                        fontSize: "0.875rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-body-lg": {
                        fontSize: "1rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-body-xl": {
                        fontSize: "1.125rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-display-xs": {
                        fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                        fontSize: "1.375rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-display-sm": {
                        fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                        fontSize: "1.625rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-display-md": {
                        fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                        fontSize: "1.875rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-display-lg": {
                        fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                        fontSize: "2.625rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-display-xl": {
                        fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                        fontSize: "3.375rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    },
                    ".comeback-text-display-xxl": {
                        fontFamily: "'Instrument Sans', 'Inter', sans-serif",
                        fontSize: "4.375rem",
                        lineHeight: "140%",
                        fontWeight: 400
                    }
                };
            e.exports = { ...i
            }
        },
        7954: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return s
                },
                Yv: function() {
                    return l
                },
                z: function() {
                    return o.z
                }
            });
            var i = n(22296),
                o = n(18171),
                r = n(77580),
                s = (e, t) => {
                    let n = Object.keys(e).reduce((e, n) => {
                        var i;
                        return { ...e,
                            [n]: (null !== (i = null == t ? void 0 : t.env) && void 0 !== i ? i : r.env)[n]
                        }
                    }, {});
                    if (null == t ? void 0 : t.skipValidation) return n;
                    let s = o.z.object({ ...e
                        }).safeParse(n),
                        {
                            DISABLE_ENV_VALIDATION: l
                        } = r.env;
                    if (!1 === s.success) {
                        if (!l) throw Error("Invalid environment variables:\n".concat(s.error.errors.map(e => "❌ ".concat(i.red(e.message), ": ").concat(e.path)).join("\n")));
                        return n
                    }
                    return s.data
                },
                l = () => o.z.preprocess(e => {
                    if (!e) return !1;
                    let t = String(e).toLowerCase();
                    return "true" === t || "1" === t || "yes" === t || "t" === t
                }, o.z.boolean())
        }
    }
]);