import React from "react";
import {
  Phone,
  MessageSquare,
  Hammer,
  Star,
  MapPin,
  CheckCircle,
  Wrench,
  Paintbrush,
  DoorOpen,
  Fan,
  Monitor,
  Fence,
  CreditCard,
  Clock,
  ShieldCheck,
  Mail,
  DollarSign,
  ThumbsUp,
  Send,
  Lightbulb,
  Ruler,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function UFHandymanWebsite() {
  const phoneDisplay = "314-XXX-XXXX";
  const phoneHref = "tel:1314XXXXXXX";
  const smsHref = "sms:1314XXXXXXX";
  const email = "ufhandyman@gmail.com";

  const LogoMark = ({ size = "md" }: { size?: "md" | "lg"; showText?: boolean }) => {
    return (
      <img
        src="/logo.png"
        alt="UF Handyman Services"
        className={size === "lg"
          ? "w-[260px] sm:w-[340px] h-auto object-contain"
          : "w-[140px] h-auto object-contain"
        }
      />
    );
  };

  const services = [
    { icon: Wrench, title: "Drywall Repair", text: "Patches, holes, cracks and texture touch-ups." },
    { icon: Monitor, title: "TV Mounting", text: "Secure wall mounting and clean setup." },
    { icon: Fan, title: "Ceiling Fan Installation", text: "Fan replacement and new fixture installs." },
    { icon: DoorOpen, title: "Door & Lock Repair", text: "Hinges, handles, locks and adjustments." },
    { icon: Lightbulb, title: "Fixture Installation", text: "Lights, outlets, basic fixture replacement." },
    { icon: Fence, title: "Fence & Deck Repair", text: "Loose boards, rails, gates and small repairs." },
    { icon: Paintbrush, title: "Painting Touch-Ups", text: "Interior touch-ups, trim and small areas." },
    { icon: Ruler, title: "Trim & Baseboards", text: "Small trim, baseboard and finish repairs." },
    { icon: Hammer, title: "General Home Repairs", text: "Small fixes, punch lists and honey-do jobs." },
  ];

  const pricing = [
    ["Minimum Service Call", "$120"],
    ["Drywall Repair", "$120"],
    ["TV Mounting", "$120"],
    ["Ceiling Fan Installation", "$150"],
    ["Light Fixture Installation", "$120"],
    ["Door & Lock Repair", "$100"],
    ["Faucet Replacement", "$140"],
    ["Garbage Disposal Installation", "$180"],
    ["Fence Repair", "$200"],
    ["Deck Repair", "$250"],
    ["Painting & Touch-Ups", "$150"],
    ["Shelf & Blinds Installation", "$100"],
    ["Trim & Baseboard Repair", "$120"],
    ["General Home Repairs", "$120"],
  ];

  const areas = [
    "Kirkwood",
    "Webster Groves",
    "Ballwin",
    "Maplewood",
    "Crestwood",
    "South County",
    "Chesterfield",
    "Manchester",
    "Fenton",
    "Sappington",
  ];

  const reviews = [
    {
      name: "Sarah M.",
      area: "Kirkwood",
      text: "Very professional and did excellent work. Will definitely use again!",
    },
    {
      name: "James P.",
      area: "Webster Groves",
      text: "Quick response, fair pricing, and great quality. Highly recommend.",
    },
    {
      name: "Lisa T.",
      area: "Maplewood",
      text: "Fixed several things around my house. Great attention to detail.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">
      {/* TOP BAR */}
      <div className="bg-slate-950 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-400" /> St. Louis & surrounding suburbs
          </div>
          <div className="hidden sm:block text-slate-300">Local home repairs • Fast estimates</div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 min-w-0">
            <img
              src="/logo.png"
              alt="UF Handyman Services"
              className="w-[74px] sm:w-[90px] h-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wide">
            <a href="#top" className="hover:text-orange-600">Home</a>
            <a href="#services" className="hover:text-orange-600">Services</a>
            <a href="#pricing" className="hover:text-orange-600">Pricing</a>
            <a href="#gallery" className="hover:text-orange-600">Gallery</a>
            <a href="#reviews" className="hover:text-orange-600">Reviews</a>
            <a href="#areas" className="hover:text-orange-600">Areas</a>
            <a href="#contact" className="hover:text-orange-600">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden sm:inline-flex bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-sm">
              <a href={smsHref}><MessageSquare className="h-4 w-4 mr-2" /> Text Photos</a>
            </Button>
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-sm">
              <a href={phoneHref}><Phone className="h-4 w-4 mr-2" /> <span className="hidden sm:inline">{phoneDisplay}</span><span className="sm:hidden">Call</span></a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-white">
        <div className="absolute inset-y-0 right-0 hidden lg:block w-[42%] bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.28),transparent_35%),linear-gradient(135deg,#0f2340,#020617)]" />
          <div className="absolute left-0 top-0 h-full w-24 bg-orange-500 skew-x-[-22deg] origin-top" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center relative">
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-950 max-w-3xl">
              Reliable Handyman Services in <span className="text-orange-500">St. Louis</span>
            </h1>
            <p className="text-lg text-slate-600 mt-5 max-w-xl">
              Drywall, TV mounting, fixtures, doors, fence repairs and small home projects — done cleanly and on time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-xl">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-base shadow-lg shadow-orange-500/20">
                <a href={phoneHref}><Phone className="h-5 w-5 mr-2" /> Call {phoneDisplay}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-950 hover:text-white rounded-xl text-base">
                <a href={smsHref}><MessageSquare className="h-5 w-5 mr-2" /> Text Photos for Estimate</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10 text-sm">
              {[
                [MapPin, "Locally Owned"],
                [ShieldCheck, "Licensed & Insured"],
                [ThumbsUp, "Quality Workmanship"],
                [CheckCircle, "Satisfaction Guaranteed"],
              ].map(([Icon, label]) => {
                const I = Icon as React.ElementType;
                return (
                  <div key={label as string} className="flex items-center gap-2 text-slate-700">
                    <I className="h-5 w-5 text-slate-950" />
                    <span className="font-semibold">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-slate-900">
              <div className="aspect-[4/3] bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.25),transparent_35%),linear-gradient(135deg,#10233f,#020617)] flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <Hammer className="h-20 w-20 mx-auto text-orange-400 mb-5" />
                  <div className="text-3xl font-black">Add Real Work Photo Here</div>
                  <p className="text-slate-300 mt-3 max-w-sm">Use a tools photo, drywall before/after, TV mounting, fence repair, or branded uniform image.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-slate-950 text-white border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 py-7 grid md:grid-cols-4 gap-6">
          {[
            [DollarSign, "Fair Pricing", "Clear, upfront pricing with no hidden fees."],
            [Clock, "Fast Response", "Quick replies and on-time service."],
            [ShieldCheck, "Quality Work", "Attention to detail on every project."],
            [MessageSquare, "Communication", "We keep you updated every step of the way."],
          ].map(([Icon, title, text]) => {
            const I = Icon as React.ElementType;
            return (
              <div key={title as string} className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl border border-white/20 flex items-center justify-center shrink-0">
                  <I className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wide">{title as string}</h3>
                  <p className="text-sm text-slate-300 mt-1">{text as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Popular Services</h2>
          <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-4">Common repairs and installations for homeowners, rentals and small punch lists.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.title} className="rounded-2xl border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5">
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-xl bg-slate-950 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">{s.title}</h3>
                    <p className="text-slate-600 mt-1 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
            <div className="space-y-6">
              <Card className="rounded-3xl shadow-sm border-slate-200 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-white p-8">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Pricing Policy</h2>
                    <div className="h-1 w-28 bg-orange-500 mt-4 rounded-full" />
                    <p className="text-slate-600 mt-5 leading-relaxed">
                      Clear starting prices. Final cost depends on materials, access, project size and existing conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-sm border-slate-200">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="h-16 w-16 rounded-full border-4 border-orange-500 flex items-center justify-center shrink-0">
                      <CreditCard className="h-8 w-8 text-slate-950" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase">Service Call</h3>
                      <p className="font-bold text-orange-600 mt-2">Minimum Service Call: Starting at $120</p>
                      <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                        <li>• Travel to property</li>
                        <li>• Initial assessment</li>
                        <li>• Basic small repair/service work</li>
                        <li>• Professional tools & cleanup</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-3xl border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-slate-950 text-white px-6 py-4 text-center">
                  <h3 className="font-black text-xl uppercase tracking-wide">Common Services & Starting Prices</h3>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                  {[pricing.slice(1, 8), pricing.slice(8)].map((col, idx) => (
                    <div key={idx} className="divide-y divide-slate-100">
                      {col.map(([service, price]) => (
                        <div key={service} className="flex items-center justify-between gap-3 px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-slate-950 flex items-center justify-center shrink-0">
                              <Hammer className="h-5 w-5 text-orange-400" />
                            </div>
                            <span className="font-bold text-sm sm:text-base">{service}</span>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-[10px] uppercase font-bold text-slate-500">Starting at</div>
                            <div className="text-xl font-black text-orange-600">{price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardContent className="p-8 flex gap-5 items-start">
                <div className="h-14 w-14 rounded-full bg-slate-950 flex items-center justify-center shrink-0">
                  <Ruler className="h-7 w-7 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase">Custom Projects</h3>
                  <p className="text-slate-600 mt-2">Larger jobs are quoted individually after photos or an on-site look.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardContent className="p-8 flex gap-5 items-start">
                <div className="h-14 w-14 rounded-full bg-slate-950 flex items-center justify-center shrink-0">
                  <Send className="h-7 w-7 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase">Free Estimates</h3>
                  <p className="text-slate-600 mt-2">Send photos for a rough quote. Larger projects may need an in-person estimate.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-slate-950 flex items-center justify-center shrink-0">
                  <CreditCard className="h-7 w-7 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-black text-2xl uppercase">Payment Methods</h3>
                  <p className="text-slate-600 mt-1">We accept:</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                {[
                  { src: '/pay-cash.png', alt: 'Cash' },
                  { src: '/pay-zelle.png', alt: 'Zelle' },
                  { src: '/pay-card.png', alt: 'Credit and debit cards' },
                  { src: '/pay-apple.png', alt: 'Apple Pay' },
                  { src: '/pay-google.png', alt: 'Google Pay' },
                ].map((method) => (
                  <div key={method.alt} className="flex items-center justify-center rounded-2xl bg-white border border-slate-100 p-2">
                    <div className="w-full max-w-[130px] overflow-hidden flex items-center justify-center">
                      <img src={method.src} alt={method.alt} className="w-full h-auto object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Recent Projects</h2>
          <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-4">Real before/after photos will be added as projects are completed.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {['Drywall Before', 'Drywall After', 'TV Mounting', 'Fence Repair'].map((item) => (
            <div key={item} className="rounded-3xl bg-slate-100 border border-slate-200 aspect-[4/3] flex flex-col items-center justify-center text-slate-500 font-bold overflow-hidden">
              <ImageIcon className="h-10 w-10 mb-3 text-orange-500" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">What Our Clients Say</h2>
            <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <Card key={r.name} className="rounded-3xl border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />)}
                  </div>
                  <p className="text-slate-700 italic">"{r.text}"</p>
                  <div className="mt-5 font-bold">{r.name}</div>
                  <div className="text-sm text-slate-500">{r.area}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-slate-950 hover:bg-slate-800 rounded-xl">View All Reviews on Google</Button>
          </div>
        </div>
      </section>

      {/* AREAS + CONTACT */}
      <section id="areas" className="bg-slate-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Service Areas</h2>
            <div className="h-1 w-20 bg-orange-500 mt-4 rounded-full" />
            <p className="text-slate-300 mt-5">Serving St. Louis and nearby suburbs.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-slate-200">
                  <MapPin className="h-4 w-4 text-orange-400" /> {area}
                </div>
              ))}
            </div>
          </div>
          <Card className="rounded-3xl bg-white text-slate-950 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-3xl font-black uppercase tracking-tight">Get a Free Estimate</h2>
              <p className="text-slate-600 mt-3">Text photos or send a request for a quick next step.</p>
              <form className="mt-6 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Name" />
                  <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Phone Number" />
                </div>
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Email" />
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="Address / City" />
                <textarea className="w-full min-h-28 rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500" placeholder="How can we help you?" />
                <Button type="button" className="w-full bg-orange-500 hover:bg-orange-600 rounded-xl py-6 text-base">Send Request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div>
            <h2 className="text-3xl font-black">Need a fast estimate?</h2>
            <p className="text-orange-50 mt-2">Text photos and your city for a fast rough quote.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button asChild size="lg" className="bg-slate-950 hover:bg-slate-800 text-white rounded-xl min-w-56">
              <a href={phoneHref}><Phone className="h-5 w-5 mr-2" /> Call {phoneDisplay}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 rounded-xl min-w-56">
              <a href={smsHref}><MessageSquare className="h-5 w-5 mr-2" /> Text Photos</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white border-t border-orange-500/30 py-10 pb-28 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-3">
            <LogoMark showText />
          </div>
          <div className="text-slate-300 text-sm space-y-2">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange-400" /> {phoneDisplay}</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange-400" /> {email}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-400" /> St. Louis, MO</div>
          </div>
          <div className="text-slate-400 text-sm md:text-right">
            <div>© 2026 UF Handyman Services. All rights reserved.</div>
            <div className="mt-2">Licensed & Insured • Satisfaction Guaranteed</div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-slate-950 border-t border-orange-500/30 p-3 grid grid-cols-2 gap-3">
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-6">
          <a href={phoneHref}><Phone className="h-4 w-4 mr-2" /> Call</a>
        </Button>
        <Button asChild className="bg-slate-800 hover:bg-slate-700 text-white rounded-xl py-6 border border-white/10">
          <a href={smsHref}><MessageSquare className="h-4 w-4 mr-2" /> Text</a>
        </Button>
      </div>
    </div>
  );
}
