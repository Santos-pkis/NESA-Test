import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface Category {
  title: string;
  description: string;
  subCategories?: SubCategory[];
}

interface SubCategory {
  title: string;
  description: string;
  nominees?: Nominee[];
}

interface Nominee {
  name: string;
  image: string;
  achievement: string;
}

  const categories = [
    {
      title: "Africa Lifetime Education Icon Special Recognition Award",
      description: "The Africa Lifetime Education Icon Special Recognition Award is the pinnacle of the NESA-Africa awards and the Santos Creations Educational Foundation. Envisioned as the Africa education advocacy Nobel award recognition, this prestigious accolade honors individuals from around the world who have dedicated their lives to advancing sustainable education for all in Africa, aligning with the United Nations Sustainable Development Goal 4 (SDG 4) - Quality Education.",
      subCategories: [
        {
          title: "Africa Education Philanthropy Icon Of The Decade (2014-2024)",
          description: "Honors significant philanthropic contributions that have improved educational access and quality, advancing SDG 4's targets.",
          nominees: [
            { name: "Aliko Dangote", image: "/images/africaicons/aliko-dangote.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Mo Ibrahim", image: "/images/africaicons/mo-ibrahim.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Strive Masiyiwa", image: "/images/africaicons/strive-masiyiwa.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Folorunso Alakija", image: "/images/africaicons/folorunso-alakija.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Patrice Motsepe", image: "/images/africaicons/patrice-motsepe.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Tony Elumelu", image: "/images/africaicons/tony-elumelu.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Isabel dos Santos", image: "/images/africaicons/isabel-santos.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Nassef Sawiris", image: "/images/africaicons/nassef-sawiris.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Osei Kwame", image: "/images/africaicons/osei-kwame.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Tsitsi Masiyiwa", image: "/images/africaicons/tsitsi-masiyiwa.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },


          ]
        },
        {
          title: "Literary And New Curriculum Advocate Africa Education Icon Of The Decade (2014-2024)",
          description: "Honors significant contributions to literature and curriculum development in African education.",
          nominees: [
            { name: "Ngugi wa Thiong'o", image: "/images/africaicons/ngugi-wa-thiongo.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Chinua Achebe", image: "/images/africaicons/chinua-achebe.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Mariama Ba", image: "/images/africaicons/mariama-ba.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Chris Abani", image: "/images/africaicons/chris-abani.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Buchi Emecheta", image: "/images/africaicons/buchi-emecheta.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Chimamanda Ngozi Adichie", image: "/images/africaicons/chimamanda-ngozi-adichie.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Wole Soyinka", image: "/images/africaicons/wole-soyinka.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Ama Ata Aidoo", image: "/images/africaicons/ama-ata-aidoo.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Nnedi Okorafor", image: "/images/africaicons/nnedi-okorafor.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Teju Cole", image: "/images/africaicons/teju-cole.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
          ]
        },
        {
          title: "Africa Technical Educator Icon Of The Decade (2014-2024)",
          description: "Recognizes outstanding contributions to technical education in Africa.",
          nominees: [
            { name: "Patrick Awuah", image: "/images/africaicons/patrick-awuah.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Ndidi Nwuneli", image: "/images/africaicons/ndidi-nwuneli.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Fred Swaniker", image: "/images/africaicons/fred-swaniker.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Oluseun Onigbinde", image: "/images/africaicons/oluseun-onigbinde.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Bright Simons", image: "/images/africaicons/bright-simons.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Rebecca Enonchong", image: "/images/africaicons/rebecca-enonchong.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Judith Owigar", image: "/images/africaicons/judith-owigar.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Tunde Kehinde", image: "/images/africaicons/tunde-kehinde.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Iyinoluwa Aboyeji", image: "/images/africaicons/iyinoluwa-aboyeji.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { name: "Audrey Cheng", image: "/images/africaicons/audrey-cheng.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
          ]
        }
      ]
    },
  {
    title: "The Overall Best NGO Contribution to Achieving Education for All in Nigeria 2024",
    description:
      "Celebrates NGOs that have made significant improvements in educational access, quality, and innovation from 2013-2024.",
  },
  {
    title: "Africa Diaspora association Educational Impact Projects Recognition Award in Africa",
    description:
      "Honoring the significant contributions made by diaspora organizations towards achieving \"Education for all\" across the African Continent.",
  },
  {
    title: "The Overall Best CSR for Education in Nigeria Award 2024",
    description:  "Honoring corporate social responsibility by banks, telecommunications, and other sectors, and showing their impactful CSR initiatives that have ...",
    subCategories: [
    {
      title: "Banking And Finance CSR in Education Award",
      description: "Recognizes financial institutions for their initiatives in supporting education.",
      nominees: [
        { name: "Access", image: "/images/csricons/access.png", achievement: "Significant contributions to education initiatives." },
        { name: "FirstBank", image: "/images/csricons/firstbank.png", achievement: "Significant contributions to education initiatives." },
        { name: "Zenith", image: "/images/csricons/zenith.png", achievement: "Significant contributions to education initiatives." },
        { name: "GTB", image: "/images/csricons/gtb.png", achievement: "Significant contributions to education initiatives." },
        { name: "UBA", image: "/images/csricons/uba.png", achievement: "Significant contributions to education initiatives." },
        { name: "Ecobank", image: "/images/csricons/ecobank.png", achievement: "Significant contributions to education initiatives." },
        { name: "Fidelity", image: "/images/csricons/fidelity.png", achievement: "Significant contributions to education initiatives." },
        { name: "StanbicIBTC", image: "/images/csricons/stanbicibtc.png", achievement: "Significant contributions to education initiatives." },
        { name: "Union Bank", image: "/images/csricons/union.png", achievement: "Significant contributions to education initiatives." },
        { name: "Sterling", image: "/images/csricons/sterling.png", achievement: "Significant contributions to education initiatives." }
      ]
    },
    {
      title: "Telecommunications CSR in Education Award",
      description: "Honors telecom companies for their support in digital learning programs and connectivity for education.",
      nominees: [
        { name: "MTN", image: "/images/mtn.png", achievement: "Significant contributions to digital learning and connectivity." },
        { name: "Airtel", image: "/images/airtel.png", achievement: "Significant contributions to digital learning and connectivity." },
        { name: "Glo", image: "/images/glo.png", achievement: "Significant contributions to digital learning and connectivity." },
        { name: "9mobile", image: "/images/9mobile.png", achievement: "Significant contributions to digital learning and connectivity." },
        { name: "Smile", image: "/images/smile.png", achievement: "Significant contributions to digital learning and connectivity." },
        { name: "Spectranet", image: "/images/spectranet.png", achievement: "Significant contributions to digital learning and connectivity." },
        { name: "Ntel", image: "/images/ntel.png", achievement: "Significant contributions to digital learning and connectivity." },
        { name: "MainOne", image: "/images/mainone.png", achievement: "Significant contributions to digital learning and connectivity." },
        { name: "SwiftNetworks", image: "/images/swiftnetworks.png", achievement: "Significant contributions to digital learning and connectivity." },
        { name: "ipNX", image: "/images/ipnx.png", achievement: "Significant contributions to digital learning and connectivity." }
      ]
    },
    {
      title: "Oil And Gas CSR in Education Award",
      description: "Celebrates oil and gas companies' contributions to educational development in their host communities.",
      nominees: [
        { name: "Shell Nigeria", image: "/images/shell.png", achievement: "Significant contributions to educational development in host communities." },
        { name: "ExxonMobil Nigeria", image: "/images/exxonmobil.png", achievement: "Significant contributions to educational development in host communities." },
        { name: "Chevron", image: "/images/chevron.png", achievement: "Significant contributions to educational development in host communities." },
        { name: "Total Nigeria", image: "/images/total.png", achievement: "Significant contributions to educational development in host communities." },
        { name: "Agip", image: "/images/agip.png", achievement: "Significant contributions to educational development in host communities." },
        { name: "Schlumberger Nigeria", image: "/images/schlumberger.png", achievement: "Significant contributions to educational development in host communities." },
        { name: "Baker Hughes", image: "/images/baker_hughes.png", achievement: "Significant contributions to educational development in host communities." },
        { name: "Seplat", image: "/images/seplat.png", achievement: "Significant contributions to educational development in host communities." },

        { name: "Addax Petroleum", image: "/images/addax.png", achievement: "Significant contributions to educational development in host communities." },
        { name: "OandoPLc", image: "/images/oando.png", achievement: "Significant contributions to educational development in host communities." },
      ]
    },
    {
      title: "Food And Beverages CSR in Education Award",
      description: "Acknowledges food and beverage companies' support for nutrition and education programs.",
      nominees: [
        { name: "NestleNigeria", image: "/images/csricons/nestlenigeria.png", achievement: "Significant support for nutrition and education programs." },
        { name: "Cadbury", image: "/images/csricons/cadbury.png", achievement: "Significant support for nutrition and education programs." },
        { name: "NigerianBreweries", image: "/images/csricons/nigerianbreweries.png", achievement: "Significant support for nutrition and education programs." },
        { name: "Guinness", image: "/images/csricons/guinness.png", achievement: "Significant support for nutrition and education programs." },
        { name: "FMNN", image: "/images/csricons/fmnn.png", achievement: "Significant support for nutrition and education programs." },
        { name: "CocaCola", image: "/images/csricons/cocacola.png", achievement: "Significant support for nutrition and education programs." },
        { name: "DangoteSugar", image: "/images/csricons/dangotesugar.png", achievement: "Significant support for nutrition and education programs." },
        { name: "PepsiCo Nigeria", image: "/images/csricons/pepsi.png", achievement: "Significant support for nutrition and education programs." },
        { name: "FrieslandCampina", image: "/images/csricons/frieslandcampina.png", achievement: "Significant support for nutrition and education programs." },
        { name: "Promasidor Nigeria", image: "/images/csricons/promasi.png", achievement: "Significant support for nutrition and education programs." }
      ]
    },
    {
      title: "Manufacturing CSR in Education Award",
      description: "Recognizes manufacturing companies for their initiatives in technical and vocational education.",
      nominees: [
        { name: "DangoteCement", image: "/images/csricons/dangotecement.png", achievement: "Significant initiatives in technical and vocational education." },
        { name: "Nigerian Bottling Company", image: "/images/csricons/bottle.png", achievement: "Significant initiatives in technical and vocational education." },

        { name: "Lafarge", image: "/images/csricons/lafarge.png", achievement: "Significant initiatives in technical and vocational education." },
        { name: "Unilever", image: "/images/csricons/unilever.png", achievement: "Significant initiatives in technical and vocational education." },
        { name: "PZ", image: "/images/csricons/pz.png", achievement: "Significant initiatives in technical and vocational education." },
        { name: "Procter & Gamble Nigeria", image: "/images/csricons/pg.png", achievement: "Significant initiatives in technical and vocational education." },
        { name: "Honeywell", image: "/images/csricons/honeywell.png", achievement: "Significant initiatives in technical and vocational education." },
        { name: "BUA", image: "/images/csricons/bua.png", achievement: "Significant initiatives in technical and vocational education." },
        { name: "Innoson Vehicle Manufacturing", image: "/images/csricons/innoson.png", achievement: "Significant initiatives in technical and vocational education." },
        { name: "May & Baker Nigeria", image: "/images/csricons/mb.png", achievement: "Significant initiatives in technical and vocational education." }
      ]
    },
    {
      title: "Aviation CSR in Education Award",
      description: "Honors aviation companies for their support of aerospace education and training programs.",
      nominees: [
        { name: "ArikAir", image: "/images/csricons/arikair.png", achievement: "Significant support for aerospace education and training programs." },
        { name: "AirPeace", image: "/images/csricons/airpeace.png", achievement: "Significant support for aerospace education and training programs." },
        { name: "DanaAir", image: "/images/csricons/danaair.png", achievement: "Significant support for aerospace education and training programs." },
        { name: "IbomAir", image: "/images/csricons/ibomair.png", achievement: "Significant support for aerospace education and training programs." },
        { name: "Aero", image: "/images/csricons/aero.png", achievement: "Significant support for aerospace education and training programs." },
        { name: "AzmanAir", image: "/images/csricons/azmanair.png", achievement: "Significant support for aerospace education and training programs." },
        { name: "OverlandAirways", image: "/images/csricons/overlandairways.png", achievement: "Significant support for aerospace education and training programs." },
        { name: "Med-View Airline", image: "/images/csricons/med.png", achievement: "Significant support for aerospace education and training programs." },
        { name: "GreenAfrica", image: "/images/csricons/greenafrica.png", achievement: "Significant support for aerospace education and training programs." },
        { name: "Max Air", image: "/images/csricons/max.png", achievement: "Significant support for aerospace education and training programs." }
      ]
    },
    {
      title: "Technology And ICT CSR in Education Award",
      description: "Recognizes tech companies for their initiatives in digital education, ICT training, and e-learning support.",
      nominees: [
        { name: "Microsoft", image: "/images/csricons/microsoft.png", achievement: "Significant initiatives in digital education and ICT training." },
        { name: "Google", image: "/images/csricons/google.png", achievement: "Significant initiatives in digital education and ICT training." },
        { name: "Andela", image: "/images/csricons/andela.png", achievement: "Significant initiatives in digital education and ICT training." },
        { name: "Flutterwave", image: "/images/csricons/flutterwave.png", achievement: "Significant initiatives in digital education and ICT training." },
        { name: "Paystack", image: "/images/csricons/paystack.png", achievement: "Significant initiatives in digital education and ICT training." },
        { name: "Interswitch", image: "/images/csricons/interswitch.png", achievement: "Significant initiatives in digital education and ICT training." },
        { name: "Jumia", image: "/images/csricons/jumia.png", achievement: "Significant initiatives in digital education and ICT training." },
        { name: "Konga", image: "/images/csricons/konga.png", achievement: "Significant initiatives in digital education and ICT training." },
        { name: "Tek Experts Nigeria", image: "/images/csricons/te.png", achievement: "Significant initiatives in digital education and ICT training." },
        { name: "Cisco", image: "/images/csricons/cisco.png", achievement: "Significant initiatives in digital education and ICT training." }
      ]
    },
    {
      title: "Real Estate And Construction CSR in Education Award",
      description: "Honors companies in the real estate and construction sector for their educational infrastructure support.",
      nominees: [
        { name: "JuliusBerger", image: "/images/csricons/juliusberger.png", achievement: "Significant educational infrastructure support." },
        { name: "Dangote", image: "/images/csricons/dangote.png", achievement: "Significant educational infrastructure support." },
        { name: "Cappa & D'Alberto Plc", image: "/images/csricons/cd.png", achievement: "Significant educational infrastructure support." },
        { name: "Dantata & Sawoe Construction", image: "/images/csricons/ds.png", achievement: "Significant educational infrastructure support." },
        { name: "RCC", image: "/images/csricons/rcc.png", achievement: "Significant educational infrastructure support." },
        { name: "ITB Nigeria", image: "/images/csricons/itb.png", achievement: "Significant educational infrastructure support." },
        { name: "Costain West Africa", image: "/images/csricons/cwa.png", achievement: "Significant educational infrastructure support." },
        { name: "El-Alan Construction Company", image: "/images/csricons/ellanroadconstruction.png", achievement: "Significant educational infrastructure support." },
        { name: "Setraco", image: "/images/csricons/setraco.png", achievement: "Significant educational infrastructure support." },
        { name: "Arab Contractors", image: "/images/csricons/arabhomes.png", achievement: "Significant educational infrastructure support." }
      ]
    },
    {
      title: "Retail And E-Commerce CSR in Education Award",
      description: "Recognizes retail and e-commerce companies for their support of education through various initiatives.",
      nominees: [
        { name: "Shoprite", image: "/images/csricons/shoprite.png", achievement: "Significant support for education through various initiatives." },
        { name: "SPAR", image: "/images/csricons/spar.png", achievement: "Significant support for education through various initiatives." },
        { name: "Jumia", image: "/images/csricons/jumia.png", achievement: "Significant support for education through various initiatives." },
        { name: "Konga", image: "/images/csricons/konga.png", achievement: "Significant support for education through various initiatives." },
        { name: "Justrite", image: "/images/csricons/justrite.png", achievement: "Significant support for education through various initiatives." },
        { name: "Game", image: "/images/csricons/game.png", achievement: "Significant support for education through various initiatives." },

        { name: "Prince Ebeano Supermarket", image: "/images/csricons/pes.png", achievement: "Significant support for education through various initiatives." },
        { name: "Addide Supermarket", image: "/images/csricons/addide.png", achievement: "Significant support for education through various initiatives." },
        { name: "Everyday Supermarket", image: "/images/csricons/everyday.png", achievement: "Significant support for education through various initiatives." },
        { name: "Hubmart Stores", image: "/images/csricons/hub.png", achievement: "Significant support for education through various initiatives." }
      ]
    },
    {
      title: "Pharmaceuticals CSR in Education Award",
      description: "Honors pharmaceutical companies for their support of health education and related initiatives.",
      nominees: [
        { name: "GSK", image: "/images/csricons/gsk.png", achievement: "Significant support for health education and related initiatives." },
        { name: "Pfizer", image: "/images/csricons/pfizer.png", achievement: "Significant support for health education and related initiatives." },
        { name: "Emzor", image: "/images/csricons/emzor.png", achievement: "Significant support for health education and related initiatives." },
        { name: "Fidson", image: "/images/csricons/fidson.png", achievement: "Significant support for health education and related initiatives." },
        { name: "MayrockPharmaceuticals", image: "/images/csricons/mayrockpharmaceuticals.png", achievement: "Significant support for health education and related initiatives." },
      { name: "Neimeth", image: "/images/csricons/neimeth.png", achievement: "Significant support for health education and related initiatives." },
      { name: "Swipha", image: "/images/csricons/swipha.png", achievement: "Significant support for health education and related initiatives." },
      { name: "Drugfield", image: "/images/csricons/drugfield.png", achievement: "Significant support for health education and related initiatives." },
      { name: "RanbaxyNigeria", image: "/images/csricons/ranbaxynigeria.png", achievement: "Significant support for health education and related initiatives." },
      { name: "MaySomeday", image: "/images/csricons/maysomeday.png", achievement: "Significant support for health education and related initiatives." }
    ]
  },
  {
    title: "Insurance CSR in Education Award",
    description: "Recognizes insurance companies for their contributions to financial literacy and education programs.",
    nominees: [
      { name: "AXAMansard", image: "/images/csricons/axamansard.png", achievement: "Significant contributions to financial literacy and education programs." },
      { name: "LegacyPension", image: "/images/csricons/legacypension.png", achievement: "Significant contributions to financial literacy and education programs." },
      { name: "Custodian", image: "/images/csricons/custodian.png", achievement: "Significant contributions to financial literacy and education programs." },
      { name: "Leadway", image: "/images/csricons/leadway.png", achievement: "Significant contributions to financial literacy and education programs." },
      { name: "NEM", image: "/images/csricons/nem.png", achievement: "Significant contributions to financial literacy and education programs." },
      { name: "AIICO", image: "/images/csricons/aiico.png", achievement: "Significant contributions to financial literacy and education programs." },
      { name: "Cornerstone", image: "/images/csricons/cornerstone.png", achievement: "Significant contributions to financial literacy and education programs." },
      { name: "Lasaco", image: "/images/csricons/lasaco.png", achievement: "Significant contributions to financial literacy and education programs." },
      { name: "VeritasKapital", image: "/images/csricons/veritaskapital.png", achievement: "Significant contributions to financial literacy and education programs." },
      { name: "WapiccInsurance", image: "/images/csricons/wapiccinsurance.png", achievement: "Significant contributions to financial literacy and education programs." }
    ]
  },
  {
    title: "Conglomerates And Diversified Companies CSR in Education Award",
    description: "Honors diversified companies for their wide-ranging support of educational initiatives.",
    nominees: [
      { name: "Dangote", image: "/images/csricons/dangote.png", achievement: "Wide-ranging support of educational initiatives." },
      { name: "BUA", image: "/images/csricons/bua.png", achievement: "Wide-ranging support of educational initiatives." },
      { name: "Honeywell", image: "/images/csricons/honeywell.png", achievement: "Wide-ranging support of educational initiatives." },
      { name: "Transnational", image: "/images/csricons/transnational.png", achievement: "Wide-ranging support of educational initiatives." },
      { name: "UACN", image: "/images/csricons/uacn.png", achievement: "Wide-ranging support of educational initiatives." },
      { name: "JohnHolt", image: "/images/csricons/johnholt.png", achievement: "Wide-ranging support of educational initiatives." },
      { name: "CFAO", image: "/images/csricons/cfao.png", achievement: "Wide-ranging support of educational initiatives." },
      { name: "AG Leventis", image: "/images/csricons/agleventis.png", achievement: "Wide-ranging support of educational initiatives." },
      { name: "Chellarams", image: "/images/csricons/chellarams.png", achievement: "Wide-ranging support of educational initiatives." },
      { name: "NBM", image: "/images/csricons/nbm.png", achievement: "Wide-ranging support of educational initiatives." }
    ]
  },
  {
    title: "Media And Entertainment CSR in Education Award",
    description: "Recognizes media and entertainment companies for their support of educational content and initiatives.",
    nominees: [
      { name: "MultiChoice", image: "/images/csricons/multichoice.png", achievement: "Significant support of educational content and initiatives." },
      { name: "Silverbird", image: "/images/csricons/silverbird.png", achievement: "Significant support of educational content and initiatives." },
      { name: "IROKOtv", image: "/images/csricons/irokotv.png", achievement: "Significant support of educational content and initiatives." },
      { name: "HipTV", image: "/images/csricons/hiptv.png", achievement: "Significant support of educational content and initiatives." },
      { name: "LindaIkejiTV", image: "/images/csricons/lindaikejitv.png", achievement: "Significant support of educational content and initiatives." },
      { name: "EbonyLife", image: "/images/csricons/ebonylife.png", achievement: "Significant support of educational content and initiatives." },
      { name: "Channels", image: "/images/csricons/channels.png", achievement: "Significant support of educational content and initiatives." },
      { name: "TVC", image: "/images/csricons/tvc.png", achievement: "Significant support of educational content and initiatives." },
      { name: "Arise", image: "/images/csricons/arise.png", achievement: "Significant support of educational content and initiatives." },
      { name: "TheCable", image: "/images/csricons/thecable.png", achievement: "Significant support of educational content and initiatives." }
    ]
  }
]
},
  
  {
    title: "CSR for Education special recognition award in Africa 2024",
    description:
      "Recognize the most outstanding educational technology companies that have made significant contributions to advancing education in Africa through...",
  },
  {
    title: "Best EduTech Organization in Nigeria and Africa 2024",
    description:
      "Acknowledges state governments that have demonstrated exemplary commitment and results in advancing education from 2013-2024.",
  },
  {
    title: "Overall best educational friendly state in Nigeria 2024",
    description:
      "Awards the tertiary institution that stands out in academic excellence, community engagement, and student support with notable ICT infrastructure.",
  },
  {
    title: "The best library in Nigerian tertiary institutions award 2024",
    description:
      "Recognizes libraries that have made exceptional contributions and excellence to educational research and innovation, thus shaping future educational strategies.",
  },
  {
    title: "The Overall Best Research and Development Contribution by Tertiary Institutions in Nigeria",
    description:
      "Recognizing media role in educational awareness and innovation. Awards media houses and organizations that effectively contribute to educational development.",
  },
  {
    title: "The Overall Best Media Organization in Nigeria with Outstanding Education Focus",
    description:
      "Honors exceptional media/news award programs for educational collaborations and contributes to Nigeria educational development.",
  },
  {
    title: "International and Bilateral Contributors to Education in Nigeria Recognition award 2024",
    description:
      "Honoring international bodies for their impactful cooperative efforts that significantly impact the educational sector.",
  },
  {
    title: "Christian faith organization Educational Champion of the Decade Award",
    description:
      "Recognizing Christian faith-based organizations for their outstanding contributions to education advancement.",
  },
  {
    title: "Islamic faith organization Educational Champion of the Decade Award in Nigeria (2013-2024)",
    description:
      "Celebrating Islamic faith-based organizations for their crucial role in advancing and diversifying educational opportunities.",
  },
  {
    title: "Recognition for the best educational support by a Political leaders in Nigeria 2024",
    description:
      "Award for both state and federal government officials who have championed STEM education and technological advancement in learning.",
  },
  {
    title: "Creative arts Industry contribution to education in Nigeria 2024",
    description:
      "Recognizing efforts towards advancing education through creative arts and dedication to achieving quality education under SDG 4 objectives.",
  },
  {
    title: "Support for education in STEM in Nigeria 2024",
    description:
      "Celebrating initiatives by any organization for creative arts role in education and promoting hands-on learning experiences.",
  },
];
const AwardCategory: React.FC<{
  category: Category;
  onSelectCategory: (category: Category) => void;
  isFirst?: boolean;
}> = ({ category, onSelectCategory, isFirst = false }) => {
  const truncateDescription = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const truncatedDescription = truncateDescription(category.description, isFirst ? 300 : 100);

  return (
    <div
      className={`bg-[#191307] text-white rounded-3xl flex flex-col lg:${
        isFirst ? 'flex-row' : 'flex-col'
      } justify-between`}
      style={{
        width: '100%',
        height: 'auto',
        minHeight: isFirst ? '448px' : '540px',
      }}
    >
      <div className={`${isFirst ? 'lg:w-1/2' : 'w-full'} p-6 flex justify-center items-center`}>
        <div className="relative w-full" style={{
          paddingBottom: '66.67%', // 3:2 aspect ratio
        }}>
          <Image
            src="/images/nesa-card2.png"
            alt="NESA Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div
        className={`${
          isFirst ? 'lg:w-1/2' : 'w-full'
        } p-6 flex flex-col justify-between`}
      >
        <div>
          <h3 className="text-xl font-bold mb-2">{category.title}</h3>
          <p className="text-sm mb-4">{truncatedDescription}</p>
        </div>
        <div className="mt-auto">
          <button
            onClick={() => onSelectCategory(category)}
            className="w-full py-2 px-4 rounded-lg font-medium"
            style={{
              background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
              color: 'black',
            }}
          >
            See Sub-Categories
          </button>
        </div>
      </div>
    </div>
  );
};

const SubCategory: React.FC<{
  subCategory: SubCategory;
  onSelectSubCategory: (subCategory: SubCategory) => void;
}> = ({ subCategory, onSelectSubCategory }) => {
  return (
    <div className="bg-[#191307] text-white rounded-3xl flex flex-col justify-between" style={{ width: '100%', minHeight: '540px' }}>
      <div className="w-full p-6 flex justify-center items-center">
        <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
          <Image src="/images/nesa-card2.png" alt="NESA Logo" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="w-full p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold mb-2">{subCategory.title}</h3>
          <p className="text-sm mb-4">{subCategory.description}</p>
        </div>
        <div className="mt-auto">
          <button
            onClick={() => onSelectSubCategory(subCategory)}
            className="w-full py-2 px-4 rounded-lg font-medium"
            style={{
              background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
              color: 'black',
            }}
          >
            Nominate
          </button>
        </div>
      </div>
    </div>
  );
};

const Nominee: React.FC<{ nominee: Nominee }> = ({ nominee }) => {
  return (
    <div 
      className="bg-[#191307] text-white rounded-3xl p-6 flex flex-col justify-between" 
      style={{ width: '100%', minHeight: '540px' }}
    >
      <div>
        <div className="relative w-full mb-4 flex justify-center items-center">
          <div className="relative w-full" style={{ paddingBottom: '66.67%' }}>
            <Image 
              src={nominee.image} 
              alt={nominee.name} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-2xl" 
            />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{nominee.name}</h3>
        <p className="text-sm mb-4">{nominee.achievement}</p>
      </div>
      <button 
        className="w-full py-2 px-4 rounded-lg font-medium mt-auto" 
        style={{
          background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
          color: 'black',
        }}
      >
        Review
      </button>
    </div>
  );
};

const JudgePage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
  };

  const handleSelectSubCategory = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handleBack = () => {
    if (selectedSubCategory) {
      setSelectedSubCategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="bg-white py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12 sm:mb-16">
          {!selectedCategory && !selectedSubCategory && (
            <div className="relative mb-8 mt-12 sm:mt-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full max-w-[400px] h-[40px] pl-10 pr-4 py-2 rounded-lg"
                  style={{
                    background: '#FFF5E0',
                    padding: '12px 20px 12px 40px',
                  }}
                />
                <IoIosSearch
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          )}
          {(selectedCategory || selectedSubCategory) && (
            <div className="mb-8 mt-12 sm:mt-0">
              <button
                onClick={handleBack}
                className="flex items-center justify-center"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  background: 'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
                }}
              >
                <IoIosArrowBack size={24} color="white" />
              </button>
            </div>
          )}
          <div className={`mt-8 ${!selectedCategory && !selectedSubCategory ? 'text-center' : 'text-left'}`}>
            {!selectedCategory && !selectedSubCategory && (
              <h2 className="text-3xl font-medium mb-1">
                The Blue Garnet Award Categories
              </h2>
            )}
            {selectedCategory && !selectedSubCategory && (
              <h2 className="text-3xl font-medium mb-1">
                {selectedCategory.title}
              </h2>
            )}
            {selectedSubCategory && (
              <h2 className="text-3xl font-medium mb-1">
                The Nominee Profiles
              </h2>
            )}
            <div
              className={`mb-8 ${!selectedCategory && !selectedSubCategory ? 'mx-auto' : ''}`}
              style={{
                height: '4px',
                width: '150px',
                borderRadius: '8px',
                margin: !selectedCategory && !selectedSubCategory ? '1rem auto 2rem' : '1rem 0 2rem',
                background:
                  'linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)',
              }}
            ></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-start gap-6">
          {!selectedCategory && (
            <>
              <div className="w-full lg:col-span-3">
                <AwardCategory
                  key={0}
                  category={filteredCategories[0]}
                  onSelectCategory={handleSelectCategory}
                  isFirst={true}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {filteredCategories.slice(1).map((category, index) => (
                  <AwardCategory
                    key={index + 1}
                    category={category}
                    onSelectCategory={handleSelectCategory}
                  />
                ))}
              </div>
            </>
          )}
          {selectedCategory && selectedCategory.subCategories && !selectedSubCategory && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {selectedCategory.subCategories.map((subCategory, index) => (
                <SubCategory
                  key={index}
                  subCategory={subCategory}
                  onSelectSubCategory={handleSelectSubCategory}
                />
              ))}
            </div>
          )}
          {selectedSubCategory && selectedSubCategory.nominees && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {selectedSubCategory.nominees.map((nominee, index) => (
                <Nominee key={index} nominee={nominee} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JudgePage;