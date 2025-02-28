! function() {
    try {
        var _ = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new _.Error).stack;
        e && (_._sentryDebugIds = _._sentryDebugIds || {}, _._sentryDebugIds[e] = "0c1af634-5caf-4db3-b259-15db15646818", _._sentryDebugIdIdentifier = "sentry-dbid-0c1af634-5caf-4db3-b259-15db15646818")
    } catch (_) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9098], {
        58476: function(_, e, E) {
            Promise.resolve().then(E.bind(E, 96783))
        },
        14218: function(_, e, E) {
            "use strict";
            var n = E(7954),
                t = E(77580);
            let r = {
                    NEXT_PUBLIC_URL: n.z.string(),
                    NEXT_PUBLIC_HOSTED_DOMAIN: n.z.string(),
                    NEXT_PUBLIC_SENTRY_ENABLED: (0, n.Yv)().optional(),
                    NEXT_PUBLIC_SENTRY_ENVIRONMENT: n.z.string().optional(),
                    NEXT_PUBLIC_SENTRY_DSN: n.z.string().optional(),
                    NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN: n.z.string().optional(),
                    NEXT_PUBLIC_TRACES_SAMPLE_RATE: n.z.number({
                        coerce: !0
                    }).optional(),
                    NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE: n.z.number({
                        coerce: !0
                    }).optional(),
                    NEXT_PUBLIC_LD_CLIENT_ID: n.z.string(),
                    NEXT_PUBLIC_VERCEL_ENV: n.z.enum(["development", "preview", "production"]).optional(),
                    NEXT_PUBLIC_SEGMENT_WRITE_KEY: n.z.string().optional(),
                    NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY: n.z.string()
                },
                N = {
                    NODE_ENV: n.z.enum(["development", "production", "test"]),
                    API_BASE_URL: n.z.string(),
                    NEXT_PUBLIC_WS_BASE_URL: n.z.string()
                },
                i = function(_) {
                    let {
                        client: e,
                        runtimeMap: E
                    } = _;
                    return (0, n.G)(e, {
                        skipValidation: !0,
                        env: E
                    })
                }({
                    client: { ...r,
                        ...N
                    },
                    runtimeMap: {
                        NODE_ENV: "production",
                        API_BASE_URL: t.env.API_BASE_URL,
                        NEXT_PUBLIC_WS_BASE_URL: "",
                        NEXT_PUBLIC_URL: "https://created.app/",
                        NEXT_PUBLIC_HOSTED_DOMAIN: "created.app",
                        NEXT_PUBLIC_LD_CLIENT_ID: "671fe0f5c7a8b30886147865",
                        NEXT_PUBLIC_VERCEL_ENV: t.env.NEXT_PUBLIC_VERCEL_ENV,
                        NEXT_PUBLIC_SEGMENT_WRITE_KEY: "KMO420oxM7i2PDPjGBMmgyHBB38UuwTy",
                        NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE: t.env.NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE,
                        NEXT_PUBLIC_SENTRY_ENABLED: "true",
                        NEXT_PUBLIC_SENTRY_ENVIRONMENT: t.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
                        NEXT_PUBLIC_SENTRY_DSN: "https://91f5667076b3c2ff81a2bf6bf06b4940@o1154715.ingest.us.sentry.io/4506742732881920",
                        NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN: t.env.NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN,
                        NEXT_PUBLIC_TRACES_SAMPLE_RATE: t.env.NEXT_PUBLIC_TRACES_SAMPLE_RATE,
                        NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY: "e1a4c9d0d2f9f737c5e1"
                    }
                });
            e.ZP = i
        },
        96783: function(_, e, E) {
            "use strict";
            E.d(e, {
                Analytics: function() {
                    return T
                }
            });
            var n = E(14218),
                t = E(30797);
            let r = n.ZP.NEXT_PUBLIC_SEGMENT_WRITE_KEY ? t.b.load({
                writeKey: n.ZP.NEXT_PUBLIC_SEGMENT_WRITE_KEY
            }) : void 0;
            var N = E(65181),
                i = E(38912),
                o = E(14978);

            function T() {
                let _ = (0, i.usePathname)(),
                    e = (0, i.useSearchParams)();
                return (0, o.useEffect)(() => {
                    let E = async () => {
                        await (null == r ? void 0 : r.page())
                    };
                    _ && E().catch(E => {
                        N.Tb(Error("Failed to record page view", {
                            cause: E
                        }), {
                            extra: {
                                pathname: _,
                                searchParams: e
                            }
                        })
                    })
                }, [_, e]), null
            }
        },
        7954: function(_, e, E) {
            "use strict";
            E.d(e, {
                G: function() {
                    return N
                },
                Yv: function() {
                    return i
                },
                z: function() {
                    return t.z
                }
            });
            var n = E(22296),
                t = E(18171),
                r = E(77580),
                N = (_, e) => {
                    let E = Object.keys(_).reduce((_, E) => {
                        var n;
                        return { ..._,
                            [E]: (null !== (n = null == e ? void 0 : e.env) && void 0 !== n ? n : r.env)[E]
                        }
                    }, {});
                    if (null == e ? void 0 : e.skipValidation) return E;
                    let N = t.z.object({ ..._
                        }).safeParse(E),
                        {
                            DISABLE_ENV_VALIDATION: i
                        } = r.env;
                    if (!1 === N.success) {
                        if (!i) throw Error("Invalid environment variables:\n".concat(N.error.errors.map(_ => "❌ ".concat(n.red(_.message), ": ").concat(_.path)).join("\n")));
                        return E
                    }
                    return N.data
                },
                i = () => t.z.preprocess(_ => {
                    if (!_) return !1;
                    let e = String(_).toLowerCase();
                    return "true" === e || "1" === e || "yes" === e || "t" === e
                }, t.z.boolean())
        }
    },
    function(_) {
        _.O(0, [5343, 1594, 3840, 8470, 7465, 1744], function() {
            return _(_.s = 58476)
        }), _N_E = _.O()
    }
]);