! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0bcf658b-feef-4ce9-9194-a42964dd3128", e._sentryDebugIdIdentifier = "sentry-dbid-0bcf658b-feef-4ce9-9194-a42964dd3128")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4577], {
        5750: function(e, t, n) {
            function r(e, t, n, r) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(26518), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        84577: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return j
                }
            });
            let r = n(66173),
                o = n(24004),
                l = r._(n(14978)),
                u = n(88013),
                f = n(11806),
                a = n(61638),
                i = n(69038),
                c = n(36579),
                d = n(63864),
                s = n(82500),
                p = n(37847),
                b = n(5750),
                y = n(82362),
                h = n(4470),
                v = new Set;

            function g(e, t, n, r, o, l) {
                if ("undefined" != typeof window && (l || (0, f.isLocalURL)(t))) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                        if (v.has(o)) return;
                        v.add(o)
                    }(async () => l ? e.prefetch(t, o) : e.prefetch(t, n, r))().catch(e => {})
                }
            }

            function _(e) {
                return "string" == typeof e ? e : (0, a.formatUrl)(e)
            }
            let j = l.default.forwardRef(function(e, t) {
                let n, r;
                let {
                    href: a,
                    as: v,
                    children: j,
                    prefetch: k = null,
                    passHref: C,
                    replace: m,
                    shallow: M,
                    scroll: P,
                    locale: w,
                    onClick: O,
                    onMouseEnter: E,
                    onTouchStart: I,
                    legacyBehavior: L = !1,
                    ...x
                } = e;
                n = j, L && ("string" == typeof n || "number" == typeof n) && (n = (0, o.jsx)("a", {
                    children: n
                }));
                let R = l.default.useContext(d.RouterContext),
                    D = l.default.useContext(s.AppRouterContext),
                    T = null != R ? R : D,
                    S = !R,
                    U = !1 !== k,
                    K = null === k ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
                    {
                        href: A,
                        as: N
                    } = l.default.useMemo(() => {
                        if (!R) {
                            let e = _(a);
                            return {
                                href: e,
                                as: v ? _(v) : e
                            }
                        }
                        let [e, t] = (0, u.resolveHref)(R, a, !0);
                        return {
                            href: e,
                            as: v ? (0, u.resolveHref)(R, v) : t || e
                        }
                    }, [R, a, v]),
                    H = l.default.useRef(A),
                    q = l.default.useRef(N);
                L && (r = l.default.Children.only(n));
                let z = L ? r && "object" == typeof r && r.ref : t,
                    [B, F, G] = (0, p.useIntersection)({
                        rootMargin: "200px"
                    }),
                    J = l.default.useCallback(e => {
                        (q.current !== N || H.current !== A) && (G(), q.current = N, H.current = A), B(e), z && ("function" == typeof z ? z(e) : "object" == typeof z && (z.current = e))
                    }, [N, z, A, G, B]);
                l.default.useEffect(() => {
                    T && F && U && g(T, A, N, {
                        locale: w
                    }, {
                        kind: K
                    }, S)
                }, [N, A, F, w, U, null == R ? void 0 : R.locale, T, S, K]);
                let Q = {
                    ref: J,
                    onClick(e) {
                        L || "function" != typeof O || O(e), L && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), T && !e.defaultPrevented && function(e, t, n, r, o, u, a, i, c) {
                            let {
                                nodeName: d
                            } = e.currentTarget;
                            if ("A" === d.toUpperCase() && (function(e) {
                                    let t = e.currentTarget.getAttribute("target");
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !c && !(0, f.isLocalURL)(n))) return;
                            e.preventDefault();
                            let s = () => {
                                let e = null == a || a;
                                "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                    shallow: u,
                                    locale: i,
                                    scroll: e
                                }) : t[o ? "replace" : "push"](r || n, {
                                    scroll: e
                                })
                            };
                            c ? l.default.startTransition(s) : s()
                        }(e, T, A, N, m, M, P, w, S)
                    },
                    onMouseEnter(e) {
                        L || "function" != typeof E || E(e), L && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), T && (U || !S) && g(T, A, N, {
                            locale: w,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: K
                        }, S)
                    },
                    onTouchStart: function(e) {
                        L || "function" != typeof I || I(e), L && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), T && (U || !S) && g(T, A, N, {
                            locale: w,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        }, {
                            kind: K
                        }, S)
                    }
                };
                if ((0, i.isAbsoluteUrl)(N)) Q.href = N;
                else if (!L || C || "a" === r.type && !("href" in r.props)) {
                    let e = void 0 !== w ? w : null == R ? void 0 : R.locale,
                        t = (null == R ? void 0 : R.isLocaleDomain) && (0, b.getDomainLocale)(N, e, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                    Q.href = t || (0, y.addBasePath)((0, c.addLocale)(N, e, null == R ? void 0 : R.defaultLocale))
                }
                return L ? l.default.cloneElement(r, Q) : (0, o.jsx)("a", { ...x,
                    ...Q,
                    children: n
                })
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        37847: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(14978),
                o = n(60666),
                l = "function" == typeof IntersectionObserver,
                u = new Map,
                f = [];

            function a(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: a
                } = e, i = a || !l, [c, d] = (0, r.useState)(!1), s = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    s.current = e
                }, []);
                return (0, r.useEffect)(() => {
                    if (l) {
                        if (i || c) return;
                        let e = s.current;
                        if (e && e.tagName) return function(e, t, n) {
                            let {
                                id: r,
                                observer: o,
                                elements: l
                            } = function(e) {
                                let t;
                                let n = {
                                        root: e.root || null,
                                        margin: e.rootMargin || ""
                                    },
                                    r = f.find(e => e.root === n.root && e.margin === n.margin);
                                if (r && (t = u.get(r))) return t;
                                let o = new Map;
                                return t = {
                                    id: n,
                                    observer: new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            let t = o.get(e.target),
                                                n = e.isIntersecting || e.intersectionRatio > 0;
                                            t && n && t(n)
                                        })
                                    }, e),
                                    elements: o
                                }, f.push(n), u.set(n, t), t
                            }(n);
                            return l.set(e, t), o.observe(e),
                                function() {
                                    if (l.delete(e), o.unobserve(e), 0 === l.size) {
                                        o.disconnect(), u.delete(r);
                                        let e = f.findIndex(e => e.root === r.root && e.margin === r.margin);
                                        e > -1 && f.splice(e, 1)
                                    }
                                }
                        }(e, e => e && d(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        })
                    } else if (!c) {
                        let e = (0, o.requestIdleCallback)(() => d(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [i, n, t, c, s.current]), [p, c, (0, r.useCallback)(() => {
                    d(!1)
                }, [])]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        }
    }
]);