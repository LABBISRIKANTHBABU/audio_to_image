! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            r = (new e.Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9f385667-e94a-46e2-b0d0-73202234e3f0", e._sentryDebugIdIdentifier = "sentry-dbid-9f385667-e94a-46e2-b0d0-73202234e3f0")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8695], {
        75641: function(e, r, o) {
            function t() {
                for (var e, r, o = 0, t = "", n = arguments.length; o < n; o++)(e = arguments[o]) && (r = function e(r) {
                    var o, t, n = "";
                    if ("string" == typeof r || "number" == typeof r) n += r;
                    else if ("object" == typeof r) {
                        if (Array.isArray(r)) {
                            var l = r.length;
                            for (o = 0; o < l; o++) r[o] && (t = e(r[o])) && (n && (n += " "), n += t)
                        } else
                            for (t in r) r[t] && (n && (n += " "), n += t)
                    }
                    return n
                }(e)) && (t && (t += " "), t += r);
                return t
            }
            o.d(r, {
                W: function() {
                    return t
                }
            }), r.Z = t
        },
        68258: function(e, r, o) {
            o.d(r, {
                m6: function() {
                    return eo
                },
                q7: function() {
                    return er
                }
            });
            let t = e => {
                    let r = a(e),
                        {
                            conflictingClassGroups: o,
                            conflictingClassGroupModifiers: t
                        } = e;
                    return {
                        getClassGroupId: e => {
                            let o = e.split("-");
                            return "" === o[0] && 1 !== o.length && o.shift(), n(o, r) || s(e)
                        },
                        getConflictingClassGroupIds: (e, r) => {
                            let n = o[e] || [];
                            return r && t[e] ? [...n, ...t[e]] : n
                        }
                    }
                },
                n = (e, r) => {
                    if (0 === e.length) return r.classGroupId;
                    let o = e[0],
                        t = r.nextPart.get(o),
                        l = t ? n(e.slice(1), t) : void 0;
                    if (l) return l;
                    if (0 === r.validators.length) return;
                    let s = e.join("-");
                    return r.validators.find(({
                        validator: e
                    }) => e(s)) ? .classGroupId
                },
                l = /^\[(.+)\]$/,
                s = e => {
                    if (l.test(e)) {
                        let r = l.exec(e)[1],
                            o = r ? .substring(0, r.indexOf(":"));
                        if (o) return "arbitrary.." + o
                    }
                },
                a = e => {
                    let {
                        theme: r,
                        prefix: o
                    } = e, t = {
                        nextPart: new Map,
                        validators: []
                    };
                    return p(Object.entries(e.classGroups), o).forEach(([e, o]) => {
                        i(o, t, e, r)
                    }), t
                },
                i = (e, r, o, t) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? r : d(r, e)).classGroupId = o;
                            return
                        }
                        if ("function" == typeof e) {
                            if (c(e)) {
                                i(e(t), r, o, t);
                                return
                            }
                            r.validators.push({
                                validator: e,
                                classGroupId: o
                            });
                            return
                        }
                        Object.entries(e).forEach(([e, n]) => {
                            i(n, d(r, e), o, t)
                        })
                    })
                },
                d = (e, r) => {
                    let o = e;
                    return r.split("-").forEach(e => {
                        o.nextPart.has(e) || o.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), o = o.nextPart.get(e)
                    }), o
                },
                c = e => e.isThemeGetter,
                p = (e, r) => r ? e.map(([e, o]) => [e, o.map(e => "string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, o]) => [r + e, o])) : e)]) : e,
                u = e => {
                    if (e < 1) return {
                        get: () => void 0,
                        set: () => {}
                    };
                    let r = 0,
                        o = new Map,
                        t = new Map,
                        n = (n, l) => {
                            o.set(n, l), ++r > e && (r = 0, t = o, o = new Map)
                        };
                    return {
                        get(e) {
                            let r = o.get(e);
                            return void 0 !== r ? r : void 0 !== (r = t.get(e)) ? (n(e, r), r) : void 0
                        },
                        set(e, r) {
                            o.has(e) ? o.set(e, r) : n(e, r)
                        }
                    }
                },
                b = e => {
                    let {
                        separator: r,
                        experimentalParseClassName: o
                    } = e, t = 1 === r.length, n = r[0], l = r.length, s = e => {
                        let o;
                        let s = [],
                            a = 0,
                            i = 0;
                        for (let d = 0; d < e.length; d++) {
                            let c = e[d];
                            if (0 === a) {
                                if (c === n && (t || e.slice(d, d + l) === r)) {
                                    s.push(e.slice(i, d)), i = d + l;
                                    continue
                                }
                                if ("/" === c) {
                                    o = d;
                                    continue
                                }
                            }
                            "[" === c ? a++ : "]" === c && a--
                        }
                        let d = 0 === s.length ? e : e.substring(i),
                            c = d.startsWith("!"),
                            p = c ? d.substring(1) : d;
                        return {
                            modifiers: s,
                            hasImportantModifier: c,
                            baseClassName: p,
                            maybePostfixModifierPosition: o && o > i ? o - i : void 0
                        }
                    };
                    return o ? e => o({
                        className: e,
                        parseClassName: s
                    }) : s
                },
                f = e => {
                    if (e.length <= 1) return e;
                    let r = [],
                        o = [];
                    return e.forEach(e => {
                        "[" === e[0] ? (r.push(...o.sort(), e), o = []) : o.push(e)
                    }), r.push(...o.sort()), r
                },
                g = e => ({
                    cache: u(e.cacheSize),
                    parseClassName: b(e),
                    ...t(e)
                }),
                m = /\s+/,
                h = (e, r) => {
                    let {
                        parseClassName: o,
                        getClassGroupId: t,
                        getConflictingClassGroupIds: n
                    } = r, l = [], s = e.trim().split(m), a = "";
                    for (let e = s.length - 1; e >= 0; e -= 1) {
                        let r = s[e],
                            {
                                modifiers: i,
                                hasImportantModifier: d,
                                baseClassName: c,
                                maybePostfixModifierPosition: p
                            } = o(r),
                            u = !!p,
                            b = t(u ? c.substring(0, p) : c);
                        if (!b) {
                            if (!u || !(b = t(c))) {
                                a = r + (a.length > 0 ? " " + a : a);
                                continue
                            }
                            u = !1
                        }
                        let g = f(i).join(":"),
                            m = d ? g + "!" : g,
                            h = m + b;
                        if (l.includes(h)) continue;
                        l.push(h);
                        let y = n(b, u);
                        for (let e = 0; e < y.length; ++e) {
                            let r = y[e];
                            l.push(m + r)
                        }
                        a = r + (a.length > 0 ? " " + a : a)
                    }
                    return a
                };

            function y() {
                let e, r, o = 0,
                    t = "";
                for (; o < arguments.length;)(e = arguments[o++]) && (r = x(e)) && (t && (t += " "), t += r);
                return t
            }
            let x = e => {
                let r;
                if ("string" == typeof e) return e;
                let o = "";
                for (let t = 0; t < e.length; t++) e[t] && (r = x(e[t])) && (o && (o += " "), o += r);
                return o
            };

            function w(e, ...r) {
                let o, t, n;
                let l = function(a) {
                    return t = (o = g(r.reduce((e, r) => r(e), e()))).cache.get, n = o.cache.set, l = s, s(a)
                };

                function s(e) {
                    let r = t(e);
                    if (r) return r;
                    let l = h(e, o);
                    return n(e, l), l
                }
                return function() {
                    return l(y.apply(null, arguments))
                }
            }
            let v = e => {
                    let r = r => r[e] || [];
                    return r.isThemeGetter = !0, r
                },
                k = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                z = /^\d+\/\d+$/,
                j = new Set(["px", "full", "screen"]),
                C = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                S = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                G = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                I = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                P = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                N = e => E(e) || j.has(e) || z.test(e),
                _ = e => H(e, "length", J),
                E = e => !!e && !Number.isNaN(Number(e)),
                M = e => H(e, "number", E),
                $ = e => !!e && Number.isInteger(Number(e)),
                O = e => e.endsWith("%") && E(e.slice(0, -1)),
                W = e => k.test(e),
                D = e => C.test(e),
                R = new Set(["length", "size", "percentage"]),
                q = e => H(e, R, K),
                A = e => H(e, "position", K),
                T = new Set(["image", "url"]),
                Z = e => H(e, T, Q),
                B = e => H(e, "", L),
                F = () => !0,
                H = (e, r, o) => {
                    let t = k.exec(e);
                    return !!t && (t[1] ? "string" == typeof r ? t[1] === r : r.has(t[1]) : o(t[2]))
                },
                J = e => S.test(e) && !G.test(e),
                K = () => !1,
                L = e => I.test(e),
                Q = e => P.test(e),
                U = () => {
                    let e = v("colors"),
                        r = v("spacing"),
                        o = v("blur"),
                        t = v("brightness"),
                        n = v("borderColor"),
                        l = v("borderRadius"),
                        s = v("borderSpacing"),
                        a = v("borderWidth"),
                        i = v("contrast"),
                        d = v("grayscale"),
                        c = v("hueRotate"),
                        p = v("invert"),
                        u = v("gap"),
                        b = v("gradientColorStops"),
                        f = v("gradientColorStopPositions"),
                        g = v("inset"),
                        m = v("margin"),
                        h = v("opacity"),
                        y = v("padding"),
                        x = v("saturate"),
                        w = v("scale"),
                        k = v("sepia"),
                        z = v("skew"),
                        j = v("space"),
                        C = v("translate"),
                        S = () => ["auto", "contain", "none"],
                        G = () => ["auto", "hidden", "clip", "visible", "scroll"],
                        I = () => ["auto", W, r],
                        P = () => [W, r],
                        R = () => ["", N, _],
                        T = () => ["auto", E, W],
                        H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                        J = () => ["solid", "dashed", "dotted", "double", "none"],
                        K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                        L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                        Q = () => ["", "0", W],
                        U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                        V = () => [E, W];
                    return {
                        cacheSize: 500,
                        separator: ":",
                        theme: {
                            colors: [F],
                            spacing: [N, _],
                            blur: ["none", "", D, W],
                            brightness: V(),
                            borderColor: [e],
                            borderRadius: ["none", "", "full", D, W],
                            borderSpacing: P(),
                            borderWidth: R(),
                            contrast: V(),
                            grayscale: Q(),
                            hueRotate: V(),
                            invert: Q(),
                            gap: P(),
                            gradientColorStops: [e],
                            gradientColorStopPositions: [O, _],
                            inset: I(),
                            margin: I(),
                            opacity: V(),
                            padding: P(),
                            saturate: V(),
                            scale: V(),
                            sepia: Q(),
                            skew: V(),
                            space: P(),
                            translate: P()
                        },
                        classGroups: {
                            aspect: [{
                                aspect: ["auto", "square", "video", W]
                            }],
                            container: ["container"],
                            columns: [{
                                columns: [D]
                            }],
                            "break-after": [{
                                "break-after": U()
                            }],
                            "break-before": [{
                                "break-before": U()
                            }],
                            "break-inside": [{
                                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                            }],
                            "box-decoration": [{
                                "box-decoration": ["slice", "clone"]
                            }],
                            box: [{
                                box: ["border", "content"]
                            }],
                            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                            float: [{
                                float: ["right", "left", "none", "start", "end"]
                            }],
                            clear: [{
                                clear: ["left", "right", "both", "none", "start", "end"]
                            }],
                            isolation: ["isolate", "isolation-auto"],
                            "object-fit": [{
                                object: ["contain", "cover", "fill", "none", "scale-down"]
                            }],
                            "object-position": [{
                                object: [...H(), W]
                            }],
                            overflow: [{
                                overflow: G()
                            }],
                            "overflow-x": [{
                                "overflow-x": G()
                            }],
                            "overflow-y": [{
                                "overflow-y": G()
                            }],
                            overscroll: [{
                                overscroll: S()
                            }],
                            "overscroll-x": [{
                                "overscroll-x": S()
                            }],
                            "overscroll-y": [{
                                "overscroll-y": S()
                            }],
                            position: ["static", "fixed", "absolute", "relative", "sticky"],
                            inset: [{
                                inset: [g]
                            }],
                            "inset-x": [{
                                "inset-x": [g]
                            }],
                            "inset-y": [{
                                "inset-y": [g]
                            }],
                            start: [{
                                start: [g]
                            }],
                            end: [{
                                end: [g]
                            }],
                            top: [{
                                top: [g]
                            }],
                            right: [{
                                right: [g]
                            }],
                            bottom: [{
                                bottom: [g]
                            }],
                            left: [{
                                left: [g]
                            }],
                            visibility: ["visible", "invisible", "collapse"],
                            z: [{
                                z: ["auto", $, W]
                            }],
                            basis: [{
                                basis: I()
                            }],
                            "flex-direction": [{
                                flex: ["row", "row-reverse", "col", "col-reverse"]
                            }],
                            "flex-wrap": [{
                                flex: ["wrap", "wrap-reverse", "nowrap"]
                            }],
                            flex: [{
                                flex: ["1", "auto", "initial", "none", W]
                            }],
                            grow: [{
                                grow: Q()
                            }],
                            shrink: [{
                                shrink: Q()
                            }],
                            order: [{
                                order: ["first", "last", "none", $, W]
                            }],
                            "grid-cols": [{
                                "grid-cols": [F]
                            }],
                            "col-start-end": [{
                                col: ["auto", {
                                    span: ["full", $, W]
                                }, W]
                            }],
                            "col-start": [{
                                "col-start": T()
                            }],
                            "col-end": [{
                                "col-end": T()
                            }],
                            "grid-rows": [{
                                "grid-rows": [F]
                            }],
                            "row-start-end": [{
                                row: ["auto", {
                                    span: [$, W]
                                }, W]
                            }],
                            "row-start": [{
                                "row-start": T()
                            }],
                            "row-end": [{
                                "row-end": T()
                            }],
                            "grid-flow": [{
                                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                            }],
                            "auto-cols": [{
                                "auto-cols": ["auto", "min", "max", "fr", W]
                            }],
                            "auto-rows": [{
                                "auto-rows": ["auto", "min", "max", "fr", W]
                            }],
                            gap: [{
                                gap: [u]
                            }],
                            "gap-x": [{
                                "gap-x": [u]
                            }],
                            "gap-y": [{
                                "gap-y": [u]
                            }],
                            "justify-content": [{
                                justify: ["normal", ...L()]
                            }],
                            "justify-items": [{
                                "justify-items": ["start", "end", "center", "stretch"]
                            }],
                            "justify-self": [{
                                "justify-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            "align-content": [{
                                content: ["normal", ...L(), "baseline"]
                            }],
                            "align-items": [{
                                items: ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "align-self": [{
                                self: ["auto", "start", "end", "center", "stretch", "baseline"]
                            }],
                            "place-content": [{
                                "place-content": [...L(), "baseline"]
                            }],
                            "place-items": [{
                                "place-items": ["start", "end", "center", "baseline", "stretch"]
                            }],
                            "place-self": [{
                                "place-self": ["auto", "start", "end", "center", "stretch"]
                            }],
                            p: [{
                                p: [y]
                            }],
                            px: [{
                                px: [y]
                            }],
                            py: [{
                                py: [y]
                            }],
                            ps: [{
                                ps: [y]
                            }],
                            pe: [{
                                pe: [y]
                            }],
                            pt: [{
                                pt: [y]
                            }],
                            pr: [{
                                pr: [y]
                            }],
                            pb: [{
                                pb: [y]
                            }],
                            pl: [{
                                pl: [y]
                            }],
                            m: [{
                                m: [m]
                            }],
                            mx: [{
                                mx: [m]
                            }],
                            my: [{
                                my: [m]
                            }],
                            ms: [{
                                ms: [m]
                            }],
                            me: [{
                                me: [m]
                            }],
                            mt: [{
                                mt: [m]
                            }],
                            mr: [{
                                mr: [m]
                            }],
                            mb: [{
                                mb: [m]
                            }],
                            ml: [{
                                ml: [m]
                            }],
                            "space-x": [{
                                "space-x": [j]
                            }],
                            "space-x-reverse": ["space-x-reverse"],
                            "space-y": [{
                                "space-y": [j]
                            }],
                            "space-y-reverse": ["space-y-reverse"],
                            w: [{
                                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, r]
                            }],
                            "min-w": [{
                                "min-w": [W, r, "min", "max", "fit"]
                            }],
                            "max-w": [{
                                "max-w": [W, r, "none", "full", "min", "max", "fit", "prose", {
                                    screen: [D]
                                }, D]
                            }],
                            h: [{
                                h: [W, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "min-h": [{
                                "min-h": [W, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            "max-h": [{
                                "max-h": [W, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                            }],
                            size: [{
                                size: [W, r, "auto", "min", "max", "fit"]
                            }],
                            "font-size": [{
                                text: ["base", D, _]
                            }],
                            "font-smoothing": ["antialiased", "subpixel-antialiased"],
                            "font-style": ["italic", "not-italic"],
                            "font-weight": [{
                                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", M]
                            }],
                            "font-family": [{
                                font: [F]
                            }],
                            "fvn-normal": ["normal-nums"],
                            "fvn-ordinal": ["ordinal"],
                            "fvn-slashed-zero": ["slashed-zero"],
                            "fvn-figure": ["lining-nums", "oldstyle-nums"],
                            "fvn-spacing": ["proportional-nums", "tabular-nums"],
                            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                            tracking: [{
                                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
                            }],
                            "line-clamp": [{
                                "line-clamp": ["none", E, M]
                            }],
                            leading: [{
                                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", N, W]
                            }],
                            "list-image": [{
                                "list-image": ["none", W]
                            }],
                            "list-style-type": [{
                                list: ["none", "disc", "decimal", W]
                            }],
                            "list-style-position": [{
                                list: ["inside", "outside"]
                            }],
                            "placeholder-color": [{
                                placeholder: [e]
                            }],
                            "placeholder-opacity": [{
                                "placeholder-opacity": [h]
                            }],
                            "text-alignment": [{
                                text: ["left", "center", "right", "justify", "start", "end"]
                            }],
                            "text-color": [{
                                text: [e]
                            }],
                            "text-opacity": [{
                                "text-opacity": [h]
                            }],
                            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                            "text-decoration-style": [{
                                decoration: [...J(), "wavy"]
                            }],
                            "text-decoration-thickness": [{
                                decoration: ["auto", "from-font", N, _]
                            }],
                            "underline-offset": [{
                                "underline-offset": ["auto", N, W]
                            }],
                            "text-decoration-color": [{
                                decoration: [e]
                            }],
                            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                            "text-wrap": [{
                                text: ["wrap", "nowrap", "balance", "pretty"]
                            }],
                            indent: [{
                                indent: P()
                            }],
                            "vertical-align": [{
                                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
                            }],
                            whitespace: [{
                                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                            }],
                            break: [{
                                break: ["normal", "words", "all", "keep"]
                            }],
                            hyphens: [{
                                hyphens: ["none", "manual", "auto"]
                            }],
                            content: [{
                                content: ["none", W]
                            }],
                            "bg-attachment": [{
                                bg: ["fixed", "local", "scroll"]
                            }],
                            "bg-clip": [{
                                "bg-clip": ["border", "padding", "content", "text"]
                            }],
                            "bg-opacity": [{
                                "bg-opacity": [h]
                            }],
                            "bg-origin": [{
                                "bg-origin": ["border", "padding", "content"]
                            }],
                            "bg-position": [{
                                bg: [...H(), A]
                            }],
                            "bg-repeat": [{
                                bg: ["no-repeat", {
                                    repeat: ["", "x", "y", "round", "space"]
                                }]
                            }],
                            "bg-size": [{
                                bg: ["auto", "cover", "contain", q]
                            }],
                            "bg-image": [{
                                bg: ["none", {
                                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                                }, Z]
                            }],
                            "bg-color": [{
                                bg: [e]
                            }],
                            "gradient-from-pos": [{
                                from: [f]
                            }],
                            "gradient-via-pos": [{
                                via: [f]
                            }],
                            "gradient-to-pos": [{
                                to: [f]
                            }],
                            "gradient-from": [{
                                from: [b]
                            }],
                            "gradient-via": [{
                                via: [b]
                            }],
                            "gradient-to": [{
                                to: [b]
                            }],
                            rounded: [{
                                rounded: [l]
                            }],
                            "rounded-s": [{
                                "rounded-s": [l]
                            }],
                            "rounded-e": [{
                                "rounded-e": [l]
                            }],
                            "rounded-t": [{
                                "rounded-t": [l]
                            }],
                            "rounded-r": [{
                                "rounded-r": [l]
                            }],
                            "rounded-b": [{
                                "rounded-b": [l]
                            }],
                            "rounded-l": [{
                                "rounded-l": [l]
                            }],
                            "rounded-ss": [{
                                "rounded-ss": [l]
                            }],
                            "rounded-se": [{
                                "rounded-se": [l]
                            }],
                            "rounded-ee": [{
                                "rounded-ee": [l]
                            }],
                            "rounded-es": [{
                                "rounded-es": [l]
                            }],
                            "rounded-tl": [{
                                "rounded-tl": [l]
                            }],
                            "rounded-tr": [{
                                "rounded-tr": [l]
                            }],
                            "rounded-br": [{
                                "rounded-br": [l]
                            }],
                            "rounded-bl": [{
                                "rounded-bl": [l]
                            }],
                            "border-w": [{
                                border: [a]
                            }],
                            "border-w-x": [{
                                "border-x": [a]
                            }],
                            "border-w-y": [{
                                "border-y": [a]
                            }],
                            "border-w-s": [{
                                "border-s": [a]
                            }],
                            "border-w-e": [{
                                "border-e": [a]
                            }],
                            "border-w-t": [{
                                "border-t": [a]
                            }],
                            "border-w-r": [{
                                "border-r": [a]
                            }],
                            "border-w-b": [{
                                "border-b": [a]
                            }],
                            "border-w-l": [{
                                "border-l": [a]
                            }],
                            "border-opacity": [{
                                "border-opacity": [h]
                            }],
                            "border-style": [{
                                border: [...J(), "hidden"]
                            }],
                            "divide-x": [{
                                "divide-x": [a]
                            }],
                            "divide-x-reverse": ["divide-x-reverse"],
                            "divide-y": [{
                                "divide-y": [a]
                            }],
                            "divide-y-reverse": ["divide-y-reverse"],
                            "divide-opacity": [{
                                "divide-opacity": [h]
                            }],
                            "divide-style": [{
                                divide: J()
                            }],
                            "border-color": [{
                                border: [n]
                            }],
                            "border-color-x": [{
                                "border-x": [n]
                            }],
                            "border-color-y": [{
                                "border-y": [n]
                            }],
                            "border-color-s": [{
                                "border-s": [n]
                            }],
                            "border-color-e": [{
                                "border-e": [n]
                            }],
                            "border-color-t": [{
                                "border-t": [n]
                            }],
                            "border-color-r": [{
                                "border-r": [n]
                            }],
                            "border-color-b": [{
                                "border-b": [n]
                            }],
                            "border-color-l": [{
                                "border-l": [n]
                            }],
                            "divide-color": [{
                                divide: [n]
                            }],
                            "outline-style": [{
                                outline: ["", ...J()]
                            }],
                            "outline-offset": [{
                                "outline-offset": [N, W]
                            }],
                            "outline-w": [{
                                outline: [N, _]
                            }],
                            "outline-color": [{
                                outline: [e]
                            }],
                            "ring-w": [{
                                ring: R()
                            }],
                            "ring-w-inset": ["ring-inset"],
                            "ring-color": [{
                                ring: [e]
                            }],
                            "ring-opacity": [{
                                "ring-opacity": [h]
                            }],
                            "ring-offset-w": [{
                                "ring-offset": [N, _]
                            }],
                            "ring-offset-color": [{
                                "ring-offset": [e]
                            }],
                            shadow: [{
                                shadow: ["", "inner", "none", D, B]
                            }],
                            "shadow-color": [{
                                shadow: [F]
                            }],
                            opacity: [{
                                opacity: [h]
                            }],
                            "mix-blend": [{
                                "mix-blend": [...K(), "plus-lighter", "plus-darker"]
                            }],
                            "bg-blend": [{
                                "bg-blend": K()
                            }],
                            filter: [{
                                filter: ["", "none"]
                            }],
                            blur: [{
                                blur: [o]
                            }],
                            brightness: [{
                                brightness: [t]
                            }],
                            contrast: [{
                                contrast: [i]
                            }],
                            "drop-shadow": [{
                                "drop-shadow": ["", "none", D, W]
                            }],
                            grayscale: [{
                                grayscale: [d]
                            }],
                            "hue-rotate": [{
                                "hue-rotate": [c]
                            }],
                            invert: [{
                                invert: [p]
                            }],
                            saturate: [{
                                saturate: [x]
                            }],
                            sepia: [{
                                sepia: [k]
                            }],
                            "backdrop-filter": [{
                                "backdrop-filter": ["", "none"]
                            }],
                            "backdrop-blur": [{
                                "backdrop-blur": [o]
                            }],
                            "backdrop-brightness": [{
                                "backdrop-brightness": [t]
                            }],
                            "backdrop-contrast": [{
                                "backdrop-contrast": [i]
                            }],
                            "backdrop-grayscale": [{
                                "backdrop-grayscale": [d]
                            }],
                            "backdrop-hue-rotate": [{
                                "backdrop-hue-rotate": [c]
                            }],
                            "backdrop-invert": [{
                                "backdrop-invert": [p]
                            }],
                            "backdrop-opacity": [{
                                "backdrop-opacity": [h]
                            }],
                            "backdrop-saturate": [{
                                "backdrop-saturate": [x]
                            }],
                            "backdrop-sepia": [{
                                "backdrop-sepia": [k]
                            }],
                            "border-collapse": [{
                                border: ["collapse", "separate"]
                            }],
                            "border-spacing": [{
                                "border-spacing": [s]
                            }],
                            "border-spacing-x": [{
                                "border-spacing-x": [s]
                            }],
                            "border-spacing-y": [{
                                "border-spacing-y": [s]
                            }],
                            "table-layout": [{
                                table: ["auto", "fixed"]
                            }],
                            caption: [{
                                caption: ["top", "bottom"]
                            }],
                            transition: [{
                                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
                            }],
                            duration: [{
                                duration: V()
                            }],
                            ease: [{
                                ease: ["linear", "in", "out", "in-out", W]
                            }],
                            delay: [{
                                delay: V()
                            }],
                            animate: [{
                                animate: ["none", "spin", "ping", "pulse", "bounce", W]
                            }],
                            transform: [{
                                transform: ["", "gpu", "none"]
                            }],
                            scale: [{
                                scale: [w]
                            }],
                            "scale-x": [{
                                "scale-x": [w]
                            }],
                            "scale-y": [{
                                "scale-y": [w]
                            }],
                            rotate: [{
                                rotate: [$, W]
                            }],
                            "translate-x": [{
                                "translate-x": [C]
                            }],
                            "translate-y": [{
                                "translate-y": [C]
                            }],
                            "skew-x": [{
                                "skew-x": [z]
                            }],
                            "skew-y": [{
                                "skew-y": [z]
                            }],
                            "transform-origin": [{
                                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
                            }],
                            accent: [{
                                accent: ["auto", e]
                            }],
                            appearance: [{
                                appearance: ["none", "auto"]
                            }],
                            cursor: [{
                                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
                            }],
                            "caret-color": [{
                                caret: [e]
                            }],
                            "pointer-events": [{
                                "pointer-events": ["none", "auto"]
                            }],
                            resize: [{
                                resize: ["none", "y", "x", ""]
                            }],
                            "scroll-behavior": [{
                                scroll: ["auto", "smooth"]
                            }],
                            "scroll-m": [{
                                "scroll-m": P()
                            }],
                            "scroll-mx": [{
                                "scroll-mx": P()
                            }],
                            "scroll-my": [{
                                "scroll-my": P()
                            }],
                            "scroll-ms": [{
                                "scroll-ms": P()
                            }],
                            "scroll-me": [{
                                "scroll-me": P()
                            }],
                            "scroll-mt": [{
                                "scroll-mt": P()
                            }],
                            "scroll-mr": [{
                                "scroll-mr": P()
                            }],
                            "scroll-mb": [{
                                "scroll-mb": P()
                            }],
                            "scroll-ml": [{
                                "scroll-ml": P()
                            }],
                            "scroll-p": [{
                                "scroll-p": P()
                            }],
                            "scroll-px": [{
                                "scroll-px": P()
                            }],
                            "scroll-py": [{
                                "scroll-py": P()
                            }],
                            "scroll-ps": [{
                                "scroll-ps": P()
                            }],
                            "scroll-pe": [{
                                "scroll-pe": P()
                            }],
                            "scroll-pt": [{
                                "scroll-pt": P()
                            }],
                            "scroll-pr": [{
                                "scroll-pr": P()
                            }],
                            "scroll-pb": [{
                                "scroll-pb": P()
                            }],
                            "scroll-pl": [{
                                "scroll-pl": P()
                            }],
                            "snap-align": [{
                                snap: ["start", "end", "center", "align-none"]
                            }],
                            "snap-stop": [{
                                snap: ["normal", "always"]
                            }],
                            "snap-type": [{
                                snap: ["none", "x", "y", "both"]
                            }],
                            "snap-strictness": [{
                                snap: ["mandatory", "proximity"]
                            }],
                            touch: [{
                                touch: ["auto", "none", "manipulation"]
                            }],
                            "touch-x": [{
                                "touch-pan": ["x", "left", "right"]
                            }],
                            "touch-y": [{
                                "touch-pan": ["y", "up", "down"]
                            }],
                            "touch-pz": ["touch-pinch-zoom"],
                            select: [{
                                select: ["none", "text", "all", "auto"]
                            }],
                            "will-change": [{
                                "will-change": ["auto", "scroll", "contents", "transform", W]
                            }],
                            fill: [{
                                fill: [e, "none"]
                            }],
                            "stroke-w": [{
                                stroke: [N, _, M]
                            }],
                            stroke: [{
                                stroke: [e, "none"]
                            }],
                            sr: ["sr-only", "not-sr-only"],
                            "forced-color-adjust": [{
                                "forced-color-adjust": ["auto", "none"]
                            }]
                        },
                        conflictingClassGroups: {
                            overflow: ["overflow-x", "overflow-y"],
                            overscroll: ["overscroll-x", "overscroll-y"],
                            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                            "inset-x": ["right", "left"],
                            "inset-y": ["top", "bottom"],
                            flex: ["basis", "grow", "shrink"],
                            gap: ["gap-x", "gap-y"],
                            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                            px: ["pr", "pl"],
                            py: ["pt", "pb"],
                            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                            mx: ["mr", "ml"],
                            my: ["mt", "mb"],
                            size: ["w", "h"],
                            "font-size": ["leading"],
                            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                            "fvn-ordinal": ["fvn-normal"],
                            "fvn-slashed-zero": ["fvn-normal"],
                            "fvn-figure": ["fvn-normal"],
                            "fvn-spacing": ["fvn-normal"],
                            "fvn-fraction": ["fvn-normal"],
                            "line-clamp": ["display", "overflow"],
                            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                            "rounded-s": ["rounded-ss", "rounded-es"],
                            "rounded-e": ["rounded-se", "rounded-ee"],
                            "rounded-t": ["rounded-tl", "rounded-tr"],
                            "rounded-r": ["rounded-tr", "rounded-br"],
                            "rounded-b": ["rounded-br", "rounded-bl"],
                            "rounded-l": ["rounded-tl", "rounded-bl"],
                            "border-spacing": ["border-spacing-x", "border-spacing-y"],
                            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                            "border-w-x": ["border-w-r", "border-w-l"],
                            "border-w-y": ["border-w-t", "border-w-b"],
                            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                            "border-color-x": ["border-color-r", "border-color-l"],
                            "border-color-y": ["border-color-t", "border-color-b"],
                            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                            "scroll-mx": ["scroll-mr", "scroll-ml"],
                            "scroll-my": ["scroll-mt", "scroll-mb"],
                            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                            "scroll-px": ["scroll-pr", "scroll-pl"],
                            "scroll-py": ["scroll-pt", "scroll-pb"],
                            touch: ["touch-x", "touch-y", "touch-pz"],
                            "touch-x": ["touch"],
                            "touch-y": ["touch"],
                            "touch-pz": ["touch"]
                        },
                        conflictingClassGroupModifiers: {
                            "font-size": ["leading"]
                        }
                    }
                },
                V = (e, {
                    cacheSize: r,
                    prefix: o,
                    separator: t,
                    experimentalParseClassName: n,
                    extend: l = {},
                    override: s = {}
                }) => {
                    for (let l in X(e, "cacheSize", r), X(e, "prefix", o), X(e, "separator", t), X(e, "experimentalParseClassName", n), s) Y(e[l], s[l]);
                    for (let r in l) ee(e[r], l[r]);
                    return e
                },
                X = (e, r, o) => {
                    void 0 !== o && (e[r] = o)
                },
                Y = (e, r) => {
                    if (r)
                        for (let o in r) X(e, o, r[o])
                },
                ee = (e, r) => {
                    if (r)
                        for (let o in r) {
                            let t = r[o];
                            void 0 !== t && (e[o] = (e[o] || []).concat(t))
                        }
                },
                er = (e, ...r) => "function" == typeof e ? w(U, e, ...r) : w(() => V(U(), e), ...r),
                eo = w(U)
        }
    }
]);