import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  Menu, X, Sun, Sunset, Dumbbell, Trophy, Users, User, Target, TrendingUp, Zap, Repeat, Swords,
  Bath, Cctv, Car, Coffee, Cross, Backpack, Shirt, MapPin, Phone, MessageCircle, CheckCircle2, BadgeCheck,
  AlertCircle, Loader2, ImageIcon, Navigation,
} from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import ground from "@/assets/ground.jpg";
import coachImg from "@/assets/coach.png.asset.json";
import schoolImg from "@/assets/school-entrance.png.asset.json";
import { enquirySchema } from "@/lib/enquiry";
import { submitEnquiry } from "@/lib/enquiry.functions";

const TITLE = "CRIKVANTA CRICKET ACADEMY | Cricket Coaching for Ages 4+";
const DESC =
  "Cricket coaching for junior and senior players with two pitches, morning and evening sessions, weekly fitness coaching and weekend match practice.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE_DISPLAY = "7358866644";
const PHONE_TEL = "tel:+917358866644";
const WHATSAPP = `https://wa.me/917358866644?text=${encodeURIComponent(
  "Hello CRIKVANTA CRICKET ACADEMY, I would like to know more about cricket coaching.",
)}`;
const ADDRESS = "St Francis De Assisi Matric School, Rajagopal Nagar, Tindivanam, Tamil Nadu 604307";
const MAPS_QUERY = "7J4R+CGQ St Francis De Assisi Matric School, Rajagopal Nagar, Tindivanam, Tamil Nadu 604307";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;

const NAV = [
  ["Home", "home"], ["About", "about"], ["Coach", "coach"],
  ["Training", "training"], ["Facilities", "facilities"], ["Contact", "contact"],
] as const;

