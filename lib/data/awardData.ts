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
      "title": "Africa Lifetime Education Icon Special Recognition Award",
      "description": "The Africa Lifetime Education Icon Special Recognition Award is the pinnacle of the NESA-Africa awards and the Santos Creations Educational Foundation. Envisioned as the Africa education advocacy Nobel award recognition, this prestigious accolade honors individuals from around the world who have dedicated their lives to advancing sustainable education for all in Africa, aligning with the United Nations Sustainable Development Goal 4 (SDG 4) - Quality Education.",
      "subCategories": [
        {
          "title": "Africa Education Philanthropy Icon Of The Decade (2014-2024)",
          "description": "Honors significant philanthropic contributions that have improved educational access and quality, advancing SDG 4's targets.",
          "nominees": [
            { "name": "Aliko Dangote", "image": "/images/africaicons/aliko-dangote.png", "achievement": "Established the 'Dangote Foundation' in 1993, which has invested millions in educational causes across Africa." },
            { "name": "Mo Ibrahim", "image": "/images/africaicons/mo-ibrahim.png", "achievement": "Founded the 'Mo Ibrahim Foundation' in 2006, supporting governance and leadership in Africa." },
            { "name": "Strive Masiyiwa", "image": "/images/africaicons/strive-masiyiwa.png", "achievement": "Established the 'Higher Life Foundation' in 1996, providing scholarships to over 250,000 African students." },
            { "name": "Folorunso Alakija", "image": "/images/africaicons/Folorunso-alakija.png", "achievement": "Established the 'Rose of Sharon Foundation' in 2008, providing scholarships and educational support to widows and orphans." },
            { "name": "Patrice Motsepe", "image": "/images/africaicons/patrice-motsepe.png", "achievement": "Founded the 'Motsepe Foundation' in 1999, focusing on education, scholarships, and school infrastructure in South Africa." },
            { "name": "Tony Elumelu", "image": "/images/africaicons/tony-elumelu.png", "achievement": "Established the 'Tony Elumelu Foundation' in 2010, providing scholarships and promoting entrepreneurship education across Africa." },
            { "name": "Isabel dos Santos", "image": "/images/africaicons/isabel-dos-santos.png", "achievement": "Founded the 'Isabel dos Santos Foundation' in 2014, which has funded educational projects and scholarships in Angola." },
            { "name": "Nassef Sawiris", "image": "/images/africaicons/nassef-sawiris.png", "achievement": "Founded the 'Sawiris Foundation for Social Development' in 2001, supporting higher education and scholarships in Egypt." },
            { "name": "Osei Kwame", "image": "/images/africaicons/osei-kwame.png", "achievement": "Founded the 'Despite Foundation,' supporting education through scholarships and school building projects in Ghana." },
            { "name": "Tsitsi Masiyiwa", "image": "/images/africaicons/tsitsi-masiyiwa.png", "achievement": "Co-founded the 'Capernaum Trust' in 1996, providing scholarships and educational support to orphans and vulnerable children." }
          ]
        },
        {
          "title": "Literary And New Curriculum Advocate Africa Education Icon Of The Decade (2014-2024)",
          "description": "Honors significant contributions to literature and curriculum development in African education.",
          "nominees": [
            { "name": "Ngugi wa Thiong'o", "image": "/images/africaicons/ngugi-wa-thiongo.png", "achievement": "Founded the 'Ngugi wa Thiong'o Foundation' in 1980, promoting indigenous languages in education in Kenya." },
            { "name": "Chinua Achebe", "image": "/images/africaicons/chinua-achebe.png", "achievement": "Founded the 'Chinua Achebe Foundation' in 1990, promoting African literature and supporting literary education (posthumously)." },
            { "name": "Mariama Ba", "image": "/images/africaicons/mariama-ba.png", "achievement": "Established the 'Mariama Ba School' in 1979, a beacon of girls' education in Senegal." },
            { "name": "Chris Abani", "image": "/images/africaicons/chris-abani.png", "achievement": "Dedication to improving rural education, particularly for girls, demonstrating a significant impact on her community." },
            { "name": "Buchi Emecheta", "image": "/images/africaicons/buchi-emecheta.png", "achievement": "Dedication to improving rural education, particularly for girls, demonstrating a significant impact on her community." },
            { "name": "Chimamanda Ngozi Adichie", "image": "/images/africaicons/chimamanda-ngozi-adichie.png", "achievement": "Founded the 'Farafina Trust' in 2008, promoting literary education and supporting young writers in Nigeria." },
            { "name": "Wole Soyinka", "image": "/images/africaicons/wole-soyinka.png", "achievement": "Established the 'Wole Soyinka Centre for Investigative Journalism' in 2004, promoting media literacy and education in Nigeria." },
            { "name": "Ama Ata Aidoo", "image": "/images/africaicons/ama-ata-aidoo.png", "achievement": "Founded the 'Mbaasem Foundation' in 2000, supporting the development of African women writers and promoting literacy in Ghana." },
            { "name": "Nnedi Okorafor", "image": "/images/africaicons/nnedi-okorafor.png", "achievement": "Co-founded the 'African Speculative Fiction Society' in 2016, promoting African literature in science fiction and fantasy." },
            { "name": "Teju Cole", "image": "/images/africaicons/teju-cole.png", "achievement": "Founded the 'Teju Cole Literary Project' in 2010, promoting literature and creative writing in Nigeria." }
          ]
        },
        {
          "title": "Africa Technical Educator Icon Of The Decade (2014-2024)",
          "description": "Recognizes outstanding contributions to technical education in Africa.",
          "nominees": [
            { "name": "Patrick Awuah", "image": "/images/africaicons/patrick-awuah.png", "achievement": "Founder of 'Ashesi University' in 2002, which emphasizes leadership, ethics, and entrepreneurship in its technical and liberal arts education." },
            { "name": "Ndidi Nwuneli", "image": "/images/africaicons/ndidi-nwuneli.png", "achievement": "Co-founder of 'LEAP Africa' in 2002, which focuses on leadership and life skills training for young people." },
            { "name": "Fred Swaniker", "image": "/images/africaicons/fred-swaniker.png", "achievement": "Founder of 'African Leadership University' in 2015, a network of tertiary institutions focused on developing Africa's next generation of leaders." },
            { "name": "Oluseun Onigbinde", "image": "/images/africaicons/oluseun-onigbinde.png", "achievement": "Co-founder of 'BudgIT' in 2011, which uses data to drive education in governance and public policy." },
            { "name": "Bright Simons", "image": "/images/africaicons/bright-simons.png", "achievement": "Founder of 'mPedigree' in 2007, an organization that uses mobile technology to enhance healthcare and education services." },
            { "name": "Rebecca Enonchong", "image": "/images/africaicons/rebecca-enonchong.png", "achievement": "Founder of 'AppsTech' in 1999, which provides enterprise application solutions and has supported IT education in Africa." },
            { "name": "Judith Owigar", "image": "/images/africaicons/judith-owigar.png", "achievement": "Co-founder of 'AkiraChix' in 2010, which empowers young women in Kenya through technical training in software development." },
            { "name": "Tunde Kehinde", "image": "/images/africaicons/tunde-kehinde.png", "achievement": "Co-founder of 'Lidya' in 2016, a digital financial services platform that provides financial literacy and resources to small businesses in Africa." },
            { "name": "Iyinoluwa Aboyeji", "image": "/images/africaicons/iyinoluwa-aboyeji.png", "achievement": "Co-founder of 'Flutterwave' in 2016, supporting fintech education and training across Africa." },
            { "name": "Audrey Cheng", "image": "/images/africaicons/audrey-cheng.png", "achievement": "Founder of 'Moringa School' in 2014, a Nairobi-based technology and coding bootcamp training the next generation of software developers." }
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
            { "name": "YEDBC (Yaba Educators Centre for In)", "image": "/images/ngo/yedbc.png", "achievement": "Significant contributions to improving rural education, particularly for girls, demonstrating a significant impact on their community." },
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
        },
        {
          "title": "Youth Empowerment Through Educational Services By An NGO In Nigeria",
          "description": "Recognizes NGOs that have implemented innovative programs to empower youth through education and skill development.",
          "nominees": [
            { "name": "Youth for Technology Foundation", "image": "/images/ngo/youth-for-technology.png", "achievement": "Provided technology training and entrepreneurship education to young people in Nigeria. Empowered over 20,000 youths wi..." },
            { "name": "Junior Achievement Nigeria (JAN)", "image": "/images/ngo/junior-achievement.png", "achievement": "Implemented educational programs that empowered youths with financial literacy and workforce readiness for youths, reache..." },
            { "name": "YALI Network Nigeria", "image": "/images/ngo/yali-network.png", "achievement": "Provided leadership and professional development opportunities for young Nigerians through the Young African Leaders Initiative..." },
            { "name": "AIESEC Nigeria", "image": "/images/ngo/aiesec.png", "achievement": "Offered international exchange programs that provide young people with leadership opportunities, global internships, and socia..." },
            { "name": "Girls Education Mission International (GEM)", "image": "/images/ngo/girls-education-mission.png", "achievement": "Focused on empowering young girls through education, providing scholarships, mentorship, and advocacy for girls' rights. I..." },
            { "name": "Rise Network", "image": "/images/ngo/rise-network.png", "achievement": "Facilitated career development, mentorship, and skills training for young people in Nigeria. Supported over 35,000 young Nige..." },
            { "name": "Jobberman Nigeria", "image": "/images/ngo/jobberman.png", "achievement": "Offered job training and placement services for young Nigerians, bridging the gap between job seekers and employers. Trained..." },
            { "name": "Young African Leadership Initiative (YALI) Nigeria", "image": "/images/ngo/yali.png", "achievement": "Empowered young Nigerians through leadership training, civic engagement, and professional development programs. Impac..." },
            { "name": "YouthHubAfrica", "image": "/images/ngo/youthhub-africa.png", "achievement": "Supported youth-driven initiatives for social change and education, providing platforms for young voices to be heard in Nigeri..." },
            { "name": "Youth Mentoring Initiative for Youth Empowerment (MIYE)", "image": "/images/ngo/youth-mentoring-initiative.png", "achievement": "Guided young people through mentorship and educational programs, focusing on leadership and personal development. Ment..." }
          ]
        },
        {
          "title": "Women And Girls' Empowerment In Education By An NGO In Nigeria",
          "description": "Honors NGOs that have made significant contributions to empowering women and girls through educational initiatives.",
          "nominees": [
            { "name": "Girls Education Mission International (GEM)", "image": "/images/ngo/girls-education-mission.png", "achievement": "Provided educational scholarships, mentorship, and advocacy for the education of girls in northern Nigeria. Empowered over..." },
            { "name": "ActionAid Nigeria", "image": "/images/ngo/actionaid.png", "achievement": "Implemented the Safe Cities for Women and Girls initiative. Advocated for educational programs to empower women and girls, focu..." },
            { "name": "Educate Girls Nigeria", "image": "/images/ngo/educate-girls.png", "achievement": "Focused on enrolling and retaining girls in school, especially in rural and underserved communities. Increased school enrollmen..." },
            { "name": "Women's Rights Advancement and Protection Alternative (WRAPA)", "image": "/images/ngo/wrapa.png", "achievement": "Provided education and vocational training for women and girls, particularly those affected by gender-based violence. Empow..." },
            { "name": "Girl Child Concerns (GCC)", "image": "/images/ngo/girl-child-concerns.png", "achievement": "Implemented initiatives focused on the education and empowerment of adolescent girls in northern Nigeria. Supported the educ..." },
            { "name": "Women for Women International Nigeria", "image": "/images/ngo/women-for-women.png", "achievement": "Provided educational programs, vocational skills training, and support to women survivors of conflict. Empowered over 20,000..." },
            { "name": "Baobab for Women's Human Rights", "image": "/images/ngo/baobab.png", "achievement": "Focused on educating women and girls about their rights, including the right to education. Provided literacy programs for wom..." },
            { "name": "Centre for Girls Education (CGE)", "image": "/images/ngo/centre-for-girls-education.png", "achievement": "Implemented programs to educate and empower girls in rural northern Nigeria, focusing on literacy and life skills. Improved..." },
            { "name": "Tech4Dev Women's Empowerment Program", "image": "/images/ngo/tech4dev.png", "achievement": "Educated young women in digital skills and entrepreneurship, helping them to access better job opportunities. Trained over 5,000..." },
            { "name": "Association of Nigerian Women Entrepreneurs (ANWE)", "image": "/images/ngo/anwep.png", "achievement": "Promoted education and entrepreneurship for women and girls, providing resources and support for business startups. Empowered o..." }
          ]
        }
      ]
    },
  
  
      {
        "title": "Africa Diaspora association Educational Impact Projects Recognition Award in Africa",
        "description": "Honoring the significant contributions made by diaspora organizations towards achieving \"Education for all\" across the African Continent.",
        "subCategories": [
          {
            "title": "The Best Diaspora-Led Educational Infrastructure Project in Africa",
            "description": "This category celebrates diaspora organizations that have created significant educational infrastructure, advancing the quality of education across Africa.",
            "nominees": [
              {
                "name": "Nigerian Association in the UK",
                "achievement": "Constructed a science and technology center in Osun State, Nigeria, fully equipped with modern laboratories and classrooms.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Nigerian_Association_in_the_UK.png"
              },
              {
                "name": "Ghanaian Association of Washington",
                "achievement": "Built a community library and learning center in Kumasi, Ghana, with a focus on providing access to books and digital resources.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Ghanaian_Association_of_Washington.png"
              },
              {
                "name": "Kenyan Diaspora Alliance",
                "achievement": "Constructed three primary schools in rural areas of Kenya, including the provision of solar power and internet access.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Kenyan_Diaspora_Alliance.png"
              },
              {
                "name": "Ethiopian Diaspora Fellowship",
                "achievement": "Renovated dilapidated schools in Addis Ababa, Ethiopia, including upgrading classrooms, sanitation facilities, and playgrounds.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Ethiopian_Diaspora_Fellowship.png"
              },
              {
                "name": "South African Diaspora United",
                "achievement": "Funded the construction of a multi-purpose education and sports complex in Soweto, South Africa. Provided a safe space for learning and recreation.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/South_African_Diaspora_United.png"
              },
              {
                "name": "Ugandan North American Association",
                "achievement": "Built a secondary school in Gulu, Uganda, focusing on regions recovering from conflict. Provided quality education to over 500 students.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Ugandan_North_American_Association.png"
              },
              {
                "name": "Zimbabwean Diaspora Network",
                "achievement": "Led the refurbishment of schools in Matabeleland, Zimbabwe, including the installation of computer labs and solar power systems.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Zimbabwean_Diaspora_Network.png"
              },
              {
                "name": "Senegalese Association in France",
                "achievement": "Funded the construction of a vocational training center in Dakar, Senegal, focusing on trades such as carpentry, plumbing, and electrical work.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Senegalese_Association_in_France.png"
              },
              {
                "name": "Tanzanian Community in the USA",
                "achievement": "Established digital learning hubs in rural Tanzania, providing internet access and e-learning tools to underserved communities.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Tanzanian_Community_in_the_USA.png"
              },
              {
                "name": "Congolese Diaspora Impact Group",
                "achievement": "Built a school complex in Kinshasa, Democratic Republic of the Congo, including classrooms, a library, and a computer lab.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Congolese_Diaspora_Impact_Group.png"
              }
            ]
          },
          {
            "title": "The Best Diaspora-Led Educational Program Innovation in Africa",
            "description": "This category recognizes innovative educational programs initiated by diaspora organizations that have significantly impacted learning outcomes in Africa.",
            "nominees": [
              {
                "name": "African Diaspora Network (ADN)",
                "achievement": "Developed an e-learning platform that offers free access to STEM courses for students across Africa. Trained 5,000 teachers across the continent.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/African_Diaspora_Network.png"
              },
              {
                "name": "Sierra Leonean Empowerment Network",
                "achievement": "Reached over 10,000 students in multiple countries, significantly improving their understanding and performance in science subjects.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Sierra_Leonean_Empowerment_Network.png"
              },
              {
                "name": "African Leadership Academy Alumni",
                "achievement": "Designed an after-school leadership program that fosters entrepreneurial skills among African youth. Over 1,000 students have participated.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/African_Leadership_Academy_Alumni.png"
              },
              {
                "name": "Nigerian Diaspora Direct Investment Summit",
                "achievement": "Introduced a mentorship and investment program for young entrepreneurs in Nigeria, combining educational resources with financial support.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Nigerian_Diaspora_Direct_Investment_Summit.png"
              },
              {
                "name": "Somali Diaspora Youth",
                "achievement": "Developed a distance learning program that connects Somali students in rural areas with diaspora educators via virtual classrooms.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Somali_Diaspora_Youth.png"
              },
              {
                "name": "Eritrean Diaspora Initiative",
                "achievement": "Launched a digital literacy program that provides Eritrean students with essential IT skills, including coding and digital communication.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Eritrean_Diaspora_Network.png"
              },
              {
                "name": "Moroccan American Network",
                "achievement": "Established a bilingual education program that supports French and Arabic literacy in Moroccan schools using digital tools.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Moroccan_American_Network.png"
              },
              {
                "name": "Ghana Diaspora Professional Network",
                "achievement": "Developed an IT skills training program focused on coding, web development, and digital marketing for Ghanaian youth.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Ghana_Diaspora_Professional_Network.png"
              },
              {
                "name": "Botswana Educational Foundation",
                "achievement": "Introduced an environmental education program that teaches sustainable practices and conservation in Botswana's schools.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Botswana_Educational_Foundation.png"
              },
              {
                "name": "Liberian Diaspora Education Fund",
                "achievement": "Implemented an after-school tutoring and mentorship program in Liberia, focusing on literacy and numeracy skills. Improved academic performance for over 5,000 students.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Liberian_Diaspora_Education_Fund.png"
              }
            ]
          },
          {
            "title": "The Best Diaspora-Led Teacher Training And Support Initiative in Africa",
            "description": "This category honors diaspora-led initiatives that have significantly improved teacher training and support across Africa.",
            "nominees": [
              {
                "name": "African Teacher Foundation",
                "achievement": "Delivered a teacher training program covering modern pedagogical methods, classroom management, and technology integration.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/African_Teacher_Foundation.png"
              },
              {
                "name": "Diaspora African Women in Education (DAWIE)",
                "achievement": "Established a mentorship program connecting female educators in Africa with experienced teachers abroad. Empowered 2,000 women in education.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Diaspora_African_Women_in_Education.png"
              },
              {
                "name": "Zimbabwean Teachers Association Abroad",
                "achievement": "Launched a continuous professional development program for Zimbabwean teachers, focusing on curriculum development and modern teaching methods.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Zimbabwean_Teachers_Association_Abroad.png"
              },
              {
                "name": "Ghanaian Teachers in Diaspora",
                "achievement": "Developed an annual teacher training conference in Accra, Ghana, featuring workshops on best practices in education and technology integration.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Ghanaian_Teachers_in_Diaspora.png"
              },
              {
                "name": "Ugandan Teachers' Network",
                "achievement": "Implemented a peer-to-peer support network for Ugandan teachers, offering resources, mentorship, and collaborative professional development.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Ugandan_Teachers_Network.png"
              },
              {
                "name": "Malawian Diaspora Teaching Initiative",
                "achievement": "Conducted teacher training workshops focusing on inclusive education and teaching students with special needs. Trained over 1,000 educators.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Malawian_Diaspora_Teaching_Initiative.png"
              },
              {
                "name": "Sierra Leone Teachers Abroad Network",
                "achievement": "Provided remote training and resources for teachers in Sierra Leone, focusing on post-conflict education and trauma-informed teaching practices.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Sierra_Leone_Teachers_Abroad_Network.png"
              },
              {
                "name": "Ethiopian Education Foundation",
                "achievement": "Established a teacher exchange program that brings Ethiopian educators to the United States for training in STEM education. Improved science and math instruction in over 100 Ethiopian schools.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Ethiopian_Education_Foundation.png"
              },
              {
                "name": "South Sudanese Educators Abroad",
                "achievement": "Developed a peace education curriculum and trained teachers in South Sudan on conflict resolution and peacebuilding. Trained over 500 educators.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/South_Sudanese_Educators_Abroad.png"
              },
              {
                "name": "Zambian Diaspora Education Trust",
                "achievement": "Developed a STEM-focused teacher training initiative, providing resources and training to Zambian teachers. Trained 1,500 teachers in innovative science and math instruction methods.",
                "state": "Lagos, Nigeria",
                "country": "Nigeria",
                "image": "/images/diaspora/Zambian_Diaspora_Education_Trust.png"
              }
            ]
          }
        ]
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
                  "name": "Wavecrest College of Hospitality Library",
                  "achievement": "Exceptional library resources for hospitality education.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Wavecrest_College_of_Hospitality.png"
                },
                {
                  "name": "Heritage Polytechnic Library",
                  "achievement": "Comprehensive technical education resources and services.",
                  "state": "Akwa Ibom State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Heritage_Polytechnic_Library.png"
                },
                {
                  "name": "Dorben Polytechnic Library",
                  "achievement": "Innovative library programs supporting vocational studies.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Dorben_Polytechnic_Library.png"
                },
                {
                  "name": "Crown Polytechnic Library",
                  "achievement": "Outstanding support for technical research and education.",
                  "state": "Ondo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Crown_Polytechnic_Library.png"
                },
                {
                  "name": "Temple Gate Polytechnic Library",
                  "achievement": "Excellent digital resources for polytechnic students.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Temple_Polytechnic_Library.png"
                },
                {
                  "name": "Calvary Polytechnic Library",
                  "achievement": "Comprehensive collection supporting various technical fields.",
                  "state": "Benue State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Calvary_Polytechnic_Library.png"
                },
                {
                  "name": "Wolex Polytechnic Library",
                  "achievement": "Innovative library services for vocational education.",
                  "state": "Edo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Wolex_Polytechnic_Library.png"
                },
              
                {
                  "name": "Allover Central Polytechnic Library",
                  "achievement": "Outstanding support for polytechnic research and learning.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Allover_Central_Polytechnic_Library.png"
                },
                {
                  "name": "Grace Polytechnic Library",
                  "achievement": "Comprehensive library services for technical education.",
                  "state": "Abia State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Grace_Polytechnic_Library.png"
                }
              ]
            },
            {
              "title": "Best College of Education Library in Nigeria (Private)",
              "description": "This category honors private college of education libraries that have excelled in supporting teacher training and educational research.",
              "nominees": [
                {
                  "name": "Michael Otedola College of Primary Education Library",
                  "achievement": "Exceptional resources for primary education training.",
                  "state": "Enugu State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Michael_Otedola_College_Primary_Education Library.png"
                },
                {
                  "name": "Alvan Ikoku College of Education Library",
                  "achievement": "Comprehensive support for teacher education programs.",
                  "state": "Oyo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Alvanikoku_College_of_Education_Library.png"
                },
                {
                  "name": "Emmanuel Alayande College of Education Library",
                  "achievement": "Innovative library services for education students.",
                  "state": "Enugu State",
                  "country": "Nigeria",
                  "image": "/images/libraries/EmmanuelAlayande_College_of_Education_Library.png"
                },
                {
                  "name": "Tai Solarin College of Education Library",
                  "achievement": "Outstanding collection supporting educational research.",
                  "state": "Akwa Ibom State",
                  "country": "Nigeria",
                  "image": "/images/libraries/TaiSolarin_College_of_Education_Library.png"
                },
                {
                  "name": "Nwafor Orizu College of Education Library",
                  "achievement": "Excellent digital resources for teacher training.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Nwafor_Orizu_College_of_Education_Library.png"
                },
                {
                  "name": "Bishop Ajayi Crowther College of Education Library",
                  "achievement": "Comprehensive support for educational studies.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Bishop_Ajayi_Crowther_College_of_Education_Library.png"
                },
                {
                  "name": "St. Augustine College of Education Library",
                  "achievement": "Innovative programs supporting education students.",
                  "state": "Kano State",
                  "country": "Nigeria",
                  "image": "/images/libraries/St_Augustine_College_of_Education_Library.png"
                },
                {
                  "name": "Cornerstone College of Education Library",
                  "achievement": "Exceptional resources for teacher education and research.",
                  "state": "Oyo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Cornerstone_College_of_Education_Library.png"
                },
                {
                  "name": "Jigawa State College of Education Library",
                  "achievement": "Outstanding support for educational technology and research.",
                  "state": "Lagos State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Jigawa_State_College_of_Education_Library.png"
                },
                {
                  "name": "Adamu Augie College of Education Library",
                  "achievement": "Comprehensive library services for education students.",
                  "state": "Ondo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Adamu_Augie_College_of_Education_Library.png"
                }
              ]
            },
            {
              "title": "Best College of Nursing Library in Nigeria (Private)",
              "description": "This category recognizes private nursing college libraries that have demonstrated excellence in supporting nursing education and research.",
              "nominees": [
                {
                  "name": "Babcock University School of Nursing Library",
                  "achievement": "Exceptional nursing education resources and services.",
                  "state": "Edo State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Babcock_University_School_of_Nursing_Library.png"
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
                  "name": "Madonna University School of Nursing Library",
                  "achievement": "Outstanding nursing education resources and services.",
                  "state": "Anambra State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Madonna_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Lead City University School of Nursing Library",
                  "achievement": "Comprehensive library services for nursing students.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Lead_City_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Benson Idahosa University School of Nursing Library",
                  "achievement": "Comprehensive library services for nursing students.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Benson_Idahosa_University_School_of_Nursing_Library.png"
                },
                {
                  "name": "Novena University School of Nursing Library",
                  "achievement": "Comprehensive library services for nursing students.",
                  "state": "Ogun State",
                  "country": "Nigeria",
                  "image": "/images/libraries/Novena_University_School_of_Nursing_Library.png"
                }
              ]
          
        },
        {
          "title": "Best College Of Education Library in Nigeria (public)",
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
              "name": "College of Education Oyo Library",
              "achievement": "Innovative resources for modern teacher training.",
              "state": "Ekiti",
              "country": "Nigeria",
              "image": "/images/libraries/College_of_Education_Oyo_Library.png"
            },
            {
              "name": "Federal College of Education Library",
              "achievement": "Rich collection supporting educational research and practice.",
              "state": "Akoka",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_College_of_Education_Library.png"
            },
            {
              "name": "College of Education, Gindiri Library",
              "achievement": "Specialized resources for technical education and teacher training.",
              "state": "Akoka",
              "country": "Nigeria",
              "image": "/images/libraries/College_of_Education_Gindiri_Library.png"
            },
            {
              "name": "Federal College of Education Library",
              "achievement": "Modern facilities supporting educational technology integration.",
              "state": "FCT",
              "country": "Nigeria",
              "image": "/images/libraries/Federal_College_of_Education_Library.png"
            },
    
            {
              "name": "College of Education, Ekiadolor Libra",
              "achievement": "Innovative learning spaces for future educators.",
              "state": "Benin",
              "country": "Nigeria",
              "image": "/images/libraries/College_of_Education_Ekiadolor_Libra.png"
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
      "title": "The Overall Best Research and Development Contribution by Research Institutes in Achieving  Education for all.",
      "description": "Recognizing media role in educational awareness and innovation. Awards media houses and organizations that effectively contribute to educational development.",
      "subCategories": [
        {
          "title": "Best Agricultural Research Institute in Nigeria",
          "description": "Honors institutions that have made significant contributions to agricultural research in Nigeria.",
          "nominees": [
            { "name": "IITA (International Institute of Tropical Agriculture)", "state": "Ibadan, Nigeria", "image": "/images/research-development/IITA.png", "achievement": "Pioneered research in tropical agriculture, including the development of disease-resistant crop varieties. Improved food security." },
            { "name": "NRCRI (National Root Crops Research Institute)", "state": "Umudike, Nigeria", "image": "/images/research-development/NRCRI.png", "achievement": "Focused on research to improve the production and utilization of root crops like cassava and yam. Enhanced the livelihoods of rural farmers." },
            { "name": "IAR (Institute for Agricultural Research)", "state": "Zaria, Nigeria", "image": "/images/research-development/IAR.png", "achievement": "Developed innovative agricultural practices and crop varieties suitable for arid regions. Supported sustainable agriculture in Northern Nigeria." },
            { "name": "NIFOR (Nigerian Institute for Oil Palm Research)", "state": "Benin City, Nigeria", "image": "/images/research-development/NIFOR.png", "achievement": "Conducted research on improving oil palm production and processing techniques. Boosted Nigeria's palm oil industry, contributing to economic growth." },
            { "name": "NCRI (National Cereals Research Institute)", "state": "Badeggi, Nigeria", "image": "/images/research-development/NCRI_Cereals.png", "achievement": "Focused on cereal crop research, including rice and maize, to enhance productivity and disease resistance. Increased cereal crop yields." },
            { "name": "CRIN (Cocoa Research Institute of Nigeria)", "state": "Ibadan, Nigeria", "image": "/images/research-development/CRIN.png", "achievement": "Advanced research on cocoa production and disease management. Supported the revitalization of Nigeria's cocoa industry, boosting exports." },
            { "name": "NAPRI (National Animal Production Research Institute)", "state": "Zaria, Nigeria", "image": "/images/research-development/NAPRI.png", "achievement": "Developed strategies for improving livestock production and management. Enhanced livestock productivity, contributing to food security." },
            { "name": "IAR&T (Institute of Agricultural Research & Training)", "state": "Ibadan, Nigeria", "image": "/images/research-development/IAR&T.png", "achievement": "Integrated research and training to improve agricultural practices and farmer education. Provided training and resources to farmers." },
            { "name": "RRIN (Rubber Research Institute of Nigeria)", "state": "Benin City, Nigeria", "image": "/images/research-development/RRIN.png", "achievement": "Conducted research to improve rubber production and processing. Supported the growth of Nigeria's rubber industry, creating economic opportunities." },
            { "name": "NIHORT (National Horticultural Research Institute)", "state": "Ibadan, Nigeria", "image": "/images/research-development/NIHORT.png", "achievement": "Focused on research to improve horticultural crop production, including fruits and vegetables. Enhanced food diversity and rural economies." }
          ]
        },
        {
          "title": "Best Pharmaceutical And Drug Research Institute in Nigeria",
          "description": "Recognizes institutions that have excelled in pharmaceutical and drug research in Nigeria.",
          "nominees": [
            { "name": "NIPRD (National Institute for Pharmaceutical Research and Development)", "state": "Abuja, Nigeria", "image": "/images/research-development/NIPRD.png", "achievement": "Conducted groundbreaking research in drug development and traditional medicine. Contributed to the development of affordable medicines." },
            { "name": "NIMR (Nigerian Institute of Medical Research)", "state": "Lagos, Nigeria", "image": "/images/research-development/NIMR.png", "achievement": "Focused on research in public health, infectious diseases, and drug development. Played a critical role in improving disease management." },
            { "name": "NAFDAC (National Agency for Food and Drug Administration and Control)", "state": "Lagos, Nigeria", "image": "/images/research-development/NAFDAC.png", "achievement": "Conducted extensive research in pharmacology, toxicology, and pharmaceutical chemistry. Contributed to the safety of drugs and food products." },
            { "name": "Faculty of Pharmacy, University of Ibadan", "state": "Ibadan, Nigeria", "image": "/images/research-development/Faculty_of_Pharmacy_University_of_Ib.png", "achievement": "Conducted extensive research in pharmacology, toxicology, and pharmaceutical chemistry. Contributed to the development of new drugs." },
            { "name": "Faculty of Pharmaceutical Sciences", "state": "Nsukka, Nigeria", "image": "/images/research-development/Faculty_of_Pharmaceutical_Sciences.png", "achievement": "Advanced research in drug formulation, natural products, and pharmacokinetics. Improved drug delivery systems and contributed to pharmaceutical innovations." },
            { "name": "Faculty of Pharmacy, Ahmadu Bello University", "state": "Zaria, Nigeria", "image": "/images/research-development/Faculty_of_Pharmacy_Ahmadu_Bello.png", "achievement": "Focused on the development of herbal medicines and the study of traditional remedies. Supported the integration of traditional and modern medicine." },
            { "name": "NIST (Nigerian Institute of Science and Technology)", "state": "Abuja, Nigeria", "image": "/images/research-development/NIST.png", "achievement": "Led research in laboratory technology and quality control in pharmaceuticals. Enhanced laboratory standards and drug testing capabilities." },
            { "name": "Department of Pharmacognosy, University of Lagos", "state": "Lagos, Nigeria", "image": "/images/research-development/Department_of_Pharmacognosy_Uni.png", "achievement": "Specialized in the study of medicinal plants and natural products. Contributed to the discovery of new plant-based drugs and therapies." },
            { "name": "Faculty of Pharmacy, Obafemi Awolowo University", "state": "Ile-Ife, Nigeria", "image": "/images/research-development/Faculty_of_Pharmacy_Obafemi_Awo.png", "achievement": "Focused on pharmaceutical research and the development of new drug formulations. Advanced the field of pharmacy through innovative research." },
            { "name": "Department of Pharmacology, University of Benin", "state": "Benin City, Nigeria", "image": "/images/research-development/Department_of_Pharmacology_Uni.png", "achievement": "Conducted research on drug interactions, side effects, and pharmacovigilance. Improved drug safety and contributed to the development of treatment protocols." }
          ]
        },
        {
          "title": "Best Environmental And Ecological Research Institute",
          "description": "Honors institutions that have made significant contributions to environmental and ecological research.",
          "nominees": [
            { "name": "NEST (Nigerian Environmental Study/Action Team)", "state": "Ibadan, Nigeria", "image": "/images/research-development/NEST.png", "achievement": "Conducted research on environmental sustainability and climate change adaptation. Influenced environmental policy and public awareness." },
            { "name": "FRIN (Forestry Research Institute of Nigeria)", "state": "Ibadan, Nigeria", "image": "/images/research-development/FRIN.png", "achievement": "Led research in forest conservation, reforestation, and sustainable forest management. Contributed to the preservation of Nigeria's forest resources." },
            { "name": "NCERD (National Centre for Energy Research and Development)", "state": "Nsukka, Nigeria", "image": "/images/research-development/NCERD.png", "achievement": "Focused on renewable energy research and its environmental impact. Promoted the use of renewable energy sources and reduced environmental degradation." },
            { "name": "Centre for Environmental Studies and Sustainable Development", "state": "Lagos, Nigeria", "image": "/images/research-development/Centre_for_Environmental_Studies_a.png", "achievement": "Advanced research in environmental management and sustainable development practices. Supported the integration of sustainable practices in urban planning." },
            { "name": "Institute of Ecology and Environmental Studies", "state": "Ile-Ife, Nigeria", "image": "/images/research-development/Institute_of_Ecology_and_Environme.png", "achievement": "Conducted extensive research on ecological conservation and environmental management. Enhanced understanding of Nigeria's ecosystems." },
            { "name": "NCF (Nigerian Conservation Foundation)", "state": "Lagos, Nigeria", "image": "/images/research-development/NCF.png", "achievement": "Led efforts in wildlife conservation and environmental education. Protected endangered species and promoted environmental awareness." },
            { "name": "Centre for Climate Change and Freshwater Resources", "state": "Minna, Nigeria", "image": "/images/research-development/Centre_for_Climate_Change_and_Fre.png", "achievement": "Focused on research in climate change impacts and freshwater resource management. Supported sustainable water management practices." },
            { "name": "Centre for Environmental Management and Control", "state": "Nsukka, Nigeria", "image": "/images/research-development/Centre_for_Environmental_Manage.png", "achievement": "Focused on research in climate change impacts and freshwater resource management. Supported sustainable water management practices." },
            { "name": "Department of Environmental Sciences", "state": "Zaria, Nigeria", "image": "/images/research-development/Department_of_Environmental_Scie.png", "achievement": "Specialized in research on environmental hazards and disaster management. Improved disaster preparedness and environmental risk assessment." },
            { "name": "Institute for Environmental Research", "state": "Ibadan, Nigeria", "image": "/images/research-development/Institute_for_Environmental_Researc.png", "achievement": "Conducted research on environmental health and safety, focusing on pollution control and waste management. Enhanced environmental monitoring capabilities." }
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
            { "name": "The Guardian Nigeria", "image": "/images/media/the-guardian.png", "achievement": "Published in-depth analyses and reports on educational reforms and policies in Nigeria. Influenced public discourse on educational..." },
            { "name": "The Punch Newspaper", "image": "/images/media/punch.png", "achievement": "Regularly featured stories on educational innovations and challenges, with a focus on grassroots education. Raised awareness ab..." },
            { "name": "ThisDay Newspaper", "image": "/images/media/thisday.png", "achievement": "Produced special reports on higher education and the state of Nigerian universities. Promoted discussions on improving educ..." },
            { "name": "Vanguard Newspaper", "image": "/images/media/vanguard.png", "achievement": "Focused on the intersection of education and technology, promoting digital literacy. Encouraged integration of technology into N..." },
            { "name": "Daily Trust", "image": "/images/media/daily-trust.png", "achievement": "Highlighted the educational needs of Northern Nigeria, with a focus on girls' education. Advocated for increased access..." },
            { "name": "The Nation Newspaper", "image": "/images/media/the-nation.png", "achievement": "Investigated and reported on funding gaps in the Nigerian education system. Brought attention to the need for increased educatio..." },
            { "name": "Leadership Newspaper", "image": "/images/media/leadership.png", "achievement": "Published thought leadership pieces on education reforms and policy development. Influenced policymakers and stakeholders i..." },
            { "name": "BusinessDay", "image": "/images/media/businessday.png", "achievement": "Explored the economic aspects of education, including funding and investment in education. Promoted the importance of inve..." },
            { "name": "Nigerian Tribune", "image": "/images/media/nigerian-tribune.png", "achievement": "Focused on educational history and heritage, highlighting Nigeria's educational milestones. Fostered a greater appreciatio..." },
            { "name": "Premium Times", "image": "/images/media/times.png", "achievement": "Investigated and exposed corruption in the education sector, advocating for transparency. Played a crucial role in promo..." }
          ]
        },
        {
          "title": "Radio Educational Program Excellence Award",
          "description": "Honors radio stations, TV stations, and broadcasters for impactful educational programs, discussions, and campaigns.",
          "nominees": [
            { "name": "Wazobia FM", "image": "/images/media/wazobia-fm.png", "achievement": "Offered educational content in local languages, making learning accessible to a broader audience. Promoted inclusive educ..." },
            { "name": "Cool FM", "image": "/images/media/cool-fm.png", "achievement": "Aired programs focusing on career guidance and educational advice for youth. Helped young Nigerians make informed decisions a..." },
            { "name": "Radio Nigeria", "image": "/images/media/radio-nigeria.png", "achievement": "Broadcasted educational content aimed at rural communities, covering topics from basic literacy to health education. Bridged t..." },
            { "name": "Rhythm FM", "image": "/images/media/rhythm-fm.png", "achievement": "Hosted educational talk shows and debates on national education issues. Engaged listeners in meaningful discussions on impro..." },
            { "name": "Inspiration FM", "image": "/images/media/inspiration-fm.png", "achievement": "Provided educational news segments that highlighted achievements and challenges in Nigeria's education sector. Kept the pu..." }
          ]
        },
        {
          "title": "Television Educational Content Award",
          "description": "Recognizes television stations for their outstanding educational programming and content.",
          "nominees": [
            { "name": "Channels Television", "image": "/images/media/channels.png", "achievement": "Created educational programs in Pidgin English, making learning accessible to a wider audience. Increased educational cont..." },
            { "name": "NTA (Nigerian Television Authority)", "image": "/images/media/nta.png", "achievement": "Aired programs focusing on career guidance and educational advice for youth. Helped young Nigerians make informed decisions a..." },
            { "name": "AIT (Africa Independent Television)", "image": "/images/media/ait.png", "achievement": "Produced in-depth programs on educational policies, featuring expert analyses and discussions. Provided valuable insights..." },
            { "name": "TVC News", "image": "/images/media/tvc-news.png", "achievement": "Produced regular segments on education policies and their implications for the Nigerian populace. Provided clarity on educ..." },
            { "name": "Wazobia TV", "image": "/images/media/wazobia-fm.png", "achievement": "Offered educational content in local languages, making learning accessible to a broader audience. Promoted inclusive educ..." },
            { "name": "Silverbird Television", "image": "/images/media/silverbird.png", "achievement": "Aired educational documentaries and features on various social issues impacting education. Raised awareness about the soc..." },
            { "name": "Galaxy TV", "image": "/images/media/galaxy-tv.png", "achievement": "Featured educational programs that address national educational challenges and propose solutions. Contributed to the nati..." },
            { "name": "Nigezie TV", "image": "/images/media/nigezie-tv.png", "achievement": "Focused on youth-oriented educational content, including entrepreneurship and vocational training. Provided practical know..." },
            { "name": "EbonyLife TV", "image": "/images/media/ebonylife-tv.png", "achievement": "Produced educational content that addresses contemporary social issues and their impact on education. Raised awareness a..." },
            { "name": "Rave TV", "image": "/images/media/rave-tv.png", "achievement": "Aired innovative educational programs that combine entertainment with learning. Made learning engaging and accessible to..." }
          ]
        },
        {
          "title": "Best Digital Media Educational Advocacy Award",
          "description": "Honors online media platforms for innovative educational content, e-learning initiatives, and digital campaigns.",
          "nominees": [
            { "name": "Sahara Reporters", "image": "/images/media/sahara-reporters.png", "achievement": "Published investigative reports and features on educational reforms and corruption in the education sector. Advocated for transpa..." },
            { "name": "Pulse Nigeria", "image": "/images/media/pulse.png", "achievement": "Developed and shared digital content focused on youth education, career guidance, and personal development. Engaged..." },
            { "name": "BellaNaija", "image": "/images/media/bellanaija.png", "achievement": "Promoted educational stories, scholarship opportunities, and success stories in the Nigerian education sector. Inspired and infor..." },
            { "name": "Naij.com", "image": "/images/media/naij.png", "achievement": "Provided news and features on education, including student success stories and educational challenges. Kept the public info..." },
            { "name": "The Cable", "image": "/images/media/the-cable.png", "achievement": "Focused on in-depth educational journalism, including analyses of education policies and programs. Influenced public opinion and pol..." },
            { "name": "Legit.ng", "image": "/images/media/legit.png", "achievement": "Delivered educational content, including news, tips, and resources for students and educators. Provided valuable information o..." },
            { "name": "YNaija", "image": "/images/media/ynaija.png", "achievement": "Published content aimed at youth education, leadership, and social impact. Engaged young Nigerians in conversations about edu..." },
            { "name": "TechCabal", "image": "/images/media/techcabal.png", "achievement": "Focused on the intersection of technology and education, highlighting innovations and digital learning trends. Promoted the adopti..." },
            { "name": "Nairametrics", "image": "/images/media/nairametrics.png", "achievement": "Hosted discussions and forums on educational topics, allowing for community-driven knowledge sharing. Created a platfo..." },
            { "name": "Edugist", "image": "/images/media/edugist.png", "achievement": "Dedicated to covering educational news, innovations, and developments in Nigeria and across Africa. Became a go-to source f..." }
          ]
        }
      ]
    },
  

    {
      "title": "Overall Best Global Education Excellence Award for Facilitating the Achievement of Education for All in Nigeria (2020-2024)",
      "description": "Honoring international bodies for their impactful cooperative efforts that significantly impact the educational sector.",
      "subCategories": [
        {
          "title": "Best International Embassy Contribution to Education in Nigeria (2020-2024)",
          "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
          "nominees": [
            {
              "name": "United States Embassy",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/United_States_Embassy.png",
              "achievement": "Provided over 1000 scholarships for Nigerian students to study in the U.S. and facilitated educational exchange programs. Significant..."
            },
            {
              "name": "British High Commission",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/British_High_Commission.png",
              "achievement": "Funded literacy and numeracy programs, improving primary school education for thousands of students. Enhanced literacy an..."
            },
            {
              "name": "Canadian High Commission",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/Canadian_High_Commission.png",
              "achievement": "Launched initiatives to promote girls' education and vocational training in rural areas. Empowered girls and marginalized c..."
            },
            {
              "name": "German Embassy",
              "state": "Enugu",
              "country": "Nigeria",
              "image": "/images/global/German_Embassy.png",
              "achievement": "Supported the establishment of TVET programs and funded educational infrastructure in underserved areas. Address..."
            },
            {
              "name": "French Embassy",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/French_Embassy.png",
              "achievement": "Provided resources and training for French language education and partnered with Nigerian universities on research initiatives. ..."
            },
            {
              "name": "Japanese Embassy",
              "state": "Plateau",
              "country": "Nigeria",
              "image": "/images/global/Japanese_Embassy.png",
              "achievement": "Supported science and technology education initiatives and funded educational infrastructure in rural areas. Promoted innov..."
            },
            {
              "name": "Chinese Embassy",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/Chinese_Embassy.png",
              "achievement": "Offered scholarships and training opportunities in various fields, and collaborated on educational technology pro..."
            },
            {
              "name": "Netherlands Embassy",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/Netherlands_Embassy.png",
              "achievement": "Funded water and sanitation projects in schools and supported agricultural education programs for rural youth. Improv..."
            },
            {
              "name": "Indian High Commission",
              "state": "Kebbi",
              "country": "Nigeria",
              "image": "/images/global/Indian_High_Commission.png",
              "achievement": "Offered scholarships and training in IT and engineering, and supported digital literacy and e-learning initiatives. Built technical exp..."
            },
            {
              "name": "South African High Commission",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/South_African_High_Commission.png",
              "achievement": "Promoted regional educational collaborations and sponsored programs focused on youth leadership and entrepren..."
            }
          ]
        },
        {
          "title": "Best Bilateral Organization Education Support Initiative in Nigeria (2020-2024)",
          "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
          "nominees": [
            {
              "name": "USAID (United States Agency for International Development)",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/USAID.png",
              "achievement": "Implemented literacy programs reaching over 500,000 children and supported teacher training workshops. Improved literacy rates..."
            },
            {
              "name": "DFID (Department for International Development)",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/DFID.png",
              "achievement": "Launched programs to improve girls' education and provided funding for school infrastructure. Enhanced educational enviro..."
            },
            {
              "name": "GIZ (German Agency for International Cooperation)",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/GIZ.png",
              "achievement": "Supported vocational training programs and promoted sustainable agriculture education in schools. Equipped youth with employable..."
            },
            {
              "name": "CIDA (Canadian International Development Agency)",
              "state": "Enugu",
              "country": "Nigeria",
              "image": "/images/global/CIDA.png",
              "achievement": "Implemented early childhood education programs and supported initiatives to improve educational access for marginalized..."
            },
            {
              "name": "AFD (French Development Agency)",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/AFD.png",
              "achievement": "Funded educational infrastructure projects and promoted cultural exchange programs in schools. Improved access to quality educ..."
            },
            {
              "name": "Norad (Norwegian Agency for Development Cooperation)",
              "state": "Plateau",
              "country": "Nigeria",
              "image": "/images/global/Norad.png",
              "achievement": "Promoted gender equality and inclusion in education and supported the integration of technology into classrooms. Addressed edu..."
            },
            {
              "name": "JICA (Japan International Cooperation Agency)",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/JICA.png",
              "achievement": "Supported STEM education initiatives and funded educational infrastructure development in schools. Promoted innovati..."
            },
            {
              "name": "Sida (Swedish International Development Cooperation Agency)",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/Sida.png",
              "achievement": "Promoted inclusive education policies and supported digital literacy initiatives in Nigeria. Expanded access to technology and..."
            },
            {
              "name": "AusAID (Australian Agency for International Development)",
              "state": "Kebbi",
              "country": "Nigeria",
              "image": "/images/global/AusAID.png",
              "achievement": "Implemented programs to improve educational access for indigenous communities and supported vocational edu..."
            },
            {
              "name": "KOICA (Korean International Cooperation Agency)",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/KOICA.png",
              "achievement": "Supported IT education initiatives and funded school infrastructure projects to improve learning environments. Enhanced d..."
            }
          ]
        },
        {
          "title": "Best International NGO Education Support Service in Nigeria (2020-2024)",
          "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
          "nominees": [
            {
              "name": "Save the Children International",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/Save_the_Children_International.png",
              "achievement": "Provided educational resources and support in conflict-affected areas, ensuring continued learning for vulnerable children. S..."
            },
            {
              "name": "Plan International",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/Plan_International.png",
              "achievement": "Implemented gender-focused educational programs and advocated for child rights and education access. Empowered girls and ma..."
            },
            {
              "name": "ActionAid",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/ActionAid.png",
              "achievement": "Advocated for inclusive education policies and empowered communities through educational initiatives. Improved education..."
            },
            {
              "name": "World Vision International",
              "state": "Enugu",
              "country": "Nigeria",
              "image": "/images/global/World_Vision_International.png",
              "achievement": "Provided educational services for vulnerable children and integrated health and nutrition programs into schools. Enhanced the well-b..."
            },
            {
              "name": "CARE International",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/CARE_International.png",
              "achievement": "Implemented comprehensive educational programs addressing poverty and access barriers. Improved educational access and r..."
            },
            {
              "name": "Oxfam International",
              "state": "Plateau",
              "country": "Nigeria",
              "image": "/images/global/Oxfam_International.png",
              "achievement": "Advocated for educational equity and developed innovative learning solutions to improve outcomes. Mobilized communities..."
            },
            {
              "name": "Mercy Corps",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/Mercy_Corps.png",
              "achievement": "Implemented youth empowerment programs and supported conflict resolution initiatives in schools. Promoted peace, stabil..."
            },
            {
              "name": "FHI 360",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/FHI_360.png",
              "achievement": "Integrated education and health programs and promoted technology-enhanced learning solutions. Improved student well-b..."
            },
            {
              "name": "Catholic Relief Services (CRS)",
              "state": "Kebbi",
              "country": "Nigeria",
              "image": "/images/global/Catholic_Relief_Services.png",
              "achievement": "Implemented community-based education programs and enhanced disaster resilience in schools. Ensured continued learning and..."
            },
            {
              "name": "IRC (International Rescue Committee)",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/global/IRC.png",
              "achievement": "Provided education in emergencies and promoted protection and inclusion in schools. Supported displaced and refugee c..."
            }
          ]
        },

      
              {
                "title": "Best Educational Grant-Giving Organization in Nigeria (2020-2024)",
                "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                "nominees": [
                  {
                    "name": "Bill and Melinda Gates Foundation",
                    "state": "Lagos",
                    "country": "Nigeria",
                    "image": "/images/global/Bill_and_Melinda_Gates_Foundation.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.'"
                  },
                  {
                    "name": " GPE (Global Partnership for Education.) ",
                    "state": "Lagos",
                    "country": "Nigeria",
                    "image": "/images/global/GPE.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                  },
                  {
                    "name": "Ford Foundation ",
                    "state": "Lagos",
                    "country": "Nigeria",
                    "image": "/images/global/Ford_Foundation.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                  },
                  {
                    "name": "Carnegie Corporation of New York",
                    "state": "Enugu",
                    "country": "Nigeria",
                    "image": "/images/global/Carnegie_Corporation_of_NewYork.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                  },
                  {
                    "name": "Rockefeller Foundation",
                    "state": "Lagos",
                    "country": "Nigeria",
                    "image": "/images/global/Rockefeller_Foundation.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                  },
                  {
                    "name": "MacArthur Foundation",
                    "state": "Plateau",
                    "country": "Nigeria",
                    "image": "/images/global/MacArthur_Foundation.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                  },
                  {
                    "name": "Open Society Foundations",
                    "state": "Lagos",
                    "country": "Nigeria",
                    "image": "/images/global/Open_Society_Foundations.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
                  },
                  {
                    "name": "Hewlett Foundation",
                    "state": "Lagos",
                    "country": "Nigeria",
                    "image": "/images/global/Hewlett_Foundation.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                  },
                  {
                    "name": "Packard Foundation",
                    "state": "Kebbi",
                    "country": "Nigeria",
                    "image": "/images/global/Packard_Foundation.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
                  },
                  {
                    "name": "Kellogg Foundation ",
                    "state": "Lagos",
                    "country": "Nigeria",
                    "image": "/images/global/Kellogg_Foundation.png",
                    "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
                  }
                ]
                
                },
                {
                  "title": "Best International Airline Education Support Initiative in Nigeria (2020-2024)",
                  "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                  "nominees": [
                    {
                      "name": "Emirates Airlines",
                      "state": "Lagos",
                      "country": "Nigeria",
                      "image": "/images/global/Emirates_Airlines.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.'"
                    },
                    {
                      "name": "British Airways",
                      "state": "Lagos",
                      "country": "Nigeria",
                      "image": "/images/global/British_Airways.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                    },
                    {
                      "name": "Qatar Airways",
                      "state": "Lagos",
                      "country": "Nigeria",
                      "image": "/images/global/Qatar_Airways.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                    },
                    {
                      "name": "Turkish Airlines",
                      "state": "Enugu",
                      "country": "Nigeria",
                      "image": "/images/global/Turkish_Airlines.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                    },
                    {
                      "name": "Ethiopian Airlines",
                      "state": "Lagos",
                      "country": "Nigeria",
                      "image": "/images/global/Ethiopian_Airlines.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                    },
                    {
                      "name": "Delta Airlines",
                      "state": "Plateau",
                      "country": "Nigeria",
                      "image": "/images/global/Delta_Airlines.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                    },
                    {
                      "name": "Lufthansa",
                      "state": "Lagos",
                      "country": "Nigeria",
                      "image": "/images/global/Lufthansa.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
                    },
                    {
                      "name": "Air France",
                      "state": "Lagos",
                      "country": "Nigeria",
                      "image": "/images/global/Air_France.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
                    },
                    {
                      "name": "Kenya Airways",
                      "state": "Kebbi",
                      "country": "Nigeria",
                      "image": "/images/global/Kenya_Airways.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
                    },
                    {
                      "name": " KLM Royal Dutch Airlines",
                      "state": "Lagos",
                      "country": "Nigeria",
                      "image": "/images/global/KLM_Royal_Dutch_Airlines.png",
                      "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
                    }
                  ]
                  
                  },
                  {
                    "title": "Best Leadership Training Organization in Nigeria (2020-2024)",
                    "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                    "nominees": [
                      {
                        "name": "Leadership Initiative for Transformation and Empowerment (LITE Africa)",
                        "state": "Lagos",
                        "country": "Nigeria",
                        "image": "/images/global/Leadership_Initiative_for_Transformation_and_Empowerment.png",
                        "achievement": "Provided leadership and civic education training programs for youth and community leaders across Nigeria. Empowered over 20,000 individuals with leadership skills and civic responsibility."
                      },
                      {
                        "name": "African Leadership Academy (ALA)",
                        "state": "Lagos",
                        "country": "Nigeria",
                        "image": "/images/global/African_Leadership_Academy.png",
                        "achievement": "Delivered leadership training and entrepreneurship programs for young Nigerians with high potential. Cultivated a new generation of leaders prepared to drive change in their communities. Year(s) of Contribution: 2020-2024."
                      },
                      {
                        "name": "The Bridge Leadership Foundation",
                        "state": "Lagos",
                        "country": "Nigeria",
                        "image": "/images/global/The_Bridge_Leadership_Foundation.png",
                        "achievement": "Implemented leadership and career development programs for young professionals and students in Nigeria. Enhanced leadership capacity and career readiness for thousands of Nigerian youth."
                      },
                      {
                        "name": "LEAP Africa",
                        "state": "Enugu",
                        "country": "Nigeria",
                        "image": "/images/global/LEAP_Africa.png",
                        "achievement": "Provided leadership training and ethics education for secondary school students and young professionals. Developed ethical leaders with a strong sense of social responsibility."
                      },
                      {
                        "name": "Young African Leaders Initiative (YALI) Nigeria",
                        "state": "Lagos",
                        "country": "Nigeria",
                        "image": "/images/global/Young_African_Leaders_Initiative_Nigeria.png",
                        "achievement": "Offered leadership and professional development training to young Nigerians through various programs and workshops. Trained over 50,000 young leaders, enhancing their leadership skills and civic engagement."
                      },
                      {
                        "name": "Centre for Values in Leadership (CVL)",
                        "state": "Plateau",
                        "country": "Nigeria",
                        "image": "/images/global/Centre_for_Values_in_Leadership.png",
                        "achievement": "Provided leadership development programs focusing on values-based leadership for professionals and public servants. Instilled ethical leadership principles and improved governance practices in Nigeria."
                      },
                      {
                        "name": "Rise Network",
                        "state": "Lagos",
                        "country": "Nigeria",
                        "image": "/images/global/Rise_Network.png",
                        "achievement": "Conducted leadership training, mentorship, and life skills programs for Nigerian youth. Empowered thousands of young Nigerians with leadership and life skills for personal and professional growth."
                      },
                      {
                        "name": "Junior Chamber International (JCI) Nigeria",
                        "state": "Lagos",
                        "country": "Nigeria",
                        "image": "/images/global/Junior_Chamber_International_Nigeria.png",
                        "achievement": "Implemented leadership development programs and community service projects, fostering active citizenship among youth. Developed responsible leaders committed to positive change in their communities."
                      },
                      {
                        "name": "The Tony Elumelu Foundation",
                        "state": "Kebbi",
                        "country": "Nigeria",
                        "image": "/images/global/The_Tony_Elumelu_Foundation.png",
                        "achievement": "Provided leadership and entrepreneurship training for emerging African entrepreneurs, including Nigerians. Empowered over 15,000 young entrepreneurs with the skills to lead and innovate in their businesses."
                      },
                      {
                        "name": "Global Shapers Community Lagos Hub",
                        "state": "Lagos",
                        "country": "Nigeria",
                        "image": "/images/global/Global_Shapers_Community_Lagos_Hub.png",
                        "achievement": "Delivered leadership and community development programs for young Nigerians, focusing on social impact and sustainability. Fostered a network of young leaders dedicated to making a positive impact in society."
                      }
                    ]
                  },
                ]
              },
              {
                "title": "Christian faith organization Educational Champion of the Decade Award",
                "description": "Recognizing Christian faith-based organizations for their outstanding contributions to education advancement.",
                "subCategories": [
                  {
                    "title": "Best Advocacy for Educational Reforms and Awareness Campaigns by a Christian Organization Contribution to Achieving Education for All in Nigeria NESA-Award/Nigeria 2024",
                    "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                    "nominees": [
                      { name: "RCCG (Redeemed Christian Chur)", image: "/images/christain/RCCG.png", achievement: "Led nationwide campaigns for education reform, including initiatives to improve access to education in rural areas. Successfully..." },
                      { name: "Deeper Life Bible Church", image: "/images/christain/Deeper_Life_Bible_Church.png", achievement: "Advocated for educational reforms through community outreach and partnerships with government agencies. Increased community..." },
                      { name: "Living Faith Church Worldwide", image: "/images/christain/Living_Faith_Church_Worldwide.png", achievement: "Through the Education Commission, led efforts to reform educational policies and improve school curricula nationwide. Contri..." },
                      { name: "Christ Embassy", image: "/images/christain/Christ_Embassy.png", achievement: "Conducted awareness campaigns focused on digital education and the integration of technology in schools. Increased adoption o..." },
                      { name: "Catholic Church Nigeria", image: "/images/christain/Catholic_Church_Nigeria.png", achievement: "Led advocacy campaigns for inclusive education and the rights of children with disabilities to receive quality education. Pro..." },
                      { name: "Methodist Church Nigeria", image: "/images/christain/Methodist_Church_Nigeria.png", achievement: "Engaged in campaigns for educational equity and the improvement of public school systems. Enhanced public school infrastr..." },
                      { name: "Anglican Church Nigeria", image: "/images/christain/Anglican_Church_Nigeria.png", achievement: "Advocated for educational reforms, focusing on curriculum development and teacher training programs. Influenced curriculum..." },
                      { name: "The Apostolic Church Nigeria", image: "/images/christain/The_Apostolic_Church_Nigeria.png", achievement: "Launched campaigns for educational access in underserved regions, particularly in the northern states. Increased educational o..." },
                      { name: "Assemblies of God Nigeria", image: "/images/christain/Assemblies_of_God_Nigeria.png", achievement: "Led advocacy for improved educational standards in rural schools, focusing on teacher quality and infrastructure developm..." },
                      { name: "The Lord's Chosen Charismatic", image: "/images/christain/The_Lord's_Chosen_Charismatic.png", achievement: "Promoted campaigns for adult education and literacy, particularly among women and vulnerable groups. Increased literacy rates..." }
                    ]
                  },
                  {
                    "title": "Best Educational Infrastructure Development By A Christian Organization Contribution To Achieving Education For All In Nigeria NESA-Award/Nigeria 2024",
                    "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                    "nominees": [
                      { name: "Living Faith Church Worldwide", image: "/images/christain/Living_Faith_Church_Worldwide.png", achievement: "Established Covenant University, Faith Academy, and multiple secondary schools nationwide. Over 30,000 students benefited..." },
                      { name: "RCCG (Redeemed Christian Chur)", image: "/images/christain/RCCG.png", achievement: "Developed Redeemer's University, several primary and secondary schools across Nigeria, and extensive educational facilities i..." },
                      { name: "Christ Embassy", image: "/images/christain/Christ_Embassy.png", achievement: "Established Loveworld Schools and contributed to the construction of educational centers in underserved commu..." },
                      { name: "Deeper Life Bible Church", image: "/images/christain/Deeper_Life_Bible_Church.png", achievement: "Built Anchor University and multiple primary and secondary schools with modern educational facilities. Over 15,000 students r..." },
                      { name: "Catholic Church Nigeria", image: "/images/christain/Catholic_Church_Nigeria.png", achievement: "Established and renovated numerous schools, including Veritas University and several mission schools across Nigeria. Impr..." },
                      { name: "Methodist Church Nigeria", image: "/images/christain/Methodist_Church_Nigeria.png", achievement: "Developed Methodist High Schools and contributed to the renovation of older mission schools. Enhanced learning environ..." },
                      { name: "Seventh-day Adventist Church Nig,", image: "/images/christain/Seventh-day_Adventist_Church_Nig.png", achievement: "Established Babcock University and several secondary schools, focusing on health education and holistic development. Over 12..." },
                      { name: "Anglican Church Nigeria", image: "/images/christain/Anglican_Church_Nigeria.png", achievement: "Built Ajayi Crowther University and several Anglican-run schools, improving access to quality education. Provided quality educatio..." },
                      { name: "The Apostolic Church Nigeria", image: "/images/christain/The_Apostolic_Church_Nigeria.png", achievement: "Constructed numerous primary and secondary schools, particularly in rural areas. Improved access to education for over 10,0..." },
                      { name: "The Lord's Chosen Charismatic", image: "/images/christain/The_Lord's_Chosen_Charismatic.png", achievement: "Developed educational infrastructure, including schools and vocational training centers, especially in rural areas. Provided e..." }
                    ]
                  },
                  {
                    "title": "Best Scholarship Program by a Christian Organization Contribution to Achieving Education for All in Nigeria NESA-Award/Nigeria 2024",
                    "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                    "nominees": [
                      { name: "Living Faith Church Worldwide", image: "/images/christain/Living_Faith_Church_Worldwide.png", achievement: "Through the David Oyedepo Foundation, awarded scholarships to thousands of students across Africa, including Nigeria. Su..." },
                      { name: "RCCG (Redeemed Christian Chur)", image: "/images/christain/RCCG.png", achievement: "Awarded over 5,000 scholarships annually to students at various educational levels across Nigeria. Enabled access to education for..." },
                      { name: "Christ Embassy", image: "/images/christain/Christ_Embassy.png", achievement: "Established the Loveworld Scholarship Fund, providing financial aid to students in need. Assisted over 1,500 students annually in acc..." },
                      { name: "Deeper Life Bible Church", image: "/images/christain/Deeper_Life_Bible_Church.png", achievement: "Provided scholarships for thousands of students through the Deeper Life Scholarship Scheme, focusing on academic excellence..." },
                      { name: "Catholic Church Nigeria", image: "/images/christain/Catholic_Church_Nigeria.png", achievement: "Provided scholarships through various dioceses, supporting education for thousands of students from marginalized co..." },
                      { name: "Methodist Church Nigeria", image: "/images/christain/Methodist_Church_Nigeria.png", achievement: "Offered scholarships and financial aid programs to students, particularly in rural areas. Over 2,000 students supported annua..." },
                      { name: "Seventh-day Adventist Church Nig,", image: "/images/christain/Seventh-day_Adventist_Church_Nig.png", achievement: "Established Babcock University and several secondary schools, focusing on health education and holistic development. Over 12..." },
                      { name: "Anglican Church Nigeria", image: "/images/christain/Anglican_Church_Nigeria.png", achievement: "Provided scholarships and bursaries to deserving students, ensuring continued education for many who might otherwise dr..." },
                      { name: "The Apostolic Church Nigeria", image: "/images/christain/The_Apostolic_Church_Nigeria.png", achievement: "Implemented scholarship programs for students in primary, secondary, and tertiary institutions, focusing on educational equity..." },
                      { name: "The Lord's Chosen Charismatic", image: "/images/christain/The_Lord's_Chosen_Charismatic.png", achievement: "Offered scholarships and financial support to students across Nigeria, focusing on those in rural areas. Enabled over 1,000 students..." }
                    ]
                  },
                  {
                    "title": "Best Holistic Educational Support By A Christian Organization Contribution To Achieving Education For All In Nigeria NESA-Award/Nigeria 2024",
                    "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                    "nominees": [
                      { name: "Catholic Church Nigeria", image: "/images/christain/Catholic_Church_Nigeria.png", achievement: "Provided holistic education through schools that offer academic, spiritual, and vocational training, along with community health servic..." },
                      { name: "Methodist Church Nigeria", image: "/images/christain/Methodist_Church_Nigeria.png", achievement: "Developed programs that integrate education, vocational training, and community outreach, focusing on holistic d..." },
                      { name: "Anglican Church Nigeria", image: "/images/christain/Anglican_Church_Nigeria.png", achievement: "Implemented programs that combine academic education with life skills, vocational training, and moral instruction. E..." },
                      { name: "Salvation Army Nigeria", image: "/images/christain/Salvation_Army_Nigeria.png", achievement: "Provided education and support services, including health care, vocational training, and disaster relief, particularly in underserve..." },
                      { name: "Nigerian Baptist Convention", image: "/images/christain/Nigerian_Baptist_Convention.png", achievement: "Offered programs that support academic achievement, vocational training, and leadership development, fostering holistic gr..." },
                      { name: "Seventh-day Adventist Church Nig,", image: "/images/christain/Seventh-day_Adventist_Church_Nig.png", achievement: "Delivered holistic education that includes spiritual development, health education, and vocational training, particularly through Bab..." },
                      { name: "Evangelical Church Winning All", image: "/images/christain/Evangelical_Church_Winning_All.png", achievement: "Provided educational and community support programs, including health services, vocational training, and leadership develop..." },
                      { name: "Nigerian Fellowship of Evangelical", image: "/images/christain/Nigerian_Fellowship_of_Evangelical.png", achievement: "Focused on student mentoring, leadership training, and academic support, particularly within tertiary institutions. Assisted over 7,00..." },
                      { name: "Nigeria Christian Graduate Fellowship", image: "/images/christain/Nigeria_Christian_Graduate_Fellowship.png", achievement: "Offered mentoring, vocational training, and community development projects, supporting both academic and personal gr..." },
                      { name: "Living Faith Church Worldwide", image: "/images/christain/Living_Faith_Church_Worldwide.png", achievement: "Through its network of schools and universities, provided holistic education that combines academics with spiritual and mor..." }
                    ]
                  }
                ]
              },
              {
                title: "Islamic faith organization Educational Champion of the Decade Award in Nigeria (2013-2024)",
                description: "Celebrating Islamic faith-based organizations for their crucial role in advancing and diversifying educational opportunities.",
                subCategories: [
                  {
                    title: "Best Educational Infrastructure Development by an Islamic Organization Contribution to Achieving Education for All in Nigeria NESA-Award/Nigeria 2024",
                    description: "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                    nominees: [
                      { name: "NASFAT (Nasrul-Lahi-L-Fatih soci)", image: "/images/islam/NASFAT.png", achievement: "Established several primary and secondary schools across Nigeria, along with modern libraries and ICT centers. Over 20,000 students benefit annually." },
                      { name: "FOMWAN (Federation of Muslim W)", image: "/images/islam/FOMWAN.png", achievement: "Developed schools, particularly in northern Nigeria, focusing on girls' education and providing necessary infrastructure. Enhanced access to education for thousands." },
                      { name: "Ansar-Ud-Deen Society of Nigeria", image: "/images/islam/Ansar-Ud-Deen_Society_of_Nigeria.png", achievement: "Built and renovated numerous schools and Islamic learning centers across the country, with a focus on underserved communities. Provided modern facilities to enhance learning." },
                      { name: "MSSN (Muslim Students Society of)", image: "/images/islam/MSSN.png", achievement: "Constructed educational facilities within universities and secondary schools to support Muslim students' academic and spiritual growth." },
                      { name: "The Muslim Congress (TMC)", image: "/images/islam/The_Muslim_Congress.png", achievement: "Established schools and vocational training centers across Nigeria, particularly in rural areas, focusing on skill development and education." },
                      { name: "Al-Habibiyyah Islamic Society,", image: "/images/islam/Al-Habibiyyah_Islamic_Society.png", achievement: "Developed several educational centers, including schools and Islamic learning institutes, providing both secular and religious education." },
                      { name: "Islamic Education Trust (IET)", image: "/images/islam/Islamic_Education_Trust.png", achievement: "Constructed and equipped modern educational facilities, including science laboratories and libraries, to enhance learning experiences." },
                      { name: "Islamic Society of Nigeria (ISN)", image: "/images/islam/Islamic_Society_of_Nigeria.png", achievement: "Built schools and renovated existing educational facilities, particularly in northern Nigeria, to support quality education. Enhanced infrastructure in underserved areas." },
                      { name: "Al-Furqan Foundation", image: "/images/islam/Al-Furqan_Foundation.png", achievement: "Established schools and educational centers with a focus on integrating Islamic education with modern curricula. Provided educational infrastructure in underserved areas." },
                      { name: "MUSWEN (Muslim Ummah of South)", image: "/images/islam/MUSWEN.png", achievement: "Developed educational facilities across southwestern Nigeria, focusing on improving access to quality Islamic and secular education." }
                    ]
                  },
                  {
                    title: "Best Scholarship Program by an Islamic Organization Contribution to Achieving Education for All in Nigeria NESA-Award/Nigeria 2024",
                    description: "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                    nominees: [
                      { name: "FOMWAN (Federation of Muslim W)", image: "/images/islam/FOMWAN.png", achievement: "Provided scholarships specifically targeting girls and women, promoting female education in northern Nigeria. Over 3,000 girls benefited." },
                      { name: "NASFAT (Nasrul-Lahi-L-Fatih soci)", image: "/images/islam/NASFAT.png", achievement: "Awarded thousands of scholarships annually to students at various educational levels across Nigeria. Supported the education of underprivileged students." },
                      { name: "Ansar-Ud-Deen Society of Nigeria", image: "/images/islam/Ansar-Ud-Deen_Society_of_Nigeria.png", achievement: "Implemented scholarship programs that supported students in secondary and tertiary institutions, particularly in science and technology fields." },
                      { name: "MSSN (Muslim Students Society of)", image: "/images/islam/MSSN.png", achievement: "Provided financial aid and scholarships to Muslim students in tertiary institutions, ensuring continuity in education. Supported thousands of students." },
                      { name: "The Muslim Congress (TMC)", image: "/images/islam/The_Muslim_Congress.png", achievement: "Awarded scholarships to students across Nigeria, with a focus on those pursuing technical and vocational education. Over 2,000 students benefited." },
                      { name: "Al-Habibiyyah Islamic Society,", image: "/images/islam/Al-Habibiyyah_Islamic_Society.png", achievement: "Offered scholarships to orphans and underprivileged students, enabling them to access both Islamic and secular education. Hundreds of students benefited." },
                      { name: "Islamic Education Trust (IET)", image: "/images/islam/Islamic_Education_Trust.png", achievement: "Provided scholarships to students in higher education, particularly in science and technology disciplines. Assisted over 2,000 students." },
                      { name: "Islamic Society of Nigeria (ISN)", image: "/images/islam/Islamic_Society_of_Nigeria.png", achievement: "Implemented a comprehensive scholarship program targeting students from low-income families, ensuring they have access to quality education." },
                      { name: "Al-Furqan Foundation", image: "/images/islam/Al-Furqan_Foundation.png", achievement: "Provided scholarships focused on supporting students in Islamic studies and sciences, bridging religious and modern education. Hundreds of students benefited." },
                      { name: "MUSWEN (Muslim Ummah of South)", image: "/images/islam/MUSWEN.png", achievement: "Offered scholarships and financial support to students, particularly those in tertiary education, across southwestern Nigeria. Supported hundreds of students." }
                    ]
                  },
                  {
                    title: "Best Holistic Educational Support by an Islamic Organization Contribution to Achieving Education for All in Nigeria NESA-Award/Nigeria 2024",
                    description: "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                    nominees: [
                      { name: "NASFAT (Nasrul-Lahi-L-Fatih soci)", image: "/images/islam/NASFAT.png", achievement: "Offered comprehensive educational programs, including academic tutoring, health services, and vocational training. Benefited thousands of students." },
                      { name: "FOMWAN (Federation of Muslim W)", image: "/images/islam/FOMWAN.png", achievement: "Provided holistic support through educational programs, health services, and vocational training, particularly for girls and women in northern Nigeria." },
                      { name: "Ansar-Ud-Deen Society of Nigeria", image: "/images/islam/Ansar-Ud-Deen_Society_of_Nigeria.png", achievement: "Implemented programs that combined academic support with community service, leadership training, and vocational skills development." },
                      { name: "MSSN (Muslim Students Society of)", image: "/images/islam/MSSN.png", achievement: "Provided holistic support for Muslim students in secondary and tertiary institutions, including academic mentoring and community engagement." },
                      { name: "The Muslim Congress (TMC)", image: "/images/islam/The_Muslim_Congress.png", achievement: "Offered comprehensive support through education, vocational training, and community engagement, particularly in rural areas." },
                      { name: "Al-Habibiyyah Islamic Society,", image: "/images/islam/Al-Habibiyyah_Islamic_Society.png", achievement: "Offered a range of support services, including education, health, and vocational training to underprivileged communities. Benefited over 10,000 individuals." },
                      { name: "Islamic Education Trust (IET)", image: "/images/islam/Islamic_Education_Trust.png", achievement: "Implemented holistic educational programs that included academic support, vocational training, and health services, particularly in rural areas." },
                      { name: "Islamic Society of Nigeria (ISN)", image: "/images/islam/Islamic_Society_of_Nigeria.png", achievement: "Offered comprehensive support programs, including educational, health, and community services, to enhance the lives of Muslim communities." },
                      { name: "Al-Furqan Foundation", image: "/images/islam/Al-Furqan_Foundation.png", achievement: "Provided holistic support through integrated educational programs, focusing on academic excellence and personal development." },
                      { name: "MUSWEN (Muslim Ummah of South)", image: "/images/islam/MUSWEN.png", achievement: "Offered comprehensive educational and community support programs, including academic mentoring, vocational training, and health services." }
                    ]
                  },
                  {
                    title: "Best Advocacy for Educational Reforms and Awareness Campaigns by an Islamic Organization Contribution to Achieving Education for All in Nigeria NESA-Award/Nigeria 2024",
                    description: "Recognizes educators and institutions employing innovative teaching methods in STEM education",
                    nominees: [
                      { name: "NASFAT (Nasrul-Lahi-L-Fatih soci)", image: "/images/islam/NASFAT.png", achievement: "Led national campaigns advocating for girls' education and improved educational standards in public schools. Influenced policies at state and national levels." },
                      { name: "FOMWAN (Federation of Muslim W)", image: "/images/islam/FOMWAN.png", achievement: "Spearheaded educational reforms focused on female education and rights, particularly in northern Nigeria. Played a key role in policy-making and awareness." },
                      { name: "Ansar-Ud-Deen Society of Nigeria", image: "/images/islam/Ansar-Ud-Deen_Society_of_Nigeria.png", achievement: "Engaged in advocacy campaigns for educational reforms, focusing on curriculum development and teacher training. Contributed to national education policies." },
                      { name: "MSSN (Muslim Students Society of)", image: "/images/islam/MSSN.png", achievement: "Conducted awareness campaigns on the importance of education and engaged in policy advocacy for student rights and educational reforms." },
                      { name: "The Muslim Congress (TMC)", image: "/images/islam/The_Muslim_Congress.png", achievement: "Led initiatives advocating for educational reforms and the integration of moral and ethical education into school curricula. Contributed to policy changes." },
                      { name: "Al-Habibiyyah Islamic Society,", image: "/images/islam/Al-Habibiyyah_Islamic_Society.png", achievement: "Promoted campaigns for educational equity and access, particularly in marginalized communities. Influenced local policies through advocacy efforts." },
                      { name: "Islamic Education Trust (IET)", image: "/images/islam/Islamic_Education_Trust.png", achievement: "Advocated for the adoption of modern educational practices in Islamic schools across Nigeria. Improved the quality of Islamic education nationwide." },
                      { name: "Islamic Society of Nigeria (ISN)", image: "/images/islam/Islamic_Society_of_Nigeria.png", achievement: "Conducted campaigns focused on educational reforms and the promotion of inclusive education for all. Influenced national education policies." },
                      { name: "Al-Furqan Foundation", image: "/images/islam/Al-Furqan_Foundation.png", achievement: "Led advocacy efforts to promote education in rural areas, focusing on infrastructure development and educational access. Contributed to policy changes." },
                      { name: "MUSWEN (Muslim Ummah of South)", image: "/images/islam/MUSWEN.png", achievement: "Advocated for educational reforms in southwestern Nigeria, focusing on improving public school systems and teacher training programs." }
                    ]
                  }
                ]
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
      "title": "Support for education in STEM in Nigeria 2024",
      "description": "Celebrating initiatives by any organization for creative arts role in education and promoting hands-on learning experiences.",
      "subCategories": [
        {
          "title": "The Best Innovative STEM Curriculum Development in Nigeria",
          "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
          "nominees": [
            {
              "name": "University of Lagos",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/university_of_lagos.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.'"
            },
            {
              "name": " Covenant University",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Covenant_University.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Lagos State Model College",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Lagos_State_Model_College.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Federal Government College Enugu",
              "state": "Enugu",
              "country": "Nigeria",
              "image": "/images/stem/Federal_Government_College_Enugu.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Nigerian Turkish International Coll",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Nigerian_Turkish_International_Coll.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "British International School Lagos",
              "state": "Plateau",
              "country": "Nigeria",
              "image": "/images/stem/British_International_School_Lagos.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "University of Nigeria, Nsukka",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/University_of_Nigeria_Nsukka.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            },
            {
              "name": "STEM Nigeria Initiative",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/STEM_Nigeria_Initiative.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Centre for Mathematics and Science",
              "state": "Kebbi",
              "country": "Nigeria",
              "image": "/images/stem/Centre_for_Mathematics_and_Science.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            },
            {
              "name": "Nigerian Educational Research and ",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Nigerian_Educational_Research.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            }
          ]
        },
        {
          "title": "The Best STEM Outreach and Community Engagement in Nigeria",
          "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
          "nominees": [
            {
              "name": "STEM Café",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/STEM_Café.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.'"
            },
            {
              "name": " Junior Achievement Nigeria ",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Junior_Achievement_Nigeria.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Lagos State Model College",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Lagos_State_Model_College.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Teach for Nigeria",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Teach_for_Nigeria.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Abuja Science and Technology Park",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Abuja_Science_and_Technology_Park.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Yaba College of Technology",
              "state": "Plateau",
              "country": "Nigeria",
              "image": "/images/stem/Yaba_College_of_Technology.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "TechQuest STEM Academy",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/TechQuest_STEM_Academy.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            },
            {
              "name": "Lagos State Ministry of Education",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Lagos_State_Ministry_of_Education.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "SkillNG",
              "state": "Kebbi",
              "country": "Nigeria",
              "image": "/images/stem/SkillNG.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            },
            {
              "name": " Nigerian Society of Engineers ",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Nigerian_Society_of_Engineers.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            },
            {
              "name": " African Science Academy ",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/African_Science_Academy.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            }
          ]
        },
        {
          "title": "The Best Technology Integration in STEM Education in Nigeria",
          "description": "Recognizes educators and institutions employing innovative teaching methods in STEM education",
          "nominees": [
            {
              "name": "American University of Nigeria",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/American_University_of_Nigeria.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community.'"
            },
            {
              "name": " Green Springs School ",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Green_Springs_School.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Obafemi Awolowo University",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Obafemi_Awolowo_University.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "University of Ibadan",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/University_of_Ibadan.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Afe Babalola University",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Afe_Babalola_University.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Bridge International Academies",
              "state": "Plateau",
              "country": "Nigeria",
              "image": "/images/stem/Bridge_International_Academies.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "CodeLagos",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/CodeLagos.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            },
            {
              "name": "Edves",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/Edves.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community'"
            },
            {
              "name": "Andela Learning Community",
              "state": "Kebbi",
              "country": "Nigeria",
              "image": "/images/stem/Andela_Learning_Community.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            },
            {
              "name": "STEM METS Resources ",
              "state": "Lagos",
              "country": "Nigeria",
              "image": "/images/stem/STEM_METS_Resources.png",
              "achievement": "dedication to improving rural education, particularly for girls, demonstrates a significant impact on her community"
            }
          ]
        }

      ]
    }
  ];