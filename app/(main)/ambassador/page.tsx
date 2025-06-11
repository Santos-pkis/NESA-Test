"use client"
import React from "react";
import Button from "@/components/Common/Button";
import { useRouter } from "next/navigation";

const AmbassadorPage = () => {
    const router = useRouter();

    const handleApplyClick = () => {
        router.push("/apply-ambassador");
    };

    return (
        <div className="pt-20 px-6">
            <div className="flex flex-row justify-between">
            <b className="my-4">Ambassador Program</b>
            <Button onClick={handleApplyClick} text="Apply now" variant="success" className="my-4">
                Apply as Ambassador
            </Button>
            </div>
            <p>
                The Ambassador Program is designed to empower individuals who are passionate about education and want to make a difference in their communities. As an ambassador, you will have the opportunity to represent our organization, promote our mission, and engage with your local community.🌍 Join as an Ambassador – NESA-Africa 2025
Contribute your skills to achieving Education for All across Africa.

Become part of a powerful movement transforming education in Africa. As a NESA-Africa 2025 Ambassador, you are not just a representative — you are a changemaker. Whether you're in Africa or the diaspora, your voice and effort can help drive continental impact through community engagement, advocacy, project promotion, and digital campaigns.

🎯 Why Join?
Promote education equity and inclusion

Represent your country, city, or institution in the NESA movement

Gain recognition, experience, and global exposure

Join high-impact teams working towards Africa’s Education Agenda 2030

🏅 3 Tiers of NESA-Africa Ambassadors
Tier	Description	One-Time Admin Fee	Annual Membership Dues	Key Benefits
Ambassador-1	Local Chapter Project Ambassador (e.g., EduAid/NESA)	$10	$50/year	Recognition, Project Access, Digital Certificate
Ambassador-2	Country/Regional Representative across both EduAid & NESA	$20	$80/year	Priority Participation, SCEF Badge, Chapter Leadership Eligibility
Ambassador-3	Global or Multi-Project Strategic Ambassador	$50	$200/year	Full Representation Rights, Official ID, Invitation to SCEF Board/Chapter Advisory Teams
💡 All tiers are open to professionals, media advocates, educators, students (18+), and volunteers worldwide.

💼 Duties of an Ambassador
Represent NESA-Africa 2025 and SCEF in your locality or diaspora network

Promote nominations, scholarships, fundraising, and EduAid projects

Host or support local chapter activities, online campaigns, and awareness sessions

Engage communities, institutions, and media to amplify our message

Submit monthly ambassador updates and referrals via the dashboard

Participate in periodic trainings, webinars, and meetings

💸 Benefits of Becoming an Ambassador
Digital Recognition Certificate

NESA Africa 2025 Ambassador ID Card

Access to training, international mentorship, and webinars

Up to 10–20% referral/commission on funds raised or partners you introduce

Media features on NESA TV & “It’s In Me” Radio

Opportunity to earn allowances during major campaigns

Discounted access to NESA-Africa events, merchandise, and courses

Eligible for leadership or chapter appointment roles in your region

🤝 Global & Diaspora Integration
Ambassadors can serve through:

Local Chapters across Africa

Online Country Networks in the diaspora

Sector-Focused Missions (Media, EduTech, Policy, Gender, Environment, etc.)

SCEF recognizes and mobilizes diaspora support via:

In-kind contributions (equipment, platforms, time)

Skills volunteering (e.g., designers, developers, advisors)

Financial contributions or donor engagement

📩 How to Register
Choose your Ambassador Tier (1, 2, or 3)

Pay a one-time administrative fee via the GFA Wallet:

Amb-1: $10 | Amb-2: $20 | Amb-3: $50

Complete your ambassador profile and select your chapter of affiliation

Pay annual dues ($50, $80, or $200 respectively)

Begin your ambassador journey with NESA-Africa 2025!

Ready to make your mark?

👉 Visit www.nesa.africa/ambassador
📧 Contact: ambassador@santoscreations.org
💳 Payments via: GFA Wallet (www.getfinance.africa)




            </p>

        </div>
    );
};

export default AmbassadorPage;