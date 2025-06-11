// WhyDonationMatters.jsx
import React from "react";
import Image from "next/image";

const WhyDonationMatters = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl text-1g font-semibold text-center mb-16">Why your donation Matters</h2>
      
      {/* First item - kids education */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/images/whydonate/whydonate1.png" 
              alt="Children learning in an outdoor classroom in Africa" 
              width={600} 
              height={400} 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">
            Helping kids in underdeveloped and war-affected countries in Africa get access to quality education
          </h3>
          <p className="mb-4">
            Every child deserves the chance to learn, dream, and build a better future, but for millions of
            children in underdeveloped and war-affected regions of Africa, quality education is still out
            of reach. Conflict, poverty, and lack of infrastructure continue to rob young minds of the
            opportunities they deserve.
          </p>
          <p className="mb-4">Your donations help change that.</p>
          <p>
            With every contribution, you're not just giving money, you're giving hope. You're helping to
            rebuild schools destroyed by war, providing learning materials, training teachers, and
            supporting safe spaces where children can learn and grow. You're turning classrooms into
            sanctuaries of possibility.
          </p>
        </div>
      </div>
      
      {/* Second item - undergraduates */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/images/whydonate/whydonate2.png" 
              alt="Graduating students in Africa celebrating" 
              width={600} 
              height={400} 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">
            Supporting undergraduates in Africa in getting quality and accessible college education
          </h3>
          <p className="mb-4">
            Many bright young minds across Africa are held back from attending college due to
            financial hardship and limited access to quality education.
          </p>
          <p className="mb-4">Your donation helps break those barriers.</p>
          <p className="mb-4">
            With your support, we provide scholarships, learning resources, and mentorship to
            undergraduates who need it most. Every contribution brings a student closer to their
            dreams — and closer to changing their communities for the better.
          </p>
          <p>Together, we're opening doors to a future full of possibilities.</p>
        </div>
      </div>
      
      {/* Third item - research */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/images/whydonate/whydonate3.png" 
              alt="African student conducting research in a library" 
              width={600} 
              height={400} 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">
            Funding researches that contributes to the improvement of education curriculum and standards in Africa
          </h3>
          <p className="mb-4">
            Improving education in Africa starts with understanding what truly works for our students,
            communities, and future. Unfortunately, research that could transform outdated curricula
            and raise education standards often goes underfunded and overlooked.
          </p>
          <p className="mb-4">Your donation helps bridge that gap.</p>
          <p>
            By supporting locally-led research, you're empowering educators and scholars to develop
            solutions that reflect the real needs of African students. You're helping shape curriculums
            that are relevant, inclusive, and future-focused.
          </p>


          
        </div>
        
      </div>


      <section className="mt-16 text-center">
        <hr />
        <p className="text-lg  mt-8">
          <b className="pb-6">Donate to NESA-Africa 2025</b> <br></br>
 Fuel Africa’s Education Transformation Movement 
Every contribution you make supports scholarships, school projects, media campaigns, and awards that recognize the heroes of education across Africa. NESA-Africa 2025 is more than an event—it’s a call to action for equity, excellence, and empowerment in education.
 Why Donate? 
1.  Empower Future Leaders 
Your donation helps provide visibility, recognition, and funding to teachers, innovators, and changemakers driving educational impact in Africa.
2.  Support Scholarships & CSR Projects 
NESA-Africa partners with EduAid-Africa to deliver scholarships, renovate schools, and train educators in underserved communities.
3.  Amplify Education Advocacy 
We broadcast across the continent through NESA TV and “It’s In Me Radio” to tell the stories of Africa’s education champions. Your donation fuels our media platforms.
4.  Sponsor Youth Participation & Events 
Your giving enables free access for students and young educators to attend our expos, panels, and workshops during the NESA-Africa Week.
5.  Be Recognized as a Change Agent 
Donors receive social media spotlights, digital badges, and VIP recognition at the NESA Gala Awards. Institutional donors are featured on our donor wall.
 Ways to Give 
You can donate in  any currency . All funds are processed through the  GFA Wallet , and automatically converted to  Afri-Gold Coins (AGC) .
Payment MethodDescription Paystack Cards/Bank Transfers – Global Fairsure Smart Contracts & API Gateway Bancable Digital Banking – Institutional Zelle / TapTap Send Diaspora Transfers in USD, GBP, EUR Direct Wallet Transfer To your NESA/GFA wallet address
 Conversion Rate:  1 USD = 10 AGC (Afri-Gold Coin) GFA uses a pegged rate of  ₦1,800/USD  – GFA retains the difference for project reinvestment and platform sustainability.
 Your Donation Comes with Bonuses 
*  Earn Afri-Gold Coin (AGC)  in your GFA Wallet
* Use AGC to vote during NESA Awards
* Redeem discounts on NESA merchandise
* Get discounted or free access to NESA Events
* Receive updates on how your funds are used
Donate Categories
* One-time or recurring personal gift
* Donate on behalf of a loved one
* Institutional/Corporate donation
* Educational CSR partnership
* Faith-based or diaspora group giving
Partner With Us
Want to create a  custom donation campaign , sponsor a scholarship, or support a local NESA Chapter?
Email:  donate@nesa.africa 
Donate Now
Click here to Make Your Donation All donations are tracked in your GFA Wallet for transparency.
 Together, let’s raise Africa’s education heroes. 
 ReplyReply to allForward 
Add reaction
nesa.africa@gmail.com


        </p>
        </section>
    </section>
  );
};

export default WhyDonationMatters;