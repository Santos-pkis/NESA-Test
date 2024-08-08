export interface Nominee {
    name: string;
    image: string;
    achievement: string;
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