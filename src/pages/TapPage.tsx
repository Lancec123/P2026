import { Link } from "react-router-dom";

const TapPage = () => {
  return (
    <main className="min-h-screen pt-28 bg-[#f4f7f3] text-ink">

      <Link
        to="/"
        className="fixed top-6 left-6 z-50 px-4 py-2 bg-ink text-paper text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
      >
        ← Home
      </Link>

      {/* HERO */}
      <section className="container text-center mb-20">
        <h1 className="text-6xl font-serif-display mb-4">
          TAP
        </h1>

        <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
          Torch Ambassador Project (TAP) is a peer-to-peer fundraising initiative
          that empowers youth and young adults to support upcoming camp activities
          through creative community engagement.
        </p>
      </section>

      {/* ABOUT TAP */}
      <section className="container max-w-3xl mb-24 text-center">
        <h2 className="text-3xl font-serif-display mb-6">
          About TAP
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Inspired by initiatives such as Relay For Life, participants are encouraged
          to engage their communities through fundraising activities such as bake sales,
          donation events, and creative outreach efforts.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          The goal is to raise support for Torch’s upcoming camp activities while building
          leadership skills and meaningful connections.
        </p>

        <p className="mt-6 text-ink font-medium">
          Goal: $10,000
        </p>
      </section>

      {/* FUNDRAISING METHODS */}
      <section className="container max-w-5xl mb-24">
        <h2 className="text-3xl font-serif-display text-center mb-10">
          Fundraising Methods
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-center">

          <div className="p-6">
            <h3 className="text-xl mb-2">Community Events</h3>
            <p className="text-muted-foreground">
              Host donation-based events, bake sales, or local fundraising initiatives.
            </p>
          </div>

          <div className="p-6">
            <h3 className="text-xl mb-2">Personal Outreach</h3>
            <p className="text-muted-foreground">
              Reach out to friends, family, and your wider community for support.
            </p>
          </div>

        </div>
      </section>

      {/* DONATION INSTRUCTIONS */}
      <section className="bg-[#e8efe9] py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-serif-display mb-8">
            How to Donate
          </h2>

          <div className="space-y-8 text-muted-foreground leading-relaxed">

            <div>
              <p className="font-medium text-ink mb-2">Interac e-Transfer</p>
              <p>
                Send donations to: <strong>finance@winontario.org</strong>
              </p>
              <p>
                Include “TAP – Ambassador Name” in the message/note section.
              </p>
              <p className="text-sm mt-2">
                Donations without a fund code will be allocated to the General Fund.
              </p>
            </div>

            <div>
              <p className="font-medium text-ink mb-2">Subsplash</p>
              <p>
                Select “Pursuit Camp – General” and choose the Torch Ambassador you are supporting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VOLUNTEER / PRAY */}
      <section className="container max-w-5xl py-24">
        <h2 className="text-3xl font-serif-display text-center mb-10">
          Other Ways to Get Involved
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-center">

          <div>
            <h3 className="text-xl mb-2">Volunteer</h3>
            <p className="text-muted-foreground mb-4">
              Serve at camp and help young people grow in their faith.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Fee: $30.00
            </p>
            <button className="px-6 py-2 bg-ink text-paper text-xs uppercase tracking-[0.2em]">
              Volunteer
            </button>
          </div>

          <div>
            <h3 className="text-xl mb-2">Pray</h3>
            <p className="text-muted-foreground mb-4">
              Join a prayer list and support camp through intercession.
            </p>
            <button className="px-6 py-2 bg-ink text-paper text-xs uppercase tracking-[0.2em]">
              Sign Up
            </button>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="container max-w-3xl pb-24">
        <h2 className="text-3xl font-serif-display text-center mb-10">
          FAQs
        </h2>

        <div className="space-y-8 text-muted-foreground">

          <div>
            <p className="font-medium text-ink mb-2">
              What is the Torch Ambassador Project?
            </p>
            <p>
              A peer-to-peer fundraising initiative where youth raise support for camp
              through community engagement and events.
            </p>
          </div>

          <div>
            <p className="font-medium text-ink mb-2">
              How do I get involved?
            </p>
            <p>
              Sign up through the registration process and begin your fundraising activities
              using the provided resources.
            </p>
          </div>

          <div>
            <p className="font-medium text-ink mb-2">
              Why participate?
            </p>
            <p>
              You develop leadership skills, grow community connections, and contribute
              directly to impactful camp experiences.
            </p>
          </div>

        </div>
      </section>

      {/* SOCIAL */}
      <section className="text-center pb-24 text-muted-foreground">
        <p className="mb-4">Follow us</p>
        <p>@torchministry · @wintorchministry</p>
      </section>

    </main>
  );
};

export default TapPage;