! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eb75cac3-7b46-4f71-996b-e663109af516", e._sentryDebugIdIdentifier = "sentry-dbid-eb75cac3-7b46-4f71-996b-e663109af516")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3769], {
        38647: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n(24004),
                o = n(91710),
                r = n(11855),
                i = n(97237);

            function s() {
                return (0, a.jsx)("a", {
                    href: (0, o.jS)() || "/",
                    className: "shadow-style-1 fixed bottom-[20px] left-[50%] flex min-w-[124px] translate-x-[-50%] items-center justify-center gap-[6px] whitespace-nowrap rounded bg-[#37394E] px-[32px] py-[16px] text-white transition-colors hover:bg-[#32333e]",
                    target: "_blank",
                    rel: "noopener",
                    children: (0, a.jsx)(r.J, {
                        content: i.Ow,
                        size: "custom",
                        className: "w-[80px]",
                        viewBoxWidth: 119,
                        viewBoxHeight: 31
                    })
                })
            }
        },
        21441: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n(24004),
                o = n(10114);
            let r = function() {
                let {
                    initializeWithValue: e = !1,
                    defaultValue: t = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (0, o.ac)("(min-width: ".concat(640, "px)"), {
                    defaultValue: t,
                    initializeWithValue: e
                })
            };
            var i = n(91710);

            function s() {
                return (0, a.jsx)("a", {
                    className: "rounded bg-white px-[6px] py-[4px] text-[#6171FF]",
                    href: i.Qn,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Upgrade"
                })
            }

            function l() {
                let e = r();
                return (0, a.jsxs)("div", {
                    className: "sticky top-0 flex w-full items-center justify-center bg-[#6171FF] py-[8px] text-[14px] font-[470] leading-[140%] tracking-[-0.021p] text-white md:py-[4px]",
                    style: {
                        fontFamily: "Inter",
                        gap: e ? 24 : 12
                    },
                    children: [e ? (0, a.jsx)("p", {
                        children: "Link your domain, remove Create branding, and more"
                    }) : (0, a.jsx)("p", {
                        children: "Remove Create branding and more"
                    }), (0, a.jsx)(s, {})]
                })
            }
        },
        25075: function(e, t, n) {
            let a, o;
            n.d(t, {
                GeneratedAppWrapper: function() {
                    return eM
                }
            });
            var r, i, s = n(24004),
                l = n(70656),
                c = n(14978),
                d = n(7954),
                u = n(77580);
            let p = {
                    MIDDLEWARE_ONLY_ROOT_API_KEY_CLIENT_ID: d.z.string(),
                    MIDDLEWARE_ONLY_ROOT_API_KEY_CLIENT_SECRET: d.z.string(),
                    MIDDLEWARE_ONLY_AUTH_SECRET: d.z.string()
                },
                A = {
                    NODE_ENV: d.z.enum(["development", "production", "test"]),
                    FLUX_DOMAIN: d.z.string(),
                    API_BASE_URL: d.z.string(),
                    AUTH_REDIRECT_PROXY_URL: d.z.string(),
                    NEXT_PUBLIC_URL: d.z.string(),
                    NEXT_PUBLIC_HOSTED_DOMAIN: d.z.string()
                },
                m = function(e) {
                    let {
                        middleware: t,
                        runtimeMap: n
                    } = e;
                    return (0, d.G)(t, {
                        skipValidation: !0,
                        env: n
                    })
                }({
                    middleware: { ...p,
                        ...A
                    },
                    runtimeMap: {
                        NODE_ENV: "production",
                        FLUX_DOMAIN: u.env.FLUX_DOMAIN,
                        API_BASE_URL: u.env.API_BASE_URL,
                        AUTH_REDIRECT_PROXY_URL: u.env.AUTH_REDIRECT_PROXY_URL,
                        NEXT_PUBLIC_URL: "https://created.app/",
                        NEXT_PUBLIC_HOSTED_DOMAIN: "created.app",
                        MIDDLEWARE_ONLY_ROOT_API_KEY_CLIENT_ID: u.env.MIDDLEWARE_ONLY_ROOT_API_KEY_CLIENT_ID,
                        MIDDLEWARE_ONLY_ROOT_API_KEY_CLIENT_SECRET: u.env.MIDDLEWARE_ONLY_ROOT_API_KEY_CLIENT_SECRET,
                        MIDDLEWARE_ONLY_AUTH_SECRET: u.env.MIDDLEWARE_ONLY_AUTH_SECRET
                    }
                });
            n(92228), n(77580);
            var E = ((r = E || {}).CHAT_GPT = "CHAT_GPT", r.STABLE_DIFFUSION = "STABLE_DIFFUSION", r.STABLE_DIFFUSION_V3 = "STABLE_DIFFUSION_V3", r.DALL_E_3 = "DALL_E_3", r.GOOGLE_TRANSLATE = "GOOGLE_TRANSLATE", r.GOOGLE_SEARCH = "GOOGLE_SEARCH", r.IMAGE_SEARCH = "IMAGE_SEARCH", r.GOOGLE_PLACE_AUTOCOMPLETE = "GOOGLE_PLACE_AUTOCOMPLETE", r.LOCAL_BUSINESS_DATA = "LOCAL_BUSINESS_DATA", r.EMAIL_CHECK = "EMAIL_CHECK", r.EMAIL_CHECK_2 = "EMAIL_CHECK_2", r.DOMAIN_WHOIS = "DOMAIN_WHOIS", r.TEXT_TO_SPEECH = "TEXT_TO_SPEECH", r.WEATHER_BY_CITY = "WEATHER_BY_CITY", r.WEB_SCRAPING = "WEB_SCRAPING", r.PDF_GENERATION = "PDF_GENERATION", r.QR_CODE = "QR_CODE", r.TRANSCRIBE_AUDIO = "TRANSCRIBE_AUDIO", r.TRANSCRIBE_AUDIO_2 = "TRANSCRIBE_AUDIO_2", r.SCAN_DOCUMENT = "SCAN_DOCUMENT", r.GPT_VISION = "GPT_VISION", r.FILE_CONVERTER = "FILE_CONVERTER", r.SALES_TAX = "SALES_TAX", r.PRODUCT_SEARCH = "PRODUCT_SEARCH", r.TEXT_MODERATION = "TEXT_MODERATION", r.GOOGLE_GEMINI = "GOOGLE_GEMINI", r.GOOGLE_GEMINI_1_5 = "GOOGLE_GEMINI_1_5", r.GOOGLE_GEMINI_1_5_FLASH = "GOOGLE_GEMINI_1_5_FLASH", r.ANTHROPIC_CLAUDE = "ANTHROPIC_CLAUDE", r.ANTHROPIC_CLAUDE_SONNET = "ANTHROPIC_CLAUDE_SONNET", r.ANTHROPIC_CLAUDE_SONNET_3_5 = "ANTHROPIC_CLAUDE_SONNET_3_5", r.ANTHROPIC_CLAUDE_HAIKU = "ANTHROPIC_CLAUDE_HAIKU", r.GROQ = "GROQ", r.REKA = "REKA", r.COHERE_COMMAND_R_PLUS = "COHERE_COMMAND_R_PLUS", r.SEO_KEYWORD_RESEARCH = "SEO_KEYWORD_RESEARCH", r.BOOK_SEARCH = "BOOK_SEARCH", r.BASKETBALL = "BASKETBALL", r.MOVIES_AND_TV_SERIES = "MOVIES_AND_TV_SERIES", r.ANIME_AND_MANGA = "ANIME_AND_MANGA", r.CODE_RUNNER = "CODE_RUNNER", r.PLAGIARISM_CHECKER = "PLAGIARISM_CHECKER", r),
                _ = ((i = _ || {}).REACT = "react", i.NODEJS = "nodejs", i.EXPO = "expo", i),
                T = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g,
                N = e => (String(null != e ? e : "").match(T) || []).map(e => e.toLowerCase()).join("-"),
                h = e => "/integrations/".concat(N(e)),
                I = [{
                    integration: "ANIME_AND_MANGA",
                    url: h("ANIME_AND_MANGA")
                }, {
                    integration: "BOOK_SEARCH",
                    url: h("BOOK_SEARCH")
                }],
                S = e => I.some(t => e.includes(t.url)),
                C = n(23530);
            let O = function() {
                    let e;
                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                    let [o] = n;
                    return "string" == typeof o ? e = o : o instanceof Request ? e = o.url : e = "".concat(o.protocol, "//").concat(o.host).concat(o.pathname), e
                },
                R = e => e.startsWith(window.location.origin) || e.startsWith("/") || m.NEXT_PUBLIC_URL && e.startsWith(m.NEXT_PUBLIC_URL),
                g = e => {
                    var t;
                    let n = null !== (t = e.fetchFn) && void 0 !== t ? t : fetch,
                        a = Object.entries(e.headers);
                    return async function(e, t) {
                        var o;
                        let r = O(e, t);
                        if (S(r)) return n(e, { ...t,
                            headers: void 0
                        });
                        if (!R(r)) return n(e, t);
                        let i = new Headers(null !== (o = null == t ? void 0 : t.headers) && void 0 !== o ? o : {});
                        return a.forEach(e => {
                            let [t, n] = e;
                            i.set(t, n)
                        }), e instanceof Request && a.forEach(t => {
                            let [n, a] = t;
                            e.headers.set(n, a)
                        }), n(e, { ...t,
                            headers: i
                        })
                    }
                },
                f = e => {
                    let {
                        projectId: t,
                        fetchFn: n
                    } = e;
                    return (0, c.useCallback)(async function() {
                        for (var e = arguments.length, a = Array(e), o = 0; o < e; o++) a[o] = arguments[o];
                        return g({
                            headers: {
                                [C.PROJECT_ID_HEADER_NAME]: t
                            },
                            fetchFn: n
                        })(...a)
                    }, [n, t])
                },
                P = [],
                M = e => {
                    let {
                        authEnabled: t,
                        projectId: n
                    } = e, a = f({
                        projectId: n,
                        fetchFn: fetch
                    }), o = function(e) {
                        let {
                            authEnabled: t
                        } = e;
                        return (0, c.useMemo)(() => {
                            let e = l.kP,
                                n = l.eA;
                            return t ? [
                                ["SessionProvider", n],
                                ["useSession", e],
                                ["signIn", l.zB],
                                ["signOut", l.w7]
                            ] : [
                                ["useSession", () => ({
                                    data: {},
                                    status: "unauthenticated"
                                })]
                            ]
                        }, [t])
                    }({
                        authEnabled: t
                    });
                    return (0, c.useMemo)(() => [...P, ...o, ["fetch", a]], [o, a])
                };
            var L = n(31172),
                b = n(14218),
                y = n(75641);
            let v = (e, t) => !e || !(t in e),
                D = (e, t) => !!e && t in e,
                U = (e, t, n) => !!e && t in e && typeof e[t] === n,
                G = new Set,
                H = "https://".concat(b.ZP.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY, ".ucr.io/"),
                k = (0, c.forwardRef)((e, t) => {
                    let {
                        props: n
                    } = e, a = !n.src.startsWith("http") && !n.src.startsWith("blob:http"), o = a || !n.src ? function(e) {
                        var t, n;
                        let a = null !== (n = null !== (t = e.alt) && void 0 !== t ? t : e.title) && void 0 !== n ? n : e.src;
                        if (!a) return "#no-prompt";
                        let o = new URLSearchParams({
                            prompt: encodeURIComponent(a)
                        });
                        return "".concat(function(e) {
                            if (window.location.hostname.endsWith("localhost") || "preview" === b.ZP.NEXT_PUBLIC_VERCEL_ENV) return e;
                            let {
                                origin: t
                            } = window.location;
                            return "production" === b.ZP.NEXT_PUBLIC_VERCEL_ENV && (t = "https://create.xyz"), "".concat(H).concat(t).concat(e)
                        }("/api/ai-img"), "?").concat(o.toString())
                    }(n) : n.src, r = function(e) {
                        let [t, n] = (0, c.useState)(!1);
                        return (0, c.useEffect)(() => {
                            let t = !0,
                                a = new window.Image,
                                o = () => () => {
                                    G.add(e), t && n(!1)
                                };
                            return n(!0), a.onload = o(), a.onerror = o(), a.src = e, () => {
                                t = !1
                            }
                        }, [e]), t
                    }(o) && a && !G.has(o);
                    return (0, s.jsx)("img", { ...n,
                        className: (0, y.Z)(D(n, "className") ? n.className : void 0, r && "animate-pulse", U(n, "className", "string") && n.className.split(" ").some(e => e.startsWith("object-") ? "" : "object-cover")),
                        src: r ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAW5JREFUeF7t1cEJACAQxEAtWP9Wr2AV88hVEBKWm2ufOzrGwCwI0+KDFMTqURCsR0EKohnAePohBcEMYDgtpCCYAQynhRQEM4DhtJCCYAYwnBZSEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOG0kIJgBjCcFlIQzACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYTgspCGYAw2khBcEMYDgtpCCYAQynhRQEM4DhtJCCYAYwnBZSEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOG0kIJgBjCcFlIQzACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYzgOAmujRhR7VpgAAAABJRU5ErkJggg==" : o,
                        ref: t
                    })
                }),
                B = e => {
                    let {
                        props: t,
                        children: n,
                        react: a
                    } = e;
                    if (U(t, "src", "string")) return a.createElement("script", t);
                    let [o] = n;
                    return o && "string" == typeof o ? a.createElement("script", {
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }) : null
                };
            var x = e => {
                    switch (e) {
                        case "@lshay/ui":
                            return Promise.all([n.e(7353), n.e(7651), n.e(5404), n.e(6043)]).then(n.bind(n, 26043));
                        case "react-markdown":
                            return Promise.all([n.e(9961), n.e(8016)]).then(n.bind(n, 68016));
                        case "@vis.gl/react-google-maps":
                            return n.e(9185).then(n.bind(n, 59185));
                        case "pdfjs-dist":
                            return Promise.all([n.e(5526), n.e(1687), n.e(7174)]).then(n.bind(n, 28518));
                        case "recharts":
                            return Promise.all([n.e(3571), n.e(4543)]).then(n.bind(n, 84543));
                        case "@chakra-ui/react":
                            return Promise.all([n.e(7651), n.e(9523), n.e(3026)]).then(n.bind(n, 33026));
                        default:
                            throw Error("Could not find library for ".concat(e))
                    }
                },
                w = {
                    src: C.ClientIntegrationType.CHAKRA_UI,
                    version: "2.8.2",
                    transitiveDependencies: [{
                        src: "@emotion/react",
                        version: "11.11.4"
                    }, {
                        src: "@emotion/styled",
                        version: "11.11.0"
                    }, {
                        src: "framer-motion",
                        version: "11.0.8"
                    }],
                    prettyName: "Chakra UI",
                    moduleAlias: "ChakraUI",
                    description: "Design library",
                    imageFileName: "chakra-ui.png",
                    isDesignLibrary: !0,
                    extraDocumentation: "\nChakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.\nUse Chakra UI's components only if they're defined here.\n\nAlways wrap the MainComponent with ChakraProvider or things will break.\n",
                    importDetails: {
                        namedSegments: [{
                            label: "ChakraProvider",
                            documentation: "Chakra UI provider for styles. The app will not work if you don't wrap it with ChakraProvider.",
                            isReactComponent: !0
                        }, {
                            label: "AbsoluteCenter",
                            documentation: "\nReact component used to horizontally and vertically center an element\nrelative to its parent dimensions.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, AbsoluteCenterProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Accordion",
                            documentation: "\nThe wrapper that provides context and focus management\nfor all accordion items.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, AccordionProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "AccordionButton",
                            documentation: "\nAccordionButton is used expands and collapses an accordion item.\nIt must be a child of AccordionItem.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ComponentProps<AsComponent>, AccordionButtonProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "AccordionIcon",
                            documentation: "\nAccordionIcon that gives a visual cue of the open/close state of the accordion item.\nIt rotates 180deg based on the open/close state.\n\nParameters:\nprops: AccordionIconProps\n",
                            isReactComponent: !0
                        }, {
                            label: "AccordionItem",
                            documentation: "\nAccordionItem is a single accordion that provides the open-close\nbehavior when the accordion button is clicked.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, AccordionItemProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "AccordionPanel",
                            documentation: "\nAccordion panel that holds the content for each accordion.\nIt shows and hides based on the state login from the AccordionItem.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, AccordionPanelProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "AccordionProvider",
                            documentation: "\nNOTE: Exotic components are not callable.\n\nParameters:\nprops: ProviderProps<AccordionContext>\n",
                            isReactComponent: !0
                        }, {
                            label: "Alert",
                            documentation: "\nAlert is used to communicate the state or status of a\npage, feature or action\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, AlertProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "AlertDescription",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, AlertDescriptionProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "AlertIcon",
                            documentation: "\n\n\nParameters:\nprops: AlertIconProps\n",
                            isReactComponent: !0
                        }, {
                            label: "AlertTitle",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, AlertTitleProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Avatar",
                            documentation: "\nAvatar component that renders an user avatar with\nsupport for fallback avatar and name-only avatars\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ComponentProps<AsComponent>, AvatarProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "AvatarBadge",
                            documentation: "\nAvatarBadge used to show extra badge to the top-right\nor bottom-right corner of an avatar.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, AvatarBadgeProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "AvatarGroup",
                            documentation: "\nAvatarGroup displays a number of avatars grouped together in a stack.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, AvatarGroupProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Badge",
                            documentation: "\nReact component used to display notifications, messages, or\nstatuses in different shapes and sizes.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ComponentProps<AsComponent>, BadgeProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Box",
                            documentation: "\nBox is the most abstract component on top of which other chakra\ncomponents are built. It renders a div element by default.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, Omit<ChakraProps, never>, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Breadcrumb",
                            documentation: "\nBreadcrumb is used to render a breadcrumb navigation landmark.\nIt renders a nav element with aria-label set to Breadcrumb\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, BreadcrumbProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "BreadcrumbItem",
                            documentation: "\nBreadcrumbItem is used to group a breadcrumb link.\nIt renders a li element to denote it belongs to an order list of links.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, ComponentProps<AsComponent>, BreadcrumbItemProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "BreadcrumbLink",
                            documentation: "\nBreadcrumb link.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, ComponentProps<AsComponent>, BreadcrumbLinkProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "BreadcrumbSeparator",
                            documentation: "\nReact component that separates each breadcrumb link\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ComponentProps<AsComponent>, BreadcrumbSeparatorProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Button",
                            documentation: "\nButton component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ComponentProps<AsComponent>, ButtonProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "ButtonGroup",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, ButtonGroupProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Card",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, CardProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "CardBody",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, CardBodyProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "CardFooter",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, CardFooterProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "CardHeader",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, CardHeaderProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Center",
                            documentation: "\nReact component used to horizontally and vertically center its child.\nIt uses the popular display: flex centering technique.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, Omit<ChakraProps, never>, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Checkbox",
                            documentation: "\nCheckbox\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ComponentProps<AsComponent>, CheckboxProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "CheckboxGroup",
                            documentation: "\nUsed for multiple checkboxes which are bound in one group,\nand it indicates whether one or more options are selected.\n\nParameters:\nprops: CheckboxGroupProps\n",
                            isReactComponent: !0
                        }, {
                            label: "CheckboxIcon",
                            documentation: "\nCheckboxIcon is used to visually indicate the checked or indeterminate\nstate of a checkbox.\n\nParameters:\nprops: CheckboxIconProps\n"
                        }, {
                            label: "Circle",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SquareProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "CircularProgress",
                            documentation: "\nCircularProgress is used to indicate the progress of an activity.\nIt is built using svg and circle components with support for\ntheming and indeterminate state\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, CircularProgressProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "CircularProgressLabel",
                            documentation: "\nCircularProgress component label. In most cases it is a numeric indicator\nof the circular progress component's value\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, Omit<ChakraProps, never>, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "CloseButton",
                            documentation: "\nA button with a close icon.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ComponentProps<AsComponent>, CloseButtonProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Code",
                            documentation: "\nReact component to render inline code snippets.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, CodeProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Collapse",
                            documentation: "\nNOTE: Exotic components are not callable.\n\nParameters:\nprops: CollapseProps & RefAttributes<HTMLDivElement>\n",
                            isReactComponent: !0
                        }, {
                            label: "Container",
                            documentation: "\nLayout component used to wrap app or website content\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, ContainerProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Drawer",
                            documentation: "\nThe Drawer component is a panel that slides out from the edge of the screen.\nIt can be useful when you need users to complete a task or view some details without leaving the current page.\n\nParameters:\nprops: DrawerProps\n",
                            isReactComponent: !0
                        }, {
                            label: "DrawerContent",
                            documentation: "\nModalContent is used to group modal's content. It has all the\nnecessary aria-* properties to indicate that it is a modal\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, DrawerContentProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Editable",
                            documentation: "\nEditable\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, EditableProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "EditableInput",
                            documentation: "\nEditableInput\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ComponentProps<AsComponent>, EditableInputProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "EditablePreview",
                            documentation: "\nEditablePreview\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ComponentProps<AsComponent>, EditablePreviewProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "EditableTextarea",
                            documentation: "\nEditableTextarea\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, ComponentProps<AsComponent>, EditableTextareaProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Fade",
                            documentation: "\nNOTE: Exotic components are not callable.\n\nParameters:\nprops: FadeProps & RefAttributes<HTMLDivElement>\n",
                            isReactComponent: !0
                        }, {
                            label: "Flex",
                            documentation: "\nReact component used to create flexbox layouts.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, FlexProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "FormControl",
                            documentation: "\nFormControl provides context such as\nisInvalid, isDisabled, and isRequired to form elements.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, FormControlProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "FormErrorIcon",
                            documentation: "\nUsed as the visual indicator that a field is invalid or\na field has incorrect values.\n\nParameters:\nprops: MergeWithAs<SVGProps<SVGSVGElement>, ComponentProps<AsComponent>, IconProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "FormErrorMessage",
                            documentation: "\nUsed to provide feedback about an invalid input,\nand suggest clear instructions on how to fix it.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, FormErrorMessageProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "FormHelperText",
                            documentation: "\nFormHelperText\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, FormHelperTextProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "FormLabel",
                            documentation: "\nUsed to enhance the usability of form controls.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, ComponentProps<AsComponent>, FormLabelProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Grid",
                            documentation: "\nReact component used to create grid layouts.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, GridProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "GridItem",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, GridItemProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "HStack",
                            documentation: "\nA view that arranges its children in a horizontal line.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, StackProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Heading",
                            documentation: "\nHeading is used to render semantic HTML heading elements.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, ComponentProps<AsComponent>, HeadingProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Hide",
                            documentation: "\nHide wraps a component to not render if the provided media query matches.\n\nParameters:\nprops: ShowProps\n",
                            isReactComponent: !0
                        }, {
                            label: "Highlight",
                            documentation: "\nHighlight allows you to highlight substrings of a text.\n\nParameters:\nprops: HighlightProps\n",
                            isReactComponent: !0
                        }, {
                            label: "Input",
                            documentation: "\nInput\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ComponentProps<AsComponent>, InputProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "InputLeftElement",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, InputLeftElementProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "InputRightElement",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, InputRightElementProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Link",
                            documentation: "\nLinks are accessible elements used primarily for navigation.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, ComponentProps<AsComponent>, LinkProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "LinkBox",
                            documentation: "\nLinkBox is used to wrap content areas within a link while ensuring semantic html\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, LinkBoxProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "LinkOverlay",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, ComponentProps<AsComponent>, LinkOverlayProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "ListItem",
                            documentation: "\nListItem\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, ComponentProps<AsComponent>, ListItemProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "ListIcon",
                            documentation: "\nListIcon\n\nParameters:\nprops: MergeWithAs<SVGProps<SVGSVGElement>, ComponentProps<AsComponent>, IconProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Mark",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, MarkProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Menu",
                            documentation: "\nMenu provides context, state, and focus management\nto its sub-components. It doesn't render any DOM node.\n\nParameters:\nprops: MenuPropsOptional context: any\n",
                            isReactComponent: !0
                        }, {
                            label: "MenuButton",
                            documentation: "\nThe trigger for the menu list. Must be a direct child of Menu.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ComponentProps<AsComponent>, MenuButtonProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "MenuCommand",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ComponentProps<AsComponent>, MenuCommandProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "MenuDivider",
                            documentation: "\n\n\nParameters:\nprops: MenuDividerPropsOptional context: any\n",
                            isReactComponent: !0
                        }, {
                            label: "MenuGroup",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, MenuGroupProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "MenuIcon",
                            documentation: '\n\n\nParameters:\nprops: HTMLChakraProps<"span">Optional context: any\n',
                            isReactComponent: !0
                        }, {
                            label: "MenuItem",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ComponentProps<AsComponent>, MenuItemProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "MenuItemOption",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ComponentProps<AsComponent>, MenuItemOptionProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "MenuList",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, MenuListProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "MenuOptionGroup",
                            documentation: "\n\n\nParameters:\nprops: MenuOptionGroupPropsOptional context: any\n",
                            isReactComponent: !0
                        }, {
                            label: "Modal",
                            documentation: "\nModal provides context, theming, and accessibility properties\nto all other modal components.\n\nParameters:\nprops: ModalPropsOptional context: any\n",
                            isReactComponent: !0
                        }, {
                            label: "ModalContent",
                            documentation: "\nModalContent is used to group modal's content. It has all the\nnecessary aria-* properties to indicate that it is a modal\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, ModalContentProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "ModalBody",
                            documentation: "\nModalBody\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, ModalBodyProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "ModalCloseButton",
                            documentation: "\nModalCloseButton is used closes the modal.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ComponentProps<AsComponent>, CloseButtonProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "ModalFooter",
                            documentation: "\nModalFooter houses the action buttons of the modal.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, ModalFooterProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "ModalHeader",
                            documentation: "\nModalHeader\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, ModalHeaderProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "ModalOverlay",
                            documentation: "\nModalOverlay renders a backdrop behind the modal. It is\nalso used as a wrapper for the modal content for better positioning.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, ModalOverlayProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "NumberDecrementStepper",
                            documentation: "\nNumberDecrementStepper\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, NumberDecrementStepperProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "NumberIncrementStepper",
                            documentation: "\nNumberIncrementStepper\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, NumberIncrementStepperProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "NumberInput",
                            documentation: "\nNumberInput\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, NumberInputProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "NumberInputField",
                            documentation: "\nNumberInputField\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ComponentProps<AsComponent>, NumberInputFieldProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "NumberInputStepper",
                            documentation: "\nNumberInputStepper\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, NumberInputStepperProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "OrderedList",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, ComponentProps<AsComponent>, ListProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "PinInput",
                            documentation: "\nThe PinInput component is similar to the Input component, but is optimized for entering sequences of digits quickly.\n\nParameters:\nprops: PinInputProps\n",
                            isReactComponent: !0
                        }, {
                            label: "PinInputField",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ComponentProps<AsComponent>, PinInputFieldProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Popover",
                            documentation: "\nPopover is used to bring attention to specific user interface elements,\ntypically to suggest an action or to guide users through a new experience.\n\nParameters:\nprops: PopoverProps\n",
                            isReactComponent: !0
                        }, {
                            label: "PopoverAnchor",
                            documentation: "\nPopoverAnchor is element that is used as the positioning reference\nfor the popover.\n\nParameters:\nprops: { \xa0\xa0\xa0\xa0children?: ReactNode; }Optional children?: ReactNode\n",
                            isReactComponent: !0
                        }, {
                            label: "PopoverArrow",
                            documentation: "\n\n\nParameters:\nprops: PopoverArrowProps\n",
                            isReactComponent: !0
                        }, {
                            label: "PopoverBody",
                            documentation: "\nPopoverBody is the main content area for the popover. Should contain\nat least one interactive element.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, PopoverBodyProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "PopoverCloseButton",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ComponentProps<AsComponent>, CloseButtonProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "PopoverContent",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, PopoverContentProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "PopoverFooter",
                            documentation: "\n\n\nParameters:\nprops: PopoverFooterProps\n",
                            isReactComponent: !0
                        }, {
                            label: "PopoverHeader",
                            documentation: "\nPopoverHeader is the accessible header or label\nfor the popover's content, and it is first announced by screenreaders.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, PopoverHeaderProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "PopoverTrigger",
                            documentation: "\nPopoverTrigger opens the popover's content. It must be an interactive element\nsuch as button or a.\n\nParameters:\nprops: { \xa0\xa0\xa0\xa0children: ReactNode; }children: ReactNode\n",
                            isReactComponent: !0
                        }, {
                            label: "Portal",
                            documentation: "\nPortal\n\nParameters:\nprops: PortalProps\n",
                            isReactComponent: !0
                        }, {
                            label: "PortalManager",
                            documentation: "\n\n\nParameters:\nprops: PortalManagerProps\n",
                            isReactComponent: !0
                        }, {
                            label: "Progress",
                            documentation: "\nProgress (Linear)\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, ProgressProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "ProgressLabel",
                            documentation: "\nProgressLabel is used to show the numeric value of the progress.\n\nParameters:\nprops: ProgressLabelPropsOptional context: any\n",
                            isReactComponent: !0
                        }, {
                            label: "Radio",
                            documentation: "\nRadio component is used in forms when a user needs to select a single value from\nseveral options.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ComponentProps<AsComponent>, RadioProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "RadioGroup",
                            documentation: "\nUsed for multiple radios which are bound in one group,\nand it indicates which option is selected.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, RadioGroupProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "RangeSlider",
                            documentation: "\nThe Slider is used to allow users to make selections from a range of values.\nIt provides context and functionality for all slider components\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, RangeSliderProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "RangeSliderFilledTrack",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, RangeSliderInnerTrackProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "RangeSliderMark",
                            documentation: "\nSliderMark is used to provide names for specific Slider\nvalues by defining labels or markers along the track.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, RangeSliderMarkProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "RangeSliderThumb",
                            documentation: "\nSlider component that acts as the handle used to select predefined\nvalues by dragging its handle along the track\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, RangeSliderThumbProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "RangeSliderTrack",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, RangeSliderTrackProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "RequiredIndicator",
                            documentation: '\nUsed to show a "required" text or an asterisks (*) to indicate that\na field is required.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ComponentProps<AsComponent>, RequiredIndicatorProps, AsComponent>\n',
                            isReactComponent: !0
                        }, {
                            label: "ScaleFade",
                            documentation: "\nNOTE: Exotic components are not callable.\n\nParameters:\nprops: ScaleFadeProps & RefAttributes<HTMLDivElement>\n",
                            isReactComponent: !0
                        }, {
                            label: "Select",
                            documentation: "\nReact component used to select one item from a list of options.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, ComponentProps<AsComponent>, SelectProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Show",
                            documentation: "\nShow wraps a component to render if the provided media query matches.\n\nParameters:\nprops: ShowProps\n",
                            isReactComponent: !0
                        }, {
                            label: "SimpleGrid",
                            documentation: "\nSimpleGrid\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SimpleGridProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Skeleton",
                            documentation: "\nSkeleton is used to display the loading state of some component.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SkeletonProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "SkeletonCircle",
                            documentation: "\nSkeletonCircle is used to display the loading state in the form of a circular avatar.\n\nParameters:\nprops: SkeletonPropsOptional context: any\n",
                            isReactComponent: !0
                        }, {
                            label: "SkeletonText",
                            documentation: "\nSkeletonText is used to display the loading state in the form of text.\n\nParameters:\nprops: SkeletonTextPropsOptional context: any\n",
                            isReactComponent: !0
                        }, {
                            label: "Slide",
                            documentation: "\nNOTE: Exotic components are not callable.\n\nParameters:\nprops: SlideProps & RefAttributes<HTMLDivElement>\n",
                            isReactComponent: !0
                        }, {
                            label: "Slider",
                            documentation: "\nThe Slider is used to allow users to make selections from a range of values.\nIt provides context and functionality for all slider components\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SliderProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "SliderFilledTrack",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SliderInnerTrackProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "SliderMark",
                            documentation: "\nSliderMark is used to provide names for specific Slider\nvalues by defining labels or markers along the track.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SliderMarkProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "SliderThumb",
                            documentation: "\nSlider component that acts as the handle used to select predefined\nvalues by dragging its handle along the track\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SliderThumbProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "SliderTrack",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SliderTrackProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Spacer",
                            documentation: "\nA flexible flex spacer that expands along the major axis of its containing flex layout.\nIt renders a div by default, and takes up any available space.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, Omit<ChakraProps, never>, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Spinner",
                            documentation: "\nSpinner is used to indicate the loading state of a page or a component,\nIt renders a div by default.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SpinnerProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Square",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, SquareProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Stack",
                            documentation: "\nStacks help you easily create flexible and automatically distributed layouts\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, StackProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "StackDivider",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, Omit<ChakraProps, never>, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "StackItem",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, Omit<ChakraProps, never>, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Step",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, {}, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "StepDescription",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, ComponentProps<AsComponent>, {}, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "StepIcon",
                            documentation: "\n\n\nParameters:\nprops: IconProps\n",
                            isReactComponent: !0
                        }, {
                            label: "StepIndicator",
                            documentation: "\n\n\nParameters:\nprops: StepIndicatorProps\n",
                            isReactComponent: !0
                        }, {
                            label: "StepIndicatorContent",
                            documentation: "\n\n\nParameters:\n\n",
                            isReactComponent: !0
                        }, {
                            label: "StepNumber",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, {}, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "StepSeparator",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, {}, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "StepStatus",
                            documentation: "\n\n\nParameters:\nprops: StepStatusProps\n"
                        }, {
                            label: "StepTitle",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, ComponentProps<AsComponent>, {}, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Stepper",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, StepperProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Switch",
                            documentation: '\nThe Switch component is used as an alternative for the checkbox component for switching between "enabled" and "disabled" states.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ComponentProps<AsComponent>, SwitchProps, AsComponent>\n',
                            isReactComponent: !0
                        }, {
                            label: "Tab",
                            documentation: "\nTab button used to activate a specific tab panel. It renders a button,\nand is responsible for automatic and manual selection modes.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ComponentProps<AsComponent>, TabProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "TabIndicator",
                            documentation: "\nTabIndicator\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, TabIndicatorProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "TabList",
                            documentation: "\nTabList is used to manage a list of tab buttons. It renders a div by default,\nand is responsible the keyboard interaction between tabs.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, TabListProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "TabPanel",
                            documentation: "\nTabPanel\nUsed to render the content for a specific tab.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, TabPanelProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "TabPanels",
                            documentation: "\nTabPanel\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, TabPanelsProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Table",
                            documentation: "\nThe Table component is used to organize and display data efficiently. It renders a <table> element by default.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, ComponentProps<AsComponent>, TableProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "TableCaption",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, ComponentProps<AsComponent>, TableCaptionProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "TableContainer",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, TableContainerProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Tabs",
                            documentation: "\nTabs\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, TabsProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Tag",
                            documentation: "\nThe tag component is used to label or categorize UI elements.\nTo style the tag globally, change the styles in theme.components.Tag\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ComponentProps<AsComponent>, TagProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Tbody",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, ComponentProps<AsComponent>, TableBodyProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Td",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, ComponentProps<AsComponent>, TableCellProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Text",
                            documentation: "\nUsed to render texts or paragraphs.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, ComponentProps<AsComponent>, TextProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Textarea",
                            documentation: "\nTextarea is used to enter an amount of text that's longer than a single line\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, ComponentProps<AsComponent>, TextareaProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Tfoot",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, ComponentProps<AsComponent>, TableFooterProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Th",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, ComponentProps<AsComponent>, TableColumnHeaderProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Thead",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, ComponentProps<AsComponent>, TableHeadProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Tooltip",
                            documentation: "\nTooltips display informative text when users hover, focus on, or tap an element.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, TooltipProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Tr",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, ComponentProps<AsComponent>, TableRowProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "UnorderedList",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>, ComponentProps<AsComponent>, ListProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "VStack",
                            documentation: "\nA view that arranges its children in a vertical line.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, StackProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "VisuallyHidden",
                            documentation: "\nVisually hidden component used to hide\nelements on screen\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ComponentProps<AsComponent>, Omit<ChakraProps, never>, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "VisuallyHiddenInput",
                            documentation: "\nVisually hidden input component for designing\ncustom input components using the html input\nas a proxy\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ComponentProps<AsComponent>, Omit<ChakraProps, never>, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "Wrap",
                            documentation: "\nLayout component used to stack elements that differ in length\nand are liable to wrap.\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ComponentProps<AsComponent>, WrapProps, AsComponent>\n",
                            isReactComponent: !0
                        }, {
                            label: "WrapItem",
                            documentation: "\n\n\nParameters:\nprops: MergeWithAs<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, ComponentProps<AsComponent>, WrapItemProps, AsComponent>\n",
                            isReactComponent: !0
                        }]
                    }
                },
                F = {
                    src: C.ClientIntegrationType.GOOGLE_MAPS,
                    version: "0.8.3",
                    prettyName: "Google Maps",
                    moduleAlias: "ReactGoogleMaps",
                    imageFileName: "google-maps.png",
                    extraDocumentation: '\nProvides very simple bindings to the google maps api and lets you use it in your app as React components.\n\nYou should access the api key via `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.\n\n### Note\n\n- You should only use the hooks and components from this library within the confines of the APIProvider, as it\'s needed to provide the context to children.\n- You should not instantiate methods from google map javascript api in React.useEffect. You should only do so in the onLoad callback of ReactGoogleMaps.APIProvider\nor an event callback like onClick or onSubmit of other components.\n\n### Examples\n\n#### Searching for location\nUse places and autocomplete to search for location by search query\n\n```jsx\nfunction MainComponent() {\n  const [center, setCenter] = React.useState();\n  const ref = React.useRef(null);\n\n  return (\n    <div className="h-screen">\n      <input ref={ref} placeholder="Input location" />\n      <ReactGoogleMaps.APIProvider\n        apiKey={NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}\n        libraries={["places"]}\n        onLoad={() => {\n          const autocomplete = new google.maps.places.Autocomplete(\n            ref.current!,\n          );\n          google.maps.event.addListener(\n            autocomplete,\n            "place_changed",\n            function () {\n              const place = autocomplete.getPlace();\n              setCenter(place.geometry?.location);\n            },\n          );\n        }}\n      >\n        <ReactGoogleMaps.Map\n          id="map"\n          mapId="map"\n          center={center}\n          onCenterChanged={(event) => setCenter(event.detail.center)}\n          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}\n          zoom={8}\n        />\n      </ReactGoogleMaps.APIProvider>\n    </div>\n  );\n}\n```\n\n### Placing markers on searched location\nUse places and autocomplete to search for location and set markers\n\n```jsx\nfunction MainComponent() {\n  const [center, setCenter] = React.useState();\n  const ref = React.useRef(null);\n  const [markerPositions, setMarkerPositions] = React.useState([]);\n\n  return (\n    <div className="h-screen">\n      <input ref={ref} placeholder="Input location" />\n      <ReactGoogleMaps.APIProvider\n        apiKey={NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}\n        libraries={["places"]}\n        onLoad={() => {\n          const autocomplete = new google.maps.places.Autocomplete(ref.current);\n          google.maps.event.addListener(\n            autocomplete,\n            "place_changed",\n            function () {\n              const place = autocomplete.getPlace();\n\n              setMarkerPositions((prev) => [...prev, place.geometry?.location]);\n              setCenter(place.geometry?.location);\n            },\n          );\n        }}\n      >\n        <ReactGoogleMaps.Map\n          id="map"\n          mapId="map"\n          center={center}\n          onCenterChanged={(event) => setCenter(event.detail.center)}\n          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}\n          zoom={8}\n        >\n          {markerPositions.map((position) => (\n            <ReactGoogleMaps.AdvancedMarker position={position} />\n          ))}\n        </ReactGoogleMaps.Map>\n      </ReactGoogleMaps.APIProvider>\n    </div>\n  );\n}\n```\n\n### Set position based on place id\n\nUse place id and Geocoder api to search and view location\n\n```jsx\nfunction MainComponent() {\n  const [center, setCenter] = useState();\n\n  function onClick() {\n    const geocoder = new window.google.maps.Geocoder();\n\n    geocoder\n      .geocode({ placeId: myPlaceId})\n      .then(({ results }) => {\n        if (results[0]) {\n          setCenter(results[0].geometry.location);\n        } else {\n          window.alert("No results found");\n        }\n      })\n      .catch((e) => window.alert("Geocoder failed due to: " + e));\n  }\n\n  return (\n    <div className="h-screen">\n      <button onClick={onClick}>Go to Position</button>\n      <ReactGoogleMaps.APIProvider apiKey={NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>\n        <ReactGoogleMaps.Map\n          id="map"\n          mapId="map"\n          center={center}\n          onCenterChanged={(event) => setCenter(event.detail.center)}\n          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}\n          zoom={8}\n        />\n      </ReactGoogleMaps.APIProvider>\n    </div>\n  );\n}\n```\n\n### Display custom information window via autocomplete\nUse AdvancedMarker and InfoWindow to display custom info based on selection\n\n```jsx\nfunction MainComponent() {\n  const [center, setCenter] = React.useState();\n  const [info, setInfo] = React.useState("");\n  const ref = React.useRef(null);\n  const [showInfoWindow, setShowInfoWindow] = React.useState(false);\n  const [selectedPosition, setSelectedPosition] = React.useState();\n\n  return (\n    <div className="h-screen flex flex-col items-center justify-center">\n      <input\n        ref={ref}\n        className="mb-4 p-2 border-2 border-gray-300 rounded"\n        placeholder="Input location"\n        onChange={() => setShowInfoWindow(false)}\n      />\n      <ReactGoogleMaps.APIProvider\n        apiKey={NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}\n        libraries={["places"]}\n        onLoad={() => {\n          const autocomplete = new google.maps.places.Autocomplete(ref.current);\n          google.maps.event.addListener(\n            autocomplete,\n            "place_changed",\n            function () {\n              const place = autocomplete.getPlace();\n              if (!place.geometry) {\n                window.alert(\n                  "No details available for input: \'" + place.name + "\'",\n                );\n                return;\n              }\n              setSelectedPosition(place.geometry.location);\n              setShowInfoWindow(true);\n              setCenter(place.geometry.location);\n              setInfo(\n                `<div class="p-2"><strong>${place.name}</strong><br/>${place.formatted_address}</div>`,\n              );\n            },\n          );\n        }}\n      >\n        <ReactGoogleMaps.Map\n          id="map"\n          mapId="map"\n          center={center}\n          onCenterChanged={(e) => setCenter(e.detail.center)}\n          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}\n          zoom={8}\n          className="w-full h-full"\n        >\n          {selectedPosition && (\n            <ReactGoogleMaps.AdvancedMarker position={selectedPosition}>\n              {showInfoWindow && (\n                <ReactGoogleMaps.InfoWindow\n                  position={selectedPosition}\n                  onCloseClick={() => setShowInfoWindow(false)}\n                >\n                  <div dangerouslySetInnerHTML={{ __html: info }} />\n                </ReactGoogleMaps.InfoWindow>\n              )}\n            </ReactGoogleMaps.AdvancedMarker>\n          )}\n        </ReactGoogleMaps.Map>\n      </ReactGoogleMaps.APIProvider>\n    </div>\n  );\n}\n\n```\n\n',
                    envVars: ["NEXT_PUBLIC_GOOGLE_MAPS_API_KEY"],
                    description: "Embed interactive maps",
                    importDetails: {
                        namedSegments: [{
                            label: "APIProvider",
                            documentation: "\nThe APIProvider is our component to load the Google Maps JavaScript API.\n\nThis component can be added at any level of the application (typically somewhere at the top), and it will render all child components unmodified.\n\nProps\n\napiKey: string (required, first-render only)\nversion?: string (first-render only)\nregion?: string (first-render only)\nlanguage?: string (first-render only)\nauthReferrerPolicy?: string (first-render only)\n/**\n  * List of libraries to load dynamically\n  * Here's the full list\n  * core (google.maps.CoreLibrary)\n  * maps (google.maps.MapsLibrary)\n  * places (google.maps.PlacesLibrary)\n  * geocoding (google.maps.GeocodingLibrary)\n  * routes (google.maps.RoutesLibrary)\n  * marker (google.maps.MarkerLibrary)\n  * geometry (google.maps.GeometryLibrary)\n  * elevation (google.maps.ElevationLibrary)\n  * streetView (google.maps.StreetViewLibrary)\n  * journeySharing (google.maps.JourneySharingLibrary)\n  * drawing (google.maps.DrawingLibrary)\n  * visualization (google.maps.VisualizationLibrary)\n  *\n  * @example ['places']\n */\n\nlibraries?: string[]\n\n/**\n  * A callback that is called once the Maps JavaScript API finished loading.\n  * Use this to call any methods on the global window.google safely\n  *\n  * @example\n  * ```jsx\n  * onLoad={() => {\n  * // you can access all the libraries from google maps here safely\n  *  const autocomplete = new google.maps.places.Autocomplete(ref.current);\n  * // you can add event listeners too\n  *  google.maps.event.addListener(\n  *     autocomplete,\n  *     \"place_changed\",\n  *     function () {\n  *       const place = autocomplete.getPlace();\n  *\n  *       // use the place data as you see fit\n  *       setCenter(place.geometry?.location);\n  *     },\n  *   );\n  * }}\n  * ```\n */\nonLoad: () => void\n",
                            isReactComponent: !0
                        }, {
                            label: "Map",
                            documentation: '\nReact component to render a Google Map. It can be placed as a child into any other component, but it has to be somewhere inside an <APIProvider> container.\n\nProps\nid: string\nmapId: string // you must always set this to "map" unless there\'s multiple maps on the screen.\nstyle?: React.CSSProperties\nclassName?: string\ncenter?: google.maps.LatLngLiteral\nonCenterChanged?: ({detail: center}) => setCenter(center)\nzoom?: number\nonZoomChanged?: ({detail: zoom}) => setZoom(zoom)\nheading?: number\ntilt?: number\ncontrolled?: boolean\n\ndefaultCenter, defaultZoom, defaultHeading, defaultTilt?: { lat: number, lng: number }\nThe initial state of the camera. This can be used to leave the map component in uncontrolled mode.\n\ndefaultBounds?: google.maps.LatLngBoundsLiteral\nAn alternative way to specify the region that should initially be visible on the map. Has otherwise the same effect as defaultCenter and defaultZoom.\n',
                            isReactComponent: !0
                        }, {
                            label: "MapControl",
                            documentation: "\nThe MapControl component can be used to render components into the control-containers of a map instance.\n\nProps:\nposition: ControlPosition\n\nwhere ControlPosition is defined as follows\n\n```ts\nenum ControlPosition {\n  TOP_CENTER='TOP_CENTER',\n  TOP_LEFT='TOP_LEFT',\n  TOP_RIGHT='TOP_RIGHT',\n  LEFT_TOP='LEFT_TOP',\n  RIGHT_TOP='RIGHT_TOP',\n  LEFT_CENTER='LEFT_CENTER',\n  RIGHT_CENTER='RIGHT_CENTER',\n  LEFT_BOTTOM='LEFT_BOTTOM',\n  RIGHT_BOTTOM='RIGHT_BOTTOM',\n  BOTTOM_CENTER='BOTTOM_CENTER',\n  BOTTOM_LEFT='BOTTOM_LEFT',\n  BOTTOM_RIGHT='BOTTOM_RIGHT',\n}\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "InfoWindow",
                            documentation: "\nInfo Windows can either be displayed alone, or in connection with a Marker that will be used as an anchor.\nThe content of the InfoWindow can either be text or any JSX and is specified as the children of the InfoWindow component.\n\nThis should always be rendered as a child of the AdvancedMarker component.\n\nProps\nonCloseClick: () => void; // adds the event listener 'closeclick' to the info window\n/**\n  * AdvancedMarker instance to be used as an anchor\n  * You can render this component as a child of AdvancedMarker instead\n */\nanchor: google.maps.marker.AdvancedMarkerElement | null; //\n\nposition?: { lat: number, lng: number }; // the position of the advanced marker wrapping this window\n        ",
                            isReactComponent: !0
                        }, {
                            label: "AdvancedMarker",
                            documentation: "\nTo use the Advanced Marker View component, it is necessary to add a custom mapId to the map options.\n\nProps\nmapId?: string; // custom map id\nposition?: { lat: number, lng: number };\nonClick?: (e: google.maps.MapMouseEvent) => void;\nonDrag?: (e: google.maps.MapMouseEvent) => void;\nonDragStart?: (e: google.maps.MapMouseEvent) => void;\nonDragEnd?: (e: google.maps.MapMouseEvent) => void;\nonMouseOver?: (e: google.maps.MapMouseEvent) => void;\nonMouseOut?: (e: google.maps.MapMouseEvent) => void;\n",
                            isReactComponent: !0
                        }]
                    },
                    codeViewForExport: {
                        imports: 'import * as ReactGoogleMaps from "@/libraries/react-google-maps";',
                        filename: "react-google-maps.tsx",
                        foldername: "libraries"
                    }
                },
                K = {
                    src: C.ClientIntegrationType.PDFJS,
                    version: "3.11.174",
                    prettyName: "PDF Parser",
                    description: "Convert pdf to text",
                    moduleAlias: "PDFParser",
                    imageFileName: "pdf-generation.png",
                    importDetails: {
                        namedSegments: [{
                            label: "extractTextFromPDF",
                            documentation: '\nAsynchronously extracts text from a pdf file.\n\nThis function reads a PDF file represented by a `File` object and attempts to extract\nall text content from each page of the PDF.\n\n@param {File} file - The PDF file from which text is to be extracted.\n@returns {Promise<string|undefined>}\n\nconst file = new File([yourBlob], "example.pdf", { type: "application/pdf" });\nextractTextFromPDF(file).then(text => {\n  if (text) {\n    console.log("Extracted Text:", text);\n  } else {\n    console.log("No text found or an error occurred.");\n  }\n});\n'
                        }]
                    },
                    codeViewForExport: {
                        imports: 'import * as PDFParser from "@/libraries/pdf-parser";',
                        filename: "pdf-parser.ts",
                        foldername: "libraries"
                    }
                },
                W = {
                    src: C.ClientIntegrationType.REACT_MARKDOWN,
                    imageFileName: "markdown.png",
                    version: "9.0.0",
                    prettyName: "Markdown Renderer",
                    description: "Display markdown content",
                    moduleAlias: "MarkdownRenderer",
                    transitiveDependencies: [{
                        src: "remark-gfm",
                        version: "4.0.0"
                    }],
                    importDetails: {
                        namedSegments: [{
                            label: "Display",
                            documentation: '\nThis component will allow you to render markdown content safely in react.\n\nProps:\nclassName?: string; // styles for the  wrapper component\nchildren?: string; // markdown content to render\n/*\n * Map tag names to components.\n * Key is html tag name and value is a custom component used to customize it.\n * Only use when user asks to override styles.\n *\n * @example\n * ```\n * // user wants h1 to be large and green\n * {\n * h1: ({ node, ...props }) => (\n *  <h1 className="text-4xl text-green-500 font-semibold leading-snug" {...props} />\n * ),\n * }\n * ```\n*/\ncomponents?: Record<string, (props: any) => ReactNode> \n\nExample:\n\n```jsx\nfunction MainContent() {\n  const markdown = `# Hello there\n\n### who are you?\n\n**I\'m Create.xyz**\n\n[Create](https://create.xuz)\nMan, imagine how *annoying* it would be to have to write **all** of this using HTML tags\n\n> A block quote with ~strikethrough~ and a URL: https://reactjs.org.\n\n* Lists\n* [ ] todo\n* [x] done\n\nA table:\n\n| a | b |\n| - | - |\n`;\n\n  return <MarkdownRenderer.Display>{markdown}</MarkdownRenderer.Display>\n}\n```\n\n      ',
                            isReactComponent: !0
                        }]
                    },
                    codeViewForExport: {
                        foldername: "libraries",
                        filename: "markdown-renderer.tsx",
                        imports: "import * as MarkdownRenderer from '@/libraries/markdown-renderer'"
                    }
                },
                j = [{
                    src: C.ClientIntegrationType.RECHARTS,
                    moduleAlias: "Recharts",
                    version: "^2.12.0",
                    prettyName: "Charts",
                    description: "Add charts and graphs",
                    imageFileName: "recharts.png",
                    importDetails: {
                        namedSegments: [{
                            label: "AreaChart",
                            documentation: "\nRenders an AreaChart component used for displaying graphical data as areas.\n\n@prop {string|number} [xAxisId=0] - The id of the x-axis.\n@prop {string|number} [yAxisId=0] - The id of the y-axis.\n@prop {string|number} [x]\n@prop {string|number} [y]\n@prop {'discard'|'hidden'|'visible'|'extendDomain'} [ifOverflow='discard'] - Determines the overflow display mode.\n@prop {Object} [viewBox] - Defines the viewing area.\n@prop {Object} [xAxis] - Configurations of the x-axis.\n@prop {Object} [yAxis] - Configurations of the y-axis.\n@prop {string|number|ReactElement|Function} [label] - Specifies the label content.\n@prop {boolean} [isFront=false] - Places the line in front when true.\n@prop {string|number} [strokeWidth=1] - Sets the stroke width.\n@prop {Array} [segment] - Defines custom ReferenceLines.\n",
                            isReactComponent: !0
                        }, {
                            label: "BarChart",
                            documentation: "\nRenders a BarChart with various configurable properties.\n\n@prop {'horizontal'|'vertical'} [layout='horizontal']\n@prop {string} [syncId]\n@prop {('index'|'value'|Function)} [syncMethod='index']\n@prop {number} width\n@prop {number} height\n@prop {Array<Object>} data\n@prop {{top: number, right: number, bottom: number, left: number}} [margin={top: 5, right: 5, bottom: 5, left: 5}]\n@prop {(number|string)} [barCategoryGap='10%']\n@prop {(number|string)} [barGap=4]\n@prop {number} [barSize]\n@prop {number} [maxBarSize]\n@prop {('expand'|'none'|'wiggle'|'silhouette'|'sign')} [stackOffset='none']\n",
                            isReactComponent: !0
                        }, {
                            label: "LineChart",
                            documentation: "\nRenders a LineChart component from recharts. It displays line series data as a chart.\n\n@prop {'horizontal'|'vertical'} [layout='horizontal']\n@prop {string} [syncId]\n@prop {'index'|'value'|function} [syncMethod='index']\n@prop {number} width\n@prop {number} height\n@prop {Array<Object>} data\n@prop {Object} [margin={ top: 5, right: 5, bottom: 5, left: 5 }]\n",
                            isReactComponent: !0
                        }, {
                            label: "ComposedChart",
                            documentation: "\nA chart that is composed of line, area, and bar charts.\n\n@prop {'horizontal'|'vertical'} [layout='horizontal']\n@prop {string} [syncId]\n@prop {'index'|'value'|function} [syncMethod='index']\n@prop {number} width\n@prop {number} height\n@prop {Array<Object>} data\n@prop {Object} [margin={ top: 5, right: 5, bottom: 5, left: 5 }]\n@prop {'10%'|Number} [barCategoryGap='10%']\n@prop {number} [barGap=4]\n",
                            isReactComponent: !0
                        }, {
                            label: "PieChart",
                            documentation: "\nRenders a PieChart component using the Recharts library.\n\n@prop {Object} props\n@prop {number} props.width\n@prop {number} props.height\n@prop {Object} [props.margin={ top: 0, right: 0, bottom: 0, left: 0 }]\n",
                            isReactComponent: !0
                        }, {
                            label: "RadarChart",
                            documentation: "\nRenders a RadarChart with customizable options.\n\n@prop {number} width\n@prop {number} height\n@prop {Object[]} data\n",
                            isReactComponent: !0
                        }, {
                            label: "RadialBarChart",
                            documentation: "\nRenders a RadialBarChart component using the recharts library.\n\n@prop {number} width\n@prop {number} height\n@prop {Array<Object>} data\n@prop {string|number} [innerRadius='10%']\n@prop {string|number} [outerRadius='80%']\n@prop {Object} [margin={top: 5, right: 5, bottom: 5, left: 5}]\n@prop {string|number} [barCategoryGap='10%']\n",
                            isReactComponent: !0
                        }, {
                            label: "ScatterChart",
                            documentation: "\nScatterChart Component. Renders a scatter chart using recharts library.\n\n@prop {Number} width\n@prop {Number} height\n@prop {Object} [margin={top: 5, right: 5, bottom: 5, left: 5}]\n",
                            isReactComponent: !0
                        }, {
                            label: "FunnelChart",
                            documentation: "\nRepresents a FunnelChart component in Recharts.\n\n@prop {Object} props\n@prop {'centric'} [props.layout='centric']\n@prop {number} props.width\n@prop {number} props.height\n@prop {Object} [props.margin={ top: 5, right: 5, bottom: 5, left: 5 }]\n",
                            isReactComponent: !0
                        }, {
                            label: "Treemap",
                            documentation: "\n`Treemap` is a component for visualizing hierarchical data.\n\n@prop {number} width\n@prop {number} height\n@prop {Array} data\n@prop {string|number|Function} dataKey\n@prop {number} aspectRatio\n",
                            isReactComponent: !0
                        }, {
                            label: "Sankey",
                            documentation: "\nRepresents a SankeyChart component used to render a Sankey chart.\n\n@prop {Object} props\n@prop {number|string} [props.width='100%']\n@prop {number|string} [props.height='100%']\n@prop {Object} props.data\n",
                            isReactComponent: !0
                        }, {
                            label: "Legend",
                            documentation: "\nRenders a Legend for charts in Recharts.\n\n@prop {Object} props\n@prop {'horizontal'|'vertical'} [props.layout='horizontal']\n@prop {'left'|'center'|'right'} [props.align='center']\n",
                            isReactComponent: !0
                        }, {
                            label: "ResponsiveContainer",
                            documentation: "\nThe ResponsiveContainer is a wrapper component that allows charts to adapt to the size of their parent container.\n\n@prop {Object} props\n@prop {('percentage' | number)} [props.width]\n@prop {('percentage' | number)} [props.height]\n",
                            isReactComponent: !0
                        }, {
                            label: "Tooltip",
                            documentation: "\nRenders a Tooltip using HTML nodes.\n\n@prop {Object} props\n@prop {string} [props.separator=' : ']\n@prop {number} [props.offset=10]\n@prop {boolean} [props.filterNull=true]\n",
                            isReactComponent: !0
                        }, {
                            label: "Cell",
                            documentation: "\nThe `Cell` component is used for specifying attributes for individual elements in graphs.\n\n@prop {string} [props.fill]\n@prop {string} [props.stroke]\n@prop {number|string} [props.strokeWidth]\n",
                            isReactComponent: !0
                        }, {
                            label: "Text",
                            documentation: "\nThe `<Text />` component is used to render text elements within a chart.\n\n@prop {boolean} [scaleToFit=false]\n@prop {number} [angle]\n@prop {number} [width]\n@prop {'start' | 'middle' | 'end' | 'inherit'} [textAnchor='start']\n",
                            isReactComponent: !0
                        }, {
                            label: "Label",
                            documentation: "\nRepresents a Label component in Recharts.\n\n@prop {string | number} [value]\n@prop {'top'|'left'|'right'|'bottom'|'inside'|'outside'|'insideLeft'|'insideRight'|'insideTop'|'insideBottom'|'insideTopLeft'|'insideBottomLeft'|'insideTopRight'|'insideBottomRight'|'insideStart'|'insideEnd'|'end'|'center'} [position='insideBottom']\n",
                            isReactComponent: !0
                        }, {
                            label: "LabelList",
                            documentation: "\nLabelList component is used to render a list of labels within various parent components.\n\n@prop {string|number|Function} dataKey\n",
                            isReactComponent: !0
                        }, {
                            label: "Customized",
                            documentation: "\nRepresents a `Customized` component in Recharts used for rendering customized content.\n\n@prop {(ReactElement|Function)} component\n",
                            isReactComponent: !0
                        }, {
                            label: "Bar",
                            documentation: "\nRepresents an Area component in a chart.\n\n@prop {('basis'|'basisClosed'|'basisOpen'|'bumpX'|'bumpY'|'bump'|'linear'|'linearClosed'|'natural'|'monotoneX'|'monotoneY'|'monotone'|'step'|'stepBefore'|'stepAfter'|Function)} [type='linear']\n@prop {(string|number|Function)} dataKey\n",
                            isReactComponent: !0
                        }, {
                            label: "Line",
                            documentation: "\nRenders a bar(s) in a BarChart or a ComposedChart.\n\n@prop {'horizontal'|'vertical'} [layout]\n@prop {(string|number|Function)} dataKey\n",
                            isReactComponent: !0
                        }, {
                            label: "Scatter",
                            documentation: "\nScatter component for ScatterChart in Recharts.\n\n@prop {'line'|'plainline'|'square'|'rect'|'circle'|'cross'|'diamond'|'square'|'star'|'triangle'|'wye'|'none'} [legendType='circle']\n@prop {string|number} [xAxisId=0]\n@prop {string|number} [yAxisId=0]\n@prop {string|number} [zAxisId=0]\n",
                            isReactComponent: !0
                        }, {
                            label: "XAxis",
                            documentation: "\nXAxis component of Recharts library. Used within chart components.\n\n@prop {boolean} [hide=false]\n@prop {string|number|Function} [dataKey]\n@prop {string|number} [xAxisId=0]\n@prop {number} [width=0]\n@prop {number} [height=30]\n",
                            isReactComponent: !0
                        }, {
                            label: "YAxis",
                            documentation: "\nYAxis Component. Renders a Y-axis in a chart.\n\n@prop {Object} props\n@prop {boolean} [hide=false]\n@prop {string|number|Function} [dataKey]\n@prop {string|number} [yAxisId=0]\n@prop {number} [width=60]\n",
                            isReactComponent: !0
                        }, {
                            label: "ZAxis",
                            documentation: "\nRepresents the Z-axis component within a ScatterChart in Recharts.\n\n@prop {Object} props\n@prop {string|number|Function} dataKey\n@prop {string|number} [zAxisId=0]\n@prop {Array<number>} [range=[10, 10]]\n",
                            isReactComponent: !0
                        }, {
                            label: "Brush",
                            documentation: "\n`Brush` is a component used within chart components.\n\n@prop {string|number|Function} dataKey\n@prop {number} [x=0]\n@prop {number} [y=0]\n@prop {number} [width=0]\n@prop {number} [height=40]\n",
                            isReactComponent: !0
                        }, {
                            label: "CartesianAxis",
                            documentation: "\nRenders an axis in a Cartesian chart.\n\n@property {number} [x=0]\n@property {number} [y=0]\n@property {number} [width=0]\n@property {number} [height=0]\n@property {'top' | 'bottom' | 'left' | 'right'} [orientation='bottom']\n",
                            isReactComponent: !0
                        }, {
                            label: "CartesianGrid",
                            documentation: "\nRenders a polar grid within a RadarChart or RadialBarChart.\n\n@prop {number} cx\n@prop {number} cy\n@prop {number} innerRadius\n@prop {number} outerRadius\n",
                            isReactComponent: !0
                        }, {
                            label: "ReferenceLine",
                            documentation: "\nRenders a ReferenceLine component within a chart.\n\n@prop {string|number} [xAxisId=0]\n@prop {string|number} [yAxisId=0]\n@prop {string|number} [x]\n@prop {string|number} [y]\n@prop {'discard'|'hidden'|'visible'|'extendDomain'} [ifOverflow='discard']\n@prop {Object} [viewBox]\n@prop {Object} [xAxis]\n@prop {Object} [yAxis]\n@prop {string|number|ReactElement|Function} [label]\n@prop {boolean} [isFront=false]\n@prop {string|number} [strokeWidth=1]\n@prop {Array} [segment]\n",
                            isReactComponent: !0
                        }, {
                            label: "PolarAngleAxis",
                            documentation: "\nRenders an angle axis for polar charts.\n\n@prop {Object} props\n@prop {string|number|Function} props.dataKey\n@prop {number} [props.cx]\n@prop {number} [props.cy]\n",
                            isReactComponent: !0
                        }, {
                            label: "PolarGrid",
                            documentation: "\nRenders a polar grid.\n\n@prop {number} cx\n@prop {number} cy\n@prop {number} innerRadius\n@prop {number} outerRadius\n",
                            isReactComponent: !0
                        }, {
                            label: "PolarRadiusAxis",
                            documentation: "\n`PolarRadiusAxis` component for Recharts library.\n\n@prop {Object} props\n@prop {number} [props.angle=0]\n@prop {'number' | 'category'} [props.type='category']\n@prop {boolean} [props.allowDuplicatedCategory=true]\n",
                            isReactComponent: !0
                        }, {
                            label: "Cross",
                            documentation: "\nRenders a cross shape.\n\n@property {number} x\n@property {number} y\n@property {number} top\n@property {number} left\n@property {number} width\n@property {number} height\n",
                            isReactComponent: !0
                        }, {
                            label: "Curve",
                            documentation: "\nRenders a curve based on provided points.\n\n@prop {'basis' | 'basisClosed' | 'basisOpen' | 'bumpX' | 'bumpY' | 'bump' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | Function} type\n@prop {Array} points\n",
                            isReactComponent: !0
                        }, {
                            label: "Dot",
                            documentation: "\nRepresents a Dot component in a chart.\n\n@prop {Object} props\n@prop {number} props.cx\n@prop {number} props.cy\n@prop {number} props.r\n",
                            isReactComponent: !0
                        }, {
                            label: "Polygon",
                            documentation: "\nA component to draw polygons.\n\n@prop {Object[]} points\n",
                            isReactComponent: !0
                        }, {
                            label: "Rectangle",
                            documentation: "\nRepresents a Rectangle component in Recharts.\n\n@prop {number} [x=0]\n@prop {number} [y=0]\n@prop {number} [width=0]\n@prop {number} [height=0]\n@prop {(number | number[])} [radius=0]\n",
                            isReactComponent: !0
                        }, {
                            label: "Sector",
                            documentation: "\nRepresents a Sector component in Recharts.\n\n@prop {number} [cx=0]\n@prop {number} [cy=0]\n@prop {number} [innerRadius=0]\n@prop {number} [outerRadius=0]\n@prop {number} [startAngle=0]\n@prop {number} [endAngle=0]\n@prop {number} [cornerRadius=0]\n",
                            isReactComponent: !0
                        }, {
                            label: "Area",
                            documentation: "\nRenders an Area component within an AreaChart.\n\n@prop {string} dataKey\n@prop {string|number} [xAxisId=0]\n@prop {string|number} [yAxisId=0]\n@prop {'line'|'plainline'|'square'|'rect'|'circle'|'cross'|'diamond'|'square'|'star'|'triangle'|'wye'|'none'} [legendType='line']\n@prop {string} [type='linear']\n@prop {Object|boolean|ReactElement|Function} [dot=false]\n@prop {Object|boolean|ReactElement|Function} [activeDot=true]\n@prop {Object|boolean|ReactElement|Function} [label=false]\n@prop {string} [stroke='#3182bd']\n@prop {string|number} [strokeWidth=1]\n@prop {'horizontal'|'vertical'} [layout]\n@prop {number|Array} [baseLine]\n@prop {Array} [points]\n@prop {string|number} [stackId]\n@prop {boolean} [connectNulls=false]\n@prop {string|number} [unit]\n@prop {string|number} [name]\n@prop {boolean} [isAnimationActive=true]\n@prop {number} [animationBegin=0]\n@prop {number} [animationDuration=1500]\n@prop {'ease'|'ease\n",
                            isReactComponent: !0
                        }, {
                            label: "ReferenceDot",
                            documentation: "\nRenders a ReferenceDot within various chart types.\n\n@prop {string|number} [xAxisId=0]\n@prop {string|number} [yAxisId=0]\n@prop {string|number} [x]\n@prop {string|number} [y]\n@prop {'discard'|'hidden'|'visible'|'extendDomain'} [ifOverflow='discard']\n@prop {Object} [xAxis]\n@prop {Object} [yAxis]\n@prop {string|number|ReactElement|function} [label]\n@prop {boolean} [isFront=false]\n@prop {ReactElement|function} [shape]\n",
                            isReactComponent: !0
                        }, {
                            label: "ReferenceArea",
                            documentation: "\nRenders a ReferenceArea within various chart types.\n\n@prop {string|number} [xAxisId=0]\n@prop {string|number} [yAxisId=0]\n@prop {number|string} [x1]\n@prop {number|string} [x2]\n@prop {number|string} [y1]\n@prop {number|string} [y2]\n@prop {'discard'|'hidden'|'visible'|'extendDomain'} [ifOverflow='discard']\n@prop {string|number|ReactElement|Function} [label]\n@prop {ReactElement|Function} [shape]\n@prop {boolean} [isFront=false]\n",
                            isReactComponent: !0
                        }, {
                            label: "ErrorBar",
                            documentation: "\nRenders ErrorBars to indicate data variability or uncertainty.\n\n@prop {string|number|function} dataKey\n@prop {number} [width=5]\n@prop {string|number} [strokeWidth=1.5]\n@prop {string} [stroke='black']\n@prop {string} [direction]\n",
                            isReactComponent: !0
                        }, {
                            label: "Funnel",
                            documentation: "\nRenders a Funnel component within a FunnelChart.\n\n@prop {Object[]} dataArray\n@prop {string|Number|Function} dataKey\n@prop {string} nameKey\n@prop {'line'|'plainline'|'square'|'rect'|'circle'|'cross'|'diamond'|'square'|'star'|'triangle'|'wye'|'none'} [legendType='line']\n@prop {Object|ReactElement|Function|boolean} [activeShape]\n@prop {Object|ReactElement|Function|boolean} [shape]\n@prop {boolean} [isAnimationActive=true]\n@prop {number} [animationBegin=0]\n@prop {number} [animationDuration=1500]\n@prop {'ease'|'ease\n",
                            isReactComponent: !0
                        }, {
                            label: "Pie",
                            documentation: "\nRenders a Pie component within a PieChart.\n\n@prop {Number} [cxPercentage='50%']\n@prop {Number} [cyPercentage='50%']\n@prop {Number} [innerRadiusPercentage=0]\n@prop {Number} [outerRadiusPercentage='80%']\n@prop {number} [startAngleNumber=0]\n@prop {number} [endAngleNumber]\n",
                            isReactComponent: !0
                        }, {
                            label: "Radar",
                            documentation: "\nRenders a Radar component within a RadarChart.\n\n@prop {(string|number|function)} dataKey\n@prop {Array<{x: number, y: number}>} points\n@prop {(Element|function)} [shape]\n@prop {(boolean|Object|Element|function)} [dot=true]\n@prop {'line'|'plainline'|'square'|'rect'|'circle'|'cross'|'diamond'|'square'|'star'|'triangle'|'wye'|'none'} [legendType='rect']\n@prop {(boolean|Object|Element|function)} [label]\n",
                            isReactComponent: !0
                        }, {
                            label: "RadialBar",
                            documentation: "\nRenders a RadialBar component within a RadialBarChart. It can use Cell and LabelList as child components.\n\n@prop {number} [minAngle=0]\n@prop {'line'|'plainline'|'square'|'rect'|'circle'|'cross'|'diamond'|'square'|'star'|'triangle'|'wye'|'none'} [legendType='rect']\n@prop {boolean|Object|ReactElement|Function} [label=false]\n@prop {boolean|Object|ReactElement|Function} [background=false]\n@prop {Array<Object>} data\n@prop {boolean} [isAnimationActive=true]\n@prop {number} [animationBegin=0]\n@prop {number} [animationDuration=1500]\n@prop {'ease'|'ease-in'|'ease-out'|'ease-in-out'|'linear'} [animationEasing='ease']\n@prop {Function} [onClick]\n@prop {Function} [onMouseDown]\n@prop {Function} [onMouseUp]\n@prop {Function} [onMouseMove]\n@prop {Function} [onMouseOver]\n@prop {Function} [onMouseOut]\n@prop {Function} [onMouseEnter]\n@prop {Function} [onMouseLeave]\n",
                            isReactComponent: !0
                        }]
                    }
                }, F, w, {
                    src: C.ClientIntegrationType.SHADCN_UI,
                    version: "0.1.31",
                    transitiveDependencies: [{
                        src: "lucide-react",
                        version: "0.354.0"
                    }],
                    moduleAlias: "ShadcnUI",
                    imageFileName: "shadcn-ui.png",
                    prettyName: "shadcn/ui",
                    description: "Design library",
                    importDetails: {
                        namedSegments: [{
                            label: "CustomAccordion",
                            documentation: "\n### Props\ntype: 'single' | 'multiple';\ndata: {\n    content: string;\n    value: string;\n    trigger: ReactNode;\n}[];\n\n### Example\n\n```tsx\n<ShadcnUI.CustomAccordion\n  type='single'\n  data={[\n    {\n      value: 'item-1',\n      trigger: 'Is it accessible?',\n      content: 'Yes. It adheres to the WAI-ARIA design pattern.'\n    },\n    {\n      value: 'item-2',\n      trigger: 'Is it styled?',\n      content: 'Yes. It comes with default styles that matches the other components' aesthetic.'\n    },\n    {\n      value: 'item-3',\n      trigger: 'Is it animated?',\n      content: 'Yes. It's animated by default, but you can disable it if you prefer.'\n    }\n  ]} />\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "CustomAlert",
                            documentation: "\n### Props\nvariant?: 'default' | 'destructive';\nicon?: ReactNode;\ntitle: string;\ndescription: string;\n\n### Example\n\n```tsx\n<ShadcnUI.CustomAlert title='Heads up!' description='You can add components to your app using the cli.' />\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "CustomAlertDialog",
                            documentation: '\n### Props\ntitle: string;\ndescription: string;\ntriggerLabel: string;\ncancelLabel?: string;\nactionLabel: string;\n\n### Example\n```tsx\n<ShadcnUI.CustomAlertDialog\n  triggerLabel={"Show Dialog"}\n  title={"Are you absolutely sure?"}\n  description={"This action cannot be undone. This will permanently delete your account and remove your data from our servers."}\n  cancelLabel={"Cancel"}\n  actionLabel={"Continue"}\n/>\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "CustomAvatar",
                            documentation: "\n### Example\n```tsx\n<ShadcnUI.CustomAvatar src='link/to/image' fallbackLabel='John Doe' alt='@john' />\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "CustomBreadcrumb",
                            documentation: '\n### Props\nhomeLink: string;\ndropdownMenuItems: {\n  label: string;\n  onClick: () => void;\n}[];\ncomponentLink: string;\ncomponentName: string;\n\n### Example\n```tsx\n<ShadcnUI.CustomBreadcrumb\n  homeLink="/"\n  dropdownMenuItems={[\n    { label: "Documentation", onClick: () => console.log("Documentation clicked") },\n    { label: "Themes", onClick: () => console.log("Themes clicked") },\n    { label: "GitHub", onClick: () => console.log("GitHub clicked") }\n  ]}\n  componentLink="/docs/components"\n  componentName="Breadcrumb"\n/>\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "CustomCarousel",
                            documentation: '\n### Props\nitems: ReactNode[]\n\n### Example\n```tsx\n<ShadcnUI.CustomCarousel\n  items={[\n    <div className="p-1">\n      <span className="text-4xl font-semibold">One</span>\n    </div>,\n    <div className="p-1">\n      <span className="text-4xl font-semibold">Two</span>\n    </div>,\n    <div className="p-1">\n      <span className="text-4xl font-semibold">One</span>\n    </div>,\n    <div className="p-1">\n      <span className="text-4xl font-semibold">Two</span>\n    </div>,\n    <div className="p-1">\n      <span className="text-4xl font-semibold">One</span>\n    </div>,\n    <div className="p-1">\n      <span className="text-4xl font-semibold">Two</span>\n    </div>\n  ]}\n/>\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "CollapsibleSection",
                            documentation: '\n### Props\ntitle: string;\nnonCollapsedItems: ReactNode;\ncollapsedItems: ReactNode;\n\n### Example\n```tsx\n<ShadcnUI.CollapsibleSection\n  title="@peduarte starred 3 repositories"\n  nonCollapsedItems={\n    <div className="rounded-md border px-4 py-3 font-mono text-sm">\n      @radix-ui/primitives\n    </div>\n  }\n  collapsedItems={\n    <>\n      <div className="rounded-md border px-4 py-3 font-mono text-sm">\n        @radix-ui/colors\n      </div>\n      <div className="rounded-md border px-4 py-3 font-mono text-sm">\n        @stitches/react\n      </div>\n    </>\n  }\n/>\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "CommandPalette",
                            documentation: '\n<CommandPalette\n  asDialog\n  commandGroups={\n    [\n      {\n        heading: "Suggestions",\n        items: [\n          { onSelect: item => console.log(item), label: "Calendar" },\n          { onSelect: item => console.log(item), label: "Search Emoji" },\n          { onSelect: item => console.log(item), label: "Calculator" }\n        ]\n      },\n      {\n        heading: "Settings",\n        items: [\n          { onSelect: item => console.log(item), label: "Profile", shortcut: "⌘P" },\n          { onSelect: item => console.log(item), label: "Billing", shortcut: "⌘B" },\n          { onSelect: item => console.log(item), label: "Settings", shortcut: "⌘S" }\n        ]\n      }\n    ]\n  }\n/>\n',
                            isReactComponent: !0
                        }, {
                            label: "CustomContextMenu",
                            documentation: "\n### Props\ntriggerLabel: string;\nitems: MenuItemForContextMenu[];\n\nwhere MenuItemForContextMenu is defined by:\n\n```tsx\ninterface MenuItemForContextMenu {\n  label: string;\n  onSelect?: (value: Event) => void;\n  shortcut?: string;\n  disabled?: boolean;\n  subItems?: MenuItemForContextMenu[];\n}\n```\n\n### Example\n```tsx\n<ShadcnUI.CustomContextMenu\n  triggerLabel=\"Right click here\"\n  items={[\n    {\n      label: 'Edit',\n      onSelect: console.log,\n      subItems: [\n        {\n          label: 'Undo',\n          shortcut: '⌘Z',\n          disabled: false,\n          onSelect: console.log\n        },\n        {\n          label: 'Redo',\n          shortcut: '⌘⇧Z',\n          disabled: true,\n          onSelect: console.log\n        },\n        {\n          label: 'Copy',\n          shortcut: '⌘C',\n          disabled: false,\n          onSelect: console.log\n        },\n      ]\n    },\n    {\n      label: 'View',\n      onSelect: console.log,\n      subItems: [\n        {\n          label: 'Zoom In',\n          shortcut: '⌘+',\n          disabled: false,\n          onSelect: console.log\n        },\n        {\n          label: 'Zoom Out',\n          shortcut: '⌘-',\n          disabled: false,\n          onSelect: console.log\n        }\n      ]\n    }\n  ]}\n/>\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "CustomDialog",
                            documentation: '\n### Props\ntriggerButtonText: string;\ntitle: string;\ndescription: string;\nchildren: ReactNode;\nfooter: ReactNode;\nopen?: boolean;\nonOpenChange?: (newOpen: boolean) => void;\n\n### Example\n\n```tsx\n<ShadcnUI.CustomDialog\n  open={isOpen}\n  onOpenChange={setIsOpen}\n  triggerButtonText="Edit Profile"\n  title="Edit Your Profile"\n  footer={<button>Save changes</button>}\n  description="Make changes to your profile details below."\n>\n  <div className="grid gap-4 py-4">\n    <div className="grid grid-cols-4 items-center gap-4">\n      <ShadcnUI.Label htmlFor="name" className="text-right">Name</Label>\n      <ShadcnUI.Input id="name" defaultValue="John Doe" className="col-span-3" />\n    </div>\n    <div className="grid grid-cols-4 items-center gap-4">\n      <ShadcnUI.Label htmlFor="username" className="text-right">Username</Label>\n      <ShadcnUI.Input id="username" defaultValue="@johndoe" className="col-span-3" />\n    </div>\n  </div>\n</ShadcnUI.CustomDialog>\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "CustomDrawer",
                            documentation: '\n### Props\ntitle: string;\ndescription: string;\nopenButtonText?: string;\nchildren: ReactNode;\nfooter: ReactNode;\n\n### Example\n```tsx\n<ShadcnUI.CustomDrawer\n  title="Configure Settings"\n  description="Adjust your preferences below."\n  openButtonText="Configure"\n  footer={<button>Submit</button>}\n>\n  <input type="checkbox" id="setting1" name="setting1" value="Setting1" />\n  <label htmlFor="setting1">Enable Setting 1</label>\n</ShadcnUI.CustomDrawer>\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "CustomDropdown",
                            documentation: "\n### Props\ntriggerLabel: string;\nmenuLabel?: string;\nitems: MenuItemForDropdown[];\n\nwhere MenuItemForDropdown is defined by\n```tsx\ninterface MenuItemForDropdown {\n  content: ReactNode;\n  label: string;\n  onSelect: (item: string) => void;\n  shortcut?: string;\n  subItems?: MenuItemForDropdown[];\n}\n```\n\n\n### Example\n```tsx\n<ShadcnUI.CustomDropdown\n  triggerLabel=\"Open\"\n  menuLabel=\"My Account\"\n  items={[\n    { content: <User className=\"mr-2 h-4 w-4\" />, label: 'Profile', shortcut: '⇧⌘P', onSelect: console.log },\n    { content: <CreditCard className=\"mr-2 h-4 w-4\" />, label: 'Billing', shortcut: '⌘B', onSelect: console.log },\n    { content: <Settings className=\"mr-2 h-4 w-4\" />, label: 'Settings', shortcut: '⌘S', onSelect: console.log },\n    { content: <LifeBuoy className=\"mr-2 h-4 w-4\" />, label: 'Support', onSelect: console.log }\n  ]}\n/>\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "CustomMenubar",
                            documentation: "\n### Props\nmenuData: {\n  trigger: string;\n  items: MenuItemForMenubar[];\n}[];\n\nwhere MenuItemForMenubar is defined by\n```tsx\ntype MenuItemForMenubar =\n  | { type: 'item'; label: string; shortcut?: string; disabled?: boolean; onSelect: (event: Event) => void }\n  | { type: 'separator' }\n  | { type: 'submenu'; label: string; items: MenuItemForMenubar[] };\n```\n\n### Example\n```tsx\n<ShadcnUI.CustomMenubar\n  menuData={[\n    {\n      trigger: \"File\",\n      items: [\n        { type: 'item', label: \"New Tab\", shortcut: \"⌘T\", onSelect: console.log },\n        { type: 'item', label: \"New Window\", shortcut: \"⌘N\", onSelect: console.log },\n        { type: 'item', label: \"New Incognito Window\", disabled: true, onSelect: console.log },\n        { type: 'separator', },\n        {\n          type: 'submenu',\n          label: \"Share\",\n          items: [\n            { type: 'item', label: \"Email link\", onSelect: console.log },\n            { type: 'item', label: \"Messages\", onSelect: console.log },\n            { type: 'item', label: \"Notes\", onSelect: console.log }\n          ]\n        },\n        { type: 'separator' },\n        { type: 'item', label: \"Print...\", shortcut: \"⌘P\", onSelect: console.log }\n      ]\n    },\n  ]}\n/>\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "CustomHoverCard",
                            documentation: '\n### Props\ntrigger: ReactNode;\nchildren: ReactNode;\n\n### Example\n\n```tsx\n<ShadcnUI.CustomHoverCard\n  trigger={\n    <Button variant="link">Click for more!</Button>\n  }>\n  <div>\n    <h4>More Details</h4>\n    <p>This can be any content you want to put inside the hover card.</p>\n  </div>\n</ShadcnUI.CustomHoverCard>\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "CustomNavigation",
                            documentation: "\n### Props\nsections: {\n  trigger: string;\n  items: {\n    href: string;\n    title: string;\n    description: string;\n    logo?: ReactNode;\n    rowSpan?: number;\n  }[];\n}[]\n\n### Example\n```tsx\n<ShadcnUI.CustomNavigation sections={[\n  {\n    trigger: 'Getting Started',\n    items: [\n      {\n        href: '/',\n        title: 'shadcn/ui',\n        description: 'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',\n        rowSpan: 3\n      },\n      {\n        href: '/docs',\n        title: 'Introduction',\n        description: 'Re-usable components built using Radix UI and Tailwind CSS.'\n      },\n      {\n        href: '/docs/installation',\n        title: 'Installation',\n        description: 'How to install dependencies and structure your app.'\n      },\n      {\n        href: '/docs/primitives/typography',\n        title: 'Typography',\n        description: 'Styles for headings, paragraphs, lists...etc'\n      }\n    ]\n  },\n  {\n    trigger: 'Components',\n    items: [\n      {\n        href: '/',\n        title: 'TheComponents',\n        description: 'Dope components',\n      },\n    ]\n\n  }\n]} />\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "CustomTooltip",
                            documentation: "\n### Props\nchildren: ReactNode;\ncontent: ReactNode;\ndefaultOpen?: boolean;\nopen?: boolean;\nonOpenChange?: (open: boolean) => void;\n/** @default 700 */\ndelayDuration?: number;\n\n### Example\n```tsx\n<ShadcnUI.CustomTooltip content={<p>Add this item to your library</p>}>\n  <Button>hey there</Button>\n</ShadcnUI.CustomTooltip>\n```\n    ",
                            isReactComponent: !0
                        }, {
                            label: "CustomTabs",
                            documentation: '\n### Props\ntabs: {\n  label: string;\n  value: string;\n  content: React.ReactNode;\n}[];\nclassName?: string;\ndefaultValue?: string;\n\n\n### Example\n\n```tsx\n<ShadcnUI.CustomTabs\n  className="custom-class"\n  defaultValue="account"\n  tabs={[\n    {\n      label: "Account",\n      value: "account",\n      content: (\n        <div>\n          <p>Account settings and information go here. Can be a form or any other content.</p>\n        </div>\n      )\n    },\n    {\n      label: "Password",\n      value: "password",\n      content: (\n        <div>\n          <p>Password change form or information can go here.</p>\n        </div>\n      )\n    }\n  ]}\n/>\n```\n\n',
                            isReactComponent: !0
                        }, {
                            label: "CustomPagination",
                            documentation: "\n### Props\ncurrentPage: number;\ntotalPages: number;\nonPageChange: (page: number) => void;\n\n### Example\n\n```tsx\n<ShadcnUI.CustomPagination\n  currentPage={page}\n  totalPages={20}\n  onPageChange={onPageChange}\n/>\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "CustomPopover",
                            documentation: '\n### Props\ntriggerLabel?: string;\nchildren: ReactNode;\n\n### Example\n```tsx\n<ShadcnUI.CustomPopover triggerLabel=\'hi there!\' >\n  <div className="grid gap-4">\n    <div className="space-y-2">\n      <h4 className="font-medium leading-none">who</h4>\n      <p className="text-sm text-muted-foreground">\n        it\'s me\n      </p>\n    </div>\n  </div>\n</ShadcnUI.CustomPopover>\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "CustomSelect",
                            documentation: "\n### Props\nplaceholder: string;\nlabel?: string;\nvalue?: string;\nonValueChange?: (value: string) => void;\ngroups: {\n  groupName?: string;\n  items: {\n    value: string;\n    label: string;\n    disabled?: boolean;\n  }[];\n}[]\n\n### Example\n```tsx\n<ShadcnUI.CustomSelect\n  placeholder='Select an item..'\n  groups={[\n    {\n      groupName: 'Fruits',\n      items: [\n        { value: 'apple', label: 'Apple' },\n        { value: 'banana', label: 'Banana' },\n        { value: 'cherry', label: 'Cherry' },\n        { value: 'date', label: 'Date' },\n        { value: 'elderberry', label: 'Elderberry' },\n      ],\n    },\n    {\n      groupName: 'Vegetables',\n      items: [\n        { value: 'artichoke', label: 'Artichoke' },\n        { value: 'broccoli', label: 'Broccoli' },\n        { value: 'carrot', label: 'Carrot', disabled: true },\n        { value: 'daikon', label: 'Daikon' },\n        { value: 'eggplant', label: 'Eggplant' },\n      ],\n    },\n    {\n      groupName: 'Meats',\n      items: [\n        { value: 'beef', label: 'Beef' },\n        { value: 'chicken', label: 'Chicken' },\n        { value: 'duck', label: 'Duck' },\n        { value: 'elk', label: 'Elk' },\n      ],\n    },\n  ]}\n/>\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "CustomSheet",
                            documentation: '\n### Props\ntitle: string;\ndescription: string;\nbuttonLabel: string;\nchildren: ReactNode;\nfooter: ReactNode;\nopen?: boolean;\nonOpenChange?: (open: boolean) => void;\n\n### Example\n\n```tsx\n<ShadcnUI.CustomSheet\n  title="Edit Your Profile"\n  description="You can update your profile information here. Please make sure your details are current."\n  buttonLabel="Edit Profile"\n  footer={<Button onClick={() => console.log("Saving data...")}>Save Changes</Button>}\n>\n  <form>\n    <label>\n      Name:\n      <input type="text" name="name" />\n    </label>\n    <label>\n      Email:\n      <input type="email" name="email" />\n    </label>\n    {/* Add more form fields as needed */}\n  </form>\n</ShadcnUI.CustomSheet>\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "Badge",
                            documentation: '\n### Props\nvariant?: "default" | "secondary" | "outline" | "destructive" | undefined;\nchildren: string;\n\n### Example\n```tsx\nfunction BadgeDemo(): React.ReactNode {\n  return <ShadcnUI.Badge variant="outline">ShadcnUI.Badge</ShadcnUI.Badge>}\n```\n        ',
                            isReactComponent: !0
                        }, {
                            label: "Button",
                            documentation: '\n### Props\nvariant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined\nsize?: "default" | "sm" | "lg" | "icon" | null | undefined\ndisabled?: boolean | undefined // set to true for loading state\nonClick?: MouseEventHandler<HTMLButtonElement> | undefined\n\n### Example\nfunction ButtonDemo() {\n  return <ShadcnUI.Button variant="outline">ShadcnUI.Button</ShadcnUI.Button>\n}\n',
                            isReactComponent: !0
                        }, {
                            label: "Calendar",
                            documentation: '\n### Example\n```tsx\nfunction CalendarDemo(): React.ReactNode {\n  const [date, setDate] = React.useState<Date | undefined>(new Date())\n\n  return (\n    <ShadcnUI.Calendar\n      mode="single"\n      selected={date}\n      onSelect={setDate}\n      className="rounded-md border"\n    />\n  )\n}\n```\n',
                            isReactComponent: !0
                        }, {
                            label: "Checkbox",
                            documentation: '\n### Props\ndisabled?: boolean;\nid?: string;\n\n### Example\n```tsx\nfunction CheckboxDemo(): React.ReactNode {\n  return (\n    <div className="flex items-center space-x-2">\n      <ShadcnUI.Checkbox id="terms" />\n      <label\n        htmlFor="terms"\n        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"\n      >\n        Accept terms and conditions\n      </label>\n    </div>\n  )\n}\n```\n    ',
                            isReactComponent: !0
                        }, {
                            label: "RadioGroup",
                            documentation: '\n### Props\ndefaultValue?: string;\nvalue?: string;\nonValueChange?: (value: string) => void;\n\n### Example\n```tsx\nexport function RadioGroupDemo() {\n  return (\n    <ShadcnUI.RadioGroup defaultValue="comfortable">\n      <div className="flex items-center space-x-2">\n        <ShadcnUI.RadioGroupItem value="default" id="r1" />\n        <label htmlFor="r1">Default</label>\n      </div>\n      <div className="flex items-center space-x-2">\n        <ShadcnUI.RadioGroupItem value="comfortable" id="r2" />\n        <label htmlFor="r2">Comfortable</label>\n      </div>\n      <div className="flex items-center space-x-2">\n        <ShadcnUI.RadioGroupItem value="compact" id="r3" />\n        <label htmlFor="r3">Compact</Label>\n      </div>\n    </ShadcnUI.RadioGroup>\n  )\n}\n```\n    ',
                            isReactComponent: !0
                        }, {
                            label: "RadioGroupItem",
                            documentation: '\n### Props\ndisabled?: boolean;\nvalue?: string;\nid?: string;\n\n### Example\n```tsx\nexport function RadioItemDemo() {\n  return (\n    <>\n      <ShadcnUI.RadioGroupItem value="default" id="r1" />\n      <label htmlFor="r1">Default</label>\n    </>\n  )\n}\n```\n    ',
                            isReactComponent: !0
                        }, {
                            label: "Input",
                            documentation: "\n### Example\n```tsx\nfunction InputDemo(): React.ReactNode {\n\n	return <ShadcnUI.Input />\n}\n```\n    ",
                            isReactComponent: !0
                        }, {
                            label: "Label",
                            documentation: '\n### Example\n```tsx\nfunction LabelDemo(): React.ReactNode {\n\n	return <ShadcnUI.Label htmlFor="email">Your email address</ShadcnUI.Label>\n}\n```\n    ',
                            isReactComponent: !0
                        }, {
                            label: "Progress",
                            documentation: "\n### Props\nvalue: number;\n\n### Example\n```tsx\nfunction ProgressDemo(): React.ReactNode {\n  return <ShadcnUI.Progress value={33} />\n}\n```\n    ",
                            isReactComponent: !0
                        }, {
                            label: "Slider",
                            documentation: "\n### Props\ndefaultValue?: number;\nmax?: number;\nstep?: number;\nvalue?: number[];\nonValueChange?: (value: number[]) => void;\n\n### Example\n```tsx\nfunction SliderDemo(): React.ReactNode {\n\n  return <ShadcnUI.Slider defaultValue={[33]} max={100} step={1} />\n}\n```\n",
                            isReactComponent: !0
                        }, {
                            label: "Switch",
                            documentation: "\n### Example\n```tsx\nfunction SwitchDemo(): React.ReactNode {\n\n	return <ShadcnUI.Switch />\n}\n```\n    ",
                            isReactComponent: !0
                        }, {
                            label: "Table",
                            documentation: '\n### Example\n```tsx\nfunction TableDemo(): React.ReactNode {\n\n	return (\n		<ShadcnUI.Table>\n			<ShadcnUI.TableCaption>A list of your recent invoices.</ShadcnUI.TableCaption>\n			<ShadcnUI.TableHeader>\n				<ShadcnUI.TableRow>\n					<ShadcnUI.TableHead className="w-[100px]">Invoice</ShadcnUI.TableHead>\n					<ShadcnUI.TableHead>Status</ShadcnUI.TableHead>\n					<ShadcnUI.TableHead>Method</ShadcnUI.TableHead>\n					<ShadcnUI.TableHead className="text-right">Amount</ShadcnUI.TableHead>\n				</ShadcnUI.TableRow>\n			</ShadcnUI.TableHeader>\n			<ShadcnUI.TableBody>\n				<ShadcnUI.TableRow>\n					<ShadcnUI.TableCell className="font-medium">INV001</ShadcnUI.TableCell>\n					<ShadcnUI.TableCell>Paid</ShadcnUI.TableCell>\n					<ShadcnUI.TableCell>Credit Card</ShadcnUI.TableCell>\n					<ShadcnUI.TableCell className="text-right">$250.00</ShadcnUI.TableCell>\n				</ShadcnUI.TableRow>\n			</ShadcnUI.TableBody>\n		</ShadcnUI.Table>\n	)\n}\n```\n    ',
                            isReactComponent: !0
                        }, {
                            label: "TableBody",
                            documentation: "Used inside Table.",
                            isReactComponent: !0
                        }, {
                            label: "TableCaption",
                            documentation: "Used inside Table.",
                            isReactComponent: !0
                        }, {
                            label: "TableCell",
                            documentation: "Used inside TableRow.",
                            isReactComponent: !0
                        }, {
                            label: "TableHead",
                            documentation: "Used inside TableRow.",
                            isReactComponent: !0
                        }, {
                            label: "TableHeader",
                            documentation: "Used inside Table.",
                            isReactComponent: !0
                        }, {
                            label: "TableRow,",
                            documentation: "Used inside TableHeader or TableBody.",
                            isReactComponent: !0
                        }, {
                            label: "TableFooter",
                            documentation: "Used inside Table.",
                            isReactComponent: !0
                        }, {
                            label: "useToast",
                            documentation: '\nYou need to include ShadcnUI.Toaster somewhere in the tree for this to work.\n\n### Example\n```tsx\nfunction ToastDemo(): React.ReactNode {\n\n const { toast } = ShadcnUI.useToast()\n\n return (\n  <div>\n    <button\n     onClick={() => {\n      toast({\n       title: "Scheduled: Catch up",\n       description: "Friday, February 10, 2023 at 5:57 PM",\n      })\n     }}\n    >\n     Show Toast\n    </button>\n    <ShadcnUI.Toaster />\n  </div>\n )\n}\n```\n    '
                        }, {
                            label: "Toaster",
                            documentation: "This will display a toast when triggered by ShadcnUI.useToast"
                        }, {
                            label: "Toggle",
                            documentation: "\n### Example\n```tsx\nfunction ToggleDemo(): React.ReactNode {\n\n	return <ShadcnUI.Toggle>ShadcnUI.Toggle</ShadcnUI.Toggle>\n}\n```\n    ",
                            isReactComponent: !0
                        }, {
                            label: "ToggleGroup",
                            documentation: '###Example\\nfunction ToggleGroupDemo(): React.ReactNode {\\n\\treturn (\\n\\t\\t<ToggleGroup type=\\"single\\">\\n\\t\\t\\t<ToggleGroupItem value=\\"a\\">A</ToggleGroupItem>\\n\\t\\t\\t<ToggleGroupItem value=\\"b\\">B</ToggleGroupItem>\\n\\t\\t\\t<ToggleGroupItem value=\\"c\\">C</ToggleGroupItem>\\n\\t\\t</ToggleGroup>\\n\\t)\\n}\\n',
                            isReactComponent: !0
                        }, {
                            label: "ToggleGroupItem",
                            documentation: "Used inside ToggleGroup",
                            isReactComponent: !0
                        }]
                    },
                    codeViewForExport: {
                        foldername: "design-libraries",
                        filename: "shadcn-ui.tsx",
                        imports: "import * as ShadcnUI from '@/design-libraries/shadcn-ui';"
                    }
                }, K, W];
            n(18222), n(42781);
            var Z = n(54908),
                V = n(77130),
                Y = n(97260),
                z = n(69452),
                J = n(35554),
                X = n(1622),
                Q = n(27963),
                q = n(30246),
                $ = n(52070),
                ee = n(98190),
                et = n(1240),
                en = n(91614),
                ea = n(50262),
                eo = e => {
                    let {
                        newDbEnabled: t
                    } = e;
                    return "const useUser = () => {\n  const { data: session, status } = useSession();\n  const id = session?.user?.id\n\n  const [user, setUser] = React.useState(null);\n\n  ".concat(t ? "const fetchUser = React.useCallback(async (session) => {\n  return session?.user;\n}, [])" : 'const fetchUser = React.useCallback(async (session) => {\n  return await create\n    .db(process.env.NEXT_PUBLIC_CREATE_AUTH_DB_SLUG)\n    .from("user_accounts")\n    .getById(session?.user.id)\n}, [])', "\n\n  const refetchUser = React.useCallback(() => {\n    if(process.env.NEXT_PUBLIC_CREATE_ENV === \"PRODUCTION\") {\n      if (id) {\n        fetchUser(session).then(setUser);\n      } else {\n        setUser(null);\n      }\n    }\n  }, [fetchUser, id])\n\n  React.useEffect(refetchUser, [refetchUser]);\n\n  if (process.env.NEXT_PUBLIC_CREATE_ENV !== \"PRODUCTION\") {\n    return { data: session?.user || null, loading: status === 'loading', refetch: refetchUser };\n  }\n  return { user, data: user, loading: status === 'loading' || (status === 'authenticated' && !user), refetch: refetchUser };\n};")
                },
                er = () => 'function useAuth() {\n  const callbackUrl = typeof window !== \'undefined\' \n    ? new URLSearchParams(window.location.search).get(\'callbackUrl\')\n    : null;\n\n  const signInWithCredentials = useCallback((options) => {\n    return signIn("credentials-signin", {\n      ...options,\n      callbackUrl: callbackUrl ?? options.callbackUrl\n    });\n  }, [callbackUrl])\n\n  const signUpWithCredentials = useCallback((options) => {\n    return signIn("credentials-signup", {\n      ...options,\n      callbackUrl: callbackUrl ?? options.callbackUrl\n    });\n  }, [callbackUrl])\n\n  const signInWithGoogle = useCallback((options) => {\n    return signIn("google", {\n      ...options,\n      callbackUrl: callbackUrl ?? options.callbackUrl\n    });\n  }, [callbackUrl]);\n  const signInWithFacebook = useCallback((options) => {\n    return signIn("facebook", options);\n  }, []);\n  const signInWithTwitter = useCallback((options) => {\n    return signIn("twitter", options);\n  }, []);\n\n  return {\n    signInWithCredentials,\n    signUpWithCredentials,\n    signInWithGoogle,\n    signInWithFacebook,\n    signInWithTwitter,\n    signOut,\n  }\n}',
                ei = ["useEffect", "useLayoutEffect", "useInsertionEffect"];

            function es(e, t) {
                let [n, a] = ea(t);
                return Function(...n, e)(...a)
            }
            var el = e => "string" == typeof e && ei.includes(e),
                ec = e => {
                    let {
                        onCreateElement: t,
                        disableEffects: n = !1
                    } = e;
                    return t ? new Proxy(c, {
                        get: (e, a) => "createElement" === a ? function() {
                            for (var e = arguments.length, n = Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                            let [o, r, ...i] = n;
                            return t({
                                type: o,
                                props: r,
                                children: i
                            }, c)
                        } : n && el(a) ? J : e[a]
                    }) : c
                },
                ed = {
                    useState: c.useState,
                    useEffect: c.useEffect,
                    useContext: c.useContext,
                    useReducer: c.useReducer,
                    useCallback: c.useCallback,
                    useMemo: c.useMemo,
                    useRef: c.useRef,
                    useId: c.useId,
                    useImperativeHandle: c.useImperativeHandle,
                    useTransition: c.useTransition,
                    useSyncExternalStore: c.useSyncExternalStore,
                    useDeferredValue: c.useDeferredValue,
                    useDebugValue: c.useDebugValue,
                    useLayoutEffect: c.useLayoutEffect,
                    useInsertionEffect: c.useInsertionEffect,
                    use: c.use,
                    useActionState: c.useActionState,
                    useOptimistic: c.useOptimistic
                },
                eu = [
                    ["NEXT_PUBLIC_GOOGLE_MAPS_API_KEY", "AIzaSyBrzw1VZ0e3_3jXv-mCu4mfG2IiLok5x0w"]
                ],
                ep = "\nfunction formDataToFlatObject(formData) {\n  const jsonObject = {};\n\n  for (const [key, value] of formData.entries()) {\n      if (!jsonObject.hasOwnProperty(key)) {\n          jsonObject[key] = value;\n      } else {\n          if (!Array.isArray(jsonObject[key])) {\n              jsonObject[key] = [jsonObject[key]];\n          }\n          jsonObject[key].push(value);\n      }\n  }\n\n  // Convert any lists to string\n  for (const [key, value] of Object.entries(jsonObject)) {\n    if (Array.isArray(value)) {\n      jsonObject[key] = value.join(', ');\n    }\n  }\n  return jsonObject;\n}\n\nconst handleSheetSubmitFactory = (sheetId) => async (event) => {\n  event.preventDefault();\n  const formData = new FormData(event.target);\n\n  await fetch('/api/public-sheet', {\n    method: 'POST',\n    body: JSON.stringify({\n      formData: formDataToFlatObject(formData),\n      sheetId,\n    }),\n  });\n  event.target.reset();\n};\n\n".concat('const create = {\n  db: (database) => ({\n    from: (table) => {\n      return {\n        getById: async (id) => {\n          const response = await fetch(`/api/db/${database}`, {\n            method: "POST",\n            headers: { "Content-Type": "application/json" },\n            body: JSON.stringify({\n              query: `SELECT * FROM \\`${table}\\` WHERE \\`id\\` = ? LIMIT 1`,\n              values: [id],\n            }),\n          });\n          const data = await response.json();\n          if (data.length > 0) {\n            return data[0];\n          }\n          return null;\n        },\n      };\n    },\n  }),\n};\n', "\n\n").concat('function useUpload() {\n  const [loading, setLoading] = React.useState(false);\n  const upload = React.useCallback(async (input) => {\n    try {\n      setLoading(true);\n      let response;\n      if ("file" in input) {\n        const formData = new FormData();\n        formData.append("file", input.file);\n        response = await fetch("/api/upload", {\n          method: "POST",\n          body: formData\n        });\n      } else if ("url" in input) {\n        response = await fetch("/api/upload", {\n          method: "POST",\n          headers: {\n            "Content-Type": "application/json"\n          },\n          body: JSON.stringify({ url: input.url })\n        });\n      } else if ("base64" in input) {\n        response = await fetch("/api/upload", {\n          method: "POST",\n          headers: {\n            "Content-Type": "application/json"\n          },\n          body: JSON.stringify({ base64: input.base64 })\n        });\n      } else {\n        response = await fetch("/api/upload", {\n          method: "POST",\n          headers: {\n            "Content-Type": "application/octet-stream"\n          },\n          body: input.buffer\n        });\n      }\n      if (!response.ok) {\n        if (response.status === 413) {\n          throw new Error("Upload failed: File too large.");\n        }\n        throw new Error("Upload failed");\n      }\n      const data = await response.json();\n      return { url: data.url, mimeType: data.mimeType || null };\n    } catch (uploadError) {\n      if (uploadError instanceof Error) {\n        return { error: uploadError.message };\n      }\n      if (typeof uploadError === "string") {\n        return { error: uploadError };\n      }\n      return { error: "Upload failed" };\n    } finally {\n      setLoading(false);\n    }\n  }, []);\n\n  return [upload, { loading }];\n}', "\n\n").concat('function useHandleStreamResponse({\n  onChunk,\n  onFinish\n}) {\n  const handleStreamResponse = React.useCallback(\n    async (response) => {\n      if (response.body) {\n        const reader = response.body.getReader();\n        if (reader) {\n          const decoder = new TextDecoder();\n          let content = "";\n          while (true) {\n            const { done, value } = await reader.read();\n            if (done) {\n              onFinish(content);\n              break;\n            }\n            const chunk = decoder.decode(value, { stream: true });\n            content += chunk;\n            onChunk(content);\n          }\n        }\n      }\n    },\n    [onChunk, onFinish]\n  );\n  return handleStreamResponse;\n}', "\n");
            n(38482);
            var eA = Object.create,
                em = Object.defineProperty,
                eE = Object.getOwnPropertyDescriptor,
                e_ = Object.getOwnPropertyNames,
                eT = Object.getPrototypeOf,
                eN = Object.prototype.hasOwnProperty,
                eh = (e, t, n, a) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let o of e_(t)) eN.call(e, o) || o === n || em(e, o, {
                            get: () => t[o],
                            enumerable: !(a = eE(t, o)) || a.enumerable
                        });
                    return e
                },
                eI = (e, t, n) => (n = null != e ? eA(eT(e)) : {}, eh(!t && e && e.__esModule ? n : em(n, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                eS = (a = {
                    "../types/dist/index.js" (e, t) {
                        "use strict";
                        var n, a, o, r, i, s, l, c, d, u, p, A, m, E, _, T, N, h, I, S, C, O, R, g, f, P, M, L, b, y, v, D, U, G, H, k, B, x, w, F, K, W, j, Z, V, Y, z, J, X, Q, q, $, ee, et, en, ea, eo, er, ei, es = Object.defineProperty,
                            el = Object.getOwnPropertyDescriptor,
                            ec = Object.getOwnPropertyNames,
                            ed = Object.prototype.hasOwnProperty,
                            eu = {};
                        ((e, t) => {
                            for (var n in t) es(e, n, {
                                get: t[n],
                                enumerable: !0
                            })
                        })(eu, {
                            AUTH_DB_TABLE_NAME: () => eS,
                            AUTH_PAGE_MODULE_TYPES: () => eB,
                            AppKind: () => eE,
                            AppType: () => th,
                            AuthProvider: () => tY,
                            AuthProviderSecretMap: () => tz,
                            CacheType: () => tO,
                            ClientIntegrationType: () => tC,
                            CodeAnalysisType: () => eA,
                            CompletionPromptKind: () => e_,
                            ContentType: () => tP,
                            Country: () => t9,
                            CreateEnvironment: () => tD,
                            CreditTransactionSubType: () => tj,
                            CreditTransactionType: () => tW,
                            CustomInstructionTag: () => oi,
                            DATABASE_ENV_VAR: () => tU,
                            DEFAULT_COMPONENT_NAME: () => eL,
                            DEFAULT_DATABASE_NAME: () => a5,
                            DEFAULT_EXPO_PAGE_NAME: () => ey,
                            DEFAULT_FIRST_PROJECT_GROUP_NAME: () => eD,
                            DEFAULT_FUNCTION_NAME: () => ev,
                            DEFAULT_NODE_HEIGHT: () => tN,
                            DEFAULT_NODE_WIDTH_DESKTOP: () => t_,
                            DEFAULT_NODE_WIDTH_MOBILE: () => tT,
                            DEFAULT_PAGE_NAME: () => eb,
                            DEFAULT_PROJECT_GROUP_NAME: () => eU,
                            DEFAULT_SEO_DESCRIPTION: () => t2,
                            DEFAULT_SEO_TITLE: () => t1,
                            DESIGN_SYSTEM_MODULE_TYPES: () => eK,
                            DatabaseTagArg: () => tF,
                            DesignSystemVisibility: () => tS,
                            EXPO_COMPONENTS: () => oa,
                            EventLogType: () => tH,
                            FLOWCHART_ICON_PREFIX: () => td,
                            GENERATION_FINISHED_STATUSES: () => te,
                            GOOGLE_FONTS: () => t0,
                            GenerationProvider: () => tn,
                            GenerationStatus: () => eC,
                            HEARBEAT_RATE: () => ta,
                            IMPLEMENTATION_GUIDE: () => to,
                            INVISIBLE_MODULE_TYPES: () => eW,
                            ImageContentType: () => tR,
                            IntegrationSelectionTagArg: () => tK,
                            LIVE_BLOCKS_SERVICE_ACCOUNT_ID: () => tE,
                            LLMTag: () => tx,
                            MAIN_COMPONENT_NAME: () => eT,
                            MAIN_FUNCTION_NAME: () => eh,
                            MAX_GENERATION_SLOTS: () => eO,
                            MAX_RUN_TIME_MS: () => tp,
                            ModerationState: () => eH,
                            ModuleRevisionTestRunStatus: () => tu,
                            ModuleTagArg: () => tw,
                            ModuleType: () => ek,
                            OrganizationPlan: () => ef,
                            OtherContentType: () => tf,
                            PROJECT_BUILDING_STATUSES: () => e7,
                            PROJECT_GROUP_BUILDING_STATUSES: () => e6,
                            PROJECT_GROUP_CHAT_REVISION_ACTIONS: () => e4,
                            PROJECT_ID_HEADER_NAME: () => eR,
                            PUBLIC_MAGIC_ENV_VARS: () => ty,
                            PUBLIC_MAGIC_ENV_VARS_VALUES: () => tv,
                            ProjectDeploymentStatus: () => os,
                            ProjectGroupDeploymentType: () => e$,
                            ProjectGroupOnboardingState: () => eq,
                            ProjectGroupPublishState: () => eX,
                            ProjectGroupPublishingState: () => eQ,
                            ProjectGroupRevisionAction: () => e1,
                            ProjectGroupRevisionStatus: () => e2,
                            ProjectGroupTag: () => e0,
                            ProjectRevisionAction: () => e9,
                            ProjectRevisionStatus: () => e5,
                            ProjectUserUploadProvider: () => t$,
                            PublicProjectKind: () => eG,
                            REACT_IMPORT: () => oo,
                            REACT_NATIVE_COMPONENTS: () => on,
                            REACT_NATIVE_IMPORT: () => or,
                            REDIRECT_AFTER_LOGIN_QUERY_PARAM: () => ep,
                            REVISION_FINISHED_FIRST_RENDER_ID: () => tI,
                            STORY_COMPONENT_NAME: () => eN,
                            STRIPE_CONNECT_WEBHOOK_URL: () => a9,
                            STRIPE_SUPPORTED_COUNTRIES: () => t3,
                            STRIPE_WEBHOOK_SECRET: () => a3,
                            SimpleGenerationKind: () => em,
                            ThirdPartyServiceKind: () => tr,
                            TimeWindow: () => tB,
                            UI_MODULE_TYPES: () => eF,
                            UserBadge: () => tl,
                            UserDatabaseMigrationStatus: () => a7,
                            UserDatabaseStatus: () => a6,
                            UserRole: () => ti,
                            UserStatus: () => ts,
                            VERCEL_PROTECTION_BYPASS_HEADER_NAME: () => eg,
                            VISIBLE_MODULE_TYPES: () => ej,
                            VariableValue: () => tc,
                            WEB_APP_PERSISTENCE_PREFIX: () => eI,
                            WebsiteContentType: () => tg,
                            asArrayOfAuthProviders: () => tQ,
                            callbackUrlQueryParam: () => tV,
                            createEmail: () => t4,
                            generateRoomId: () => tA,
                            getAppUrl: () => tG,
                            getCountryCode: () => t6,
                            getDatabaseSizeForOrganizationPlan: () => oe,
                            getDefaultProjectNameForModuleType: () => eV,
                            getHumanReadableCountryName: () => t8,
                            getMaxPrivatePagesForPlan: () => eY,
                            getOAuthProviderDisplayData: () => tq,
                            getProjectGroupIntegrationReference: () => a4,
                            isActionIndicatingRevisionHasSpecForPrompt: () => e3,
                            isAgentAction: () => ot,
                            isAuthPageModuleType: () => ex,
                            isAuthProvider: () => tX,
                            isChatAction: () => tk,
                            isDeleteableModuleType: () => ew,
                            isEditableModuleType: () => eZ,
                            isImageContentType: () => tL,
                            isPageModuleType: () => eJ,
                            isPlanUpgrade: () => eM,
                            isStatusIndicatingRevisionIsBuilding: () => tt,
                            isStripeSupportedCountry: () => t7,
                            isSupportedContentType: () => tM,
                            isWebsiteContentType: () => tb,
                            parseRoomId: () => tm,
                            secretsManagerAddSecretParamsSchema: () => a$,
                            secretsManagerAddSecretReturnSchema: () => a0,
                            supportedModelCreditTransactionSubTypeMap: () => tZ,
                            userDesirableModuleSort: () => ez
                        }), t.exports = ((e, t, n, a) => {
                            if (t && "object" == typeof t || "function" == typeof t)
                                for (let o of ec(t)) ed.call(e, o) || o === n || es(e, o, {
                                    get: () => t[o],
                                    enumerable: !(a = el(t, o)) || a.enumerable
                                });
                            return e
                        })(es({}, "__esModule", {
                            value: !0
                        }), eu);
                        var ep = "redirect_after_login",
                            eA = ((n = eA || {}).ERROR = "ERROR", n),
                            em = ((a = em || {}).AUTORENAME = "AUTORENAME", a.AUTOFIX_COMPILE_ERROR_CODE_REWRITE = "AUTOFIX_COMPILE_ERROR_CODE_REWRITE", a.COMMENT_FIXING_CODE_REWRITE = "COMMENT_FIXING_CODE_REWRITE", a.COMMENT_FIXING_COMMENT_CLASSIFIER = "COMMENT_FIXING_COMMENT_CLASSIFIER", a.GOAL_ASSISTANCE_QUESTION_GENERATION = "GOAL_ASSISTANCE_QUESTION_GENERATION", a.AUTOFIX_SQL_ERROR_REWRITE = "AUTOFIX_SQL_ERROR_REWRITE", a),
                            eE = ((o = eE || {}).APP = "APP", o.LINK_IN_BIO = "LINK_IN_BIO", o),
                            e_ = ((r = e_ || {}).INITIAL = "INITIAL", r.BLANK = "BLANK", r.ITERATION = "ITERATION", r.COMMENT = "COMMENT", r.PATCH_COMMENT = "PATCH_COMMENT", r),
                            eT = "MainComponent",
                            eN = "StoryComponent",
                            eh = "handler",
                            eI = "/api/db",
                            eS = "user_accounts",
                            eC = ((i = eC || {}).RUNNING = "RUNNING", i.CANCELED = "CANCELED", i.FINISHED = "FINISHED", i.FAILED = "FAILED", i),
                            eO = 4,
                            eR = "x-createxyz-project-id",
                            eg = "x-vercel-protection-bypass",
                            ef = ((s = ef || {}).FREE = "FREE", s.PRO = "PRO", s.BUSINESS = "BUSINESS", s.ENTERPRISE = "ENTERPRISE", s),
                            eP = ["BUSINESS", "PRO", "FREE"],
                            eM = (e, t) => eP.indexOf(e) < eP.indexOf(t),
                            eL = "New Component",
                            eb = "New Page",
                            ey = "New Mobile Page",
                            ev = "New Function",
                            eD = "Drafts",
                            eU = "New Project",
                            eG = ((l = eG || {}).CLONE = "CLONE", l.FEATURED = "FEATURED", l.TAGGED = "TAGGED", l.RATED = "RATED", l.PROFILE = "PROFILE", l.ONBOARDING = "ONBOARDING", l),
                            eH = ((c = eH || {}).UNKNOWN = "UNKNOWN", c.FLAGGED = "FLAGGED", c.SAFE = "SAFE", c.UNSAFE_TOO_LONG = "UNSAFE_TOO_LONG", c.UNSAFE_ERROR_WITH_IMAGE = "UNSAFE_ERROR_WITH_IMAGE", c),
                            ek = ((d = ek || {}).EXPO_PAGE = "EXPO_PAGE", d.PAGE = "PAGE", d.COMPONENT = "COMPONENT", d.FUNCTION = "FUNCTION", d.AUTH_PAGE_SIGN_IN = "AUTH_PAGE_SIGN_IN", d.AUTH_PAGE_SIGN_UP = "AUTH_PAGE_SIGN_UP", d.AUTH_PAGE_LOGOUT = "AUTH_PAGE_LOGOUT", d.DESIGN_SYSTEM_PAGE = "DESIGN_SYSTEM_PAGE", d.DESIGN_SYSTEM_COMPONENT = "DESIGN_SYSTEM_COMPONENT", d),
                            eB = ["AUTH_PAGE_SIGN_IN", "AUTH_PAGE_SIGN_UP", "AUTH_PAGE_LOGOUT"],
                            ex = e => eB.includes(e),
                            ew = e => !ex(e),
                            eF = ["EXPO_PAGE", "PAGE", "DESIGN_SYSTEM_PAGE", "COMPONENT", "DESIGN_SYSTEM_COMPONENT", "AUTH_PAGE_SIGN_IN", "AUTH_PAGE_SIGN_UP", "AUTH_PAGE_LOGOUT"],
                            eK = ["DESIGN_SYSTEM_PAGE", "DESIGN_SYSTEM_COMPONENT"],
                            eW = new Set([...eK]),
                            ej = Object.values(ek).filter(e => !eW.has(e)),
                            eZ = e => {
                                let {
                                    moduleType: t,
                                    withCustomAuth: n
                                } = e;
                                switch (t) {
                                    case "EXPO_PAGE":
                                    case "PAGE":
                                    case "FUNCTION":
                                    case "COMPONENT":
                                        return !0;
                                    case "AUTH_PAGE_LOGOUT":
                                    case "AUTH_PAGE_SIGN_IN":
                                    case "AUTH_PAGE_SIGN_UP":
                                        return n;
                                    case "DESIGN_SYSTEM_PAGE":
                                    case "DESIGN_SYSTEM_COMPONENT":
                                        return !1;
                                    default:
                                        return t
                                }
                            },
                            eV = e => {
                                switch (e) {
                                    case "COMPONENT":
                                    case "DESIGN_SYSTEM_COMPONENT":
                                        return eL;
                                    case "FUNCTION":
                                        return ev;
                                    case "EXPO_PAGE":
                                        return ey;
                                    case "PAGE":
                                    case "DESIGN_SYSTEM_PAGE":
                                        return eb;
                                    case "AUTH_PAGE_SIGN_IN":
                                        return "Sign In";
                                    case "AUTH_PAGE_SIGN_UP":
                                        return "Sign Up";
                                    case "AUTH_PAGE_LOGOUT":
                                        return "Logout";
                                    default:
                                        return e
                                }
                            },
                            eY = e => {
                                switch (e) {
                                    case "BUSINESS":
                                    case "ENTERPRISE":
                                        return Number.POSITIVE_INFINITY;
                                    case "FREE":
                                        return 0;
                                    case "PRO":
                                        return 3;
                                    default:
                                        return e
                                }
                            },
                            ez = (e, t) => {
                                let n = ["PAGE", "EXPO_PAGE", "COMPONENT", "FUNCTION", "DESIGN_SYSTEM_COMPONENT", "DESIGN_SYSTEM_PAGE", "AUTH_PAGE_SIGN_IN", "AUTH_PAGE_SIGN_UP", "AUTH_PAGE_LOGOUT"],
                                    a = n.indexOf(e.moduleType),
                                    o = n.indexOf(t.moduleType);
                                if (a !== o) return a - o;
                                let r = e.pathSegment,
                                    i = t.pathSegment;
                                return r ? i ? r.localeCompare(i) : -1 : 1
                            };

                        function eJ(e) {
                            let {
                                moduleType: t
                            } = e;
                            return "PAGE" === t || "EXPO_PAGE" === t
                        }
                        var eX = ((u = eX || {}).UP_TO_DATE = "UP_TO_DATE", u.HAS_UPDATES = "HAS_UPDATES", u.NEVER_PUBLISHED_BEFORE = "NEVER_PUBLISHED_BEFORE", u.NO_DOMAIN_CLAIMED = "NO_DOMAIN_CLAIMED", u),
                            eQ = ((p = eQ || {}).PUBLISHED = "PUBLISHED", p.PUBLISHING = "PUBLISHING", p.UNPUBLISHED = "UNPUBLISHED", p),
                            eq = ((A = eq || {}).NOT_CREATED_FOR_ONBOARDING = "NOT_CREATED_FOR_ONBOARDING", A.CREATED_FOR_ONBOARDING = "CREATED_FOR_ONBOARDING", A.SELECTED_DURING_ONBOARDING = "SELECTED_DURING_ONBOARDING", A),
                            e$ = ((m = e$ || {}).EXPO = "EXPO", m),
                            e0 = ((E = e0 || {}).AUTH = "auth", E.INTEGRATION = "integration", E.TESTINTEGRATION = "testintegration", E.BETAINTEGRATION = "betaintegration", E.COMPONENT = "component", E.STRIPE = "stripe", E.PAYMENT = "payment", E.ACTION = "action", E.LEGACY_DB = "legacy-db", E),
                            e1 = ((_ = e1 || {}).CHAT = "CHAT", _.FORK_WITH_CHAT_MESSAGE = "FORK_WITH_CHAT_MESSAGE", _.FORK_MODULE_WITH_CHAT_MESSAGE = "FORK_MODULE_WITH_CHAT_MESSAGE", _.DUPLICATE = "DUPLICATE", _.FORK = "FORK", _.SELECT_INTEGRATION_WITH_CHAT_MESSAGE = "SELECT_INTEGRATION_WITH_CHAT_MESSAGE", _.PUBLISH_PROJECT_AND_CONTINUE_CHAT = "PUBLISH_PROJECT_AND_CONTINUE_CHAT", _.SAVE_SECRET_AND_CONTINUE_CHAT = "SAVE_SECRET_AND_CONTINUE_CHAT", _.CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT = "CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT", _.AGENT_AUTO_SELECT_INTEGRATION = "AGENT_AUTO_SELECT_INTEGRATION", _.ADD_AUTH_AND_CONTINUE_CHAT = "ADD_AUTH_AND_CONTINUE_CHAT", _.UPDATE_AUTH_SETTINGS = "UPDATE_AUTH_SETTINGS", _),
                            e2 = ((T = e2 || {}).INVALID_PROMPT = "INVALID_PROMPT", T.CREATED = "CREATED", T.VALID = "VALID", T.INVALID = "INVALID", T.BUILDING = "BUILDING", T),
                            e4 = ["CHAT", "FORK_WITH_CHAT_MESSAGE", "FORK_MODULE_WITH_CHAT_MESSAGE", "PUBLISH_PROJECT_AND_CONTINUE_CHAT", "SAVE_SECRET_AND_CONTINUE_CHAT", "SELECT_INTEGRATION_WITH_CHAT_MESSAGE", "CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT", "ADD_AUTH_AND_CONTINUE_CHAT", "AGENT_AUTO_SELECT_INTEGRATION"],
                            e9 = ((N = e9 || {}).FIX_CHANGE = "FIX_CHANGE", N.TRY_AGAIN = "TRY_AGAIN", N.PROMPT_CHANGE = "PROMPT_CHANGE", N.UI_PATCH = "UI_PATCH", N.CREATE_COMPONENT_FROM_PROMPT = "CREATE_COMPONENT_FROM_PROMPT", N.CREATE_COMPONENT_FROM_PROMPT_AND_CODE = "CREATE_COMPONENT_FROM_PROMPT_AND_CODE", N.DELETION = "DELETION", N.TEXT_CHANGE = "TEXT_CHANGE", N.IMAGE_CHANGE = "IMAGE_CHANGE", N.LINK_CHANGE = "LINK_CHANGE", N.FORM_CHANGE = "FORM_CHANGE", N.COMMENT_CHANGE = "COMMENT_CHANGE", N.RESTORE = "RESTORE", N.CHANGE_AUTH = "CHANGE_AUTH", N.CODE_CHANGE = "CODE_CHANGE", N.APPLY_COMMAND = "APPLY_COMMAND", N.SELECT_INITIAL_MODULE_IDEA = "SELECT_INITIAL_MODULE_IDEA", N.AUTOFIX_CHANGE = "AUTOFIX_CHANGE", N.ENHANCE_PROMPT = "ENHANCE_PROMPT", N.CHAT = "CHAT", N.TOP_DOWN_CHAT = "TOP_DOWN_CHAT", N.REBUILD_FROM_LATEST = "REBUILD_FROM_LATEST", N.UPDATE_REFERENCES = "UPDATE_REFERENCES", N.FORK_FROM_PROJECT_GROUP_TEMPLATE = "FORK_FROM_PROJECT_GROUP_TEMPLATE", N.FORK_FROM_PROJECT_GROUP = "FORK_FROM_PROJECT_GROUP", N.DUPLICATE_PROJECT_GROUP = "DUPLICATE_PROJECT_GROUP", N.FORK_FROM_MODULE = "FORK_FROM_MODULE", N.DUPLICATE_MODULE = "DUPLICATE_MODULE", N.AGENT_AUTO_SELECT_INTEGRATION = "AGENT_AUTO_SELECT_INTEGRATION", N),
                            e3 = e => {
                                switch (e) {
                                    case "PROMPT_CHANGE":
                                    case "TRY_AGAIN":
                                    case "CREATE_COMPONENT_FROM_PROMPT":
                                    case "CREATE_COMPONENT_FROM_PROMPT_AND_CODE":
                                    case "FIX_CHANGE":
                                    case "RESTORE":
                                    case "UI_PATCH":
                                    case "APPLY_COMMAND":
                                    case "SELECT_INITIAL_MODULE_IDEA":
                                    case "ENHANCE_PROMPT":
                                    case "AUTOFIX_CHANGE":
                                    case "CHANGE_AUTH":
                                    case "CODE_CHANGE":
                                    case "DELETION":
                                    case "IMAGE_CHANGE":
                                    case "LINK_CHANGE":
                                    case "TEXT_CHANGE":
                                    case "CHAT":
                                    case "TOP_DOWN_CHAT":
                                    case "REBUILD_FROM_LATEST":
                                    case "UPDATE_REFERENCES":
                                    case "FORK_FROM_PROJECT_GROUP_TEMPLATE":
                                    case "FORK_FROM_PROJECT_GROUP":
                                    case "DUPLICATE_PROJECT_GROUP":
                                    case "DUPLICATE_MODULE":
                                    case "FORK_FROM_MODULE":
                                    case "AGENT_AUTO_SELECT_INTEGRATION":
                                        return !0;
                                    case "COMMENT_CHANGE":
                                    case "FORM_CHANGE":
                                        return !1;
                                    default:
                                        return e
                                }
                            },
                            e5 = ((h = e5 || {}).QUEUED = "QUEUED", h.GENERATION_FAILED = "GENERATION_FAILED", h.INVALID_PROMPT = "INVALID_PROMPT", h.CREATED = "CREATED", h.VALID = "VALID", h.INVALID = "INVALID", h.BUILDING = "BUILDING", h.BUILDING_UI = "BUILDING_UI", h.BUILDING_FUNCTIONALITY = "BUILDING_FUNCTIONALITY", h.INVALID_CODE = "INVALID_CODE", h.CANCELED_AUTOFIX = "CANCELED_AUTOFIX", h.ENHANCING_PROMPT = "ENHANCING_PROMPT", h.FAILED = "FAILED", h),
                            e7 = ["BUILDING", "BUILDING_UI", "BUILDING_FUNCTIONALITY"],
                            e6 = ["BUILDING"],
                            e8 = new Set([...e7, ...e6]),
                            te = Object.values(e5).filter(e => !e8.has(e)),
                            tt = e => e8.has(e),
                            tn = ((I = tn || {}).FIRST_PARTY_OPENAI = "FIRST_PARTY_OPENAI", I.FIRST_PARTY_OPENAI_O1 = "FIRST_PARTY_OPENAI_O1", I.FIRST_PARTY_OPENAI_O1_MINI = "FIRST_PARTY_OPENAI_O1_MINI", I.FIRST_PARTY_OPENAI_4O_MINI = "FIRST_PARTY_OPENAI_4O_MINI", I.PATCH_FIRST_PARTY_OPENAI = "PATCH_FIRST_PARTY_OPENAI", I.AZURE_OPENAI = "AZURE_OPENAI", I.GROQ_MIXTRAL_8X7B_32768 = "GROQ_MIXTRAL_8X7B_32768", I.GOOGLE_GEMINI_1 = "GOOGLE_GEMINI_1", I.GOOGLE_GEMINI_1_5 = "GOOGLE_GEMINI_1_5", I.GOOGLE_GEMINI_1_5_FLASH = "GOOGLE_GEMINI_1_5_FLASH", I.GOOGLE_GEMINI_2_0_FLASH = "GOOGLE_GEMINI_2_0_FLASH", I.DEEPSEEK_V3 = "DEEPSEEK_V3", I.ANTHROPIC_CLAUDE_OPUS = "ANTHROPIC_CLAUDE_OPUS", I.ANTHROPIC_CLAUDE_SONNET = "ANTHROPIC_CLAUDE_SONNET", I.ANTHROPIC_CLAUDE_SONNET_3_5 = "ANTHROPIC_CLAUDE_SONNET_3_5", I.ANTHROPIC_CLAUDE_SONNET_3_7 = "ANTHROPIC_CLAUDE_SONNET_3_7", I.ANTHROPIC_CLAUDE_HAIKU = "ANTHROPIC_CLAUDE_HAIKU", I.PATCH_ANTHROPIC_CLAUDE_OPUS = "PATCH_ANTHROPIC_CLAUDE_OPUS", I.COHERE_COMMAND_R_PLUS = "COHERE_COMMAND_R_PLUS", I.REKA = "REKA", I),
                            ta = 3e4,
                            to = '\n- You should ensure that the UI is responsive.\n- Icons: you should use font-awesome classes\n- Forms: any form fields should have a "name" attribute\n- Do not use any classnames that are not tailwind or fontawesome related as they will not do anything.\n- Images: specify very specific alt descriptions based on what the user is trying to build and vary them depending on what is requested by the user. When the app to build requires images, always use relative paths and always specify sizing that makes sense for the use-case requested by the user.\n- Fonts: All text should use a font class. Class names follow the form `font-<lowercase font name>` e.g. font-roboto, font-crimson-text. If the user requests a specific font, you should use the font class that corresponds to the font name. If the user does not request a specific font but the code already includes a font, you should not change it.\n- Colors: To reference colors with hex values, you should use arbitrary values e.g. text-[#121212] bg-[#010101]\n- Sizes: Many things may need to be sized. You should prefer tailwind defaults e.g. w-full but for arbitrary values specify as e.g. w-[400px] h-[400px]\n- If the user requests emoji, use emojis instead of font awesome classes.\n- Forms: any form fields should have a "name" attribute\n',
                            tr = ((S = tr || {}).GITHUB = "github", S),
                            ti = ((C = ti || {}).ADMIN = "ADMIN", C.CUSTOMER = "CUSTOMER", C.CREATOR = "CREATOR", C.CREATOR_LEAD = "CREATOR_LEAD", C),
                            ts = ((O = ts || {}).UNVERIFIED = "UNVERIFIED", O),
                            tl = ((R = tl || {}).AMBASSADOR = "AMBASSADOR", R),
                            tc = ((g = tc || {}).BACKGROUND_COLOR_HEX = "BACKGROUND_COLOR_HEX", g.TEXT_COLOR_HEX = "TEXT_COLOR_HEX", g.FONT_WEIGHT = "FONT_WEIGHT", g.ROUNDED_CORNER_RADIUS_PX = "ROUNDED_CORNER_RADIUS_PX", g.PADDING_PX = "PADDING_PX", g.FONT_FAMILY = "FONT_FAMILY", g.FONT_SIZE_PX = "FONT_SIZE_PX", g.HEIGHT_PX = "HEIGHT_PX", g.WIDTH_PX = "WIDTH_PX", g.BACKGROUND_IMAGE_URL = "BACKGROUND_IMAGE_URL", g),
                            td = "fa:",
                            tu = ((f = tu || {}).PENDING = "PENDING", f.RUNNING = "RUNNING", f.COMPLETED = "COMPLETED", f.FAILED = "FAILED", f.SYSTEM_FAILED = "SYSTEM_FAILED", f.STALLED = "STALLED", f),
                            tp = 36e4;

                        function tA(e) {
                            if ("projectGroupId" in e) {
                                let {
                                    projectGroupId: t
                                } = e;
                                return "project-canvas:".concat(t)
                            }
                            let {
                                organizationId: t,
                                projectId: n
                            } = e;
                            return "app-builder:".concat(t, ":").concat(n)
                        }

                        function tm(e) {
                            let [t, n, a] = e.split(":");
                            if ("project-canvas" === t && n) return {
                                kind: "project-canvas",
                                projectGroupId: n
                            };
                            if ("app-builder" === t && n && a) return {
                                kind: "app-builder",
                                organizationId: n,
                                projectId: a
                            };
                            throw Error("Invalid roomId")
                        }
                        var tE = "_SERVICE_ACCOUNT",
                            t_ = 1280,
                            tT = 360,
                            tN = 720,
                            th = ((P = th || {}).LEAD_GEN_TOOL = "LEAD_GEN_TOOL", P.PERSONAL_WEBSITE = "PERSONAL_WEBSITE", P.ECOMMERCE_STORE = "ECOMMERCE_STORE", P.BLOG_PLATFORM = "BLOG_PLATFORM", P.PORTFOLIO_WEBSITE = "PORTFOLIO_WEBSITE", P.SOCIAL_NETWORK = "SOCIAL_NETWORK", P.GAME = "GAME", P.AI_TOOL = "AI_TOOL", P.FINANCE_APP = "FINANCE_APP", P.DATING_APP = "DATING_APP", P.TODO_LIST_APP = "TODO_LIST_APP", P.NOTES_APP = "NOTES_APP", P.GALLERY_APP = "GALLERY_APP", P.CONTACT_MANAGEMENT = "CONTACT_MANAGEMENT", P.SURVEY_TOOL = "SURVEY_TOOL", P.QUIZ_TOOL = "QUIZ_TOOL", P.ONLINE_STORE = "ONLINE_STORE", P.CHAT_APP = "CHAT_APP", P.FEEDBACK_TOOL = "FEEDBACK_TOOL", P.WEATHER_APP = "WEATHER_APP", P.TRANSLATION_TOOL = "TRANSLATION_TOOL", P.FITNESS_TRACKER_APP = "FITNESS_TRACKER_APP", P.CRYPTOCURRENCY_APP = "CRYPTOCURRENCY_APP", P),
                            tI = "revisionfinishedfirstrender",
                            tS = ((M = tS || {}).PUBLIC = "PUBLIC", M.PRIVATE = "PRIVATE", M),
                            tC = ((L = tC || {}).GOOGLE_MAPS = "@vis.gl/react-google-maps", L.RECHARTS = "recharts", L.CHAKRA_UI = "@chakra-ui/react", L.SHADCN_UI = "@lshay/ui", L.PDFJS = "pdfjs-dist", L.REACT_MARKDOWN = "react-markdown", L),
                            tO = ((b = tO || {}).URL = "URL", b.BASE64 = "BASE64", b),
                            tR = ((y = tR || {}).IMAGE_JPEG = "image/jpeg", y.IMAGE_PNG = "image/png", y.IMAGE_GIF = "image/gif", y.IMAGE_WEBP = "image/webp", y.IMAGE_SVG_XML = "image/svg+xml", y),
                            tg = ((v = tg || {}).TEXT_HTML = "text/html", v.APPLICATION_XHTML_XML = "application/xhtml+xml", v),
                            tf = ((D = tf || {}).TEXT_PLAIN = "text/plain", D.TEXT_CSS = "text/css", D.TEXT_JAVASCRIPT = "text/javascript", D.TEXT_XML = "text/xml", D.APPLICATION_JSON = "application/json", D.APPLICATION_XML = "application/xml", D.APPLICATION_LD_JSON = "application/ld+json", D.APPLICATION_URL_ENCODED = "application/x-www-form-urlencoded", D.APPLICATION_OCTET_STREAM = "application/octet-stream", D.APPLICATION_PDF = "application/pdf", D.APPLICATION_ZIP = "application/zip", D.AUDIO_MPEG = "audio/mpeg", D.AUDIO_WAV = "audio/wav", D.AUDIO_OGG = "audio/ogg", D.VIDEO_MP4 = "video/mp4", D.VIDEO_WEBM = "video/webm", D.VIDEO_OGG = "video/ogg", D.MULTIPART_FORM_DATA = "multipart/form-data", D.MULTIPART_RELATED = "multipart/related", D.FONT_WOFF = "font/woff", D.FONT_WOFF2 = "font/woff2", D.FONT_OTF = "font/otf", D.FONT_TTF = "font/ttf", D.APPLICATION_FLASH = "application/x-shockwave-flash", D.APPLICATION_TAR = "application/x-tar", D.APPLICATION_7Z_COMPRESSED = "application/x-7z-compressed", D),
                            tP = { ...tR,
                                ...tg,
                                ...tf
                            },
                            tM = e => Object.values(tP).includes(e),
                            tL = e => Object.values(tR).includes(e),
                            tb = e => Object.values(tg).includes(e),
                            ty = ((U = ty || {}).AUTH_DB_SLUG = "NEXT_PUBLIC_CREATE_AUTH_DB_SLUG", U.APP_URL = "NEXT_PUBLIC_CREATE_APP_URL", U.ENV = "NEXT_PUBLIC_CREATE_ENV", U),
                            tv = Object.values(ty),
                            tD = ((G = tD || {}).DEVELOPMENT = "DEVELOPMENT", G.PREVIEW = "PREVIEW", G.PRODUCTION = "PRODUCTION", G),
                            tU = "DATABASE_URL",
                            tG = e => {
                                let {
                                    projectGroupId: t,
                                    hostedDomain: n
                                } = e;
                                return "https://".concat(t, ".").concat(n)
                            },
                            tH = ((H = tH || {}).INTEGRATION_USAGE = "INTEGRATION_USAGE", H.GENERATION_USAGE = "GENERATION_USAGE", H.STORAGE_USAGE = "STORAGE_USAGE", H.DEPOSIT_CREDITS = "DEPOSIT_CREDITS", H.REFILL_CREDITS = "REFILL_CREDITS", H),
                            tk = e => {
                                switch (e) {
                                    case "APPLY_COMMAND":
                                    case "TOP_DOWN_CHAT":
                                    case "CHAT":
                                    case "FORK_WITH_CHAT_MESSAGE":
                                    case "FORK_MODULE_WITH_CHAT_MESSAGE":
                                    case "PUBLISH_PROJECT_AND_CONTINUE_CHAT":
                                    case "SAVE_SECRET_AND_CONTINUE_CHAT":
                                    case "CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT":
                                    case "AGENT_AUTO_SELECT_INTEGRATION":
                                    case "AGENT_AUTO_SELECT_INTEGRATION":
                                    case "SELECT_INTEGRATION_WITH_CHAT_MESSAGE":
                                    case "ADD_AUTH_AND_CONTINUE_CHAT":
                                    case "CHAT":
                                        return !0;
                                    case "UPDATE_AUTH_SETTINGS":
                                    case "FORK":
                                    case "DUPLICATE":
                                    case "AUTOFIX_CHANGE":
                                    case "FIX_CHANGE":
                                    case "CODE_CHANGE":
                                    case "CREATE_COMPONENT_FROM_PROMPT":
                                    case "CREATE_COMPONENT_FROM_PROMPT_AND_CODE":
                                    case "DELETION":
                                    case "FORM_CHANGE":
                                    case "IMAGE_CHANGE":
                                    case "LINK_CHANGE":
                                    case "PROMPT_CHANGE":
                                    case "RESTORE":
                                    case "SELECT_INITIAL_MODULE_IDEA":
                                    case "TEXT_CHANGE":
                                    case "TRY_AGAIN":
                                    case "UI_PATCH":
                                    case "REBUILD_FROM_LATEST":
                                    case "UPDATE_REFERENCES":
                                    case "COMMENT_CHANGE":
                                    case "ENHANCE_PROMPT":
                                    case "CHANGE_AUTH":
                                    case "FORK_FROM_PROJECT_GROUP_TEMPLATE":
                                    case "FORK_FROM_PROJECT_GROUP":
                                    case "DUPLICATE_PROJECT_GROUP":
                                    case "FORK_FROM_MODULE":
                                    case "DUPLICATE_MODULE":
                                        return !1;
                                    default:
                                        return e
                                }
                            },
                            tB = ((k = tB || {}).DAILY = "DAILY", k),
                            tx = ((B = tx || {}).SUGGEST_ENVIRONMENT_VARIABLES = "suggest-environment-variables", B.EXPO_PAGE = "expo-page", B.PAGE = "page", B.COMPONENT = "component", B.FUNCTION = "function", B.THINKING = "thinking", B.CHOICES = "choices", B.MODULE_SELECTION = "module-selection", B.DESIGN_SYSTEM_SELECTION = "design-system-selection", B.INTEGRATION_SELECTION = "integration-selection", B.PUBLISH = "publish", B.VIEW_TRANSITION = "view-transition", B.ACTION = "action", B.DATABASE = "database", B.PROJECT_SETTINGS = "project-settings", B),
                            tw = ((x = tw || {}).REVISION_ID = "revisionid", x),
                            tF = ((w = tF || {}).DB_ID = "dbid", w.MIGRATION_ID = "migrationid", w),
                            tK = ((F = tK || {}).AUTO_SELECT = "autoselect", F),
                            tW = ((K = tW || {}).INTEGRATION_USAGE = "INTEGRATION_USAGE", K.GENERATION_USAGE = "GENERATION_USAGE", K),
                            tj = ((W = tj || {}).CHAT_GPT = "CHAT_GPT", W.GOOGLE_GEMINI = "GOOGLE_GEMINI", W.GOOGLE_GEMINI_1_5 = "GOOGLE_GEMINI_1_5", W.GOOGLE_GEMINI_1_5_FLASH = "GOOGLE_GEMINI_1_5_FLASH", W.GOOGLE_GEMINI_2_0_FLASH = "GOOGLE_GEMINI_2_0_FLASH", W.DEEPSEEK_V3 = "DEEPSEEK_V3", W.ANTHROPIC_CLAUDE = "ANTHROPIC_CLAUDE", W.ANTHROPIC_CLAUDE_SONNET = "ANTHROPIC_CLAUDE_SONNET", W.ANTHROPIC_CLAUDE_SONNET_3_5 = "ANTHROPIC_CLAUDE_SONNET_3_5", W.ANTHROPIC_CLAUDE_HAIKU = "ANTHROPIC_CLAUDE_HAIKU", W.GROQ = "GROQ", W.REKA = "REKA", W.COHERE_COMMAND_R_PLUS = "COHERE_COMMAND_R_PLUS", W),
                            tZ = {
                                "gpt-4o-mini-2024-07-18": "CHAT_GPT",
                                "gpt-4o-2024-08-06": "CHAT_GPT",
                                "gpt-4o-mini": "CHAT_GPT",
                                "o1-2024-12-17": "CHAT_GPT",
                                "o1-mini-2024-09-12": "CHAT_GPT",
                                "gemini-1.0-pro": "GOOGLE_GEMINI",
                                "gemini-1.5-pro-latest": "GOOGLE_GEMINI_1_5",
                                "gemini-1.5-flash": "GOOGLE_GEMINI_1_5_FLASH",
                                "gemini-2.0-flash-exp": "GOOGLE_GEMINI_2_0_FLASH",
                                "claude-3-opus-20240229": "ANTHROPIC_CLAUDE",
                                "claude-3-sonnet-20240229": "ANTHROPIC_CLAUDE_SONNET",
                                "claude-3-5-sonnet-20240620": "ANTHROPIC_CLAUDE_SONNET_3_5",
                                "claude-3-5-sonnet-20241022": "ANTHROPIC_CLAUDE_SONNET_3_5",
                                "claude-3-7-sonnet-20250219": "ANTHROPIC_CLAUDE_SONNET_3_5",
                                "claude-3-haiku-20240307": "ANTHROPIC_CLAUDE_HAIKU",
                                "llama3-70b-8192": "GROQ",
                                "command-r-plus": "COHERE_COMMAND_R_PLUS",
                                "reka-flash": "REKA",
                                "anthropic.claude-3-5-sonnet-20240620-v1:0": "ANTHROPIC_CLAUDE_SONNET_3_5",
                                "anthropic.claude-3-5-sonnet-20241022-v2:0": "ANTHROPIC_CLAUDE_SONNET_3_5",
                                "anthropic.claude-3-7-sonnet-20250219-v1:0": "ANTHROPIC_CLAUDE_SONNET_3_5",
                                "deepseek-chat": "DEEPSEEK_V3"
                            },
                            tV = "callbackUrl",
                            tY = ((j = tY || {}).google = "google", j.email = "email", j.facebook = "facebook", j.twitter = "twitter", j),
                            tz = {
                                google: {
                                    clientId: "GOOGLE_CLIENT_ID",
                                    clientSecret: "GOOGLE_CLIENT_SECRET"
                                },
                                email: {},
                                facebook: {
                                    clientId: "FACEBOOK_CLIENT_ID",
                                    clientSecret: "FACEBOOK_CLIENT_SECRET"
                                },
                                twitter: {
                                    clientId: "TWITTER_ID",
                                    clientSecret: "TWITTER_CLIENT_SECRET"
                                }
                            },
                            tJ = new Set(Object.values(tY)),
                            tX = e => tJ.has(e),
                            tQ = e => Array.isArray(e) ? e.filter(tX) : [],
                            tq = e => {
                                switch (e) {
                                    case "google":
                                        return {
                                            name: "Google",
                                            iconURL: "/auth-providers/google.svg",
                                            helpURL: "https://www.create.xyz/docs/auth/google"
                                        };
                                    case "twitter":
                                        return {
                                            name: "X (Twitter)",
                                            iconURL: "/auth-providers/twitter.svg",
                                            helpURL: "https://www.create.xyz/docs/auth/x"
                                        };
                                    case "facebook":
                                        return {
                                            name: "Facebook",
                                            iconURL: "/auth-providers/facebook.svg",
                                            helpURL: "https://www.create.xyz/docs/auth/facebook"
                                        };
                                    case "email":
                                        return {
                                            name: "Email",
                                            iconURL: "/auth-providers/email.svg",
                                            helpURL: "https://www.create.xyz/docs/auth/password"
                                        };
                                    default:
                                        return e
                                }
                            },
                            t$ = ((Z = t$ || {}).UPLOADCARE = "UPLOADCARE", Z),
                            t0 = new Map(["ABeeZee", "ADLaM Display", "AR One Sans", "Abel", "Abhaya Libre", "Aboreto", "Abril Fatface", "Abyssinica SIL", "Aclonica", "Acme", "Actor", "Adamina", "Advent Pro", "Agbalumo", "Agdasima", "Aguafina Script", "Akatab", "Akaya Kanadaka", "Akaya Telivigala", "Akronim", "Akshar", "Aladin", "Alata", "Alatsi", "Albert Sans", "Aldrich", "Alef", "Alegreya", "Alegreya SC", "Alegreya Sans", "Alegreya Sans SC", "Aleo", "Alex Brush", "Alexandria", "Alfa Slab One", "Alice", "Alike", "Alike Angular", "Alkalami", "Alkatra", "Allan", "Allerta", "Allerta Stencil", "Allison", "Allura", "Almarai", "Almendra", "Almendra Display", "Almendra SC", "Alumni Sans", "Alumni Sans Collegiate One", "Alumni Sans Inline One", "Alumni Sans Pinstripe", "Amarante", "Amaranth", "Amatic SC", "Amethysta", "Amiko", "Amiri", "Amiri Quran", "Amita", "Anaheim", "Andada Pro", "Andika", "Anek Bangla", "Anek Devanagari", "Anek Gujarati", "Anek Gurmukhi", "Anek Kannada", "Anek Latin", "Anek Malayalam", "Anek Odia", "Anek Tamil", "Anek Telugu", "Angkor", "Annie Use Your Telescope", "Anonymous Pro", "Antic", "Antic Didone", "Antic Slab", "Anton", "Antonio", "Anuphan", "Anybody", "Aoboshi One", "Arapey", "Arbutus", "Arbutus Slab", "Architects Daughter", "Archivo", "Archivo Black", "Archivo Narrow", "Are You Serious", "Aref Ruqaa", "Aref Ruqaa Ink", "Arima", "Arimo", "Arizonia", "Armata", "Arsenal", "Artifika", "Arvo", "Arya", "Asap", "Asap Condensed", "Asar", "Asset", "Assistant", "Astloch", "Asul", "Athiti", "Atkinson Hyperlegible", "Atma", "Atomic Age", "Aubrey", "Audiowide", "Autour One", "Average", "Average Sans", "Averia Gruesa Libre", "Averia Libre", "Averia Sans Libre", "Averia Serif Libre", "Azeret Mono", "B612", "B612 Mono", "BIZ UDGothic", "BIZ UDMincho", "BIZ UDPGothic", "BIZ UDPMincho", "Babylonica", "Bacasime Antique", "Bad Script", "Bagel Fat One", "Bahiana", "Bahianita", "Bai Jamjuree", "Bakbak One", "Ballet", "Baloo 2", "Baloo Bhai 2", "Baloo Bhaijaan 2", "Baloo Bhaina 2", "Baloo Chettan 2", "Baloo Da 2", "Baloo Paaji 2", "Baloo Tamma 2", "Baloo Tammudu 2", "Baloo Thambi 2", "Balsamiq Sans", "Balthazar", "Bangers", "Barlow", "Barlow Condensed", "Barlow Semi Condensed", "Barriecito", "Barrio", "Basic", "Baskervville", "Battambang", "Baumans", "Bayon", "Be Vietnam Pro", "Beau Rivage", "Bebas Neue", "Belanosima", "Belgrano", "Bellefair", "Belleza", "Bellota", "Bellota Text", "BenchNine", "Benne", "Bentham", "Berkshire Swash", "Besley", "Beth Ellen", "Bevan", "BhuTuka Expanded One", "Big Shoulders Display", "Big Shoulders Inline Display", "Big Shoulders Inline Text", "Big Shoulders Stencil Display", "Big Shoulders Stencil Text", "Big Shoulders Text", "Bigelow Rules", "Bigshot One", "Bilbo", "Bilbo Swash Caps", "BioRhyme", "BioRhyme Expanded", "Birthstone", "Birthstone Bounce", "Biryani", "Bitter", "Black And White Picture", "Black Han Sans", "Black Ops One", "Blaka", "Blaka Hollow", "Blaka Ink", "Blinker", "Bodoni Moda", "Bokor", "Bona Nova", "Bonbon", "Bonheur Royale", "Boogaloo", "Borel", "Bowlby One", "Bowlby One SC", "Braah One", "Brawler", "Bree Serif", "Bricolage Grotesque", "Bruno Ace", "Bruno Ace SC", "Brygada 1918", "Bubblegum Sans", "Bubbler One", "Buda", "Buenard", "Bungee", "Bungee Hairline", "Bungee Inline", "Bungee Outline", "Bungee Shade", "Bungee Spice", "Butcherman", "Butterfly Kids", "Cabin", "Cabin Condensed", "Cabin Sketch", "Caesar Dressing", "Cagliostro", "Cairo", "Cairo Play", "Caladea", "Calistoga", "Calligraffitti", "Cambay", "Cambo", "Candal", "Cantarell", "Cantata One", "Cantora One", "Caprasimo", "Capriola", "Caramel", "Carattere", "Cardo", "Carlito", "Carme", "Carrois Gothic", "Carrois Gothic SC", "Carter One", "Castoro", "Castoro Titling", "Catamaran", "Caudex", "Caveat", "Caveat Brush", "Cedarville Cursive", "Ceviche One", "Chakra Petch", "Changa", "Changa One", "Chango", "Charis SIL", "Charm", "Charmonman", "Chathura", "Chau Philomene One", "Chela One", "Chelsea Market", "Chenla", "Cherish", "Cherry Bomb One", "Cherry Cream Soda", "Cherry Swash", "Chewy", "Chicle", "Chilanka", "Chivo", "Chivo Mono", "Chokokutai", "Chonburi", "Cinzel", "Cinzel Decorative", "Clicker Script", "Climate Crisis", "Coda", "Codystar", "Coiny", "Combo", "Comfortaa", "Comforter", "Comforter Brush", "Comic Neue", "Coming Soon", "Comme", "Commissioner", "Concert One", "Condiment", "Content", "Contrail One", "Convergence", "Cookie", "Copse", "Corben", "Corinthia", "Cormorant", "Cormorant Garamond", "Cormorant Infant", "Cormorant SC", "Cormorant Unicase", "Cormorant Upright", "Courgette", "Courier Prime", "Cousine", "Coustard", "Covered By Your Grace", "Crafty Girls", "Creepster", "Crete Round", "Crimson Pro", "Crimson Text", "Croissant One", "Crushed", "Cuprum", "Cute Font", "Cutive", "Cutive Mono", "DM Mono", "DM Sans", "DM Serif Display", "DM Serif Text", "Dai Banna SIL", "Damion", "Dancing Script", "Dangrek", "Darker Grotesque", "Darumadrop One", "David Libre", "Dawning of a New Day", "Days One", "Dekko", "Dela Gothic One", "Delicious Handrawn", "Delius", "Delius Swash Caps", "Delius Unicase", "Della Respira", "Denk One", "Devonshire", "Dhurjati", "Didact Gothic", "Diphylleia", "Diplomata", "Diplomata SC", "Do Hyeon", "Dokdo", "Domine", "Donegal One", "Dongle", "Doppio One", "Dorsa", "Dosis", "DotGothic16", "Dr Sugiyama", "Duru Sans", "DynaPuff", "Dynalight", "EB Garamond", "Eagle Lake", "East Sea Dokdo", "Eater", "Economica", "Eczar", "Edu NSW ACT Foundation", "Edu QLD Beginner", "Edu SA Beginner", "Edu TAS Beginner", "Edu VIC WA NT Beginner", "El Messiri", "Electrolize", "Elsie", "Elsie Swash Caps", "Emblema One", "Emilys Candy", "Encode Sans", "Encode Sans Condensed", "Encode Sans Expanded", "Encode Sans SC", "Encode Sans Semi Condensed", "Encode Sans Semi Expanded", "Engagement", "Englebert", "Enriqueta", "Ephesis", "Epilogue", "Erica One", "Esteban", "Estonia", "Euphoria Script", "Ewert", "Exo", "Exo 2", "Expletus Sans", "Explora", "Fahkwang", "Familjen Grotesk", "Fanwood Text", "Farro", "Farsan", "Fascinate", "Fascinate Inline", "Faster One", "Fasthand", "Fauna One", "Faustina", "Federant", "Federo", "Felipa", "Fenix", "Festive", "Figtree", "Finger Paint", "Finlandica", "Fira Code", "Fira Mono", "Fira Sans", "Fira Sans Condensed", "Fira Sans Extra Condensed", "Fjalla One", "Fjord One", "Flamenco", "Flavors", "Fleur De Leah", "Flow Block", "Flow Circular", "Flow Rounded", "Foldit", "Fondamento", "Fontdiner Swanky", "Forum", "Fragment Mono", "Francois One", "Frank Ruhl Libre", "Fraunces", "Freckle Face", "Fredericka the Great", "Fredoka", "Freehand", "Fresca", "Frijole", "Fruktur", "Fugaz One", "Fuggles", "Fuzzy Bubbles", "GFS Didot", "GFS Neohellenic", "Gabarito", "Gabriela", "Gaegu", "Gafata", "Gajraj One", "Galada", "Galdeano", "Galindo", "Gamja Flower", "Gantari", "Gasoek One", "Gayathri", "Gelasio", "Gemunu Libre", "Genos", "Gentium Book Plus", "Gentium Plus", "Geo", "Geologica", "Georama", "Geostar", "Geostar Fill", "Germania One", "Gideon Roman", "Gidugu", "Gilda Display", "Girassol", "Give You Glory", "Glass Antiqua", "Glegoo", "Gloock", "Gloria Hallelujah", "Glory", "Gluten", "Goblin One", "Gochi Hand", "Goldman", "Golos Text", "Gorditas", "Gothic A1", "Gotu", "Goudy Bookletter 1911", "Gowun Batang", "Gowun Dodum", "Graduate", "Grand Hotel", "Grandiflora One", "Grandstander", "Grape Nuts", "Gravitas One", "Great Vibes", "Grechen Fuemen", "Grenze", "Grenze Gotisch", "Grey Qo", "Griffy", "Gruppo", "Gudea", "Gugi", "Gulzar", "Gupter", "Gurajada", "Gwendolyn", "Habibi", "Hachi Maru Pop", "Hahmlet", "Halant", "Hammersmith One", "Hanalei", "Hanalei Fill", "Handjet", "Handlee", "Hanken Grotesk", "Hanuman", "Happy Monkey", "Harmattan", "Headland One", "Heebo", "Henny Penny", "Hepta Slab", "Herr Von Muellerhoff", "Hi Melody", "Hina Mincho", "Hind", "Hind Guntur", "Hind Madurai", "Hind Siliguri", "Hind Vadodara", "Holtwood One SC", "Homemade Apple", "Homenaje", "Hubballi", "Hurricane", "IBM Plex Mono", "IBM Plex Sans", "IBM Plex Sans Arabic", "IBM Plex Sans Condensed", "IBM Plex Sans Devanagari", "IBM Plex Sans Hebrew", "IBM Plex Sans JP", "IBM Plex Sans KR", "IBM Plex Sans Thai", "IBM Plex Sans Thai Looped", "IBM Plex Serif", "IM Fell DW Pica", "IM Fell DW Pica SC", "IM Fell Double Pica", "IM Fell Double Pica SC", "IM Fell English", "IM Fell English SC", "IM Fell French Canon", "IM Fell French Canon SC", "IM Fell Great Primer", "IM Fell Great Primer SC", "Ibarra Real Nova", "Iceberg", "Iceland", "Imbue", "Imperial Script", "Imprima", "Inclusive Sans", "Inconsolata", "Inder", "Indie Flower", "Ingrid Darling", "Inika", "Inknut Antiqua", "Inria Sans", "Inria Serif", "Inspiration", "Instrument Sans", "Instrument Serif", "Inter", "Inter Tight", "Irish Grover", "Island Moments", "Istok Web", "Italiana", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jaldi", "JetBrains Mono", "Jim Nightshade", "Joan", "Jockey One", "Jolly Lodger", "Jomhuria", "Jomolhari", "Josefin Sans", "Josefin Slab", "Jost", "Joti One", "Jua", "Judson", "Julee", "Julius Sans One", "Junge", "Jura", "Just Another Hand", "Just Me Again Down Here", "K2D", "Kablammo", "Kadwa", "Kaisei Decol", "Kaisei HarunoUmi", "Kaisei Opti", "Kaisei Tokumin", "Kalam", "Kameron", "Kanit", "Kantumruy Pro", "Karantina", "Karla", "Karma", "Katibeh", "Kaushan Script", "Kavivanar", "Kavoon", "Kay Pho Du", "Kdam Thmor Pro", "Keania One", "Kelly Slab", "Kenia", "Khand", "Khmer", "Khula", "Kings", "Kirang Haerang", "Kite One", "Kiwi Maru", "Klee One", "Knewave", "KoHo", "Kodchasan", "Koh Santepheap", "Kolker Brush", "Konkhmer Sleokchher", "Kosugi", "Kosugi Maru", "Kotta One", "Koulen", "Kranky", "Kreon", "Kristi", "Krona One", "Krub", "Kufam", "Kulim Park", "Kumar One", "Kumar One Outline", "Kumbh Sans", "Kurale", "La Belle Aurore", "Labrada", "Lacquer", "Laila", "Lakki Reddy", "Lalezar", "Lancelot", "Langar", "Lateef", "Lato", "Lavishly Yours", "League Gothic", "League Script", "League Spartan", "Leckerli One", "Ledger", "Lekton", "Lemon", "Lemonada", "Lexend", "Lexend Deca", "Lexend Exa", "Lexend Giga", "Lexend Mega", "Lexend Peta", "Lexend Tera", "Lexend Zetta", "Libre Barcode 128", "Libre Barcode 128 Text", "Libre Barcode 39", "Libre Barcode 39 Extended", "Libre Barcode 39 Extended Text", "Libre Barcode 39 Text", "Libre Barcode EAN13 Text", "Libre Baskerville", "Libre Bodoni", "Libre Caslon Display", "Libre Caslon Text", "Libre Franklin", "Licorice", "Life Savers", "Lilita One", "Lily Script One", "Limelight", "Linden Hill", "Linefont", "Lisu Bosa", "Literata", "Liu Jian Mao Cao", "Livvic", "Lobster", "Lobster Two", "Londrina Outline", "Londrina Shadow", "Londrina Sketch", "Londrina Solid", "Long Cang", "Lora", "Love Light", "Love Ya Like A Sister", "Loved by the King", "Lovers Quarrel", "Luckiest Guy", "Lugrasimo", "Lumanosimo", "Lunasima", "Lusitana", "Lustria", "Luxurious Roman", "Luxurious Script", "M PLUS 1", "M PLUS 1 Code", "M PLUS 1p", "M PLUS 2", "M PLUS Code Latin", "M PLUS Rounded 1c", "Ma Shan Zheng", "Macondo", "Macondo Swash Caps", "Mada", "Magra", "Maiden Orange", "Maitree", "Major Mono Display", "Mako", "Mali", "Mallanna", "Mandali", "Manjari", "Manrope", "Mansalva", "Manuale", "Marcellus", "Marcellus SC", "Marck Script", "Margarine", "Marhey", "Markazi Text", "Marko One", "Marmelad", "Martel", "Martel Sans", "Martian Mono", "Marvel", "Mate", "Mate SC", "Maven Pro", "McLaren", "Mea Culpa", "Meddon", "MedievalSharp", "Medula One", "Meera Inimai", "Megrim", "Meie Script", "Meow Script", "Merienda", "Merriweather", "Merriweather Sans", "Metal", "Metal Mania", "Metamorphous", "Metrophobic", "Michroma", "Milonga", "Miltonian", "Miltonian Tattoo", "Mina", "Mingzat", "Miniver", "Miriam Libre", "Mirza", "Miss Fajardose", "Mitr", "Mochiy Pop One", "Mochiy Pop P One", "Modak", "Modern Antiqua", "Mogra", "Mohave", "Moirai One", "Molengo", "Molle", "Monda", "Monofett", "Monomaniac One", "Monoton", "Monsieur La Doulaise", "Montaga", "Montagu Slab", "MonteCarlo", "Montez", "Montserrat", "Montserrat Alternates", "Montserrat Subrayada", "Moo Lah Lah", "Mooli", "Moon Dance", "Moul", "Moulpali", "Mountains of Christmas", "Mouse Memoirs", "Mr Bedfort", "Mr Dafoe", "Mr De Haviland", "Mrs Saint Delafield", "Mrs Sheppards", "Ms Madi", "Mukta", "Mukta Mahee", "Mukta Malar", "Mukta Vaani", "Mulish", "Murecho", "MuseoModerno", "My Soul", "Mynerve", "Mystery Quest", "NTR", "Nabla", "Nanum Brush Script", "Nanum Gothic", "Nanum Gothic Coding", "Nanum Myeongjo", "Nanum Pen Script", "Narnoor", "Neonderthaw", "Nerko One", "Neucha", "Neuton", "New Rocker", "New Tegomin", "News Cycle", "Newsreader", "Niconne", "Niramit", "Nixie One", "Nobile", "Nokora", "Norican", "Nosifer", "Notable", "Nothing You Could Do", "Noticia Text", "Noto Color Emoji", "Noto Emoji", "Noto Kufi Arabic", "Noto Music", "Noto Naskh Arabic", "Noto Nastaliq Urdu", "Noto Rashi Hebrew", "Noto Sans", "Noto Sans Adlam", "Noto Sans Adlam Unjoined", "Noto Sans Anatolian Hieroglyphs", "Noto Sans Arabic", "Noto Sans Armenian", "Noto Sans Avestan", "Noto Sans Balinese", "Noto Sans Bamum", "Noto Sans Bassa Vah", "Noto Sans Batak", "Noto Sans Bengali", "Noto Sans Bhaiksuki", "Noto Sans Brahmi", "Noto Sans Buginese", "Noto Sans Buhid", "Noto Sans Canadian Aboriginal", "Noto Sans Carian", "Noto Sans Caucasian Albanian", "Noto Sans Chakma", "Noto Sans Cham", "Noto Sans Cherokee", "Noto Sans Chorasmian", "Noto Sans Coptic", "Noto Sans Cuneiform", "Noto Sans Cypriot", "Noto Sans Cypro Minoan", "Noto Sans Deseret", "Noto Sans Devanagari", "Noto Sans Display", "Noto Sans Duployan", "Noto Sans Egyptian Hieroglyphs", "Noto Sans Elbasan", "Noto Sans Elymaic", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Glagolitic", "Noto Sans Gothic", "Noto Sans Grantha", "Noto Sans Gujarati", "Noto Sans Gunjala Gondi", "Noto Sans Gurmukhi", "Noto Sans HK", "Noto Sans Hanifi Rohingya", "Noto Sans Hanunoo", "Noto Sans Hatran", "Noto Sans Hebrew", "Noto Sans Imperial Aramaic", "Noto Sans Indic Siyaq Numbers", "Noto Sans Inscriptional Pahlavi", "Noto Sans Inscriptional Parthian", "Noto Sans JP", "Noto Sans Javanese", "Noto Sans KR", "Noto Sans Kaithi", "Noto Sans Kannada", "Noto Sans Kawi", "Noto Sans Kayah Li", "Noto Sans Kharoshthi", "Noto Sans Khmer", "Noto Sans Khojki", "Noto Sans Khudawadi", "Noto Sans Lao", "Noto Sans Lao Looped", "Noto Sans Lepcha", "Noto Sans Limbu", "Noto Sans Linear A", "Noto Sans Linear B", "Noto Sans Lisu", "Noto Sans Lycian", "Noto Sans Lydian", "Noto Sans Mahajani", "Noto Sans Malayalam", "Noto Sans Mandaic", "Noto Sans Manichaean", "Noto Sans Marchen", "Noto Sans Masaram Gondi", "Noto Sans Math", "Noto Sans Mayan Numerals", "Noto Sans Medefaidrin", "Noto Sans Meetei Mayek", "Noto Sans Mende Kikakui", "Noto Sans Meroitic", "Noto Sans Miao", "Noto Sans Modi", "Noto Sans Mongolian", "Noto Sans Mono", "Noto Sans Mro", "Noto Sans Multani", "Noto Sans Myanmar", "Noto Sans NKo", "Noto Sans NKo Unjoined", "Noto Sans Nabataean", "Noto Sans Nag Mundari", "Noto Sans Nandinagari", "Noto Sans New Tai Lue", "Noto Sans Newa", "Noto Sans Nushu", "Noto Sans Ogham", "Noto Sans Ol Chiki", "Noto Sans Old Hungarian", "Noto Sans Old Italic", "Noto Sans Old North Arabian", "Noto Sans Old Permic", "Noto Sans Old Persian", "Noto Sans Old Sogdian", "Noto Sans Old South Arabian", "Noto Sans Old Turkic", "Noto Sans Oriya", "Noto Sans Osage", "Noto Sans Osmanya", "Noto Sans Pahawh Hmong", "Noto Sans Palmyrene", "Noto Sans Pau Cin Hau", "Noto Sans Phags Pa", "Noto Sans Phoenician", "Noto Sans Psalter Pahlavi", "Noto Sans Rejang", "Noto Sans Runic", "Noto Sans SC", "Noto Sans Samaritan", "Noto Sans Saurashtra", "Noto Sans Sharada", "Noto Sans Shavian", "Noto Sans Siddham", "Noto Sans SignWriting", "Noto Sans Sinhala", "Noto Sans Sogdian", "Noto Sans Sora Sompeng", "Noto Sans Soyombo", "Noto Sans Sundanese", "Noto Sans Syloti Nagri", "Noto Sans Symbols", "Noto Sans Symbols 2", "Noto Sans Syriac", "Noto Sans Syriac Eastern", "Noto Sans TC", "Noto Sans Tagalog", "Noto Sans Tagbanwa", "Noto Sans Tai Le", "Noto Sans Tai Tham", "Noto Sans Tai Viet", "Noto Sans Takri", "Noto Sans Tamil", "Noto Sans Tamil Supplement", "Noto Sans Tangsa", "Noto Sans Telugu", "Noto Sans Thaana", "Noto Sans Thai", "Noto Sans Thai Looped", "Noto Sans Tifinagh", "Noto Sans Tirhuta", "Noto Sans Ugaritic", "Noto Sans Vai", "Noto Sans Vithkuqi", "Noto Sans Wancho", "Noto Sans Warang Citi", "Noto Sans Yi", "Noto Sans Zanabazar Square", "Noto Serif", "Noto Serif Ahom", "Noto Serif Armenian", "Noto Serif Balinese", "Noto Serif Bengali", "Noto Serif Devanagari", "Noto Serif Display", "Noto Serif Dogra", "Noto Serif Ethiopic", "Noto Serif Georgian", "Noto Serif Grantha", "Noto Serif Gujarati", "Noto Serif Gurmukhi", "Noto Serif HK", "Noto Serif Hebrew", "Noto Serif JP", "Noto Serif KR", "Noto Serif Kannada", "Noto Serif Khitan Small Script", "Noto Serif Khmer", "Noto Serif Khojki", "Noto Serif Lao", "Noto Serif Makasar", "Noto Serif Malayalam", "Noto Serif Myanmar", "Noto Serif NP Hmong", "Noto Serif Old Uyghur", "Noto Serif Oriya", "Noto Serif Ottoman Siyaq", "Noto Serif SC", "Noto Serif Sinhala", "Noto Serif TC", "Noto Serif Tamil", "Noto Serif Tangut", "Noto Serif Telugu", "Noto Serif Thai", "Noto Serif Tibetan", "Noto Serif Toto", "Noto Serif Vithkuqi", "Noto Serif Yezidi", "Noto Traditional Nushu", "Nova Cut", "Nova Flat", "Nova Mono", "Nova Oval", "Nova Round", "Nova Script", "Nova Slim", "Nova Square", "Numans", "Nunito", "Nunito Sans", "Nuosu SIL", "Odibee Sans", "Odor Mean Chey", "Offside", "Oi", "Old Standard TT", "Oldenburg", "Ole", "Oleo Script", "Oleo Script Swash Caps", "Onest", "Oooh Baby", "Open Sans", "Oranienbaum", "Orbit", "Orbitron", "Oregano", "Orelega One", "Orienta", "Original Surfer", "Oswald", "Outfit", "Over the Rainbow", "Overlock", "Overlock SC", "Overpass", "Overpass Mono", "Ovo", "Oxanium", "Oxygen", "Oxygen Mono", "PT Mono", "PT Sans", "PT Sans Caption", "PT Sans Narrow", "PT Serif", "PT Serif Caption", "Pacifico", "Padauk", "Padyakke Expanded One", "Palanquin", "Palanquin Dark", "Palette Mosaic", "Pangolin", "Paprika", "Parisienne", "Passero One", "Passion One", "Passions Conflict", "Pathway Extreme", "Pathway Gothic One", "Patrick Hand", "Patrick Hand SC", "Pattaya", "Patua One", "Pavanam", "Paytone One", "Peddana", "Peralta", "Permanent Marker", "Petemoss", "Petit Formal Script", "Petrona", "Philosopher", "Phudu", "Piazzolla", "Piedra", "Pinyon Script", "Pirata One", "Pixelify Sans", "Plaster", "Play", "Playball", "Playfair", "Playfair Display", "Playfair Display SC", "Playpen Sans", "Plus Jakarta Sans", "Podkova", "Poiret One", "Poller One", "Poltawski Nowy", "Poly", "Pompiere", "Pontano Sans", "Poor Story", "Poppins", "Port Lligat Sans", "Port Lligat Slab", "Potta One", "Pragati Narrow", "Praise", "Prata", "Preahvihear", "Press Start 2P", "Pridi", "Princess Sofia", "Prociono", "Prompt", "Prosto One", "Proza Libre", "Public Sans", "Puppies Play", "Puritan", "Purple Purse", "Qahiri", "Quando", "Quantico", "Quattrocento", "Quattrocento Sans", "Questrial", "Quicksand", "Quintessential", "Qwigley", "Qwitcher Grypen", "REM", "Racing Sans One", "Radio Canada", "Radley", "Rajdhani", "Rakkas", "Raleway", "Raleway Dots", "Ramabhadra", "Ramaraja", "Rambla", "Rammetto One", "Rampart One", "Ranchers", "Rancho", "Ranga", "Rasa", "Rationale", "Ravi Prakash", "Readex Pro", "Recursive", "Red Hat Display", "Red Hat Mono", "Red Hat Text", "Red Rose", "Redacted", "Redacted Script", "Redressed", "Reem Kufi", "Reem Kufi Fun", "Reem Kufi Ink", "Reenie Beanie", "Reggae One", "Revalia", "Rhodium Libre", "Ribeye", "Ribeye Marrow", "Righteous", "Risque", "Road Rage", "Roboto", "Roboto Condensed", "Roboto Flex", "Roboto Mono", "Roboto Serif", "Roboto Slab", "Rochester", "Rock 3D", "Rock Salt", "RocknRoll One", "Rokkitt", "Romanesco", "Ropa Sans", "Rosario", "Rosarivo", "Rouge Script", "Rowdies", "Rozha One", "Rubik", "Rubik 80s Fade", "Rubik Beastly", "Rubik Bubbles", "Rubik Burned", "Rubik Dirt", "Rubik Distressed", "Rubik Gemstones", "Rubik Glitch", "Rubik Iso", "Rubik Marker Hatch", "Rubik Maze", "Rubik Microbe", "Rubik Mono One", "Rubik Moonrocks", "Rubik Pixels", "Rubik Puddles", "Rubik Spray Paint", "Rubik Storm", "Rubik Vinyl", "Rubik Wet Paint", "Ruda", "Rufina", "Ruge Boogie", "Ruluko", "Rum Raisin", "Ruslan Display", "Russo One", "Ruthie", "Ruwudu", "Rye", "STIX Two Text", "Sacramento", "Sahitya", "Sail", "Saira", "Saira Condensed", "Saira Extra Condensed", "Saira Semi Condensed", "Saira Stencil One", "Salsa", "Sanchez", "Sancreek", "Sansita", "Sansita Swashed", "Sarabun", "Sarala", "Sarina", "Sarpanch", "Sassy Frass", "Satisfy", "Sawarabi Gothic", "Sawarabi Mincho", "Scada", "Scheherazade New", "Schibsted Grotesk", "Schoolbell", "Scope One", "Seaweed Script", "Secular One", "Sedgwick Ave", "Sedgwick Ave Display", "Sen", "Send Flowers", "Sevillana", "Seymour One", "Shadows Into Light", "Shadows Into Light Two", "Shalimar", "Shantell Sans", "Shanti", "Share", "Share Tech", "Share Tech Mono", "Shippori Antique", "Shippori Antique B1", "Shippori Mincho", "Shippori Mincho B1", "Shizuru", "Shojumaru", "Short Stack", "Shrikhand", "Siemreap", "Sigmar", "Sigmar One", "Signika", "Signika Negative", "Silkscreen", "Simonetta", "Single Day", "Sintony", "Sirin Stencil", "Six Caps", "Skranji", "Slabo 13px", "Slabo 27px", "Slackey", "Slackside One", "Smokum", "Smooch", "Smooch Sans", "Smythe", "Sniglet", "Snippet", "Snowburst One", "Sofadi One", "Sofia", "Sofia Sans", "Sofia Sans Condensed", "Sofia Sans Extra Condensed", "Sofia Sans Semi Condensed", "Solitreo", "Solway", "Sometype Mono", "Song Myung", "Sono", "Sonsie One", "Sora", "Sorts Mill Goudy", "Source Code Pro", "Source Sans 3", "Source Serif 4", "Space Grotesk", "Space Mono", "Special Elite", "Spectral", "Spectral SC", "Spicy Rice", "Spinnaker", "Spirax", "Splash", "Spline Sans", "Spline Sans Mono", "Squada One", "Square Peg", "Sree Krushnadevaraya", "Sriracha", "Srisakdi", "Staatliches", "Stalemate", "Stalinist One", "Stardos Stencil", "Stick", "Stick No Bills", "Stint Ultra Condensed", "Stint Ultra Expanded", "Stoke", "Strait", "Style Script", "Stylish", "Sue Ellen Francisco", "Suez One", "Sulphur Point", "Sumana", "Sunflower", "Sunshiney", "Supermercado One", "Sura", "Suranna", "Suravaram", "Suwannaphum", "Swanky and Moo Moo", "Syncopate", "Syne", "Syne Mono", "Syne Tactile", "Tai Heritage Pro", "Tajawal", "Tangerine", "Tapestry", "Taprom", "Tauri", "Taviraj", "Teko", "Tektur", "Telex", "Tenali Ramakrishna", "Tenor Sans", "Text Me One", "Texturina", "Thasadith", "The Girl Next Door", "The Nautigal", "Tienne", "Tillana", "Tilt Neon", "Tilt Prism", "Tilt Warp", "Timmana", "Tinos", "Tiro Bangla", "Tiro Devanagari Hindi", "Tiro Devanagari Marathi", "Tiro Devanagari Sanskrit", "Tiro Gurmukhi", "Tiro Kannada", "Tiro Tamil", "Tiro Telugu", "Titan One", "Titillium Web", "Tomorrow", "Tourney", "Trade Winds", "Train One", "Trirong", "Trispace", "Trocchi", "Trochut", "Truculenta", "Trykker", "Tsukimi Rounded", "Tulpen One", "Turret Road", "Twinkle Star", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Uchen", "Ultra", "Unbounded", "Uncial Antiqua", "Underdog", "Unica One", "UnifrakturCook", "UnifrakturMaguntia", "Unkempt", "Unlock", "Unna", "Updock", "Urbanist", "VT323", "Vampiro One", "Varela", "Varela Round", "Varta", "Vast Shadow", "Vazirmatn", "Vesper Libre", "Viaoda Libre", "Vibes", "Vibur", "Victor Mono", "Vidaloka", "Viga", "Vina Sans", "Voces", "Volkhov", "Vollkorn", "Vollkorn SC", "Voltaire", "Vujahday Script", "Waiting for the Sunrise", "Wallpoet", "Walter Turncoat", "Warnes", "Water Brush", "Waterfall", "Wavefont", "Wellfleet", "Wendy One", "Whisper", "WindSong", "Wire One", "Wix Madefor Display", "Wix Madefor Text", "Work Sans", "Xanh Mono", "Yaldevi", "Yanone Kaffeesatz", "Yantramanav", "Yatra One", "Yellowtail", "Yeon Sung", "Yeseva One", "Yesteryear", "Yomogi", "Young Serif", "Yrsa", "Ysabeau", "Ysabeau Infant", "Ysabeau Office", "Ysabeau SC", "Yuji Boku", "Yuji Hentaigana Akari", "Yuji Hentaigana Akebono", "Yuji Mai", "Yuji Syuku", "Yusei Magic", "ZCOOL KuaiLe", "ZCOOL QingKe HuangYou", "ZCOOL XiaoWei", "Zen Antique", "Zen Antique Soft", "Zen Dots", "Zen Kaku Gothic Antique", "Zen Kaku Gothic New", "Zen Kurenaido", "Zen Loop", "Zen Maru Gothic", "Zen Old Mincho", "Zen Tokyo Zoo", "Zeyada", "Zhi Mang Xing", "Zilla Slab", "Zilla Slab Highlight"].map(e => [e.replaceAll(" ", "-").toLowerCase(), e])),
                            t1 = "Create - free-to-use AI app builder",
                            t2 = "Create lets you code using plain text and images. Use it to build components, sites, designs, prototypes, products, tools and more.",
                            t4 = "hello@create.xyz",
                            t9 = ((V = t9 || {}).AFGHANISTAN = "AFGHANISTAN", V.ALAND_ISLANDS = "ALAND_ISLANDS", V.ALBANIA = "ALBANIA", V.ALGERIA = "ALGERIA", V.AMERICAN_SAMOA = "AMERICAN_SAMOA", V.ANDORRA = "ANDORRA", V.ANGOLA = "ANGOLA", V.ANGUILLA = "ANGUILLA", V.ANTARCTICA = "ANTARCTICA", V.ANTIGUA_AND_BARBUDA = "ANTIGUA_AND_BARBUDA", V.ARGENTINA = "ARGENTINA", V.ARMENIA = "ARMENIA", V.ARUBA = "ARUBA", V.AUSTRALIA = "AUSTRALIA", V.AUSTRIA = "AUSTRIA", V.AZERBAIJAN = "AZERBAIJAN", V.BAHAMAS = "BAHAMAS", V.BAHRAIN = "BAHRAIN", V.BANGLADESH = "BANGLADESH", V.BARBADOS = "BARBADOS", V.BELARUS = "BELARUS", V.BELGIUM = "BELGIUM", V.BELIZE = "BELIZE", V.BENIN = "BENIN", V.BERMUDA = "BERMUDA", V.BHUTAN = "BHUTAN", V.BOLIVIA = "BOLIVIA", V.BONAIRE_SINT_EUSTATIUS_SABA = "BONAIRE_SINT_EUSTATIUS_SABA", V.BOSNIA_AND_HERZEGOVINA = "BOSNIA_AND_HERZEGOVINA", V.BOTSWANA = "BOTSWANA", V.BOUVET_ISLAND = "BOUVET_ISLAND", V.BRAZIL = "BRAZIL", V.BRITISH_INDIAN_OCEAN_TERRITORY = "BRITISH_INDIAN_OCEAN_TERRITORY", V.BRUNEI_DARUSSALAM = "BRUNEI_DARUSSALAM", V.BULGARIA = "BULGARIA", V.BURKINA_FASO = "BURKINA_FASO", V.BURUNDI = "BURUNDI", V.CAMBODIA = "CAMBODIA", V.CAMEROON = "CAMEROON", V.CANADA = "CANADA", V.CAPE_VERDE = "CAPE_VERDE", V.CAYMAN_ISLANDS = "CAYMAN_ISLANDS", V.CENTRAL_AFRICAN_REPUBLIC = "CENTRAL_AFRICAN_REPUBLIC", V.CHAD = "CHAD", V.CHILE = "CHILE", V.CHINA = "CHINA", V.CHRISTMAS_ISLAND = "CHRISTMAS_ISLAND", V.COCOS_KEELING_ISLANDS = "COCOS_KEELING_ISLANDS", V.COLOMBIA = "COLOMBIA", V.COMOROS = "COMOROS", V.CONGO = "CONGO", V.CONGO_DEMOCRATIC_REPUBLIC = "CONGO_DEMOCRATIC_REPUBLIC", V.COOK_ISLANDS = "COOK_ISLANDS", V.COSTA_RICA = "COSTA_RICA", V.COTE_D_IVOIRE = "COTE_D_IVOIRE", V.CROATIA = "CROATIA", V.CUBA = "CUBA", V.CURACAO = "CURACAO", V.CYPRUS = "CYPRUS", V.CZECH_REPUBLIC = "CZECH_REPUBLIC", V.DENMARK = "DENMARK", V.DJIBOUTI = "DJIBOUTI", V.DOMINICA = "DOMINICA", V.DOMINICAN_REPUBLIC = "DOMINICAN_REPUBLIC", V.ECUADOR = "ECUADOR", V.EGYPT = "EGYPT", V.EL_SALVADOR = "EL_SALVADOR", V.EQUATORIAL_GUINEA = "EQUATORIAL_GUINEA", V.ERITREA = "ERITREA", V.ESTONIA = "ESTONIA", V.ETHIOPIA = "ETHIOPIA", V.FALKLAND_ISLANDS = "FALKLAND_ISLANDS", V.FAROE_ISLANDS = "FAROE_ISLANDS", V.FIJI = "FIJI", V.FINLAND = "FINLAND", V.FRANCE = "FRANCE", V.FRENCH_GUIANA = "FRENCH_GUIANA", V.FRENCH_POLYNESIA = "FRENCH_POLYNESIA", V.FRENCH_SOUTHERN_TERRITORIES = "FRENCH_SOUTHERN_TERRITORIES", V.GABON = "GABON", V.GAMBIA = "GAMBIA", V.GEORGIA = "GEORGIA", V.GERMANY = "GERMANY", V.GHANA = "GHANA", V.GIBRALTAR = "GIBRALTAR", V.GREECE = "GREECE", V.GREENLAND = "GREENLAND", V.GRENADA = "GRENADA", V.GUADELOUPE = "GUADELOUPE", V.GUAM = "GUAM", V.GUATEMALA = "GUATEMALA", V.GUERNSEY = "GUERNSEY", V.GUINEA = "GUINEA", V.GUINEA_BISSAU = "GUINEA_BISSAU", V.GUYANA = "GUYANA", V.HAITI = "HAITI", V.HEARD_ISLAND_MCDONALD_ISLANDS = "HEARD_ISLAND_MCDONALD_ISLANDS", V.HOLY_SEE_VATICAN_CITY_STATE = "HOLY_SEE_VATICAN_CITY_STATE", V.HONDURAS = "HONDURAS", V.HONG_KONG = "HONG_KONG", V.HUNGARY = "HUNGARY", V.ICELAND = "ICELAND", V.INDIA = "INDIA", V.INDONESIA = "INDONESIA", V.IRAN = "IRAN", V.IRAQ = "IRAQ", V.IRELAND = "IRELAND", V.ISLE_OF_MAN = "ISLE_OF_MAN", V.ISRAEL = "ISRAEL", V.ITALY = "ITALY", V.JAMAICA = "JAMAICA", V.JAPAN = "JAPAN", V.JERSEY = "JERSEY", V.JORDAN = "JORDAN", V.KAZAKHSTAN = "KAZAKHSTAN", V.KENYA = "KENYA", V.KIRIBATI = "KIRIBATI", V.KOREA = "KOREA", V.KOREA_DEMOCRATIC_PEOPLES_REPUBLIC = "KOREA_DEMOCRATIC_PEOPLES_REPUBLIC", V.KUWAIT = "KUWAIT", V.KYRGYZSTAN = "KYRGYZSTAN", V.LAO_PEOPLES_DEMOCRATIC_REPUBLIC = "LAO_PEOPLES_DEMOCRATIC_REPUBLIC", V.LATVIA = "LATVIA", V.LEBANON = "LEBANON", V.LESOTHO = "LESOTHO", V.LIBERIA = "LIBERIA", V.LIBYAN_ARAB_JAMAHIRIYA = "LIBYAN_ARAB_JAMAHIRIYA", V.LIECHTENSTEIN = "LIECHTENSTEIN", V.LITHUANIA = "LITHUANIA", V.LUXEMBOURG = "LUXEMBOURG", V.MACAO = "MACAO", V.MACEDONIA = "MACEDONIA", V.MADAGASCAR = "MADAGASCAR", V.MALAWI = "MALAWI", V.MALAYSIA = "MALAYSIA", V.MALDIVES = "MALDIVES", V.MALI = "MALI", V.MALTA = "MALTA", V.MARSHALL_ISLANDS = "MARSHALL_ISLANDS", V.MARTINIQUE = "MARTINIQUE", V.MAURITANIA = "MAURITANIA", V.MAURITIUS = "MAURITIUS", V.MAYOTTE = "MAYOTTE", V.MEXICO = "MEXICO", V.MICRONESIA = "MICRONESIA", V.MOLDOVA = "MOLDOVA", V.MONACO = "MONACO", V.MONGOLIA = "MONGOLIA", V.MONTENEGRO = "MONTENEGRO", V.MONTSERRAT = "MONTSERRAT", V.MOROCCO = "MOROCCO", V.MOZAMBIQUE = "MOZAMBIQUE", V.MYANMAR = "MYANMAR", V.NAMIBIA = "NAMIBIA", V.NAURU = "NAURU", V.NEPAL = "NEPAL", V.NETHERLANDS = "NETHERLANDS", V.NEW_CALEDONIA = "NEW_CALEDONIA", V.NEW_ZEALAND = "NEW_ZEALAND", V.NICARAGUA = "NICARAGUA", V.NIGER = "NIGER", V.NIGERIA = "NIGERIA", V.NIUE = "NIUE", V.NORFOLK_ISLAND = "NORFOLK_ISLAND", V.NORTHERN_MARIANA_ISLANDS = "NORTHERN_MARIANA_ISLANDS", V.NORWAY = "NORWAY", V.OMAN = "OMAN", V.PAKISTAN = "PAKISTAN", V.PALAU = "PALAU", V.PALESTINIAN_TERRITORY = "PALESTINIAN_TERRITORY", V.PANAMA = "PANAMA", V.PAPUA_NEW_GUINEA = "PAPUA_NEW_GUINEA", V.PARAGUAY = "PARAGUAY", V.PERU = "PERU", V.PHILIPPINES = "PHILIPPINES", V.PITCAIRN = "PITCAIRN", V.POLAND = "POLAND", V.PORTUGAL = "PORTUGAL", V.PUERTO_RICO = "PUERTO_RICO", V.QATAR = "QATAR", V.REUNION = "REUNION", V.ROMANIA = "ROMANIA", V.RUSSIAN_FEDERATION = "RUSSIAN_FEDERATION", V.RWANDA = "RWANDA", V.SAINT_BARTHELEMY = "SAINT_BARTHELEMY", V.SAINT_HELENA = "SAINT_HELENA", V.SAINT_KITTS_AND_NEVIS = "SAINT_KITTS_AND_NEVIS", V.SAINT_LUCIA = "SAINT_LUCIA", V.SAINT_MARTIN = "SAINT_MARTIN", V.SAINT_PIERRE_AND_MIQUELON = "SAINT_PIERRE_AND_MIQUELON", V.SAINT_VINCENT_AND_GRENADINES = "SAINT_VINCENT_AND_GRENADINES", V.SAMOA = "SAMOA", V.SAN_MARINO = "SAN_MARINO", V.SAO_TOME_AND_PRINCIPE = "SAO_TOME_AND_PRINCIPE", V.SAUDI_ARABIA = "SAUDI_ARABIA", V.SENEGAL = "SENEGAL", V.SERBIA = "SERBIA", V.SEYCHELLES = "SEYCHELLES", V.SIERRA_LEONE = "SIERRA_LEONE", V.SINGAPORE = "SINGAPORE", V.SINT_MAARTEN = "SINT_MAARTEN", V.SLOVAKIA = "SLOVAKIA", V.SLOVENIA = "SLOVENIA", V.SOLOMON_ISLANDS = "SOLOMON_ISLANDS", V.SOMALIA = "SOMALIA", V.SOUTH_AFRICA = "SOUTH_AFRICA", V.SOUTH_GEORGIA_AND_SANDWICH_ISL = "SOUTH_GEORGIA_AND_SANDWICH_ISL", V.SOUTH_SUDAN = "SOUTH_SUDAN", V.SPAIN = "SPAIN", V.SRI_LANKA = "SRI_LANKA", V.SUDAN = "SUDAN", V.SURINAME = "SURINAME", V.SVALBARD_AND_JAN_MAYEN = "SVALBARD_AND_JAN_MAYEN", V.SWAZILAND = "SWAZILAND", V.SWEDEN = "SWEDEN", V.SWITZERLAND = "SWITZERLAND", V.SYRIAN_ARAB_REPUBLIC = "SYRIAN_ARAB_REPUBLIC", V.TAIWAN = "TAIWAN", V.TAJIKISTAN = "TAJIKISTAN", V.TANZANIA = "TANZANIA", V.THAILAND = "THAILAND", V.TIMOR_LESTE = "TIMOR_LESTE", V.TOGO = "TOGO", V.TOKELAU = "TOKELAU", V.TONGA = "TONGA", V.TRINIDAD_AND_TOBAGO = "TRINIDAD_AND_TOBAGO", V.TUNISIA = "TUNISIA", V.TURKEY = "TURKEY", V.TURKMENISTAN = "TURKMENISTAN", V.TURKS_AND_CAICOS_ISLANDS = "TURKS_AND_CAICOS_ISLANDS", V.TUVALU = "TUVALU", V.UGANDA = "UGANDA", V.UKRAINE = "UKRAINE", V.UNITED_ARAB_EMIRATES = "UNITED_ARAB_EMIRATES", V.UNITED_KINGDOM = "UNITED_KINGDOM", V.UNITED_STATES = "UNITED_STATES", V.UNITED_STATES_OUTLYING_ISLANDS = "UNITED_STATES_OUTLYING_ISLANDS", V.URUGUAY = "URUGUAY", V.UZBEKISTAN = "UZBEKISTAN", V.VANUATU = "VANUATU", V.VENEZUELA = "VENEZUELA", V.VIETNAM = "VIETNAM", V.VIRGIN_ISLANDS_BRITISH = "VIRGIN_ISLANDS_BRITISH", V.VIRGIN_ISLANDS_US = "VIRGIN_ISLANDS_US", V.WALLIS_AND_FUTUNA = "WALLIS_AND_FUTUNA", V.WESTERN_SAHARA = "WESTERN_SAHARA", V.YEMEN = "YEMEN", V.ZAMBIA = "ZAMBIA", V.ZIMBABWE = "ZIMBABWE", V),
                            t3 = ["AUSTRALIA", "AUSTRIA", "BELGIUM", "BRAZIL", "BULGARIA", "CANADA", "CROATIA", "CYPRUS", "CZECH_REPUBLIC", "DENMARK", "ESTONIA", "FINLAND", "FRANCE", "GERMANY", "GIBRALTAR", "GREECE", "HONG_KONG", "HUNGARY", "IRELAND", "ITALY", "JAPAN", "LATVIA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MALAYSIA", "MALTA", "MEXICO", "NETHERLANDS", "NEW_ZEALAND", "NORWAY", "POLAND", "PORTUGAL", "ROMANIA", "SINGAPORE", "SLOVAKIA", "SLOVENIA", "SPAIN", "SWEDEN", "SWITZERLAND", "THAILAND", "UNITED_ARAB_EMIRATES", "UNITED_KINGDOM", "UNITED_STATES"],
                            t5 = {
                                AFGHANISTAN: "AF",
                                ALAND_ISLANDS: "AX",
                                ALBANIA: "AL",
                                ALGERIA: "DZ",
                                AMERICAN_SAMOA: "AS",
                                ANDORRA: "AD",
                                ANGOLA: "AO",
                                ANGUILLA: "AI",
                                ANTARCTICA: "AQ",
                                ANTIGUA_AND_BARBUDA: "AG",
                                ARGENTINA: "AR",
                                ARMENIA: "AM",
                                ARUBA: "AW",
                                AUSTRALIA: "AU",
                                AUSTRIA: "AT",
                                AZERBAIJAN: "AZ",
                                BAHAMAS: "BS",
                                BAHRAIN: "BH",
                                BANGLADESH: "BD",
                                BARBADOS: "BB",
                                BELARUS: "BY",
                                BELGIUM: "BE",
                                BELIZE: "BZ",
                                BENIN: "BJ",
                                BERMUDA: "BM",
                                BHUTAN: "BT",
                                BOLIVIA: "BO",
                                BONAIRE_SINT_EUSTATIUS_SABA: "BQ",
                                BOSNIA_AND_HERZEGOVINA: "BA",
                                BOTSWANA: "BW",
                                BOUVET_ISLAND: "BV",
                                BRAZIL: "BR",
                                BRITISH_INDIAN_OCEAN_TERRITORY: "IO",
                                BRUNEI_DARUSSALAM: "BN",
                                BULGARIA: "BG",
                                BURKINA_FASO: "BF",
                                BURUNDI: "BI",
                                CAMBODIA: "KH",
                                CAMEROON: "CM",
                                CANADA: "CA",
                                CAPE_VERDE: "CV",
                                CAYMAN_ISLANDS: "KY",
                                CENTRAL_AFRICAN_REPUBLIC: "CF",
                                CHAD: "TD",
                                CHILE: "CL",
                                CHINA: "CN",
                                CHRISTMAS_ISLAND: "CX",
                                COCOS_KEELING_ISLANDS: "CC",
                                COLOMBIA: "CO",
                                COMOROS: "KM",
                                CONGO: "CG",
                                CONGO_DEMOCRATIC_REPUBLIC: "CD",
                                COOK_ISLANDS: "CK",
                                COSTA_RICA: "CR",
                                COTE_D_IVOIRE: "CI",
                                CROATIA: "HR",
                                CUBA: "CU",
                                CURACAO: "CW",
                                CYPRUS: "CY",
                                CZECH_REPUBLIC: "CZ",
                                DENMARK: "DK",
                                DJIBOUTI: "DJ",
                                DOMINICA: "DM",
                                DOMINICAN_REPUBLIC: "DO",
                                ECUADOR: "EC",
                                EGYPT: "EG",
                                EL_SALVADOR: "SV",
                                EQUATORIAL_GUINEA: "GQ",
                                ERITREA: "ER",
                                ESTONIA: "EE",
                                ETHIOPIA: "ET",
                                FALKLAND_ISLANDS: "FK",
                                FAROE_ISLANDS: "FO",
                                FIJI: "FJ",
                                FINLAND: "FI",
                                FRANCE: "FR",
                                FRENCH_GUIANA: "GF",
                                FRENCH_POLYNESIA: "PF",
                                FRENCH_SOUTHERN_TERRITORIES: "TF",
                                GABON: "GA",
                                GAMBIA: "GM",
                                GEORGIA: "GE",
                                GERMANY: "DE",
                                GHANA: "GH",
                                GIBRALTAR: "GI",
                                GREECE: "GR",
                                GREENLAND: "GL",
                                GRENADA: "GD",
                                GUADELOUPE: "GP",
                                GUAM: "GU",
                                GUATEMALA: "GT",
                                GUERNSEY: "GG",
                                GUINEA: "GN",
                                GUINEA_BISSAU: "GW",
                                GUYANA: "GY",
                                HAITI: "HT",
                                HEARD_ISLAND_MCDONALD_ISLANDS: "HM",
                                HOLY_SEE_VATICAN_CITY_STATE: "VA",
                                HONDURAS: "HN",
                                HONG_KONG: "HK",
                                HUNGARY: "HU",
                                ICELAND: "IS",
                                INDIA: "IN",
                                INDONESIA: "ID",
                                IRAN: "IR",
                                IRAQ: "IQ",
                                IRELAND: "IE",
                                ISLE_OF_MAN: "IM",
                                ISRAEL: "IL",
                                ITALY: "IT",
                                JAMAICA: "JM",
                                JAPAN: "JP",
                                JERSEY: "JE",
                                JORDAN: "JO",
                                KAZAKHSTAN: "KZ",
                                KENYA: "KE",
                                KIRIBATI: "KI",
                                KOREA: "KR",
                                KOREA_DEMOCRATIC_PEOPLES_REPUBLIC: "KP",
                                KUWAIT: "KW",
                                KYRGYZSTAN: "KG",
                                LAO_PEOPLES_DEMOCRATIC_REPUBLIC: "LA",
                                LATVIA: "LV",
                                LEBANON: "LB",
                                LESOTHO: "LS",
                                LIBERIA: "LR",
                                LIBYAN_ARAB_JAMAHIRIYA: "LY",
                                LIECHTENSTEIN: "LI",
                                LITHUANIA: "LT",
                                LUXEMBOURG: "LU",
                                MACAO: "MO",
                                MACEDONIA: "MK",
                                MADAGASCAR: "MG",
                                MALAWI: "MW",
                                MALAYSIA: "MY",
                                MALDIVES: "MV",
                                MALI: "ML",
                                MALTA: "MT",
                                MARSHALL_ISLANDS: "MH",
                                MARTINIQUE: "MQ",
                                MAURITANIA: "MR",
                                MAURITIUS: "MU",
                                MAYOTTE: "YT",
                                MEXICO: "MX",
                                MICRONESIA: "FM",
                                MOLDOVA: "MD",
                                MONACO: "MC",
                                MONGOLIA: "MN",
                                MONTENEGRO: "ME",
                                MONTSERRAT: "MS",
                                MOROCCO: "MA",
                                MOZAMBIQUE: "MZ",
                                MYANMAR: "MM",
                                NAMIBIA: "NA",
                                NAURU: "NR",
                                NEPAL: "NP",
                                NETHERLANDS: "NL",
                                NEW_CALEDONIA: "NC",
                                NEW_ZEALAND: "NZ",
                                NICARAGUA: "NI",
                                NIGER: "NE",
                                NIGERIA: "NG",
                                NIUE: "NU",
                                NORFOLK_ISLAND: "NF",
                                NORTHERN_MARIANA_ISLANDS: "MP",
                                NORWAY: "NO",
                                OMAN: "OM",
                                PAKISTAN: "PK",
                                PALAU: "PW",
                                PALESTINIAN_TERRITORY: "PS",
                                PANAMA: "PA",
                                PAPUA_NEW_GUINEA: "PG",
                                PARAGUAY: "PY",
                                PERU: "PE",
                                PHILIPPINES: "PH",
                                PITCAIRN: "PN",
                                POLAND: "PL",
                                PORTUGAL: "PT",
                                PUERTO_RICO: "PR",
                                QATAR: "QA",
                                REUNION: "RE",
                                ROMANIA: "RO",
                                RUSSIAN_FEDERATION: "RU",
                                RWANDA: "RW",
                                SAINT_BARTHELEMY: "BL",
                                SAINT_HELENA: "SH",
                                SAINT_KITTS_AND_NEVIS: "KN",
                                SAINT_LUCIA: "LC",
                                SAINT_MARTIN: "MF",
                                SAINT_PIERRE_AND_MIQUELON: "PM",
                                SAINT_VINCENT_AND_GRENADINES: "VC",
                                SAMOA: "WS",
                                SAN_MARINO: "SM",
                                SAO_TOME_AND_PRINCIPE: "ST",
                                SAUDI_ARABIA: "SA",
                                SENEGAL: "SN",
                                SERBIA: "RS",
                                SEYCHELLES: "SC",
                                SIERRA_LEONE: "SL",
                                SINGAPORE: "SG",
                                SINT_MAARTEN: "SX",
                                SLOVAKIA: "SK",
                                SLOVENIA: "SI",
                                SOLOMON_ISLANDS: "SB",
                                SOMALIA: "SO",
                                SOUTH_AFRICA: "ZA",
                                SOUTH_GEORGIA_AND_SANDWICH_ISL: "GS",
                                SOUTH_SUDAN: "SS",
                                SPAIN: "ES",
                                SRI_LANKA: "LK",
                                SUDAN: "SD",
                                SURINAME: "SR",
                                SVALBARD_AND_JAN_MAYEN: "SJ",
                                SWAZILAND: "SZ",
                                SWEDEN: "SE",
                                SWITZERLAND: "CH",
                                SYRIAN_ARAB_REPUBLIC: "SY",
                                TAIWAN: "TW",
                                TAJIKISTAN: "TJ",
                                TANZANIA: "TZ",
                                THAILAND: "TH",
                                TIMOR_LESTE: "TL",
                                TOGO: "TG",
                                TOKELAU: "TK",
                                TONGA: "TO",
                                TRINIDAD_AND_TOBAGO: "TT",
                                TUNISIA: "TN",
                                TURKEY: "TR",
                                TURKMENISTAN: "TM",
                                TURKS_AND_CAICOS_ISLANDS: "TC",
                                TUVALU: "TV",
                                UGANDA: "UG",
                                UKRAINE: "UA",
                                UNITED_ARAB_EMIRATES: "AE",
                                UNITED_KINGDOM: "GB",
                                UNITED_STATES: "US",
                                UNITED_STATES_OUTLYING_ISLANDS: "UM",
                                URUGUAY: "UY",
                                UZBEKISTAN: "UZ",
                                VANUATU: "VU",
                                VENEZUELA: "VE",
                                VIETNAM: "VN",
                                VIRGIN_ISLANDS_BRITISH: "VG",
                                VIRGIN_ISLANDS_US: "VI",
                                WALLIS_AND_FUTUNA: "WF",
                                WESTERN_SAHARA: "EH",
                                YEMEN: "YE",
                                ZAMBIA: "ZM",
                                ZIMBABWE: "ZW"
                            };

                        function t7(e) {
                            let {
                                country: t
                            } = e;
                            return t3.includes(t)
                        }

                        function t6(e) {
                            let {
                                country: t
                            } = e;
                            return t5[t]
                        }

                        function t8(e) {
                            let {
                                country: t
                            } = e;
                            return t.split("_").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ")
                        }(Y = ee || (ee = {})).assertEqual = e => e, Y.assertIs = function(e) {}, Y.assertNever = function(e) {
                            throw Error()
                        }, Y.arrayToEnum = e => {
                            let t = {};
                            for (let n of e) t[n] = n;
                            return t
                        }, Y.getValidEnumValues = e => {
                            let t = Y.objectKeys(e).filter(t => "number" != typeof e[e[t]]),
                                n = {};
                            for (let a of t) n[a] = e[a];
                            return Y.objectValues(n)
                        }, Y.objectValues = e => Y.objectKeys(e).map(function(t) {
                            return e[t]
                        }), Y.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
                            let t = [];
                            for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                            return t
                        }, Y.find = (e, t) => {
                            for (let n of e)
                                if (t(n)) return n
                        }, Y.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e, Y.joinValues = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
                            return e.map(e => "string" == typeof e ? "'".concat(e, "'") : e).join(t)
                        }, Y.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t, (et || (et = {})).mergeShapes = (e, t) => ({ ...e,
                            ...t
                        });
                        var ne = ee.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
                            nt = e => {
                                switch (typeof e) {
                                    case "undefined":
                                        return ne.undefined;
                                    case "string":
                                        return ne.string;
                                    case "number":
                                        return isNaN(e) ? ne.nan : ne.number;
                                    case "boolean":
                                        return ne.boolean;
                                    case "function":
                                        return ne.function;
                                    case "bigint":
                                        return ne.bigint;
                                    case "symbol":
                                        return ne.symbol;
                                    case "object":
                                        if (Array.isArray(e)) return ne.array;
                                        if (null === e) return ne.null;
                                        if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch) return ne.promise;
                                        if ("undefined" != typeof Map && e instanceof Map) return ne.map;
                                        if ("undefined" != typeof Set && e instanceof Set) return ne.set;
                                        if ("undefined" != typeof Date && e instanceof Date) return ne.date;
                                        return ne.object;
                                    default:
                                        return ne.unknown
                                }
                            },
                            nn = ee.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
                            na = class e extends Error {
                                get errors() {
                                    return this.issues
                                }
                                format(e) {
                                    let t = e || function(e) {
                                            return e.message
                                        },
                                        n = {
                                            _errors: []
                                        },
                                        a = e => {
                                            for (let o of e.issues)
                                                if ("invalid_union" === o.code) o.unionErrors.map(a);
                                                else if ("invalid_return_type" === o.code) a(o.returnTypeError);
                                            else if ("invalid_arguments" === o.code) a(o.argumentsError);
                                            else if (0 === o.path.length) n._errors.push(t(o));
                                            else {
                                                let e = n,
                                                    a = 0;
                                                for (; a < o.path.length;) {
                                                    let n = o.path[a];
                                                    a === o.path.length - 1 ? (e[n] = e[n] || {
                                                        _errors: []
                                                    }, e[n]._errors.push(t(o))) : e[n] = e[n] || {
                                                        _errors: []
                                                    }, e = e[n], a++
                                                }
                                            }
                                        };
                                    return a(this), n
                                }
                                static assert(t) {
                                    if (!(t instanceof e)) throw Error("Not a ZodError: ".concat(t))
                                }
                                toString() {
                                    return this.message
                                }
                                get message() {
                                    return JSON.stringify(this.issues, ee.jsonStringifyReplacer, 2)
                                }
                                get isEmpty() {
                                    return 0 === this.issues.length
                                }
                                flatten() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e => e.message,
                                        t = {},
                                        n = [];
                                    for (let a of this.issues) a.path.length > 0 ? (t[a.path[0]] = t[a.path[0]] || [], t[a.path[0]].push(e(a))) : n.push(e(a));
                                    return {
                                        formErrors: n,
                                        fieldErrors: t
                                    }
                                }
                                get formErrors() {
                                    return this.flatten()
                                }
                                constructor(e) {
                                    var t;
                                    super(), t = this, this.issues = [], this.addIssue = e => {
                                        this.issues = [...this.issues, e]
                                    }, this.addIssues = function() {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                        t.issues = [...t.issues, ...e]
                                    };
                                    let n = new.target.prototype;
                                    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e
                                }
                            };
                        na.create = e => new na(e);
                        var no = (e, t) => {
                                let n;
                                switch (e.code) {
                                    case nn.invalid_type:
                                        n = e.received === ne.undefined ? "Required" : "Expected ".concat(e.expected, ", received ").concat(e.received);
                                        break;
                                    case nn.invalid_literal:
                                        n = "Invalid literal value, expected ".concat(JSON.stringify(e.expected, ee.jsonStringifyReplacer));
                                        break;
                                    case nn.unrecognized_keys:
                                        n = "Unrecognized key(s) in object: ".concat(ee.joinValues(e.keys, ", "));
                                        break;
                                    case nn.invalid_union:
                                        n = "Invalid input";
                                        break;
                                    case nn.invalid_union_discriminator:
                                        n = "Invalid discriminator value. Expected ".concat(ee.joinValues(e.options));
                                        break;
                                    case nn.invalid_enum_value:
                                        n = "Invalid enum value. Expected ".concat(ee.joinValues(e.options), ", received '").concat(e.received, "'");
                                        break;
                                    case nn.invalid_arguments:
                                        n = "Invalid function arguments";
                                        break;
                                    case nn.invalid_return_type:
                                        n = "Invalid function return type";
                                        break;
                                    case nn.invalid_date:
                                        n = "Invalid date";
                                        break;
                                    case nn.invalid_string:
                                        "object" == typeof e.validation ? "includes" in e.validation ? (n = 'Invalid input: must include "'.concat(e.validation.includes, '"'), "number" == typeof e.validation.position && (n = "".concat(n, " at one or more positions greater than or equal to ").concat(e.validation.position))) : "startsWith" in e.validation ? n = 'Invalid input: must start with "'.concat(e.validation.startsWith, '"') : "endsWith" in e.validation ? n = 'Invalid input: must end with "'.concat(e.validation.endsWith, '"') : ee.assertNever(e.validation) : n = "regex" !== e.validation ? "Invalid ".concat(e.validation) : "Invalid";
                                        break;
                                    case nn.too_small:
                                        n = "array" === e.type ? "Array must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at least" : "more than", " ").concat(e.minimum, " element(s)") : "string" === e.type ? "String must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at least" : "over", " ").concat(e.minimum, " character(s)") : "number" === e.type ? "Number must be ".concat(e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than ").concat(e.minimum) : "date" === e.type ? "Date must be ".concat(e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than ").concat(new Date(Number(e.minimum))) : "Invalid input";
                                        break;
                                    case nn.too_big:
                                        n = "array" === e.type ? "Array must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at most" : "less than", " ").concat(e.maximum, " element(s)") : "string" === e.type ? "String must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at most" : "under", " ").concat(e.maximum, " character(s)") : "number" === e.type ? "Number must be ".concat(e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than", " ").concat(e.maximum) : "bigint" === e.type ? "BigInt must be ".concat(e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than", " ").concat(e.maximum) : "date" === e.type ? "Date must be ".concat(e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than", " ").concat(new Date(Number(e.maximum))) : "Invalid input";
                                        break;
                                    case nn.custom:
                                        n = "Invalid input";
                                        break;
                                    case nn.invalid_intersection_types:
                                        n = "Intersection results could not be merged";
                                        break;
                                    case nn.not_multiple_of:
                                        n = "Number must be a multiple of ".concat(e.multipleOf);
                                        break;
                                    case nn.not_finite:
                                        n = "Number must be finite";
                                        break;
                                    default:
                                        n = t.defaultError, ee.assertNever(e)
                                }
                                return {
                                    message: n
                                }
                            },
                            nr = no;

                        function ni() {
                            return nr
                        }
                        var ns = e => {
                            let {
                                data: t,
                                path: n,
                                errorMaps: a,
                                issueData: o
                            } = e, r = [...n, ...o.path || []], i = { ...o,
                                path: r
                            };
                            if (void 0 !== o.message) return { ...o,
                                path: r,
                                message: o.message
                            };
                            let s = "";
                            for (let e of a.filter(e => !!e).slice().reverse()) s = e(i, {
                                data: t,
                                defaultError: s
                            }).message;
                            return { ...o,
                                path: r,
                                message: s
                            }
                        };

                        function nl(e, t) {
                            let n = ni(),
                                a = ns({
                                    issueData: t,
                                    data: e.data,
                                    path: e.path,
                                    errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === no ? void 0 : no].filter(e => !!e)
                                });
                            e.common.issues.push(a)
                        }
                        var nc = class e {
                                dirty() {
                                    "valid" === this.value && (this.value = "dirty")
                                }
                                abort() {
                                    "aborted" !== this.value && (this.value = "aborted")
                                }
                                static mergeArray(e, t) {
                                    let n = [];
                                    for (let a of t) {
                                        if ("aborted" === a.status) return nd;
                                        "dirty" === a.status && e.dirty(), n.push(a.value)
                                    }
                                    return {
                                        status: e.value,
                                        value: n
                                    }
                                }
                                static async mergeObjectAsync(t, n) {
                                    let a = [];
                                    for (let e of n) {
                                        let t = await e.key,
                                            n = await e.value;
                                        a.push({
                                            key: t,
                                            value: n
                                        })
                                    }
                                    return e.mergeObjectSync(t, a)
                                }
                                static mergeObjectSync(e, t) {
                                    let n = {};
                                    for (let a of t) {
                                        let {
                                            key: t,
                                            value: o
                                        } = a;
                                        if ("aborted" === t.status || "aborted" === o.status) return nd;
                                        "dirty" === t.status && e.dirty(), "dirty" === o.status && e.dirty(), "__proto__" !== t.value && (void 0 !== o.value || a.alwaysSet) && (n[t.value] = o.value)
                                    }
                                    return {
                                        status: e.value,
                                        value: n
                                    }
                                }
                                constructor() {
                                    this.value = "valid"
                                }
                            },
                            nd = Object.freeze({
                                status: "aborted"
                            }),
                            nu = e => ({
                                status: "dirty",
                                value: e
                            }),
                            np = e => ({
                                status: "valid",
                                value: e
                            }),
                            nA = e => "aborted" === e.status,
                            nm = e => "dirty" === e.status,
                            nE = e => "valid" === e.status,
                            n_ = e => "undefined" != typeof Promise && e instanceof Promise;

                        function nT(e, t, n, a) {
                            if ("a" === n && !a) throw TypeError("Private accessor was defined without a getter");
                            if ("function" == typeof t ? e !== t || !a : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                            return "m" === n ? a : "a" === n ? a.call(e) : a ? a.value : t.get(e)
                        }

                        function nN(e, t, n, a, o) {
                            if ("m" === a) throw TypeError("Private method is not writable");
                            if ("a" === a && !o) throw TypeError("Private accessor was defined without a setter");
                            if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                            return "a" === a ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
                        }(z = en || (en = {})).errToObj = e => "string" == typeof e ? {
                            message: e
                        } : e || {}, z.toString = e => "string" == typeof e ? e : null == e ? void 0 : e.message;
                        var nh = class {
                                get path() {
                                    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
                                }
                                constructor(e, t, n, a) {
                                    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = a
                                }
                            },
                            nI = (e, t) => {
                                if (nE(t)) return {
                                    success: !0,
                                    data: t.value
                                };
                                if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
                                return {
                                    success: !1,
                                    get error() {
                                        if (this._error) return this._error;
                                        let t = new na(e.common.issues);
                                        return this._error = t, this._error
                                    }
                                }
                            };

                        function nS(e) {
                            if (!e) return {};
                            let {
                                errorMap: t,
                                invalid_type_error: n,
                                required_error: a,
                                description: o
                            } = e;
                            if (t && (n || a)) throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
                            return t ? {
                                errorMap: t,
                                description: o
                            } : {
                                errorMap: (t, o) => {
                                    var r, i;
                                    let {
                                        message: s
                                    } = e;
                                    return "invalid_enum_value" === t.code ? {
                                        message: null != s ? s : o.defaultError
                                    } : void 0 === o.data ? {
                                        message: null !== (r = null != s ? s : a) && void 0 !== r ? r : o.defaultError
                                    } : "invalid_type" !== t.code ? {
                                        message: o.defaultError
                                    } : {
                                        message: null !== (i = null != s ? s : n) && void 0 !== i ? i : o.defaultError
                                    }
                                },
                                description: o
                            }
                        }
                        var nC = class {
                                get description() {
                                    return this._def.description
                                }
                                _getType(e) {
                                    return nt(e.data)
                                }
                                _getOrReturnCtx(e, t) {
                                    return t || {
                                        common: e.parent.common,
                                        data: e.data,
                                        parsedType: nt(e.data),
                                        schemaErrorMap: this._def.errorMap,
                                        path: e.path,
                                        parent: e.parent
                                    }
                                }
                                _processInputParams(e) {
                                    return {
                                        status: new nc,
                                        ctx: {
                                            common: e.parent.common,
                                            data: e.data,
                                            parsedType: nt(e.data),
                                            schemaErrorMap: this._def.errorMap,
                                            path: e.path,
                                            parent: e.parent
                                        }
                                    }
                                }
                                _parseSync(e) {
                                    let t = this._parse(e);
                                    if (n_(t)) throw Error("Synchronous parse encountered promise.");
                                    return t
                                }
                                _parseAsync(e) {
                                    return Promise.resolve(this._parse(e))
                                }
                                parse(e, t) {
                                    let n = this.safeParse(e, t);
                                    if (n.success) return n.data;
                                    throw n.error
                                }
                                safeParse(e, t) {
                                    var n;
                                    let a = {
                                            common: {
                                                issues: [],
                                                async: null !== (n = null == t ? void 0 : t.async) && void 0 !== n && n,
                                                contextualErrorMap: null == t ? void 0 : t.errorMap
                                            },
                                            path: (null == t ? void 0 : t.path) || [],
                                            schemaErrorMap: this._def.errorMap,
                                            parent: null,
                                            data: e,
                                            parsedType: nt(e)
                                        },
                                        o = this._parseSync({
                                            data: e,
                                            path: a.path,
                                            parent: a
                                        });
                                    return nI(a, o)
                                }
                                "~validate" (e) {
                                    var t, n;
                                    let a = {
                                        common: {
                                            issues: [],
                                            async: !!this["~standard"].async
                                        },
                                        path: [],
                                        schemaErrorMap: this._def.errorMap,
                                        parent: null,
                                        data: e,
                                        parsedType: nt(e)
                                    };
                                    if (!this["~standard"].async) try {
                                        let t = this._parseSync({
                                            data: e,
                                            path: [],
                                            parent: a
                                        });
                                        return nE(t) ? {
                                            value: t.value
                                        } : {
                                            issues: a.common.issues
                                        }
                                    } catch (e) {
                                        (null === (n = null === (t = null == e ? void 0 : e.message) || void 0 === t ? void 0 : t.toLowerCase()) || void 0 === n ? void 0 : n.includes("encountered")) && (this["~standard"].async = !0), a.common = {
                                            issues: [],
                                            async: !0
                                        }
                                    }
                                    return this._parseAsync({
                                        data: e,
                                        path: [],
                                        parent: a
                                    }).then(e => nE(e) ? {
                                        value: e.value
                                    } : {
                                        issues: a.common.issues
                                    })
                                }
                                async parseAsync(e, t) {
                                    let n = await this.safeParseAsync(e, t);
                                    if (n.success) return n.data;
                                    throw n.error
                                }
                                async safeParseAsync(e, t) {
                                    let n = {
                                            common: {
                                                issues: [],
                                                contextualErrorMap: null == t ? void 0 : t.errorMap,
                                                async: !0
                                            },
                                            path: (null == t ? void 0 : t.path) || [],
                                            schemaErrorMap: this._def.errorMap,
                                            parent: null,
                                            data: e,
                                            parsedType: nt(e)
                                        },
                                        a = this._parse({
                                            data: e,
                                            path: n.path,
                                            parent: n
                                        });
                                    return nI(n, await (n_(a) ? a : Promise.resolve(a)))
                                }
                                refine(e, t) {
                                    let n = e => "string" == typeof t || void 0 === t ? {
                                        message: t
                                    } : "function" == typeof t ? t(e) : t;
                                    return this._refinement((t, a) => {
                                        let o = e(t),
                                            r = () => a.addIssue({
                                                code: nn.custom,
                                                ...n(t)
                                            });
                                        return "undefined" != typeof Promise && o instanceof Promise ? o.then(e => !!e || (r(), !1)) : !!o || (r(), !1)
                                    })
                                }
                                refinement(e, t) {
                                    return this._refinement((n, a) => !!e(n) || (a.addIssue("function" == typeof t ? t(n, a) : t), !1))
                                }
                                _refinement(e) {
                                    return new ai({
                                        schema: this,
                                        typeName: ei.ZodEffects,
                                        effect: {
                                            type: "refinement",
                                            refinement: e
                                        }
                                    })
                                }
                                superRefine(e) {
                                    return this._refinement(e)
                                }
                                optional() {
                                    return as.create(this, this._def)
                                }
                                nullable() {
                                    return al.create(this, this._def)
                                }
                                nullish() {
                                    return this.nullable().optional()
                                }
                                array() {
                                    return n$.create(this)
                                }
                                promise() {
                                    return ar.create(this, this._def)
                                }
                                or(e) {
                                    return n1.create([this, e], this._def)
                                }
                                and(e) {
                                    return n9.create(this, e, this._def)
                                }
                                transform(e) {
                                    return new ai({ ...nS(this._def),
                                        schema: this,
                                        typeName: ei.ZodEffects,
                                        effect: {
                                            type: "transform",
                                            transform: e
                                        }
                                    })
                                }
                                default (e) {
                                    return new ac({ ...nS(this._def),
                                        innerType: this,
                                        defaultValue: "function" == typeof e ? e : () => e,
                                        typeName: ei.ZodDefault
                                    })
                                }
                                brand() {
                                    return new aA({
                                        typeName: ei.ZodBranded,
                                        type: this,
                                        ...nS(this._def)
                                    })
                                } catch (e) {
                                    return new ad({ ...nS(this._def),
                                        innerType: this,
                                        catchValue: "function" == typeof e ? e : () => e,
                                        typeName: ei.ZodCatch
                                    })
                                }
                                describe(e) {
                                    return new this.constructor({ ...this._def,
                                        description: e
                                    })
                                }
                                pipe(e) {
                                    return am.create(this, e)
                                }
                                readonly() {
                                    return aE.create(this)
                                }
                                isOptional() {
                                    return this.safeParse(void 0).success
                                }
                                isNullable() {
                                    return this.safeParse(null).success
                                }
                                constructor(e) {
                                    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
                                        version: 1,
                                        vendor: "zod",
                                        validate: e => this["~validate"](e)
                                    }
                                }
                            },
                            nO = /^c[^\s-]{8,}$/i,
                            nR = /^[0-9a-z]+$/,
                            ng = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
                            nf = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
                            nP = /^[a-z0-9_-]{21}$/i,
                            nM = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
                            nL = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
                            nb = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
                            ny = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
                            nv = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
                            nD = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
                            nU = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                            nG = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
                            nH = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
                            nk = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
                            nB = new RegExp("^".concat(nk, "$"));

                        function nx(e) {
                            let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
                            return e.precision ? t = "".concat(t, "\\.\\d{").concat(e.precision, "}") : null == e.precision && (t = "".concat(t, "(\\.\\d+)?")), t
                        }

                        function nw(e) {
                            let t = "".concat(nk, "T").concat(nx(e)),
                                n = [];
                            return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = "".concat(t, "(").concat(n.join("|"), ")"), new RegExp("^".concat(t, "$"))
                        }
                        var nF = class e extends nC {
                            _parse(e) {
                                var t, n, a, o;
                                let r;
                                if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ne.string) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.string,
                                        received: t.parsedType
                                    }), nd
                                }
                                let i = new nc;
                                for (let s of this._def.checks)
                                    if ("min" === s.kind) e.data.length < s.value && (nl(r = this._getOrReturnCtx(e, r), {
                                        code: nn.too_small,
                                        minimum: s.value,
                                        type: "string",
                                        inclusive: !0,
                                        exact: !1,
                                        message: s.message
                                    }), i.dirty());
                                    else if ("max" === s.kind) e.data.length > s.value && (nl(r = this._getOrReturnCtx(e, r), {
                                    code: nn.too_big,
                                    maximum: s.value,
                                    type: "string",
                                    inclusive: !0,
                                    exact: !1,
                                    message: s.message
                                }), i.dirty());
                                else if ("length" === s.kind) {
                                    let t = e.data.length > s.value,
                                        n = e.data.length < s.value;
                                    (t || n) && (r = this._getOrReturnCtx(e, r), t ? nl(r, {
                                        code: nn.too_big,
                                        maximum: s.value,
                                        type: "string",
                                        inclusive: !0,
                                        exact: !0,
                                        message: s.message
                                    }) : n && nl(r, {
                                        code: nn.too_small,
                                        minimum: s.value,
                                        type: "string",
                                        inclusive: !0,
                                        exact: !0,
                                        message: s.message
                                    }), i.dirty())
                                } else if ("email" === s.kind) nb.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "email",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty());
                                else if ("emoji" === s.kind) er || (er = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), er.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "emoji",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty());
                                else if ("uuid" === s.kind) nf.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "uuid",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty());
                                else if ("nanoid" === s.kind) nP.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "nanoid",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty());
                                else if ("cuid" === s.kind) nO.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "cuid",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty());
                                else if ("cuid2" === s.kind) nR.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "cuid2",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty());
                                else if ("ulid" === s.kind) ng.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "ulid",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty());
                                else if ("url" === s.kind) try {
                                    new URL(e.data)
                                } catch (t) {
                                    nl(r = this._getOrReturnCtx(e, r), {
                                        validation: "url",
                                        code: nn.invalid_string,
                                        message: s.message
                                    }), i.dirty()
                                } else "regex" === s.kind ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "regex",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty())) : "trim" === s.kind ? e.data = e.data.trim() : "includes" === s.kind ? e.data.includes(s.value, s.position) || (nl(r = this._getOrReturnCtx(e, r), {
                                    code: nn.invalid_string,
                                    validation: {
                                        includes: s.value,
                                        position: s.position
                                    },
                                    message: s.message
                                }), i.dirty()) : "toLowerCase" === s.kind ? e.data = e.data.toLowerCase() : "toUpperCase" === s.kind ? e.data = e.data.toUpperCase() : "startsWith" === s.kind ? e.data.startsWith(s.value) || (nl(r = this._getOrReturnCtx(e, r), {
                                    code: nn.invalid_string,
                                    validation: {
                                        startsWith: s.value
                                    },
                                    message: s.message
                                }), i.dirty()) : "endsWith" === s.kind ? e.data.endsWith(s.value) || (nl(r = this._getOrReturnCtx(e, r), {
                                    code: nn.invalid_string,
                                    validation: {
                                        endsWith: s.value
                                    },
                                    message: s.message
                                }), i.dirty()) : "datetime" === s.kind ? nw(s).test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    code: nn.invalid_string,
                                    validation: "datetime",
                                    message: s.message
                                }), i.dirty()) : "date" === s.kind ? nB.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    code: nn.invalid_string,
                                    validation: "date",
                                    message: s.message
                                }), i.dirty()) : "time" === s.kind ? new RegExp("^".concat(nx(s), "$")).test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    code: nn.invalid_string,
                                    validation: "time",
                                    message: s.message
                                }), i.dirty()) : "duration" === s.kind ? nL.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "duration",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty()) : "ip" === s.kind ? (t = e.data, ("v4" === (n = s.version) || !n) && ny.test(t) || ("v6" === n || !n) && nD.test(t) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "ip",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty())) : "jwt" === s.kind ? ! function(e, t) {
                                    if (!nM.test(e)) return !1;
                                    try {
                                        let [n] = e.split("."), a = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), o = JSON.parse(atob(a));
                                        if ("object" != typeof o || null === o || !o.typ || !o.alg || t && o.alg !== t) return !1;
                                        return !0
                                    } catch (e) {
                                        return !1
                                    }
                                }(e.data, s.alg) && (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "jwt",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty()) : "cidr" === s.kind ? (a = e.data, ("v4" === (o = s.version) || !o) && nv.test(a) || ("v6" === o || !o) && nU.test(a) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "cidr",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty())) : "base64" === s.kind ? nG.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "base64",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty()) : "base64url" === s.kind ? nH.test(e.data) || (nl(r = this._getOrReturnCtx(e, r), {
                                    validation: "base64url",
                                    code: nn.invalid_string,
                                    message: s.message
                                }), i.dirty()) : ee.assertNever(s);
                                return {
                                    status: i.value,
                                    value: e.data
                                }
                            }
                            _regex(e, t, n) {
                                return this.refinement(t => e.test(t), {
                                    validation: t,
                                    code: nn.invalid_string,
                                    ...en.errToObj(n)
                                })
                            }
                            _addCheck(t) {
                                return new e({ ...this._def,
                                    checks: [...this._def.checks, t]
                                })
                            }
                            email(e) {
                                return this._addCheck({
                                    kind: "email",
                                    ...en.errToObj(e)
                                })
                            }
                            url(e) {
                                return this._addCheck({
                                    kind: "url",
                                    ...en.errToObj(e)
                                })
                            }
                            emoji(e) {
                                return this._addCheck({
                                    kind: "emoji",
                                    ...en.errToObj(e)
                                })
                            }
                            uuid(e) {
                                return this._addCheck({
                                    kind: "uuid",
                                    ...en.errToObj(e)
                                })
                            }
                            nanoid(e) {
                                return this._addCheck({
                                    kind: "nanoid",
                                    ...en.errToObj(e)
                                })
                            }
                            cuid(e) {
                                return this._addCheck({
                                    kind: "cuid",
                                    ...en.errToObj(e)
                                })
                            }
                            cuid2(e) {
                                return this._addCheck({
                                    kind: "cuid2",
                                    ...en.errToObj(e)
                                })
                            }
                            ulid(e) {
                                return this._addCheck({
                                    kind: "ulid",
                                    ...en.errToObj(e)
                                })
                            }
                            base64(e) {
                                return this._addCheck({
                                    kind: "base64",
                                    ...en.errToObj(e)
                                })
                            }
                            base64url(e) {
                                return this._addCheck({
                                    kind: "base64url",
                                    ...en.errToObj(e)
                                })
                            }
                            jwt(e) {
                                return this._addCheck({
                                    kind: "jwt",
                                    ...en.errToObj(e)
                                })
                            }
                            ip(e) {
                                return this._addCheck({
                                    kind: "ip",
                                    ...en.errToObj(e)
                                })
                            }
                            cidr(e) {
                                return this._addCheck({
                                    kind: "cidr",
                                    ...en.errToObj(e)
                                })
                            }
                            datetime(e) {
                                var t, n;
                                return "string" == typeof e ? this._addCheck({
                                    kind: "datetime",
                                    precision: null,
                                    offset: !1,
                                    local: !1,
                                    message: e
                                }) : this._addCheck({
                                    kind: "datetime",
                                    precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                                    offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
                                    local: null !== (n = null == e ? void 0 : e.local) && void 0 !== n && n,
                                    ...en.errToObj(null == e ? void 0 : e.message)
                                })
                            }
                            date(e) {
                                return this._addCheck({
                                    kind: "date",
                                    message: e
                                })
                            }
                            time(e) {
                                return "string" == typeof e ? this._addCheck({
                                    kind: "time",
                                    precision: null,
                                    message: e
                                }) : this._addCheck({
                                    kind: "time",
                                    precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                                    ...en.errToObj(null == e ? void 0 : e.message)
                                })
                            }
                            duration(e) {
                                return this._addCheck({
                                    kind: "duration",
                                    ...en.errToObj(e)
                                })
                            }
                            regex(e, t) {
                                return this._addCheck({
                                    kind: "regex",
                                    regex: e,
                                    ...en.errToObj(t)
                                })
                            }
                            includes(e, t) {
                                return this._addCheck({
                                    kind: "includes",
                                    value: e,
                                    position: null == t ? void 0 : t.position,
                                    ...en.errToObj(null == t ? void 0 : t.message)
                                })
                            }
                            startsWith(e, t) {
                                return this._addCheck({
                                    kind: "startsWith",
                                    value: e,
                                    ...en.errToObj(t)
                                })
                            }
                            endsWith(e, t) {
                                return this._addCheck({
                                    kind: "endsWith",
                                    value: e,
                                    ...en.errToObj(t)
                                })
                            }
                            min(e, t) {
                                return this._addCheck({
                                    kind: "min",
                                    value: e,
                                    ...en.errToObj(t)
                                })
                            }
                            max(e, t) {
                                return this._addCheck({
                                    kind: "max",
                                    value: e,
                                    ...en.errToObj(t)
                                })
                            }
                            length(e, t) {
                                return this._addCheck({
                                    kind: "length",
                                    value: e,
                                    ...en.errToObj(t)
                                })
                            }
                            nonempty(e) {
                                return this.min(1, en.errToObj(e))
                            }
                            trim() {
                                return new e({ ...this._def,
                                    checks: [...this._def.checks, {
                                        kind: "trim"
                                    }]
                                })
                            }
                            toLowerCase() {
                                return new e({ ...this._def,
                                    checks: [...this._def.checks, {
                                        kind: "toLowerCase"
                                    }]
                                })
                            }
                            toUpperCase() {
                                return new e({ ...this._def,
                                    checks: [...this._def.checks, {
                                        kind: "toUpperCase"
                                    }]
                                })
                            }
                            get isDatetime() {
                                return !!this._def.checks.find(e => "datetime" === e.kind)
                            }
                            get isDate() {
                                return !!this._def.checks.find(e => "date" === e.kind)
                            }
                            get isTime() {
                                return !!this._def.checks.find(e => "time" === e.kind)
                            }
                            get isDuration() {
                                return !!this._def.checks.find(e => "duration" === e.kind)
                            }
                            get isEmail() {
                                return !!this._def.checks.find(e => "email" === e.kind)
                            }
                            get isURL() {
                                return !!this._def.checks.find(e => "url" === e.kind)
                            }
                            get isEmoji() {
                                return !!this._def.checks.find(e => "emoji" === e.kind)
                            }
                            get isUUID() {
                                return !!this._def.checks.find(e => "uuid" === e.kind)
                            }
                            get isNANOID() {
                                return !!this._def.checks.find(e => "nanoid" === e.kind)
                            }
                            get isCUID() {
                                return !!this._def.checks.find(e => "cuid" === e.kind)
                            }
                            get isCUID2() {
                                return !!this._def.checks.find(e => "cuid2" === e.kind)
                            }
                            get isULID() {
                                return !!this._def.checks.find(e => "ulid" === e.kind)
                            }
                            get isIP() {
                                return !!this._def.checks.find(e => "ip" === e.kind)
                            }
                            get isCIDR() {
                                return !!this._def.checks.find(e => "cidr" === e.kind)
                            }
                            get isBase64() {
                                return !!this._def.checks.find(e => "base64" === e.kind)
                            }
                            get isBase64url() {
                                return !!this._def.checks.find(e => "base64url" === e.kind)
                            }
                            get minLength() {
                                let e = null;
                                for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                                return e
                            }
                            get maxLength() {
                                let e = null;
                                for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                                return e
                            }
                        };
                        nF.create = e => {
                            var t;
                            return new nF({
                                checks: [],
                                typeName: ei.ZodString,
                                coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                                ...nS(e)
                            })
                        };
                        var nK = class e extends nC {
                            _parse(e) {
                                let t;
                                if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ne.number) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.number,
                                        received: t.parsedType
                                    }), nd
                                }
                                let n = new nc;
                                for (let a of this._def.checks) "int" === a.kind ? ee.isInteger(e.data) || (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.invalid_type,
                                    expected: "integer",
                                    received: "float",
                                    message: a.message
                                }), n.dirty()) : "min" === a.kind ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.too_small,
                                    minimum: a.value,
                                    type: "number",
                                    inclusive: a.inclusive,
                                    exact: !1,
                                    message: a.message
                                }), n.dirty()) : "max" === a.kind ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.too_big,
                                    maximum: a.value,
                                    type: "number",
                                    inclusive: a.inclusive,
                                    exact: !1,
                                    message: a.message
                                }), n.dirty()) : "multipleOf" === a.kind ? 0 !== function(e, t) {
                                    let n = (e.toString().split(".")[1] || "").length,
                                        a = (t.toString().split(".")[1] || "").length,
                                        o = n > a ? n : a;
                                    return parseInt(e.toFixed(o).replace(".", "")) % parseInt(t.toFixed(o).replace(".", "")) / Math.pow(10, o)
                                }(e.data, a.value) && (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.not_multiple_of,
                                    multipleOf: a.value,
                                    message: a.message
                                }), n.dirty()) : "finite" === a.kind ? Number.isFinite(e.data) || (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.not_finite,
                                    message: a.message
                                }), n.dirty()) : ee.assertNever(a);
                                return {
                                    status: n.value,
                                    value: e.data
                                }
                            }
                            gte(e, t) {
                                return this.setLimit("min", e, !0, en.toString(t))
                            }
                            gt(e, t) {
                                return this.setLimit("min", e, !1, en.toString(t))
                            }
                            lte(e, t) {
                                return this.setLimit("max", e, !0, en.toString(t))
                            }
                            lt(e, t) {
                                return this.setLimit("max", e, !1, en.toString(t))
                            }
                            setLimit(t, n, a, o) {
                                return new e({ ...this._def,
                                    checks: [...this._def.checks, {
                                        kind: t,
                                        value: n,
                                        inclusive: a,
                                        message: en.toString(o)
                                    }]
                                })
                            }
                            _addCheck(t) {
                                return new e({ ...this._def,
                                    checks: [...this._def.checks, t]
                                })
                            }
                            int(e) {
                                return this._addCheck({
                                    kind: "int",
                                    message: en.toString(e)
                                })
                            }
                            positive(e) {
                                return this._addCheck({
                                    kind: "min",
                                    value: 0,
                                    inclusive: !1,
                                    message: en.toString(e)
                                })
                            }
                            negative(e) {
                                return this._addCheck({
                                    kind: "max",
                                    value: 0,
                                    inclusive: !1,
                                    message: en.toString(e)
                                })
                            }
                            nonpositive(e) {
                                return this._addCheck({
                                    kind: "max",
                                    value: 0,
                                    inclusive: !0,
                                    message: en.toString(e)
                                })
                            }
                            nonnegative(e) {
                                return this._addCheck({
                                    kind: "min",
                                    value: 0,
                                    inclusive: !0,
                                    message: en.toString(e)
                                })
                            }
                            multipleOf(e, t) {
                                return this._addCheck({
                                    kind: "multipleOf",
                                    value: e,
                                    message: en.toString(t)
                                })
                            }
                            finite(e) {
                                return this._addCheck({
                                    kind: "finite",
                                    message: en.toString(e)
                                })
                            }
                            safe(e) {
                                return this._addCheck({
                                    kind: "min",
                                    inclusive: !0,
                                    value: Number.MIN_SAFE_INTEGER,
                                    message: en.toString(e)
                                })._addCheck({
                                    kind: "max",
                                    inclusive: !0,
                                    value: Number.MAX_SAFE_INTEGER,
                                    message: en.toString(e)
                                })
                            }
                            get minValue() {
                                let e = null;
                                for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                                return e
                            }
                            get maxValue() {
                                let e = null;
                                for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                                return e
                            }
                            get isInt() {
                                return !!this._def.checks.find(e => "int" === e.kind || "multipleOf" === e.kind && ee.isInteger(e.value))
                            }
                            get isFinite() {
                                let e = null,
                                    t = null;
                                for (let n of this._def.checks) {
                                    if ("finite" === n.kind || "int" === n.kind || "multipleOf" === n.kind) return !0;
                                    "min" === n.kind ? (null === t || n.value > t) && (t = n.value) : "max" === n.kind && (null === e || n.value < e) && (e = n.value)
                                }
                                return Number.isFinite(t) && Number.isFinite(e)
                            }
                            constructor() {
                                super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
                            }
                        };
                        nK.create = e => new nK({
                            checks: [],
                            typeName: ei.ZodNumber,
                            coerce: (null == e ? void 0 : e.coerce) || !1,
                            ...nS(e)
                        });
                        var nW = class e extends nC {
                            _parse(e) {
                                let t;
                                if (this._def.coerce) try {
                                    e.data = BigInt(e.data)
                                } catch (t) {
                                    return this._getInvalidInput(e)
                                }
                                if (this._getType(e) !== ne.bigint) return this._getInvalidInput(e);
                                let n = new nc;
                                for (let a of this._def.checks) "min" === a.kind ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.too_small,
                                    type: "bigint",
                                    minimum: a.value,
                                    inclusive: a.inclusive,
                                    message: a.message
                                }), n.dirty()) : "max" === a.kind ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.too_big,
                                    type: "bigint",
                                    maximum: a.value,
                                    inclusive: a.inclusive,
                                    message: a.message
                                }), n.dirty()) : "multipleOf" === a.kind ? e.data % a.value !== BigInt(0) && (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.not_multiple_of,
                                    multipleOf: a.value,
                                    message: a.message
                                }), n.dirty()) : ee.assertNever(a);
                                return {
                                    status: n.value,
                                    value: e.data
                                }
                            }
                            _getInvalidInput(e) {
                                let t = this._getOrReturnCtx(e);
                                return nl(t, {
                                    code: nn.invalid_type,
                                    expected: ne.bigint,
                                    received: t.parsedType
                                }), nd
                            }
                            gte(e, t) {
                                return this.setLimit("min", e, !0, en.toString(t))
                            }
                            gt(e, t) {
                                return this.setLimit("min", e, !1, en.toString(t))
                            }
                            lte(e, t) {
                                return this.setLimit("max", e, !0, en.toString(t))
                            }
                            lt(e, t) {
                                return this.setLimit("max", e, !1, en.toString(t))
                            }
                            setLimit(t, n, a, o) {
                                return new e({ ...this._def,
                                    checks: [...this._def.checks, {
                                        kind: t,
                                        value: n,
                                        inclusive: a,
                                        message: en.toString(o)
                                    }]
                                })
                            }
                            _addCheck(t) {
                                return new e({ ...this._def,
                                    checks: [...this._def.checks, t]
                                })
                            }
                            positive(e) {
                                return this._addCheck({
                                    kind: "min",
                                    value: BigInt(0),
                                    inclusive: !1,
                                    message: en.toString(e)
                                })
                            }
                            negative(e) {
                                return this._addCheck({
                                    kind: "max",
                                    value: BigInt(0),
                                    inclusive: !1,
                                    message: en.toString(e)
                                })
                            }
                            nonpositive(e) {
                                return this._addCheck({
                                    kind: "max",
                                    value: BigInt(0),
                                    inclusive: !0,
                                    message: en.toString(e)
                                })
                            }
                            nonnegative(e) {
                                return this._addCheck({
                                    kind: "min",
                                    value: BigInt(0),
                                    inclusive: !0,
                                    message: en.toString(e)
                                })
                            }
                            multipleOf(e, t) {
                                return this._addCheck({
                                    kind: "multipleOf",
                                    value: e,
                                    message: en.toString(t)
                                })
                            }
                            get minValue() {
                                let e = null;
                                for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                                return e
                            }
                            get maxValue() {
                                let e = null;
                                for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                                return e
                            }
                            constructor() {
                                super(...arguments), this.min = this.gte, this.max = this.lte
                            }
                        };
                        nW.create = e => {
                            var t;
                            return new nW({
                                checks: [],
                                typeName: ei.ZodBigInt,
                                coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                                ...nS(e)
                            })
                        };
                        var nj = class extends nC {
                            _parse(e) {
                                if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ne.boolean) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.boolean,
                                        received: t.parsedType
                                    }), nd
                                }
                                return np(e.data)
                            }
                        };
                        nj.create = e => new nj({
                            typeName: ei.ZodBoolean,
                            coerce: (null == e ? void 0 : e.coerce) || !1,
                            ...nS(e)
                        });
                        var nZ = class e extends nC {
                            _parse(e) {
                                let t;
                                if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ne.date) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.date,
                                        received: t.parsedType
                                    }), nd
                                }
                                if (isNaN(e.data.getTime())) return nl(this._getOrReturnCtx(e), {
                                    code: nn.invalid_date
                                }), nd;
                                let n = new nc;
                                for (let a of this._def.checks) "min" === a.kind ? e.data.getTime() < a.value && (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.too_small,
                                    message: a.message,
                                    inclusive: !0,
                                    exact: !1,
                                    minimum: a.value,
                                    type: "date"
                                }), n.dirty()) : "max" === a.kind ? e.data.getTime() > a.value && (nl(t = this._getOrReturnCtx(e, t), {
                                    code: nn.too_big,
                                    message: a.message,
                                    inclusive: !0,
                                    exact: !1,
                                    maximum: a.value,
                                    type: "date"
                                }), n.dirty()) : ee.assertNever(a);
                                return {
                                    status: n.value,
                                    value: new Date(e.data.getTime())
                                }
                            }
                            _addCheck(t) {
                                return new e({ ...this._def,
                                    checks: [...this._def.checks, t]
                                })
                            }
                            min(e, t) {
                                return this._addCheck({
                                    kind: "min",
                                    value: e.getTime(),
                                    message: en.toString(t)
                                })
                            }
                            max(e, t) {
                                return this._addCheck({
                                    kind: "max",
                                    value: e.getTime(),
                                    message: en.toString(t)
                                })
                            }
                            get minDate() {
                                let e = null;
                                for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                                return null != e ? new Date(e) : null
                            }
                            get maxDate() {
                                let e = null;
                                for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                                return null != e ? new Date(e) : null
                            }
                        };
                        nZ.create = e => new nZ({
                            checks: [],
                            coerce: (null == e ? void 0 : e.coerce) || !1,
                            typeName: ei.ZodDate,
                            ...nS(e)
                        });
                        var nV = class extends nC {
                            _parse(e) {
                                if (this._getType(e) !== ne.symbol) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.symbol,
                                        received: t.parsedType
                                    }), nd
                                }
                                return np(e.data)
                            }
                        };
                        nV.create = e => new nV({
                            typeName: ei.ZodSymbol,
                            ...nS(e)
                        });
                        var nY = class extends nC {
                            _parse(e) {
                                if (this._getType(e) !== ne.undefined) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.undefined,
                                        received: t.parsedType
                                    }), nd
                                }
                                return np(e.data)
                            }
                        };
                        nY.create = e => new nY({
                            typeName: ei.ZodUndefined,
                            ...nS(e)
                        });
                        var nz = class extends nC {
                            _parse(e) {
                                if (this._getType(e) !== ne.null) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.null,
                                        received: t.parsedType
                                    }), nd
                                }
                                return np(e.data)
                            }
                        };
                        nz.create = e => new nz({
                            typeName: ei.ZodNull,
                            ...nS(e)
                        });
                        var nJ = class extends nC {
                            _parse(e) {
                                return np(e.data)
                            }
                            constructor() {
                                super(...arguments), this._any = !0
                            }
                        };
                        nJ.create = e => new nJ({
                            typeName: ei.ZodAny,
                            ...nS(e)
                        });
                        var nX = class extends nC {
                            _parse(e) {
                                return np(e.data)
                            }
                            constructor() {
                                super(...arguments), this._unknown = !0
                            }
                        };
                        nX.create = e => new nX({
                            typeName: ei.ZodUnknown,
                            ...nS(e)
                        });
                        var nQ = class extends nC {
                            _parse(e) {
                                let t = this._getOrReturnCtx(e);
                                return nl(t, {
                                    code: nn.invalid_type,
                                    expected: ne.never,
                                    received: t.parsedType
                                }), nd
                            }
                        };
                        nQ.create = e => new nQ({
                            typeName: ei.ZodNever,
                            ...nS(e)
                        });
                        var nq = class extends nC {
                            _parse(e) {
                                if (this._getType(e) !== ne.undefined) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.void,
                                        received: t.parsedType
                                    }), nd
                                }
                                return np(e.data)
                            }
                        };
                        nq.create = e => new nq({
                            typeName: ei.ZodVoid,
                            ...nS(e)
                        });
                        var n$ = class e extends nC {
                            _parse(e) {
                                let {
                                    ctx: t,
                                    status: n
                                } = this._processInputParams(e), a = this._def;
                                if (t.parsedType !== ne.array) return nl(t, {
                                    code: nn.invalid_type,
                                    expected: ne.array,
                                    received: t.parsedType
                                }), nd;
                                if (null !== a.exactLength) {
                                    let e = t.data.length > a.exactLength.value,
                                        o = t.data.length < a.exactLength.value;
                                    (e || o) && (nl(t, {
                                        code: e ? nn.too_big : nn.too_small,
                                        minimum: o ? a.exactLength.value : void 0,
                                        maximum: e ? a.exactLength.value : void 0,
                                        type: "array",
                                        inclusive: !0,
                                        exact: !0,
                                        message: a.exactLength.message
                                    }), n.dirty())
                                }
                                if (null !== a.minLength && t.data.length < a.minLength.value && (nl(t, {
                                        code: nn.too_small,
                                        minimum: a.minLength.value,
                                        type: "array",
                                        inclusive: !0,
                                        exact: !1,
                                        message: a.minLength.message
                                    }), n.dirty()), null !== a.maxLength && t.data.length > a.maxLength.value && (nl(t, {
                                        code: nn.too_big,
                                        maximum: a.maxLength.value,
                                        type: "array",
                                        inclusive: !0,
                                        exact: !1,
                                        message: a.maxLength.message
                                    }), n.dirty()), t.common.async) return Promise.all([...t.data].map((e, n) => a.type._parseAsync(new nh(t, e, t.path, n)))).then(e => nc.mergeArray(n, e));
                                let o = [...t.data].map((e, n) => a.type._parseSync(new nh(t, e, t.path, n)));
                                return nc.mergeArray(n, o)
                            }
                            get element() {
                                return this._def.type
                            }
                            min(t, n) {
                                return new e({ ...this._def,
                                    minLength: {
                                        value: t,
                                        message: en.toString(n)
                                    }
                                })
                            }
                            max(t, n) {
                                return new e({ ...this._def,
                                    maxLength: {
                                        value: t,
                                        message: en.toString(n)
                                    }
                                })
                            }
                            length(t, n) {
                                return new e({ ...this._def,
                                    exactLength: {
                                        value: t,
                                        message: en.toString(n)
                                    }
                                })
                            }
                            nonempty(e) {
                                return this.min(1, e)
                            }
                        };
                        n$.create = (e, t) => new n$({
                            type: e,
                            minLength: null,
                            maxLength: null,
                            exactLength: null,
                            typeName: ei.ZodArray,
                            ...nS(t)
                        });
                        var n0 = class e extends nC {
                            _getCached() {
                                if (null !== this._cached) return this._cached;
                                let e = this._def.shape(),
                                    t = ee.objectKeys(e);
                                return this._cached = {
                                    shape: e,
                                    keys: t
                                }
                            }
                            _parse(e) {
                                if (this._getType(e) !== ne.object) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.object,
                                        received: t.parsedType
                                    }), nd
                                }
                                let {
                                    status: t,
                                    ctx: n
                                } = this._processInputParams(e), {
                                    shape: a,
                                    keys: o
                                } = this._getCached(), r = [];
                                if (!(this._def.catchall instanceof nQ && "strip" === this._def.unknownKeys))
                                    for (let e in n.data) o.includes(e) || r.push(e);
                                let i = [];
                                for (let e of o) {
                                    let t = a[e],
                                        o = n.data[e];
                                    i.push({
                                        key: {
                                            status: "valid",
                                            value: e
                                        },
                                        value: t._parse(new nh(n, o, n.path, e)),
                                        alwaysSet: e in n.data
                                    })
                                }
                                if (this._def.catchall instanceof nQ) {
                                    let e = this._def.unknownKeys;
                                    if ("passthrough" === e)
                                        for (let e of r) i.push({
                                            key: {
                                                status: "valid",
                                                value: e
                                            },
                                            value: {
                                                status: "valid",
                                                value: n.data[e]
                                            }
                                        });
                                    else if ("strict" === e) r.length > 0 && (nl(n, {
                                        code: nn.unrecognized_keys,
                                        keys: r
                                    }), t.dirty());
                                    else if ("strip" === e);
                                    else throw Error("Internal ZodObject error: invalid unknownKeys value.")
                                } else {
                                    let e = this._def.catchall;
                                    for (let t of r) {
                                        let a = n.data[t];
                                        i.push({
                                            key: {
                                                status: "valid",
                                                value: t
                                            },
                                            value: e._parse(new nh(n, a, n.path, t)),
                                            alwaysSet: t in n.data
                                        })
                                    }
                                }
                                return n.common.async ? Promise.resolve().then(async () => {
                                    let e = [];
                                    for (let t of i) {
                                        let n = await t.key,
                                            a = await t.value;
                                        e.push({
                                            key: n,
                                            value: a,
                                            alwaysSet: t.alwaysSet
                                        })
                                    }
                                    return e
                                }).then(e => nc.mergeObjectSync(t, e)) : nc.mergeObjectSync(t, i)
                            }
                            get shape() {
                                return this._def.shape()
                            }
                            strict(t) {
                                return en.errToObj, new e({ ...this._def,
                                    unknownKeys: "strict",
                                    ...void 0 !== t ? {
                                        errorMap: (e, n) => {
                                            var a, o, r, i;
                                            let s = null !== (r = null === (o = (a = this._def).errorMap) || void 0 === o ? void 0 : o.call(a, e, n).message) && void 0 !== r ? r : n.defaultError;
                                            return "unrecognized_keys" === e.code ? {
                                                message: null !== (i = en.errToObj(t).message) && void 0 !== i ? i : s
                                            } : {
                                                message: s
                                            }
                                        }
                                    } : {}
                                })
                            }
                            strip() {
                                return new e({ ...this._def,
                                    unknownKeys: "strip"
                                })
                            }
                            passthrough() {
                                return new e({ ...this._def,
                                    unknownKeys: "passthrough"
                                })
                            }
                            extend(t) {
                                return new e({ ...this._def,
                                    shape: () => ({ ...this._def.shape(),
                                        ...t
                                    })
                                })
                            }
                            merge(t) {
                                return new e({
                                    unknownKeys: t._def.unknownKeys,
                                    catchall: t._def.catchall,
                                    shape: () => ({ ...this._def.shape(),
                                        ...t._def.shape()
                                    }),
                                    typeName: ei.ZodObject
                                })
                            }
                            setKey(e, t) {
                                return this.augment({
                                    [e]: t
                                })
                            }
                            catchall(t) {
                                return new e({ ...this._def,
                                    catchall: t
                                })
                            }
                            pick(t) {
                                let n = {};
                                return ee.objectKeys(t).forEach(e => {
                                    t[e] && this.shape[e] && (n[e] = this.shape[e])
                                }), new e({ ...this._def,
                                    shape: () => n
                                })
                            }
                            omit(t) {
                                let n = {};
                                return ee.objectKeys(this.shape).forEach(e => {
                                    t[e] || (n[e] = this.shape[e])
                                }), new e({ ...this._def,
                                    shape: () => n
                                })
                            }
                            deepPartial() {
                                return function e(t) {
                                    if (t instanceof n0) {
                                        let n = {};
                                        for (let a in t.shape) {
                                            let o = t.shape[a];
                                            n[a] = as.create(e(o))
                                        }
                                        return new n0({ ...t._def,
                                            shape: () => n
                                        })
                                    }
                                    return t instanceof n$ ? new n$({ ...t._def,
                                        type: e(t.element)
                                    }) : t instanceof as ? as.create(e(t.unwrap())) : t instanceof al ? al.create(e(t.unwrap())) : t instanceof n3 ? n3.create(t.items.map(t => e(t))) : t
                                }(this)
                            }
                            partial(t) {
                                let n = {};
                                return ee.objectKeys(this.shape).forEach(e => {
                                    let a = this.shape[e];
                                    t && !t[e] ? n[e] = a : n[e] = a.optional()
                                }), new e({ ...this._def,
                                    shape: () => n
                                })
                            }
                            required(t) {
                                let n = {};
                                return ee.objectKeys(this.shape).forEach(e => {
                                    if (t && !t[e]) n[e] = this.shape[e];
                                    else {
                                        let t = this.shape[e];
                                        for (; t instanceof as;) t = t._def.innerType;
                                        n[e] = t
                                    }
                                }), new e({ ...this._def,
                                    shape: () => n
                                })
                            }
                            keyof() {
                                return an(ee.objectKeys(this.shape))
                            }
                            constructor() {
                                super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
                            }
                        };
                        n0.create = (e, t) => new n0({
                            shape: () => e,
                            unknownKeys: "strip",
                            catchall: nQ.create(),
                            typeName: ei.ZodObject,
                            ...nS(t)
                        }), n0.strictCreate = (e, t) => new n0({
                            shape: () => e,
                            unknownKeys: "strict",
                            catchall: nQ.create(),
                            typeName: ei.ZodObject,
                            ...nS(t)
                        }), n0.lazycreate = (e, t) => new n0({
                            shape: e,
                            unknownKeys: "strip",
                            catchall: nQ.create(),
                            typeName: ei.ZodObject,
                            ...nS(t)
                        });
                        var n1 = class extends nC {
                            _parse(e) {
                                let {
                                    ctx: t
                                } = this._processInputParams(e), n = this._def.options;
                                if (t.common.async) return Promise.all(n.map(async e => {
                                    let n = { ...t,
                                        common: { ...t.common,
                                            issues: []
                                        },
                                        parent: null
                                    };
                                    return {
                                        result: await e._parseAsync({
                                            data: t.data,
                                            path: t.path,
                                            parent: n
                                        }),
                                        ctx: n
                                    }
                                })).then(function(e) {
                                    for (let t of e)
                                        if ("valid" === t.result.status) return t.result;
                                    for (let n of e)
                                        if ("dirty" === n.result.status) return t.common.issues.push(...n.ctx.common.issues), n.result;
                                    let n = e.map(e => new na(e.ctx.common.issues));
                                    return nl(t, {
                                        code: nn.invalid_union,
                                        unionErrors: n
                                    }), nd
                                }); {
                                    let e;
                                    let a = [];
                                    for (let o of n) {
                                        let n = { ...t,
                                                common: { ...t.common,
                                                    issues: []
                                                },
                                                parent: null
                                            },
                                            r = o._parseSync({
                                                data: t.data,
                                                path: t.path,
                                                parent: n
                                            });
                                        if ("valid" === r.status) return r;
                                        "dirty" !== r.status || e || (e = {
                                            result: r,
                                            ctx: n
                                        }), n.common.issues.length && a.push(n.common.issues)
                                    }
                                    if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
                                    let o = a.map(e => new na(e));
                                    return nl(t, {
                                        code: nn.invalid_union,
                                        unionErrors: o
                                    }), nd
                                }
                            }
                            get options() {
                                return this._def.options
                            }
                        };
                        n1.create = (e, t) => new n1({
                            options: e,
                            typeName: ei.ZodUnion,
                            ...nS(t)
                        });
                        var n2 = e => {
                                if (e instanceof ae) return n2(e.schema);
                                if (e instanceof ai) return n2(e.innerType());
                                if (e instanceof at) return [e.value];
                                if (e instanceof aa) return e.options;
                                if (e instanceof ao) return ee.objectValues(e.enum);
                                if (e instanceof ac) return n2(e._def.innerType);
                                if (e instanceof nY) return [void 0];
                                if (e instanceof nz) return [null];
                                if (e instanceof as) return [void 0, ...n2(e.unwrap())];
                                else if (e instanceof al) return [null, ...n2(e.unwrap())];
                                else if (e instanceof aA) return n2(e.unwrap());
                                else if (e instanceof aE) return n2(e.unwrap());
                                else if (e instanceof ad) return n2(e._def.innerType);
                                else return []
                            },
                            n4 = class e extends nC {
                                _parse(e) {
                                    let {
                                        ctx: t
                                    } = this._processInputParams(e);
                                    if (t.parsedType !== ne.object) return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.object,
                                        received: t.parsedType
                                    }), nd;
                                    let n = this.discriminator,
                                        a = t.data[n],
                                        o = this.optionsMap.get(a);
                                    return o ? t.common.async ? o._parseAsync({
                                        data: t.data,
                                        path: t.path,
                                        parent: t
                                    }) : o._parseSync({
                                        data: t.data,
                                        path: t.path,
                                        parent: t
                                    }) : (nl(t, {
                                        code: nn.invalid_union_discriminator,
                                        options: Array.from(this.optionsMap.keys()),
                                        path: [n]
                                    }), nd)
                                }
                                get discriminator() {
                                    return this._def.discriminator
                                }
                                get options() {
                                    return this._def.options
                                }
                                get optionsMap() {
                                    return this._def.optionsMap
                                }
                                static create(t, n, a) {
                                    let o = new Map;
                                    for (let e of n) {
                                        let n = n2(e.shape[t]);
                                        if (!n.length) throw Error("A discriminator value for key `".concat(t, "` could not be extracted from all schema options"));
                                        for (let a of n) {
                                            if (o.has(a)) throw Error("Discriminator property ".concat(String(t), " has duplicate value ").concat(String(a)));
                                            o.set(a, e)
                                        }
                                    }
                                    return new e({
                                        typeName: ei.ZodDiscriminatedUnion,
                                        discriminator: t,
                                        options: n,
                                        optionsMap: o,
                                        ...nS(a)
                                    })
                                }
                            },
                            n9 = class extends nC {
                                _parse(e) {
                                    let {
                                        status: t,
                                        ctx: n
                                    } = this._processInputParams(e), a = (e, a) => {
                                        if (nA(e) || nA(a)) return nd;
                                        let o = function e(t, n) {
                                            let a = nt(t),
                                                o = nt(n);
                                            if (t === n) return {
                                                valid: !0,
                                                data: t
                                            };
                                            if (a === ne.object && o === ne.object) {
                                                let a = ee.objectKeys(n),
                                                    o = ee.objectKeys(t).filter(e => -1 !== a.indexOf(e)),
                                                    r = { ...t,
                                                        ...n
                                                    };
                                                for (let a of o) {
                                                    let o = e(t[a], n[a]);
                                                    if (!o.valid) return {
                                                        valid: !1
                                                    };
                                                    r[a] = o.data
                                                }
                                                return {
                                                    valid: !0,
                                                    data: r
                                                }
                                            }
                                            if (a === ne.array && o === ne.array) {
                                                if (t.length !== n.length) return {
                                                    valid: !1
                                                };
                                                let a = [];
                                                for (let o = 0; o < t.length; o++) {
                                                    let r = e(t[o], n[o]);
                                                    if (!r.valid) return {
                                                        valid: !1
                                                    };
                                                    a.push(r.data)
                                                }
                                                return {
                                                    valid: !0,
                                                    data: a
                                                }
                                            }
                                            return a === ne.date && o === ne.date && +t == +n ? {
                                                valid: !0,
                                                data: t
                                            } : {
                                                valid: !1
                                            }
                                        }(e.value, a.value);
                                        return o.valid ? ((nm(e) || nm(a)) && t.dirty(), {
                                            status: t.value,
                                            value: o.data
                                        }) : (nl(n, {
                                            code: nn.invalid_intersection_types
                                        }), nd)
                                    };
                                    return n.common.async ? Promise.all([this._def.left._parseAsync({
                                        data: n.data,
                                        path: n.path,
                                        parent: n
                                    }), this._def.right._parseAsync({
                                        data: n.data,
                                        path: n.path,
                                        parent: n
                                    })]).then(e => {
                                        let [t, n] = e;
                                        return a(t, n)
                                    }) : a(this._def.left._parseSync({
                                        data: n.data,
                                        path: n.path,
                                        parent: n
                                    }), this._def.right._parseSync({
                                        data: n.data,
                                        path: n.path,
                                        parent: n
                                    }))
                                }
                            };
                        n9.create = (e, t, n) => new n9({
                            left: e,
                            right: t,
                            typeName: ei.ZodIntersection,
                            ...nS(n)
                        });
                        var n3 = class e extends nC {
                            _parse(e) {
                                let {
                                    status: t,
                                    ctx: n
                                } = this._processInputParams(e);
                                if (n.parsedType !== ne.array) return nl(n, {
                                    code: nn.invalid_type,
                                    expected: ne.array,
                                    received: n.parsedType
                                }), nd;
                                if (n.data.length < this._def.items.length) return nl(n, {
                                    code: nn.too_small,
                                    minimum: this._def.items.length,
                                    inclusive: !0,
                                    exact: !1,
                                    type: "array"
                                }), nd;
                                !this._def.rest && n.data.length > this._def.items.length && (nl(n, {
                                    code: nn.too_big,
                                    maximum: this._def.items.length,
                                    inclusive: !0,
                                    exact: !1,
                                    type: "array"
                                }), t.dirty());
                                let a = [...n.data].map((e, t) => {
                                    let a = this._def.items[t] || this._def.rest;
                                    return a ? a._parse(new nh(n, e, n.path, t)) : null
                                }).filter(e => !!e);
                                return n.common.async ? Promise.all(a).then(e => nc.mergeArray(t, e)) : nc.mergeArray(t, a)
                            }
                            get items() {
                                return this._def.items
                            }
                            rest(t) {
                                return new e({ ...this._def,
                                    rest: t
                                })
                            }
                        };
                        n3.create = (e, t) => {
                            if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
                            return new n3({
                                items: e,
                                typeName: ei.ZodTuple,
                                rest: null,
                                ...nS(t)
                            })
                        };
                        var n5 = class e extends nC {
                                get keySchema() {
                                    return this._def.keyType
                                }
                                get valueSchema() {
                                    return this._def.valueType
                                }
                                _parse(e) {
                                    let {
                                        status: t,
                                        ctx: n
                                    } = this._processInputParams(e);
                                    if (n.parsedType !== ne.object) return nl(n, {
                                        code: nn.invalid_type,
                                        expected: ne.object,
                                        received: n.parsedType
                                    }), nd;
                                    let a = [],
                                        o = this._def.keyType,
                                        r = this._def.valueType;
                                    for (let e in n.data) a.push({
                                        key: o._parse(new nh(n, e, n.path, e)),
                                        value: r._parse(new nh(n, n.data[e], n.path, e)),
                                        alwaysSet: e in n.data
                                    });
                                    return n.common.async ? nc.mergeObjectAsync(t, a) : nc.mergeObjectSync(t, a)
                                }
                                get element() {
                                    return this._def.valueType
                                }
                                static create(t, n, a) {
                                    return new e(n instanceof nC ? {
                                        keyType: t,
                                        valueType: n,
                                        typeName: ei.ZodRecord,
                                        ...nS(a)
                                    } : {
                                        keyType: nF.create(),
                                        valueType: t,
                                        typeName: ei.ZodRecord,
                                        ...nS(n)
                                    })
                                }
                            },
                            n7 = class extends nC {
                                get keySchema() {
                                    return this._def.keyType
                                }
                                get valueSchema() {
                                    return this._def.valueType
                                }
                                _parse(e) {
                                    let {
                                        status: t,
                                        ctx: n
                                    } = this._processInputParams(e);
                                    if (n.parsedType !== ne.map) return nl(n, {
                                        code: nn.invalid_type,
                                        expected: ne.map,
                                        received: n.parsedType
                                    }), nd;
                                    let a = this._def.keyType,
                                        o = this._def.valueType,
                                        r = [...n.data.entries()].map((e, t) => {
                                            let [r, i] = e;
                                            return {
                                                key: a._parse(new nh(n, r, n.path, [t, "key"])),
                                                value: o._parse(new nh(n, i, n.path, [t, "value"]))
                                            }
                                        });
                                    if (n.common.async) {
                                        let e = new Map;
                                        return Promise.resolve().then(async () => {
                                            for (let n of r) {
                                                let a = await n.key,
                                                    o = await n.value;
                                                if ("aborted" === a.status || "aborted" === o.status) return nd;
                                                ("dirty" === a.status || "dirty" === o.status) && t.dirty(), e.set(a.value, o.value)
                                            }
                                            return {
                                                status: t.value,
                                                value: e
                                            }
                                        })
                                    } {
                                        let e = new Map;
                                        for (let n of r) {
                                            let a = n.key,
                                                o = n.value;
                                            if ("aborted" === a.status || "aborted" === o.status) return nd;
                                            ("dirty" === a.status || "dirty" === o.status) && t.dirty(), e.set(a.value, o.value)
                                        }
                                        return {
                                            status: t.value,
                                            value: e
                                        }
                                    }
                                }
                            };
                        n7.create = (e, t, n) => new n7({
                            valueType: t,
                            keyType: e,
                            typeName: ei.ZodMap,
                            ...nS(n)
                        });
                        var n6 = class e extends nC {
                            _parse(e) {
                                let {
                                    status: t,
                                    ctx: n
                                } = this._processInputParams(e);
                                if (n.parsedType !== ne.set) return nl(n, {
                                    code: nn.invalid_type,
                                    expected: ne.set,
                                    received: n.parsedType
                                }), nd;
                                let a = this._def;
                                null !== a.minSize && n.data.size < a.minSize.value && (nl(n, {
                                    code: nn.too_small,
                                    minimum: a.minSize.value,
                                    type: "set",
                                    inclusive: !0,
                                    exact: !1,
                                    message: a.minSize.message
                                }), t.dirty()), null !== a.maxSize && n.data.size > a.maxSize.value && (nl(n, {
                                    code: nn.too_big,
                                    maximum: a.maxSize.value,
                                    type: "set",
                                    inclusive: !0,
                                    exact: !1,
                                    message: a.maxSize.message
                                }), t.dirty());
                                let o = this._def.valueType;

                                function r(e) {
                                    let n = new Set;
                                    for (let a of e) {
                                        if ("aborted" === a.status) return nd;
                                        "dirty" === a.status && t.dirty(), n.add(a.value)
                                    }
                                    return {
                                        status: t.value,
                                        value: n
                                    }
                                }
                                let i = [...n.data.values()].map((e, t) => o._parse(new nh(n, e, n.path, t)));
                                return n.common.async ? Promise.all(i).then(e => r(e)) : r(i)
                            }
                            min(t, n) {
                                return new e({ ...this._def,
                                    minSize: {
                                        value: t,
                                        message: en.toString(n)
                                    }
                                })
                            }
                            max(t, n) {
                                return new e({ ...this._def,
                                    maxSize: {
                                        value: t,
                                        message: en.toString(n)
                                    }
                                })
                            }
                            size(e, t) {
                                return this.min(e, t).max(e, t)
                            }
                            nonempty(e) {
                                return this.min(1, e)
                            }
                        };
                        n6.create = (e, t) => new n6({
                            valueType: e,
                            minSize: null,
                            maxSize: null,
                            typeName: ei.ZodSet,
                            ...nS(t)
                        });
                        var n8 = class e extends nC {
                                _parse(e) {
                                    let {
                                        ctx: t
                                    } = this._processInputParams(e);
                                    if (t.parsedType !== ne.function) return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.function,
                                        received: t.parsedType
                                    }), nd;

                                    function n(e, n) {
                                        return ns({
                                            data: e,
                                            path: t.path,
                                            errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ni(), no].filter(e => !!e),
                                            issueData: {
                                                code: nn.invalid_arguments,
                                                argumentsError: n
                                            }
                                        })
                                    }

                                    function a(e, n) {
                                        return ns({
                                            data: e,
                                            path: t.path,
                                            errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, ni(), no].filter(e => !!e),
                                            issueData: {
                                                code: nn.invalid_return_type,
                                                returnTypeError: n
                                            }
                                        })
                                    }
                                    let o = {
                                            errorMap: t.common.contextualErrorMap
                                        },
                                        r = t.data;
                                    if (this._def.returns instanceof ar) {
                                        let e = this;
                                        return np(async function() {
                                            for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                                            let l = new na([]),
                                                c = await e._def.args.parseAsync(i, o).catch(e => {
                                                    throw l.addIssue(n(i, e)), l
                                                }),
                                                d = await Reflect.apply(r, this, c);
                                            return await e._def.returns._def.type.parseAsync(d, o).catch(e => {
                                                throw l.addIssue(a(d, e)), l
                                            })
                                        })
                                    } {
                                        let e = this;
                                        return np(function() {
                                            for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                                            let l = e._def.args.safeParse(i, o);
                                            if (!l.success) throw new na([n(i, l.error)]);
                                            let c = Reflect.apply(r, this, l.data),
                                                d = e._def.returns.safeParse(c, o);
                                            if (!d.success) throw new na([a(c, d.error)]);
                                            return d.data
                                        })
                                    }
                                }
                                parameters() {
                                    return this._def.args
                                }
                                returnType() {
                                    return this._def.returns
                                }
                                args() {
                                    for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                                    return new e({ ...this._def,
                                        args: n3.create(n).rest(nX.create())
                                    })
                                }
                                returns(t) {
                                    return new e({ ...this._def,
                                        returns: t
                                    })
                                }
                                implement(e) {
                                    return this.parse(e)
                                }
                                strictImplement(e) {
                                    return this.parse(e)
                                }
                                static create(t, n, a) {
                                    return new e({
                                        args: t || n3.create([]).rest(nX.create()),
                                        returns: n || nX.create(),
                                        typeName: ei.ZodFunction,
                                        ...nS(a)
                                    })
                                }
                                constructor() {
                                    super(...arguments), this.validate = this.implement
                                }
                            },
                            ae = class extends nC {
                                get schema() {
                                    return this._def.getter()
                                }
                                _parse(e) {
                                    let {
                                        ctx: t
                                    } = this._processInputParams(e);
                                    return this._def.getter()._parse({
                                        data: t.data,
                                        path: t.path,
                                        parent: t
                                    })
                                }
                            };
                        ae.create = (e, t) => new ae({
                            getter: e,
                            typeName: ei.ZodLazy,
                            ...nS(t)
                        });
                        var at = class extends nC {
                            _parse(e) {
                                if (e.data !== this._def.value) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        received: t.data,
                                        code: nn.invalid_literal,
                                        expected: this._def.value
                                    }), nd
                                }
                                return {
                                    status: "valid",
                                    value: e.data
                                }
                            }
                            get value() {
                                return this._def.value
                            }
                        };

                        function an(e, t) {
                            return new aa({
                                values: e,
                                typeName: ei.ZodEnum,
                                ...nS(t)
                            })
                        }
                        at.create = (e, t) => new at({
                            value: e,
                            typeName: ei.ZodLiteral,
                            ...nS(t)
                        });
                        var aa = class e extends nC {
                            _parse(e) {
                                if ("string" != typeof e.data) {
                                    let t = this._getOrReturnCtx(e),
                                        n = this._def.values;
                                    return nl(t, {
                                        expected: ee.joinValues(n),
                                        received: t.parsedType,
                                        code: nn.invalid_type
                                    }), nd
                                }
                                if (nT(this, ea, "f") || nN(this, ea, new Set(this._def.values), "f"), !nT(this, ea, "f").has(e.data)) {
                                    let t = this._getOrReturnCtx(e),
                                        n = this._def.values;
                                    return nl(t, {
                                        received: t.data,
                                        code: nn.invalid_enum_value,
                                        options: n
                                    }), nd
                                }
                                return np(e.data)
                            }
                            get options() {
                                return this._def.values
                            }
                            get enum() {
                                let e = {};
                                for (let t of this._def.values) e[t] = t;
                                return e
                            }
                            get Values() {
                                let e = {};
                                for (let t of this._def.values) e[t] = t;
                                return e
                            }
                            get Enum() {
                                let e = {};
                                for (let t of this._def.values) e[t] = t;
                                return e
                            }
                            extract(t) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._def;
                                return e.create(t, { ...this._def,
                                    ...n
                                })
                            }
                            exclude(t) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._def;
                                return e.create(this.options.filter(e => !t.includes(e)), { ...this._def,
                                    ...n
                                })
                            }
                            constructor() {
                                super(...arguments), ea.set(this, void 0)
                            }
                        };
                        ea = new WeakMap, aa.create = an;
                        var ao = class extends nC {
                            _parse(e) {
                                let t = ee.getValidEnumValues(this._def.values),
                                    n = this._getOrReturnCtx(e);
                                if (n.parsedType !== ne.string && n.parsedType !== ne.number) {
                                    let e = ee.objectValues(t);
                                    return nl(n, {
                                        expected: ee.joinValues(e),
                                        received: n.parsedType,
                                        code: nn.invalid_type
                                    }), nd
                                }
                                if (nT(this, eo, "f") || nN(this, eo, new Set(ee.getValidEnumValues(this._def.values)), "f"), !nT(this, eo, "f").has(e.data)) {
                                    let e = ee.objectValues(t);
                                    return nl(n, {
                                        received: n.data,
                                        code: nn.invalid_enum_value,
                                        options: e
                                    }), nd
                                }
                                return np(e.data)
                            }
                            get enum() {
                                return this._def.values
                            }
                            constructor() {
                                super(...arguments), eo.set(this, void 0)
                            }
                        };
                        eo = new WeakMap, ao.create = (e, t) => new ao({
                            values: e,
                            typeName: ei.ZodNativeEnum,
                            ...nS(t)
                        });
                        var ar = class extends nC {
                            unwrap() {
                                return this._def.type
                            }
                            _parse(e) {
                                let {
                                    ctx: t
                                } = this._processInputParams(e);
                                return t.parsedType !== ne.promise && !1 === t.common.async ? (nl(t, {
                                    code: nn.invalid_type,
                                    expected: ne.promise,
                                    received: t.parsedType
                                }), nd) : np((t.parsedType === ne.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
                                    path: t.path,
                                    errorMap: t.common.contextualErrorMap
                                })))
                            }
                        };
                        ar.create = (e, t) => new ar({
                            type: e,
                            typeName: ei.ZodPromise,
                            ...nS(t)
                        });
                        var ai = class extends nC {
                            innerType() {
                                return this._def.schema
                            }
                            sourceType() {
                                return this._def.schema._def.typeName === ei.ZodEffects ? this._def.schema.sourceType() : this._def.schema
                            }
                            _parse(e) {
                                let {
                                    status: t,
                                    ctx: n
                                } = this._processInputParams(e), a = this._def.effect || null, o = {
                                    addIssue: e => {
                                        nl(n, e), e.fatal ? t.abort() : t.dirty()
                                    },
                                    get path() {
                                        return n.path
                                    }
                                };
                                if (o.addIssue = o.addIssue.bind(o), "preprocess" === a.type) {
                                    let e = a.transform(n.data, o);
                                    if (n.common.async) return Promise.resolve(e).then(async e => {
                                        if ("aborted" === t.value) return nd;
                                        let a = await this._def.schema._parseAsync({
                                            data: e,
                                            path: n.path,
                                            parent: n
                                        });
                                        return "aborted" === a.status ? nd : "dirty" === a.status || "dirty" === t.value ? nu(a.value) : a
                                    }); {
                                        if ("aborted" === t.value) return nd;
                                        let a = this._def.schema._parseSync({
                                            data: e,
                                            path: n.path,
                                            parent: n
                                        });
                                        return "aborted" === a.status ? nd : "dirty" === a.status || "dirty" === t.value ? nu(a.value) : a
                                    }
                                }
                                if ("refinement" === a.type) {
                                    let e = e => {
                                        let t = a.refinement(e, o);
                                        if (n.common.async) return Promise.resolve(t);
                                        if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                                        return e
                                    };
                                    if (!1 !== n.common.async) return this._def.schema._parseAsync({
                                        data: n.data,
                                        path: n.path,
                                        parent: n
                                    }).then(n => "aborted" === n.status ? nd : ("dirty" === n.status && t.dirty(), e(n.value).then(() => ({
                                        status: t.value,
                                        value: n.value
                                    })))); {
                                        let a = this._def.schema._parseSync({
                                            data: n.data,
                                            path: n.path,
                                            parent: n
                                        });
                                        return "aborted" === a.status ? nd : ("dirty" === a.status && t.dirty(), e(a.value), {
                                            status: t.value,
                                            value: a.value
                                        })
                                    }
                                }
                                if ("transform" === a.type) {
                                    if (!1 !== n.common.async) return this._def.schema._parseAsync({
                                        data: n.data,
                                        path: n.path,
                                        parent: n
                                    }).then(e => nE(e) ? Promise.resolve(a.transform(e.value, o)).then(e => ({
                                        status: t.value,
                                        value: e
                                    })) : e); {
                                        let e = this._def.schema._parseSync({
                                            data: n.data,
                                            path: n.path,
                                            parent: n
                                        });
                                        if (!nE(e)) return e;
                                        let r = a.transform(e.value, o);
                                        if (r instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                                        return {
                                            status: t.value,
                                            value: r
                                        }
                                    }
                                }
                                ee.assertNever(a)
                            }
                        };
                        ai.create = (e, t, n) => new ai({
                            schema: e,
                            typeName: ei.ZodEffects,
                            effect: t,
                            ...nS(n)
                        }), ai.createWithPreprocess = (e, t, n) => new ai({
                            schema: t,
                            effect: {
                                type: "preprocess",
                                transform: e
                            },
                            typeName: ei.ZodEffects,
                            ...nS(n)
                        });
                        var as = class extends nC {
                            _parse(e) {
                                return this._getType(e) === ne.undefined ? np(void 0) : this._def.innerType._parse(e)
                            }
                            unwrap() {
                                return this._def.innerType
                            }
                        };
                        as.create = (e, t) => new as({
                            innerType: e,
                            typeName: ei.ZodOptional,
                            ...nS(t)
                        });
                        var al = class extends nC {
                            _parse(e) {
                                return this._getType(e) === ne.null ? np(null) : this._def.innerType._parse(e)
                            }
                            unwrap() {
                                return this._def.innerType
                            }
                        };
                        al.create = (e, t) => new al({
                            innerType: e,
                            typeName: ei.ZodNullable,
                            ...nS(t)
                        });
                        var ac = class extends nC {
                            _parse(e) {
                                let {
                                    ctx: t
                                } = this._processInputParams(e), n = t.data;
                                return t.parsedType === ne.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
                                    data: n,
                                    path: t.path,
                                    parent: t
                                })
                            }
                            removeDefault() {
                                return this._def.innerType
                            }
                        };
                        ac.create = (e, t) => new ac({
                            innerType: e,
                            typeName: ei.ZodDefault,
                            defaultValue: "function" == typeof t.default ? t.default : () => t.default,
                            ...nS(t)
                        });
                        var ad = class extends nC {
                            _parse(e) {
                                let {
                                    ctx: t
                                } = this._processInputParams(e), n = { ...t,
                                    common: { ...t.common,
                                        issues: []
                                    }
                                }, a = this._def.innerType._parse({
                                    data: n.data,
                                    path: n.path,
                                    parent: { ...n
                                    }
                                });
                                return n_(a) ? a.then(e => ({
                                    status: "valid",
                                    value: "valid" === e.status ? e.value : this._def.catchValue({
                                        get error() {
                                            return new na(n.common.issues)
                                        },
                                        input: n.data
                                    })
                                })) : {
                                    status: "valid",
                                    value: "valid" === a.status ? a.value : this._def.catchValue({
                                        get error() {
                                            return new na(n.common.issues)
                                        },
                                        input: n.data
                                    })
                                }
                            }
                            removeCatch() {
                                return this._def.innerType
                            }
                        };
                        ad.create = (e, t) => new ad({
                            innerType: e,
                            typeName: ei.ZodCatch,
                            catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
                            ...nS(t)
                        });
                        var au = class extends nC {
                            _parse(e) {
                                if (this._getType(e) !== ne.nan) {
                                    let t = this._getOrReturnCtx(e);
                                    return nl(t, {
                                        code: nn.invalid_type,
                                        expected: ne.nan,
                                        received: t.parsedType
                                    }), nd
                                }
                                return {
                                    status: "valid",
                                    value: e.data
                                }
                            }
                        };
                        au.create = e => new au({
                            typeName: ei.ZodNaN,
                            ...nS(e)
                        });
                        var ap = Symbol("zod_brand"),
                            aA = class extends nC {
                                _parse(e) {
                                    let {
                                        ctx: t
                                    } = this._processInputParams(e), n = t.data;
                                    return this._def.type._parse({
                                        data: n,
                                        path: t.path,
                                        parent: t
                                    })
                                }
                                unwrap() {
                                    return this._def.type
                                }
                            },
                            am = class e extends nC {
                                _parse(e) {
                                    let {
                                        status: t,
                                        ctx: n
                                    } = this._processInputParams(e);
                                    if (n.common.async) return (async () => {
                                        let e = await this._def.in._parseAsync({
                                            data: n.data,
                                            path: n.path,
                                            parent: n
                                        });
                                        return "aborted" === e.status ? nd : "dirty" === e.status ? (t.dirty(), nu(e.value)) : this._def.out._parseAsync({
                                            data: e.value,
                                            path: n.path,
                                            parent: n
                                        })
                                    })(); {
                                        let e = this._def.in._parseSync({
                                            data: n.data,
                                            path: n.path,
                                            parent: n
                                        });
                                        return "aborted" === e.status ? nd : "dirty" === e.status ? (t.dirty(), {
                                            status: "dirty",
                                            value: e.value
                                        }) : this._def.out._parseSync({
                                            data: e.value,
                                            path: n.path,
                                            parent: n
                                        })
                                    }
                                }
                                static create(t, n) {
                                    return new e({ in: t,
                                        out: n,
                                        typeName: ei.ZodPipeline
                                    })
                                }
                            },
                            aE = class extends nC {
                                _parse(e) {
                                    let t = this._def.innerType._parse(e),
                                        n = e => (nE(e) && (e.value = Object.freeze(e.value)), e);
                                    return n_(t) ? t.then(e => n(e)) : n(t)
                                }
                                unwrap() {
                                    return this._def.innerType
                                }
                            };

                        function a_(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            return e ? nJ.create().superRefine((a, o) => {
                                var r, i;
                                if (!e(a)) {
                                    let e = "function" == typeof t ? t(a) : "string" == typeof t ? {
                                            message: t
                                        } : t,
                                        s = null === (i = null !== (r = e.fatal) && void 0 !== r ? r : n) || void 0 === i || i;
                                    o.addIssue({
                                        code: "custom",
                                        ..."string" == typeof e ? {
                                            message: e
                                        } : e,
                                        fatal: s
                                    })
                                }
                            }) : nJ.create()
                        }
                        aE.create = (e, t) => new aE({
                            innerType: e,
                            typeName: ei.ZodReadonly,
                            ...nS(t)
                        });
                        var aT = {
                            object: n0.lazycreate
                        };
                        (J = ei || (ei = {})).ZodString = "ZodString", J.ZodNumber = "ZodNumber", J.ZodNaN = "ZodNaN", J.ZodBigInt = "ZodBigInt", J.ZodBoolean = "ZodBoolean", J.ZodDate = "ZodDate", J.ZodSymbol = "ZodSymbol", J.ZodUndefined = "ZodUndefined", J.ZodNull = "ZodNull", J.ZodAny = "ZodAny", J.ZodUnknown = "ZodUnknown", J.ZodNever = "ZodNever", J.ZodVoid = "ZodVoid", J.ZodArray = "ZodArray", J.ZodObject = "ZodObject", J.ZodUnion = "ZodUnion", J.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", J.ZodIntersection = "ZodIntersection", J.ZodTuple = "ZodTuple", J.ZodRecord = "ZodRecord", J.ZodMap = "ZodMap", J.ZodSet = "ZodSet", J.ZodFunction = "ZodFunction", J.ZodLazy = "ZodLazy", J.ZodLiteral = "ZodLiteral", J.ZodEnum = "ZodEnum", J.ZodEffects = "ZodEffects", J.ZodNativeEnum = "ZodNativeEnum", J.ZodOptional = "ZodOptional", J.ZodNullable = "ZodNullable", J.ZodDefault = "ZodDefault", J.ZodCatch = "ZodCatch", J.ZodPromise = "ZodPromise", J.ZodBranded = "ZodBranded", J.ZodPipeline = "ZodPipeline", J.ZodReadonly = "ZodReadonly";
                        var aN = nF.create,
                            ah = nK.create,
                            aI = au.create,
                            aS = nW.create,
                            aC = nj.create,
                            aO = nZ.create,
                            aR = nV.create,
                            ag = nY.create,
                            af = nz.create,
                            aP = nJ.create,
                            aM = nX.create,
                            aL = nQ.create,
                            ab = nq.create,
                            ay = n$.create,
                            av = n0.create,
                            aD = n0.strictCreate,
                            aU = n1.create,
                            aG = n4.create,
                            aH = n9.create,
                            ak = n3.create,
                            aB = n5.create,
                            ax = n7.create,
                            aw = n6.create,
                            aF = n8.create,
                            aK = ae.create,
                            aW = at.create,
                            aj = aa.create,
                            aZ = ao.create,
                            aV = ar.create,
                            aY = ai.create,
                            az = as.create,
                            aJ = al.create,
                            aX = ai.createWithPreprocess,
                            aQ = am.create,
                            aq = Object.freeze({
                                __proto__: null,
                                defaultErrorMap: no,
                                setErrorMap: function(e) {
                                    nr = e
                                },
                                getErrorMap: ni,
                                makeIssue: ns,
                                EMPTY_PATH: [],
                                addIssueToContext: nl,
                                ParseStatus: nc,
                                INVALID: nd,
                                DIRTY: nu,
                                OK: np,
                                isAborted: nA,
                                isDirty: nm,
                                isValid: nE,
                                isAsync: n_,
                                get util() {
                                    return ee
                                },
                                get objectUtil() {
                                    return et
                                },
                                ZodParsedType: ne,
                                getParsedType: nt,
                                ZodType: nC,
                                datetimeRegex: nw,
                                ZodString: nF,
                                ZodNumber: nK,
                                ZodBigInt: nW,
                                ZodBoolean: nj,
                                ZodDate: nZ,
                                ZodSymbol: nV,
                                ZodUndefined: nY,
                                ZodNull: nz,
                                ZodAny: nJ,
                                ZodUnknown: nX,
                                ZodNever: nQ,
                                ZodVoid: nq,
                                ZodArray: n$,
                                ZodObject: n0,
                                ZodUnion: n1,
                                ZodDiscriminatedUnion: n4,
                                ZodIntersection: n9,
                                ZodTuple: n3,
                                ZodRecord: n5,
                                ZodMap: n7,
                                ZodSet: n6,
                                ZodFunction: n8,
                                ZodLazy: ae,
                                ZodLiteral: at,
                                ZodEnum: aa,
                                ZodNativeEnum: ao,
                                ZodPromise: ar,
                                ZodEffects: ai,
                                ZodTransformer: ai,
                                ZodOptional: as,
                                ZodNullable: al,
                                ZodDefault: ac,
                                ZodCatch: ad,
                                ZodNaN: au,
                                BRAND: ap,
                                ZodBranded: aA,
                                ZodPipeline: am,
                                ZodReadonly: aE,
                                custom: a_,
                                Schema: nC,
                                ZodSchema: nC,
                                late: aT,
                                get ZodFirstPartyTypeKind() {
                                    return ei
                                },
                                coerce: {
                                    string: e => nF.create({ ...e,
                                        coerce: !0
                                    }),
                                    number: e => nK.create({ ...e,
                                        coerce: !0
                                    }),
                                    boolean: e => nj.create({ ...e,
                                        coerce: !0
                                    }),
                                    bigint: e => nW.create({ ...e,
                                        coerce: !0
                                    }),
                                    date: e => nZ.create({ ...e,
                                        coerce: !0
                                    })
                                },
                                any: aP,
                                array: ay,
                                bigint: aS,
                                boolean: aC,
                                date: aO,
                                discriminatedUnion: aG,
                                effect: aY,
                                enum: aj,
                                function: aF,
                                instanceof: function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                        message: "Input not instance of ".concat(e.name)
                                    };
                                    return a_(t => t instanceof e, t)
                                },
                                intersection: aH,
                                lazy: aK,
                                literal: aW,
                                map: ax,
                                nan: aI,
                                nativeEnum: aZ,
                                never: aL,
                                null: af,
                                nullable: aJ,
                                number: ah,
                                object: av,
                                oboolean: () => aC().optional(),
                                onumber: () => ah().optional(),
                                optional: az,
                                ostring: () => aN().optional(),
                                pipeline: aQ,
                                preprocess: aX,
                                promise: aV,
                                record: aB,
                                set: aw,
                                strictObject: aD,
                                string: aN,
                                symbol: aR,
                                transformer: aY,
                                tuple: ak,
                                undefined: ag,
                                union: aU,
                                unknown: aM,
                                void: ab,
                                NEVER: nd,
                                ZodIssueCode: nn,
                                quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
                                ZodError: na
                            }),
                            a$ = aq.object({
                                key: aq.string(),
                                value: aq.string()
                            }),
                            a0 = aq.object({
                                success: aq.boolean(),
                                message: aq.string()
                            }),
                            a1 = e => e.replace(/([a-z])([A-Z])/g, "$1_$2").replace(/\s+/g, "_").replace(/[^\w_]/g, "").toLowerCase(),
                            a2 = e => e.toUpperCase(),
                            a4 = e => {
                                let {
                                    projectGroup: t
                                } = e;
                                return a2(a1(t.name))
                            },
                            a9 = "STRIPE_CONNECT_WEBHOOK_URL",
                            a3 = "STRIPE_WEBHOOK_SECRET",
                            a5 = "New Database",
                            a7 = ((X = a7 || {}).PENDING = "PENDING", X.PREPARING = "PREPARING", X.RUNNING = "RUNNING", X.COMPLETED = "COMPLETED", X.FAILED = "FAILED", X),
                            a6 = ((Q = a6 || {}).CREATING = "CREATING", Q.COMPLETED = "COMPLETED", Q.FAILED = "FAILED", Q),
                            a8 = {
                                FREE: 1073741824,
                                PRO: 10737418240,
                                BUSINESS: 107374182400,
                                ENTERPRISE: 107374182400
                            };

                        function oe(e) {
                            let {
                                plan: t
                            } = e;
                            return a8[t]
                        }
                        var ot = e => {
                                switch (e) {
                                    case "AGENT_AUTO_SELECT_INTEGRATION":
                                    case "AGENT_AUTO_SELECT_INTEGRATION":
                                    case "TOP_DOWN_CHAT":
                                        return !0;
                                    case "APPLY_COMMAND":
                                    case "CHAT":
                                    case "FORK_WITH_CHAT_MESSAGE":
                                    case "FORK_MODULE_WITH_CHAT_MESSAGE":
                                    case "PUBLISH_PROJECT_AND_CONTINUE_CHAT":
                                    case "SAVE_SECRET_AND_CONTINUE_CHAT":
                                    case "CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT":
                                    case "SELECT_INTEGRATION_WITH_CHAT_MESSAGE":
                                    case "CHAT":
                                    case "ADD_AUTH_AND_CONTINUE_CHAT":
                                    case "UPDATE_AUTH_SETTINGS":
                                    case "FORK":
                                    case "DUPLICATE":
                                    case "AUTOFIX_CHANGE":
                                    case "FIX_CHANGE":
                                    case "CODE_CHANGE":
                                    case "CREATE_COMPONENT_FROM_PROMPT":
                                    case "CREATE_COMPONENT_FROM_PROMPT_AND_CODE":
                                    case "DELETION":
                                    case "FORM_CHANGE":
                                    case "IMAGE_CHANGE":
                                    case "LINK_CHANGE":
                                    case "PROMPT_CHANGE":
                                    case "RESTORE":
                                    case "SELECT_INITIAL_MODULE_IDEA":
                                    case "TEXT_CHANGE":
                                    case "TRY_AGAIN":
                                    case "UI_PATCH":
                                    case "REBUILD_FROM_LATEST":
                                    case "UPDATE_REFERENCES":
                                    case "COMMENT_CHANGE":
                                    case "ENHANCE_PROMPT":
                                    case "CHANGE_AUTH":
                                    case "FORK_FROM_PROJECT_GROUP_TEMPLATE":
                                    case "FORK_FROM_PROJECT_GROUP":
                                    case "DUPLICATE_PROJECT_GROUP":
                                    case "FORK_FROM_MODULE":
                                    case "DUPLICATE_MODULE":
                                        return !1;
                                    default:
                                        return e
                                }
                            },
                            on = ["RNView", "RNText", "RNTextInput", "RNTouchableOpacity", "RNScrollView", "RNImage", "RNStyleSheet", "RNDimensions", "RNPlatform", "RNAnimated", "RNActivityIndicator", "RNFlatList", "RNModal", "RNPressable", "RNAlert", "RNKeyboardAvoidingView"],
                            oa = [...on, "RNLink", "RNImagePicker", "RNStatusBar", "RNSafeAreaView", "RNSafeAreaProvider"],
                            oo = 'import React, { useState, useEffect, useCallback, useMemo, useRef, useContext, useReducer, useLayoutEffect, useImperativeHandle, useDebugValue } from "react";',
                            or = "import { ".concat(on.map(e => "".concat(e.slice(2), " as ").concat(e)).join(", "), " } from 'react-native';"),
                            oi = ((q = oi || {}).DATABASE = "database", q.GLOBALS_SQL = "globals-sql", q.DESIGN_INITIAL = "design-initial", q),
                            os = (($ = os || {}).SUCCESS = "SUCCESS", $.FAILED = "FAILED", $.PENDING = "PENDING", $)
                    }
                }, function() {
                    return o || (0, a[e_(a)[0]])((o = {
                        exports: {}
                    }).exports, o), o.exports
                });
            Z._b.extend(V());
            var eC = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g,
                eO = e => (String(null != e ? e : "").match(eC) || []).map(e => e.toLowerCase()).join("-"),
                eR = e => "/integrations/".concat(eO(e));
            eR("ANIME_AND_MANGA"), eR("BOOK_SEARCH"), eI(eS(), 1), eI(eS(), 1), eI(eS());
            var eg = (0, c.memo)(function(e) {
                    let {
                        onInitialRender: t,
                        nodes: n
                    } = e;
                    return ! function(e) {
                        let {
                            valid: t,
                            callback: n
                        } = e, a = (0, c.useRef)(!0);
                        (0, c.useEffect)(() => (t && a.current && (null == n || n(), a.current = !1), () => {
                            a.current = !0
                        }), [t, n])
                    }({
                        callback: t,
                        valid: !!n
                    }), (0, s.jsx)(s.Fragment, {
                        children: n
                    })
                }),
                ef = n(65181);
            let eP = {
                renderComponent: C.MAIN_COMPONENT_NAME,
                autoWrapLastExpression: !0,
                onCreateElement: (e, t) => {
                    let {
                        type: n,
                        props: a,
                        children: o
                    } = e;
                    return "img" === n && U(a, "src", "string") && !a.src.startsWith("data:") && v(a, "srcSet") ? t.createElement(k, {
                        props: a
                    }, null) : "script" === n ? B({
                        props: a,
                        children: o,
                        react: t
                    }) : "string" == typeof n && (0, L.isVoidTag)(n) ? t.createElement(n, a, null) : t.createElement(n, a, ...o)
                }
            };

            function eM(e) {
                let t, {
                        authEnabled: n,
                        newDbEnabled: a,
                        projectId: o,
                        selectedRevisionId: r,
                        compiledJS: i,
                        clientIntegrationsSrc: l,
                        isComponent: d,
                        envVariables: u,
                        moduleType: p
                    } = e,
                    A = (0, c.useMemo)(() => l.length > 0 ? j.filter(e => l.includes(e.src)) : [], [l]),
                    [m, E] = (0, c.useState)(0 === A.length),
                    _ = M({
                        authEnabled: n,
                        projectId: o
                    }),
                    [T, N] = (0, c.useState)([]);
                (0, c.useEffect)(() => {
                    0 !== A.length && (async () => {
                        let e = await Promise.all(A.map(async e => {
                            let t = await x(e.src);
                            return [e.moduleAlias, t]
                        }));
                        E(!0), N(e)
                    })().catch(e => ef.Tb(Error("Failed to fetch client integrations", {
                        cause: e
                    }), {
                        extra: {
                            projectId: o,
                            selectedRevisionId: r
                        }
                    }))
                }, [A, o, r]);
                let h = [..._, ...T];
                if (!m) return null;
                try {
                    return t = function(e) {
                        let {
                            compiledJS: t,
                            evalOptions: n,
                            globals: a,
                            envVariables: o
                        } = e, r = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    autoWrapLastExpression: !0,
                                    authEnabled: !1,
                                    disableEffects: !1,
                                    runtime: "react"
                                },
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                                {
                                    autoWrapLastExpression: o,
                                    authEnabled: r,
                                    renderComponent: i,
                                    returnComponent: s,
                                    disableEffects: l,
                                    onCreateElement: c,
                                    runtime: d
                                } = t,
                                u = e;
                            i && e.includes(i) ? u = "".concat(e, "\nreturn React.createElement(").concat(i, ");") : s ? u = "".concat(e, "\nreturn (").concat(s, ");") : o && (u = e.replace("React.createElement", "return React.createElement"));
                            let p = "React.createElement(".concat(i, ")");
                            r && i ? u = u.replace(p, "React.createElement(SessionProvider, {\n        children: ".concat("expo" === d ? "React.createElement(RNSafeAreaProvider, {\n              children: ".concat(p, ",\n            })") : p, ",\n      });")) : i && "expo" === d && (u = u.replace(p, "React.createElement(RNSafeAreaProvider, {\n        children: ".concat(p, ",\n      });")));
                            let A = [...eu, ...a];
                            u = function(e, t) {
                                let n = RegExp("(const|let|var)\\s*{([^}]+)}\\s*=\\s*process\\.env;", "gs");
                                return e.replace(/process\.env\.([\w]+)/g, (e, n) => "string" == typeof n && t.some(e => e[0] === n) ? n : e).replace(n, "")
                            }(u, A);
                            let m = [...Object.entries(ed).map(e => {
                                    let [t, n] = e;
                                    return l && ei.includes(t) ? [t, J] : [t, n]
                                }), ...A],
                                E = [...C.REACT_NATIVE_COMPONENTS.map(e => [e, Q[e.slice(2)]]), ["RNStatusBar", z.A_],
                                    ["RNSafeAreaView", q.j],
                                    ["RNSafeAreaProvider", $.PK],
                                    ["RNLink", ee.r],
                                    ["RNImagePicker", Y],
                                    ["useRouter", et.t],
                                    ["useSearchParams", en.l]
                                ];
                            return function e(t, n) {
                                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eval,
                                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "{}";
                                try {
                                    let e = n ? "\n      const proxySymbol = Symbol('proxy');\n      function createSafeProxy(target) {\n    return new Proxy(target, {\n        get(target, prop, receiver) {\n            if (prop in target) {\n                let value = Reflect.get(target, prop, receiver);\n                if (typeof value === 'object' && value !== null) {\n                    return createSafeProxy(value);  // Recurse for nested objects\n                }\n                return value;\n            } else {\n                return createNoOpProxy();  // Return a no-op function proxy for non-existent properties\n            }\n        }\n    });\n}\n\nfunction createNoOpProxy() {\n    const noOpProxy = new Proxy(function() {}, {\n        get(target, prop) {\n            return createNoOpProxy();  // Return a new no-op function proxy for any property access\n        },\n        apply() {\n            return \"\";  // Return a string whenever the no-op function is called\n        }\n    });\n  noOpProxy[proxySymbol] = true;\n  return noOpProxy;\n}\n\n    ".concat(n.map(e => "const ".concat(e, " = createSafeProxy(").concat(o, ");")).join("\n"), "\n    ") : "",
                                        r = '"use strict";\n'.concat(e).concat(t);
                                    return a(r)
                                } catch (i) {
                                    if (n && n.length > 10 || !(i instanceof ReferenceError)) throw i;
                                    let r = i.message.match(/(.+?) is not defined/);
                                    if (null == r ? void 0 : r[1]) return e(t, [...null != n ? n : [], r[1]], a, o);
                                    throw i
                                }
                            }(u, null, X(es, [...m, ...n, ..."expo" === d ? E : [],
                                ["React", ec({
                                    disableEffects: l,
                                    onCreateElement: c
                                })]
                            ]), '{\n  $$typeof: Symbol.for("react.client.reference"),\n  [Symbol.iterator]: () => ({\n    next() {\n      return { done: true };\n    }\n  }),\n}')
                        }(function(e) {
                            let {
                                compiledJS: t,
                                newDbEnabled: n
                            } = e, a = eo({
                                newDbEnabled: n
                            }), o = er();
                            return "".concat(ep, "\n").concat(o, "\n").concat(a, "\n").concat(t)
                        }({
                            compiledJS: t,
                            newDbEnabled: !!(null == n ? void 0 : n.newDbEnabled)
                        }), n, [...null != a ? a : []], [...null != o ? o : []]);
                        return function e(t) {
                            if (!(null == t || "string" == typeof t || "number" == typeof t || "boolean" == typeof t || "object" == typeof t && "type" in t && "props" in t || Array.isArray(t) && t.every(t => {
                                    try {
                                        return e(t), !0
                                    } catch (e) {
                                        return !1
                                    }
                                }))) throw Error("Value is not a valid ReactNode")
                        }(r), {
                            nodes: r
                        }
                    }({
                        compiledJS: i,
                        globals: h,
                        evalOptions: { ...eP,
                            autoWrapLastExpression: !0,
                            renderComponent: d ? C.STORY_COMPONENT_NAME : C.MAIN_COMPONENT_NAME,
                            authEnabled: n,
                            newDbEnabled: a,
                            runtime: p === C.ModuleType.EXPO_PAGE ? "expo" : "react"
                        },
                        envVariables: u
                    }), (0, s.jsx)(eg, {
                        nodes: t.nodes
                    })
                } catch (e) {
                    return ef.Tb(Error("Failed to generate nodes", {
                        cause: e
                    }), {
                        extra: {
                            projectId: o,
                            selectedRevisionId: r
                        }
                    }), null
                }
            }
        },
        91710: function(e, t, n) {
            n.d(t, {
                Qn: function() {
                    return o
                },
                jS: function() {
                    return r
                }
            });
            var a = n(14218);
            n(93652);
            let o = "/pricing",
                r = () => a.ZP.NEXT_PUBLIC_URL
        },
        31172: function(e, t, n) {
            var a = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                r = Object.getOwnPropertyNames,
                i = Object.prototype.hasOwnProperty,
                s = {};
            ((e, t) => {
                for (var n in t) a(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(s, {
                CUSTOM_COMPONENT_PREFIX: () => k,
                DEFAULT_EVENTS: () => _,
                DEFAULT_OPTIONS: () => E,
                DEFAULT_TRANSFORM_OPTIONS: () => B,
                SAXParser: () => l.SAXParser,
                SaxEventType: () => l.SaxEventType,
                Tag: () => l.Tag,
                TreesitterParser: () => H,
                cleanCode: () => U,
                createParser: () => T,
                extractCodeBlocks: () => v,
                extractComments: () => Y,
                getIndexFromPosition: () => h,
                getIndexFromSaxPosition: () => I,
                groupCode: () => j,
                isVoidTag: () => A,
                mergeCode: () => Z,
                splitIntoBlocks: () => y
            }), e.exports = ((e, t, n, s) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let l of r(t)) i.call(e, l) || l === n || a(e, l, {
                        get: () => t[l],
                        enumerable: !(s = o(t, l)) || s.enumerable
                    });
                return e
            })(a({}, "__esModule", {
                value: !0
            }), s);
            var l = n(39395),
                c = e => {
                    let t = /^<(?:\/)?([a-zA-Z0-9._]+)(\s|>)/m.exec(e);
                    return t ? t[1] : ""
                },
                d = "<></>",
                u = d.length,
                p = new Set(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]),
                A = e => p.has(e),
                m = n(39395),
                E = {
                    highWaterMark: 32768
                },
                _ = m.SaxEventType.OpenTag | m.SaxEventType.CloseTag | m.SaxEventType.Text | m.SaxEventType.Attribute,
                T = () => new m.SAXParser(_, E),
                N = n(6364),
                h = e => {
                    let {
                        position: t,
                        lines: n
                    } = e;
                    return n.slice(0, t.row).reduce((e, t) => e + t.length + 1, t.column)
                },
                I = e => {
                    let {
                        position: t,
                        lines: n
                    } = e;
                    return h({
                        position: {
                            row: t.line,
                            column: t.character
                        },
                        lines: n
                    })
                },
                S = ['"', '"', "`"],
                C = ["{", "(", "["],
                O = ["}", ")", "]"],
                R = {
                    "{": "}",
                    "(": ")",
                    "[": "]",
                    "'": "'",
                    '"': '"',
                    "`": "`"
                },
                g = (0, N.invert)(R),
                f = e => {
                    var t;
                    return "jsx_text" === e.type ? e.endIndex : "</" === e.type || "}" === e.type || "<" === e.type ? e.startIndex : null === (t = e.previousSibling) || void 0 === t ? void 0 : t.startIndex
                },
                P = e => {
                    var t, n, a, o;
                    let r, {
                            code: i,
                            fullCode: s,
                            externalComponents: l,
                            treeSitter: p
                        } = e,
                        m = i.split("\n"),
                        E = [],
                        _ = [],
                        T = p.parse(i);
                    for (let e of null != T ? T : []) {
                        let {
                            isMissing: o,
                            rawNode: i,
                            cursor: d,
                            typeEscaped: u
                        } = e;
                        if (r = e.rawNode, ["jsx_opening_element"].includes(u)) {
                            let e = c(d.nodeText);
                            E.push({
                                type: null != e ? e : "",
                                node: i
                            })
                        }
                        if (["jsx_element", "jsx_self_closing_element"].includes(u)) {
                            let e = c(d.nodeText);
                            e && function(e, t, n) {
                                var a;
                                return !(!(e && e[0] !== (null === (a = e[0]) || void 0 === a ? void 0 : a.toLowerCase())) || n.some(t => e.startsWith(t)) || RegExp("function\\s+".concat(e, "\\s*\\("), "gm").test(t) || RegExp("(const|let|var)\\s+".concat(e, "\\s*="), "gm").test(t) || n.some(n => !!RegExp("(const|let|var)\\s*{\\s*[^}]*".concat(e, "[^}]*\\s*\\}\\s*=\\s").concat(n), "gm").exec(t)) || e.startsWith("React."))
                            }(e, s, l) && _.push({
                                start: h({
                                    position: i.startPosition,
                                    lines: m
                                }),
                                end: h({
                                    lines: m,
                                    position: i.endPosition
                                }),
                                replace: !0
                            })
                        }
                        let p = E[E.length - 1];
                        if (C.includes(u) && E.push({
                                type: u,
                                node: i
                            }), S.includes(u) && (null == p ? void 0 : p.type) !== u && E.push({
                                type: u,
                                node: i
                            }), ["<"].includes(u) && (null === (t = i.parent) || void 0 === t ? void 0 : t.type) !== "jsx_opening_element" && (null === (n = i.parent) || void 0 === n ? void 0 : n.type) !== "jsx_self_closing_element" && (null === (a = i.parent) || void 0 === a ? void 0 : a.type) !== "binary_expression") {
                            let e = i.nextSibling;
                            e ? e.nextSibling ? E.push({
                                type: "partial",
                                node: e
                            }) : _.push({
                                start: h({
                                    position: i.startPosition,
                                    lines: m
                                }),
                                end: h({
                                    lines: m,
                                    position: null == e ? void 0 : e.endPosition
                                }),
                                replace: !1
                            }) : _.push({
                                start: h({
                                    position: i.startPosition,
                                    lines: m
                                }),
                                end: h({
                                    lines: m,
                                    position: i.endPosition
                                }),
                                replace: !1
                            })
                        }
                        p && (["jsx_closing_element"].includes(u) && p.type === c(d.nodeText) && E.pop(), [...O, ...S].includes(u) && p.type === g[u] && !o && E.pop())
                    }
                    let N = E[E.length - 1],
                        I = (null == r ? void 0 : r.type) === ">" || (null == r ? void 0 : r.type) === "/>",
                        M = (null == N ? void 0 : N.node.type) === "jsx_opening_element" && !I && r && null !== (o = f(r)) && void 0 !== o ? o : i.length,
                        L = E.slice().reverse().find(e => A(e.type));
                    if ((null == L ? void 0 : L.node) && ">" === i.at(L.node.endIndex - 1)) {
                        let e = h({
                                lines: m,
                                position: L.node.endPosition
                            }) - 1,
                            t = "".concat(i.slice(0, e), " /").concat(i.slice(e)).trim();
                        return i.startsWith("<>") || (t = "<>".concat(t, "</>")), P({
                            code: t,
                            fullCode: s,
                            treeSitter: p,
                            externalComponents: l
                        })
                    }
                    let {
                        modifiedCode: b,
                        modifiedPosition: y
                    } = function(e, t, n) {
                        e.sort((e, t) => e.start - t.start);
                        let [a, ...o] = e;
                        if (!a) return {
                            modifiedCode: t,
                            modifiedPosition: n
                        };
                        let r = [a],
                            {
                                start: i,
                                end: s
                            } = a;
                        for (let e of o) {
                            let {
                                start: t,
                                end: n
                            } = e;
                            if (!(t > i) || !(n <= s)) {
                                if (t < s && n > s) throw Error("Detected overlapping ranges when removing nodes for fixing.");
                                r.push(e), i = t, s = n
                            }
                        }
                        r.sort((e, t) => t.start - e.start);
                        let l = n,
                            c = t;
                        for (let {
                                start: e,
                                end: t,
                                replace: n
                            } of r) {
                            c = "".concat(c.slice(0, e)).concat(n ? d : "").concat(c.slice(t));
                            let a = n ? u : 0;
                            l > t ? l -= t - (e + a) : n && (l = e + a)
                        }
                        return {
                            modifiedCode: c,
                            modifiedPosition: l
                        }
                    }(_, i, M);
                    return "".concat(b.slice(0, y)).concat(E.slice().reverse().map(e => "partial" === e.type ? " />" : R[e.type] || "</".concat(e.type, ">")).join("")).replace(/(new\s+)*(\s*)Array\s*\(\s*(\d+)\s*\)/g, "$2Array.from({length: $3})")
                },
                M = e => {
                    let {
                        code: t,
                        treeSitter: n,
                        fullCode: a,
                        externalComponents: o
                    } = e, r = P({
                        code: t,
                        fullCode: a,
                        treeSitter: n,
                        externalComponents: o
                    }), i = null;
                    try {
                        if (!(i = n.parse(t))) return t;
                        return function(e) {
                            let {
                                code: t,
                                root: n
                            } = e, a = n.descendantsOfType("export_statement");
                            return function e(t) {
                                let {
                                    replaceLocations: n,
                                    code: a
                                } = t, [o, ...r] = n;
                                if (!o) return a;
                                let i = "".concat(a.slice(0, o.start)).concat(o.value).concat(a.slice(o.end)),
                                    s = o.value.length - (o.end - o.start);
                                return e({
                                    replaceLocations: r.map(e => {
                                        let {
                                            start: t,
                                            end: n
                                        } = e;
                                        return {
                                            start: t > o.start ? t + s : t,
                                            end: n > o.start ? n + s : n,
                                            value: e.value
                                        }
                                    }),
                                    code: i
                                })
                            }({
                                code: t,
                                replaceLocations: [...a, ...n.descendantsOfType("import_statement")].map(e => {
                                    let {
                                        startIndex: t,
                                        endIndex: n
                                    } = e;
                                    return {
                                        start: t,
                                        end: n,
                                        value: ""
                                    }
                                })
                            })
                        }({
                            code: r,
                            root: i.rootNode
                        })
                    } finally {
                        i && i.delete()
                    }
                },
                L = n(23530),
                b = ["example"];

            function y(e, t) {
                let n;
                let a = [...b, ...null != t ? t : []],
                    o = function(e) {
                        let t = e.map(e => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
                        return RegExp("(?:```(([\\w:]+)\\n)?([\\s\\S]*?)(\\n```|$))|(?:<(".concat(t, ")").concat("((\\s+[\\w-]+=(?:\"[^\"]*\"|'[^']*'))*)", "\\s*>([\\s\\S]*?)<\\/\\5>)"), "gi")
                    }(a),
                    r = [],
                    i = 0;
                for (; null !== (n = o.exec(e));) {
                    var s, l, c, d;
                    if (i < n.index) {
                        let t = e.slice(i, n.index).trim();
                        t.length && r.push({
                            type: "text",
                            content: t,
                            original: t
                        })
                    }
                    let t = "code",
                        o = n[0],
                        u = n[2] || void 0,
                        p = (null === (s = n[4]) || void 0 === s ? void 0 : s.trim().length) === 0,
                        A = n[5];
                    A && a.includes(A) && (t = "tag", o = o.replace(RegExp("<".concat(A, "[^>]*>"), "g"), "").replace(RegExp("</".concat(A, ">"), "g"), ""), u = null != u ? u : null === (l = /```((\w+)\n)?([\s\S]+?)(\n```|$)/g.exec(o)) || void 0 === l ? void 0 : l[2]);
                    let m = o.replace(/```(\s*[\w:]+)?\s*\n|```/g, "").trim();
                    if ("code" === t && r.push({
                            type: t,
                            content: m,
                            language: u,
                            isPartial: p,
                            original: n[0]
                        }), "tag" === t && A) {
                        let e = null === (d = n[6]) || void 0 === d ? void 0 : null === (c = d.trim().match(/[\w-]+=(?:"[^"]*"|'[^']*')/gm)) || void 0 === c ? void 0 : c.reduce((e, t) => {
                            let [n, ...a] = t.split("=");
                            return void 0 === n || 0 === a.length ? e : { ...e,
                                [n]: a.join("=").replace(/['"]/g, "")
                            }
                        }, {});
                        r.push({
                            type: t,
                            tag: A,
                            content: m,
                            language: u,
                            original: n[0],
                            args: e
                        })
                    }
                    i = n.index + n[0].length
                }
                if (0 === r.length && (e.trim().startsWith("function ".concat(L.MAIN_COMPONENT_NAME, "(")) || e.trim().startsWith("export function ".concat(L.STORY_COMPONENT_NAME, "(")))) return [{
                    type: "code",
                    content: e,
                    language: "javascript",
                    isPartial: !1,
                    original: e
                }];
                if (i < e.length) {
                    let t = e.slice(i).trim();
                    t.length && r.push({
                        type: "text",
                        content: t,
                        original: t
                    })
                }
                return r
            }

            function v(e) {
                return y(e).filter(e => "code" === e.type).map(e => {
                    var t;
                    return {
                        lang: "language" in e && null !== (t = e.language) && void 0 !== t ? t : "unknown",
                        code: e.content.trim(),
                        isPartial: !1
                    }
                })
            }
            var D = ["jsx", "javascript", "js", "unknown", "tsx", "typescript", "ts"],
                U = e => {
                    let {
                        code: t,
                        fullCode: n,
                        externalComponents: a,
                        treeSitter: o
                    } = e;
                    return M({
                        code: v(t).filter(e => D.includes(e.lang)).map(e => e.code).join("\n") || t,
                        treeSitter: o,
                        fullCode: n,
                        externalComponents: a
                    })
                };
            n(6364), Symbol("any_string");
            var G = class {
                    [Symbol.iterator]() {
                        return function* e(t, n) {
                            for (;;) {
                                let a = t.nodeType.replace("\n", "\\n"),
                                    o = t.nodeText.replace(/\n/g, "\\n"),
                                    r = t.currentNode,
                                    {
                                        isMissing: i
                                    } = r;
                                if (yield {
                                        rawNode: r,
                                        cursor: t,
                                        typeEscaped: a,
                                        textEscaped: o,
                                        isMissing: i
                                    }, t.gotoFirstChild() && (yield* e(t, (null != n ? n : 0) + 1), t.gotoParent()), !t.gotoNextSibling()) break
                            }
                        }(this.rootNode.walk())
                    }
                    delete() {
                        "delete" in this.rootNode.tree && this.rootNode.tree.delete()
                    }
                    constructor(e) {
                        this.rootNode = e
                    }
                },
                H = class {
                    setOptions(e) {
                        e.timeoutMs && this.parser.setTimeoutMicros(1e3 * e.timeoutMs), e.logger && this.parser.setLogger(e.logger)
                    }
                    parse(e) {
                        let t = this.parser.parse(e, void 0, {
                            bufferSize: 5242880
                        });
                        return null === t ? null : new G(t.rootNode)
                    }
                    constructor(e, t) {
                        this.parser = e, (null == t ? void 0 : t.timeoutMs) ? this.parser.setTimeoutMicros(1e3 * t.timeoutMs) : this.parser.setTimeoutMicros(5e6), (null == t ? void 0 : t.logger) && this.parser.setLogger(t.logger)
                    }
                },
                k = "Custom",
                B = {
                    jsc: {
                        target: "es2022",
                        transform: {
                            react: {
                                development: !0
                            }
                        },
                        loose: !0,
                        parser: {
                            syntax: "ecmascript",
                            jsx: !0
                        }
                    }
                },
                x = n(6364),
                w = e => "{/* ".concat(e, " */}"),
                F = e => "// ".concat(e),
                K = new Set(["jsx_element", "lexical_declaration", "function_declaration"]),
                W = new Set(["jsx_self_closing_element", "parenthesized_expression", ...K]),
                j = e => {
                    let {
                        code: t,
                        treeSitter: n,
                        maxLength: a,
                        minLength: o
                    } = e, r = t.trim(), i = Math.min(a, r.length - 1), s = n.parse(r), l = [];
                    for (let e of null != s ? s : []) K.has(e.typeEscaped) && l.push(e);
                    let c = (0, x.sortBy)(l, e => {
                            let {
                                rawNode: t
                            } = e;
                            return t.startIndex
                        }),
                        d = [];
                    c.forEach(e => {
                        let {
                            textEscaped: t,
                            rawNode: n
                        } = e;
                        if (V({
                                rawNode: n,
                                groups: d
                            })) return;
                        let {
                            length: a
                        } = t;
                        if (a >= i || a < o) return;
                        let {
                            matchingSiblings: r
                        } = function(e) {
                            var t, n, a, o;
                            let {
                                rawNode: r,
                                length: i,
                                groups: s,
                                maxLength: l
                            } = e, c = i, d = [], {
                                previousSibling: u
                            } = r;
                            for (c += null !== (t = null == u ? void 0 : u.text.length) && void 0 !== t ? t : 0; u && !V({
                                    rawNode: u,
                                    groups: s
                                }) && W.has(u.type) && c < l;) d.push(u), c += null !== (n = null == (u = u.previousSibling) ? void 0 : u.text.length) && void 0 !== n ? n : 0;
                            let {
                                nextSibling: p
                            } = r;
                            for (c += null !== (a = null == p ? void 0 : p.text.length) && void 0 !== a ? a : 0; p && !V({
                                    rawNode: p,
                                    groups: s
                                }) && W.has(p.type) && c < l;) d.push(p), c += null !== (o = null == (p = p.nextSibling) ? void 0 : p.text.length) && void 0 !== o ? o : 0;
                            return {
                                matchingSiblings: d,
                                overallLength: i
                            }
                        }({
                            rawNode: n,
                            length: a,
                            groups: d,
                            maxLength: i
                        }), s = (0, x.sortBy)([e.rawNode, ...r], e => e.startIndex);
                        d.push({
                            startIndex: Math.min(...s.map(e => e.startIndex)),
                            endIndex: Math.max(...s.map(e => e.endIndex)),
                            nodes: s
                        })
                    });
                    let u = (0, x.sortBy)(d, e => e.startIndex).map((e, t) => {
                            var n, a;
                            let o = "group".concat(t);
                            return {
                                startIndex: e.startIndex,
                                endIndex: e.endIndex,
                                text: e.nodes.map(e => e.text).join("\n"),
                                name: o,
                                comment: (null === (a = e.nodes[0]) || void 0 === a ? void 0 : null === (n = a.parent) || void 0 === n ? void 0 : n.type) === "jsx_element" ? w(o) : F(o)
                            }
                        }),
                        p = r;
                    return (0, x.sortBy)(u, e => e.endIndex).forEach(e => {
                        p = p.replace(r.slice(e.startIndex, e.endIndex), e.comment)
                    }), {
                        groups: u,
                        shortened: p
                    }
                },
                Z = e => {
                    let {
                        groups: t,
                        code: n
                    } = e, a = n.trim();
                    return (0, x.sortBy)(t, e => e.name.length).forEach(e => {
                        a = a.replace(F(e.name), e.text).replace(w(e.name), e.text)
                    }), a
                },
                V = e => {
                    let {
                        groups: t,
                        rawNode: n
                    } = e;
                    return t.some(e => [n.startIndex, n.endIndex].some(t => e.startIndex <= t && e.endIndex >= t))
                },
                Y = e => {
                    let {
                        code: t,
                        treeSitter: n
                    } = e, a = n.parse(t), o = [], r = 0;
                    for (let e of null != a ? a : []) "comment" === e.typeEscaped && (o.push({
                        text: e.textEscaped,
                        num: r,
                        position: {
                            start: e.rawNode.startIndex,
                            end: e.rawNode.endIndex
                        }
                    }), r++);
                    return o
                }
        },
        23530: function(e) {
            var t, n, a, o, r, i, s, l, c, d, u, p, A, m, E, _, T, N, h, I, S, C, O, R, g, f, P, M, L, b, y, v, D, U, G, H, k, B, x, w, F, K, W, j, Z, V, Y, z, J, X, Q, q, $, ee, et, en, ea, eo, er, ei = Object.defineProperty,
                es = Object.getOwnPropertyDescriptor,
                el = Object.getOwnPropertyNames,
                ec = Object.prototype.hasOwnProperty,
                ed = {};
            ((e, t) => {
                for (var n in t) ei(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(ed, {
                AUTH_DB_TABLE_NAME: () => eI,
                AUTH_PAGE_MODULE_TYPES: () => ek,
                AppKind: () => em,
                AppType: () => tN,
                AuthProvider: () => tV,
                AuthProviderSecretMap: () => tY,
                CacheType: () => tC,
                ClientIntegrationType: () => tS,
                CodeAnalysisType: () => ep,
                CompletionPromptKind: () => eE,
                ContentType: () => tf,
                Country: () => t4,
                CreateEnvironment: () => tv,
                CreditTransactionSubType: () => tW,
                CreditTransactionType: () => tK,
                CustomInstructionTag: () => or,
                DATABASE_ENV_VAR: () => tD,
                DEFAULT_COMPONENT_NAME: () => eM,
                DEFAULT_DATABASE_NAME: () => a3,
                DEFAULT_EXPO_PAGE_NAME: () => eb,
                DEFAULT_FIRST_PROJECT_GROUP_NAME: () => ev,
                DEFAULT_FUNCTION_NAME: () => ey,
                DEFAULT_NODE_HEIGHT: () => tT,
                DEFAULT_NODE_WIDTH_DESKTOP: () => tE,
                DEFAULT_NODE_WIDTH_MOBILE: () => t_,
                DEFAULT_PAGE_NAME: () => eL,
                DEFAULT_PROJECT_GROUP_NAME: () => eD,
                DEFAULT_SEO_DESCRIPTION: () => t1,
                DEFAULT_SEO_TITLE: () => t0,
                DESIGN_SYSTEM_MODULE_TYPES: () => eF,
                DatabaseTagArg: () => tw,
                DesignSystemVisibility: () => tI,
                EXPO_COMPONENTS: () => on,
                EventLogType: () => tG,
                FLOWCHART_ICON_PREFIX: () => tc,
                GENERATION_FINISHED_STATUSES: () => e8,
                GOOGLE_FONTS: () => t$,
                GenerationProvider: () => tt,
                GenerationStatus: () => eS,
                HEARBEAT_RATE: () => tn,
                IMPLEMENTATION_GUIDE: () => ta,
                INVISIBLE_MODULE_TYPES: () => eK,
                ImageContentType: () => tO,
                IntegrationSelectionTagArg: () => tF,
                LIVE_BLOCKS_SERVICE_ACCOUNT_ID: () => tm,
                LLMTag: () => tB,
                MAIN_COMPONENT_NAME: () => e_,
                MAIN_FUNCTION_NAME: () => eN,
                MAX_GENERATION_SLOTS: () => eC,
                MAX_RUN_TIME_MS: () => tu,
                ModerationState: () => eG,
                ModuleRevisionTestRunStatus: () => td,
                ModuleTagArg: () => tx,
                ModuleType: () => eH,
                OrganizationPlan: () => eg,
                OtherContentType: () => tg,
                PROJECT_BUILDING_STATUSES: () => e5,
                PROJECT_GROUP_BUILDING_STATUSES: () => e7,
                PROJECT_GROUP_CHAT_REVISION_ACTIONS: () => e2,
                PROJECT_ID_HEADER_NAME: () => eO,
                PUBLIC_MAGIC_ENV_VARS: () => tb,
                PUBLIC_MAGIC_ENV_VARS_VALUES: () => ty,
                ProjectDeploymentStatus: () => oi,
                ProjectGroupDeploymentType: () => eq,
                ProjectGroupOnboardingState: () => eQ,
                ProjectGroupPublishState: () => eJ,
                ProjectGroupPublishingState: () => eX,
                ProjectGroupRevisionAction: () => e0,
                ProjectGroupRevisionStatus: () => e1,
                ProjectGroupTag: () => e$,
                ProjectRevisionAction: () => e4,
                ProjectRevisionStatus: () => e3,
                ProjectUserUploadProvider: () => tq,
                PublicProjectKind: () => eU,
                REACT_IMPORT: () => oa,
                REACT_NATIVE_COMPONENTS: () => ot,
                REACT_NATIVE_IMPORT: () => oo,
                REDIRECT_AFTER_LOGIN_QUERY_PARAM: () => eu,
                REVISION_FINISHED_FIRST_RENDER_ID: () => th,
                STORY_COMPONENT_NAME: () => eT,
                STRIPE_CONNECT_WEBHOOK_URL: () => a4,
                STRIPE_SUPPORTED_COUNTRIES: () => t9,
                STRIPE_WEBHOOK_SECRET: () => a9,
                SimpleGenerationKind: () => eA,
                ThirdPartyServiceKind: () => to,
                TimeWindow: () => tk,
                UI_MODULE_TYPES: () => ew,
                UserBadge: () => ts,
                UserDatabaseMigrationStatus: () => a5,
                UserDatabaseStatus: () => a7,
                UserRole: () => tr,
                UserStatus: () => ti,
                VERCEL_PROTECTION_BYPASS_HEADER_NAME: () => eR,
                VISIBLE_MODULE_TYPES: () => eW,
                VariableValue: () => tl,
                WEB_APP_PERSISTENCE_PREFIX: () => eh,
                WebsiteContentType: () => tR,
                asArrayOfAuthProviders: () => tX,
                callbackUrlQueryParam: () => tZ,
                createEmail: () => t2,
                generateRoomId: () => tp,
                getAppUrl: () => tU,
                getCountryCode: () => t7,
                getDatabaseSizeForOrganizationPlan: () => a8,
                getDefaultProjectNameForModuleType: () => eZ,
                getHumanReadableCountryName: () => t6,
                getMaxPrivatePagesForPlan: () => eV,
                getOAuthProviderDisplayData: () => tQ,
                getProjectGroupIntegrationReference: () => a2,
                isActionIndicatingRevisionHasSpecForPrompt: () => e9,
                isAgentAction: () => oe,
                isAuthPageModuleType: () => eB,
                isAuthProvider: () => tJ,
                isChatAction: () => tH,
                isDeleteableModuleType: () => ex,
                isEditableModuleType: () => ej,
                isImageContentType: () => tM,
                isPageModuleType: () => ez,
                isPlanUpgrade: () => eP,
                isStatusIndicatingRevisionIsBuilding: () => te,
                isStripeSupportedCountry: () => t5,
                isSupportedContentType: () => tP,
                isWebsiteContentType: () => tL,
                parseRoomId: () => tA,
                secretsManagerAddSecretParamsSchema: () => aq,
                secretsManagerAddSecretReturnSchema: () => a$,
                supportedModelCreditTransactionSubTypeMap: () => tj,
                userDesirableModuleSort: () => eY
            }), e.exports = ((e, t, n, a) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let o of el(t)) ec.call(e, o) || o === n || ei(e, o, {
                        get: () => t[o],
                        enumerable: !(a = es(t, o)) || a.enumerable
                    });
                return e
            })(ei({}, "__esModule", {
                value: !0
            }), ed);
            var eu = "redirect_after_login",
                ep = ((t = ep || {}).ERROR = "ERROR", t),
                eA = ((n = eA || {}).AUTORENAME = "AUTORENAME", n.AUTOFIX_COMPILE_ERROR_CODE_REWRITE = "AUTOFIX_COMPILE_ERROR_CODE_REWRITE", n.COMMENT_FIXING_CODE_REWRITE = "COMMENT_FIXING_CODE_REWRITE", n.COMMENT_FIXING_COMMENT_CLASSIFIER = "COMMENT_FIXING_COMMENT_CLASSIFIER", n.GOAL_ASSISTANCE_QUESTION_GENERATION = "GOAL_ASSISTANCE_QUESTION_GENERATION", n.AUTOFIX_SQL_ERROR_REWRITE = "AUTOFIX_SQL_ERROR_REWRITE", n),
                em = ((a = em || {}).APP = "APP", a.LINK_IN_BIO = "LINK_IN_BIO", a),
                eE = ((o = eE || {}).INITIAL = "INITIAL", o.BLANK = "BLANK", o.ITERATION = "ITERATION", o.COMMENT = "COMMENT", o.PATCH_COMMENT = "PATCH_COMMENT", o),
                e_ = "MainComponent",
                eT = "StoryComponent",
                eN = "handler",
                eh = "/api/db",
                eI = "user_accounts",
                eS = ((r = eS || {}).RUNNING = "RUNNING", r.CANCELED = "CANCELED", r.FINISHED = "FINISHED", r.FAILED = "FAILED", r),
                eC = 4,
                eO = "x-createxyz-project-id",
                eR = "x-vercel-protection-bypass",
                eg = ((i = eg || {}).FREE = "FREE", i.PRO = "PRO", i.BUSINESS = "BUSINESS", i.ENTERPRISE = "ENTERPRISE", i),
                ef = ["BUSINESS", "PRO", "FREE"],
                eP = (e, t) => ef.indexOf(e) < ef.indexOf(t),
                eM = "New Component",
                eL = "New Page",
                eb = "New Mobile Page",
                ey = "New Function",
                ev = "Drafts",
                eD = "New Project",
                eU = ((s = eU || {}).CLONE = "CLONE", s.FEATURED = "FEATURED", s.TAGGED = "TAGGED", s.RATED = "RATED", s.PROFILE = "PROFILE", s.ONBOARDING = "ONBOARDING", s),
                eG = ((l = eG || {}).UNKNOWN = "UNKNOWN", l.FLAGGED = "FLAGGED", l.SAFE = "SAFE", l.UNSAFE_TOO_LONG = "UNSAFE_TOO_LONG", l.UNSAFE_ERROR_WITH_IMAGE = "UNSAFE_ERROR_WITH_IMAGE", l),
                eH = ((c = eH || {}).EXPO_PAGE = "EXPO_PAGE", c.PAGE = "PAGE", c.COMPONENT = "COMPONENT", c.FUNCTION = "FUNCTION", c.AUTH_PAGE_SIGN_IN = "AUTH_PAGE_SIGN_IN", c.AUTH_PAGE_SIGN_UP = "AUTH_PAGE_SIGN_UP", c.AUTH_PAGE_LOGOUT = "AUTH_PAGE_LOGOUT", c.DESIGN_SYSTEM_PAGE = "DESIGN_SYSTEM_PAGE", c.DESIGN_SYSTEM_COMPONENT = "DESIGN_SYSTEM_COMPONENT", c),
                ek = ["AUTH_PAGE_SIGN_IN", "AUTH_PAGE_SIGN_UP", "AUTH_PAGE_LOGOUT"],
                eB = e => ek.includes(e),
                ex = e => !eB(e),
                ew = ["EXPO_PAGE", "PAGE", "DESIGN_SYSTEM_PAGE", "COMPONENT", "DESIGN_SYSTEM_COMPONENT", "AUTH_PAGE_SIGN_IN", "AUTH_PAGE_SIGN_UP", "AUTH_PAGE_LOGOUT"],
                eF = ["DESIGN_SYSTEM_PAGE", "DESIGN_SYSTEM_COMPONENT"],
                eK = new Set([...eF]),
                eW = Object.values(eH).filter(e => !eK.has(e)),
                ej = e => {
                    let {
                        moduleType: t,
                        withCustomAuth: n
                    } = e;
                    switch (t) {
                        case "EXPO_PAGE":
                        case "PAGE":
                        case "FUNCTION":
                        case "COMPONENT":
                            return !0;
                        case "AUTH_PAGE_LOGOUT":
                        case "AUTH_PAGE_SIGN_IN":
                        case "AUTH_PAGE_SIGN_UP":
                            return n;
                        case "DESIGN_SYSTEM_PAGE":
                        case "DESIGN_SYSTEM_COMPONENT":
                            return !1;
                        default:
                            return t
                    }
                },
                eZ = e => {
                    switch (e) {
                        case "COMPONENT":
                        case "DESIGN_SYSTEM_COMPONENT":
                            return eM;
                        case "FUNCTION":
                            return ey;
                        case "EXPO_PAGE":
                            return eb;
                        case "PAGE":
                        case "DESIGN_SYSTEM_PAGE":
                            return eL;
                        case "AUTH_PAGE_SIGN_IN":
                            return "Sign In";
                        case "AUTH_PAGE_SIGN_UP":
                            return "Sign Up";
                        case "AUTH_PAGE_LOGOUT":
                            return "Logout";
                        default:
                            return e
                    }
                },
                eV = e => {
                    switch (e) {
                        case "BUSINESS":
                        case "ENTERPRISE":
                            return Number.POSITIVE_INFINITY;
                        case "FREE":
                            return 0;
                        case "PRO":
                            return 3;
                        default:
                            return e
                    }
                },
                eY = (e, t) => {
                    let n = ["PAGE", "EXPO_PAGE", "COMPONENT", "FUNCTION", "DESIGN_SYSTEM_COMPONENT", "DESIGN_SYSTEM_PAGE", "AUTH_PAGE_SIGN_IN", "AUTH_PAGE_SIGN_UP", "AUTH_PAGE_LOGOUT"],
                        a = n.indexOf(e.moduleType),
                        o = n.indexOf(t.moduleType);
                    if (a !== o) return a - o;
                    let r = e.pathSegment,
                        i = t.pathSegment;
                    return r ? i ? r.localeCompare(i) : -1 : 1
                };

            function ez(e) {
                let {
                    moduleType: t
                } = e;
                return "PAGE" === t || "EXPO_PAGE" === t
            }
            var eJ = ((d = eJ || {}).UP_TO_DATE = "UP_TO_DATE", d.HAS_UPDATES = "HAS_UPDATES", d.NEVER_PUBLISHED_BEFORE = "NEVER_PUBLISHED_BEFORE", d.NO_DOMAIN_CLAIMED = "NO_DOMAIN_CLAIMED", d),
                eX = ((u = eX || {}).PUBLISHED = "PUBLISHED", u.PUBLISHING = "PUBLISHING", u.UNPUBLISHED = "UNPUBLISHED", u),
                eQ = ((p = eQ || {}).NOT_CREATED_FOR_ONBOARDING = "NOT_CREATED_FOR_ONBOARDING", p.CREATED_FOR_ONBOARDING = "CREATED_FOR_ONBOARDING", p.SELECTED_DURING_ONBOARDING = "SELECTED_DURING_ONBOARDING", p),
                eq = ((A = eq || {}).EXPO = "EXPO", A),
                e$ = ((m = e$ || {}).AUTH = "auth", m.INTEGRATION = "integration", m.TESTINTEGRATION = "testintegration", m.BETAINTEGRATION = "betaintegration", m.COMPONENT = "component", m.STRIPE = "stripe", m.PAYMENT = "payment", m.ACTION = "action", m.LEGACY_DB = "legacy-db", m),
                e0 = ((E = e0 || {}).CHAT = "CHAT", E.FORK_WITH_CHAT_MESSAGE = "FORK_WITH_CHAT_MESSAGE", E.FORK_MODULE_WITH_CHAT_MESSAGE = "FORK_MODULE_WITH_CHAT_MESSAGE", E.DUPLICATE = "DUPLICATE", E.FORK = "FORK", E.SELECT_INTEGRATION_WITH_CHAT_MESSAGE = "SELECT_INTEGRATION_WITH_CHAT_MESSAGE", E.PUBLISH_PROJECT_AND_CONTINUE_CHAT = "PUBLISH_PROJECT_AND_CONTINUE_CHAT", E.SAVE_SECRET_AND_CONTINUE_CHAT = "SAVE_SECRET_AND_CONTINUE_CHAT", E.CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT = "CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT", E.AGENT_AUTO_SELECT_INTEGRATION = "AGENT_AUTO_SELECT_INTEGRATION", E.ADD_AUTH_AND_CONTINUE_CHAT = "ADD_AUTH_AND_CONTINUE_CHAT", E.UPDATE_AUTH_SETTINGS = "UPDATE_AUTH_SETTINGS", E),
                e1 = ((_ = e1 || {}).INVALID_PROMPT = "INVALID_PROMPT", _.CREATED = "CREATED", _.VALID = "VALID", _.INVALID = "INVALID", _.BUILDING = "BUILDING", _),
                e2 = ["CHAT", "FORK_WITH_CHAT_MESSAGE", "FORK_MODULE_WITH_CHAT_MESSAGE", "PUBLISH_PROJECT_AND_CONTINUE_CHAT", "SAVE_SECRET_AND_CONTINUE_CHAT", "SELECT_INTEGRATION_WITH_CHAT_MESSAGE", "CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT", "ADD_AUTH_AND_CONTINUE_CHAT", "AGENT_AUTO_SELECT_INTEGRATION"],
                e4 = ((T = e4 || {}).FIX_CHANGE = "FIX_CHANGE", T.TRY_AGAIN = "TRY_AGAIN", T.PROMPT_CHANGE = "PROMPT_CHANGE", T.UI_PATCH = "UI_PATCH", T.CREATE_COMPONENT_FROM_PROMPT = "CREATE_COMPONENT_FROM_PROMPT", T.CREATE_COMPONENT_FROM_PROMPT_AND_CODE = "CREATE_COMPONENT_FROM_PROMPT_AND_CODE", T.DELETION = "DELETION", T.TEXT_CHANGE = "TEXT_CHANGE", T.IMAGE_CHANGE = "IMAGE_CHANGE", T.LINK_CHANGE = "LINK_CHANGE", T.FORM_CHANGE = "FORM_CHANGE", T.COMMENT_CHANGE = "COMMENT_CHANGE", T.RESTORE = "RESTORE", T.CHANGE_AUTH = "CHANGE_AUTH", T.CODE_CHANGE = "CODE_CHANGE", T.APPLY_COMMAND = "APPLY_COMMAND", T.SELECT_INITIAL_MODULE_IDEA = "SELECT_INITIAL_MODULE_IDEA", T.AUTOFIX_CHANGE = "AUTOFIX_CHANGE", T.ENHANCE_PROMPT = "ENHANCE_PROMPT", T.CHAT = "CHAT", T.TOP_DOWN_CHAT = "TOP_DOWN_CHAT", T.REBUILD_FROM_LATEST = "REBUILD_FROM_LATEST", T.UPDATE_REFERENCES = "UPDATE_REFERENCES", T.FORK_FROM_PROJECT_GROUP_TEMPLATE = "FORK_FROM_PROJECT_GROUP_TEMPLATE", T.FORK_FROM_PROJECT_GROUP = "FORK_FROM_PROJECT_GROUP", T.DUPLICATE_PROJECT_GROUP = "DUPLICATE_PROJECT_GROUP", T.FORK_FROM_MODULE = "FORK_FROM_MODULE", T.DUPLICATE_MODULE = "DUPLICATE_MODULE", T.AGENT_AUTO_SELECT_INTEGRATION = "AGENT_AUTO_SELECT_INTEGRATION", T),
                e9 = e => {
                    switch (e) {
                        case "PROMPT_CHANGE":
                        case "TRY_AGAIN":
                        case "CREATE_COMPONENT_FROM_PROMPT":
                        case "CREATE_COMPONENT_FROM_PROMPT_AND_CODE":
                        case "FIX_CHANGE":
                        case "RESTORE":
                        case "UI_PATCH":
                        case "APPLY_COMMAND":
                        case "SELECT_INITIAL_MODULE_IDEA":
                        case "ENHANCE_PROMPT":
                        case "AUTOFIX_CHANGE":
                        case "CHANGE_AUTH":
                        case "CODE_CHANGE":
                        case "DELETION":
                        case "IMAGE_CHANGE":
                        case "LINK_CHANGE":
                        case "TEXT_CHANGE":
                        case "CHAT":
                        case "TOP_DOWN_CHAT":
                        case "REBUILD_FROM_LATEST":
                        case "UPDATE_REFERENCES":
                        case "FORK_FROM_PROJECT_GROUP_TEMPLATE":
                        case "FORK_FROM_PROJECT_GROUP":
                        case "DUPLICATE_PROJECT_GROUP":
                        case "DUPLICATE_MODULE":
                        case "FORK_FROM_MODULE":
                        case "AGENT_AUTO_SELECT_INTEGRATION":
                            return !0;
                        case "COMMENT_CHANGE":
                        case "FORM_CHANGE":
                            return !1;
                        default:
                            return e
                    }
                },
                e3 = ((N = e3 || {}).QUEUED = "QUEUED", N.GENERATION_FAILED = "GENERATION_FAILED", N.INVALID_PROMPT = "INVALID_PROMPT", N.CREATED = "CREATED", N.VALID = "VALID", N.INVALID = "INVALID", N.BUILDING = "BUILDING", N.BUILDING_UI = "BUILDING_UI", N.BUILDING_FUNCTIONALITY = "BUILDING_FUNCTIONALITY", N.INVALID_CODE = "INVALID_CODE", N.CANCELED_AUTOFIX = "CANCELED_AUTOFIX", N.ENHANCING_PROMPT = "ENHANCING_PROMPT", N.FAILED = "FAILED", N),
                e5 = ["BUILDING", "BUILDING_UI", "BUILDING_FUNCTIONALITY"],
                e7 = ["BUILDING"],
                e6 = new Set([...e5, ...e7]),
                e8 = Object.values(e3).filter(e => !e6.has(e)),
                te = e => e6.has(e),
                tt = ((h = tt || {}).FIRST_PARTY_OPENAI = "FIRST_PARTY_OPENAI", h.FIRST_PARTY_OPENAI_O1 = "FIRST_PARTY_OPENAI_O1", h.FIRST_PARTY_OPENAI_O1_MINI = "FIRST_PARTY_OPENAI_O1_MINI", h.FIRST_PARTY_OPENAI_4O_MINI = "FIRST_PARTY_OPENAI_4O_MINI", h.PATCH_FIRST_PARTY_OPENAI = "PATCH_FIRST_PARTY_OPENAI", h.AZURE_OPENAI = "AZURE_OPENAI", h.GROQ_MIXTRAL_8X7B_32768 = "GROQ_MIXTRAL_8X7B_32768", h.GOOGLE_GEMINI_1 = "GOOGLE_GEMINI_1", h.GOOGLE_GEMINI_1_5 = "GOOGLE_GEMINI_1_5", h.GOOGLE_GEMINI_1_5_FLASH = "GOOGLE_GEMINI_1_5_FLASH", h.GOOGLE_GEMINI_2_0_FLASH = "GOOGLE_GEMINI_2_0_FLASH", h.DEEPSEEK_V3 = "DEEPSEEK_V3", h.ANTHROPIC_CLAUDE_OPUS = "ANTHROPIC_CLAUDE_OPUS", h.ANTHROPIC_CLAUDE_SONNET = "ANTHROPIC_CLAUDE_SONNET", h.ANTHROPIC_CLAUDE_SONNET_3_5 = "ANTHROPIC_CLAUDE_SONNET_3_5", h.ANTHROPIC_CLAUDE_SONNET_3_7 = "ANTHROPIC_CLAUDE_SONNET_3_7", h.ANTHROPIC_CLAUDE_HAIKU = "ANTHROPIC_CLAUDE_HAIKU", h.PATCH_ANTHROPIC_CLAUDE_OPUS = "PATCH_ANTHROPIC_CLAUDE_OPUS", h.COHERE_COMMAND_R_PLUS = "COHERE_COMMAND_R_PLUS", h.REKA = "REKA", h),
                tn = 3e4,
                ta = '\n- You should ensure that the UI is responsive.\n- Icons: you should use font-awesome classes\n- Forms: any form fields should have a "name" attribute\n- Do not use any classnames that are not tailwind or fontawesome related as they will not do anything.\n- Images: specify very specific alt descriptions based on what the user is trying to build and vary them depending on what is requested by the user. When the app to build requires images, always use relative paths and always specify sizing that makes sense for the use-case requested by the user.\n- Fonts: All text should use a font class. Class names follow the form `font-<lowercase font name>` e.g. font-roboto, font-crimson-text. If the user requests a specific font, you should use the font class that corresponds to the font name. If the user does not request a specific font but the code already includes a font, you should not change it.\n- Colors: To reference colors with hex values, you should use arbitrary values e.g. text-[#121212] bg-[#010101]\n- Sizes: Many things may need to be sized. You should prefer tailwind defaults e.g. w-full but for arbitrary values specify as e.g. w-[400px] h-[400px]\n- If the user requests emoji, use emojis instead of font awesome classes.\n- Forms: any form fields should have a "name" attribute\n',
                to = ((I = to || {}).GITHUB = "github", I),
                tr = ((S = tr || {}).ADMIN = "ADMIN", S.CUSTOMER = "CUSTOMER", S.CREATOR = "CREATOR", S.CREATOR_LEAD = "CREATOR_LEAD", S),
                ti = ((C = ti || {}).UNVERIFIED = "UNVERIFIED", C),
                ts = ((O = ts || {}).AMBASSADOR = "AMBASSADOR", O),
                tl = ((R = tl || {}).BACKGROUND_COLOR_HEX = "BACKGROUND_COLOR_HEX", R.TEXT_COLOR_HEX = "TEXT_COLOR_HEX", R.FONT_WEIGHT = "FONT_WEIGHT", R.ROUNDED_CORNER_RADIUS_PX = "ROUNDED_CORNER_RADIUS_PX", R.PADDING_PX = "PADDING_PX", R.FONT_FAMILY = "FONT_FAMILY", R.FONT_SIZE_PX = "FONT_SIZE_PX", R.HEIGHT_PX = "HEIGHT_PX", R.WIDTH_PX = "WIDTH_PX", R.BACKGROUND_IMAGE_URL = "BACKGROUND_IMAGE_URL", R),
                tc = "fa:",
                td = ((g = td || {}).PENDING = "PENDING", g.RUNNING = "RUNNING", g.COMPLETED = "COMPLETED", g.FAILED = "FAILED", g.SYSTEM_FAILED = "SYSTEM_FAILED", g.STALLED = "STALLED", g),
                tu = 36e4;

            function tp(e) {
                if ("projectGroupId" in e) {
                    let {
                        projectGroupId: t
                    } = e;
                    return "project-canvas:".concat(t)
                }
                let {
                    organizationId: t,
                    projectId: n
                } = e;
                return "app-builder:".concat(t, ":").concat(n)
            }

            function tA(e) {
                let [t, n, a] = e.split(":");
                if ("project-canvas" === t && n) return {
                    kind: "project-canvas",
                    projectGroupId: n
                };
                if ("app-builder" === t && n && a) return {
                    kind: "app-builder",
                    organizationId: n,
                    projectId: a
                };
                throw Error("Invalid roomId")
            }
            var tm = "_SERVICE_ACCOUNT",
                tE = 1280,
                t_ = 360,
                tT = 720,
                tN = ((f = tN || {}).LEAD_GEN_TOOL = "LEAD_GEN_TOOL", f.PERSONAL_WEBSITE = "PERSONAL_WEBSITE", f.ECOMMERCE_STORE = "ECOMMERCE_STORE", f.BLOG_PLATFORM = "BLOG_PLATFORM", f.PORTFOLIO_WEBSITE = "PORTFOLIO_WEBSITE", f.SOCIAL_NETWORK = "SOCIAL_NETWORK", f.GAME = "GAME", f.AI_TOOL = "AI_TOOL", f.FINANCE_APP = "FINANCE_APP", f.DATING_APP = "DATING_APP", f.TODO_LIST_APP = "TODO_LIST_APP", f.NOTES_APP = "NOTES_APP", f.GALLERY_APP = "GALLERY_APP", f.CONTACT_MANAGEMENT = "CONTACT_MANAGEMENT", f.SURVEY_TOOL = "SURVEY_TOOL", f.QUIZ_TOOL = "QUIZ_TOOL", f.ONLINE_STORE = "ONLINE_STORE", f.CHAT_APP = "CHAT_APP", f.FEEDBACK_TOOL = "FEEDBACK_TOOL", f.WEATHER_APP = "WEATHER_APP", f.TRANSLATION_TOOL = "TRANSLATION_TOOL", f.FITNESS_TRACKER_APP = "FITNESS_TRACKER_APP", f.CRYPTOCURRENCY_APP = "CRYPTOCURRENCY_APP", f),
                th = "revisionfinishedfirstrender",
                tI = ((P = tI || {}).PUBLIC = "PUBLIC", P.PRIVATE = "PRIVATE", P),
                tS = ((M = tS || {}).GOOGLE_MAPS = "@vis.gl/react-google-maps", M.RECHARTS = "recharts", M.CHAKRA_UI = "@chakra-ui/react", M.SHADCN_UI = "@lshay/ui", M.PDFJS = "pdfjs-dist", M.REACT_MARKDOWN = "react-markdown", M),
                tC = ((L = tC || {}).URL = "URL", L.BASE64 = "BASE64", L),
                tO = ((b = tO || {}).IMAGE_JPEG = "image/jpeg", b.IMAGE_PNG = "image/png", b.IMAGE_GIF = "image/gif", b.IMAGE_WEBP = "image/webp", b.IMAGE_SVG_XML = "image/svg+xml", b),
                tR = ((y = tR || {}).TEXT_HTML = "text/html", y.APPLICATION_XHTML_XML = "application/xhtml+xml", y),
                tg = ((v = tg || {}).TEXT_PLAIN = "text/plain", v.TEXT_CSS = "text/css", v.TEXT_JAVASCRIPT = "text/javascript", v.TEXT_XML = "text/xml", v.APPLICATION_JSON = "application/json", v.APPLICATION_XML = "application/xml", v.APPLICATION_LD_JSON = "application/ld+json", v.APPLICATION_URL_ENCODED = "application/x-www-form-urlencoded", v.APPLICATION_OCTET_STREAM = "application/octet-stream", v.APPLICATION_PDF = "application/pdf", v.APPLICATION_ZIP = "application/zip", v.AUDIO_MPEG = "audio/mpeg", v.AUDIO_WAV = "audio/wav", v.AUDIO_OGG = "audio/ogg", v.VIDEO_MP4 = "video/mp4", v.VIDEO_WEBM = "video/webm", v.VIDEO_OGG = "video/ogg", v.MULTIPART_FORM_DATA = "multipart/form-data", v.MULTIPART_RELATED = "multipart/related", v.FONT_WOFF = "font/woff", v.FONT_WOFF2 = "font/woff2", v.FONT_OTF = "font/otf", v.FONT_TTF = "font/ttf", v.APPLICATION_FLASH = "application/x-shockwave-flash", v.APPLICATION_TAR = "application/x-tar", v.APPLICATION_7Z_COMPRESSED = "application/x-7z-compressed", v),
                tf = { ...tO,
                    ...tR,
                    ...tg
                },
                tP = e => Object.values(tf).includes(e),
                tM = e => Object.values(tO).includes(e),
                tL = e => Object.values(tR).includes(e),
                tb = ((D = tb || {}).AUTH_DB_SLUG = "NEXT_PUBLIC_CREATE_AUTH_DB_SLUG", D.APP_URL = "NEXT_PUBLIC_CREATE_APP_URL", D.ENV = "NEXT_PUBLIC_CREATE_ENV", D),
                ty = Object.values(tb),
                tv = ((U = tv || {}).DEVELOPMENT = "DEVELOPMENT", U.PREVIEW = "PREVIEW", U.PRODUCTION = "PRODUCTION", U),
                tD = "DATABASE_URL",
                tU = e => {
                    let {
                        projectGroupId: t,
                        hostedDomain: n
                    } = e;
                    return "https://".concat(t, ".").concat(n)
                },
                tG = ((G = tG || {}).INTEGRATION_USAGE = "INTEGRATION_USAGE", G.GENERATION_USAGE = "GENERATION_USAGE", G.STORAGE_USAGE = "STORAGE_USAGE", G.DEPOSIT_CREDITS = "DEPOSIT_CREDITS", G.REFILL_CREDITS = "REFILL_CREDITS", G),
                tH = e => {
                    switch (e) {
                        case "APPLY_COMMAND":
                        case "TOP_DOWN_CHAT":
                        case "CHAT":
                        case "FORK_WITH_CHAT_MESSAGE":
                        case "FORK_MODULE_WITH_CHAT_MESSAGE":
                        case "PUBLISH_PROJECT_AND_CONTINUE_CHAT":
                        case "SAVE_SECRET_AND_CONTINUE_CHAT":
                        case "CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT":
                        case "AGENT_AUTO_SELECT_INTEGRATION":
                        case "AGENT_AUTO_SELECT_INTEGRATION":
                        case "SELECT_INTEGRATION_WITH_CHAT_MESSAGE":
                        case "ADD_AUTH_AND_CONTINUE_CHAT":
                        case "CHAT":
                            return !0;
                        case "UPDATE_AUTH_SETTINGS":
                        case "FORK":
                        case "DUPLICATE":
                        case "AUTOFIX_CHANGE":
                        case "FIX_CHANGE":
                        case "CODE_CHANGE":
                        case "CREATE_COMPONENT_FROM_PROMPT":
                        case "CREATE_COMPONENT_FROM_PROMPT_AND_CODE":
                        case "DELETION":
                        case "FORM_CHANGE":
                        case "IMAGE_CHANGE":
                        case "LINK_CHANGE":
                        case "PROMPT_CHANGE":
                        case "RESTORE":
                        case "SELECT_INITIAL_MODULE_IDEA":
                        case "TEXT_CHANGE":
                        case "TRY_AGAIN":
                        case "UI_PATCH":
                        case "REBUILD_FROM_LATEST":
                        case "UPDATE_REFERENCES":
                        case "COMMENT_CHANGE":
                        case "ENHANCE_PROMPT":
                        case "CHANGE_AUTH":
                        case "FORK_FROM_PROJECT_GROUP_TEMPLATE":
                        case "FORK_FROM_PROJECT_GROUP":
                        case "DUPLICATE_PROJECT_GROUP":
                        case "FORK_FROM_MODULE":
                        case "DUPLICATE_MODULE":
                            return !1;
                        default:
                            return e
                    }
                },
                tk = ((H = tk || {}).DAILY = "DAILY", H),
                tB = ((k = tB || {}).SUGGEST_ENVIRONMENT_VARIABLES = "suggest-environment-variables", k.EXPO_PAGE = "expo-page", k.PAGE = "page", k.COMPONENT = "component", k.FUNCTION = "function", k.THINKING = "thinking", k.CHOICES = "choices", k.MODULE_SELECTION = "module-selection", k.DESIGN_SYSTEM_SELECTION = "design-system-selection", k.INTEGRATION_SELECTION = "integration-selection", k.PUBLISH = "publish", k.VIEW_TRANSITION = "view-transition", k.ACTION = "action", k.DATABASE = "database", k.PROJECT_SETTINGS = "project-settings", k),
                tx = ((B = tx || {}).REVISION_ID = "revisionid", B),
                tw = ((x = tw || {}).DB_ID = "dbid", x.MIGRATION_ID = "migrationid", x),
                tF = ((w = tF || {}).AUTO_SELECT = "autoselect", w),
                tK = ((F = tK || {}).INTEGRATION_USAGE = "INTEGRATION_USAGE", F.GENERATION_USAGE = "GENERATION_USAGE", F),
                tW = ((K = tW || {}).CHAT_GPT = "CHAT_GPT", K.GOOGLE_GEMINI = "GOOGLE_GEMINI", K.GOOGLE_GEMINI_1_5 = "GOOGLE_GEMINI_1_5", K.GOOGLE_GEMINI_1_5_FLASH = "GOOGLE_GEMINI_1_5_FLASH", K.GOOGLE_GEMINI_2_0_FLASH = "GOOGLE_GEMINI_2_0_FLASH", K.DEEPSEEK_V3 = "DEEPSEEK_V3", K.ANTHROPIC_CLAUDE = "ANTHROPIC_CLAUDE", K.ANTHROPIC_CLAUDE_SONNET = "ANTHROPIC_CLAUDE_SONNET", K.ANTHROPIC_CLAUDE_SONNET_3_5 = "ANTHROPIC_CLAUDE_SONNET_3_5", K.ANTHROPIC_CLAUDE_HAIKU = "ANTHROPIC_CLAUDE_HAIKU", K.GROQ = "GROQ", K.REKA = "REKA", K.COHERE_COMMAND_R_PLUS = "COHERE_COMMAND_R_PLUS", K),
                tj = {
                    "gpt-4o-mini-2024-07-18": "CHAT_GPT",
                    "gpt-4o-2024-08-06": "CHAT_GPT",
                    "gpt-4o-mini": "CHAT_GPT",
                    "o1-2024-12-17": "CHAT_GPT",
                    "o1-mini-2024-09-12": "CHAT_GPT",
                    "gemini-1.0-pro": "GOOGLE_GEMINI",
                    "gemini-1.5-pro-latest": "GOOGLE_GEMINI_1_5",
                    "gemini-1.5-flash": "GOOGLE_GEMINI_1_5_FLASH",
                    "gemini-2.0-flash-exp": "GOOGLE_GEMINI_2_0_FLASH",
                    "claude-3-opus-20240229": "ANTHROPIC_CLAUDE",
                    "claude-3-sonnet-20240229": "ANTHROPIC_CLAUDE_SONNET",
                    "claude-3-5-sonnet-20240620": "ANTHROPIC_CLAUDE_SONNET_3_5",
                    "claude-3-5-sonnet-20241022": "ANTHROPIC_CLAUDE_SONNET_3_5",
                    "claude-3-7-sonnet-20250219": "ANTHROPIC_CLAUDE_SONNET_3_5",
                    "claude-3-haiku-20240307": "ANTHROPIC_CLAUDE_HAIKU",
                    "llama3-70b-8192": "GROQ",
                    "command-r-plus": "COHERE_COMMAND_R_PLUS",
                    "reka-flash": "REKA",
                    "anthropic.claude-3-5-sonnet-20240620-v1:0": "ANTHROPIC_CLAUDE_SONNET_3_5",
                    "anthropic.claude-3-5-sonnet-20241022-v2:0": "ANTHROPIC_CLAUDE_SONNET_3_5",
                    "anthropic.claude-3-7-sonnet-20250219-v1:0": "ANTHROPIC_CLAUDE_SONNET_3_5",
                    "deepseek-chat": "DEEPSEEK_V3"
                },
                tZ = "callbackUrl",
                tV = ((W = tV || {}).google = "google", W.email = "email", W.facebook = "facebook", W.twitter = "twitter", W),
                tY = {
                    google: {
                        clientId: "GOOGLE_CLIENT_ID",
                        clientSecret: "GOOGLE_CLIENT_SECRET"
                    },
                    email: {},
                    facebook: {
                        clientId: "FACEBOOK_CLIENT_ID",
                        clientSecret: "FACEBOOK_CLIENT_SECRET"
                    },
                    twitter: {
                        clientId: "TWITTER_ID",
                        clientSecret: "TWITTER_CLIENT_SECRET"
                    }
                },
                tz = new Set(Object.values(tV)),
                tJ = e => tz.has(e),
                tX = e => Array.isArray(e) ? e.filter(tJ) : [],
                tQ = e => {
                    switch (e) {
                        case "google":
                            return {
                                name: "Google",
                                iconURL: "/auth-providers/google.svg",
                                helpURL: "https://www.create.xyz/docs/auth/google"
                            };
                        case "twitter":
                            return {
                                name: "X (Twitter)",
                                iconURL: "/auth-providers/twitter.svg",
                                helpURL: "https://www.create.xyz/docs/auth/x"
                            };
                        case "facebook":
                            return {
                                name: "Facebook",
                                iconURL: "/auth-providers/facebook.svg",
                                helpURL: "https://www.create.xyz/docs/auth/facebook"
                            };
                        case "email":
                            return {
                                name: "Email",
                                iconURL: "/auth-providers/email.svg",
                                helpURL: "https://www.create.xyz/docs/auth/password"
                            };
                        default:
                            return e
                    }
                },
                tq = ((j = tq || {}).UPLOADCARE = "UPLOADCARE", j),
                t$ = new Map(["ABeeZee", "ADLaM Display", "AR One Sans", "Abel", "Abhaya Libre", "Aboreto", "Abril Fatface", "Abyssinica SIL", "Aclonica", "Acme", "Actor", "Adamina", "Advent Pro", "Agbalumo", "Agdasima", "Aguafina Script", "Akatab", "Akaya Kanadaka", "Akaya Telivigala", "Akronim", "Akshar", "Aladin", "Alata", "Alatsi", "Albert Sans", "Aldrich", "Alef", "Alegreya", "Alegreya SC", "Alegreya Sans", "Alegreya Sans SC", "Aleo", "Alex Brush", "Alexandria", "Alfa Slab One", "Alice", "Alike", "Alike Angular", "Alkalami", "Alkatra", "Allan", "Allerta", "Allerta Stencil", "Allison", "Allura", "Almarai", "Almendra", "Almendra Display", "Almendra SC", "Alumni Sans", "Alumni Sans Collegiate One", "Alumni Sans Inline One", "Alumni Sans Pinstripe", "Amarante", "Amaranth", "Amatic SC", "Amethysta", "Amiko", "Amiri", "Amiri Quran", "Amita", "Anaheim", "Andada Pro", "Andika", "Anek Bangla", "Anek Devanagari", "Anek Gujarati", "Anek Gurmukhi", "Anek Kannada", "Anek Latin", "Anek Malayalam", "Anek Odia", "Anek Tamil", "Anek Telugu", "Angkor", "Annie Use Your Telescope", "Anonymous Pro", "Antic", "Antic Didone", "Antic Slab", "Anton", "Antonio", "Anuphan", "Anybody", "Aoboshi One", "Arapey", "Arbutus", "Arbutus Slab", "Architects Daughter", "Archivo", "Archivo Black", "Archivo Narrow", "Are You Serious", "Aref Ruqaa", "Aref Ruqaa Ink", "Arima", "Arimo", "Arizonia", "Armata", "Arsenal", "Artifika", "Arvo", "Arya", "Asap", "Asap Condensed", "Asar", "Asset", "Assistant", "Astloch", "Asul", "Athiti", "Atkinson Hyperlegible", "Atma", "Atomic Age", "Aubrey", "Audiowide", "Autour One", "Average", "Average Sans", "Averia Gruesa Libre", "Averia Libre", "Averia Sans Libre", "Averia Serif Libre", "Azeret Mono", "B612", "B612 Mono", "BIZ UDGothic", "BIZ UDMincho", "BIZ UDPGothic", "BIZ UDPMincho", "Babylonica", "Bacasime Antique", "Bad Script", "Bagel Fat One", "Bahiana", "Bahianita", "Bai Jamjuree", "Bakbak One", "Ballet", "Baloo 2", "Baloo Bhai 2", "Baloo Bhaijaan 2", "Baloo Bhaina 2", "Baloo Chettan 2", "Baloo Da 2", "Baloo Paaji 2", "Baloo Tamma 2", "Baloo Tammudu 2", "Baloo Thambi 2", "Balsamiq Sans", "Balthazar", "Bangers", "Barlow", "Barlow Condensed", "Barlow Semi Condensed", "Barriecito", "Barrio", "Basic", "Baskervville", "Battambang", "Baumans", "Bayon", "Be Vietnam Pro", "Beau Rivage", "Bebas Neue", "Belanosima", "Belgrano", "Bellefair", "Belleza", "Bellota", "Bellota Text", "BenchNine", "Benne", "Bentham", "Berkshire Swash", "Besley", "Beth Ellen", "Bevan", "BhuTuka Expanded One", "Big Shoulders Display", "Big Shoulders Inline Display", "Big Shoulders Inline Text", "Big Shoulders Stencil Display", "Big Shoulders Stencil Text", "Big Shoulders Text", "Bigelow Rules", "Bigshot One", "Bilbo", "Bilbo Swash Caps", "BioRhyme", "BioRhyme Expanded", "Birthstone", "Birthstone Bounce", "Biryani", "Bitter", "Black And White Picture", "Black Han Sans", "Black Ops One", "Blaka", "Blaka Hollow", "Blaka Ink", "Blinker", "Bodoni Moda", "Bokor", "Bona Nova", "Bonbon", "Bonheur Royale", "Boogaloo", "Borel", "Bowlby One", "Bowlby One SC", "Braah One", "Brawler", "Bree Serif", "Bricolage Grotesque", "Bruno Ace", "Bruno Ace SC", "Brygada 1918", "Bubblegum Sans", "Bubbler One", "Buda", "Buenard", "Bungee", "Bungee Hairline", "Bungee Inline", "Bungee Outline", "Bungee Shade", "Bungee Spice", "Butcherman", "Butterfly Kids", "Cabin", "Cabin Condensed", "Cabin Sketch", "Caesar Dressing", "Cagliostro", "Cairo", "Cairo Play", "Caladea", "Calistoga", "Calligraffitti", "Cambay", "Cambo", "Candal", "Cantarell", "Cantata One", "Cantora One", "Caprasimo", "Capriola", "Caramel", "Carattere", "Cardo", "Carlito", "Carme", "Carrois Gothic", "Carrois Gothic SC", "Carter One", "Castoro", "Castoro Titling", "Catamaran", "Caudex", "Caveat", "Caveat Brush", "Cedarville Cursive", "Ceviche One", "Chakra Petch", "Changa", "Changa One", "Chango", "Charis SIL", "Charm", "Charmonman", "Chathura", "Chau Philomene One", "Chela One", "Chelsea Market", "Chenla", "Cherish", "Cherry Bomb One", "Cherry Cream Soda", "Cherry Swash", "Chewy", "Chicle", "Chilanka", "Chivo", "Chivo Mono", "Chokokutai", "Chonburi", "Cinzel", "Cinzel Decorative", "Clicker Script", "Climate Crisis", "Coda", "Codystar", "Coiny", "Combo", "Comfortaa", "Comforter", "Comforter Brush", "Comic Neue", "Coming Soon", "Comme", "Commissioner", "Concert One", "Condiment", "Content", "Contrail One", "Convergence", "Cookie", "Copse", "Corben", "Corinthia", "Cormorant", "Cormorant Garamond", "Cormorant Infant", "Cormorant SC", "Cormorant Unicase", "Cormorant Upright", "Courgette", "Courier Prime", "Cousine", "Coustard", "Covered By Your Grace", "Crafty Girls", "Creepster", "Crete Round", "Crimson Pro", "Crimson Text", "Croissant One", "Crushed", "Cuprum", "Cute Font", "Cutive", "Cutive Mono", "DM Mono", "DM Sans", "DM Serif Display", "DM Serif Text", "Dai Banna SIL", "Damion", "Dancing Script", "Dangrek", "Darker Grotesque", "Darumadrop One", "David Libre", "Dawning of a New Day", "Days One", "Dekko", "Dela Gothic One", "Delicious Handrawn", "Delius", "Delius Swash Caps", "Delius Unicase", "Della Respira", "Denk One", "Devonshire", "Dhurjati", "Didact Gothic", "Diphylleia", "Diplomata", "Diplomata SC", "Do Hyeon", "Dokdo", "Domine", "Donegal One", "Dongle", "Doppio One", "Dorsa", "Dosis", "DotGothic16", "Dr Sugiyama", "Duru Sans", "DynaPuff", "Dynalight", "EB Garamond", "Eagle Lake", "East Sea Dokdo", "Eater", "Economica", "Eczar", "Edu NSW ACT Foundation", "Edu QLD Beginner", "Edu SA Beginner", "Edu TAS Beginner", "Edu VIC WA NT Beginner", "El Messiri", "Electrolize", "Elsie", "Elsie Swash Caps", "Emblema One", "Emilys Candy", "Encode Sans", "Encode Sans Condensed", "Encode Sans Expanded", "Encode Sans SC", "Encode Sans Semi Condensed", "Encode Sans Semi Expanded", "Engagement", "Englebert", "Enriqueta", "Ephesis", "Epilogue", "Erica One", "Esteban", "Estonia", "Euphoria Script", "Ewert", "Exo", "Exo 2", "Expletus Sans", "Explora", "Fahkwang", "Familjen Grotesk", "Fanwood Text", "Farro", "Farsan", "Fascinate", "Fascinate Inline", "Faster One", "Fasthand", "Fauna One", "Faustina", "Federant", "Federo", "Felipa", "Fenix", "Festive", "Figtree", "Finger Paint", "Finlandica", "Fira Code", "Fira Mono", "Fira Sans", "Fira Sans Condensed", "Fira Sans Extra Condensed", "Fjalla One", "Fjord One", "Flamenco", "Flavors", "Fleur De Leah", "Flow Block", "Flow Circular", "Flow Rounded", "Foldit", "Fondamento", "Fontdiner Swanky", "Forum", "Fragment Mono", "Francois One", "Frank Ruhl Libre", "Fraunces", "Freckle Face", "Fredericka the Great", "Fredoka", "Freehand", "Fresca", "Frijole", "Fruktur", "Fugaz One", "Fuggles", "Fuzzy Bubbles", "GFS Didot", "GFS Neohellenic", "Gabarito", "Gabriela", "Gaegu", "Gafata", "Gajraj One", "Galada", "Galdeano", "Galindo", "Gamja Flower", "Gantari", "Gasoek One", "Gayathri", "Gelasio", "Gemunu Libre", "Genos", "Gentium Book Plus", "Gentium Plus", "Geo", "Geologica", "Georama", "Geostar", "Geostar Fill", "Germania One", "Gideon Roman", "Gidugu", "Gilda Display", "Girassol", "Give You Glory", "Glass Antiqua", "Glegoo", "Gloock", "Gloria Hallelujah", "Glory", "Gluten", "Goblin One", "Gochi Hand", "Goldman", "Golos Text", "Gorditas", "Gothic A1", "Gotu", "Goudy Bookletter 1911", "Gowun Batang", "Gowun Dodum", "Graduate", "Grand Hotel", "Grandiflora One", "Grandstander", "Grape Nuts", "Gravitas One", "Great Vibes", "Grechen Fuemen", "Grenze", "Grenze Gotisch", "Grey Qo", "Griffy", "Gruppo", "Gudea", "Gugi", "Gulzar", "Gupter", "Gurajada", "Gwendolyn", "Habibi", "Hachi Maru Pop", "Hahmlet", "Halant", "Hammersmith One", "Hanalei", "Hanalei Fill", "Handjet", "Handlee", "Hanken Grotesk", "Hanuman", "Happy Monkey", "Harmattan", "Headland One", "Heebo", "Henny Penny", "Hepta Slab", "Herr Von Muellerhoff", "Hi Melody", "Hina Mincho", "Hind", "Hind Guntur", "Hind Madurai", "Hind Siliguri", "Hind Vadodara", "Holtwood One SC", "Homemade Apple", "Homenaje", "Hubballi", "Hurricane", "IBM Plex Mono", "IBM Plex Sans", "IBM Plex Sans Arabic", "IBM Plex Sans Condensed", "IBM Plex Sans Devanagari", "IBM Plex Sans Hebrew", "IBM Plex Sans JP", "IBM Plex Sans KR", "IBM Plex Sans Thai", "IBM Plex Sans Thai Looped", "IBM Plex Serif", "IM Fell DW Pica", "IM Fell DW Pica SC", "IM Fell Double Pica", "IM Fell Double Pica SC", "IM Fell English", "IM Fell English SC", "IM Fell French Canon", "IM Fell French Canon SC", "IM Fell Great Primer", "IM Fell Great Primer SC", "Ibarra Real Nova", "Iceberg", "Iceland", "Imbue", "Imperial Script", "Imprima", "Inclusive Sans", "Inconsolata", "Inder", "Indie Flower", "Ingrid Darling", "Inika", "Inknut Antiqua", "Inria Sans", "Inria Serif", "Inspiration", "Instrument Sans", "Instrument Serif", "Inter", "Inter Tight", "Irish Grover", "Island Moments", "Istok Web", "Italiana", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jaldi", "JetBrains Mono", "Jim Nightshade", "Joan", "Jockey One", "Jolly Lodger", "Jomhuria", "Jomolhari", "Josefin Sans", "Josefin Slab", "Jost", "Joti One", "Jua", "Judson", "Julee", "Julius Sans One", "Junge", "Jura", "Just Another Hand", "Just Me Again Down Here", "K2D", "Kablammo", "Kadwa", "Kaisei Decol", "Kaisei HarunoUmi", "Kaisei Opti", "Kaisei Tokumin", "Kalam", "Kameron", "Kanit", "Kantumruy Pro", "Karantina", "Karla", "Karma", "Katibeh", "Kaushan Script", "Kavivanar", "Kavoon", "Kay Pho Du", "Kdam Thmor Pro", "Keania One", "Kelly Slab", "Kenia", "Khand", "Khmer", "Khula", "Kings", "Kirang Haerang", "Kite One", "Kiwi Maru", "Klee One", "Knewave", "KoHo", "Kodchasan", "Koh Santepheap", "Kolker Brush", "Konkhmer Sleokchher", "Kosugi", "Kosugi Maru", "Kotta One", "Koulen", "Kranky", "Kreon", "Kristi", "Krona One", "Krub", "Kufam", "Kulim Park", "Kumar One", "Kumar One Outline", "Kumbh Sans", "Kurale", "La Belle Aurore", "Labrada", "Lacquer", "Laila", "Lakki Reddy", "Lalezar", "Lancelot", "Langar", "Lateef", "Lato", "Lavishly Yours", "League Gothic", "League Script", "League Spartan", "Leckerli One", "Ledger", "Lekton", "Lemon", "Lemonada", "Lexend", "Lexend Deca", "Lexend Exa", "Lexend Giga", "Lexend Mega", "Lexend Peta", "Lexend Tera", "Lexend Zetta", "Libre Barcode 128", "Libre Barcode 128 Text", "Libre Barcode 39", "Libre Barcode 39 Extended", "Libre Barcode 39 Extended Text", "Libre Barcode 39 Text", "Libre Barcode EAN13 Text", "Libre Baskerville", "Libre Bodoni", "Libre Caslon Display", "Libre Caslon Text", "Libre Franklin", "Licorice", "Life Savers", "Lilita One", "Lily Script One", "Limelight", "Linden Hill", "Linefont", "Lisu Bosa", "Literata", "Liu Jian Mao Cao", "Livvic", "Lobster", "Lobster Two", "Londrina Outline", "Londrina Shadow", "Londrina Sketch", "Londrina Solid", "Long Cang", "Lora", "Love Light", "Love Ya Like A Sister", "Loved by the King", "Lovers Quarrel", "Luckiest Guy", "Lugrasimo", "Lumanosimo", "Lunasima", "Lusitana", "Lustria", "Luxurious Roman", "Luxurious Script", "M PLUS 1", "M PLUS 1 Code", "M PLUS 1p", "M PLUS 2", "M PLUS Code Latin", "M PLUS Rounded 1c", "Ma Shan Zheng", "Macondo", "Macondo Swash Caps", "Mada", "Magra", "Maiden Orange", "Maitree", "Major Mono Display", "Mako", "Mali", "Mallanna", "Mandali", "Manjari", "Manrope", "Mansalva", "Manuale", "Marcellus", "Marcellus SC", "Marck Script", "Margarine", "Marhey", "Markazi Text", "Marko One", "Marmelad", "Martel", "Martel Sans", "Martian Mono", "Marvel", "Mate", "Mate SC", "Maven Pro", "McLaren", "Mea Culpa", "Meddon", "MedievalSharp", "Medula One", "Meera Inimai", "Megrim", "Meie Script", "Meow Script", "Merienda", "Merriweather", "Merriweather Sans", "Metal", "Metal Mania", "Metamorphous", "Metrophobic", "Michroma", "Milonga", "Miltonian", "Miltonian Tattoo", "Mina", "Mingzat", "Miniver", "Miriam Libre", "Mirza", "Miss Fajardose", "Mitr", "Mochiy Pop One", "Mochiy Pop P One", "Modak", "Modern Antiqua", "Mogra", "Mohave", "Moirai One", "Molengo", "Molle", "Monda", "Monofett", "Monomaniac One", "Monoton", "Monsieur La Doulaise", "Montaga", "Montagu Slab", "MonteCarlo", "Montez", "Montserrat", "Montserrat Alternates", "Montserrat Subrayada", "Moo Lah Lah", "Mooli", "Moon Dance", "Moul", "Moulpali", "Mountains of Christmas", "Mouse Memoirs", "Mr Bedfort", "Mr Dafoe", "Mr De Haviland", "Mrs Saint Delafield", "Mrs Sheppards", "Ms Madi", "Mukta", "Mukta Mahee", "Mukta Malar", "Mukta Vaani", "Mulish", "Murecho", "MuseoModerno", "My Soul", "Mynerve", "Mystery Quest", "NTR", "Nabla", "Nanum Brush Script", "Nanum Gothic", "Nanum Gothic Coding", "Nanum Myeongjo", "Nanum Pen Script", "Narnoor", "Neonderthaw", "Nerko One", "Neucha", "Neuton", "New Rocker", "New Tegomin", "News Cycle", "Newsreader", "Niconne", "Niramit", "Nixie One", "Nobile", "Nokora", "Norican", "Nosifer", "Notable", "Nothing You Could Do", "Noticia Text", "Noto Color Emoji", "Noto Emoji", "Noto Kufi Arabic", "Noto Music", "Noto Naskh Arabic", "Noto Nastaliq Urdu", "Noto Rashi Hebrew", "Noto Sans", "Noto Sans Adlam", "Noto Sans Adlam Unjoined", "Noto Sans Anatolian Hieroglyphs", "Noto Sans Arabic", "Noto Sans Armenian", "Noto Sans Avestan", "Noto Sans Balinese", "Noto Sans Bamum", "Noto Sans Bassa Vah", "Noto Sans Batak", "Noto Sans Bengali", "Noto Sans Bhaiksuki", "Noto Sans Brahmi", "Noto Sans Buginese", "Noto Sans Buhid", "Noto Sans Canadian Aboriginal", "Noto Sans Carian", "Noto Sans Caucasian Albanian", "Noto Sans Chakma", "Noto Sans Cham", "Noto Sans Cherokee", "Noto Sans Chorasmian", "Noto Sans Coptic", "Noto Sans Cuneiform", "Noto Sans Cypriot", "Noto Sans Cypro Minoan", "Noto Sans Deseret", "Noto Sans Devanagari", "Noto Sans Display", "Noto Sans Duployan", "Noto Sans Egyptian Hieroglyphs", "Noto Sans Elbasan", "Noto Sans Elymaic", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Glagolitic", "Noto Sans Gothic", "Noto Sans Grantha", "Noto Sans Gujarati", "Noto Sans Gunjala Gondi", "Noto Sans Gurmukhi", "Noto Sans HK", "Noto Sans Hanifi Rohingya", "Noto Sans Hanunoo", "Noto Sans Hatran", "Noto Sans Hebrew", "Noto Sans Imperial Aramaic", "Noto Sans Indic Siyaq Numbers", "Noto Sans Inscriptional Pahlavi", "Noto Sans Inscriptional Parthian", "Noto Sans JP", "Noto Sans Javanese", "Noto Sans KR", "Noto Sans Kaithi", "Noto Sans Kannada", "Noto Sans Kawi", "Noto Sans Kayah Li", "Noto Sans Kharoshthi", "Noto Sans Khmer", "Noto Sans Khojki", "Noto Sans Khudawadi", "Noto Sans Lao", "Noto Sans Lao Looped", "Noto Sans Lepcha", "Noto Sans Limbu", "Noto Sans Linear A", "Noto Sans Linear B", "Noto Sans Lisu", "Noto Sans Lycian", "Noto Sans Lydian", "Noto Sans Mahajani", "Noto Sans Malayalam", "Noto Sans Mandaic", "Noto Sans Manichaean", "Noto Sans Marchen", "Noto Sans Masaram Gondi", "Noto Sans Math", "Noto Sans Mayan Numerals", "Noto Sans Medefaidrin", "Noto Sans Meetei Mayek", "Noto Sans Mende Kikakui", "Noto Sans Meroitic", "Noto Sans Miao", "Noto Sans Modi", "Noto Sans Mongolian", "Noto Sans Mono", "Noto Sans Mro", "Noto Sans Multani", "Noto Sans Myanmar", "Noto Sans NKo", "Noto Sans NKo Unjoined", "Noto Sans Nabataean", "Noto Sans Nag Mundari", "Noto Sans Nandinagari", "Noto Sans New Tai Lue", "Noto Sans Newa", "Noto Sans Nushu", "Noto Sans Ogham", "Noto Sans Ol Chiki", "Noto Sans Old Hungarian", "Noto Sans Old Italic", "Noto Sans Old North Arabian", "Noto Sans Old Permic", "Noto Sans Old Persian", "Noto Sans Old Sogdian", "Noto Sans Old South Arabian", "Noto Sans Old Turkic", "Noto Sans Oriya", "Noto Sans Osage", "Noto Sans Osmanya", "Noto Sans Pahawh Hmong", "Noto Sans Palmyrene", "Noto Sans Pau Cin Hau", "Noto Sans Phags Pa", "Noto Sans Phoenician", "Noto Sans Psalter Pahlavi", "Noto Sans Rejang", "Noto Sans Runic", "Noto Sans SC", "Noto Sans Samaritan", "Noto Sans Saurashtra", "Noto Sans Sharada", "Noto Sans Shavian", "Noto Sans Siddham", "Noto Sans SignWriting", "Noto Sans Sinhala", "Noto Sans Sogdian", "Noto Sans Sora Sompeng", "Noto Sans Soyombo", "Noto Sans Sundanese", "Noto Sans Syloti Nagri", "Noto Sans Symbols", "Noto Sans Symbols 2", "Noto Sans Syriac", "Noto Sans Syriac Eastern", "Noto Sans TC", "Noto Sans Tagalog", "Noto Sans Tagbanwa", "Noto Sans Tai Le", "Noto Sans Tai Tham", "Noto Sans Tai Viet", "Noto Sans Takri", "Noto Sans Tamil", "Noto Sans Tamil Supplement", "Noto Sans Tangsa", "Noto Sans Telugu", "Noto Sans Thaana", "Noto Sans Thai", "Noto Sans Thai Looped", "Noto Sans Tifinagh", "Noto Sans Tirhuta", "Noto Sans Ugaritic", "Noto Sans Vai", "Noto Sans Vithkuqi", "Noto Sans Wancho", "Noto Sans Warang Citi", "Noto Sans Yi", "Noto Sans Zanabazar Square", "Noto Serif", "Noto Serif Ahom", "Noto Serif Armenian", "Noto Serif Balinese", "Noto Serif Bengali", "Noto Serif Devanagari", "Noto Serif Display", "Noto Serif Dogra", "Noto Serif Ethiopic", "Noto Serif Georgian", "Noto Serif Grantha", "Noto Serif Gujarati", "Noto Serif Gurmukhi", "Noto Serif HK", "Noto Serif Hebrew", "Noto Serif JP", "Noto Serif KR", "Noto Serif Kannada", "Noto Serif Khitan Small Script", "Noto Serif Khmer", "Noto Serif Khojki", "Noto Serif Lao", "Noto Serif Makasar", "Noto Serif Malayalam", "Noto Serif Myanmar", "Noto Serif NP Hmong", "Noto Serif Old Uyghur", "Noto Serif Oriya", "Noto Serif Ottoman Siyaq", "Noto Serif SC", "Noto Serif Sinhala", "Noto Serif TC", "Noto Serif Tamil", "Noto Serif Tangut", "Noto Serif Telugu", "Noto Serif Thai", "Noto Serif Tibetan", "Noto Serif Toto", "Noto Serif Vithkuqi", "Noto Serif Yezidi", "Noto Traditional Nushu", "Nova Cut", "Nova Flat", "Nova Mono", "Nova Oval", "Nova Round", "Nova Script", "Nova Slim", "Nova Square", "Numans", "Nunito", "Nunito Sans", "Nuosu SIL", "Odibee Sans", "Odor Mean Chey", "Offside", "Oi", "Old Standard TT", "Oldenburg", "Ole", "Oleo Script", "Oleo Script Swash Caps", "Onest", "Oooh Baby", "Open Sans", "Oranienbaum", "Orbit", "Orbitron", "Oregano", "Orelega One", "Orienta", "Original Surfer", "Oswald", "Outfit", "Over the Rainbow", "Overlock", "Overlock SC", "Overpass", "Overpass Mono", "Ovo", "Oxanium", "Oxygen", "Oxygen Mono", "PT Mono", "PT Sans", "PT Sans Caption", "PT Sans Narrow", "PT Serif", "PT Serif Caption", "Pacifico", "Padauk", "Padyakke Expanded One", "Palanquin", "Palanquin Dark", "Palette Mosaic", "Pangolin", "Paprika", "Parisienne", "Passero One", "Passion One", "Passions Conflict", "Pathway Extreme", "Pathway Gothic One", "Patrick Hand", "Patrick Hand SC", "Pattaya", "Patua One", "Pavanam", "Paytone One", "Peddana", "Peralta", "Permanent Marker", "Petemoss", "Petit Formal Script", "Petrona", "Philosopher", "Phudu", "Piazzolla", "Piedra", "Pinyon Script", "Pirata One", "Pixelify Sans", "Plaster", "Play", "Playball", "Playfair", "Playfair Display", "Playfair Display SC", "Playpen Sans", "Plus Jakarta Sans", "Podkova", "Poiret One", "Poller One", "Poltawski Nowy", "Poly", "Pompiere", "Pontano Sans", "Poor Story", "Poppins", "Port Lligat Sans", "Port Lligat Slab", "Potta One", "Pragati Narrow", "Praise", "Prata", "Preahvihear", "Press Start 2P", "Pridi", "Princess Sofia", "Prociono", "Prompt", "Prosto One", "Proza Libre", "Public Sans", "Puppies Play", "Puritan", "Purple Purse", "Qahiri", "Quando", "Quantico", "Quattrocento", "Quattrocento Sans", "Questrial", "Quicksand", "Quintessential", "Qwigley", "Qwitcher Grypen", "REM", "Racing Sans One", "Radio Canada", "Radley", "Rajdhani", "Rakkas", "Raleway", "Raleway Dots", "Ramabhadra", "Ramaraja", "Rambla", "Rammetto One", "Rampart One", "Ranchers", "Rancho", "Ranga", "Rasa", "Rationale", "Ravi Prakash", "Readex Pro", "Recursive", "Red Hat Display", "Red Hat Mono", "Red Hat Text", "Red Rose", "Redacted", "Redacted Script", "Redressed", "Reem Kufi", "Reem Kufi Fun", "Reem Kufi Ink", "Reenie Beanie", "Reggae One", "Revalia", "Rhodium Libre", "Ribeye", "Ribeye Marrow", "Righteous", "Risque", "Road Rage", "Roboto", "Roboto Condensed", "Roboto Flex", "Roboto Mono", "Roboto Serif", "Roboto Slab", "Rochester", "Rock 3D", "Rock Salt", "RocknRoll One", "Rokkitt", "Romanesco", "Ropa Sans", "Rosario", "Rosarivo", "Rouge Script", "Rowdies", "Rozha One", "Rubik", "Rubik 80s Fade", "Rubik Beastly", "Rubik Bubbles", "Rubik Burned", "Rubik Dirt", "Rubik Distressed", "Rubik Gemstones", "Rubik Glitch", "Rubik Iso", "Rubik Marker Hatch", "Rubik Maze", "Rubik Microbe", "Rubik Mono One", "Rubik Moonrocks", "Rubik Pixels", "Rubik Puddles", "Rubik Spray Paint", "Rubik Storm", "Rubik Vinyl", "Rubik Wet Paint", "Ruda", "Rufina", "Ruge Boogie", "Ruluko", "Rum Raisin", "Ruslan Display", "Russo One", "Ruthie", "Ruwudu", "Rye", "STIX Two Text", "Sacramento", "Sahitya", "Sail", "Saira", "Saira Condensed", "Saira Extra Condensed", "Saira Semi Condensed", "Saira Stencil One", "Salsa", "Sanchez", "Sancreek", "Sansita", "Sansita Swashed", "Sarabun", "Sarala", "Sarina", "Sarpanch", "Sassy Frass", "Satisfy", "Sawarabi Gothic", "Sawarabi Mincho", "Scada", "Scheherazade New", "Schibsted Grotesk", "Schoolbell", "Scope One", "Seaweed Script", "Secular One", "Sedgwick Ave", "Sedgwick Ave Display", "Sen", "Send Flowers", "Sevillana", "Seymour One", "Shadows Into Light", "Shadows Into Light Two", "Shalimar", "Shantell Sans", "Shanti", "Share", "Share Tech", "Share Tech Mono", "Shippori Antique", "Shippori Antique B1", "Shippori Mincho", "Shippori Mincho B1", "Shizuru", "Shojumaru", "Short Stack", "Shrikhand", "Siemreap", "Sigmar", "Sigmar One", "Signika", "Signika Negative", "Silkscreen", "Simonetta", "Single Day", "Sintony", "Sirin Stencil", "Six Caps", "Skranji", "Slabo 13px", "Slabo 27px", "Slackey", "Slackside One", "Smokum", "Smooch", "Smooch Sans", "Smythe", "Sniglet", "Snippet", "Snowburst One", "Sofadi One", "Sofia", "Sofia Sans", "Sofia Sans Condensed", "Sofia Sans Extra Condensed", "Sofia Sans Semi Condensed", "Solitreo", "Solway", "Sometype Mono", "Song Myung", "Sono", "Sonsie One", "Sora", "Sorts Mill Goudy", "Source Code Pro", "Source Sans 3", "Source Serif 4", "Space Grotesk", "Space Mono", "Special Elite", "Spectral", "Spectral SC", "Spicy Rice", "Spinnaker", "Spirax", "Splash", "Spline Sans", "Spline Sans Mono", "Squada One", "Square Peg", "Sree Krushnadevaraya", "Sriracha", "Srisakdi", "Staatliches", "Stalemate", "Stalinist One", "Stardos Stencil", "Stick", "Stick No Bills", "Stint Ultra Condensed", "Stint Ultra Expanded", "Stoke", "Strait", "Style Script", "Stylish", "Sue Ellen Francisco", "Suez One", "Sulphur Point", "Sumana", "Sunflower", "Sunshiney", "Supermercado One", "Sura", "Suranna", "Suravaram", "Suwannaphum", "Swanky and Moo Moo", "Syncopate", "Syne", "Syne Mono", "Syne Tactile", "Tai Heritage Pro", "Tajawal", "Tangerine", "Tapestry", "Taprom", "Tauri", "Taviraj", "Teko", "Tektur", "Telex", "Tenali Ramakrishna", "Tenor Sans", "Text Me One", "Texturina", "Thasadith", "The Girl Next Door", "The Nautigal", "Tienne", "Tillana", "Tilt Neon", "Tilt Prism", "Tilt Warp", "Timmana", "Tinos", "Tiro Bangla", "Tiro Devanagari Hindi", "Tiro Devanagari Marathi", "Tiro Devanagari Sanskrit", "Tiro Gurmukhi", "Tiro Kannada", "Tiro Tamil", "Tiro Telugu", "Titan One", "Titillium Web", "Tomorrow", "Tourney", "Trade Winds", "Train One", "Trirong", "Trispace", "Trocchi", "Trochut", "Truculenta", "Trykker", "Tsukimi Rounded", "Tulpen One", "Turret Road", "Twinkle Star", "Ubuntu", "Ubuntu Condensed", "Ubuntu Mono", "Uchen", "Ultra", "Unbounded", "Uncial Antiqua", "Underdog", "Unica One", "UnifrakturCook", "UnifrakturMaguntia", "Unkempt", "Unlock", "Unna", "Updock", "Urbanist", "VT323", "Vampiro One", "Varela", "Varela Round", "Varta", "Vast Shadow", "Vazirmatn", "Vesper Libre", "Viaoda Libre", "Vibes", "Vibur", "Victor Mono", "Vidaloka", "Viga", "Vina Sans", "Voces", "Volkhov", "Vollkorn", "Vollkorn SC", "Voltaire", "Vujahday Script", "Waiting for the Sunrise", "Wallpoet", "Walter Turncoat", "Warnes", "Water Brush", "Waterfall", "Wavefont", "Wellfleet", "Wendy One", "Whisper", "WindSong", "Wire One", "Wix Madefor Display", "Wix Madefor Text", "Work Sans", "Xanh Mono", "Yaldevi", "Yanone Kaffeesatz", "Yantramanav", "Yatra One", "Yellowtail", "Yeon Sung", "Yeseva One", "Yesteryear", "Yomogi", "Young Serif", "Yrsa", "Ysabeau", "Ysabeau Infant", "Ysabeau Office", "Ysabeau SC", "Yuji Boku", "Yuji Hentaigana Akari", "Yuji Hentaigana Akebono", "Yuji Mai", "Yuji Syuku", "Yusei Magic", "ZCOOL KuaiLe", "ZCOOL QingKe HuangYou", "ZCOOL XiaoWei", "Zen Antique", "Zen Antique Soft", "Zen Dots", "Zen Kaku Gothic Antique", "Zen Kaku Gothic New", "Zen Kurenaido", "Zen Loop", "Zen Maru Gothic", "Zen Old Mincho", "Zen Tokyo Zoo", "Zeyada", "Zhi Mang Xing", "Zilla Slab", "Zilla Slab Highlight"].map(e => [e.replaceAll(" ", "-").toLowerCase(), e])),
                t0 = "Create - free-to-use AI app builder",
                t1 = "Create lets you code using plain text and images. Use it to build components, sites, designs, prototypes, products, tools and more.",
                t2 = "hello@create.xyz",
                t4 = ((Z = t4 || {}).AFGHANISTAN = "AFGHANISTAN", Z.ALAND_ISLANDS = "ALAND_ISLANDS", Z.ALBANIA = "ALBANIA", Z.ALGERIA = "ALGERIA", Z.AMERICAN_SAMOA = "AMERICAN_SAMOA", Z.ANDORRA = "ANDORRA", Z.ANGOLA = "ANGOLA", Z.ANGUILLA = "ANGUILLA", Z.ANTARCTICA = "ANTARCTICA", Z.ANTIGUA_AND_BARBUDA = "ANTIGUA_AND_BARBUDA", Z.ARGENTINA = "ARGENTINA", Z.ARMENIA = "ARMENIA", Z.ARUBA = "ARUBA", Z.AUSTRALIA = "AUSTRALIA", Z.AUSTRIA = "AUSTRIA", Z.AZERBAIJAN = "AZERBAIJAN", Z.BAHAMAS = "BAHAMAS", Z.BAHRAIN = "BAHRAIN", Z.BANGLADESH = "BANGLADESH", Z.BARBADOS = "BARBADOS", Z.BELARUS = "BELARUS", Z.BELGIUM = "BELGIUM", Z.BELIZE = "BELIZE", Z.BENIN = "BENIN", Z.BERMUDA = "BERMUDA", Z.BHUTAN = "BHUTAN", Z.BOLIVIA = "BOLIVIA", Z.BONAIRE_SINT_EUSTATIUS_SABA = "BONAIRE_SINT_EUSTATIUS_SABA", Z.BOSNIA_AND_HERZEGOVINA = "BOSNIA_AND_HERZEGOVINA", Z.BOTSWANA = "BOTSWANA", Z.BOUVET_ISLAND = "BOUVET_ISLAND", Z.BRAZIL = "BRAZIL", Z.BRITISH_INDIAN_OCEAN_TERRITORY = "BRITISH_INDIAN_OCEAN_TERRITORY", Z.BRUNEI_DARUSSALAM = "BRUNEI_DARUSSALAM", Z.BULGARIA = "BULGARIA", Z.BURKINA_FASO = "BURKINA_FASO", Z.BURUNDI = "BURUNDI", Z.CAMBODIA = "CAMBODIA", Z.CAMEROON = "CAMEROON", Z.CANADA = "CANADA", Z.CAPE_VERDE = "CAPE_VERDE", Z.CAYMAN_ISLANDS = "CAYMAN_ISLANDS", Z.CENTRAL_AFRICAN_REPUBLIC = "CENTRAL_AFRICAN_REPUBLIC", Z.CHAD = "CHAD", Z.CHILE = "CHILE", Z.CHINA = "CHINA", Z.CHRISTMAS_ISLAND = "CHRISTMAS_ISLAND", Z.COCOS_KEELING_ISLANDS = "COCOS_KEELING_ISLANDS", Z.COLOMBIA = "COLOMBIA", Z.COMOROS = "COMOROS", Z.CONGO = "CONGO", Z.CONGO_DEMOCRATIC_REPUBLIC = "CONGO_DEMOCRATIC_REPUBLIC", Z.COOK_ISLANDS = "COOK_ISLANDS", Z.COSTA_RICA = "COSTA_RICA", Z.COTE_D_IVOIRE = "COTE_D_IVOIRE", Z.CROATIA = "CROATIA", Z.CUBA = "CUBA", Z.CURACAO = "CURACAO", Z.CYPRUS = "CYPRUS", Z.CZECH_REPUBLIC = "CZECH_REPUBLIC", Z.DENMARK = "DENMARK", Z.DJIBOUTI = "DJIBOUTI", Z.DOMINICA = "DOMINICA", Z.DOMINICAN_REPUBLIC = "DOMINICAN_REPUBLIC", Z.ECUADOR = "ECUADOR", Z.EGYPT = "EGYPT", Z.EL_SALVADOR = "EL_SALVADOR", Z.EQUATORIAL_GUINEA = "EQUATORIAL_GUINEA", Z.ERITREA = "ERITREA", Z.ESTONIA = "ESTONIA", Z.ETHIOPIA = "ETHIOPIA", Z.FALKLAND_ISLANDS = "FALKLAND_ISLANDS", Z.FAROE_ISLANDS = "FAROE_ISLANDS", Z.FIJI = "FIJI", Z.FINLAND = "FINLAND", Z.FRANCE = "FRANCE", Z.FRENCH_GUIANA = "FRENCH_GUIANA", Z.FRENCH_POLYNESIA = "FRENCH_POLYNESIA", Z.FRENCH_SOUTHERN_TERRITORIES = "FRENCH_SOUTHERN_TERRITORIES", Z.GABON = "GABON", Z.GAMBIA = "GAMBIA", Z.GEORGIA = "GEORGIA", Z.GERMANY = "GERMANY", Z.GHANA = "GHANA", Z.GIBRALTAR = "GIBRALTAR", Z.GREECE = "GREECE", Z.GREENLAND = "GREENLAND", Z.GRENADA = "GRENADA", Z.GUADELOUPE = "GUADELOUPE", Z.GUAM = "GUAM", Z.GUATEMALA = "GUATEMALA", Z.GUERNSEY = "GUERNSEY", Z.GUINEA = "GUINEA", Z.GUINEA_BISSAU = "GUINEA_BISSAU", Z.GUYANA = "GUYANA", Z.HAITI = "HAITI", Z.HEARD_ISLAND_MCDONALD_ISLANDS = "HEARD_ISLAND_MCDONALD_ISLANDS", Z.HOLY_SEE_VATICAN_CITY_STATE = "HOLY_SEE_VATICAN_CITY_STATE", Z.HONDURAS = "HONDURAS", Z.HONG_KONG = "HONG_KONG", Z.HUNGARY = "HUNGARY", Z.ICELAND = "ICELAND", Z.INDIA = "INDIA", Z.INDONESIA = "INDONESIA", Z.IRAN = "IRAN", Z.IRAQ = "IRAQ", Z.IRELAND = "IRELAND", Z.ISLE_OF_MAN = "ISLE_OF_MAN", Z.ISRAEL = "ISRAEL", Z.ITALY = "ITALY", Z.JAMAICA = "JAMAICA", Z.JAPAN = "JAPAN", Z.JERSEY = "JERSEY", Z.JORDAN = "JORDAN", Z.KAZAKHSTAN = "KAZAKHSTAN", Z.KENYA = "KENYA", Z.KIRIBATI = "KIRIBATI", Z.KOREA = "KOREA", Z.KOREA_DEMOCRATIC_PEOPLES_REPUBLIC = "KOREA_DEMOCRATIC_PEOPLES_REPUBLIC", Z.KUWAIT = "KUWAIT", Z.KYRGYZSTAN = "KYRGYZSTAN", Z.LAO_PEOPLES_DEMOCRATIC_REPUBLIC = "LAO_PEOPLES_DEMOCRATIC_REPUBLIC", Z.LATVIA = "LATVIA", Z.LEBANON = "LEBANON", Z.LESOTHO = "LESOTHO", Z.LIBERIA = "LIBERIA", Z.LIBYAN_ARAB_JAMAHIRIYA = "LIBYAN_ARAB_JAMAHIRIYA", Z.LIECHTENSTEIN = "LIECHTENSTEIN", Z.LITHUANIA = "LITHUANIA", Z.LUXEMBOURG = "LUXEMBOURG", Z.MACAO = "MACAO", Z.MACEDONIA = "MACEDONIA", Z.MADAGASCAR = "MADAGASCAR", Z.MALAWI = "MALAWI", Z.MALAYSIA = "MALAYSIA", Z.MALDIVES = "MALDIVES", Z.MALI = "MALI", Z.MALTA = "MALTA", Z.MARSHALL_ISLANDS = "MARSHALL_ISLANDS", Z.MARTINIQUE = "MARTINIQUE", Z.MAURITANIA = "MAURITANIA", Z.MAURITIUS = "MAURITIUS", Z.MAYOTTE = "MAYOTTE", Z.MEXICO = "MEXICO", Z.MICRONESIA = "MICRONESIA", Z.MOLDOVA = "MOLDOVA", Z.MONACO = "MONACO", Z.MONGOLIA = "MONGOLIA", Z.MONTENEGRO = "MONTENEGRO", Z.MONTSERRAT = "MONTSERRAT", Z.MOROCCO = "MOROCCO", Z.MOZAMBIQUE = "MOZAMBIQUE", Z.MYANMAR = "MYANMAR", Z.NAMIBIA = "NAMIBIA", Z.NAURU = "NAURU", Z.NEPAL = "NEPAL", Z.NETHERLANDS = "NETHERLANDS", Z.NEW_CALEDONIA = "NEW_CALEDONIA", Z.NEW_ZEALAND = "NEW_ZEALAND", Z.NICARAGUA = "NICARAGUA", Z.NIGER = "NIGER", Z.NIGERIA = "NIGERIA", Z.NIUE = "NIUE", Z.NORFOLK_ISLAND = "NORFOLK_ISLAND", Z.NORTHERN_MARIANA_ISLANDS = "NORTHERN_MARIANA_ISLANDS", Z.NORWAY = "NORWAY", Z.OMAN = "OMAN", Z.PAKISTAN = "PAKISTAN", Z.PALAU = "PALAU", Z.PALESTINIAN_TERRITORY = "PALESTINIAN_TERRITORY", Z.PANAMA = "PANAMA", Z.PAPUA_NEW_GUINEA = "PAPUA_NEW_GUINEA", Z.PARAGUAY = "PARAGUAY", Z.PERU = "PERU", Z.PHILIPPINES = "PHILIPPINES", Z.PITCAIRN = "PITCAIRN", Z.POLAND = "POLAND", Z.PORTUGAL = "PORTUGAL", Z.PUERTO_RICO = "PUERTO_RICO", Z.QATAR = "QATAR", Z.REUNION = "REUNION", Z.ROMANIA = "ROMANIA", Z.RUSSIAN_FEDERATION = "RUSSIAN_FEDERATION", Z.RWANDA = "RWANDA", Z.SAINT_BARTHELEMY = "SAINT_BARTHELEMY", Z.SAINT_HELENA = "SAINT_HELENA", Z.SAINT_KITTS_AND_NEVIS = "SAINT_KITTS_AND_NEVIS", Z.SAINT_LUCIA = "SAINT_LUCIA", Z.SAINT_MARTIN = "SAINT_MARTIN", Z.SAINT_PIERRE_AND_MIQUELON = "SAINT_PIERRE_AND_MIQUELON", Z.SAINT_VINCENT_AND_GRENADINES = "SAINT_VINCENT_AND_GRENADINES", Z.SAMOA = "SAMOA", Z.SAN_MARINO = "SAN_MARINO", Z.SAO_TOME_AND_PRINCIPE = "SAO_TOME_AND_PRINCIPE", Z.SAUDI_ARABIA = "SAUDI_ARABIA", Z.SENEGAL = "SENEGAL", Z.SERBIA = "SERBIA", Z.SEYCHELLES = "SEYCHELLES", Z.SIERRA_LEONE = "SIERRA_LEONE", Z.SINGAPORE = "SINGAPORE", Z.SINT_MAARTEN = "SINT_MAARTEN", Z.SLOVAKIA = "SLOVAKIA", Z.SLOVENIA = "SLOVENIA", Z.SOLOMON_ISLANDS = "SOLOMON_ISLANDS", Z.SOMALIA = "SOMALIA", Z.SOUTH_AFRICA = "SOUTH_AFRICA", Z.SOUTH_GEORGIA_AND_SANDWICH_ISL = "SOUTH_GEORGIA_AND_SANDWICH_ISL", Z.SOUTH_SUDAN = "SOUTH_SUDAN", Z.SPAIN = "SPAIN", Z.SRI_LANKA = "SRI_LANKA", Z.SUDAN = "SUDAN", Z.SURINAME = "SURINAME", Z.SVALBARD_AND_JAN_MAYEN = "SVALBARD_AND_JAN_MAYEN", Z.SWAZILAND = "SWAZILAND", Z.SWEDEN = "SWEDEN", Z.SWITZERLAND = "SWITZERLAND", Z.SYRIAN_ARAB_REPUBLIC = "SYRIAN_ARAB_REPUBLIC", Z.TAIWAN = "TAIWAN", Z.TAJIKISTAN = "TAJIKISTAN", Z.TANZANIA = "TANZANIA", Z.THAILAND = "THAILAND", Z.TIMOR_LESTE = "TIMOR_LESTE", Z.TOGO = "TOGO", Z.TOKELAU = "TOKELAU", Z.TONGA = "TONGA", Z.TRINIDAD_AND_TOBAGO = "TRINIDAD_AND_TOBAGO", Z.TUNISIA = "TUNISIA", Z.TURKEY = "TURKEY", Z.TURKMENISTAN = "TURKMENISTAN", Z.TURKS_AND_CAICOS_ISLANDS = "TURKS_AND_CAICOS_ISLANDS", Z.TUVALU = "TUVALU", Z.UGANDA = "UGANDA", Z.UKRAINE = "UKRAINE", Z.UNITED_ARAB_EMIRATES = "UNITED_ARAB_EMIRATES", Z.UNITED_KINGDOM = "UNITED_KINGDOM", Z.UNITED_STATES = "UNITED_STATES", Z.UNITED_STATES_OUTLYING_ISLANDS = "UNITED_STATES_OUTLYING_ISLANDS", Z.URUGUAY = "URUGUAY", Z.UZBEKISTAN = "UZBEKISTAN", Z.VANUATU = "VANUATU", Z.VENEZUELA = "VENEZUELA", Z.VIETNAM = "VIETNAM", Z.VIRGIN_ISLANDS_BRITISH = "VIRGIN_ISLANDS_BRITISH", Z.VIRGIN_ISLANDS_US = "VIRGIN_ISLANDS_US", Z.WALLIS_AND_FUTUNA = "WALLIS_AND_FUTUNA", Z.WESTERN_SAHARA = "WESTERN_SAHARA", Z.YEMEN = "YEMEN", Z.ZAMBIA = "ZAMBIA", Z.ZIMBABWE = "ZIMBABWE", Z),
                t9 = ["AUSTRALIA", "AUSTRIA", "BELGIUM", "BRAZIL", "BULGARIA", "CANADA", "CROATIA", "CYPRUS", "CZECH_REPUBLIC", "DENMARK", "ESTONIA", "FINLAND", "FRANCE", "GERMANY", "GIBRALTAR", "GREECE", "HONG_KONG", "HUNGARY", "IRELAND", "ITALY", "JAPAN", "LATVIA", "LIECHTENSTEIN", "LITHUANIA", "LUXEMBOURG", "MALAYSIA", "MALTA", "MEXICO", "NETHERLANDS", "NEW_ZEALAND", "NORWAY", "POLAND", "PORTUGAL", "ROMANIA", "SINGAPORE", "SLOVAKIA", "SLOVENIA", "SPAIN", "SWEDEN", "SWITZERLAND", "THAILAND", "UNITED_ARAB_EMIRATES", "UNITED_KINGDOM", "UNITED_STATES"],
                t3 = {
                    AFGHANISTAN: "AF",
                    ALAND_ISLANDS: "AX",
                    ALBANIA: "AL",
                    ALGERIA: "DZ",
                    AMERICAN_SAMOA: "AS",
                    ANDORRA: "AD",
                    ANGOLA: "AO",
                    ANGUILLA: "AI",
                    ANTARCTICA: "AQ",
                    ANTIGUA_AND_BARBUDA: "AG",
                    ARGENTINA: "AR",
                    ARMENIA: "AM",
                    ARUBA: "AW",
                    AUSTRALIA: "AU",
                    AUSTRIA: "AT",
                    AZERBAIJAN: "AZ",
                    BAHAMAS: "BS",
                    BAHRAIN: "BH",
                    BANGLADESH: "BD",
                    BARBADOS: "BB",
                    BELARUS: "BY",
                    BELGIUM: "BE",
                    BELIZE: "BZ",
                    BENIN: "BJ",
                    BERMUDA: "BM",
                    BHUTAN: "BT",
                    BOLIVIA: "BO",
                    BONAIRE_SINT_EUSTATIUS_SABA: "BQ",
                    BOSNIA_AND_HERZEGOVINA: "BA",
                    BOTSWANA: "BW",
                    BOUVET_ISLAND: "BV",
                    BRAZIL: "BR",
                    BRITISH_INDIAN_OCEAN_TERRITORY: "IO",
                    BRUNEI_DARUSSALAM: "BN",
                    BULGARIA: "BG",
                    BURKINA_FASO: "BF",
                    BURUNDI: "BI",
                    CAMBODIA: "KH",
                    CAMEROON: "CM",
                    CANADA: "CA",
                    CAPE_VERDE: "CV",
                    CAYMAN_ISLANDS: "KY",
                    CENTRAL_AFRICAN_REPUBLIC: "CF",
                    CHAD: "TD",
                    CHILE: "CL",
                    CHINA: "CN",
                    CHRISTMAS_ISLAND: "CX",
                    COCOS_KEELING_ISLANDS: "CC",
                    COLOMBIA: "CO",
                    COMOROS: "KM",
                    CONGO: "CG",
                    CONGO_DEMOCRATIC_REPUBLIC: "CD",
                    COOK_ISLANDS: "CK",
                    COSTA_RICA: "CR",
                    COTE_D_IVOIRE: "CI",
                    CROATIA: "HR",
                    CUBA: "CU",
                    CURACAO: "CW",
                    CYPRUS: "CY",
                    CZECH_REPUBLIC: "CZ",
                    DENMARK: "DK",
                    DJIBOUTI: "DJ",
                    DOMINICA: "DM",
                    DOMINICAN_REPUBLIC: "DO",
                    ECUADOR: "EC",
                    EGYPT: "EG",
                    EL_SALVADOR: "SV",
                    EQUATORIAL_GUINEA: "GQ",
                    ERITREA: "ER",
                    ESTONIA: "EE",
                    ETHIOPIA: "ET",
                    FALKLAND_ISLANDS: "FK",
                    FAROE_ISLANDS: "FO",
                    FIJI: "FJ",
                    FINLAND: "FI",
                    FRANCE: "FR",
                    FRENCH_GUIANA: "GF",
                    FRENCH_POLYNESIA: "PF",
                    FRENCH_SOUTHERN_TERRITORIES: "TF",
                    GABON: "GA",
                    GAMBIA: "GM",
                    GEORGIA: "GE",
                    GERMANY: "DE",
                    GHANA: "GH",
                    GIBRALTAR: "GI",
                    GREECE: "GR",
                    GREENLAND: "GL",
                    GRENADA: "GD",
                    GUADELOUPE: "GP",
                    GUAM: "GU",
                    GUATEMALA: "GT",
                    GUERNSEY: "GG",
                    GUINEA: "GN",
                    GUINEA_BISSAU: "GW",
                    GUYANA: "GY",
                    HAITI: "HT",
                    HEARD_ISLAND_MCDONALD_ISLANDS: "HM",
                    HOLY_SEE_VATICAN_CITY_STATE: "VA",
                    HONDURAS: "HN",
                    HONG_KONG: "HK",
                    HUNGARY: "HU",
                    ICELAND: "IS",
                    INDIA: "IN",
                    INDONESIA: "ID",
                    IRAN: "IR",
                    IRAQ: "IQ",
                    IRELAND: "IE",
                    ISLE_OF_MAN: "IM",
                    ISRAEL: "IL",
                    ITALY: "IT",
                    JAMAICA: "JM",
                    JAPAN: "JP",
                    JERSEY: "JE",
                    JORDAN: "JO",
                    KAZAKHSTAN: "KZ",
                    KENYA: "KE",
                    KIRIBATI: "KI",
                    KOREA: "KR",
                    KOREA_DEMOCRATIC_PEOPLES_REPUBLIC: "KP",
                    KUWAIT: "KW",
                    KYRGYZSTAN: "KG",
                    LAO_PEOPLES_DEMOCRATIC_REPUBLIC: "LA",
                    LATVIA: "LV",
                    LEBANON: "LB",
                    LESOTHO: "LS",
                    LIBERIA: "LR",
                    LIBYAN_ARAB_JAMAHIRIYA: "LY",
                    LIECHTENSTEIN: "LI",
                    LITHUANIA: "LT",
                    LUXEMBOURG: "LU",
                    MACAO: "MO",
                    MACEDONIA: "MK",
                    MADAGASCAR: "MG",
                    MALAWI: "MW",
                    MALAYSIA: "MY",
                    MALDIVES: "MV",
                    MALI: "ML",
                    MALTA: "MT",
                    MARSHALL_ISLANDS: "MH",
                    MARTINIQUE: "MQ",
                    MAURITANIA: "MR",
                    MAURITIUS: "MU",
                    MAYOTTE: "YT",
                    MEXICO: "MX",
                    MICRONESIA: "FM",
                    MOLDOVA: "MD",
                    MONACO: "MC",
                    MONGOLIA: "MN",
                    MONTENEGRO: "ME",
                    MONTSERRAT: "MS",
                    MOROCCO: "MA",
                    MOZAMBIQUE: "MZ",
                    MYANMAR: "MM",
                    NAMIBIA: "NA",
                    NAURU: "NR",
                    NEPAL: "NP",
                    NETHERLANDS: "NL",
                    NEW_CALEDONIA: "NC",
                    NEW_ZEALAND: "NZ",
                    NICARAGUA: "NI",
                    NIGER: "NE",
                    NIGERIA: "NG",
                    NIUE: "NU",
                    NORFOLK_ISLAND: "NF",
                    NORTHERN_MARIANA_ISLANDS: "MP",
                    NORWAY: "NO",
                    OMAN: "OM",
                    PAKISTAN: "PK",
                    PALAU: "PW",
                    PALESTINIAN_TERRITORY: "PS",
                    PANAMA: "PA",
                    PAPUA_NEW_GUINEA: "PG",
                    PARAGUAY: "PY",
                    PERU: "PE",
                    PHILIPPINES: "PH",
                    PITCAIRN: "PN",
                    POLAND: "PL",
                    PORTUGAL: "PT",
                    PUERTO_RICO: "PR",
                    QATAR: "QA",
                    REUNION: "RE",
                    ROMANIA: "RO",
                    RUSSIAN_FEDERATION: "RU",
                    RWANDA: "RW",
                    SAINT_BARTHELEMY: "BL",
                    SAINT_HELENA: "SH",
                    SAINT_KITTS_AND_NEVIS: "KN",
                    SAINT_LUCIA: "LC",
                    SAINT_MARTIN: "MF",
                    SAINT_PIERRE_AND_MIQUELON: "PM",
                    SAINT_VINCENT_AND_GRENADINES: "VC",
                    SAMOA: "WS",
                    SAN_MARINO: "SM",
                    SAO_TOME_AND_PRINCIPE: "ST",
                    SAUDI_ARABIA: "SA",
                    SENEGAL: "SN",
                    SERBIA: "RS",
                    SEYCHELLES: "SC",
                    SIERRA_LEONE: "SL",
                    SINGAPORE: "SG",
                    SINT_MAARTEN: "SX",
                    SLOVAKIA: "SK",
                    SLOVENIA: "SI",
                    SOLOMON_ISLANDS: "SB",
                    SOMALIA: "SO",
                    SOUTH_AFRICA: "ZA",
                    SOUTH_GEORGIA_AND_SANDWICH_ISL: "GS",
                    SOUTH_SUDAN: "SS",
                    SPAIN: "ES",
                    SRI_LANKA: "LK",
                    SUDAN: "SD",
                    SURINAME: "SR",
                    SVALBARD_AND_JAN_MAYEN: "SJ",
                    SWAZILAND: "SZ",
                    SWEDEN: "SE",
                    SWITZERLAND: "CH",
                    SYRIAN_ARAB_REPUBLIC: "SY",
                    TAIWAN: "TW",
                    TAJIKISTAN: "TJ",
                    TANZANIA: "TZ",
                    THAILAND: "TH",
                    TIMOR_LESTE: "TL",
                    TOGO: "TG",
                    TOKELAU: "TK",
                    TONGA: "TO",
                    TRINIDAD_AND_TOBAGO: "TT",
                    TUNISIA: "TN",
                    TURKEY: "TR",
                    TURKMENISTAN: "TM",
                    TURKS_AND_CAICOS_ISLANDS: "TC",
                    TUVALU: "TV",
                    UGANDA: "UG",
                    UKRAINE: "UA",
                    UNITED_ARAB_EMIRATES: "AE",
                    UNITED_KINGDOM: "GB",
                    UNITED_STATES: "US",
                    UNITED_STATES_OUTLYING_ISLANDS: "UM",
                    URUGUAY: "UY",
                    UZBEKISTAN: "UZ",
                    VANUATU: "VU",
                    VENEZUELA: "VE",
                    VIETNAM: "VN",
                    VIRGIN_ISLANDS_BRITISH: "VG",
                    VIRGIN_ISLANDS_US: "VI",
                    WALLIS_AND_FUTUNA: "WF",
                    WESTERN_SAHARA: "EH",
                    YEMEN: "YE",
                    ZAMBIA: "ZM",
                    ZIMBABWE: "ZW"
                };

            function t5(e) {
                let {
                    country: t
                } = e;
                return t9.includes(t)
            }

            function t7(e) {
                let {
                    country: t
                } = e;
                return t3[t]
            }

            function t6(e) {
                let {
                    country: t
                } = e;
                return t.split("_").map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ")
            }(V = $ || ($ = {})).assertEqual = e => e, V.assertIs = function(e) {}, V.assertNever = function(e) {
                throw Error()
            }, V.arrayToEnum = e => {
                let t = {};
                for (let n of e) t[n] = n;
                return t
            }, V.getValidEnumValues = e => {
                let t = V.objectKeys(e).filter(t => "number" != typeof e[e[t]]),
                    n = {};
                for (let a of t) n[a] = e[a];
                return V.objectValues(n)
            }, V.objectValues = e => V.objectKeys(e).map(function(t) {
                return e[t]
            }), V.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
                let t = [];
                for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }, V.find = (e, t) => {
                for (let n of e)
                    if (t(n)) return n
            }, V.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e, V.joinValues = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
                return e.map(e => "string" == typeof e ? "'".concat(e, "'") : e).join(t)
            }, V.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t, (ee || (ee = {})).mergeShapes = (e, t) => ({ ...e,
                ...t
            });
            var t8 = $.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
                ne = e => {
                    switch (typeof e) {
                        case "undefined":
                            return t8.undefined;
                        case "string":
                            return t8.string;
                        case "number":
                            return isNaN(e) ? t8.nan : t8.number;
                        case "boolean":
                            return t8.boolean;
                        case "function":
                            return t8.function;
                        case "bigint":
                            return t8.bigint;
                        case "symbol":
                            return t8.symbol;
                        case "object":
                            if (Array.isArray(e)) return t8.array;
                            if (null === e) return t8.null;
                            if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch) return t8.promise;
                            if ("undefined" != typeof Map && e instanceof Map) return t8.map;
                            if ("undefined" != typeof Set && e instanceof Set) return t8.set;
                            if ("undefined" != typeof Date && e instanceof Date) return t8.date;
                            return t8.object;
                        default:
                            return t8.unknown
                    }
                },
                nt = $.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]),
                nn = class e extends Error {
                    get errors() {
                        return this.issues
                    }
                    format(e) {
                        let t = e || function(e) {
                                return e.message
                            },
                            n = {
                                _errors: []
                            },
                            a = e => {
                                for (let o of e.issues)
                                    if ("invalid_union" === o.code) o.unionErrors.map(a);
                                    else if ("invalid_return_type" === o.code) a(o.returnTypeError);
                                else if ("invalid_arguments" === o.code) a(o.argumentsError);
                                else if (0 === o.path.length) n._errors.push(t(o));
                                else {
                                    let e = n,
                                        a = 0;
                                    for (; a < o.path.length;) {
                                        let n = o.path[a];
                                        a === o.path.length - 1 ? (e[n] = e[n] || {
                                            _errors: []
                                        }, e[n]._errors.push(t(o))) : e[n] = e[n] || {
                                            _errors: []
                                        }, e = e[n], a++
                                    }
                                }
                            };
                        return a(this), n
                    }
                    static assert(t) {
                        if (!(t instanceof e)) throw Error("Not a ZodError: ".concat(t))
                    }
                    toString() {
                        return this.message
                    }
                    get message() {
                        return JSON.stringify(this.issues, $.jsonStringifyReplacer, 2)
                    }
                    get isEmpty() {
                        return 0 === this.issues.length
                    }
                    flatten() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e => e.message,
                            t = {},
                            n = [];
                        for (let a of this.issues) a.path.length > 0 ? (t[a.path[0]] = t[a.path[0]] || [], t[a.path[0]].push(e(a))) : n.push(e(a));
                        return {
                            formErrors: n,
                            fieldErrors: t
                        }
                    }
                    get formErrors() {
                        return this.flatten()
                    }
                    constructor(e) {
                        var t;
                        super(), t = this, this.issues = [], this.addIssue = e => {
                            this.issues = [...this.issues, e]
                        }, this.addIssues = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            t.issues = [...t.issues, ...e]
                        };
                        let n = new.target.prototype;
                        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = e
                    }
                };
            nn.create = e => new nn(e);
            var na = (e, t) => {
                    let n;
                    switch (e.code) {
                        case nt.invalid_type:
                            n = e.received === t8.undefined ? "Required" : "Expected ".concat(e.expected, ", received ").concat(e.received);
                            break;
                        case nt.invalid_literal:
                            n = "Invalid literal value, expected ".concat(JSON.stringify(e.expected, $.jsonStringifyReplacer));
                            break;
                        case nt.unrecognized_keys:
                            n = "Unrecognized key(s) in object: ".concat($.joinValues(e.keys, ", "));
                            break;
                        case nt.invalid_union:
                            n = "Invalid input";
                            break;
                        case nt.invalid_union_discriminator:
                            n = "Invalid discriminator value. Expected ".concat($.joinValues(e.options));
                            break;
                        case nt.invalid_enum_value:
                            n = "Invalid enum value. Expected ".concat($.joinValues(e.options), ", received '").concat(e.received, "'");
                            break;
                        case nt.invalid_arguments:
                            n = "Invalid function arguments";
                            break;
                        case nt.invalid_return_type:
                            n = "Invalid function return type";
                            break;
                        case nt.invalid_date:
                            n = "Invalid date";
                            break;
                        case nt.invalid_string:
                            "object" == typeof e.validation ? "includes" in e.validation ? (n = 'Invalid input: must include "'.concat(e.validation.includes, '"'), "number" == typeof e.validation.position && (n = "".concat(n, " at one or more positions greater than or equal to ").concat(e.validation.position))) : "startsWith" in e.validation ? n = 'Invalid input: must start with "'.concat(e.validation.startsWith, '"') : "endsWith" in e.validation ? n = 'Invalid input: must end with "'.concat(e.validation.endsWith, '"') : $.assertNever(e.validation) : n = "regex" !== e.validation ? "Invalid ".concat(e.validation) : "Invalid";
                            break;
                        case nt.too_small:
                            n = "array" === e.type ? "Array must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at least" : "more than", " ").concat(e.minimum, " element(s)") : "string" === e.type ? "String must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at least" : "over", " ").concat(e.minimum, " character(s)") : "number" === e.type ? "Number must be ".concat(e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than ").concat(e.minimum) : "date" === e.type ? "Date must be ".concat(e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than ").concat(new Date(Number(e.minimum))) : "Invalid input";
                            break;
                        case nt.too_big:
                            n = "array" === e.type ? "Array must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at most" : "less than", " ").concat(e.maximum, " element(s)") : "string" === e.type ? "String must contain ".concat(e.exact ? "exactly" : e.inclusive ? "at most" : "under", " ").concat(e.maximum, " character(s)") : "number" === e.type ? "Number must be ".concat(e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than", " ").concat(e.maximum) : "bigint" === e.type ? "BigInt must be ".concat(e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than", " ").concat(e.maximum) : "date" === e.type ? "Date must be ".concat(e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than", " ").concat(new Date(Number(e.maximum))) : "Invalid input";
                            break;
                        case nt.custom:
                            n = "Invalid input";
                            break;
                        case nt.invalid_intersection_types:
                            n = "Intersection results could not be merged";
                            break;
                        case nt.not_multiple_of:
                            n = "Number must be a multiple of ".concat(e.multipleOf);
                            break;
                        case nt.not_finite:
                            n = "Number must be finite";
                            break;
                        default:
                            n = t.defaultError, $.assertNever(e)
                    }
                    return {
                        message: n
                    }
                },
                no = na;

            function nr() {
                return no
            }
            var ni = e => {
                let {
                    data: t,
                    path: n,
                    errorMaps: a,
                    issueData: o
                } = e, r = [...n, ...o.path || []], i = { ...o,
                    path: r
                };
                if (void 0 !== o.message) return { ...o,
                    path: r,
                    message: o.message
                };
                let s = "";
                for (let e of a.filter(e => !!e).slice().reverse()) s = e(i, {
                    data: t,
                    defaultError: s
                }).message;
                return { ...o,
                    path: r,
                    message: s
                }
            };

            function ns(e, t) {
                let n = nr(),
                    a = ni({
                        issueData: t,
                        data: e.data,
                        path: e.path,
                        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === na ? void 0 : na].filter(e => !!e)
                    });
                e.common.issues.push(a)
            }
            var nl = class e {
                    dirty() {
                        "valid" === this.value && (this.value = "dirty")
                    }
                    abort() {
                        "aborted" !== this.value && (this.value = "aborted")
                    }
                    static mergeArray(e, t) {
                        let n = [];
                        for (let a of t) {
                            if ("aborted" === a.status) return nc;
                            "dirty" === a.status && e.dirty(), n.push(a.value)
                        }
                        return {
                            status: e.value,
                            value: n
                        }
                    }
                    static async mergeObjectAsync(t, n) {
                        let a = [];
                        for (let e of n) {
                            let t = await e.key,
                                n = await e.value;
                            a.push({
                                key: t,
                                value: n
                            })
                        }
                        return e.mergeObjectSync(t, a)
                    }
                    static mergeObjectSync(e, t) {
                        let n = {};
                        for (let a of t) {
                            let {
                                key: t,
                                value: o
                            } = a;
                            if ("aborted" === t.status || "aborted" === o.status) return nc;
                            "dirty" === t.status && e.dirty(), "dirty" === o.status && e.dirty(), "__proto__" !== t.value && (void 0 !== o.value || a.alwaysSet) && (n[t.value] = o.value)
                        }
                        return {
                            status: e.value,
                            value: n
                        }
                    }
                    constructor() {
                        this.value = "valid"
                    }
                },
                nc = Object.freeze({
                    status: "aborted"
                }),
                nd = e => ({
                    status: "dirty",
                    value: e
                }),
                nu = e => ({
                    status: "valid",
                    value: e
                }),
                np = e => "aborted" === e.status,
                nA = e => "dirty" === e.status,
                nm = e => "valid" === e.status,
                nE = e => "undefined" != typeof Promise && e instanceof Promise;

            function n_(e, t, n, a) {
                if ("a" === n && !a) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !a : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? a : "a" === n ? a.call(e) : a ? a.value : t.get(e)
            }

            function nT(e, t, n, a, o) {
                if ("m" === a) throw TypeError("Private method is not writable");
                if ("a" === a && !o) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === a ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
            }(Y = et || (et = {})).errToObj = e => "string" == typeof e ? {
                message: e
            } : e || {}, Y.toString = e => "string" == typeof e ? e : null == e ? void 0 : e.message;
            var nN = class {
                    get path() {
                        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
                    }
                    constructor(e, t, n, a) {
                        this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = a
                    }
                },
                nh = (e, t) => {
                    if (nm(t)) return {
                        success: !0,
                        data: t.value
                    };
                    if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
                    return {
                        success: !1,
                        get error() {
                            if (this._error) return this._error;
                            let t = new nn(e.common.issues);
                            return this._error = t, this._error
                        }
                    }
                };

            function nI(e) {
                if (!e) return {};
                let {
                    errorMap: t,
                    invalid_type_error: n,
                    required_error: a,
                    description: o
                } = e;
                if (t && (n || a)) throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
                return t ? {
                    errorMap: t,
                    description: o
                } : {
                    errorMap: (t, o) => {
                        var r, i;
                        let {
                            message: s
                        } = e;
                        return "invalid_enum_value" === t.code ? {
                            message: null != s ? s : o.defaultError
                        } : void 0 === o.data ? {
                            message: null !== (r = null != s ? s : a) && void 0 !== r ? r : o.defaultError
                        } : "invalid_type" !== t.code ? {
                            message: o.defaultError
                        } : {
                            message: null !== (i = null != s ? s : n) && void 0 !== i ? i : o.defaultError
                        }
                    },
                    description: o
                }
            }
            var nS = class {
                    get description() {
                        return this._def.description
                    }
                    _getType(e) {
                        return ne(e.data)
                    }
                    _getOrReturnCtx(e, t) {
                        return t || {
                            common: e.parent.common,
                            data: e.data,
                            parsedType: ne(e.data),
                            schemaErrorMap: this._def.errorMap,
                            path: e.path,
                            parent: e.parent
                        }
                    }
                    _processInputParams(e) {
                        return {
                            status: new nl,
                            ctx: {
                                common: e.parent.common,
                                data: e.data,
                                parsedType: ne(e.data),
                                schemaErrorMap: this._def.errorMap,
                                path: e.path,
                                parent: e.parent
                            }
                        }
                    }
                    _parseSync(e) {
                        let t = this._parse(e);
                        if (nE(t)) throw Error("Synchronous parse encountered promise.");
                        return t
                    }
                    _parseAsync(e) {
                        return Promise.resolve(this._parse(e))
                    }
                    parse(e, t) {
                        let n = this.safeParse(e, t);
                        if (n.success) return n.data;
                        throw n.error
                    }
                    safeParse(e, t) {
                        var n;
                        let a = {
                                common: {
                                    issues: [],
                                    async: null !== (n = null == t ? void 0 : t.async) && void 0 !== n && n,
                                    contextualErrorMap: null == t ? void 0 : t.errorMap
                                },
                                path: (null == t ? void 0 : t.path) || [],
                                schemaErrorMap: this._def.errorMap,
                                parent: null,
                                data: e,
                                parsedType: ne(e)
                            },
                            o = this._parseSync({
                                data: e,
                                path: a.path,
                                parent: a
                            });
                        return nh(a, o)
                    }
                    "~validate" (e) {
                        var t, n;
                        let a = {
                            common: {
                                issues: [],
                                async: !!this["~standard"].async
                            },
                            path: [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: e,
                            parsedType: ne(e)
                        };
                        if (!this["~standard"].async) try {
                            let t = this._parseSync({
                                data: e,
                                path: [],
                                parent: a
                            });
                            return nm(t) ? {
                                value: t.value
                            } : {
                                issues: a.common.issues
                            }
                        } catch (e) {
                            (null === (n = null === (t = null == e ? void 0 : e.message) || void 0 === t ? void 0 : t.toLowerCase()) || void 0 === n ? void 0 : n.includes("encountered")) && (this["~standard"].async = !0), a.common = {
                                issues: [],
                                async: !0
                            }
                        }
                        return this._parseAsync({
                            data: e,
                            path: [],
                            parent: a
                        }).then(e => nm(e) ? {
                            value: e.value
                        } : {
                            issues: a.common.issues
                        })
                    }
                    async parseAsync(e, t) {
                        let n = await this.safeParseAsync(e, t);
                        if (n.success) return n.data;
                        throw n.error
                    }
                    async safeParseAsync(e, t) {
                        let n = {
                                common: {
                                    issues: [],
                                    contextualErrorMap: null == t ? void 0 : t.errorMap,
                                    async: !0
                                },
                                path: (null == t ? void 0 : t.path) || [],
                                schemaErrorMap: this._def.errorMap,
                                parent: null,
                                data: e,
                                parsedType: ne(e)
                            },
                            a = this._parse({
                                data: e,
                                path: n.path,
                                parent: n
                            });
                        return nh(n, await (nE(a) ? a : Promise.resolve(a)))
                    }
                    refine(e, t) {
                        let n = e => "string" == typeof t || void 0 === t ? {
                            message: t
                        } : "function" == typeof t ? t(e) : t;
                        return this._refinement((t, a) => {
                            let o = e(t),
                                r = () => a.addIssue({
                                    code: nt.custom,
                                    ...n(t)
                                });
                            return "undefined" != typeof Promise && o instanceof Promise ? o.then(e => !!e || (r(), !1)) : !!o || (r(), !1)
                        })
                    }
                    refinement(e, t) {
                        return this._refinement((n, a) => !!e(n) || (a.addIssue("function" == typeof t ? t(n, a) : t), !1))
                    }
                    _refinement(e) {
                        return new ar({
                            schema: this,
                            typeName: er.ZodEffects,
                            effect: {
                                type: "refinement",
                                refinement: e
                            }
                        })
                    }
                    superRefine(e) {
                        return this._refinement(e)
                    }
                    optional() {
                        return ai.create(this, this._def)
                    }
                    nullable() {
                        return as.create(this, this._def)
                    }
                    nullish() {
                        return this.nullable().optional()
                    }
                    array() {
                        return nq.create(this)
                    }
                    promise() {
                        return ao.create(this, this._def)
                    }
                    or(e) {
                        return n0.create([this, e], this._def)
                    }
                    and(e) {
                        return n4.create(this, e, this._def)
                    }
                    transform(e) {
                        return new ar({ ...nI(this._def),
                            schema: this,
                            typeName: er.ZodEffects,
                            effect: {
                                type: "transform",
                                transform: e
                            }
                        })
                    }
                    default (e) {
                        return new al({ ...nI(this._def),
                            innerType: this,
                            defaultValue: "function" == typeof e ? e : () => e,
                            typeName: er.ZodDefault
                        })
                    }
                    brand() {
                        return new ap({
                            typeName: er.ZodBranded,
                            type: this,
                            ...nI(this._def)
                        })
                    } catch (e) {
                        return new ac({ ...nI(this._def),
                            innerType: this,
                            catchValue: "function" == typeof e ? e : () => e,
                            typeName: er.ZodCatch
                        })
                    }
                    describe(e) {
                        return new this.constructor({ ...this._def,
                            description: e
                        })
                    }
                    pipe(e) {
                        return aA.create(this, e)
                    }
                    readonly() {
                        return am.create(this)
                    }
                    isOptional() {
                        return this.safeParse(void 0).success
                    }
                    isNullable() {
                        return this.safeParse(null).success
                    }
                    constructor(e) {
                        this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
                            version: 1,
                            vendor: "zod",
                            validate: e => this["~validate"](e)
                        }
                    }
                },
                nC = /^c[^\s-]{8,}$/i,
                nO = /^[0-9a-z]+$/,
                nR = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
                ng = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
                nf = /^[a-z0-9_-]{21}$/i,
                nP = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
                nM = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
                nL = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
                nb = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
                ny = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
                nv = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
                nD = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
                nU = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
                nG = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
                nH = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
                nk = new RegExp("^".concat(nH, "$"));

            function nB(e) {
                let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
                return e.precision ? t = "".concat(t, "\\.\\d{").concat(e.precision, "}") : null == e.precision && (t = "".concat(t, "(\\.\\d+)?")), t
            }

            function nx(e) {
                let t = "".concat(nH, "T").concat(nB(e)),
                    n = [];
                return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = "".concat(t, "(").concat(n.join("|"), ")"), new RegExp("^".concat(t, "$"))
            }
            var nw = class e extends nS {
                _parse(e) {
                    var t, n, a, o;
                    let r;
                    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== t8.string) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.string,
                            received: t.parsedType
                        }), nc
                    }
                    let i = new nl;
                    for (let s of this._def.checks)
                        if ("min" === s.kind) e.data.length < s.value && (ns(r = this._getOrReturnCtx(e, r), {
                            code: nt.too_small,
                            minimum: s.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: s.message
                        }), i.dirty());
                        else if ("max" === s.kind) e.data.length > s.value && (ns(r = this._getOrReturnCtx(e, r), {
                        code: nt.too_big,
                        maximum: s.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: s.message
                    }), i.dirty());
                    else if ("length" === s.kind) {
                        let t = e.data.length > s.value,
                            n = e.data.length < s.value;
                        (t || n) && (r = this._getOrReturnCtx(e, r), t ? ns(r, {
                            code: nt.too_big,
                            maximum: s.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: s.message
                        }) : n && ns(r, {
                            code: nt.too_small,
                            minimum: s.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: s.message
                        }), i.dirty())
                    } else if ("email" === s.kind) nL.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "email",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty());
                    else if ("emoji" === s.kind) eo || (eo = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), eo.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "emoji",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty());
                    else if ("uuid" === s.kind) ng.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "uuid",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty());
                    else if ("nanoid" === s.kind) nf.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "nanoid",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty());
                    else if ("cuid" === s.kind) nC.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "cuid",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty());
                    else if ("cuid2" === s.kind) nO.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "cuid2",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty());
                    else if ("ulid" === s.kind) nR.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "ulid",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty());
                    else if ("url" === s.kind) try {
                        new URL(e.data)
                    } catch (t) {
                        ns(r = this._getOrReturnCtx(e, r), {
                            validation: "url",
                            code: nt.invalid_string,
                            message: s.message
                        }), i.dirty()
                    } else "regex" === s.kind ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "regex",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty())) : "trim" === s.kind ? e.data = e.data.trim() : "includes" === s.kind ? e.data.includes(s.value, s.position) || (ns(r = this._getOrReturnCtx(e, r), {
                        code: nt.invalid_string,
                        validation: {
                            includes: s.value,
                            position: s.position
                        },
                        message: s.message
                    }), i.dirty()) : "toLowerCase" === s.kind ? e.data = e.data.toLowerCase() : "toUpperCase" === s.kind ? e.data = e.data.toUpperCase() : "startsWith" === s.kind ? e.data.startsWith(s.value) || (ns(r = this._getOrReturnCtx(e, r), {
                        code: nt.invalid_string,
                        validation: {
                            startsWith: s.value
                        },
                        message: s.message
                    }), i.dirty()) : "endsWith" === s.kind ? e.data.endsWith(s.value) || (ns(r = this._getOrReturnCtx(e, r), {
                        code: nt.invalid_string,
                        validation: {
                            endsWith: s.value
                        },
                        message: s.message
                    }), i.dirty()) : "datetime" === s.kind ? nx(s).test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        code: nt.invalid_string,
                        validation: "datetime",
                        message: s.message
                    }), i.dirty()) : "date" === s.kind ? nk.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        code: nt.invalid_string,
                        validation: "date",
                        message: s.message
                    }), i.dirty()) : "time" === s.kind ? new RegExp("^".concat(nB(s), "$")).test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        code: nt.invalid_string,
                        validation: "time",
                        message: s.message
                    }), i.dirty()) : "duration" === s.kind ? nM.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "duration",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty()) : "ip" === s.kind ? (t = e.data, ("v4" === (n = s.version) || !n) && nb.test(t) || ("v6" === n || !n) && nv.test(t) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "ip",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty())) : "jwt" === s.kind ? ! function(e, t) {
                        if (!nP.test(e)) return !1;
                        try {
                            let [n] = e.split("."), a = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "="), o = JSON.parse(atob(a));
                            if ("object" != typeof o || null === o || !o.typ || !o.alg || t && o.alg !== t) return !1;
                            return !0
                        } catch (e) {
                            return !1
                        }
                    }(e.data, s.alg) && (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "jwt",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty()) : "cidr" === s.kind ? (a = e.data, ("v4" === (o = s.version) || !o) && ny.test(a) || ("v6" === o || !o) && nD.test(a) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "cidr",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty())) : "base64" === s.kind ? nU.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "base64",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty()) : "base64url" === s.kind ? nG.test(e.data) || (ns(r = this._getOrReturnCtx(e, r), {
                        validation: "base64url",
                        code: nt.invalid_string,
                        message: s.message
                    }), i.dirty()) : $.assertNever(s);
                    return {
                        status: i.value,
                        value: e.data
                    }
                }
                _regex(e, t, n) {
                    return this.refinement(t => e.test(t), {
                        validation: t,
                        code: nt.invalid_string,
                        ...et.errToObj(n)
                    })
                }
                _addCheck(t) {
                    return new e({ ...this._def,
                        checks: [...this._def.checks, t]
                    })
                }
                email(e) {
                    return this._addCheck({
                        kind: "email",
                        ...et.errToObj(e)
                    })
                }
                url(e) {
                    return this._addCheck({
                        kind: "url",
                        ...et.errToObj(e)
                    })
                }
                emoji(e) {
                    return this._addCheck({
                        kind: "emoji",
                        ...et.errToObj(e)
                    })
                }
                uuid(e) {
                    return this._addCheck({
                        kind: "uuid",
                        ...et.errToObj(e)
                    })
                }
                nanoid(e) {
                    return this._addCheck({
                        kind: "nanoid",
                        ...et.errToObj(e)
                    })
                }
                cuid(e) {
                    return this._addCheck({
                        kind: "cuid",
                        ...et.errToObj(e)
                    })
                }
                cuid2(e) {
                    return this._addCheck({
                        kind: "cuid2",
                        ...et.errToObj(e)
                    })
                }
                ulid(e) {
                    return this._addCheck({
                        kind: "ulid",
                        ...et.errToObj(e)
                    })
                }
                base64(e) {
                    return this._addCheck({
                        kind: "base64",
                        ...et.errToObj(e)
                    })
                }
                base64url(e) {
                    return this._addCheck({
                        kind: "base64url",
                        ...et.errToObj(e)
                    })
                }
                jwt(e) {
                    return this._addCheck({
                        kind: "jwt",
                        ...et.errToObj(e)
                    })
                }
                ip(e) {
                    return this._addCheck({
                        kind: "ip",
                        ...et.errToObj(e)
                    })
                }
                cidr(e) {
                    return this._addCheck({
                        kind: "cidr",
                        ...et.errToObj(e)
                    })
                }
                datetime(e) {
                    var t, n;
                    return "string" == typeof e ? this._addCheck({
                        kind: "datetime",
                        precision: null,
                        offset: !1,
                        local: !1,
                        message: e
                    }) : this._addCheck({
                        kind: "datetime",
                        precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                        offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
                        local: null !== (n = null == e ? void 0 : e.local) && void 0 !== n && n,
                        ...et.errToObj(null == e ? void 0 : e.message)
                    })
                }
                date(e) {
                    return this._addCheck({
                        kind: "date",
                        message: e
                    })
                }
                time(e) {
                    return "string" == typeof e ? this._addCheck({
                        kind: "time",
                        precision: null,
                        message: e
                    }) : this._addCheck({
                        kind: "time",
                        precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                        ...et.errToObj(null == e ? void 0 : e.message)
                    })
                }
                duration(e) {
                    return this._addCheck({
                        kind: "duration",
                        ...et.errToObj(e)
                    })
                }
                regex(e, t) {
                    return this._addCheck({
                        kind: "regex",
                        regex: e,
                        ...et.errToObj(t)
                    })
                }
                includes(e, t) {
                    return this._addCheck({
                        kind: "includes",
                        value: e,
                        position: null == t ? void 0 : t.position,
                        ...et.errToObj(null == t ? void 0 : t.message)
                    })
                }
                startsWith(e, t) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: e,
                        ...et.errToObj(t)
                    })
                }
                endsWith(e, t) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: e,
                        ...et.errToObj(t)
                    })
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e,
                        ...et.errToObj(t)
                    })
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e,
                        ...et.errToObj(t)
                    })
                }
                length(e, t) {
                    return this._addCheck({
                        kind: "length",
                        value: e,
                        ...et.errToObj(t)
                    })
                }
                nonempty(e) {
                    return this.min(1, et.errToObj(e))
                }
                trim() {
                    return new e({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "trim"
                        }]
                    })
                }
                toLowerCase() {
                    return new e({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toLowerCase"
                        }]
                    })
                }
                toUpperCase() {
                    return new e({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toUpperCase"
                        }]
                    })
                }
                get isDatetime() {
                    return !!this._def.checks.find(e => "datetime" === e.kind)
                }
                get isDate() {
                    return !!this._def.checks.find(e => "date" === e.kind)
                }
                get isTime() {
                    return !!this._def.checks.find(e => "time" === e.kind)
                }
                get isDuration() {
                    return !!this._def.checks.find(e => "duration" === e.kind)
                }
                get isEmail() {
                    return !!this._def.checks.find(e => "email" === e.kind)
                }
                get isURL() {
                    return !!this._def.checks.find(e => "url" === e.kind)
                }
                get isEmoji() {
                    return !!this._def.checks.find(e => "emoji" === e.kind)
                }
                get isUUID() {
                    return !!this._def.checks.find(e => "uuid" === e.kind)
                }
                get isNANOID() {
                    return !!this._def.checks.find(e => "nanoid" === e.kind)
                }
                get isCUID() {
                    return !!this._def.checks.find(e => "cuid" === e.kind)
                }
                get isCUID2() {
                    return !!this._def.checks.find(e => "cuid2" === e.kind)
                }
                get isULID() {
                    return !!this._def.checks.find(e => "ulid" === e.kind)
                }
                get isIP() {
                    return !!this._def.checks.find(e => "ip" === e.kind)
                }
                get isCIDR() {
                    return !!this._def.checks.find(e => "cidr" === e.kind)
                }
                get isBase64() {
                    return !!this._def.checks.find(e => "base64" === e.kind)
                }
                get isBase64url() {
                    return !!this._def.checks.find(e => "base64url" === e.kind)
                }
                get minLength() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxLength() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
            };
            nw.create = e => {
                var t;
                return new nw({
                    checks: [],
                    typeName: er.ZodString,
                    coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                    ...nI(e)
                })
            };
            var nF = class e extends nS {
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== t8.number) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.number,
                            received: t.parsedType
                        }), nc
                    }
                    let n = new nl;
                    for (let a of this._def.checks) "int" === a.kind ? $.isInteger(e.data) || (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: a.message
                    }), n.dirty()) : "min" === a.kind ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.too_small,
                        minimum: a.value,
                        type: "number",
                        inclusive: a.inclusive,
                        exact: !1,
                        message: a.message
                    }), n.dirty()) : "max" === a.kind ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.too_big,
                        maximum: a.value,
                        type: "number",
                        inclusive: a.inclusive,
                        exact: !1,
                        message: a.message
                    }), n.dirty()) : "multipleOf" === a.kind ? 0 !== function(e, t) {
                        let n = (e.toString().split(".")[1] || "").length,
                            a = (t.toString().split(".")[1] || "").length,
                            o = n > a ? n : a;
                        return parseInt(e.toFixed(o).replace(".", "")) % parseInt(t.toFixed(o).replace(".", "")) / Math.pow(10, o)
                    }(e.data, a.value) && (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.not_multiple_of,
                        multipleOf: a.value,
                        message: a.message
                    }), n.dirty()) : "finite" === a.kind ? Number.isFinite(e.data) || (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.not_finite,
                        message: a.message
                    }), n.dirty()) : $.assertNever(a);
                    return {
                        status: n.value,
                        value: e.data
                    }
                }
                gte(e, t) {
                    return this.setLimit("min", e, !0, et.toString(t))
                }
                gt(e, t) {
                    return this.setLimit("min", e, !1, et.toString(t))
                }
                lte(e, t) {
                    return this.setLimit("max", e, !0, et.toString(t))
                }
                lt(e, t) {
                    return this.setLimit("max", e, !1, et.toString(t))
                }
                setLimit(t, n, a, o) {
                    return new e({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: t,
                            value: n,
                            inclusive: a,
                            message: et.toString(o)
                        }]
                    })
                }
                _addCheck(t) {
                    return new e({ ...this._def,
                        checks: [...this._def.checks, t]
                    })
                }
                int(e) {
                    return this._addCheck({
                        kind: "int",
                        message: et.toString(e)
                    })
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !1,
                        message: et.toString(e)
                    })
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !1,
                        message: et.toString(e)
                    })
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !0,
                        message: et.toString(e)
                    })
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !0,
                        message: et.toString(e)
                    })
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: et.toString(t)
                    })
                }
                finite(e) {
                    return this._addCheck({
                        kind: "finite",
                        message: et.toString(e)
                    })
                }
                safe(e) {
                    return this._addCheck({
                        kind: "min",
                        inclusive: !0,
                        value: Number.MIN_SAFE_INTEGER,
                        message: et.toString(e)
                    })._addCheck({
                        kind: "max",
                        inclusive: !0,
                        value: Number.MAX_SAFE_INTEGER,
                        message: et.toString(e)
                    })
                }
                get minValue() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxValue() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
                get isInt() {
                    return !!this._def.checks.find(e => "int" === e.kind || "multipleOf" === e.kind && $.isInteger(e.value))
                }
                get isFinite() {
                    let e = null,
                        t = null;
                    for (let n of this._def.checks) {
                        if ("finite" === n.kind || "int" === n.kind || "multipleOf" === n.kind) return !0;
                        "min" === n.kind ? (null === t || n.value > t) && (t = n.value) : "max" === n.kind && (null === e || n.value < e) && (e = n.value)
                    }
                    return Number.isFinite(t) && Number.isFinite(e)
                }
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
                }
            };
            nF.create = e => new nF({
                checks: [],
                typeName: er.ZodNumber,
                coerce: (null == e ? void 0 : e.coerce) || !1,
                ...nI(e)
            });
            var nK = class e extends nS {
                _parse(e) {
                    let t;
                    if (this._def.coerce) try {
                        e.data = BigInt(e.data)
                    } catch (t) {
                        return this._getInvalidInput(e)
                    }
                    if (this._getType(e) !== t8.bigint) return this._getInvalidInput(e);
                    let n = new nl;
                    for (let a of this._def.checks) "min" === a.kind ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.too_small,
                        type: "bigint",
                        minimum: a.value,
                        inclusive: a.inclusive,
                        message: a.message
                    }), n.dirty()) : "max" === a.kind ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.too_big,
                        type: "bigint",
                        maximum: a.value,
                        inclusive: a.inclusive,
                        message: a.message
                    }), n.dirty()) : "multipleOf" === a.kind ? e.data % a.value !== BigInt(0) && (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.not_multiple_of,
                        multipleOf: a.value,
                        message: a.message
                    }), n.dirty()) : $.assertNever(a);
                    return {
                        status: n.value,
                        value: e.data
                    }
                }
                _getInvalidInput(e) {
                    let t = this._getOrReturnCtx(e);
                    return ns(t, {
                        code: nt.invalid_type,
                        expected: t8.bigint,
                        received: t.parsedType
                    }), nc
                }
                gte(e, t) {
                    return this.setLimit("min", e, !0, et.toString(t))
                }
                gt(e, t) {
                    return this.setLimit("min", e, !1, et.toString(t))
                }
                lte(e, t) {
                    return this.setLimit("max", e, !0, et.toString(t))
                }
                lt(e, t) {
                    return this.setLimit("max", e, !1, et.toString(t))
                }
                setLimit(t, n, a, o) {
                    return new e({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: t,
                            value: n,
                            inclusive: a,
                            message: et.toString(o)
                        }]
                    })
                }
                _addCheck(t) {
                    return new e({ ...this._def,
                        checks: [...this._def.checks, t]
                    })
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !1,
                        message: et.toString(e)
                    })
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !1,
                        message: et.toString(e)
                    })
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !0,
                        message: et.toString(e)
                    })
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !0,
                        message: et.toString(e)
                    })
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: et.toString(t)
                    })
                }
                get minValue() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxValue() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte
                }
            };
            nK.create = e => {
                var t;
                return new nK({
                    checks: [],
                    typeName: er.ZodBigInt,
                    coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                    ...nI(e)
                })
            };
            var nW = class extends nS {
                _parse(e) {
                    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== t8.boolean) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.boolean,
                            received: t.parsedType
                        }), nc
                    }
                    return nu(e.data)
                }
            };
            nW.create = e => new nW({
                typeName: er.ZodBoolean,
                coerce: (null == e ? void 0 : e.coerce) || !1,
                ...nI(e)
            });
            var nj = class e extends nS {
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== t8.date) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.date,
                            received: t.parsedType
                        }), nc
                    }
                    if (isNaN(e.data.getTime())) return ns(this._getOrReturnCtx(e), {
                        code: nt.invalid_date
                    }), nc;
                    let n = new nl;
                    for (let a of this._def.checks) "min" === a.kind ? e.data.getTime() < a.value && (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.too_small,
                        message: a.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: a.value,
                        type: "date"
                    }), n.dirty()) : "max" === a.kind ? e.data.getTime() > a.value && (ns(t = this._getOrReturnCtx(e, t), {
                        code: nt.too_big,
                        message: a.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: a.value,
                        type: "date"
                    }), n.dirty()) : $.assertNever(a);
                    return {
                        status: n.value,
                        value: new Date(e.data.getTime())
                    }
                }
                _addCheck(t) {
                    return new e({ ...this._def,
                        checks: [...this._def.checks, t]
                    })
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e.getTime(),
                        message: et.toString(t)
                    })
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e.getTime(),
                        message: et.toString(t)
                    })
                }
                get minDate() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return null != e ? new Date(e) : null
                }
                get maxDate() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return null != e ? new Date(e) : null
                }
            };
            nj.create = e => new nj({
                checks: [],
                coerce: (null == e ? void 0 : e.coerce) || !1,
                typeName: er.ZodDate,
                ...nI(e)
            });
            var nZ = class extends nS {
                _parse(e) {
                    if (this._getType(e) !== t8.symbol) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.symbol,
                            received: t.parsedType
                        }), nc
                    }
                    return nu(e.data)
                }
            };
            nZ.create = e => new nZ({
                typeName: er.ZodSymbol,
                ...nI(e)
            });
            var nV = class extends nS {
                _parse(e) {
                    if (this._getType(e) !== t8.undefined) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.undefined,
                            received: t.parsedType
                        }), nc
                    }
                    return nu(e.data)
                }
            };
            nV.create = e => new nV({
                typeName: er.ZodUndefined,
                ...nI(e)
            });
            var nY = class extends nS {
                _parse(e) {
                    if (this._getType(e) !== t8.null) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.null,
                            received: t.parsedType
                        }), nc
                    }
                    return nu(e.data)
                }
            };
            nY.create = e => new nY({
                typeName: er.ZodNull,
                ...nI(e)
            });
            var nz = class extends nS {
                _parse(e) {
                    return nu(e.data)
                }
                constructor() {
                    super(...arguments), this._any = !0
                }
            };
            nz.create = e => new nz({
                typeName: er.ZodAny,
                ...nI(e)
            });
            var nJ = class extends nS {
                _parse(e) {
                    return nu(e.data)
                }
                constructor() {
                    super(...arguments), this._unknown = !0
                }
            };
            nJ.create = e => new nJ({
                typeName: er.ZodUnknown,
                ...nI(e)
            });
            var nX = class extends nS {
                _parse(e) {
                    let t = this._getOrReturnCtx(e);
                    return ns(t, {
                        code: nt.invalid_type,
                        expected: t8.never,
                        received: t.parsedType
                    }), nc
                }
            };
            nX.create = e => new nX({
                typeName: er.ZodNever,
                ...nI(e)
            });
            var nQ = class extends nS {
                _parse(e) {
                    if (this._getType(e) !== t8.undefined) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.void,
                            received: t.parsedType
                        }), nc
                    }
                    return nu(e.data)
                }
            };
            nQ.create = e => new nQ({
                typeName: er.ZodVoid,
                ...nI(e)
            });
            var nq = class e extends nS {
                _parse(e) {
                    let {
                        ctx: t,
                        status: n
                    } = this._processInputParams(e), a = this._def;
                    if (t.parsedType !== t8.array) return ns(t, {
                        code: nt.invalid_type,
                        expected: t8.array,
                        received: t.parsedType
                    }), nc;
                    if (null !== a.exactLength) {
                        let e = t.data.length > a.exactLength.value,
                            o = t.data.length < a.exactLength.value;
                        (e || o) && (ns(t, {
                            code: e ? nt.too_big : nt.too_small,
                            minimum: o ? a.exactLength.value : void 0,
                            maximum: e ? a.exactLength.value : void 0,
                            type: "array",
                            inclusive: !0,
                            exact: !0,
                            message: a.exactLength.message
                        }), n.dirty())
                    }
                    if (null !== a.minLength && t.data.length < a.minLength.value && (ns(t, {
                            code: nt.too_small,
                            minimum: a.minLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: a.minLength.message
                        }), n.dirty()), null !== a.maxLength && t.data.length > a.maxLength.value && (ns(t, {
                            code: nt.too_big,
                            maximum: a.maxLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: a.maxLength.message
                        }), n.dirty()), t.common.async) return Promise.all([...t.data].map((e, n) => a.type._parseAsync(new nN(t, e, t.path, n)))).then(e => nl.mergeArray(n, e));
                    let o = [...t.data].map((e, n) => a.type._parseSync(new nN(t, e, t.path, n)));
                    return nl.mergeArray(n, o)
                }
                get element() {
                    return this._def.type
                }
                min(t, n) {
                    return new e({ ...this._def,
                        minLength: {
                            value: t,
                            message: et.toString(n)
                        }
                    })
                }
                max(t, n) {
                    return new e({ ...this._def,
                        maxLength: {
                            value: t,
                            message: et.toString(n)
                        }
                    })
                }
                length(t, n) {
                    return new e({ ...this._def,
                        exactLength: {
                            value: t,
                            message: et.toString(n)
                        }
                    })
                }
                nonempty(e) {
                    return this.min(1, e)
                }
            };
            nq.create = (e, t) => new nq({
                type: e,
                minLength: null,
                maxLength: null,
                exactLength: null,
                typeName: er.ZodArray,
                ...nI(t)
            });
            var n$ = class e extends nS {
                _getCached() {
                    if (null !== this._cached) return this._cached;
                    let e = this._def.shape(),
                        t = $.objectKeys(e);
                    return this._cached = {
                        shape: e,
                        keys: t
                    }
                }
                _parse(e) {
                    if (this._getType(e) !== t8.object) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.object,
                            received: t.parsedType
                        }), nc
                    }
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e), {
                        shape: a,
                        keys: o
                    } = this._getCached(), r = [];
                    if (!(this._def.catchall instanceof nX && "strip" === this._def.unknownKeys))
                        for (let e in n.data) o.includes(e) || r.push(e);
                    let i = [];
                    for (let e of o) {
                        let t = a[e],
                            o = n.data[e];
                        i.push({
                            key: {
                                status: "valid",
                                value: e
                            },
                            value: t._parse(new nN(n, o, n.path, e)),
                            alwaysSet: e in n.data
                        })
                    }
                    if (this._def.catchall instanceof nX) {
                        let e = this._def.unknownKeys;
                        if ("passthrough" === e)
                            for (let e of r) i.push({
                                key: {
                                    status: "valid",
                                    value: e
                                },
                                value: {
                                    status: "valid",
                                    value: n.data[e]
                                }
                            });
                        else if ("strict" === e) r.length > 0 && (ns(n, {
                            code: nt.unrecognized_keys,
                            keys: r
                        }), t.dirty());
                        else if ("strip" === e);
                        else throw Error("Internal ZodObject error: invalid unknownKeys value.")
                    } else {
                        let e = this._def.catchall;
                        for (let t of r) {
                            let a = n.data[t];
                            i.push({
                                key: {
                                    status: "valid",
                                    value: t
                                },
                                value: e._parse(new nN(n, a, n.path, t)),
                                alwaysSet: t in n.data
                            })
                        }
                    }
                    return n.common.async ? Promise.resolve().then(async () => {
                        let e = [];
                        for (let t of i) {
                            let n = await t.key,
                                a = await t.value;
                            e.push({
                                key: n,
                                value: a,
                                alwaysSet: t.alwaysSet
                            })
                        }
                        return e
                    }).then(e => nl.mergeObjectSync(t, e)) : nl.mergeObjectSync(t, i)
                }
                get shape() {
                    return this._def.shape()
                }
                strict(t) {
                    return et.errToObj, new e({ ...this._def,
                        unknownKeys: "strict",
                        ...void 0 !== t ? {
                            errorMap: (e, n) => {
                                var a, o, r, i;
                                let s = null !== (r = null === (o = (a = this._def).errorMap) || void 0 === o ? void 0 : o.call(a, e, n).message) && void 0 !== r ? r : n.defaultError;
                                return "unrecognized_keys" === e.code ? {
                                    message: null !== (i = et.errToObj(t).message) && void 0 !== i ? i : s
                                } : {
                                    message: s
                                }
                            }
                        } : {}
                    })
                }
                strip() {
                    return new e({ ...this._def,
                        unknownKeys: "strip"
                    })
                }
                passthrough() {
                    return new e({ ...this._def,
                        unknownKeys: "passthrough"
                    })
                }
                extend(t) {
                    return new e({ ...this._def,
                        shape: () => ({ ...this._def.shape(),
                            ...t
                        })
                    })
                }
                merge(t) {
                    return new e({
                        unknownKeys: t._def.unknownKeys,
                        catchall: t._def.catchall,
                        shape: () => ({ ...this._def.shape(),
                            ...t._def.shape()
                        }),
                        typeName: er.ZodObject
                    })
                }
                setKey(e, t) {
                    return this.augment({
                        [e]: t
                    })
                }
                catchall(t) {
                    return new e({ ...this._def,
                        catchall: t
                    })
                }
                pick(t) {
                    let n = {};
                    return $.objectKeys(t).forEach(e => {
                        t[e] && this.shape[e] && (n[e] = this.shape[e])
                    }), new e({ ...this._def,
                        shape: () => n
                    })
                }
                omit(t) {
                    let n = {};
                    return $.objectKeys(this.shape).forEach(e => {
                        t[e] || (n[e] = this.shape[e])
                    }), new e({ ...this._def,
                        shape: () => n
                    })
                }
                deepPartial() {
                    return function e(t) {
                        if (t instanceof n$) {
                            let n = {};
                            for (let a in t.shape) {
                                let o = t.shape[a];
                                n[a] = ai.create(e(o))
                            }
                            return new n$({ ...t._def,
                                shape: () => n
                            })
                        }
                        return t instanceof nq ? new nq({ ...t._def,
                            type: e(t.element)
                        }) : t instanceof ai ? ai.create(e(t.unwrap())) : t instanceof as ? as.create(e(t.unwrap())) : t instanceof n9 ? n9.create(t.items.map(t => e(t))) : t
                    }(this)
                }
                partial(t) {
                    let n = {};
                    return $.objectKeys(this.shape).forEach(e => {
                        let a = this.shape[e];
                        t && !t[e] ? n[e] = a : n[e] = a.optional()
                    }), new e({ ...this._def,
                        shape: () => n
                    })
                }
                required(t) {
                    let n = {};
                    return $.objectKeys(this.shape).forEach(e => {
                        if (t && !t[e]) n[e] = this.shape[e];
                        else {
                            let t = this.shape[e];
                            for (; t instanceof ai;) t = t._def.innerType;
                            n[e] = t
                        }
                    }), new e({ ...this._def,
                        shape: () => n
                    })
                }
                keyof() {
                    return at($.objectKeys(this.shape))
                }
                constructor() {
                    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
                }
            };
            n$.create = (e, t) => new n$({
                shape: () => e,
                unknownKeys: "strip",
                catchall: nX.create(),
                typeName: er.ZodObject,
                ...nI(t)
            }), n$.strictCreate = (e, t) => new n$({
                shape: () => e,
                unknownKeys: "strict",
                catchall: nX.create(),
                typeName: er.ZodObject,
                ...nI(t)
            }), n$.lazycreate = (e, t) => new n$({
                shape: e,
                unknownKeys: "strip",
                catchall: nX.create(),
                typeName: er.ZodObject,
                ...nI(t)
            });
            var n0 = class extends nS {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), n = this._def.options;
                    if (t.common.async) return Promise.all(n.map(async e => {
                        let n = { ...t,
                            common: { ...t.common,
                                issues: []
                            },
                            parent: null
                        };
                        return {
                            result: await e._parseAsync({
                                data: t.data,
                                path: t.path,
                                parent: n
                            }),
                            ctx: n
                        }
                    })).then(function(e) {
                        for (let t of e)
                            if ("valid" === t.result.status) return t.result;
                        for (let n of e)
                            if ("dirty" === n.result.status) return t.common.issues.push(...n.ctx.common.issues), n.result;
                        let n = e.map(e => new nn(e.ctx.common.issues));
                        return ns(t, {
                            code: nt.invalid_union,
                            unionErrors: n
                        }), nc
                    }); {
                        let e;
                        let a = [];
                        for (let o of n) {
                            let n = { ...t,
                                    common: { ...t.common,
                                        issues: []
                                    },
                                    parent: null
                                },
                                r = o._parseSync({
                                    data: t.data,
                                    path: t.path,
                                    parent: n
                                });
                            if ("valid" === r.status) return r;
                            "dirty" !== r.status || e || (e = {
                                result: r,
                                ctx: n
                            }), n.common.issues.length && a.push(n.common.issues)
                        }
                        if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
                        let o = a.map(e => new nn(e));
                        return ns(t, {
                            code: nt.invalid_union,
                            unionErrors: o
                        }), nc
                    }
                }
                get options() {
                    return this._def.options
                }
            };
            n0.create = (e, t) => new n0({
                options: e,
                typeName: er.ZodUnion,
                ...nI(t)
            });
            var n1 = e => {
                    if (e instanceof n8) return n1(e.schema);
                    if (e instanceof ar) return n1(e.innerType());
                    if (e instanceof ae) return [e.value];
                    if (e instanceof an) return e.options;
                    if (e instanceof aa) return $.objectValues(e.enum);
                    if (e instanceof al) return n1(e._def.innerType);
                    if (e instanceof nV) return [void 0];
                    else if (e instanceof nY) return [null];
                    else if (e instanceof ai) return [void 0, ...n1(e.unwrap())];
                    else if (e instanceof as) return [null, ...n1(e.unwrap())];
                    else if (e instanceof ap) return n1(e.unwrap());
                    else if (e instanceof am) return n1(e.unwrap());
                    else if (e instanceof ac) return n1(e._def.innerType);
                    else return []
                },
                n2 = class e extends nS {
                    _parse(e) {
                        let {
                            ctx: t
                        } = this._processInputParams(e);
                        if (t.parsedType !== t8.object) return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.object,
                            received: t.parsedType
                        }), nc;
                        let n = this.discriminator,
                            a = t.data[n],
                            o = this.optionsMap.get(a);
                        return o ? t.common.async ? o._parseAsync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        }) : o._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        }) : (ns(t, {
                            code: nt.invalid_union_discriminator,
                            options: Array.from(this.optionsMap.keys()),
                            path: [n]
                        }), nc)
                    }
                    get discriminator() {
                        return this._def.discriminator
                    }
                    get options() {
                        return this._def.options
                    }
                    get optionsMap() {
                        return this._def.optionsMap
                    }
                    static create(t, n, a) {
                        let o = new Map;
                        for (let e of n) {
                            let n = n1(e.shape[t]);
                            if (!n.length) throw Error("A discriminator value for key `".concat(t, "` could not be extracted from all schema options"));
                            for (let a of n) {
                                if (o.has(a)) throw Error("Discriminator property ".concat(String(t), " has duplicate value ").concat(String(a)));
                                o.set(a, e)
                            }
                        }
                        return new e({
                            typeName: er.ZodDiscriminatedUnion,
                            discriminator: t,
                            options: n,
                            optionsMap: o,
                            ...nI(a)
                        })
                    }
                },
                n4 = class extends nS {
                    _parse(e) {
                        let {
                            status: t,
                            ctx: n
                        } = this._processInputParams(e), a = (e, a) => {
                            if (np(e) || np(a)) return nc;
                            let o = function e(t, n) {
                                let a = ne(t),
                                    o = ne(n);
                                if (t === n) return {
                                    valid: !0,
                                    data: t
                                };
                                if (a === t8.object && o === t8.object) {
                                    let a = $.objectKeys(n),
                                        o = $.objectKeys(t).filter(e => -1 !== a.indexOf(e)),
                                        r = { ...t,
                                            ...n
                                        };
                                    for (let a of o) {
                                        let o = e(t[a], n[a]);
                                        if (!o.valid) return {
                                            valid: !1
                                        };
                                        r[a] = o.data
                                    }
                                    return {
                                        valid: !0,
                                        data: r
                                    }
                                }
                                if (a === t8.array && o === t8.array) {
                                    if (t.length !== n.length) return {
                                        valid: !1
                                    };
                                    let a = [];
                                    for (let o = 0; o < t.length; o++) {
                                        let r = e(t[o], n[o]);
                                        if (!r.valid) return {
                                            valid: !1
                                        };
                                        a.push(r.data)
                                    }
                                    return {
                                        valid: !0,
                                        data: a
                                    }
                                }
                                return a === t8.date && o === t8.date && +t == +n ? {
                                    valid: !0,
                                    data: t
                                } : {
                                    valid: !1
                                }
                            }(e.value, a.value);
                            return o.valid ? ((nA(e) || nA(a)) && t.dirty(), {
                                status: t.value,
                                value: o.data
                            }) : (ns(n, {
                                code: nt.invalid_intersection_types
                            }), nc)
                        };
                        return n.common.async ? Promise.all([this._def.left._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }), this._def.right._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        })]).then(e => {
                            let [t, n] = e;
                            return a(t, n)
                        }) : a(this._def.left._parseSync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }), this._def.right._parseSync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }))
                    }
                };
            n4.create = (e, t, n) => new n4({
                left: e,
                right: t,
                typeName: er.ZodIntersection,
                ...nI(n)
            });
            var n9 = class e extends nS {
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e);
                    if (n.parsedType !== t8.array) return ns(n, {
                        code: nt.invalid_type,
                        expected: t8.array,
                        received: n.parsedType
                    }), nc;
                    if (n.data.length < this._def.items.length) return ns(n, {
                        code: nt.too_small,
                        minimum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), nc;
                    !this._def.rest && n.data.length > this._def.items.length && (ns(n, {
                        code: nt.too_big,
                        maximum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), t.dirty());
                    let a = [...n.data].map((e, t) => {
                        let a = this._def.items[t] || this._def.rest;
                        return a ? a._parse(new nN(n, e, n.path, t)) : null
                    }).filter(e => !!e);
                    return n.common.async ? Promise.all(a).then(e => nl.mergeArray(t, e)) : nl.mergeArray(t, a)
                }
                get items() {
                    return this._def.items
                }
                rest(t) {
                    return new e({ ...this._def,
                        rest: t
                    })
                }
            };
            n9.create = (e, t) => {
                if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
                return new n9({
                    items: e,
                    typeName: er.ZodTuple,
                    rest: null,
                    ...nI(t)
                })
            };
            var n3 = class e extends nS {
                    get keySchema() {
                        return this._def.keyType
                    }
                    get valueSchema() {
                        return this._def.valueType
                    }
                    _parse(e) {
                        let {
                            status: t,
                            ctx: n
                        } = this._processInputParams(e);
                        if (n.parsedType !== t8.object) return ns(n, {
                            code: nt.invalid_type,
                            expected: t8.object,
                            received: n.parsedType
                        }), nc;
                        let a = [],
                            o = this._def.keyType,
                            r = this._def.valueType;
                        for (let e in n.data) a.push({
                            key: o._parse(new nN(n, e, n.path, e)),
                            value: r._parse(new nN(n, n.data[e], n.path, e)),
                            alwaysSet: e in n.data
                        });
                        return n.common.async ? nl.mergeObjectAsync(t, a) : nl.mergeObjectSync(t, a)
                    }
                    get element() {
                        return this._def.valueType
                    }
                    static create(t, n, a) {
                        return new e(n instanceof nS ? {
                            keyType: t,
                            valueType: n,
                            typeName: er.ZodRecord,
                            ...nI(a)
                        } : {
                            keyType: nw.create(),
                            valueType: t,
                            typeName: er.ZodRecord,
                            ...nI(n)
                        })
                    }
                },
                n5 = class extends nS {
                    get keySchema() {
                        return this._def.keyType
                    }
                    get valueSchema() {
                        return this._def.valueType
                    }
                    _parse(e) {
                        let {
                            status: t,
                            ctx: n
                        } = this._processInputParams(e);
                        if (n.parsedType !== t8.map) return ns(n, {
                            code: nt.invalid_type,
                            expected: t8.map,
                            received: n.parsedType
                        }), nc;
                        let a = this._def.keyType,
                            o = this._def.valueType,
                            r = [...n.data.entries()].map((e, t) => {
                                let [r, i] = e;
                                return {
                                    key: a._parse(new nN(n, r, n.path, [t, "key"])),
                                    value: o._parse(new nN(n, i, n.path, [t, "value"]))
                                }
                            });
                        if (n.common.async) {
                            let e = new Map;
                            return Promise.resolve().then(async () => {
                                for (let n of r) {
                                    let a = await n.key,
                                        o = await n.value;
                                    if ("aborted" === a.status || "aborted" === o.status) return nc;
                                    ("dirty" === a.status || "dirty" === o.status) && t.dirty(), e.set(a.value, o.value)
                                }
                                return {
                                    status: t.value,
                                    value: e
                                }
                            })
                        } {
                            let e = new Map;
                            for (let n of r) {
                                let a = n.key,
                                    o = n.value;
                                if ("aborted" === a.status || "aborted" === o.status) return nc;
                                ("dirty" === a.status || "dirty" === o.status) && t.dirty(), e.set(a.value, o.value)
                            }
                            return {
                                status: t.value,
                                value: e
                            }
                        }
                    }
                };
            n5.create = (e, t, n) => new n5({
                valueType: t,
                keyType: e,
                typeName: er.ZodMap,
                ...nI(n)
            });
            var n7 = class e extends nS {
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e);
                    if (n.parsedType !== t8.set) return ns(n, {
                        code: nt.invalid_type,
                        expected: t8.set,
                        received: n.parsedType
                    }), nc;
                    let a = this._def;
                    null !== a.minSize && n.data.size < a.minSize.value && (ns(n, {
                        code: nt.too_small,
                        minimum: a.minSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: a.minSize.message
                    }), t.dirty()), null !== a.maxSize && n.data.size > a.maxSize.value && (ns(n, {
                        code: nt.too_big,
                        maximum: a.maxSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: a.maxSize.message
                    }), t.dirty());
                    let o = this._def.valueType;

                    function r(e) {
                        let n = new Set;
                        for (let a of e) {
                            if ("aborted" === a.status) return nc;
                            "dirty" === a.status && t.dirty(), n.add(a.value)
                        }
                        return {
                            status: t.value,
                            value: n
                        }
                    }
                    let i = [...n.data.values()].map((e, t) => o._parse(new nN(n, e, n.path, t)));
                    return n.common.async ? Promise.all(i).then(e => r(e)) : r(i)
                }
                min(t, n) {
                    return new e({ ...this._def,
                        minSize: {
                            value: t,
                            message: et.toString(n)
                        }
                    })
                }
                max(t, n) {
                    return new e({ ...this._def,
                        maxSize: {
                            value: t,
                            message: et.toString(n)
                        }
                    })
                }
                size(e, t) {
                    return this.min(e, t).max(e, t)
                }
                nonempty(e) {
                    return this.min(1, e)
                }
            };
            n7.create = (e, t) => new n7({
                valueType: e,
                minSize: null,
                maxSize: null,
                typeName: er.ZodSet,
                ...nI(t)
            });
            var n6 = class e extends nS {
                    _parse(e) {
                        let {
                            ctx: t
                        } = this._processInputParams(e);
                        if (t.parsedType !== t8.function) return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.function,
                            received: t.parsedType
                        }), nc;

                        function n(e, n) {
                            return ni({
                                data: e,
                                path: t.path,
                                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, nr(), na].filter(e => !!e),
                                issueData: {
                                    code: nt.invalid_arguments,
                                    argumentsError: n
                                }
                            })
                        }

                        function a(e, n) {
                            return ni({
                                data: e,
                                path: t.path,
                                errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, nr(), na].filter(e => !!e),
                                issueData: {
                                    code: nt.invalid_return_type,
                                    returnTypeError: n
                                }
                            })
                        }
                        let o = {
                                errorMap: t.common.contextualErrorMap
                            },
                            r = t.data;
                        if (this._def.returns instanceof ao) {
                            let e = this;
                            return nu(async function() {
                                for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                                let l = new nn([]),
                                    c = await e._def.args.parseAsync(i, o).catch(e => {
                                        throw l.addIssue(n(i, e)), l
                                    }),
                                    d = await Reflect.apply(r, this, c);
                                return await e._def.returns._def.type.parseAsync(d, o).catch(e => {
                                    throw l.addIssue(a(d, e)), l
                                })
                            })
                        } {
                            let e = this;
                            return nu(function() {
                                for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                                let l = e._def.args.safeParse(i, o);
                                if (!l.success) throw new nn([n(i, l.error)]);
                                let c = Reflect.apply(r, this, l.data),
                                    d = e._def.returns.safeParse(c, o);
                                if (!d.success) throw new nn([a(c, d.error)]);
                                return d.data
                            })
                        }
                    }
                    parameters() {
                        return this._def.args
                    }
                    returnType() {
                        return this._def.returns
                    }
                    args() {
                        for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                        return new e({ ...this._def,
                            args: n9.create(n).rest(nJ.create())
                        })
                    }
                    returns(t) {
                        return new e({ ...this._def,
                            returns: t
                        })
                    }
                    implement(e) {
                        return this.parse(e)
                    }
                    strictImplement(e) {
                        return this.parse(e)
                    }
                    static create(t, n, a) {
                        return new e({
                            args: t || n9.create([]).rest(nJ.create()),
                            returns: n || nJ.create(),
                            typeName: er.ZodFunction,
                            ...nI(a)
                        })
                    }
                    constructor() {
                        super(...arguments), this.validate = this.implement
                    }
                },
                n8 = class extends nS {
                    get schema() {
                        return this._def.getter()
                    }
                    _parse(e) {
                        let {
                            ctx: t
                        } = this._processInputParams(e);
                        return this._def.getter()._parse({
                            data: t.data,
                            path: t.path,
                            parent: t
                        })
                    }
                };
            n8.create = (e, t) => new n8({
                getter: e,
                typeName: er.ZodLazy,
                ...nI(t)
            });
            var ae = class extends nS {
                _parse(e) {
                    if (e.data !== this._def.value) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            received: t.data,
                            code: nt.invalid_literal,
                            expected: this._def.value
                        }), nc
                    }
                    return {
                        status: "valid",
                        value: e.data
                    }
                }
                get value() {
                    return this._def.value
                }
            };

            function at(e, t) {
                return new an({
                    values: e,
                    typeName: er.ZodEnum,
                    ...nI(t)
                })
            }
            ae.create = (e, t) => new ae({
                value: e,
                typeName: er.ZodLiteral,
                ...nI(t)
            });
            var an = class e extends nS {
                _parse(e) {
                    if ("string" != typeof e.data) {
                        let t = this._getOrReturnCtx(e),
                            n = this._def.values;
                        return ns(t, {
                            expected: $.joinValues(n),
                            received: t.parsedType,
                            code: nt.invalid_type
                        }), nc
                    }
                    if (n_(this, en, "f") || nT(this, en, new Set(this._def.values), "f"), !n_(this, en, "f").has(e.data)) {
                        let t = this._getOrReturnCtx(e),
                            n = this._def.values;
                        return ns(t, {
                            received: t.data,
                            code: nt.invalid_enum_value,
                            options: n
                        }), nc
                    }
                    return nu(e.data)
                }
                get options() {
                    return this._def.values
                }
                get enum() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                get Values() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                get Enum() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                extract(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._def;
                    return e.create(t, { ...this._def,
                        ...n
                    })
                }
                exclude(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._def;
                    return e.create(this.options.filter(e => !t.includes(e)), { ...this._def,
                        ...n
                    })
                }
                constructor() {
                    super(...arguments), en.set(this, void 0)
                }
            };
            en = new WeakMap, an.create = at;
            var aa = class extends nS {
                _parse(e) {
                    let t = $.getValidEnumValues(this._def.values),
                        n = this._getOrReturnCtx(e);
                    if (n.parsedType !== t8.string && n.parsedType !== t8.number) {
                        let e = $.objectValues(t);
                        return ns(n, {
                            expected: $.joinValues(e),
                            received: n.parsedType,
                            code: nt.invalid_type
                        }), nc
                    }
                    if (n_(this, ea, "f") || nT(this, ea, new Set($.getValidEnumValues(this._def.values)), "f"), !n_(this, ea, "f").has(e.data)) {
                        let e = $.objectValues(t);
                        return ns(n, {
                            received: n.data,
                            code: nt.invalid_enum_value,
                            options: e
                        }), nc
                    }
                    return nu(e.data)
                }
                get enum() {
                    return this._def.values
                }
                constructor() {
                    super(...arguments), ea.set(this, void 0)
                }
            };
            ea = new WeakMap, aa.create = (e, t) => new aa({
                values: e,
                typeName: er.ZodNativeEnum,
                ...nI(t)
            });
            var ao = class extends nS {
                unwrap() {
                    return this._def.type
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    return t.parsedType !== t8.promise && !1 === t.common.async ? (ns(t, {
                        code: nt.invalid_type,
                        expected: t8.promise,
                        received: t.parsedType
                    }), nc) : nu((t.parsedType === t8.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
                        path: t.path,
                        errorMap: t.common.contextualErrorMap
                    })))
                }
            };
            ao.create = (e, t) => new ao({
                type: e,
                typeName: er.ZodPromise,
                ...nI(t)
            });
            var ar = class extends nS {
                innerType() {
                    return this._def.schema
                }
                sourceType() {
                    return this._def.schema._def.typeName === er.ZodEffects ? this._def.schema.sourceType() : this._def.schema
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: n
                    } = this._processInputParams(e), a = this._def.effect || null, o = {
                        addIssue: e => {
                            ns(n, e), e.fatal ? t.abort() : t.dirty()
                        },
                        get path() {
                            return n.path
                        }
                    };
                    if (o.addIssue = o.addIssue.bind(o), "preprocess" === a.type) {
                        let e = a.transform(n.data, o);
                        if (n.common.async) return Promise.resolve(e).then(async e => {
                            if ("aborted" === t.value) return nc;
                            let a = await this._def.schema._parseAsync({
                                data: e,
                                path: n.path,
                                parent: n
                            });
                            return "aborted" === a.status ? nc : "dirty" === a.status || "dirty" === t.value ? nd(a.value) : a
                        }); {
                            if ("aborted" === t.value) return nc;
                            let a = this._def.schema._parseSync({
                                data: e,
                                path: n.path,
                                parent: n
                            });
                            return "aborted" === a.status ? nc : "dirty" === a.status || "dirty" === t.value ? nd(a.value) : a
                        }
                    }
                    if ("refinement" === a.type) {
                        let e = e => {
                            let t = a.refinement(e, o);
                            if (n.common.async) return Promise.resolve(t);
                            if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            return e
                        };
                        if (!1 !== n.common.async) return this._def.schema._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }).then(n => "aborted" === n.status ? nc : ("dirty" === n.status && t.dirty(), e(n.value).then(() => ({
                            status: t.value,
                            value: n.value
                        })))); {
                            let a = this._def.schema._parseSync({
                                data: n.data,
                                path: n.path,
                                parent: n
                            });
                            return "aborted" === a.status ? nc : ("dirty" === a.status && t.dirty(), e(a.value), {
                                status: t.value,
                                value: a.value
                            })
                        }
                    }
                    if ("transform" === a.type) {
                        if (!1 !== n.common.async) return this._def.schema._parseAsync({
                            data: n.data,
                            path: n.path,
                            parent: n
                        }).then(e => nm(e) ? Promise.resolve(a.transform(e.value, o)).then(e => ({
                            status: t.value,
                            value: e
                        })) : e); {
                            let e = this._def.schema._parseSync({
                                data: n.data,
                                path: n.path,
                                parent: n
                            });
                            if (!nm(e)) return e;
                            let r = a.transform(e.value, o);
                            if (r instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                            return {
                                status: t.value,
                                value: r
                            }
                        }
                    }
                    $.assertNever(a)
                }
            };
            ar.create = (e, t, n) => new ar({
                schema: e,
                typeName: er.ZodEffects,
                effect: t,
                ...nI(n)
            }), ar.createWithPreprocess = (e, t, n) => new ar({
                schema: t,
                effect: {
                    type: "preprocess",
                    transform: e
                },
                typeName: er.ZodEffects,
                ...nI(n)
            });
            var ai = class extends nS {
                _parse(e) {
                    return this._getType(e) === t8.undefined ? nu(void 0) : this._def.innerType._parse(e)
                }
                unwrap() {
                    return this._def.innerType
                }
            };
            ai.create = (e, t) => new ai({
                innerType: e,
                typeName: er.ZodOptional,
                ...nI(t)
            });
            var as = class extends nS {
                _parse(e) {
                    return this._getType(e) === t8.null ? nu(null) : this._def.innerType._parse(e)
                }
                unwrap() {
                    return this._def.innerType
                }
            };
            as.create = (e, t) => new as({
                innerType: e,
                typeName: er.ZodNullable,
                ...nI(t)
            });
            var al = class extends nS {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), n = t.data;
                    return t.parsedType === t8.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
                        data: n,
                        path: t.path,
                        parent: t
                    })
                }
                removeDefault() {
                    return this._def.innerType
                }
            };
            al.create = (e, t) => new al({
                innerType: e,
                typeName: er.ZodDefault,
                defaultValue: "function" == typeof t.default ? t.default : () => t.default,
                ...nI(t)
            });
            var ac = class extends nS {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), n = { ...t,
                        common: { ...t.common,
                            issues: []
                        }
                    }, a = this._def.innerType._parse({
                        data: n.data,
                        path: n.path,
                        parent: { ...n
                        }
                    });
                    return nE(a) ? a.then(e => ({
                        status: "valid",
                        value: "valid" === e.status ? e.value : this._def.catchValue({
                            get error() {
                                return new nn(n.common.issues)
                            },
                            input: n.data
                        })
                    })) : {
                        status: "valid",
                        value: "valid" === a.status ? a.value : this._def.catchValue({
                            get error() {
                                return new nn(n.common.issues)
                            },
                            input: n.data
                        })
                    }
                }
                removeCatch() {
                    return this._def.innerType
                }
            };
            ac.create = (e, t) => new ac({
                innerType: e,
                typeName: er.ZodCatch,
                catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
                ...nI(t)
            });
            var ad = class extends nS {
                _parse(e) {
                    if (this._getType(e) !== t8.nan) {
                        let t = this._getOrReturnCtx(e);
                        return ns(t, {
                            code: nt.invalid_type,
                            expected: t8.nan,
                            received: t.parsedType
                        }), nc
                    }
                    return {
                        status: "valid",
                        value: e.data
                    }
                }
            };
            ad.create = e => new ad({
                typeName: er.ZodNaN,
                ...nI(e)
            });
            var au = Symbol("zod_brand"),
                ap = class extends nS {
                    _parse(e) {
                        let {
                            ctx: t
                        } = this._processInputParams(e), n = t.data;
                        return this._def.type._parse({
                            data: n,
                            path: t.path,
                            parent: t
                        })
                    }
                    unwrap() {
                        return this._def.type
                    }
                },
                aA = class e extends nS {
                    _parse(e) {
                        let {
                            status: t,
                            ctx: n
                        } = this._processInputParams(e);
                        if (n.common.async) return (async () => {
                            let e = await this._def.in._parseAsync({
                                data: n.data,
                                path: n.path,
                                parent: n
                            });
                            return "aborted" === e.status ? nc : "dirty" === e.status ? (t.dirty(), nd(e.value)) : this._def.out._parseAsync({
                                data: e.value,
                                path: n.path,
                                parent: n
                            })
                        })(); {
                            let e = this._def.in._parseSync({
                                data: n.data,
                                path: n.path,
                                parent: n
                            });
                            return "aborted" === e.status ? nc : "dirty" === e.status ? (t.dirty(), {
                                status: "dirty",
                                value: e.value
                            }) : this._def.out._parseSync({
                                data: e.value,
                                path: n.path,
                                parent: n
                            })
                        }
                    }
                    static create(t, n) {
                        return new e({ in: t,
                            out: n,
                            typeName: er.ZodPipeline
                        })
                    }
                },
                am = class extends nS {
                    _parse(e) {
                        let t = this._def.innerType._parse(e),
                            n = e => (nm(e) && (e.value = Object.freeze(e.value)), e);
                        return nE(t) ? t.then(e => n(e)) : n(t)
                    }
                    unwrap() {
                        return this._def.innerType
                    }
                };

            function aE(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return e ? nz.create().superRefine((a, o) => {
                    var r, i;
                    if (!e(a)) {
                        let e = "function" == typeof t ? t(a) : "string" == typeof t ? {
                                message: t
                            } : t,
                            s = null === (i = null !== (r = e.fatal) && void 0 !== r ? r : n) || void 0 === i || i;
                        o.addIssue({
                            code: "custom",
                            ..."string" == typeof e ? {
                                message: e
                            } : e,
                            fatal: s
                        })
                    }
                }) : nz.create()
            }
            am.create = (e, t) => new am({
                innerType: e,
                typeName: er.ZodReadonly,
                ...nI(t)
            });
            var a_ = {
                object: n$.lazycreate
            };
            (z = er || (er = {})).ZodString = "ZodString", z.ZodNumber = "ZodNumber", z.ZodNaN = "ZodNaN", z.ZodBigInt = "ZodBigInt", z.ZodBoolean = "ZodBoolean", z.ZodDate = "ZodDate", z.ZodSymbol = "ZodSymbol", z.ZodUndefined = "ZodUndefined", z.ZodNull = "ZodNull", z.ZodAny = "ZodAny", z.ZodUnknown = "ZodUnknown", z.ZodNever = "ZodNever", z.ZodVoid = "ZodVoid", z.ZodArray = "ZodArray", z.ZodObject = "ZodObject", z.ZodUnion = "ZodUnion", z.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", z.ZodIntersection = "ZodIntersection", z.ZodTuple = "ZodTuple", z.ZodRecord = "ZodRecord", z.ZodMap = "ZodMap", z.ZodSet = "ZodSet", z.ZodFunction = "ZodFunction", z.ZodLazy = "ZodLazy", z.ZodLiteral = "ZodLiteral", z.ZodEnum = "ZodEnum", z.ZodEffects = "ZodEffects", z.ZodNativeEnum = "ZodNativeEnum", z.ZodOptional = "ZodOptional", z.ZodNullable = "ZodNullable", z.ZodDefault = "ZodDefault", z.ZodCatch = "ZodCatch", z.ZodPromise = "ZodPromise", z.ZodBranded = "ZodBranded", z.ZodPipeline = "ZodPipeline", z.ZodReadonly = "ZodReadonly";
            var aT = nw.create,
                aN = nF.create,
                ah = ad.create,
                aI = nK.create,
                aS = nW.create,
                aC = nj.create,
                aO = nZ.create,
                aR = nV.create,
                ag = nY.create,
                af = nz.create,
                aP = nJ.create,
                aM = nX.create,
                aL = nQ.create,
                ab = nq.create,
                ay = n$.create,
                av = n$.strictCreate,
                aD = n0.create,
                aU = n2.create,
                aG = n4.create,
                aH = n9.create,
                ak = n3.create,
                aB = n5.create,
                ax = n7.create,
                aw = n6.create,
                aF = n8.create,
                aK = ae.create,
                aW = an.create,
                aj = aa.create,
                aZ = ao.create,
                aV = ar.create,
                aY = ai.create,
                az = as.create,
                aJ = ar.createWithPreprocess,
                aX = aA.create,
                aQ = Object.freeze({
                    __proto__: null,
                    defaultErrorMap: na,
                    setErrorMap: function(e) {
                        no = e
                    },
                    getErrorMap: nr,
                    makeIssue: ni,
                    EMPTY_PATH: [],
                    addIssueToContext: ns,
                    ParseStatus: nl,
                    INVALID: nc,
                    DIRTY: nd,
                    OK: nu,
                    isAborted: np,
                    isDirty: nA,
                    isValid: nm,
                    isAsync: nE,
                    get util() {
                        return $
                    },
                    get objectUtil() {
                        return ee
                    },
                    ZodParsedType: t8,
                    getParsedType: ne,
                    ZodType: nS,
                    datetimeRegex: nx,
                    ZodString: nw,
                    ZodNumber: nF,
                    ZodBigInt: nK,
                    ZodBoolean: nW,
                    ZodDate: nj,
                    ZodSymbol: nZ,
                    ZodUndefined: nV,
                    ZodNull: nY,
                    ZodAny: nz,
                    ZodUnknown: nJ,
                    ZodNever: nX,
                    ZodVoid: nQ,
                    ZodArray: nq,
                    ZodObject: n$,
                    ZodUnion: n0,
                    ZodDiscriminatedUnion: n2,
                    ZodIntersection: n4,
                    ZodTuple: n9,
                    ZodRecord: n3,
                    ZodMap: n5,
                    ZodSet: n7,
                    ZodFunction: n6,
                    ZodLazy: n8,
                    ZodLiteral: ae,
                    ZodEnum: an,
                    ZodNativeEnum: aa,
                    ZodPromise: ao,
                    ZodEffects: ar,
                    ZodTransformer: ar,
                    ZodOptional: ai,
                    ZodNullable: as,
                    ZodDefault: al,
                    ZodCatch: ac,
                    ZodNaN: ad,
                    BRAND: au,
                    ZodBranded: ap,
                    ZodPipeline: aA,
                    ZodReadonly: am,
                    custom: aE,
                    Schema: nS,
                    ZodSchema: nS,
                    late: a_,
                    get ZodFirstPartyTypeKind() {
                        return er
                    },
                    coerce: {
                        string: e => nw.create({ ...e,
                            coerce: !0
                        }),
                        number: e => nF.create({ ...e,
                            coerce: !0
                        }),
                        boolean: e => nW.create({ ...e,
                            coerce: !0
                        }),
                        bigint: e => nK.create({ ...e,
                            coerce: !0
                        }),
                        date: e => nj.create({ ...e,
                            coerce: !0
                        })
                    },
                    any: af,
                    array: ab,
                    bigint: aI,
                    boolean: aS,
                    date: aC,
                    discriminatedUnion: aU,
                    effect: aV,
                    enum: aW,
                    function: aw,
                    instanceof: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            message: "Input not instance of ".concat(e.name)
                        };
                        return aE(t => t instanceof e, t)
                    },
                    intersection: aG,
                    lazy: aF,
                    literal: aK,
                    map: aB,
                    nan: ah,
                    nativeEnum: aj,
                    never: aM,
                    null: ag,
                    nullable: az,
                    number: aN,
                    object: ay,
                    oboolean: () => aS().optional(),
                    onumber: () => aN().optional(),
                    optional: aY,
                    ostring: () => aT().optional(),
                    pipeline: aX,
                    preprocess: aJ,
                    promise: aZ,
                    record: ak,
                    set: ax,
                    strictObject: av,
                    string: aT,
                    symbol: aO,
                    transformer: aV,
                    tuple: aH,
                    undefined: aR,
                    union: aD,
                    unknown: aP,
                    void: aL,
                    NEVER: nc,
                    ZodIssueCode: nt,
                    quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
                    ZodError: nn
                }),
                aq = aQ.object({
                    key: aQ.string(),
                    value: aQ.string()
                }),
                a$ = aQ.object({
                    success: aQ.boolean(),
                    message: aQ.string()
                }),
                a0 = e => e.replace(/([a-z])([A-Z])/g, "$1_$2").replace(/\s+/g, "_").replace(/[^\w_]/g, "").toLowerCase(),
                a1 = e => e.toUpperCase(),
                a2 = e => {
                    let {
                        projectGroup: t
                    } = e;
                    return a1(a0(t.name))
                },
                a4 = "STRIPE_CONNECT_WEBHOOK_URL",
                a9 = "STRIPE_WEBHOOK_SECRET",
                a3 = "New Database",
                a5 = ((J = a5 || {}).PENDING = "PENDING", J.PREPARING = "PREPARING", J.RUNNING = "RUNNING", J.COMPLETED = "COMPLETED", J.FAILED = "FAILED", J),
                a7 = ((X = a7 || {}).CREATING = "CREATING", X.COMPLETED = "COMPLETED", X.FAILED = "FAILED", X),
                a6 = {
                    FREE: 1073741824,
                    PRO: 10737418240,
                    BUSINESS: 107374182400,
                    ENTERPRISE: 107374182400
                };

            function a8(e) {
                let {
                    plan: t
                } = e;
                return a6[t]
            }
            var oe = e => {
                    switch (e) {
                        case "AGENT_AUTO_SELECT_INTEGRATION":
                        case "AGENT_AUTO_SELECT_INTEGRATION":
                        case "TOP_DOWN_CHAT":
                            return !0;
                        case "APPLY_COMMAND":
                        case "CHAT":
                        case "FORK_WITH_CHAT_MESSAGE":
                        case "FORK_MODULE_WITH_CHAT_MESSAGE":
                        case "PUBLISH_PROJECT_AND_CONTINUE_CHAT":
                        case "SAVE_SECRET_AND_CONTINUE_CHAT":
                        case "CHANGE_DESIGN_SYSTEM_AND_CONTINUE_CHAT":
                        case "SELECT_INTEGRATION_WITH_CHAT_MESSAGE":
                        case "CHAT":
                        case "ADD_AUTH_AND_CONTINUE_CHAT":
                        case "UPDATE_AUTH_SETTINGS":
                        case "FORK":
                        case "DUPLICATE":
                        case "AUTOFIX_CHANGE":
                        case "FIX_CHANGE":
                        case "CODE_CHANGE":
                        case "CREATE_COMPONENT_FROM_PROMPT":
                        case "CREATE_COMPONENT_FROM_PROMPT_AND_CODE":
                        case "DELETION":
                        case "FORM_CHANGE":
                        case "IMAGE_CHANGE":
                        case "LINK_CHANGE":
                        case "PROMPT_CHANGE":
                        case "RESTORE":
                        case "SELECT_INITIAL_MODULE_IDEA":
                        case "TEXT_CHANGE":
                        case "TRY_AGAIN":
                        case "UI_PATCH":
                        case "REBUILD_FROM_LATEST":
                        case "UPDATE_REFERENCES":
                        case "COMMENT_CHANGE":
                        case "ENHANCE_PROMPT":
                        case "CHANGE_AUTH":
                        case "FORK_FROM_PROJECT_GROUP_TEMPLATE":
                        case "FORK_FROM_PROJECT_GROUP":
                        case "DUPLICATE_PROJECT_GROUP":
                        case "FORK_FROM_MODULE":
                        case "DUPLICATE_MODULE":
                            return !1;
                        default:
                            return e
                    }
                },
                ot = ["RNView", "RNText", "RNTextInput", "RNTouchableOpacity", "RNScrollView", "RNImage", "RNStyleSheet", "RNDimensions", "RNPlatform", "RNAnimated", "RNActivityIndicator", "RNFlatList", "RNModal", "RNPressable", "RNAlert", "RNKeyboardAvoidingView"],
                on = [...ot, "RNLink", "RNImagePicker", "RNStatusBar", "RNSafeAreaView", "RNSafeAreaProvider"],
                oa = 'import React, { useState, useEffect, useCallback, useMemo, useRef, useContext, useReducer, useLayoutEffect, useImperativeHandle, useDebugValue } from "react";',
                oo = "import { ".concat(ot.map(e => "".concat(e.slice(2), " as ").concat(e)).join(", "), " } from 'react-native';"),
                or = ((Q = or || {}).DATABASE = "database", Q.GLOBALS_SQL = "globals-sql", Q.DESIGN_INITIAL = "design-initial", Q),
                oi = ((q = oi || {}).SUCCESS = "SUCCESS", q.FAILED = "FAILED", q.PENDING = "PENDING", q)
        }
    }
]);