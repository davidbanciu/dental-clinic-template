import clinicImage from "../../../images/agency_hero.jpg";

export const OurStory = () => {
  return (
    <section className="bg-white px-6 py-24 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
        {/* Image */}
        <img
          src={clinicImage}
          alt="Our dental clinic"
          className="h-[500px] w-full rounded-3xl object-cover shadow-lg"
        />

        {/* Text */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Our Story
          </p>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900">
            A Bit More About Us
          </h2>

          <p className="mt-8 leading-8 text-slate-600">
            Our clinic was founded with one simple goal: helping patients feel
            comfortable and confident when visiting the dentist.
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            From preventive care and cosmetic dentistry to advanced treatments,
            we combine years of experience with modern technology to provide
            personalized dental care for every smile.
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            We believe great dentistry starts with listening to our patients and
            creating treatment plans that are clear, honest, and tailored to
            their needs.
          </p>

          <p className="mt-8 font-semibold text-slate-800">
            — Dr. John Smith, Clinic Founder
          </p>
        </div>
      </div>
    </section>
  );
};
