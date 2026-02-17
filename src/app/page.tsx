"use client";

import { useRef } from "react";
import Hero from "@/components/sections/Hero";
import MeshFeatures from "@/components/sections/MeshFeatures";
import Problem from "@/components/sections/Problem";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const meshSectionRef = useRef<HTMLDivElement>(null);
  const problemSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !overlayRef.current ||
        !meshSectionRef.current ||
        !problemSectionRef.current
      )
        return;
      gsap.fromTo(
        overlayRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: meshSectionRef.current,
            start: "70% top",
            endTrigger: problemSectionRef.current,
            end: "top 10%",
            scrub: 0.8,
          },
        }
      );
    },
    { scope: wrapperRef, dependencies: [] }
  );

  return (
    <div>
      <Hero />
      <div ref={wrapperRef} className="relative">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-white"
          aria-hidden
        />
        <div
          ref={overlayRef}
          className="bg-black-bg pointer-events-none absolute inset-0 -z-10 will-change-[opacity]"
          aria-hidden
        />
        <div ref={meshSectionRef}>
          <MeshFeatures />
        </div>
        <div ref={problemSectionRef}>
          <Problem />
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        quos cum repellendus nihil ullam quod magnam praesentium natus veniam.
        Voluptate, obcaecati. Illum voluptatum dolorum recusandae cumque totam
        obcaecati eum explicabo quo porro, deserunt ea voluptates officia ex
        doloribus id veniam. Animi officia cum in praesentium quod iusto beatae
        autem labore quaerat voluptas. Iusto dolore ut praesentium ratione
        cupiditate aliquid quaerat, sint quae voluptas ipsam maxime nesciunt
        ullam ea animi blanditiis hic. Animi inventore cum quam veritatis
        praesentium eligendi excepturi sint dolor odit fugiat ullam, esse
        pariatur iure quaerat aut cumque iste sequi harum odio! Fuga recusandae
        odit odio dolorum est reprehenderit, sunt dolor atque quo eum officiis
        iste expedita similique illum quisquam quas veritatis tempora.
        Laboriosam id esse quasi tenetur odit aliquid quod, quidem, architecto
        facere sapiente reiciendis ducimus totam! Optio quasi in minima
        consectetur, eos consequuntur corrupti? Veritatis minima id omnis beatae
        recusandae eius incidunt neque sunt blanditiis est, ut maiores amet
        atque saepe quod eos tempora necessitatibus illo, laborum repellat
        dolorum! Accusamus deserunt molestias provident praesentium perferendis
        possimus voluptas dolorum dolor assumenda, cum et maiores exercitationem
        aperiam corrupti sit optio nemo labore, saepe vitae nobis nihil
        nesciunt? Consectetur minima impedit quas sapiente fugit voluptates sint
        aliquid optio neque totam alias aspernatur, quibusdam doloremque aut.
        Fugiat suscipit voluptatum illum quo voluptate laudantium ab deleniti
        sed, hic perferendis! Nam ipsum porro nemo consectetur tenetur minima
        similique velit ipsa, error asperiores ad fugiat dolor quia ea, quam
        ullam praesentium quis optio architecto hic aperiam nostrum voluptates?
        Eveniet ex neque, porro dolores ut soluta asperiores ipsam accusamus rem
        eum beatae officia est pariatur illo doloremque nisi quaerat atque minus
        blanditiis hic facilis magni amet temporibus adipisci! Dolorum assumenda
        deleniti numquam voluptatibus voluptate, atque consectetur culpa
        voluptatem unde nulla maxime harum? Adipisci vel aliquid molestiae aut,
        praesentium ipsum minus non quibusdam alias possimus numquam neque iste,
        autem repellat quo quod iure! Sed voluptates nemo ut veniam tenetur hic
        iure aperiam dolor ea culpa, illo non delectus laudantium magnam
        blanditiis, porro laborum impedit. Eos, autem distinctio minus
        architecto reprehenderit assumenda! Consectetur labore tempora rerum
        eaque, quae magnam illo voluptate modi rem cum architecto repellat
        deserunt suscipit dignissimos eveniet earum impedit, omnis ipsam dolor
        tenetur commodi nostrum reprehenderit! Praesentium voluptatibus magni
        consequatur modi fugit cum voluptatum. Praesentium inventore deleniti et
        amet iusto ipsam, vitae suscipit, non doloribus debitis repellendus
        impedit, numquam atque quas iure id dolorum optio sint eos aliquid
        voluptates facilis. Nobis ratione animi delectus ipsum excepturi!
        Provident voluptate nihil maiores ducimus voluptatibus ipsam harum
        aliquid mollitia optio aut eius, officia error tempora ea sint? Deleniti
        repellat, neque doloremque eveniet non temporibus, in molestiae tenetur
        dolorem quis impedit deserunt iste. Totam nobis quasi sint! Beatae eum
        sunt nemo veritatis facere perferendis placeat sit at voluptas, aliquid
        repellat ducimus assumenda eligendi rem debitis praesentium inventore,
        nulla tenetur officia. Aut fugiat cum adipisci quos, similique inventore
        facilis veniam eveniet provident nam eligendi sint repellat ipsam sunt
        doloribus dolores beatae, doloremque consequuntur sed id magni
        repellendus! Rerum repudiandae obcaecati corporis quasi odit ipsum quas
        vel alias, ad unde laudantium aspernatur ipsa animi, mollitia vitae
        labore vero quam! Eos eum exercitationem quisquam nisi, aliquam
        laudantium eveniet magni voluptatem, sit velit sunt nemo harum pariatur
        deserunt numquam dolor accusantium corporis autem? Quae architecto velit
        molestiae vitae illo consequuntur voluptates nisi, delectus repellendus
        soluta omnis, ipsam autem quo, eius blanditiis ad molestias eos placeat
        nemo commodi officiis quos odit. Obcaecati quasi optio nostrum. Corporis
        temporibus nihil nobis dolore magnam rem explicabo consectetur quidem
        nulla, molestias animi autem deserunt doloremque odit quo, unde et
        quibusdam praesentium maiores, assumenda blanditiis. Optio consectetur
        facilis adipisci, vel, eos fugit assumenda id accusamus maiores fuga
        excepturi mollitia? Eius debitis odio tenetur est placeat distinctio
        modi saepe, magni eos voluptates fuga repellendus error vel cumque dolor
        quidem aspernatur consequuntur neque inventore cum recusandae
        exercitationem, earum velit tempora. Deserunt, deleniti iure vitae
        quibusdam repellendus alias dignissimos in rerum placeat quam
        reprehenderit animi voluptates, molestias beatae ipsum neque vero
        adipisci. Beatae, aut possimus molestiae exercitationem magni tenetur
        architecto perspiciatis quas non quod quisquam dolores mollitia quia
        nulla et. Nobis repudiandae enim voluptatibus nemo illum totam error
        distinctio veritatis vitae consequatur, officia unde numquam! Natus,
        quidem? Fuga saepe officia recusandae maiores nobis itaque, ad rerum
        fugit modi unde accusantium velit consequuntur tenetur. Neque illum quas
        a, hic provident omnis ipsam nisi. Impedit facilis, ipsam totam culpa
        odit commodi inventore illo esse praesentium repellendus! Rerum saepe
        sit officia soluta reiciendis! Magni perferendis molestiae quia tempora
        distinctio aliquam maxime nobis nesciunt ipsum cupiditate excepturi
        expedita tenetur deserunt ratione alias consectetur placeat explicabo
        magnam blanditiis illo repudiandae, eaque voluptatum dolores
        voluptatibus. Molestias architecto ipsa, modi dolore similique
        exercitationem veritatis cupiditate omnis quos doloribus deleniti, hic
        veniam, voluptates esse accusantium itaque expedita voluptas! Officiis a
        totam corporis obcaecati quisquam vitae ab pariatur nisi dicta illo? Ea
        repellendus doloremque, dolore, rerum enim explicabo consequatur vitae
        error eum labore, provident est aliquid aperiam velit itaque nobis
        architecto. Quibusdam minima eos architecto quam, nesciunt autem ullam
        quasi. Sapiente eaque laudantium, blanditiis veritatis rem architecto
        quod quos, non maxime officiis voluptatibus fuga ipsa cumque eum at
        recusandae inventore. Est assumenda nihil numquam, velit nulla nemo
        voluptatem, reprehenderit neque aut nesciunt sint nisi commodi sunt
        dolores. In sed tempora placeat adipisci error non quaerat velit ipsum
        expedita reprehenderit corporis nemo impedit omnis, quae nulla, neque
        fugit soluta atque aliquid eum sequi? Soluta odio et ea quod, neque
        aliquid repudiandae inventore rerum sint delectus quasi vitae quam
        expedita officiis fugiat molestiae officia obcaecati. Velit illum dicta
        dolores consequatur dolor reprehenderit dolorem possimus alias fugiat,
        aliquid aliquam nobis placeat repellendus soluta nulla inventore unde!
        Nesciunt repellendus sint ex quidem odio praesentium accusantium qui
        eaque tempore, consequuntur nihil numquam voluptatibus, fuga ut delectus
        architecto placeat quia neque sapiente dignissimos sit? Repudiandae
        aliquam, repellat dolor odit voluptas nihil culpa quasi accusamus
        perspiciatis ratione reiciendis asperiores doloribus iste veritatis
        incidunt eligendi recusandae praesentium nam reprehenderit sunt. Labore
        iusto eaque tempore quidem quae quisquam, voluptatum iure maxime eos
        esse qui sit, quos neque voluptate ducimus corporis corrupti placeat
        accusamus recusandae tempora a commodi ad?
      </div>
    </div>
  );
}
