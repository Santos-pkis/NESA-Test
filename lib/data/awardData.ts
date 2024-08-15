export interface Nominee {
  name: string;
  image: string;
  achievement: string;
  state?: string;
  country?: string;
}
  
  export interface SubCategory {
    title: string;
    description: string;
    nominees?: Nominee[];
  }
  
  export interface Category {
    title: string;
    description: string;
    subCategories?: SubCategory[];
  }
  
  export const categories: Category[] = [
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
              { name: "Folorunso Alakija", image: "/images/africaicons/Folorunso-alakija.png", achievement: "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
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
        "title": "Best NGO Education Support Recognition Award",
        "description": "This award recognizes non-governmental organizations (NGOs) that have made outstanding contributions to education in Africa through various initiatives and support programs.",
        "subCategories": [
          {
            "title": "Best Educational Infrastructure Initiative By An NGO",
            "description": "This award honors NGOs that have made substantial effort in improving or building educational infrastructure. It includes initiatives like constructing schools, libraries, and other educational facilities.",
            "nominees": [
              { "name": "Teach For Nigeria", "image": "/images/ngo/teach-for-nigeria.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Slum2School Africa", "image": "/images/ngo/slum2school.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "ActionAid Nigeria", "image": "/images/ngo/actionaid.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Plan International Nigeria", "image": "/images/ngo/plan-international-nigeria.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Malala Fund Nigeria", "image": "/images/ngo/malala-fund.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Girl Child Education Initiative", "image": "/images/ngo/girl-child-initiative.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Universal Learning Solutions", "image": "/images/ngo/universal-learning-solutions.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Bridge International Academies", "image": "/images/ngo/bridge.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Save the Children Nigeria", "image": "/images/ngo/save-the-children.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "UNICEF Nigeria", "image": "/images/ngo/unicef.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." }
            ]
          },
          {
            "title": "Exceptional Donation Of Educational Materials By An NGO",
            "description": "Recognizing NGOs that have significantly contributed educational material to schools and educational institutions like books, computers, and other learning resources.",
            "nominees": [
              { "name": "Nigeria Youth Futures Fund", "image": "/images/ngo/nigeria-youth-futures-fund.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "One Million Teachers", "image": "/images/ngo/one-million-teachers.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "The Education Partnership (TEP)", "image": "/images/ngo/the-education-partnership.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Street Child Nigeria", "image": "/images/ngo/street-child.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Educate Nigeria Initiative", "image": "/images/ngo/educate-nigeria-initiative.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "LEAP Africa", "image": "/images/ngo/leap-africa.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Young Educators Foundation", "image": "/images/ngo/young-educators-foundation.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "The Tony Elumelu Foundation", "image": "/images/ngo/the-tony-elumelu-foundation.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "YEDBC (Yaba Eductrs Centre for In)", "image": "/images/ngo/yedbc.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Oando Foundation", "image": "/images/ngo/oando-foundation.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." }
            ]
          },
          {
            "title": "Outstanding Donation Of Education Aid By NGO",
            "description": "Celebrates NGOs that provide substantial educational aid, which can include scholarships, funding for educational programs, support for teachers, and other forms of financial assistance.",
            "nominees": [
              { "name": "Paradigm Initiative", "image": "/images/ngo/paradigm-initiative.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "MANI (Maternal and Child Survival Program)", "image": "/images/ngo/mani.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "STEM Nigeria Direct", "image": "/images/ngo/stem-nigeria-direct.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "Tech4Dev (Technology for Social G)", "image": "/images/ngo/tech4dev.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "REACH Initiative International", "image": "/images/ngo/reach-initiative-international.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "KnowledgeAid Initiative", "image": "/images/ngo/knowledgeaid-initiative.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "YISA (Youth Initiative for Sustain)", "image": "/images/ngo/yisa.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "SkillNG", "image": "/images/ngo/saind.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "AYECI (African Youth Initiative on)", "image": "/images/ngo/save-the-children.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
              { "name": "EVA (The Education As A Vaccine In)", "image": "/images/ngo/eva.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." }
            ]
          }
        ]
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
          { name: "May & Baker Nigeria", image: "/images/csricons/mbn.png", achievement: "Significant support for health education and related initiatives." },
  
          { name: "Fidson Healthcare Plc", image: "/images/csricons/fidson.png", achievement: "Significant support for health education and related initiatives." },
        { name: "Neimeth International Pharmaceuticals", image: "/images/csricons/neimeth.png", achievement: "Significant support for health education and related initiatives." },
        { name: "Mopson Pharmaceuticals", image: "/images/csricons/mp.png", achievement: "Significant support for health education and related initiatives." },
  
        { name: "Swiss Pharma Nigeria", image: "/images/csricons/swipha.png", achievement: "Significant support for health education and related initiatives." },
  
        { name: "Biofem Pharmaceuticals", image: "/images/csricons/biofem.png", achievement: "Significant support for health education and related initiatives." },
        { name: "Evans Medical Plc", image: "/images/csricons/evans.png", achievement: "Significant support for health education and related initiatives." }
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
  "title": "Best EduTech Organization in Nigeria and Africa 2024",
  "description": "Acknowledges educational technology organizations that have demonstrated exemplary commitment and results in advancing education from 2014-2024.",
  "subCategories": [
    {
      "title": "Best Telecommunications CSR in Education in Central Africa",
      "description": "Recognizes telecommunications companies with impactful corporate social responsibility initiatives in education in Central Africa.",
      "nominees": [
        { "name": "Andela", "image": "/images/edutech/Andela.png", "country": "Nigeria", "achievement": "Innovative tech education and talent development" },
        { "name": "M-Shule", "image": "/images/edutech/M-Shule.png", "country": "Kenya", "achievement": "Mobile learning solutions for primary education" },
        { "name": "uLesson", "image": "/images/edutech/uLesson.png", "country": "Nigeria", "achievement": "Digital learning platform for secondary students" },
        { "name": "Ubongo", "image": "/images/edutech/Ubongo.png", "country": "Tanzania", "achievement": "Educational entertainment for young learners" },
        { "name": "Scholaro", "image": "/images/edutech/Scholaro.png", "country": "Nigeria", "achievement": "Global grade conversion and academic services" },
        { "name": "Edusko", "image": "/images/edutech/Edusko.png", "country": "Nigeria", "achievement": "Connecting parents with quality schools" },
        { "name": "BRCK", "image": "/images/edutech/BRCK.png", "country": "Kenya", "achievement": "Rugged technology solutions for education" },
        { "name": "Snapplify", "image": "/images/edutech/Snapplify.png", "country": "South Africa", "achievement": "Digital publishing and e-learning solutions" },
        { "name": "eAfrilearn", "image": "/images/edutech/eAfrilearn.png", "country": "Nigeria", "achievement": "Online learning platform for African students" },
        { "name": "Eneza Education", "image": "/images/edutech/Eneza Education.png", "country": "Kenya", "achievement": "SMS-based learning for rural areas" }
      ]
    },
    {
      "title": "Best Telecommunications CSR in Education in Eastern Africa",
      "description": "Honors telecommunications companies with significant educational initiatives in Eastern Africa.",
      "nominees": [
        { "name": "Khan Academy", "image": "/images/edutech/Khan Academy.png", "country": "Global", "achievement": "Free online courses and tutorials" },
        { "name": "Siyavula", "image": "/images/edutech/Siyavula.png", "country": "South Africa", "achievement": "Open textbooks and adaptive practice" },
        { "name": "Sterio.me", "image": "/images/edutech/Sterio.me.png", "country": "Nigeria", "achievement": "Audio learning via mobile phones" },
        { "name": "Eneza Education", "image": "/images/edutech/Eneza Education.png", "country": "Kenya", "achievement": "SMS-based learning for rural areas" },
        { "name": "Tuteria", "image": "/images/edutech/Tuteria.png", "country": "Nigeria", "achievement": "Connecting learners with local tutors" },
        { "name": "Edves", "image": "/images/edutech/Edves.png", "country": "Nigeria", "achievement": "School management software solutions" },
        { "name": "PrepClass", "image": "/images/edutech/PrepClass.png", "country": "Nigeria", "achievement": "Personalized learning and exam prep" },
        { "name": "Tessa", "image": "/images/edutech/Tessa.png", "country": "Pan-African", "achievement": "Teacher education in sub-Saharan Africa" },
        { "name": "Edmodo", "image": "/images/edutech/Edmodo.png", "country": "Global", "achievement": "Educational technology and social learning platform" },
        { "name": "Kytabu", "image": "/images/edutech/Kytabu.png", "country": "Kenya", "achievement": "Textbook content leasing app" }
      ]
    },
    {
      "title": "Best Technology Project CSR in Education in Central Africa",
      "description": "Recognizes technology projects with significant impact on education in Central Africa.",
      "nominees": [
        { "name": "Funzi", "image": "/images/edutech/Funzi.png", "country": "Finland/Africa", "achievement": "Mobile learning for skills development" },
        { "name": "PrepClass", "image": "/images/edutech/PrepClass.png", "country": "Nigeria", "achievement": "Personalized learning and exam prep" },
        { "name": "Decipher", "image": "/images/edutech/Decipher.png", "country": "Nigeria", "achievement": "Cryptography education platform" },
        { "name": "Achieve!", "image": "/images/edutech/Achieve!.png", "country": "Nigeria", "achievement": "Goal-oriented learning solutions" },
        { "name": "MyChild", "image": "/images/edutech/MyChild.png", "country": "Uganda", "achievement": "Parent-school communication app" },
        { "name": "Ubongo", "image": "/images/edutech/Ubongo.png", "country": "Tanzania", "achievement": "Educational entertainment for young learners" },
        { "name": "M-Shule", "image": "/images/edutech/M-Shule.png", "country": "Kenya", "achievement": "Mobile learning solutions for primary education" },
        { "name": "Learnable", "image": "/images/edutech/Learnable.png", "country": "Nigeria", "achievement": "Online learning platform for tech skills" },
        { "name": "uLesson", "image": "/images/edutech/uLesson.png", "country": "Nigeria", "achievement": "Digital learning platform for secondary students" },
        { "name": "Edusko", "image": "/images/edutech/Edusko.png", "country": "Nigeria", "achievement": "Connecting parents with quality schools" }
      ]
    },
    {
      "title": "Best Technology Project CSR in Education in Western Africa",
      "description": "Honors technology projects with notable educational impact in Western Africa.",
      "nominees": [
        { "name": "Tech4Dev", "image": "/images/edutech/Tech4Dev.png", "country": "Nigeria", "achievement": "Technology education for development" },
        { "name": "WeCode Africa", "image": "/images/edutech/WeCode Africa.png", "country": "Nigeria", "achievement": "Coding education for African youth" },
        { "name": "Digify Africa", "image": "/images/edutech/Digify Africa.png", "country": "South Africa", "achievement": "Digital skills training programs" },
        { "name": "She Hacks Africa", "image": "/images/edutech/She Hacks Africa.png", "country": "Nigeria", "achievement": "Empowering women in tech" },
        { "name": "Andela", "image": "/images/edutech/Andela.png", "country": "Nigeria", "achievement": "Innovative tech education and talent development" },
        { "name": "Moringa School", "image": "/images/edutech/Moringa School.png", "country": "Kenya", "achievement": "Market-driven tech education" },
        { "name": "CodeSpark Africa", "image": "/images/edutech/CodeSpark Africa.png", "country": "Nigeria", "achievement": "Coding education for children" },
        { "name": "GirlCode", "image": "/images/edutech/GirlCode.png", "country": "South Africa", "achievement": "Empowering women in technology" },
        { "name": "NN Nation HUB", "image": "/images/edutech/NN Nation HUB.png", "country": "Nigeria", "achievement": "Innovation and entrepreneurship hub" },
        { "name": "Refactory", "image": "/images/edutech/Refactory.png", "country": "Uganda", "achievement": "Software development training" }
      ]
    },
    {
      "title": "Best Telecommunications CSR in Education in Western Africa",
      "description": "Recognizes telecommunications companies with impactful educational initiatives in Western Africa.",
      "nominees": [
        { "name": "uLesson", "image": "/images/edutech/uLesson.png", "country": "Nigeria", "achievement": "Digital learning platform for secondary students" },
        { "name": "Tuteria", "image": "/images/edutech/Tuteria.png", "country": "Nigeria", "achievement": "Connecting learners with local tutors" },
        { "name": "Snapplify", "image": "/images/edutech/Snapplify.png", "country": "South Africa", "achievement": "Digital publishing and e-learning solutions" },
        { "name": "MWC", "image": "/images/edutech/MWC.png", "country": "Nigeria", "achievement": "Mobile learning solutions" },
        { "name": "M-Shule", "image": "/images/edutech/M-Shule.png", "country": "Kenya", "achievement": "Mobile learning solutions for primary education" },
        { "name": "BRCK", "image": "/images/edutech/BRCK.png", "country": "Kenya", "achievement": "Rugged technology solutions for education" },
        { "name": "Kytabu", "image": "/images/edutech/Kytabu.png", "country": "Kenya", "achievement": "Textbook content leasing app" },
        { "name": "Sterio.me", "image": "/images/edutech/Sterio.me.png", "country": "Nigeria", "achievement": "Audio learning via mobile phones" },
        { "name": "Tessa", "image": "/images/edutech/Tessa.png", "country": "Pan-African", "achievement": "Teacher education in sub-Saharan Africa" },
        { "name": "Soma", "image": "/images/edutech/Soma.png", "country": "Kenya", "achievement": "Digital reading platform" }
      ]
    }
  ]
},
    {
      "title": "Overall best educational friendly state in Nigeria 2024",
      "description": "Awards the tertiary institution that stands out in academic excellence, community engagement, and student support with notable ICT infrastructure.",
      "subCategories": [
        {
          "title": "Best Education Initiative in North Central Zone",
          "description": "Honors educational initiatives in the North Central region of Nigeria.",
          "nominees": [
            {
              "name": "Kogi State",
              "state": "Kogi",
              "country": "Nigeria",
              "image": "/images/friendlystate/kogi-state.png",
              "achievement": "Logo shows three figures and text 'Kogi State'"
            },
            {
              "name": "Kwara State",
              "state": "Kwara",
              "country": "Nigeria",
              "image": "/images/friendlystate/kwara-state.png",
              "achievement": "Logo with horse head and text 'State of Harmony'"
            },
            {
              "name": "Benue State",
              "state": "Benue",
              "country": "Nigeria",
              "image": "/images/friendlystate/benue-state.png",
              "achievement": "Logo with shield and text 'Benue State'"
            },
            {
              "name": "Nasarawa State",
              "state": "Nasarawa",
              "country": "Nigeria",
              "image": "/images/friendlystate/nasarawa-state.png",
              "achievement": "Circular logo with text 'Nasarawa State Government'"
            },
            {
              "name": "Niger State",
              "state": "Niger",
              "country": "Nigeria",
              "image": "/images/friendlystate/niger-state.png",
              "achievement": "Map outline with text 'Niger State'"
            },
            {
              "name": "Plateau State",
              "state": "Plateau",
              "country": "Nigeria",
              "image": "/images/friendlystate/plateau-state.png",
              "achievement": "Logo with hills and text 'Plateau State'"
            },
            {
              "name": "Federal Capital Territory",
              "state": "FCT",
              "country": "Nigeria",
              "image": "/images/friendlystate/federal-capital-territory.png",
              "achievement": "Nigerian coat of arms"
            },
            {
              "name": "Kaduna State",
              "state": "Kaduna",
              "country": "Nigeria",
              "image": "/images/friendlystate/kaduna-state.png",
              "achievement": "Logo with shield and text 'Kaduna'"
            },
            {
              "name": "Kebbi State",
              "state": "Kebbi",
              "country": "Nigeria",
              "image": "/images/friendlystate/kebbi-state.png",
              "achievement": "Circular logo with horse head"
            },
            {
              "name": "Sokoto State",
              "state": "Sokoto",
              "country": "Nigeria",
              "image": "/images/friendlystate/sokoto-state.png",
              "achievement": "Circular logo with horse head"
            },
           
           
          ]
        },
        {
          "title": "Best Education Initiative in North East Zone",
          "description": "Recognizes outstanding educational initiatives in the North East region of Nigeria.",
          "nominees": [
            {
              "name": "Adamawa State",
              "state": "Adamawa",
              "country": "Nigeria",
              "image": "/images/friendlystate/adamawa-state.png",
              "achievement": "Circular logo with sun rays and text 'Adamawa State'"
            },
            {
              "name": "Bauchi State",
              "state": "Bauchi",
              "country": "Nigeria",
              "image": "/images/friendlystate/bauchi-state.png",
              "achievement": "Logo with shield and text 'Bauchi State'"
            },
            {
              "name": "Gombe State",
              "state": "Gombe",
              "country": "Nigeria",
              "image": "/images/friendlystate/gombe-state.png",
              "achievement": "Circular logo with sun and text 'Gombe State'"
            },
            {
              "name": "Taraba State",
              "state": "Taraba",
              "country": "Nigeria",
              "image": "/images/friendlystate/taraba-state.png",
              "achievement": "Logo with shield and text 'Taraba State'"
            },
            {
              "name": "Yobe State",
              "state": "Yobe",
              "country": "Nigeria",
              "image": "/images/friendlystate/yobe-state.png",
              "achievement": "Circular logo with sun and text 'Yobe State'"
            },
            {
              "name": "Yobe State Government",
              "state": "Yobe",
              "country": "Nigeria",
              "image": "/images/friendlystate/yobe-state-government.png",
              "achievement": "Logo with sun and text 'Yobe State Government'"
            },
            {
              "name": "Jigawa State",
              "state": "Jigawa",
              "country": "Nigeria",
              "image": "/images/friendlystate/jigawa-state.png",
              "achievement": "Circular logo with elephant and text 'Borno State'"
            },
            {
              "name": "Kano State",
              "state": "Kano",
              "country": "Nigeria",
              "image": "/images/friendlystate/Kano-state .png",
              "achievement": "Logo with shield and text 'Adamawa State'"
            },
            {
              "name": "Katsina State",
              "state": "Katsina",
              "country": "Nigeria",
              "image": "/images/friendlystate/katsina-state-2.png",
              "achievement": "Logo with shield and text 'Bauchi State'"
            },
            {
              "name": "Zamfara State",
              "state": "Zamfara",
              "country": "Nigeria",
              "image": "/images/friendlystate/Zamfara-state.png",
              "achievement": "Logo with shield and text 'Gombe State'"
            }
          ]
        },

        {
          "title": "Best Education Initiative in North West Zone",
          "description": "Celebrates exceptional educational initiatives in the North West region of Nigeria.",
          "nominees": [
            {
              "name": "Kaduna State",
              "state": "Kaduna",
              "country": "Nigeria",
              "image": "/images/friendlystate/kaduna-state.png",
              "achievement": "Logo with shield and text 'Kaduna State'"
            },
            {
              "name": "Kano State",
              "state": "Kano",
              "country": "Nigeria",
              "image": "/images/friendlystate/kano-state.png",
              "achievement": "Circular logo with text 'Kano State'"
            },
            {
              "name": "Kebbi State",
              "state": "Kebbi",
              "country": "Nigeria",
              "image": "/images/friendlystate/kebbi-state.png",
              "achievement": "Logo with shield and text 'Kebbi State'"
            },
            {
              "name": "Sokoto State",
              "state": "Sokoto",
              "country": "Nigeria",
              "image": "/images/friendlystate/sokoto-state.png",
              "achievement": "Logo with shield and text 'Sokoto State'"
            },
            {
              "name": "Jigawa State",
              "state": "Jigawa",
              "country": "Nigeria",
              "image": "/images/friendlystate/jigawa-state.png",
              "achievement": "Circular logo with sun and text 'Jigawa State'"
            },
            {
              "name": "Zamfara State",
              "state": "Zamfara",
              "country": "Nigeria",
              "image": "/images/friendlystate/zamfara-state.png",
              "achievement": "Logo with shield and text 'Zamfara State'"
            },
            {
              "name": "Katsina State",
              "state": "Katsina",
              "country": "Nigeria",
              "image": "/images/friendlystate/katsina-state.png",
              "achievement": "Logo with shield and text 'Katsina State'"
            },
            {
              "name": "Borno State",
              "state": "Borno",
              "country": "Nigeria",
              "image": "/images/friendlystate/borno-state.png",
              "achievement": "Logo with shield and text 'Kano State'"
            },
            {
              "name": "Yobe State Government",
              "state": "Yobe",
              "country": "Nigeria",
              "image": "/images/friendlystate/yobe-state-government.png",
              "achievement": "Logo with sun and text 'Yobe State Government'"
            },
            {
              "name": "Bauchi State",
              "state": "Bauchi",
              "country": "Nigeria",
              "image": "/images/friendlystate/bauchi-state.png",
              "achievement": "Logo with elephant and text 'Borno State'"
            }
          ]
        },
        {
          "title": "Best Education Initiative in South East Zone",
          "description": "Honors outstanding educational initiatives in the South East region of Nigeria.",
          "nominees": [
            {
              "name": "Abia State",
              "state": "Abia",
              "country": "Nigeria",
              "image": "/images/friendlystate/abia-state.png",
              "achievement": "Circular logo with text 'Government of Abia State'"
            },
            {
              "name": "Anambra State",
              "state": "Anambra",
              "country": "Nigeria",
              "image": "/images/friendlystate/anambra-state.png",
              "achievement": "Logo with shield and text 'Anambra State'"
            },
            {
              "name": "Ebonyi State",
              "state": "Ebonyi",
              "country": "Nigeria",
              "image": "/images/friendlystate/ebonyi-state.png",
              "achievement": "Logo with shield and text 'Ebonyi State'"
            },
            {
              "name": "Enugu State Government",
              "state": "Enugu",
              "country": "Nigeria",
              "image": "/images/friendlystate/enugu-state-government.png",
              "achievement": "Map outline with text 'Enugu State Government'"
            },
            {
              "name": "Imo State",
              "state": "Imo",
              "country": "Nigeria",
              "image": "/images/friendlystate/imo-state.png",
              "achievement": "Circular logo with text 'Imo State Nigeria'"
            },
            {
              "name": "Anambra State",
              "state": "Anambra",
              "country": "Nigeria",
              "image": "/images/friendlystate/anambra-state.png",
              "achievement": "Logo with shield and text 'Anambra State'"
            },
            {
              "name": "Akwa Ibom State",
              "state": "Akwa Ibom",
              "country": "Nigeria",
              "image": "/images/friendlystate/akwaibom-state.png",
              "achievement": "Circular logo with text 'Government of Abia State'"
            },
            {
              "name": "Rivers  State",
              "state": "Rivers",
              "country": "Nigeria",
              "image": "/images/friendlystate/rivers-state.png",
              "achievement": "Logo with shield and text 'Rivers  State'"
            },
            {
              "name": "Bayelsa State",
              "state": "Bayelsa",
              "country": "Nigeria",
              "image": "/images/friendlystate/bayelsa-state.png",
              "achievement": "Logo with shield and text 'Enugu State'"
            },
            {
              "name": "Delta State",
              "state": "Delta",
              "country": "Nigeria",
              "image": "/images/friendlystate/delta-state.png",
              "achievement": "Logo with palm tree and text 'Imo State'"
            }
          ]
        },

        {
          "title": "Best Education Initiative in South South Zone",
          "description": "Recognizes exceptional educational initiatives in the South South region of Nigeria.",
          "nominees": [
            {
              "name": "Akwa Ibom State",
              "state": "Akwa Ibom",
              "country": "Nigeria",
              "image": "/images/friendlystate/akwaibom-state.png",
              "achievement": "Circular logo with text 'Akwa Ibom State'"
            },
            {
              "name": "Bayelsa State",
              "state": "Bayelsa",
              "country": "Nigeria",
              "image": "/images/friendlystate/bayelsa-state.png",
              "achievement": "Logo with shield and text 'Bayelsa State'"
            },
            {
              "name": "Cross River State",
              "state": "Cross River",
              "country": "Nigeria",
              "image": "/images/friendlystate/cross-river-state.png",
              "achievement": "Logo with leopard and text 'Cross River State'"
            },
            {
              "name": "Delta State",
              "state": "Delta",
              "country": "Nigeria",
              "image": "/images/friendlystate/delta-state.png",
              "achievement": "Circular logo with text 'Delta State'"
            },
            {
              "name": "Edo State",
              "state": "Edo",
              "country": "Nigeria",
              "image": "/images/friendlystate/edo-state.png",
              "achievement": "Logo with shield and text 'Edo State'"
            },
            {
              "name": "Rivers State",
              "state": "Rivers",
              "country": "Nigeria",
              "image": "/images/friendlystate/rivers-state.png",
              "achievement": "Circular logo with text 'Rivers State'"
            },
            {
              "name": "Anambra State",
              "state": "Anambra",
              "country": "Nigeria",
              "image": "/images/friendlystate/anambra.png",
              "achievement": "Logo with shield and text 'Akwa Ibom State'"
            },
            {
              "name": "Abia State",
              "state": "Abia",
              "country": "Nigeria",
              "image": "/images/friendlystate/abia-state.png",
              "achievement": "Logo with leopard and text 'Cross River State'"
            },
            {
              "name": "Imo State",
              "state": "Delta",
              "country": "Nigeria",
              "image": "/images/friendlystate/imo-state.png",
              "achievement": "Logo with shield and text 'Delta State'"
            },
            {
              "name": "Enugu State Government",
              "state": "Enugu",
              "country": "Nigeria",
              "image": "/images/friendlystate/enugu-state-government.png",
              "achievement": "Map outline with text 'Enugu State Government'"
            }
          ]
        },
        {
          "title": "Best Education Initiative in South West Zone",
          "description": "Celebrates outstanding educational initiatives in the South West region of Nigeria.",
          "nominees": [
            {
              "name": "Ekiti State",
              "state": "Ekiti",
              "country": "Nigeria",
              "image": "/images/friendlystate/ekiti-state.png",
              "achievement": "Logo with hills and text 'Ekiti State'"
            },
            {
              "name": "Lagos State",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/friendlystate/lagos-state.png",
              "achievement": "Logo with text 'Lagos State'"
            },
            {
              "name": "Ogun State",
              "state": "Ogun",
              "country": "Nigeria",
              "image": "/images/friendlystate/ogun-state.png",
              "achievement": "Logo with text 'Ogun State'"
            },
            {
              "name": "Ondo State",
              "state": "Ondo",
              "country": "Nigeria",
              "image": "/images/friendlystate/ondo-state.png",
              "achievement": "Logo with text 'Ondo State'"
            },
            {
              "name": "Osun State",
              "state": "Osun",
              "country": "Nigeria",
              "image": "/images/friendlystate/osun-state.png",
              "achievement": "Logo with text 'State of Osun'"
            },
            {
              "name": "Oyo State",
              "state": "Oyo",
              "country": "Nigeria",
              "image": "/images/friendlystate/oyo-state.png",
              "achievement": "Logo with text 'Oyo State'"
            },
            {
              "name": "Kogi State",
              "state": "Kogi",
              "country": "Nigeria",
              "image": "/images/friendlystate/kogi-state.png",
              "achievement": "Logo with text 'Ogun State'"
            },
            {
              "name": "Niger State",
              "state": "Niger",
              "country": "Nigeria",
              "image": "/images/friendlystate/niger-state.png",
              "achievement": "Logo with text 'Lagos State'"
            },
            {
              "name": "Kwara State",
              "state": "Kwara",
              "country": "Nigeria",
              "image": "/images/friendlystate/kwara-state.png",
              "achievement": "Logo with horse head and text 'Kwara State'"
            },
            {
              "name": "Nasarawa State",
              "state": "Nasarawa",
              "country": "Nigeria",
              "image": "/images/friendlystate/nasarawa-state.png",
              "achievement": "Map outline with text 'Niger State'"
            }
          ]
        }
      ]
    },
    
    
  {
      "title": "The best library in Nigerian tertiary institutions award 2024",
      "description": "Recognizes libraries that have made exceptional contributions and excellence to educational research and innovation, thus shaping future educational strategies.",
      "subCategories": [
        {
          "title": "Best University Library in Nigeria (Public)",
          "description": "This category celebrates outstanding public university libraries that have demonstrated excellence in supporting academic research and learning.",
          "nominees": [
            {
              "name": "University of Lagos Library",
              "achievement": "Exceptional collection and innovative services supporting diverse academic programs.",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/libraries/University_of_Lagos_Library.png"
            },
            {
              "name": "Ahmadu Bello University Library",
              "achievement": "Extensive research resources and digital innovation in library services.",
              "state": "Kaduna",
              "country": "Nigeria",
              "image": "/images/libraries/Ahmadu_Bello_University_Library.png"
            },
            {
              "name": "University of Ibadan Library",
              "achievement": "Rich historical collection and modern facilities supporting academic excellence.",
              "state": "Oyo",
              "country": "Nigeria",
              "image": "/images/libraries/University_of_Ibadan_Library.png"
            },
            {
              "name": "Obafemi Awolowo University Library",
              "achievement": "Cutting-edge digital resources and collaborative learning spaces.",
              "state": "Osun",
              "country": "Nigeria",
              "image": "/images/libraries/Obafemi_Awolowo_University_Library.png"
            },
            {
              "name": "Federal University of Technology Akure Library",
              "achievement": "Specialized technology-focused collections and innovative research support.",
              "state": "Ondo",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_University_of_Technology_Akure_Library.png"
            },
            {
              "name": "University of Nigeria, Nsukka Library",
              "achievement": "Comprehensive academic resources and cultural preservation initiatives.",
              "state": "Enugu",
              "country": "Nigeria",
              "image": "/images/libraries/University_of_Nigeria_Nsukka_Library.png"
            },
            {
              "name": "University of Ilorin Library",
              "achievement": "Advanced e-learning resources and user-centered service innovations.",
              "state": "Kwara",
              "country": "Nigeria",
              "image": "/images/libraries/University_of_Ilorin_Library.png"
            },
            {
              "name": "Nnamdi Azikiwe University Library",
              "achievement": "Emerging research hub with rapidly expanding digital and physical collections.",
              "state": "Jigawa",
              "country": "Nigeria",
              "image": "/images/libraries/Nnamdi_Azikiwe_University_Library.png"
            },
            {
              "name": "Bayero University, Kano Library",
              "achievement": "Diverse multilingual collections supporting interdisciplinary research.",
              "state": "Kano",
              "country": "Nigeria",
              "image": "/images/libraries/Bayero_University_Kano_Library.png"
            },
            {
              "name": "University of Port Harcourt Library",
              "achievement": "Extensive resources supporting oil and gas research and general academics.",
              "state": "Rivers",
              "country": "Nigeria",
              "image": "/images/libraries/University_of_Port_Harcourt_Library.png"
            },
          ]
        },
        {
          "title": "Best University Library in Nigeria (Private)",
          "description": "This category recognizes private university libraries that have shown outstanding commitment to enhancing academic resources and student learning experiences.",
          "nominees": [
            {
              "name": "Covenant University Library",
              "achievement": "State-of-the-art facilities and comprehensive digital resources.",
              "state": "Ogun",
              "country": "Nigeria",
              "image": "/images/libraries/Covenant_University_Library.png"
            },
            {
              "name": "Babcock University Library",
              "achievement": "Extensive collection supporting diverse academic programs.",
              "state": "Ogun",
              "country": "Nigeria",
              "image": "/images/libraries/Babcock_University_Library.png"
            },
            {
              "name": "American University Library",
              "achievement": "International standards in academic resources and research support.",
              "state": "Adamawa",
              "country": "Nigeria",
              "image": "/images/libraries/American_University_Library.png"
            },
            {
              "name": "Afe Babalola University Library",
              "achievement": "Innovative learning spaces and cutting-edge technology integration.",
              "state": "Ekiti",
              "country": "Nigeria",
              "image": "/images/libraries/Afe_Babalola_University_Library.png"
            },
            {
              "name": "Landmark University Library",
              "achievement": "Specialized collections supporting entrepreneurship and innovation.",
              "state": "Edo",
              "country": "Nigeria",
              "image": "/images/libraries/Landmark_University_Library.png"
            },
            {
              "name": "Pan-Atlantic University Library",
              "achievement": "Focused resources supporting business and media studies.",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/libraries/Pan-Atlantic_University_Library.png"
            },
            {
              "name": "Redeemer's University Library",
              "achievement": "Extensive e-resources and collaborative research spaces.",
              "state": "Osun",
              "country": "Nigeria",
              "image": "/images/libraries/Redeemers_University_Library.png"
            },
            {
              "name": "Bowen University Library",
              "achievement": "Rich collection supporting health sciences and general academics.",
              "state": "Osun",
              "country": "Nigeria",
              "image": "/images/libraries/Bowen_University_Library.png"
            },
            {
              "name": "Bells University of Technology Library",
              "achievement": "Specialized resources for technology and engineering studies.",
              "state": "Ogun",
              "country": "Nigeria",
              "image": "/images/libraries/Bells_University_of_Technology_Library.png"
            },
            {
              "name": "Joseph Ayo Babalola University Library",
              "achievement": "Diverse collection supporting multidisciplinary research and learning.",
              "state": "Oyo",
              "country": "Nigeria",
              "image": "/images/libraries/Joseph_Ayo Babalola_University_Library.png"
            }
          ]
        },
        {
          "title": "Best Polytechnic Library in Nigeria",
          "description": "This category honors polytechnic libraries that excel in providing resources and services tailored to technical and vocational education.",
          "nominees": [
            {
              "name": "Yaba College of Technology Library",
              "achievement": "Comprehensive technical resources and innovative maker spaces.",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/libraries/Yaba_College_of_Technology_Library.png"
            },
            {
              "name": "Kaduna Polytechnic Library",
              "achievement": "Extensive collection supporting diverse technical programs.",
              "state": "Kaduna",
              "country": "Nigeria",
              "image": "/images/libraries/Kaduna_Polytechnic_Library.png"
            },
            {
              "name": "Federal Polytechnic, Nekede Library",
              "achievement": "Advanced digital resources for technical and vocational studies.",
              "state": "Imo",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_Polytechnic_Nekede_Library.png"
            },
            {
              "name": "Auchi Polytechnic Library",
              "achievement": "Specialized collections supporting applied sciences and technology.",
              "state": "Edo",
              "country": "Nigeria",
              "image": "/images/libraries/Auchi_Polytechnic_Library.png"
            },
            {
              "name": "Federal Polytechnic, Ilaro Library",
              "achievement": "Innovative learning spaces and technical resource centers.",
              "state": "Ogun",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_Polytechnic_Ilaro_Library.png"
            },
            {
              "name": "Lagos State Polytechnic Library",
              "achievement": "Comprehensive resources supporting diverse technical programs.",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/libraries/Lagos_State_Polytechnic_Library.png"
            },
            {
              "name": "Ibadan Polytechnic Library",
              "achievement": "Extensive e-learning resources for technical education.",
              "state": "Ogun",
              "country": "Nigeria",
              "image": "/images/libraries/Ibadan_Polytechnic_Library.png"
            },
            {
              "name": "Rufus Giwa Polytechnic Library",
              "achievement": "Specialized collections supporting technology and innovation.",
              "state": "Ekiti",
              "country": "Nigeria",
              "image": "/images/libraries/Rufus_Giwa_Polytechnic_Library.png"
            },
            {
              "name": "Federal Polytechnic, Bida Library",
              "achievement": "Rich resources supporting technical and vocational programs.",
              "state": "Niger",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_Polytechnic_Bida_Library.png"
            },
            {
              "name": "Federal Polytechnic, Oko Library",
              "achievement": "Advanced digital resources and technical research support.",
              "state": "Anambra",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_Polytechnic_Oko_Library.png"
            },
          ]
        },
            {
              "title": "Best College of Nursing Library in Nigeria (Public)",
              "description": "This category honors public nursing college libraries that have demonstrated excellence in supporting nursing education and research.",
              "nominees": [
                {
                  "name": "Lagos State College of Nursing Library",
                  "achievement": "Exceptional support for nursing education and research.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Lagos_State_College_of_Nursing_Library.png"
                },
                {
                  "name": "Oyo State College of Nursing Library",
                  "achievement": "Outstanding resources for nursing students and faculty.",
                  "state": "Oyo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Oyo_State_College_of_Nursing_Library.png"
                },
                {
                  "name": "School of Nursing, University of Uyo",
                  "achievement": "Innovative library services supporting nursing education.",
                  "state": "Akwa Ibom State",
                  "country": "Nigeria",
                  "image": "/images/libraries/School_of_Nursing_University_of_Uyo.png"
                },
                {
                  "name": "School of Nursing, Lagos University",
                  "achievement": "Comprehensive nursing research support and resources.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/School_of_Nursing_Lagos_University.png"
                },
                {
                  "name": "School of Nursing, University College Hospital",
                  "achievement": "Excellent collection of nursing and medical literature.",
                  "state": "Oyo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/School_of_Nursing_University_College_Hospital.png"
                },
                {
                  "name": "School of Nursing, Obafemi Awolowo University",
                  "achievement": "Cutting-edge digital resources for nursing students.",
                  "state": "Osun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/School_of_Nursing_Obafemi_Awolowo_University.png"
                },
                {
                  "name": "School of Nursing, University of Nigeria",
                  "achievement": "Exceptional support for nursing research and education.",
                  "state": "Enugu State",
                  "country": "Nigeria",
                  "image": "/images/libraries/School_of_Nursing_University_of_Nigeria.png"
                },
                {
                  "name": "School of Nursing, Ahmadu Bello University",
                  "achievement": "Outstanding nursing education resources and services.",
                  "state": "Kaduna State",
                  "country": "Nigeria",
                  "image": "/images/libraries/School_of_Nursing_Ahmadu_Bello_University.png"
                },
                {
                  "name": "School of Nursing, University of  Nigeria.",
                  "achievement": "Innovative library programs supporting nursing students.",
                  "state": "Edo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/School_of_Nursing_University_of_Nigeria.png"
                },
                {
                  "name": "School of Nursing, Federal Medical Centre",
                  "achievement": "Exceptional nursing and medical library resources.",
                  "state": "Imo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/School_of_Nursing_Federal_Medical_Centre.png"
                }
              ]
            },
            {
              "title": "Best Polytechnic Library in Nigeria (Private)",
              "description": "This category recognizes private polytechnic libraries that have shown outstanding support for technical and vocational education.",
              "nominees": [
                {
                  "name": "Wellspring College of Hospitality",
                  "achievement": "Exceptional library resources for hospitality education.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Wellspring_College_of_Hospitality.png"
                },
                {
                  "name": "Heritage Polytechnic Library",
                  "achievement": "Comprehensive technical education resources and services.",
                  "state": "Akwa Ibom State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Heritage_Polytechnic_Library.png"
                },
                {
                  "name": "Grace Polytechnic Library",
                  "achievement": "Innovative library programs supporting vocational studies.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Grace_Polytechnic_Library.png"
                },
                {
                  "name": "Crown Polytechnic Library",
                  "achievement": "Outstanding support for technical research and education.",
                  "state": "Ondo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Crown_Polytechnic_Library.png"
                },
                {
                  "name": "Ronik Polytechnic Library",
                  "achievement": "Excellent digital resources for polytechnic students.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Ronik_Polytechnic_Library.png"
                },
                {
                  "name": "Dorben Polytechnic Library",
                  "achievement": "Comprehensive collection supporting various technical fields.",
                  "state": "Benue State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Dorben_Polytechnic_Library.png"
                },
                {
                  "name": "Wolex Polytechnic Library",
                  "achievement": "Innovative library services for vocational education.",
                  "state": "Edo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Wolex_Polytechnic_Library.png"
                },
                {
                  "name": "Temple Gate Polytechnic Library",
                  "achievement": "Exceptional resources for technical and applied sciences.",
                  "state": "Imo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Temple_Gate_Polytechnic_Library.png"
                },
                {
                  "name": "Allover Central Polytechnic Library",
                  "achievement": "Outstanding support for polytechnic research and learning.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Allover_Central_Polytechnic_Library.png"
                },
                {
                  "name": "Covenant Polytechnic Library",
                  "achievement": "Comprehensive library services for technical education.",
                  "state": "Abia State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Covenant_Polytechnic_Library.png"
                }
              ]
            },
            {
              "title": "Best College of Education Library in Nigeria (Private)",
              "description": "This category honors private college of education libraries that have excelled in supporting teacher training and educational research.",
              "nominees": [
                {
                  "name": "National Teachers College of Primary Education Library",
                  "achievement": "Exceptional resources for primary education training.",
                  "state": "Enugu State",
                  "country": "Nigeria",
                  "image": "/images/libraries/National_Teachers_College_of_Primary_Education_Library.png"
                },
                {
                  "name": "Assanusiyah College of Education Library",
                  "achievement": "Comprehensive support for teacher education programs.",
                  "state": "Oyo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Assanusiyah_College_of_Education_Library.png"
                },
                {
                  "name": "Peaceland College of Education Library",
                  "achievement": "Innovative library services for education students.",
                  "state": "Enugu State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Peaceland_College_of_Education_Library.png"
                },
                {
                  "name": "St Augustine College of Education Library",
                  "achievement": "Outstanding collection supporting educational research.",
                  "state": "Akwa Ibom State",
                  "country": "Nigeria",
                  "image": "/images/libraries/St_Augustine_College_of_Education_Library.png"
                },
                {
                  "name": "Delar College of Education Library",
                  "achievement": "Excellent digital resources for teacher training.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Delar_College_of_Education_Library.png"
                },
                {
                  "name": "Yewa Central College of Education Library",
                  "achievement": "Comprehensive support for educational studies.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Yewa_Central_College_of_Education_Library.png"
                },
                {
                  "name": "City College of Education Library",
                  "achievement": "Innovative programs supporting education students.",
                  "state": "Kano State",
                  "country": "Nigeria",
                  "image": "/images/libraries/City_College_of_Education_Library.png"
                },
                {
                  "name": "Ansar-Ud-Deen College of Education Library",
                  "achievement": "Exceptional resources for teacher education and research.",
                  "state": "Oyo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Ansar-Ud-Deen_College_of_Education_Library.png"
                },
                {
                  "name": "Havard Wilson College of Education Library",
                  "achievement": "Outstanding support for educational technology and research.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Havard_Wilson_College_of_Education_Library.png"
                },
                {
                  "name": "Calvin Foundation College of Education Library",
                  "achievement": "Comprehensive library services for education students.",
                  "state": "Ondo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Calvin_Foundation_College_of_Education_Library.png"
                }
              ]
            },
            {
              "title": "Best College of Nursing Library in Nigeria (Private)",
              "description": "This category recognizes private nursing college libraries that have demonstrated excellence in supporting nursing education and research.",
              "nominees": [
                {
                  "name": "Benedict University School of Nursing Library",
                  "achievement": "Exceptional nursing education resources and services.",
                  "state": "Edo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Benedict_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Afe Babalola University School of Nursing Library",
                  "achievement": "Comprehensive support for nursing research and education.",
                  "state": "Ekiti State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Afe_Babalola_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Bowen University School of Nursing Library",
                  "achievement": "Innovative library services for nursing students.",
                  "state": "Osun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Bowen_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Babcock University College of Nursing Library",
                  "achievement": "Outstanding nursing and medical library resources.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Babcock_University_College_of_Nursing_Library.png"
                },
                {
                  "name": "Baze University School of Nursing Library",
                  "achievement": "Excellent digital resources for nursing education.",
                  "state": "Federal Capital Territory",
                  "country": "Nigeria",
                  "image": "/images/libraries/Baze_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Achievers University School of Nursing Library",
                  "achievement": "Comprehensive collection supporting nursing research.",
                  "state": "Ondo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Achievers_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Igbinedion University College of Health Sciences Library",
                  "achievement": "Innovative programs supporting nursing students.",
                  "state": "Edo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Igbinedion_University_College_of_Health_Sciences_Library.png"
                },
                {
                  "name": "Mcpherson University School of Nursing Library",
                  "achievement": "Exceptional support for nursing education and research.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Mcpherson_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Madonna University School of Nursing Library",
                  "achievement": "Outstanding nursing education resources and services.",
                  "state": "Anambra State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Madonna_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Covenant University School of Nursing Library",
                  "achievement": "Comprehensive library services for nursing students.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Covenant_University_School_of_Nursing_Library.png"
                }
              ]
          
        },
        {
          "title": "Best College Of Education Library in Nigeria",
          "description": "This category recognizes libraries in Colleges of Education that have excelled in supporting teacher training and educational research.",
          "nominees": [
            {
              "name": "Adeyemi College of Education Library",
              "achievement": "Comprehensive resources supporting teacher education and research.",
              "state": "Ondo",
              "country": "Nigeria",
              "image": "/images/libraries/Adeyemi_College_of_Education_Library.png"
            },
            {
              "name": "Federal College of Education Library",
              "achievement": "Extensive collection supporting diverse education programs.",
              "state": "Kano",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_College_of_Education_Library.png"
            },
            {
              "name": "College of Education, Ikere Library",
              "achievement": "Innovative resources for modern teacher training.",
              "state": "Ekiti",
              "country": "Nigeria",
              "image": "/images/libraries/College_of_Education_Ikere_Library.png"
            },
            {
              "name": "Alvan Ikoku Federal College of Education Library",
              "achievement": "Rich collection supporting educational research and practice.",
              "state": "Imo",
              "country": "Nigeria",
              "image": "/images/libraries/Alvan_Ikoku_Federal_College_of_Education_Library.png"
            },
            {
              "name": "Federal College of Education (Technical) Library",
              "achievement": "Specialized resources for technical education and teacher training.",
              "state": "Akoka",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_College_of_Education_Technical_Library.png"
            },
            {
              "name": "College of Education, Zuba Library",
              "achievement": "Modern facilities supporting educational technology integration.",
              "state": "FCT",
              "country": "Nigeria",
              "image": "/images/libraries/College_of_Education_Zuba_Library.png"
            },
            {
              "name": "Tai Solarin College of Education Library",
              "achievement": "Extensive digital resources for teacher education.",
              "state": "Ogun",
              "country": "Nigeria",
              "image": "/images/libraries/Tai_Solarin_College_of_Education_Library.png"
            },
            {
              "name": "Federal College of Education, Obudu Library",
              "achievement": "Comprehensive collection supporting diverse education specialties.",
              "state": "Cross River",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_College_of_Education_Obudu_Library.png"
            },
            {
              "name": "College of Education, Oro Library",
              "achievement": "Innovative learning spaces for future educators.",
              "state": "Kwara",
              "country": "Nigeria",
              "image": "/images/libraries/College_of_Education_Oro_Library.png"
            },
            {
              "name": "College of Education, Warri Library",
              "achievement": "Rich resources supporting educational research and practice.",
              "state": "Delta",
              "country": "Nigeria",
              "image": "/images/libraries/College_of_Education_Warri_Library.png"
            }
          ]
        }
      ]
    },

    {
      "title": "The Overall Best Research and Development Contribution by Tertiary Institutions in Nigeria",
      "description": "Recognizing media role in educational awareness and innovation. Awards media houses and organizations that effectively contribute to educational development.",
      "subCategories": [
        {
          "title": "Best Agricultural Research Institute in Nigeria",
          "description": "Honors institutions that have made significant contributions to agricultural research in Nigeria.",
          "nominees": [
            { "name": "IITA (International Institute of Tropical Agriculture)", "state": "Oyo", "country": "Nigeria", "image": "/images/research-development/IITA.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NCRI (National Root Crops Research Institute)", "state": "Umudike", "country": "Nigeria", "image": "/images/research-development/NCRI.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "IAR (Institute for Agricultural Research)", "state": "Zaria", "country": "Nigeria", "image": "/images/research-development/IAR.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NIFOR (Nigerian Institute for Oil Palm Research)", "state": "Edo", "country": "Nigeria", "image": "/images/research-development/NIFOR.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NCRI (National Cereals Research Institute)", "state": "Niger", "country": "Nigeria", "image": "/images/research-development/NCRI_Cereals.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "CRIN (Cocoa Research Institute of Nigeria)", "state": "Oyo", "country": "Nigeria", "image": "/images/research-development/CRIN.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NAPRI (National Animal Production Research Institute)", "state": "Zaria", "country": "Nigeria", "image": "/images/research-development/NAPRI.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "IAR&T (Institute of Agricultural Research & Training)", "state": "Ibadan", "country": "Nigeria", "image": "/images/research-development/IAR&T.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "RRIN (Rubber Research Institute of Nigeria)", "state": "Edo", "country": "Nigeria", "image": "/images/research-development/RRIN.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NRCRI (National Root Crops Research Institute)", "state": "Umudike", "country": "Nigeria", "image": "/images/research-development/NRCRI.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." }
          ]
        },
        {
          "title": "Best Pharmaceutical And Drug Research Institute in Nigeria",
          "description": "Recognizes institutions that have excelled in pharmaceutical and drug research in Nigeria.",
          "nominees": [
            { "name": "NIPRD (National Institute for Pharmaceutical Research and Development)", "state": "Abuja", "country": "Nigeria", "image": "/images/research-development/NIPRD.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NIMR (Nigerian Institute of Medical Research)", "state": "Lagos", "country": "Nigeria", "image": "/images/research-development/NIMR.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NAFDAC (National Agency for Food and Drug Administration and Control)", "state": "Abuja", "country": "Nigeria", "image": "/images/research-development/NAFDAC.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Faculty of Pharmacy, University of Ibadan", "state": "Oyo", "country": "Nigeria", "image": "/images/research-development/Faculty_of_Pharmacy_University_of_Ib.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Faculty of Pharmaceutical Sciences", "state": "Nsukka", "country": "Nigeria", "image": "/images/research-development/Faculty_of_Pharmaceutical_Sciences.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Faculty of Pharmacy, Ahmadu Bello University", "state": "Zaria", "country": "Nigeria", "image": "/images/research-development/Faculty_of_Pharmacy_Ahmadu_Bello.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NIST (Nigerian Institute of Science and Technology)", "state": "Abuja", "country": "Nigeria", "image": "/images/research-development/NIST.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Department of Pharmacognosy, University of Lagos", "state": "Lagos", "country": "Nigeria", "image": "/images/research-development/Department_of_Pharmacognosy_Uni.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Faculty of Pharmacy, Obafemi Awolowo University", "state": "Ile-Ife", "country": "Nigeria", "image": "/images/research-development/Faculty_of_Pharmacy_Obafemi_Awo.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Department of Pharmacology, University of Benin", "state": "Edo", "country": "Nigeria", "image": "/images/research-development/Department_of_Pharmacology_Uni.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." }
          ]
        },
        {
          "title": "Best Environmental And Ecological Research Institute",
          "description": "Honors institutions that have made significant contributions to environmental and ecological research.",
          "nominees": [
            { "name": "NEST (Nigerian Environmental Study/Action Team)", "state": "Ibadan", "country": "Nigeria", "image": "/images/research-development/NEST.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "FRIN (Forestry Research Institute of Nigeria)", "state": "Ibadan", "country": "Nigeria", "image": "/images/research-development/FRIN.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NCERD (National Centre for Energy Research and Development)", "state": "Nsukka", "country": "Nigeria", "image": "/images/research-development/NCERD.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Centre for Environmental Studies and Sustainable Development", "state": "Lagos", "country": "Nigeria", "image": "/images/research-development/Centre_for_Environmental_Studies_a.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Institute of Ecology and Environmental Studies", "state": "Ile-Ife", "country": "Nigeria", "image": "/images/research-development/Institute_of_Ecology_and_Environme.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NCF (Nigerian Conservation Foundation)", "state": "Lagos", "country": "Nigeria", "image": "/images/research-development/NCF.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Centre for Climate Change and Freshwater Resources", "state": "Minna", "country": "Nigeria", "image": "/images/research-development/Centre_for_Climate_Change_and_Fre.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Centre for Environmental Management and Control", "state": "Nsukka", "country": "Nigeria", "image": "/images/research-development/Centre_for_Environmental_Manage.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Department of Environmental Sciences", "state": "Zaria", "country": "Nigeria", "image": "/images/research-development/Department_of_Environmental_Scie.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Institute for Environmental Research", "state": "Ibadan", "country": "Nigeria", "image": "/images/research-development/Institute_for_Environmental_Researc.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." }
          ]
        }
      ]
    },
  

  
  
    {
      "title": "The Overall Best Media Organization in Nigeria with Outstanding Education Focus",
      "description": "Honors exceptional media/news award programs for educational collaborations and contributes to Nigeria educational development.",
      "subCategories": [
        {
          "title": "Best Print Media Educational Advocacy Award",
          "description": "Recognizes newspapers, magazines, and other print media houses for outstanding educational journalism, articles, and features.",
          "nominees": [
            { "name": "The Guardian Nigeria", "image": "/images/media/the-guardian.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "The Punch Newspaper", "image": "/images/media/punch.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "ThisDay Newspaper", "image": "/images/media/thisday.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Vanguard Newspaper", "image": "/images/media/vanguard.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Daily Trust", "image": "/images/media/daily-trust.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "The Nation Newspaper", "image": "/images/media/the-nation.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Leadership Newspaper", "image": "/images/media/leadership.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "BusinessDay", "image": "/images/media/businessday.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Nigerian Tribune", "image": "/images/media/nigerian-tribune.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Nigerian Times", "image": "/images/media/times.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." }
          ]
        },
        {
          "title": "Best Broadcast Media Educational Advocacy Award",
          "description": "Honors radio stations, TV stations, and broadcasters for impactful educational programs, discussions, and campaigns.",
          "nominees": [
            { "name": "Channels Television", "image": "/images/media/channels.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "NTA (Nigerian Television Authority)", "image": "/images/media/nta.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "AIT (Africa Independent Television)", "image": "/images/media/ait.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "TVC News", "image": "/images/media/tvc-news.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Wazobia FM", "image": "/images/media/wazobia-fm.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Cool FM", "image": "/images/media/cool-fm.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Radio Nigeria", "image": "/images/media/radio-nigeria.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Rhythm FM", "image": "/images/media/rhythm-fm.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Silverbird Television", "image": "/images/media/silverbird.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Inspiration FM", "image": "/images/media/inspiration-fm.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." }
          ]
        },
        {
          "title": "Best Digital Media Educational Advocacy Award",
          "description": "Honors online media platforms for innovative educational content, e-learning initiatives, and digital campaigns.",
          "nominees": [
            { "name": "Sahara Reporters", "image": "/images/media/sahara-reporters.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Pulse Nigeria", "image": "/images/media/pulse.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "BellaNaija", "image": "/images/media/bellanaija.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Naij.com", "image": "/images/media/naij.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "The Cable", "image": "/images/media/the-cable.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Legit.ng", "image": "/images/media/legit.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "YNaija", "image": "/images/media/ynaija.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "TechCabal", "image": "/images/media/techcabal.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Nairametrics", "image": "/images/media/nairametrics.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
            { "name": "Edugist", "image": "/images/media/edugist.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." }
          ]
        }
      ]
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
      "title": "Creative Arts Industry Contribution to Education in Nigeria 2024",
      "description": "Recognizing efforts towards advancing education through creative arts and dedication to achieving quality education under SDG 4 objectives.",
      "subCategories": [
        {
          "title": "Best Nollywood Production and Artiste for Educational Content Award",
          "description": "This category celebrates Nollywood productions and artistes that have created significant educational content, advancing the quality of education and awareness in Nigeria.",
          "nominees": [
            {
              "name": "Kunle Afolayan",
              "achievement": "Created impactful educational films that highlight societal issues and promote education.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Kunle_Afolayan.png"
            },
            {
              "name": "Genevieve Nnaji",
              "achievement": "Produced and acted in films that empower women and advocate for educational opportunities.",
              "state": "Imo State",
              "country": "Nigeria",
              "image": "/images/creativeart/Genevieve_Nnaji.png"
            },
            {
              "name": "Tunde Kelani",
              "achievement": "Contributed to cultural education through film, preserving and promoting indigenous languages and traditions.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/Tunde_Kelani.png"
            },
            {
              "name": "Ijeoma Grace Agu",
              "achievement": "Highlighted social issues related to education through her roles, inspiring change.",
              "state": "Anambra State",
              "country": "Nigeria",
              "image": "/images/creativeart/Ijeoma_Grace_Agu.png"
            },
            {
              "name": "Femi Odugbemi",
              "achievement": "Produced documentaries focusing on educational reform and advocacy in Nigeria.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Femi_Odugbemi.png"
            },
            {
              "name": "Niyi Akinmolayan",
              "achievement": "Used film to promote STEM education, particularly through animated features.",
              "state": "Ekiti State",
              "country": "Nigeria",
              "image": "/images/creativeart/Niyi_Akinmolayan.png"
            },
            {
              "name": "Kemi Adetiba",
              "achievement": "Directed films that address gender inequality and advocate for girls' education.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Kemi_Adetiba.png"
            },
            {
              "name": "Bolanle Austen-Peters",
              "achievement": "Promoted African culture and history through theatrical productions that are educational.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Bolanle_Austen-Peters.png"
            },
            {
              "name": "Ramsey Nouah",
              "achievement": "Acted in and directed films that emphasize the importance of education and personal growth.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Ramsey_Nouah.png"
            },
            {
              "name": "Adesua Etomi",
              "achievement": "Advocated for youth empowerment through education in her public and cinematic work.",
              "state": "Edo State",
              "country": "Nigeria",
              "image": "/images/creativeart/Adesua_Etomi.png"
            }
          ]
        },
        {
          "title": "Best Music Industry Contribution to Education Award",
          "description": "This award honors musicians and organizations in the music industry that have made significant contributions to education, either through educational content or advocacy for educational reforms.",
          "nominees": [
            {
              "name": "Asa",
              "achievement": "Created music that inspires and educates, addressing social issues such as education and empowerment.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Asa.png"
            },
            {
              "name": "2Baba",
              "achievement": "Founded initiatives focused on improving access to education for underprivileged children.",
              "state": "Benue State",
              "country": "Nigeria",
              "image": "/images/creativeart/2Baba.png"
            },
            {
              "name": "Yemi Alade",
              "achievement": "Used her platform to advocate for girls' education across Africa.",
              "state": "Abia State",
              "country": "Nigeria",
              "image": "/images/creativeart/Yemi_Alade.png"
            },
            {
              "name": "Falz",
              "achievement": "Incorporated themes of education and societal reform into his music.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Falz.png"
            },
            {
              "name": "Simi",
              "achievement": "Released songs that promote the importance of education and self-worth.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/Simi.png"
            },
            {
              "name": "Teni",
              "achievement": "Used her music to challenge stereotypes and promote inclusive education.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Teni.png"
            },
            {
              "name": "Burna Boy",
              "achievement": "Advocated for educational reform and youth empowerment through his lyrics.",
              "state": "Rivers State",
              "country": "Nigeria",
              "image": "/images/creativeart/Burna_Boy.png"
            },
            {
              "name": "Banky W",
              "achievement": "Focused on educational advocacy through his music and political engagement.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Banky_W.png"
            },
            {
              "name": "Cobhams Asuquo",
              "achievement": "Contributed to educational content through music production and mentorship.",
              "state": "Cross River State",
              "country": "Nigeria",
              "image": "/images/creativeart/Cobhams_Asuquo.png"
            },
            {
              "name": "Darey Art Alade",
              "achievement": "Promoted cultural education through music, inspiring the younger generation.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Darey_Art_Alade.png"
            }
          ]
        },
        {
          "title": "Best Literature and Art Works for Education Award",
          "description": "Recognizes writers, literary organizations, and visual artists whose work has significantly contributed to education, particularly in promoting reading, historical understanding, and cultural awareness.",
          "nominees": [
            {
              "name": "Chimamanda Ngozi Adichie",
              "achievement": "Authored books that address important social issues, promoting education and awareness globally.",
              "state": "Anambra State",
              "country": "Nigeria",
              "image": "/images/creativeart/Chimamanda_Ngozi_Adichie.png"
            },
            {
              "name": "Wole Soyinka",
              "achievement": "Nobel laureate whose literary work has significantly impacted education and cultural awareness.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/Wole_Soyinka.png"
            },
            {
              "name": "Chinelo Okparanta",
              "achievement": "Writer who tackles issues of identity and education in her works.",
              "state": "Abia State",
              "country": "Nigeria",
              "image": "/images/creativeart/Chinelo_Okparanta.png"
            },
            {
              "name": "Helon Habila",
              "achievement": "Author of works that explore social and political themes, educating readers on Nigerian history.",
              "state": "Gombe State",
              "country": "Nigeria",
              "image": "/images/creativeart/Helon_Habila.png"
            },
            {
              "name": "Sefi Atta",
              "achievement": "Literary contributions that reflect on societal issues, promoting education through storytelling.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Sefi_Atta.png"
            },
            {
              "name": "Teju Cole",
              "achievement": "Writer and photographer whose works foster a deep understanding of history and culture.",
              "state": "Ekiti State",
              "country": "Nigeria",
              "image": "/images/creativeart/Teju_Cole.png"
            },
            {
              "name": "Lola Shoneyin",
              "achievement": "Advocate for literacy and education through her literary festivals and writings.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/Lola_Shoneyin.png"
            },
            {
              "name": "Nnedi Okorafor",
              "achievement": "Booker Prize-winning author known for his contributions to global literature and education.",
              "state": "Delta State",
              "country": "Nigeria",
              "image": "/images/creativeart/Nnedi_okorafor.png"
            },
            {
              "name": "Elnathan John",
              "achievement": "Author whose works engage with historical and contemporary issues, fostering education and awareness.",
              "state": "Enugu State",
              "country": "Nigeria",
              "image": "/images/creativeart/Elnathan_John.png"
            },
            {
              "name": "Chris Abani",
              "achievement": "Poet and writer whose work emphasizes cultural identity and education.",
              "state": "Enugu State",
              "country": "Nigeria",
              "image": "/images/creativeart/Chris_Abani.png"
            }
          ]
        },
        {
          "title": "Best Visual Arts and Educational Impact Award",
          "description": "This award honors visual artists and sculptors whose work has had a significant educational impact, either through the themes they explore or their contributions to educational institutions.",
         
          "nominees": [
            {
              "name": "Bruce Onobrakpeya",
              "achievement": "Renowned for his contributions to Nigerian art education and cultural heritage preservation.",
              "state": "Delta State",
              "country": "Nigeria",
              "image": "/images/creativeart/Bruce_Onobrakpeya.png"
            },
            {
              "name": "Nike Davies-Okundaye",
              "achievement": "Artist and educator known for promoting traditional Nigerian art and crafts.",
              "state": "Kogi State",
              "country": "Nigeria",
              "image": "/images/creativeart/Nike_Davies-Okundaye.png"
            },
            {
              "name": "Peju Alatise",
              "achievement": "Contemporary artist whose works address gender, culture, and education.",
              "state": "Ekiti State",
              "country": "Nigeria",
              "image": "/images/creativeart/Peju_Alatise.png"
            },
            {
              "name": "Ndidi Dike",
              "achievement": "Globally recognized artist whose works challenge perceptions and promote cultural education.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Ndidi_Dike.png"
            },
            {
              "name": "Diseye Tantua",
              "achievement": "Visual artist known for her intricate drawings that explore identity, history, and education.",
              "state": "Ondo State",
              "country": "Nigeria",
              "image": "/images/creativeart/Diseye_Tantua.png"
            },
            {
              "name": "Victor Ehikhamenor",
              "achievement": "Artist whose works merge traditional and contemporary styles to educate about Nigerian culture.",
              "state": "Edo State",
              "country": "Nigeria",
              "image": "/images/creativeart/Victor_Ehikhamenor.png"
            },
            {
              "name": "Osi Audu",
              "achievement": "Performance artist who uses art to advocate for human rights and education.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Osi_Audu.png"
            },
            {
              "name": "Laolu Senbanjo",
              "achievement": "Known for his 'Afromysterics' style, blending art and education to promote African culture.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/Laolu_Senbanjo.png"
            },
            {
              "name": "Olalekan Jeyifous",
              "achievement": "Artist whose works have significantly contributed to cultural education and historical preservation.",
              "state": "Anambra State",
              "country": "Nigeria",
              "image": "/images/creativeart/Olalekan_Jeyifous.png"
            },
            {
              "name": "Olu Amoda",
              "achievement": "Sculptor whose works explore social issues and promote educational discussions.",
              "state": "Enugu State",
              "country": "Nigeria",
              "image": "/images/creativeart/Olu_Amoda.png"
            }
          ]
        },
        {
          "title": "Best Performing Arts and Education Enrichment Award",
          "description": "This category recognizes performers and institutions in the performing arts who have significantly contributed to education, particularly in raising awareness of social issues through theatre, dance, and other performances.",
         
          "nominees": [
            {
              "name": "Bolanle Austen-Peters",
              "achievement": "Renowned for using theatre to educate and inspire change in Nigerian society.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Bolanle_Austen_Peters.png"
            },
            {
              "name": "Segun Adefila",
              "achievement": "Advocate for education and social change through performing arts and activism.",
              "state": "Edo State",
              "country": "Nigeria",
              "image": "/images/creativeart/Segun_Adefila.png"
            },
            {
              "name": "Ijeoma Grace Agu",
              "achievement": "Veteran actor who has used his platform to advocate for educational causes.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Ijeoma_Grace_Agu.png"
            },
            {
              "name": "Kunle Afolayan",
              "achievement": "Dance instructor and performer known for her educational dance workshops across Nigeria.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/Kunle.png"
            },
            {
              "name": "Adesua Etomi",
              "achievement": "Pioneering actress whose work in theatre has emphasized the importance of education and culture.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Adesua_Etomi.png"
            },
            {
              "name": "Lala Akindoju",
              "achievement": "Celebrated actress and advocate for educational theatre and youth empowerment.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Lala_Akindoju.png"
            },
            {
              "name": "Wale Ojo",
              "achievement": "Utilized her platform in performing arts to advance educational initiatives and social change.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/Wale_Ojo.png"
            },
            {
              "name": "Tope Oshin",
              "achievement": "Actor and producer known for using film and theatre to promote education and societal growth.",
              "state": "Ekiti State",
              "country": "Nigeria",
              "image": "/images/creativeart/Tope_Oshin.png"
            },
            {
              "name": "Kemi Lala Akindoju",
              "achievement": "Theatre producer whose works focus on educational themes and cultural preservation.",
              "state": "Delta State",
              "country": "Nigeria",
              "image": "/images/creativeart/Kemi_Lala.png"
            },
            {
              "name": "Femi Odugbemi",
              "achievement": "Poet and spoken word artist whose performances address educational and social issues.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Femi_Odugbemi.png"
            }
          ]
        },
        {
          "title": "Best Film and Media for Educational Advancement Award",
          "description": "This award recognizes individuals and organizations that have used design and creative innovation to enhance educational practices, resources, and accessibility.",
         
          "nominees": [
            {
              "name": "Femi Odugbemi",
              "achievement": "Tech entrepreneur known for his contributions to education technology in Nigeria.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Femi_Odugbemi.png"
            },
            {
              "name": "Jade Osiberu",
              "achievement": "Innovator in educational design, creating solutions that enhance learning environments.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Jade_Osiberu.png"
            },
            {
              "name": "Tunde Kelani",
              "achievement": "Co-founder of CcHub, driving innovation in educational technology and accessibility.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Tunde_Kelani.png"
            },
            {
              "name": "Kunle Afolayan",
              "achievement": "Founder of BudgIT, leveraging design for educational transparency and civic engagement.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/Kunle_Afolayan"
            },
            {
              "name": "Kemi Adetiba",
              "achievement": "Social entrepreneur using design thinking to address healthcare education in Nigeria.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Kemi_Adetiba.png"
            },
            {
              "name": "Izu Ojukwu",
              "achievement": "Design expert known for creating educational platforms and resources that are user-friendly.",
              "state": "Ekiti State",
              "country": "Nigeria",
              "image": "/images/creativeart/Izu_Ojukwu.png"
            },
            {
              "name": "Mildred Okwo",
              "achievement": "Tech entrepreneur leveraging digital platforms to enhance educational access and quality.",
              "state": "Akwa Ibom State",
              "country": "Nigeria",
              "image": "/images/creativeart/Mildred_Okwo.png"
            },
            {
              "name": "Moses Inwang",
              "achievement": "Founder of Calendly, recognized for creating tools that support educational productivity.",
              "state": "Ekiti State",
              "country": "Nigeria",
              "image": "/images/creativeart/Moses_Inwang.png"
            },
            {
              "name": "Blessing Egbe",
              "achievement": "Social entrepreneur using innovation to solve educational and social challenges.",
              "state": "Cross River State",
              "country": "Nigeria",
              "image": "/images/creativeart/Blessing_Egbe.png"
            },
            {
              "name": "Akin Omotoso",
              "achievement": "Co-founder of MAX, known for his contributions to education in logistics and technology.",
              "state": "Anambra State",
              "country": "Nigeria",
              "image": "/images/creativeart/Akin_Omotoso.png"
            }
          ]
        },
        {
          "title": "Best Creative Advocacy and Educational Campaigns Award",
          "description": "This category celebrates individuals and companies that have used animation and multimedia to create educational content, making learning more engaging and accessible.",
         
          "nominees": [
            {
              "name": "ONE Campaign",
              "achievement": "Pioneer in using film and television for educational content creation.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/ONE_Campaign.png"
            },
            {
              "name": "Girl Rising Nigeria",
              "achievement": "Animator known for producing educational content that is both entertaining and informative.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/Girl_Rising_Nigeria.png"
            },
            {
              "name": "Teach For Nigeria",
              "achievement": "Director and animator focusing on educational themes in his works.",
              "state": "Ekiti State",
              "country": "Nigeria",
              "image": "/images/creativeart/Teach_Nigeria.png"
            },
            {
              "name": "Youth for Technology Foundation",
              "achievement": "Founder of Lagos Comic-Con, promoting education through comics and animation.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Youth_Foundation.png"
            },
            {
              "name": "African Leadership Academy",
              "achievement": "Fashion stylist and multimedia artist known for his educational and cultural projects.",
              "state": "Anambra State",
              "country": "Nigeria",
              "image": "/images/creativeart/African_Leadership.png"
            },
            {
              "name": "Education as a Vaccine (EVA)",
              "achievement": "Animator and storyteller known for creating educational content for children.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Education_Vaccine.png"
            },
            {
              "name": "Stand to End Rape Initiative (STER)",
              "achievement": "Digital platform creating multimedia content that educates and entertains.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Stand-Initiative.png"
            },
            {
              "name": "CAMFED (Campaign for Female E..)",
              "achievement": "Leading animation studio in Nigeria creating educational and entertaining content.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/CAMFED.png"
            },
            {
              "name": "Connected Development (CODE)",
              "achievement": "Creative studio known for producing animation that promotes education and cultural values.",
              "state": "Lagos State",
              "country": "Nigeria",
              "image": "/images/creativeart/Connected_Development.png"
            },
            {
              "name": "HACEY Health Initiative",
              "achievement": "Media company focused on producing educational animation and multimedia content.",
              "state": "Ogun State",
              "country": "Nigeria",
              "image": "/images/creativeart/HACEY_Health.png"
            }
          ]
        }
      ]
    },
    
    {
      title: "Support for education in STEM in Nigeria 2024",
      description:
        "Celebrating initiatives by any organization for creative arts role in education and promoting hands-on learning experiences.",
    },
  ];