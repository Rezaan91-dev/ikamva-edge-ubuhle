import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import welcomeVideo from "@/assets/welcome-popup.mp4.asset.json";
import comboVideo from "@/assets/combo-offer-popup.mp4.asset.json";

const SS_WELCOME = "iku_popup_welcome_v1";
const SS_COMBO = "iku_popup_combo_v1";

type Active = "welcome" | "combo" | null;

export default function PromoPopups() {
  const [active, setActive] = useState<Active>(null);
  const welcomeDone = useRef(false);
  const comboDone = useRef(false);
  const comboTimer = useRef<number | null>(null);

  // hydrate from sessionStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    welcomeDone.current = sessionStorage.getItem(SS_WELCOME) === "1";
    comboDone.current = sessionStorage.getItem(SS_COMBO) === "1";

    // Welcome popup: 5-8s after landing, once per session
    let welcomeTimer: number | null = null;
    if (!welcomeDone.current) {
      welcomeTimer = window.setTimeout(() => {
        setActive((cur) => (cur === null && !welcomeDone.current ? "welcome" : cur));
      }, 6000);
    } else {
      scheduleCombo();
    }

    // Exit intent for combo (fallback trigger)
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !comboDone.current) {
        setActive((cur) => {
          if (cur !== null) return cur;
          comboDone.current = true;
          sessionStorage.setItem(SS_COMBO, "1");
          return "combo";
        });
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      if (welcomeTimer) clearTimeout(welcomeTimer);
      if (comboTimer.current) clearTimeout(comboTimer.current);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function scheduleCombo() {
    if (comboDone.current || comboTimer.current) return;
    const delay = 25000 + Math.floor(Math.random() * 10000); // 25-35s
    comboTimer.current = window.setTimeout(() => {
      setActive((cur) => {
        if (cur !== null || comboDone.current) return cur;
        return "combo";
      });
    }, delay) as unknown as number;
  }

  function closeWelcome() {
    welcomeDone.current = true;
    sessionStorage.setItem(SS_WELCOME, "1");
    setActive(null);
    scheduleCombo();
  }

  function closeCombo() {
    comboDone.current = true;
    sessionStorage.setItem(SS_COMBO, "1");
    setActive(null);
  }

  if (!active) return null;

  const isWelcome = active === "welcome";
  const src = isWelcome ? welcomeVideo.url : comboVideo.url;
  const onClose = isWelcome ? closeWelcome : closeCombo;
  const label = isWelcome ? "Welcome to Ikamva Edge Ubuhle" : "Specials & Combo Deals";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl animate-scale-in rounded-2xl p-[2px]"
        style={{
          background:
            "linear-gradient(135deg, #3a1a3a 0%, #6b2c91 25%, #b76e79 55%, #b87333 80%, #f3d5d0 100%)",
          boxShadow: "0 25px 80px -10px rgba(58,26,58,0.6)",
        }}
      >
        <div className="relative overflow-hidden rounded-[14px] bg-[#1a0a1a]">
          <button
            onClick={onClose}
            aria-label="Close popup"
            className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2 text-white/90 transition hover:bg-black/80 hover:scale-110"
          >
            <X className="h-4 w-4" />
          </button>
          <video
            key={src}
            src={src}
            autoPlay
            playsInline
            controls
            preload="metadata"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
