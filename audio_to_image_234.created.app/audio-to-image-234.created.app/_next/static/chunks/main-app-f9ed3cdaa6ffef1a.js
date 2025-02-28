! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7ccb3f9f-75ad-4f54-9531-5e4eb57f7e76", e._sentryDebugIdIdentifier = "sentry-dbid-7ccb3f9f-75ad-4f54-9531-5e4eb57f7e76")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1744], {
        1913: function(e, n, t) {
            Promise.resolve().then(t.t.bind(t, 60905, 23)), Promise.resolve().then(t.t.bind(t, 13861, 23)), Promise.resolve().then(t.t.bind(t, 54166, 23)), Promise.resolve().then(t.t.bind(t, 84204, 23)), Promise.resolve().then(t.t.bind(t, 89023, 23)), Promise.resolve().then(t.t.bind(t, 69822, 23))
        },
        25759: function(e, n, t) {
            "use strict";
            var r = t(68497),
                s = t(71832),
                i = t(77580);
            i.env.NEXT_PUBLIC_SENTRY_CLIENT_APPS_DSN;
            let o = Number(i.env.NEXT_PUBLIC_TRACES_SAMPLE_RATE);
            var a = t(77580);
            globalThis._sentryRewritesTunnelPath = "/monitoring", globalThis.SENTRY_RELEASE = {
                id: "rG1mkw3jY12lP_Ey2HrrG"
            }, globalThis._sentryBasePath = void 0, globalThis._sentryRewriteFramesAssetPrefixPath = "";
            let l = Number(a.env.NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE),
                _ = Number(a.env.NEXT_PUBLIC_REPLAYS_ON_ERROR_SAMPLE_RATE);
            r.S1({
                enabled: !0,
                dsn: "https://91f5667076b3c2ff81a2bf6bf06b4940@o1154715.ingest.us.sentry.io/4506742732881920",
                tracesSampler: e => "POST /api/graphql" === e.transactionContext.name ? .001 : e.transactionContext.name.startsWith("POST /integrations") ? 1 : o,
                replaysOnErrorSampleRate: l,
                replaysSessionSampleRate: _,
                integrations: [s.G({
                    maskAllText: !1,
                    maskAllInputs: !1,
                    blockAllMedia: !1
                })],
                beforeSend: function(e, n) {
                    return e
                },
                ignoreErrors: ["Failed to fetch"]
            })
        }
    },
    function(e) {
        var n = function(n) {
            return e(e.s = n)
        };
        e.O(0, [3840, 8470, 7465], function() {
            return n(25759), n(76102), n(1913)
        }), _N_E = e.O()
    }
]);