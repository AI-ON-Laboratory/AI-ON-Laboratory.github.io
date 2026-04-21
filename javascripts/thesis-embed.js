(function () {
    var hasThesisIndexMarker = !!document.querySelector(".thesis-page-marker");
    var path = window.location.pathname || "";
    var isThesisDetailPath = /\/thesis\/[^/]+\/[^/]+\/?$/.test(path);
    var isInsideIframe = window.self !== window.top;
    var themeAttrs = [
        "data-md-color-scheme",
        "data-md-color-primary",
        "data-md-color-accent"
    ];

    function readThemeAttrs(fromBody) {
        var result = {};
        for (var i = 0; i < themeAttrs.length; i++) {
            var attr = themeAttrs[i];
            result[attr] = fromBody.getAttribute(attr);
        }
        return result;
    }

    function applyThemeAttrs(toDocument, attrs) {
        if (!toDocument || !toDocument.body || !toDocument.documentElement) {
            return;
        }

        for (var i = 0; i < themeAttrs.length; i++) {
            var attr = themeAttrs[i];
            var value = attrs[attr];

            if (value !== null && value !== undefined) {
                toDocument.body.setAttribute(attr, value);
                toDocument.documentElement.setAttribute(attr, value);
            } else {
                toDocument.body.removeAttribute(attr);
                toDocument.documentElement.removeAttribute(attr);
            }
        }
    }

    function syncThemeToDetailFrame(frame) {
        if (!frame) {
            return;
        }

        try {
            var doc = frame.contentDocument;
            if (!doc || !doc.body) {
                return;
            }
            applyThemeAttrs(doc, readThemeAttrs(document.body));
        } catch (e) {
            // Ignore transient iframe access errors during navigation.
        }
    }

    function markFrameBooting(frame) {
        if (!frame) {
            return;
        }
        frame.classList.remove("thesis-frame--ready");
        frame.classList.add("thesis-frame--booting");
    }

    function markFrameReady(frame) {
        if (!frame) {
            return;
        }

        requestAnimationFrame(function () {
            frame.classList.remove("thesis-frame--booting");
            frame.classList.add("thesis-frame--ready");
        });
    }

    function syncThemeFromParentWindow() {
        try {
            if (!window.parent || !window.parent.document || !window.parent.document.body) {
                return;
            }

            applyThemeAttrs(document, readThemeAttrs(window.parent.document.body));
        } catch (e) {
            // Ignore cross-window access errors.
        }
    }

    function trackThesisClick(link) {
        if (!link || typeof window.gtag !== "function") {
            return;
        }

        var thesisName = (link.getAttribute("data-thesis") || link.textContent || "").trim();
        var href = link.getAttribute("href") || "";
        var hrefParts = href.split("/").filter(Boolean);
        var thesisSlug = hrefParts.length > 0 ? hrefParts[0] : "unknown";

        window.gtag("event", "thesis_click", {
            event_category: "thesis",
            event_label: thesisName,
            thesis_name: thesisName,
            thesis_slug: thesisSlug,
            thesis_href: href,
            page_path: window.location.pathname
        });
    }

    if (hasThesisIndexMarker) {
        document.body.classList.add("thesis-index-page");

        var detailFrame = document.querySelector(".thesis-frame");
        if (detailFrame) {
            markFrameBooting(detailFrame);

            detailFrame.addEventListener("load", function () {
                syncThemeToDetailFrame(detailFrame);
                markFrameReady(detailFrame);
            });

            syncThemeToDetailFrame(detailFrame);

            if (detailFrame.contentDocument && detailFrame.contentDocument.readyState === "complete") {
                markFrameReady(detailFrame);
            }

            var observer = new MutationObserver(function () {
                syncThemeToDetailFrame(detailFrame);
            });

            observer.observe(document.body, {
                attributes: true,
                attributeFilter: themeAttrs
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: themeAttrs
            });

            var paletteInputs = document.querySelectorAll("input[name='__palette']");
            for (var p = 0; p < paletteInputs.length; p++) {
                paletteInputs[p].addEventListener("change", function () {
                    syncThemeToDetailFrame(detailFrame);
                    setTimeout(function () {
                        syncThemeToDetailFrame(detailFrame);
                    }, 0);
                });
            }

            var thesisLinks = document.querySelectorAll(".thesis-index__link[target='thesis-frame']");
            for (var l = 0; l < thesisLinks.length; l++) {
                thesisLinks[l].addEventListener("click", function (event) {
                    trackThesisClick(event.currentTarget);
                    markFrameBooting(detailFrame);
                });
            }
        }
    }

    if (isThesisDetailPath && isInsideIframe) {
        document.body.classList.add("thesis-detail-embed");
        syncThemeFromParentWindow();

        try {
            var parentObserver = new MutationObserver(function () {
                syncThemeFromParentWindow();
            });

            if (window.parent && window.parent.document) {
                parentObserver.observe(window.parent.document.body, {
                    attributes: true,
                    attributeFilter: themeAttrs
                });

                parentObserver.observe(window.parent.document.documentElement, {
                    attributes: true,
                    attributeFilter: themeAttrs
                });
            }
        } catch (e) {
            // Ignore cross-window observer errors.
        }
    }
})();