function Btn({ href, children, variant = "primary", ...rest }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "ghost" } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-navy-foreground/40 text-navy-foreground hover:bg-navy-foreground/10",
    ghost: "border border-border bg-card text-foreground hover:bg-secondary",
  }[variant];
  return (
    <a href={href} {...rest} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 font-display text-base font-semibold tracking-wide transition-colors ${styles}`}>
      {children}
    </a>
  );
}

function SectionHead({ eyebrow, title, text, dark }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${dark ? "text-navy-foreground" : "text-foreground"}`}>{title}</h2>
      {text && <p className={`mt-4 ${dark ? "text-navy-muted" : "text-muted-foreground"}`}>{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy-border bg-navy">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
        <a href="#home" className="flex shrink-0 items-center gap-2" aria-label="CRIKVANTA CRICKET ACADEMY home">
          <img src={logo.url} alt="CRIKVANTA CRICKET ACADEMY logo" className="h-14 w-auto" width={57} height={56} />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="font-display text-[15px] font-semibold text-navy-muted transition-colors hover:text-navy-foreground">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#enquire" className="hidden min-h-11 items-center rounded-lg bg-primary px-5 font-display font-semibold text-primary-foreground hover:bg-primary/90 sm:inline-flex">Enquire Now</a>
          <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-lg text-navy-foreground lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-navy-border px-4 pb-4 lg:hidden" aria-label="Mobile">
          {NAV.map(([l, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-navy-border py-3 font-display text-lg font-semibold text-navy-foreground">{l}</a>
          ))}
          <a href="#enquire" onClick={() => setOpen(false)} className="mt-4 flex min-h-12 items-center justify-center rounded-lg bg-primary font-display font-semibold text-primary-foreground">Enquire Now</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy">
      <img src={ground} alt="CRIKVANTA academy cricket ground with two pitches and practice nets" className="absolute inset-0 -z-20 h-full w-full object-cover" width={1600} height={912} />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
        <p className="eyebrow flex items-center gap-3"><span className="h-0.5 w-8 bg-orange" />Cricket Coaching Academy</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] text-navy-foreground sm:text-6xl">CRIKVANTA CRICKET ACADEMY</h1>
        <p className="mt-5 max-w-xl text-lg text-navy-muted">Cricket coaching and skill development for players of all ages, starting from 4 years.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Btn href="#enquire">Enquire Now</Btn>
          <Btn href="#training" variant="outline">Explore Training</Btn>
        </div>
        <dl className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-navy-border rounded-xl border border-navy-border bg-navy/60 backdrop-blur-sm">
          {[["2", "Cricket Pitches"], ["2,500 sq. ft.", "Ground"], ["4+", "Ages"]].map(([v, l]) => (
            <div key={l} className="px-3 py-4 text-center sm:px-5">
              <dt className="sr-only">{l}</dt>
              <dd className="font-display text-xl font-bold text-navy-foreground sm:text-2xl">{v}</dd>
              <dd className="text-xs text-navy-muted sm:text-sm">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <img src={ground} alt="Two cricket pitches at the academy ground" loading="lazy" width={1600} height={912} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
        <div>
          <p className="eyebrow">About the Academy</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A Place to Learn and Grow in Cricket</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            CRIKVANTA CRICKET ACADEMY provides cricket coaching and practical training for young and senior players. With two cricket pitches and structured training sessions, players can develop their skills, improve fitness and gain match experience.
          </p>
        </div>
      </div>
    </section>
  );
}

function Training() {
  const items = [
    { icon: Sun, t: "Morning Session", v: "5:30 AM – 7:30 AM" },
    { icon: Sunset, t: "Evening Session", v: "4:45 PM – 6:45 PM" },
    { icon: Dumbbell, t: "Weekly Fitness Coaching", v: "Every Wednesday", d: "A fitness coach visits every Wednesday." },
    { icon: Trophy, t: "Weekend Match Practice", v: "Saturday & Sunday", d: "Compulsory matches every Saturday and Sunday." },
  ];
  const services = [
    [Users, "Junior Player Coaching"], [User, "Senior Player Coaching"], [Target, "Individual Cricket Training"],
    [TrendingUp, "Cricket Skill Development"], [Zap, "Batting Practice Support"], [Repeat, "Side-Arm Training"], [Swords, "Match Practice"],
  ] as const;
  return (
    <>
      <section id="training" className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead eyebrow="Training Schedule" title="When We Train" dark />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ icon: I, t, v, d }) => (
              <div key={t} className="rounded-2xl border border-navy-border bg-navy-foreground/5 p-6">
                <I className="h-7 w-7 text-primary" aria-hidden />
                <h3 className="mt-5 text-lg font-semibold text-navy-muted">{t}</h3>
                <p className="mt-1 font-display text-2xl font-bold text-navy-foreground">{v}</p>
                {d && <p className="mt-2 text-sm text-navy-muted">{d}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead eyebrow="Coaching & Player Development" title="Training We Offer" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([I, t]) => (
              <div key={t} className="flex items-center gap-4 rounded-xl bg-card p-5 shadow-card">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent text-primary"><I className="h-5 w-5" aria-hidden /></span>
                <span className="font-display text-lg font-semibold">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Coach() {
  const highlights = [
    [Trophy, "Division Player", "Thiruvallur 1st & TNCA 4th Division"],
    [Zap, "TNPL Net Bowler", "Dindigul Dragons & Trichy Warriors"],
    [BadgeCheck, "Experienced Coach", "Academy & school coaching in TN"],
  ] as const;
  const creds = [
    { t: "Playing", l: "Thiruvallur First Division · TNCA Fourth Division" },
    { t: "TNPL Net Bowling", l: "Dindigul Dragons · Trichy Warriors" },
    { t: "Tournaments", l: ["Nepal", "Goa", "Kolkata", "Delhi"], chips: true },
    { t: "Coaching", l: "Shine Cricket Academy, Chennai · 2 yrs | Active Cricket Academy, Chengalpattu · 2 mo | Mahindra World School · 2 mo" },
  ];
  const skills = ["Junior & Senior Coaching", "1-on-1 Training", "Side-Arm Training", "Player Development"];
  return (
    <section id="coach" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-14">
        <div className="lg:sticky lg:top-24">
          <img src={coachImg.url} alt="Head coach of CRIKVANTA CRICKET ACADEMY" loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-xs rounded-2xl object-cover object-top shadow-card lg:max-w-none" />
          <p className="mt-4 text-center font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground lg:text-left">Head Coach &amp; Founder</p>
        </div>
        <div>
          <p className="eyebrow">Head Coach &amp; Founder</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Learn from Experience</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {highlights.map(([I, t, d]) => (
              <div key={t} className="rounded-xl bg-navy p-4">
                <I className="h-6 w-6 text-orange" aria-hidden />
                <p className="mt-2 font-display font-bold text-navy-foreground">{t}</p>
                <p className="mt-0.5 text-sm leading-snug text-navy-muted">{d}</p>
              </div>
            ))}
          </div>
          <ul className="mt-8 space-y-4">
            {creds.map((g) => (
              <li key={g.t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div className="min-w-0">
                  <span className="font-display font-bold">{g.t}</span>
                  {g.chips ? (
                    <span className="mt-1.5 flex flex-wrap gap-2">{(g.l as string[]).map((x) => <span key={x} className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-primary">{x}</span>)}</span>
                  ) : (
                    <span className="mt-0.5 block text-[15px] leading-relaxed text-muted-foreground">{g.l as string}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((s) => <span key={s} className="rounded-full border border-border bg-card px-4 py-2 font-display text-sm font-semibold">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const f = [[Bath, "Restroom"], [Cctv, "CCTV Surveillance"], [Car, "Parking"], [Coffee, "Refreshments"], [Cross, "First Aid"]] as const;
  return (
    <section id="facilities" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="Facilities" title="At the Ground" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {f.map(([I, l]) => (
            <div key={l} className="flex flex-col items-center gap-3 rounded-xl bg-card px-4 py-7 text-center shadow-card">
              <I className="h-8 w-8 text-primary" aria-hidden />
              <span className="font-display font-semibold">{l}</span>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[[Backpack, "Bring Your Own Kit", "Players should bring their own cricket kit for practice."], [Shirt, "Academy Jersey", "A jersey will be provided upon admission."]].map(([I, t, d]) => {
            const Icon = I as typeof Backpack;
            return (
              <div key={t as string} className="flex gap-4 rounded-xl border-l-4 border-orange bg-card p-5">
                <Icon className="h-6 w-6 shrink-0 text-orange" aria-hidden />
                <div><h3 className="font-display text-lg font-bold">{t as string}</h3><p className="text-sm text-muted-foreground">{d as string}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead eyebrow="Ground Gallery" title="Our Ground" />
        <div className="grid gap-4 sm:grid-cols-3">
          <img src={ground} alt="Academy cricket ground" loading="lazy" width={1600} height={912} className="aspect-[4/3] w-full rounded-xl object-cover transition-opacity hover:opacity-90 sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:h-full" />
          <img src={schoolImg.url} alt="St Francis De Assisi Matric School entrance, home of the academy ground" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
          {[2].map((n) => (
            <div key={n} className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-input bg-secondary text-muted-foreground">
              <ImageIcon className="h-7 w-7" aria-hidden /><span className="text-sm font-medium">More ground photos coming soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquiryForm() {
  const send = useServerFn(submitEnquiry);
  const [values, setValues] = useState({ fullName: "", mobile: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: "idle" | "sending" | "success" | "error"; msg?: string }>({ type: "idle" });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status.type === "sending") return;
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] ??= i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus({ type: "sending" });
    try {
      const r = await send({ data: values });
      if (r.ok) {
        setValues({ fullName: "", mobile: "", email: "" });
        setStatus({ type: "success", msg: "Thank you! Your enquiry has been received. The academy will contact you soon." });
      } else setStatus({ type: "error", msg: r.message });
    } catch {
      setStatus({ type: "error", msg: "Something went wrong. Please try again or call 7358866644." });
    }
  }

  const field = (name: keyof typeof values, label: string, type: string, auto: string, inputMode?: "tel" | "email") => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-navy-foreground">{label} <span className="text-orange">*</span></label>
      <input
        id={name} name={name} type={type} autoComplete={auto} inputMode={inputMode} value={values[name]}
        onChange={(e) => setValues({ ...values, [name]: e.target.value })}
        aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined}
        className="h-12 w-full rounded-lg border border-input bg-background px-4 text-base text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
      {errors[name] && <p id={`${name}-err`} className="mt-1.5 text-sm text-orange">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      {field("fullName", "Full Name", "text", "name")}
      {field("mobile", "Mobile Number", "tel", "tel", "tel")}
      {field("email", "Email Address", "email", "email", "email")}
      <button type="submit" disabled={status.type === "sending"} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary font-display text-lg font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60">
        {status.type === "sending" ? <><Loader2 className="h-5 w-5 animate-spin" />Sending…</> : "Submit Enquiry"}
      </button>
      <div aria-live="polite">
        {status.type === "success" && <p className="flex gap-2 rounded-lg bg-success/15 p-3 text-sm text-navy-foreground"><CheckCircle2 className="h-5 w-5 shrink-0 text-success" />{status.msg}</p>}
        {status.type === "error" && <p className="flex gap-2 rounded-lg bg-orange/15 p-3 text-sm text-navy-foreground"><AlertCircle className="h-5 w-5 shrink-0 text-orange" />{status.msg}</p>}
      </div>
    </form>
  );
}

function Enquire() {
  return (
    <section id="enquire" className="bg-navy py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow">Enquiry</p>
          <h2 className="mt-3 text-3xl font-bold text-navy-foreground sm:text-4xl">Interested in Joining?</h2>
          <p className="mt-4 text-lg text-navy-muted">Leave your details and the academy will get in touch with you.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={PHONE_TEL} variant="outline"><Phone className="h-5 w-5" />{PHONE_DISPLAY}</Btn>
            <Btn href={WHATSAPP} variant="outline" target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />WhatsApp</Btn>
          </div>
        </div>
        <div className="rounded-2xl border border-navy-border bg-navy-foreground/5 p-6 sm:p-8"><EnquiryForm /></div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
        <iframe
          src={MAPS_EMBED}
          title="Map showing CRIKVANTA CRICKET ACADEMY at St Francis De Assisi Matric School, Tindivanam"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="aspect-[4/3] w-full rounded-2xl border shadow-card"
          allowFullScreen
        />
        <div>
          <p className="eyebrow">Location &amp; Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Visit Our Academy</h2>
          <p className="mt-4 text-lg text-muted-foreground">You're welcome to visit the ground during training hours and see the academy for yourself.</p>
          <p className="mt-6 flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary" /><span>{ADDRESS}</span></p>
          <p className="mt-3 flex gap-3"><Phone className="h-5 w-5 shrink-0 text-primary" /><a href={PHONE_TEL} className="font-semibold hover:text-primary">{PHONE_DISPLAY}</a></p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={MAPS_URL} target="_blank" rel="noopener noreferrer"><Navigation className="h-5 w-5" />Get Directions</Btn>
            <Btn href={WHATSAPP} variant="ghost" target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5 text-success" />WhatsApp Us</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-10 text-navy-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="" className="h-14 w-auto" width={57} height={56} loading="lazy" />
          <span className="font-display font-bold text-navy-foreground">CRIKVANTA CRICKET ACADEMY</span>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
          {NAV.map(([l, id]) => <a key={id} href={`#${id}`} className="hover:text-navy-foreground">{l}</a>)}
        </nav>
        <div className="flex flex-col gap-1 text-sm">
          <a href={PHONE_TEL} className="hover:text-navy-foreground">Call {PHONE_DISPLAY}</a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-navy-foreground">Google Maps directions</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl border-t border-navy-border px-4 pt-6 text-xs sm:px-6">© {new Date().getFullYear()} CRIKVANTA CRICKET ACADEMY. All rights reserved.</p>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero /><About /><Coach /><Training /><Facilities /><Gallery /><Enquire /><Location />
      </main>
      <Footer />
    </>
  );
}
