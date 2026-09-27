/**
 * main.js — Dias Locações
 * JavaScript mínimo e sem dependências externas.
 * Responsável por: menu mobile, botão de WhatsApp (flutuante e links do
 * conteúdo) e preenchimento automático de dados de contato a partir de
 * assets/js/config.js.
 */
(function () {
  "use strict";

  var CONFIG = window.SITE_CONFIG || {};

  /* ---------- Menu mobile ---------- */
  function initMobileMenu() {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Fecha o menu ao clicar em um link (útil em telas pequenas)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Links de WhatsApp ---------- */
  function buildWhatsAppUrl(messageKey) {
    var number = (CONFIG.whatsapp || "").replace(/\D/g, "");
    var messages = CONFIG.whatsappMessages || {};
    var text = messages[messageKey] || messages.geral || "Olá!";
    return "https://wa.me/" + number + "?text=" + encodeURIComponent(text);
  }

  function initWhatsAppLinks() {
    var links = document.querySelectorAll("[data-whatsapp]");
    links.forEach(function (link) {
      var key = link.getAttribute("data-whatsapp") || "geral";
      link.setAttribute("href", buildWhatsAppUrl(key));
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
  }

  /* ---------- Preenchimento automático de dados de contato ---------- */
  function fillOrPlaceholder(el, value, placeholder) {
    if (value && String(value).trim() !== "") {
      el.textContent = value;
    } else {
      el.textContent = placeholder || "[a preencher]";
      el.classList.add("is-placeholder");
    }
  }

  function initConfigFields() {
    document.querySelectorAll("[data-config]").forEach(function (el) {
      var key = el.getAttribute("data-config");
      switch (key) {
        case "phone":
          fillOrPlaceholder(el, CONFIG.phone, "Telefone a divulgar em breve");
          break;
        case "phone-href":
          if (CONFIG.phone) {
            el.setAttribute("href", "tel:" + CONFIG.phone.replace(/\D/g, ""));
          } else {
            el.setAttribute("aria-disabled", "true");
          }
          break;
        case "address":
          fillOrPlaceholder(el, CONFIG.address, "Endereço a divulgar em breve");
          break;
        case "cep":
          fillOrPlaceholder(el, CONFIG.cep, "");
          break;
        case "opening-hours":
          fillOrPlaceholder(el, CONFIG.openingHours, "Horário a divulgar em breve");
          break;
        case "city-state":
          el.textContent = (CONFIG.city || "") + " - " + (CONFIG.state || "");
          break;
        case "maps-link":
          if (CONFIG.googleMapsLinkUrl) {
            el.setAttribute("href", CONFIG.googleMapsLinkUrl);
          } else {
            el.setAttribute("aria-disabled", "true");
          }
          break;
        default:
          break;
      }
    });

    // Iframe do Google Maps (só é inserido se a URL for informada)
    var mapWrap = document.getElementById("maps-embed");
    if (mapWrap) {
      if (CONFIG.googleMapsEmbedUrl) {
        var iframe = document.createElement("iframe");
        iframe.src = CONFIG.googleMapsEmbedUrl;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        iframe.title = "Localização da Dias Locações no Google Maps";
        mapWrap.appendChild(iframe);
      } else {
        mapWrap.innerHTML =
          '<p class="map-placeholder">Mapa a ser incorporado assim que a URL do Google Maps for informada em <code>assets/js/config.js</code>.</p>';
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initWhatsAppLinks();
    initConfigFields();
  });
})();
