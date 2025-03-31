import { Camera, BadgeCheck, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Jerrell</h1>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Medical student and freelance photographer capturing authentic
            moments through a unique perspective.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <img
              src="/lovable-uploads/9008fdf1-19a7-4042-90a1-9134e094eeae.png"
              alt="Jerrell Hasan C"
              className="rounded-md shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="space-y-4 text-lg">
              <p>
                As a medical student and freelance photographer based in the
                Philippines, I navigate between the precision of science and the
                emotion of art. My journey began when I discovered how both
                medicine and photography share a common goal: to understand and
                connect with people at a meaningful level.
              </p>
              <p>
                Throughout my academic journey in medicine, I've maintained my
                passion for photography, finding that each discipline enriches
                the other. My medical training has given me an eye for detail
                and an understanding of human expression that translates
                directly into my photographic work.
              </p>
              <p>
                Whether I'm documenting a medical mission, capturing the essence
                of a cultural celebration, or creating portraits that reveal
                authentic character, I approach each project with the same
                dedication to technical excellence and emotional truth.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-sand bg-opacity-20 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Camera size={40} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical Precision</h3>
              <p>
                I believe that masterful command of technical skills forms the
                foundation for creative freedom. Every detail matters - from
                lighting to composition.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Heart size={40} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Emotional Truth</h3>
              <p>
                The most compelling images resonate on an emotional level. I
                strive to capture authentic moments that tell a story and evoke
                genuine feeling.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BadgeCheck size={40} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ethical Approach</h3>
              <p>
                Respect for subjects, authenticity in representation, and
                integrity in the creative process guide all of my work as a
                photographer.
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-midnight">
                Camera Body
              </h3>
              <ul className="space-y-2 font-roboto-mono text-sm">
                <li className="flex justify-between">
                  <span>Nikon D5600</span>
                  <span className="text-muted-foreground">Primary Camera</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-midnight">Lenses</h3>
              <ul className="space-y-2 font-roboto-mono text-sm">
                <li className="flex justify-between">
                  <span>Nikon AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED</span>
                  <span className="text-muted-foreground">Telephoto</span>
                </li>
                <li className="flex justify-between">
                  <span>Nikon AF-S DX NIKKOR 18-105mm f/3.5-5.6G ED VR</span>
                  <span className="text-muted-foreground">Versatile Zoom</span>
                </li>
                <li className="flex justify-between">
                  <span>Nikon AF-S Nikkor 50mm f/1.8G</span>
                  <span className="text-muted-foreground">Portraits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Career Timeline
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="font-roboto-mono text-gold font-bold text-xl md:text-right md:pr-8">
                  2023 - Present
                </div>
              </div>
              <div className="md:w-2/3 md:border-l-2 md:border-gold md:pl-8 pt-4 md:pt-0">
                <h3 className="text-xl font-bold mb-2">Medical Education</h3>
                <p>
                  Pursuing medical studies while developing specialized
                  photography services for healthcare documentation and medical
                  publications.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="font-roboto-mono text-gold font-bold text-xl md:text-right md:pr-8">
                  2021 - 2023
                </div>
              </div>
              <div className="md:w-2/3 md:border-l-2 md:border-gold md:pl-8 pt-4 md:pt-0">
                <h3 className="text-xl font-bold mb-2">
                  Commercial Photography
                </h3>
                <p>
                  Expanded services to include commercial clients, developing a
                  portfolio of product and corporate photography with major
                  brands.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="font-roboto-mono text-gold font-bold text-xl md:text-right md:pr-8">
                  2018 - 2021
                </div>
              </div>
              <div className="md:w-2/3 md:border-l-2 md:border-gold md:pl-8 pt-4 md:pt-0">
                <h3 className="text-xl font-bold mb-2">Event Photography</h3>
                <p>
                  Specialized in cultural events, academic ceremonies, and
                  private celebrations, developing a documentary-style approach
                  to event photography.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="font-roboto-mono text-gold font-bold text-xl md:text-right md:pr-8">
                  2016 - 2018
                </div>
              </div>
              <div className="md:w-2/3 md:border-l-2 md:border-gold md:pl-8 pt-4 md:pt-0">
                <h3 className="text-xl font-bold mb-2">Portraiture Focus</h3>
                <p>
                  Began professional photography journey with a focus on
                  portrait photography, developing a distinctive style that
                  emphasizes authentic expressions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
